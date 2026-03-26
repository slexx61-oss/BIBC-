import {Link} from 'react-router-dom';
{ /* */}
function Navbar() {
  return (
   
    <nav className ="navbar" >
       { /*Navigation container that holds logo + links */}
      <div className = "nav-links">
        <img src ="" alt="Church Logo"/>
        <Link to="/">Home</Link> 
        <Link to="/about">About</Link> 
        <Link to="/services">Services</Link> 
        <Link to="/contact">Contact</Link> 
       <button> <Link to="/give">Give</Link> </button>
        </div>
    </nav>
  );
}

export default Navbar;