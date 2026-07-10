'use client';

import { useState } from 'react';
import { PROJECT_TYPES } from '@/lib/site';

export default function QuoteFormCard() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="quote-card">
        <h3 className="quote-card-title">Thank You!</h3>
        <p className="quote-card-subtitle">
          Your quote request has been received. One of our flooring experts will
          contact you within 24 hours.
        </p>
        <button
          className="quote-form-submit"
          onClick={() => setSubmitted(false)}
        >
          Submit Another Request
        </button>
      </div>
    );
  }

  return (
    <div className="quote-card">
      <h3 className="quote-card-title">GET YOUR FREE QUOTE</h3>
      <p className="quote-card-subtitle">
        Fast, no-obligation pricing from local epoxy pros.
      </p>
      <form className="quote-form" onSubmit={handleSubmit}>
        <div className="quote-form-group">
          <label htmlFor="qf-name">Full Name</label>
          <input id="qf-name" type="text" name="name" required placeholder="John Smith" />
        </div>
        <div className="quote-form-group">
          <label htmlFor="qf-email">Email Address</label>
          <input id="qf-email" type="email" name="email" required placeholder="john@email.com" />
        </div>
        <div className="quote-form-group">
          <label htmlFor="qf-phone">Phone Number</label>
          <input id="qf-phone" type="tel" name="phone" required placeholder="(555) 123-4567" />
        </div>
        <div className="quote-form-group">
          <label htmlFor="qf-type">Project Type</label>
          <select id="qf-type" name="projectType" required defaultValue="">
            <option value="" disabled>
              Select a project type
            </option>
            {PROJECT_TYPES.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>
        <div className="quote-form-group">
          <label htmlFor="qf-zip">Zip Code</label>
          <input id="qf-zip" type="text" name="zip" required placeholder="33069" />
        </div>
        <div className="quote-form-group">
          <label htmlFor="qf-message">Tell us about your project</label>
          <textarea
            id="qf-message"
            name="message"
            rows={4}
            placeholder="Briefly describe your project, square footage, timeline, etc."
          />
        </div>
        <button type="submit" className="quote-form-submit">
          GET FREE QUOTE
        </button>
        <p className="quote-form-privacy">
          Your information is private and secure. We never share your data with third
          parties. By submitting, you agree to be contacted about your project.
        </p>
      </form>
    </div>
  );
}
