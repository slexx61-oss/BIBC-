/* About — Windows 2000 style */

function About() {
  return (
    <div>

      {/* Page title bar */}
      <div className="page-titlebar" role="heading" aria-level="1">
        <span className="page-titlebar-icon" aria-hidden="true">
          {/* info icon */}
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <circle cx="8" cy="8" r="7" fill="#000080" stroke="#fff" strokeWidth="0.5"/>
            <text x="8" y="12" textAnchor="middle" fontSize="10" fill="#fff" fontFamily="Tahoma" fontWeight="700">i</text>
          </svg>
        </span>
        About BIBC
      </div>

      {/* About intro */}
      <section className="groupbox" aria-labelledby="about-intro">
        <span className="groupbox-label" id="about-intro">About Us</span>
        <p>
          BIBC was founded with a heart to serve God and love people. Our desire is to create
          a welcoming space where individuals and families can grow in faith, build meaningful
          relationships, and experience community.
        </p>
      </section>

      {/* Mission & Values */}
      <section className="groupbox" aria-labelledby="mission-heading">
        <span className="groupbox-label" id="mission-heading">Mission &amp; Values</span>

        <p style={{ marginBottom: 10 }}>
          To share the love of Christ, grow in faith, and serve our community with compassion.
        </p>

        <div className="inset-box">
          <table className="win-table" aria-label="Core values">
            <thead>
              <tr>
                <th>#</th>
                <th>Value</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td><strong>Faith</strong></td>
                <td>Trusting God in every season of life</td>
              </tr>
              <tr>
                <td>2</td>
                <td><strong>Community</strong></td>
                <td>Building genuine, lasting relationships</td>
              </tr>
              <tr>
                <td>3</td>
                <td><strong>Service</strong></td>
                <td>Giving back to those around us</td>
              </tr>
              <tr>
                <td>4</td>
                <td><strong>Growth</strong></td>
                <td>Continually maturing in spirit and character</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Leadership */}
      <section className="groupbox" aria-labelledby="leadership-heading">
        <span className="groupbox-label" id="leadership-heading">Our Leadership</span>
        <div className="leadership-card">
          <div className="leadership-avatar" aria-hidden="true">
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
              <circle cx="20" cy="20" r="20" fill="#d4d0c8"/>
              <circle cx="20" cy="15" r="7" fill="#808080"/>
              <ellipse cx="20" cy="34" rx="13" ry="8" fill="#808080"/>
              <circle cx="20" cy="15" r="6" fill="#c8c5be"/>
              <ellipse cx="20" cy="33" rx="12" ry="7" fill="#c8c5be"/>
            </svg>
          </div>
          <div>
            <div style={{ fontWeight: 700, fontSize: 12 }}>Pastor Ikechukwu Maduka</div>
            <div style={{ fontSize: 10, fontStyle: 'italic', marginBottom: 6, color: '#404040' }}>Senior Pastor</div>
            <p>
              Pastor Ike is passionate about teaching the Word of God, building strong community,
              and helping people grow in their faith. With a heart of service and leadership, he
              guides the church with integrity, compassion, and vision.
            </p>
          </div>
        </div>
      </section>

    </div>
  );
}

export default About;
