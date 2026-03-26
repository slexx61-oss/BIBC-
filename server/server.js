// Import express 
import express from "express";

//Import nodemailer (Used to send emails)
import nodemailer from "nodemailer";

//Import CORS so frontend can talk to backend 
import cors from "cors";

//Create an express app 
const app = express();

//Middleware
//Allow requests from different origins (React + Express)
app.use(cors());
// Allows server to read JSON data from requests
app.use(express.json());

//Create transporter (connects backened to Gmail)
const transporter = nodemailer.createTransport({
    //E-mail service provider 
    service:"gmail",

    //Authentication details 
    auth:{
        user:"s.lexx61@gmail.com",
        pass:"rqszzqmojzblqmon"
    }
});

//Test route to confirm server is running 
app.get("/", (req,res) => {
    res.send("Server is running");
});

//CONTACT ROUTE 
//Route that handles contact form submissions
app.post("/contact",async (req, res) => {
    //Extract data from front end 
    const {name, email, message} = req.body;

    try {
        //Send email using nodemailer 
        await transporter.sendMail ({
            //Sender email (user input)
            from: email,
            //Receiver email (church inbox)
            to:"s.lexx61@gmail.com",
            //Allows you to reply directly to the user
            replyTo:email,
            //Email subject
            subject: `New message from ${name}`,
            //Email body 
            text: `
            Name: ${name}
            Email: ${email}
            Message:
            ${message}
            `
        });
   
   //Send success response back to React 
      res.json({success:true});
    }

    catch(error) {
        //Log error in server terminal 
        console.error ("Email error", error);
        //Send failure response
        res.status(500).json({success:false});
    }
    

});


//START SERVER
//Start backend server on port 5000
app.listen(5000, () => {
    console.log("Server running on port 5000");
});