import { Link } from 'react-router-dom';
import heroImg from '../assets/hero.jpg';

/* ── tiny inline SVG icons ── */
const SunIcon = () => (
  <svg className="schedule-icon" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <circle cx="8" cy="8" r="4" fill="#f5c04a" stroke="#cc8800" strokeWidth="1.2"/>
    <line x1="8" y1="1" x2="8" y2="3" stroke="#cc8800" strokeWidth="1.2" strokeLinecap="round"/>
    <line x1="8" y1="13" x2="8" y2="15" stroke="#cc8800" strokeWidth="1.2" strokeLinecap="round"/>
    <line x1="1" y1="8" x2="3" y2="8" stroke="#cc8800" strokeWidth="1.2" strokeLinecap="round"/>
    <line x1="13" y1="8" x2="15" y2="8" stroke="#cc8800" strokeWidth="1.2" strokeLinecap="round"/>
  </svg>
);

const BookIcon = () => (
  <svg className="schedule-icon" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <rect x="2" y="2" width="10" height="13" rx="1" fill="#fff" stroke="#000080" strokeWidth="1.2"/>
    <line x1="5" y1="6" x2="10" y2="6" stroke="#000080" strokeWidth="1"/>
    <line x1="5" y1="9" x2="10" y2="9" stroke="#000080" strokeWidth="1"/>
    <line x1="5" y1="12" x2="8"  y2="12" stroke="#000080" strokeWidth="1"/>
    <rect x="12" y="3" width="2" height="11" rx="0.5" fill="#000080"/>
  </svg>
);

const MapIcon = () => (
  <svg className="schedule-icon" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M8 2C5.8 2 4 3.8 4 6c0 3 4 8 4 8s4-5 4-8c0-2.2-1.8-4-4-4z" fill="#f5c04a" stroke="#cc8800" strokeWidth="1.2"/>
    <circle cx="8" cy="6" r="1.5" fill="#cc5500"/>
  </svg>
);

function Home() {
  return (
    <div>

      {/* ── Hero "window" ── */}
      <div className="hero-window" role="region" aria-label="Welcome banner">
        <div className="hero-titlebar">
          <span className="hero-titlebar-left">
            <span className="hero-titlebar-icon" aria-hidden="true"></span>
            Welcome — BIBC Community Church
          </span>
          <span className="hero-titlebar-controls" aria-hidden="true">
            <button className="titlebar-btn" tabIndex={-1} aria-label="Minimize">_</button>
            <button className="titlebar-btn" tabIndex={-1} aria-label="Maximize">□</button>
            <button className="titlebar-btn" tabIndex={-1} aria-label="Close">✕</button>
          </span>
        </div>
        <div className="hero-body">
          <img src={heroImg} alt="BIBC Church congregation" />
          <div className="hero-overlay">
            <h1>Welcome to BIBC</h1>
            <h3>A Place of Intimacy</h3>
            <Link to="/about" className="win-btn win-btn-primary">About Us</Link>
          </div>
        </div>
        {/* status bar */}
        <div className="statusbar" aria-hidden="true">
          <span className="statusbar-pane">Ready</span>
          <span className="statusbar-pane" style={{ maxWidth: 220 }}>Houston, TX 77082</span>
        </div>
      </div>

      {/* ── Worship Schedule GroupBox ── */}
      <section className="groupbox" aria-labelledby="worship-heading">
        <span className="groupbox-label" id="worship-heading">Worship with Us</span>

        <div className="inset-box">
          <ul className="schedule-list">
            <li>
              <SunIcon />
              <span><strong>SUNDAYS</strong> — Worship Service @ 10:00 AM (In-Person)</span>
            </li>
            <li>
              <BookIcon />
              <span><strong>WEDNESDAYS</strong> — Bible Study @ 8:00 PM (Online)</span>
            </li>
            <li>
              <MapIcon />
              <span><strong>Location:</strong> 4010 South Highway 6, Suite D — Houston, TX 77082</span>
            </li>
          </ul>
        </div>

        {/* decorative "attendance" progress bar */}
        <div style={{ marginTop: 10 }}>
          <div style={{ fontSize: 10, marginBottom: 3 }}>Community Growth</div>
          <div className="win-progress" role="progressbar" aria-valuenow={65} aria-valuemin={0} aria-valuemax={100} aria-label="Community growth 65%">
            <div className="win-progress-fill">65%</div>
          </div>
        </div>
      </section>

      {/* ── Connect GroupBox ── */}
      <section className="groupbox" aria-labelledby="connect-heading">
        <span className="groupbox-label" id="connect-heading">Connect with Us</span>
        <p style={{ marginBottom: 10 }}>
          Have questions or want to learn more? Feel free to reach out and connect with us.
        </p>
        <Link to="/contact" className="win-btn">Contact Us</Link>
      </section>

    </div>
  );
}

export default Home;
