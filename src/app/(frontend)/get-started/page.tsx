'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { trackLead } from '@/lib/analytics';
import {
  ENQUIRY_LIMITS, PHONE_LIMIT, PROJECT_FOCUS_OPTIONS, enquiryContextFromSearch, isAcceptedEnquiry,
  type EnquirySource, type ProjectFocus,
} from '@/lib/enquiry-context';

export default function GetStartedPage() {
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState('');
  const [projectFocus, setProjectFocus] = useState<ProjectFocus | ''>('');
  const [enquirySource, setEnquirySource] = useState<EnquirySource>();
  const submitting = useRef(false);
  const focusEdited = useRef(false);

  useEffect(() => {
    const context = enquiryContextFromSearch(window.location.search);
    if (!focusEdited.current) setProjectFocus(current => current || context.project_focus || '');
    setEnquirySource(context.enquiry_source);
  }, []);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (submitting.current || submitted) return;
    submitting.current = true;
    setSending(true);
    setError('');

    const form = e.currentTarget;
    const data = {
      first_name: (form.elements.namedItem('first_name') as HTMLInputElement).value,
      last_name: (form.elements.namedItem('last_name') as HTMLInputElement).value,
      email: (form.elements.namedItem('email') as HTMLInputElement).value,
      phone: (form.elements.namedItem('phone') as HTMLInputElement).value,
      company: (form.elements.namedItem('company') as HTMLInputElement).value,
      role: (form.elements.namedItem('role') as HTMLSelectElement).value,
      message: (form.elements.namedItem('message') as HTMLTextAreaElement).value,
      project_focus: projectFocus || undefined,
      enquiry_source: enquirySource,
    };

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      const result = await res.json();
      if (isAcceptedEnquiry(res.ok, result)) {
        setSubmitted(true);
        trackLead({ project_focus: projectFocus || undefined, enquiry_source: enquirySource });
      } else {
        setError('Something went wrong. Please email us directly at support@mynzocarbon.com.');
      }
    } catch {
      setError('Something went wrong. Please email us directly at support@mynzocarbon.com.');
    } finally {
      submitting.current = false;
      setSending(false);
    }
  }

  return (
    <div style={{ display: 'flex', flex: 1, alignItems: 'flex-start', justifyContent: 'center', background: 'linear-gradient(160deg,#f0f7f9 0%,#e8f4f7 40%,#f5fafb 100%)', padding: '108px 24px 80px' }}>
      <div className="form-card">
        {!submitted ? (
          <>
            <div className="form-accent"></div>
            <h1 className="form-title">Get Started with Mynzo</h1>
          <p className="form-sub">Tell us where your sites are, what records you have and what you need to measure.</p>

            <form onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="first_name">First Name</label>
                  <input id="first_name" name="first_name" type="text" placeholder="Priya" maxLength={ENQUIRY_LIMITS.first_name} required />
                </div>
                <div className="form-group">
                  <label htmlFor="last_name">Last Name</label>
                  <input id="last_name" name="last_name" type="text" placeholder="Sharma" maxLength={ENQUIRY_LIMITS.last_name} required />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="email">Work Email</label>
                <input id="email" name="email" type="email" placeholder="priya@company.com" maxLength={ENQUIRY_LIMITS.email} required />
              </div>

              <div className="form-group">
                <label htmlFor="phone" className="label-optional-row"><span>Contact Number</span><span className="optional-tag">Optional</span></label>
                <input id="phone" name="phone" type="tel" placeholder="+91 98765 43210" maxLength={PHONE_LIMIT} />
              </div>

              <div className="form-group">
                <label htmlFor="company">Company / Organisation</label>
                <input id="company" name="company" type="text" placeholder="GreenEarth Corp" maxLength={ENQUIRY_LIMITS.company} required />
              </div>

              <div className="form-group">
                <label htmlFor="role">Your Role</label>
                <select id="role" name="role" required defaultValue="">
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
                <label htmlFor="project_focus" className="label-optional-row"><span>Project focus</span><span className="optional-tag">Optional</span></label>
                <select id="project_focus" name="project_focus" value={projectFocus} onChange={event => {
                  focusEdited.current = true;
                  setProjectFocus(event.target.value as ProjectFocus | '');
                }}>
                  <option value="">Select a project focus</option>
                  {PROJECT_FOCUS_OPTIONS.map(option => <option key={option.value} value={option.value}>{option.label}</option>)}
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="message">What are you looking to achieve?</label>
                <textarea id="message" name="message" maxLength={ENQUIRY_LIMITS.message} placeholder="For example: site location, area, habitat type and what you need to measure."></textarea>
              </div>

              {error && (
                <p style={{ color: '#c0392b', fontSize: '13px', marginBottom: '12px', lineHeight: 1.5 }}>{error}</p>
              )}

              <button type="submit" className="submit-btn" disabled={sending}>
                {sending ? (
                  <span>Sending…</span>
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
              <a href="mailto:admin@mynzocarbon.com">admin@mynzocarbon.com</a>
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
