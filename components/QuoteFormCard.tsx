'use client';

import { useState } from 'react';
import type { FormEvent } from 'react';

export default function QuoteFormCard() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');
  const [message, setMessage] = useState('');

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus('sending');
    setMessage('');

    const form = event.currentTarget;
    const formData = new FormData(form);
    formData.set('source', 'quote-card');

    try {
      const response = await fetch('/api/leads', { method: 'POST', body: formData });
      const data = await response.json().catch(() => ({}));
      if (!response.ok || !data.ok) throw new Error(data.error || 'Lead submission failed');
      setStatus('sent');
      setMessage(data.delivered ? 'Your request was sent. National Epoxy Pros will review it and follow up.' : 'Your request was accepted. Email delivery needs RESEND_API_KEY in Vercel.');
      form.reset();
    } catch (error) {
      setStatus('error');
      setMessage(error instanceof Error ? error.message : 'Could not submit request.');
    }
  }

  return (
    <div className="quote-card">
      <h3>Request a Free Bid</h3>
      <form className="mini-form" onSubmit={onSubmit}>
        <input required name="name" placeholder="Name" />
        <input required name="phone" placeholder="Phone" />
        <input required name="email" type="email" placeholder="Email" />
        <select required name="projectType">
          <option value="">Project Type</option>
          <option>Garage Floor</option>
          <option>Metallic Epoxy</option>
          <option>Commercial Floor</option>
          <option>Exterior Coating</option>
        </select>
        <button className="btn primary" disabled={status === 'sending'} type="submit">
          {status === 'sending' ? 'Sending...' : 'Submit My Free Digital Bid'}
        </button>
        {message && <div className={status === 'error' ? 'success error' : 'success'}>{message}</div>}
      </form>
    </div>
  );
}
