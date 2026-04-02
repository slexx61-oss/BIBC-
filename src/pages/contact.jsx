// Importing useState hook from React
// useState allows us to store and update data inside the component
import { useState } from "react";

// Contact component
function Contact() {

  // -----------------------------
  // STATE VARIABLES
  // -----------------------------

  // Stores the value typed into the Name input field
  const [name, setName] = useState("");

  // Stores the value typed into the Email input field
  const [email, setEmail] = useState("");

  // Stores the value typed into the Message textarea
  const [message, setMessage] = useState("");

  // Tracks whether the form has been successfully submitted
  // Used for conditional rendering of the success message
  const [submitted, setSubmitted] = useState(false);

  //Tracks if request is still in progress
  const [loading, setLoading] = useState(false);

  //Stores error message
  const [error, setError] = useState("");


  // -----------------------------
  // EVENT HANDLER
  // -----------------------------

  // This function runs when the form is submitted
  async function handleSubmit(e) {

    // Prevents the default browser behavior (page refresh)
    e.preventDefault();

    //Reset error before new request 
    setError("");

    //Set loading to true
    setLoading(true);

    //Create object containing form data
    const formData = {
      name, 
      email,
      message
    };

    try {
      //Send POST request to backend server 
      const response = await fetch ("https://bibc-backend.onrender.com/contact",{

        //HTTP method
        method: "POST",
        //Tell server we are sending JSON
        headers:{
          "Content-Type": "application/json"
        },

        //Convert JS object to JSON string
        body: JSON.stringify(formData)
      });
 
      //Const server response into JS object
      const data = await response.json();

      //If server confirms success 
      if (data.success){
        //Show confirmation message
        setSubmitted(true);
        //Clear form inputs
        setName("");
        setEmail ("");
        setMessage ("");
        
      }
    }

      catch (error){
        //If something fails, print error 
        console.error("Error sending form", error);
        //Show error message to user
        setError("Something went wrong. Please try again.");
      }
      finally{
        //Always stop loading wheher on success or error
        setLoading (false);
      }

    }


  // -----------------------------
  // JSX (UI STRUCTURE)
  // -----------------------------

  return (
    <>
      {/* Intro Section */}
      <section>
        <h1>Contact Us</h1>

        <p>
          We’d love to hear from you. Whether you have questions,
          need prayer, or want to learn more about our church,
          feel free to reach out using the form below.
        </p>

        {/* Conditional Rendering:
            This message only appears if submitted === true */}
        {submitted && (
          <p className = "form-success">
            Thank you. Your message has been received.
          </p>
        )}
      </section>


      {/* Form Section */}
      <section>

        {/* onSubmit triggers handleSubmit function */}
        <form className="contact-form" onSubmit={handleSubmit}>

          {/* Name Field */}
          <div>
            <label>Name</label>
            <input
              type="text"

              // Controlled input:
              // value is linked to state
              value={name}

              // Updates state every time user types
              onChange={(e) => setName(e.target.value)}

              required
            />
          </div>


          {/* Email Field */}
          <div>
            <label>Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>


          {/* Message Field */}
          <div>
            <label>Message</label>
            <textarea
              rows="2"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
          </div>


          {/* Submit Button */}
          <button type="submit" className="primary-btn" disabled ={loading}>
            {/* Show dynamic text based on loading */}
            {loading ? "Sending..." : "Send message"}
          </button>

        </form>

        {error && <p className = "form-error">error</p>}
      </section>
    </>
  );
}

export default Contact;