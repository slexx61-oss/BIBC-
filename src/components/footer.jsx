import { useState, useEffect } from 'react';

function Footer() {
  const [time, setTime] = useState('');

  useEffect(() => {
    const tick = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })
      );
    };
    tick();
    const id = setInterval(tick, 10000);
    return () => clearInterval(id);
  }, []);

  return (
    <footer className="footer" role="contentinfo">
      {/* Fake "Start" button */}
      <div className="footer-start-btn" aria-hidden="true">
        <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true">
          <rect width="7" height="7" fill="#f25022"/>
          <rect x="9" width="7" height="7" fill="#7fba00"/>
          <rect y="9" width="7" height="7" fill="#00a4ef"/>
          <rect x="9" y="9" width="7" height="7" fill="#ffb900"/>
        </svg>
        Start
      </div>

      {/* Church info */}
      <div style={{ textAlign: 'center', fontSize: 10 }}>
        <strong>BIBC</strong> — A Place of Intimacy &nbsp;|&nbsp; 4010 S. Hwy 6, Suite D, Houston TX 77082
      </div>

      {/* Copyright + clock */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
        <span style={{ fontSize: 10 }}>© BIBC. All rights reserved.</span>
        <div className="footer-clock" aria-label={`Current time: ${time}`}>{time}</div>
      </div>
    </footer>
  );
}

export default Footer;
