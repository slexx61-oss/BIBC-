import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar" role="navigation" aria-label="Main navigation">
      <div className="navbar-inner">
        {/* Title-bar brand strip */}
        <span className="navbar-brand">BIBC</span>

        {/* Menu-bar links */}
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/services">Services</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/give" className="nav-give-btn">💛 Give</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
