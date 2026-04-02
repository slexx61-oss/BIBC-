import { useState } from 'react';

function Contact() {
  const [name,      setName]      = useState('');
  const [email,     setEmail]     = useState('');
  const [message,   setMessage]   = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading,   setLoading]   = useState(false);
  const [error,     setError]     = useState('');

  async function handleSubmit(e) {
    e.preventDefault();
    setError('');
    setLoading(true);

    const formData = { name, email, message };

    try {
      const response = await fetch('https://bibc-backend.onrender.com/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      if (data.success) {
        setSubmitted(true);
        setName('');
        setEmail('');
        setMessage('');
      }
    } catch (err) {
      console.error('Error sending form', err);
      setError('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <div>

      {/* Page title bar */}
      <div className="page-titlebar" role="heading" aria-level="1">
        <span className="page-titlebar-icon" aria-hidden="true">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <rect x="1" y="3" width="14" height="10" rx="1" fill="#d4d0c8" stroke="#808080" strokeWidth="1"/>
            <polyline points="1,3 8,9 15,3" stroke="#000080" strokeWidth="1.2" fill="none"/>
          </svg>
        </span>
        Contact Us
      </div>

      {/* Intro */}
      <section className="groupbox" aria-labelledby="contact-intro">
        <span className="groupbox-label" id="contact-intro">Get in Touch</span>
        <p>
          We&apos;d love to hear from you. Whether you have questions, need prayer, or want to
          learn more about our church, feel free to reach out using the form below.
        </p>
      </section>

      {/* Success dialog */}
      {submitted && (
        <div className="win-dialog" role="status" aria-live="polite">
          <div className="win-dialog-titlebar">
            <span>Message Sent</span>
            <button
              className="titlebar-btn"
              onClick={() => setSubmitted(false)}
              aria-label="Close success message"
            >✕</button>
          </div>
          <div className="win-dialog-body">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true" style={{ flexShrink: 0 }}>
              <circle cx="16" cy="16" r="14" fill="#000080"/>
              <polyline points="9,16 14,21 23,11" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <p>Thank you, <strong>{name || 'friend'}</strong>. Your message has been received.</p>
          </div>
          <div className="win-dialog-footer">
            <button className="win-btn" onClick={() => setSubmitted(false)}>OK</button>
          </div>
        </div>
      )}

      {/* Form */}
      <section className="groupbox" aria-labelledby="form-heading">
        <span className="groupbox-label" id="form-heading">New Message</span>

        <form className="win-form" onSubmit={handleSubmit} noValidate>

          <div className="win-field">
            <label className="win-label" htmlFor="contact-name">Name:</label>
            <input
              id="contact-name"
              className="win-input"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              autoComplete="name"
            />
          </div>

          <div className="win-field">
            <label className="win-label" htmlFor="contact-email">Email:</label>
            <input
              id="contact-email"
              className="win-input"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              autoComplete="email"
            />
          </div>

          <div className="win-field win-field--column">
            <label className="win-label" htmlFor="contact-message">Message:</label>
            <textarea
              id="contact-message"
              className="win-input win-textarea"
              rows={5}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
          </div>

          {error && (
            <p className="win-error" role="alert">{error}</p>
          )}

          <div className="win-form-actions">
            <button
              type="submit"
              className="win-btn win-btn-primary"
              disabled={loading}
            >
              {loading ? 'Sending…' : 'Send Message'}
            </button>
            <button
              type="reset"
              className="win-btn"
              onClick={() => { setName(''); setEmail(''); setMessage(''); setError(''); }}
            >
              Clear
            </button>
          </div>

        </form>
      </section>

    </div>
  );
}

export default Contact;
