'use client';
import { useState } from 'react';

export default function QuoteFormCard({ title = 'Get Your Free Quote', showSteps = false }: { title?: string; showSteps?: boolean }) {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem('name') as HTMLInputElement)?.value,
      email: (form.elements.namedItem('email') as HTMLInputElement)?.value,
      phone: (form.elements.namedItem('phone') as HTMLInputElement)?.value,
      projectType: (form.elements.namedItem('projectType') as HTMLSelectElement)?.value,
      zipCode: (form.elements.namedItem('zipCode') as HTMLInputElement)?.value,
      message: (form.elements.namedItem('message') as HTMLTextAreaElement)?.value || '',
      source: 'quote-card',
    };
    try {
      await fetch('/api/leads', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(data) });
    } catch {}
    setLoading(false);
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="quote-card" style={{textAlign:'center',padding:'2.5rem 1.75rem'}}>
        <div style={{fontSize:'2.5rem',color:'#D4A017',marginBottom:'1rem'}}>✓</div>
        <h3>Quote Request Sent!</h3>
        <p style={{color:'#666',fontSize:'.88rem',marginTop:'.5rem'}}>Our team will contact you within 24 hours with your free custom quote.</p>
      </div>
    );
  }

  return (
    <div className="quote-card">
      <h3>{title}</h3>
      {showSteps && <p className="step-label">Step 1 of 7 — Contact &amp; Project Info</p>}
      <form onSubmit={handleSubmit}>
        <div className="form-field">
          <label htmlFor="qf-name">Full Name</label>
          <input id="qf-name" name="name" type="text" placeholder="Your full name" required />
        </div>
        <div className="form-field">
          <label htmlFor="qf-email">Email Address</label>
          <input id="qf-email" name="email" type="email" placeholder="name@email.com" required />
        </div>
        <div className="form-field">
          <label htmlFor="qf-phone">Phone Number</label>
          <input id="qf-phone" name="phone" type="tel" placeholder="(000) 123-4567" />
        </div>
        <div className="form-field">
          <label htmlFor="qf-type">Project Type</label>
          <select id="qf-type" name="projectType">
            <option value="">Select project type</option>
            <option>Garage Floor</option>
            <option>Patio / Driveway</option>
            <option>Commercial Space</option>
            <option>Basement Floor</option>
            <option>Metallic Epoxy</option>
            <option>Polished Concrete</option>
            <option>Other</option>
          </select>
        </div>
        <div className="form-field">
          <label htmlFor="qf-zip">Zip Code</label>
          <input id="qf-zip" name="zipCode" type="text" placeholder="Enter zip code" />
        </div>
        <div className="form-field">
          <label htmlFor="qf-msg">Tell us about your project</label>
          <textarea id="qf-msg" name="message" placeholder="Type your message here..." />
        </div>
        <button type="submit" className="form-submit" disabled={loading}>
          {loading ? 'Sending...' : 'Get Free Quote'}
        </button>
        <p className="form-privacy">🔒 Your information is secure and never shared.</p>
      </form>
      {showSteps && (
        <div className="step-dots">
          {[1,2,3,4,5,6,7].map(n => (
            <div key={n} className={`step-dot${n===1?' active':''}`}>{n}</div>
          ))}
        </div>
      )}
    </div>
  );
}
