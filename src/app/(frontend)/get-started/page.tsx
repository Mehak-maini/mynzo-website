import Link from 'next/link';

export default function GetStartedPage() {
  return (
    <div style={{ display: 'flex', flex: 1, alignItems: 'flex-start', justifyContent: 'center', background: 'linear-gradient(160deg,#f0f7f9 0%,#e8f4f7 40%,#f5fafb 100%)', padding: '108px 24px 80px' }}>
      <div className="form-card">
        <div className="form-accent"></div>
        <h1 className="form-title">Get Started with Mynzo</h1>
        <p className="form-sub">Tell us about your project and we will get back to you within 24 hours.</p>

        <form action="https://formsubmit.co/support@mynzocarbon.com" method="POST">
          <input type="hidden" name="_subject" value="New Mynzo Get Started Request" />
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_template" value="table" />
          <input type="hidden" name="_next" value="https://mynzocarbon.com/thank-you" />
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

          <button type="submit" className="submit-btn">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="22" y1="2" x2="11" y2="13"></line>
              <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
            </svg>
            Send Request
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
      </div>
    </div>
  );
}
