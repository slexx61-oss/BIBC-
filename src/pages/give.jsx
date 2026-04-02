/* Give — Windows 2000 style */

const BulletIcon = () => (
  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true" style={{ flexShrink: 0 }}>
    <circle cx="6" cy="6" r="5" fill="#000080" stroke="#7090c0" strokeWidth="0.8"/>
    <circle cx="6" cy="6" r="2.5" fill="#fff"/>
  </svg>
);

function Give() {
  return (
    <div>

      {/* Page title bar */}
      <div className="page-titlebar" role="heading" aria-level="1">
        <span className="page-titlebar-icon" aria-hidden="true">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <circle cx="8" cy="8" r="7" fill="#f5c04a" stroke="#cc8800" strokeWidth="1"/>
            <text x="8" y="12" textAnchor="middle" fontSize="9" fill="#7a4a00" fontFamily="Tahoma" fontWeight="700">$</text>
          </svg>
        </span>
        Give
      </div>

      {/* Intro */}
      <section className="groupbox" aria-labelledby="give-intro">
        <span className="groupbox-label" id="give-intro">About Giving</span>
        <p>
          Your generosity helps us continue our mission of spreading the Gospel, serving
          the community, and supporting ministries that impact lives.
        </p>
      </section>

      {/* Why We Give */}
      <section className="groupbox" aria-labelledby="why-heading">
        <span className="groupbox-label" id="why-heading">Why We Give</span>
        <ul className="win-checklist" aria-label="Reasons for giving">
          <li><BulletIcon /> To support the work of the church</li>
          <li><BulletIcon /> To serve our local community</li>
          <li><BulletIcon /> To fund outreach and ministry programs</li>
          <li><BulletIcon /> To invest in future growth and impact</li>
        </ul>
      </section>

      {/* Online Giving */}
      <section className="groupbox" aria-labelledby="online-giving-heading">
        <span className="groupbox-label" id="online-giving-heading">Online Giving</span>

        <p style={{ marginBottom: 10 }}>
          Online giving will be available soon. We are currently working on providing a
          secure and convenient way for members to give.
        </p>

        {/* "Coming soon" inset — like a disabled dialog box */}
        <div className="inset-box" style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 10 }}>
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true" style={{ flexShrink: 0 }}>
            <circle cx="16" cy="16" r="14" fill="#f5c04a" stroke="#cc8800" strokeWidth="1.5"/>
            <text x="16" y="21" textAnchor="middle" fontSize="16" fill="#7a4a00" fontFamily="Tahoma" fontWeight="700">!</text>
          </svg>
          <span style={{ fontSize: 11 }}>
            <strong>Coming Soon</strong> — Online giving is not yet available. Check back later or contact us for other ways to give.
          </span>
        </div>

        <button className="win-btn" disabled aria-disabled="true" style={{ opacity: 0.6, cursor: 'not-allowed' }}>
          Give Online (Coming Soon)
        </button>
      </section>

    </div>
  );
}

export default Give;
