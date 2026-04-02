/* Services — Windows 2000 style */

const CheckIcon = () => (
  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true" style={{ flexShrink: 0 }}>
    <rect width="12" height="12" rx="1" fill="#000080"/>
    <polyline points="2,6 5,9 10,3" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

function Services() {
  return (
    <div>

      {/* Page title bar */}
      <div className="page-titlebar" role="heading" aria-level="1">
        <span className="page-titlebar-icon" aria-hidden="true">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <rect x="1" y="3" width="14" height="10" rx="1" fill="#d4d0c8" stroke="#808080" strokeWidth="1"/>
            <rect x="3" y="5" width="10" height="1.5" rx="0.5" fill="#000080"/>
            <rect x="3" y="8" width="7"  height="1.5" rx="0.5" fill="#000080"/>
          </svg>
        </span>
        Our Services
      </div>

      {/* Weekly Services */}
      <section className="groupbox" aria-labelledby="weekly-heading">
        <span className="groupbox-label" id="weekly-heading">Weekly Services</span>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>

          {/* Sunday */}
          <div className="inset-box">
            <div style={{ fontWeight: 700, marginBottom: 4, color: '#000080' }}>Sunday Worship</div>
            <div style={{ fontSize: 10, marginBottom: 6, color: '#404040' }}>Sundays @ 10:00 AM — In-Person</div>
            <p>
              A welcoming worship experience with teaching, prayer, and music
              for individuals and families.
            </p>
          </div>

          {/* Wednesday */}
          <div className="inset-box">
            <div style={{ fontWeight: 700, marginBottom: 4, color: '#000080' }}>Midweek Prayer</div>
            <div style={{ fontSize: 10, marginBottom: 6, color: '#404040' }}>Wednesdays @ 8:00 PM — Online</div>
            <p>
              A dedicated time of prayer and encouragement to strengthen
              faith during the week.
            </p>
          </div>
        </div>
      </section>

      {/* Ministries */}
      <section className="groupbox" aria-labelledby="ministries-heading">
        <span className="groupbox-label" id="ministries-heading">Our Ministries</span>
        <ul className="win-checklist" aria-label="Ministry programs">
          <li><CheckIcon /> Bible Study</li>
          <li><CheckIcon /> Community Outreach</li>
        </ul>
      </section>

      {/* What to Expect */}
      <section className="groupbox" aria-labelledby="expect-heading">
        <span className="groupbox-label" id="expect-heading">What to Expect</span>
        <ul className="win-checklist" aria-label="What visitors can expect">
          <li><CheckIcon /> A welcoming and friendly environment</li>
          <li><CheckIcon /> Services typically last about 90 minutes</li>
          <li><CheckIcon /> A place for individuals and families</li>
        </ul>
      </section>

    </div>
  );
}

export default Services;
