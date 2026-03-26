import { Link } from "react-router-dom";
import Services from "./services.jsx";

function Home() {
  return (
    <div>
      <section className ="hero">
      <div className ="hero-overlay">
        <h1> Welcome to BIBC</h1>
        <h3>
           A place of intimacy
        </h3>
        <button className="primary-btn">
           <Link to ="/about" className="secondary-btn">About Us</Link>
        </button>
      </div>
      </section>

      <section>
      <h2>Worship with Us</h2>
      <ul>
        <li><strong>SUNDAYS</strong> - Worship Service @10:00am(In-Person)</li>
        <li><strong>WEDNESDAYS</strong> - Bible Study @8pm (Online)</li>
      </ul>
      <p>
        <strong>Location 📍 </strong> <br />
        4010 South Highway 6, Suite D
        Houston, TX 77082
      </p>

      </section>

      <section className ="connect-session">
        <h2>Connect with Us</h2>
        <p>Have questions or want to learn more? <br />
          Feel free to reach out to connect with us </p>
          <button className ="secondary-btn" >
            <Link to ="/contact" className="secondary-btn">Contact Us</Link>
          </button>
      </section>
      
    </div>
  );
}
export default Home;
