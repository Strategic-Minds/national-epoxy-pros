'use client';

import { useState } from 'react';
import type { FormEvent } from 'react';

const steps = ['Contact Info', 'Project Location', 'Project Type', 'Floor Condition', 'Measurements', 'Photos / Inspiration', 'Review + Submit'];

export default function DigitalBidForm() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');
  const [message, setMessage] = useState('');

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus('sending');
    setMessage('');

    const form = event.currentTarget;
    const formData = new FormData(form);
    formData.set('source', 'digital-bid');

    try {
      const response = await fetch('/api/leads', { method: 'POST', body: formData });
      const data = await response.json().catch(() => ({}));
      if (!response.ok || !data.ok) throw new Error(data.error || 'Digital bid submission failed');
      setStatus('sent');
      setMessage(data.delivered ? 'Your digital bid request was sent. National Epoxy Pros will review it and follow up.' : 'Your request was accepted. Email delivery needs RESEND_API_KEY in Vercel.');
      form.reset();
    } catch (error) {
      setStatus('error');
      setMessage(error instanceof Error ? error.message : 'Could not submit digital bid.');
    }
  }

  return (
    <form className="bid-form" onSubmit={onSubmit}>
      <div className="grid-4">
        {steps.map((step, index) => (
          <div className="process-card" key={step}>
            <div className="card-body"><span className="tag">Step {index + 1}</span><h3>{step}</h3></div>
          </div>
        ))}
      </div>
      <div className="form-grid">
        <label>Name<input required name="name" /></label>
        <label>Phone<input required name="phone" /></label>
        <label>Email<input required type="email" name="email" /></label>
        <label>Project address / service area<input required name="address" /></label>
        <label>Project type<select required name="projectType"><option value="">Choose one</option><option>Flake garage floor</option><option>Metallic epoxy</option><option>Polished concrete</option><option>Exterior coating</option><option>Commercial epoxy</option></select></label>
        <label>Approx. square footage<input name="sqft" placeholder="Example: 650 sq ft" /></label>
        <label>Current floor condition<select name="condition"><option>Clean bare concrete</option><option>Cracks or spalling</option><option>Existing coating</option><option>Oil / stains</option><option>Moisture concern</option><option>Not sure</option></select></label>
        <label>Timeline<select name="timeline"><option>ASAP</option><option>1-2 weeks</option><option>30 days</option><option>Planning ahead</option></select></label>
        <label>Upload project photos<input name="photos" type="file" multiple /></label>
        <label>Upload inspiration image<input name="inspiration" type="file" /></label>
      </div>
      <label className="check"><input required type="checkbox" name="consent" value="yes" /> I agree to be contacted about this project. If SMS is used, message/data rates may apply and consent is not a condition of purchase.</label>
      <label>Project notes<textarea name="notes" rows={5} /></label>
      <button className="btn primary" disabled={status === 'sending'} type="submit">
        {status === 'sending' ? 'Sending...' : 'Submit My Free Digital Bid'}
      </button>
      {message && <div className={status === 'error' ? 'success error' : 'success'}>{message}</div>}
    </form>
  );
}
