'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function GetStartedPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError(false);
    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch('https://formsubmit.co/ajax/support@mynzocarbon.com', {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: data,
      });
      const json = await res.json();
      if (json.success === 'true' || json.success === true) {
        setSubmitted(true);
      } else {
        setError(true);
      }
    } catch (_) {
      setError(true);
    }
    setLoading(false);
  }

  return (
    <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'center', background: 'linear-gradient(160deg,#f0f7f9 0%,#e8f4f7 40%,#f5fafb 100%)', padding: '108px 24px 80px', minHeight: '100%', flex: 1 }}>
      <div className="form-card">
        {!submitted ? (
          <>
            <div className="form-accent"></div>
            <h1 className="form-title">Get Started with Mynzo</h1>
            <p className="form-sub">Tell us about your project and we will get back to you within 24 hours.</p>

            <form onSubmit={handleSubmit}>
              <input type="hidden" name="_subject" value="New Mynzo Get Started Request" />
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_template" value="table" />
              <input type="text" name="_honey" style={{ display: 'none' }} />

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="first_name">First Name</label>
                  <input id="first_name" name="first_name" type="text" placeholder="Priya" required />
                </div>
                <div className="form-group">
                  <label htmlFor="last_name">Last Name</label>
                  <input id="last_name" name="last_name" type="text" placeholder="Sharma" required />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="email">Work Email</label>
                <input id="email" name="email" type="email" placeholder="priya@company.com" required />
              </div>

              <div className="form-group">
                <label htmlFor="company">Company / Organisation</label>
                <input id="company" name="company" type="text" placeholder="GreenEarth Corp" required />
              </div>

              <div className="form-group">
                <label htmlFor="role">Your Role</label>
                <select id="role" name="role" required>
                  <option value="" disabled>Select your role</option>
                  <option>Corporate Sustainability Lead</option>
                  <option>Project Developer</option>
                  <option>Government / Institution</option>
                  <option>Investor / Fund Manager</option>
                  <option>Researcher / Academic</option>
                  <option>Other</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="message">What are you looking to achieve?</label>
                <textarea id="message" name="message" placeholder="Brief description of your project or goals…"></textarea>
              </div>

              {error && (
                <p style={{ color: '#c0392b', fontSize: '13px', marginBottom: '12px' }}>
                  Something went wrong. Please try again or email us directly at support@mynzocarbon.com.
                </p>
              )}

              <button type="submit" className="submit-btn" disabled={loading}>
                {loading ? (
                  <span style={{ opacity: 0.8 }}>Sending…</span>
                ) : (
                  <>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="22" y1="2" x2="11" y2="13"></line>
                      <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                    </svg>
                    Send Request
                  </>
                )}
              </button>
            </form>

            <div className="contact-row">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
              <a href="mailto:support@mynzocarbon.com">support@mynzocarbon.com</a>
            </div>

            <p className="legal-line">
              By submitting, you agree to our{' '}
              <Link href="/privacy-policy">Privacy Policy</Link>
              {' '}and{' '}
              <Link href="/terms-of-use">Terms of Use</Link>.
            </p>
          </>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', gap: '20px', padding: '40px 0' }}>
            <div style={{ width: '72px', height: '72px', borderRadius: '50%', background: 'linear-gradient(135deg,#598493,#92d3e1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
            </div>
            <h2 style={{ fontFamily: 'var(--font-nunito)', fontSize: '26px', fontWeight: 700, color: '#101828' }}>Request sent!</h2>
            <p style={{ fontSize: '16px', color: '#4a5565', maxWidth: '320px', lineHeight: 1.6 }}>Thank you! Our team will reach out to you at your email address within 24 hours.</p>
            <Link href="/" style={{ marginTop: '8px', color: '#598493', textDecoration: 'underline', fontSize: '14px' }}>← Back to Home</Link>
          </div>
        )}
      </div>
    </div>
  );
}
