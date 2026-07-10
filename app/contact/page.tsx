'use client';
import { useState } from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const HERO = 'https://base44.app/api/apps/6a3a1cc6fda8cc665dd22ea4/files/mp/public/6a3a1cc6fda8cc665dd22ea4/f50a9af63_hero-main.png';

const FAQS = [
  { q: 'How fast will I get a response?', a: 'Most inquiries receive a response within 24 hours. For urgent requests, call us directly at (877) 958-6408.' },
  { q: 'Do you provide free quotes?', a: 'Yes! All quotes are 100% free and no-obligation. Use our Digital Bid tool for the fastest, most accurate quote.' },
  { q: 'What information should I include in my message?', a: 'Include your project type (garage, patio, commercial, etc.), approximate square footage, location, and any specific finish preferences.' },
  { q: 'Do you service my area?', a: 'We have 70+ locations nationwide. Enter your zip code in the form and our team will confirm local availability.' },
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem('name') as HTMLInputElement)?.value,
      email: (form.elements.namedItem('email') as HTMLInputElement)?.value,
      phone: (form.elements.namedItem('phone') as HTMLInputElement)?.value,
      projectType: (form.elements.namedItem('projectType') as HTMLSelectElement)?.value,
      zipCode: (form.elements.namedItem('location') as HTMLInputElement)?.value,
      message: (form.elements.namedItem('message') as HTMLTextAreaElement)?.value,
      source: 'contact-page',
    };
    try { await fetch('/api/leads', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(data) }); } catch {}
    setLoading(false); setSubmitted(true);
  }

  return (
    <>
      <Header />
      <section className="hero" style={{ minHeight: 580 }}>
        <div className="hero-bg" style={{ backgroundImage: `url(${HERO})` }} />
        <div className="hero-overlay" />
        <div className="hero-inner">
          <div className="hero-left">
            <span className="eyebrow">Contact</span>
            <h1 className="hero-h1">
              <span className="line-white">LET&apos;S BUILD</span>
              <span className="line-gold">SOMETHING BETTER.</span>
            </h1>
            <p className="hero-copy">Have questions, ready to start a project, or want a fast quote? Our team is here to help.</p>
            <ul className="hero-checks">
              <li>Fast responses — most same day</li>
              <li>Expert guidance for your project</li>
              <li>Free quotes with no obligation</li>
            </ul>
            <div style={{ marginTop: '1.5rem', display: 'flex', flexDirection: 'column', gap: '.75rem' }}>
              <a href="tel:+18779586408" style={{ display: 'flex', alignItems: 'center', gap: '.75rem', color: '#fff', fontSize: '.9rem' }}>
                <div style={{ width: 36, height: 36, borderRadius: '50%', background: 'rgba(212,160,23,.15)', border: '1px solid rgba(212,160,23,.3)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>📞</div>
                (877) 958-6408
              </a>
              <a href="mailto:support@nationalepoxypros.com" style={{ display: 'flex', alignItems: 'center', gap: '.75rem', color: '#fff', fontSize: '.9rem' }}>
                <div style={{ width: 36, height: 36, borderRadius: '50%', background: 'rgba(212,160,23,.15)', border: '1px solid rgba(212,160,23,.3)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>✉</div>
                support@nationalepoxypros.com
              </a>
            </div>
          </div>

          {/* CONTACT FORM */}
          <div className="quote-card" style={{ minWidth: 400 }}>
            {submitted ? (
              <div style={{ textAlign: 'center', padding: '2rem 0' }}>
                <div style={{ fontSize: '3rem', color: '#D4A017', marginBottom: '1rem' }}>✓</div>
                <h3>Message Sent!</h3>
                <p style={{ color: '#666', fontSize: '.88rem', marginTop: '.5rem' }}>Our team will respond within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <h3 style={{ marginBottom: '1.25rem' }}>Send Us a Message</h3>
                <div className="form-grid-2">
                  <div className="form-field"><label>Full Name*</label><input name="name" required placeholder="Your name" /></div>
                  <div className="form-field"><label>Email Address*</label><input name="email" type="email" required placeholder="name@email.com" /></div>
                  <div className="form-field"><label>Phone Number*</label><input name="phone" type="tel" required placeholder="(000) 000-0000" /></div>
                  <div className="form-field">
                    <label>Project Type*</label>
                    <select name="projectType">
                      <option>Select type</option>
                      <option>Garage Floor</option>
                      <option>Patio / Driveway</option>
                      <option>Commercial</option>
                      <option>Metallic Epoxy</option>
                      <option>Other</option>
                    </select>
                  </div>
                </div>
                <div className="form-field"><label>Project Location (City, State or ZIP)*</label><input name="location" required placeholder="Your city, state or zip" /></div>
                <div className="form-field"><label>Tell us about your project*</label><textarea name="message" required placeholder="Square footage, current floor condition, finish preferences..." style={{ minHeight: 90 }} /></div>
                <button type="submit" className="form-submit" disabled={loading}>{loading ? 'Sending...' : 'Get Free Quote'}</button>
                <p className="form-privacy">🔒 Your information is secure and never shared.</p>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* WAYS WE CAN HELP */}
      <section className="section section-dark">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Ways We <span className="gold">Can Help</span></h2>
          </div>
          <div className="ways-grid">
            {[
              { icon: '📞', title: 'Call Us', sub: '(877) 958-6408', link: 'tel:+18779586408', linkLabel: 'Call Now' },
              { icon: '✉', title: 'Email Us', sub: 'support@nationalepoxypros.com', link: 'mailto:support@nationalepoxypros.com', linkLabel: 'Send Email' },
              { icon: '📋', title: 'Get a Quote', sub: 'Fast, free, no-obligation', link: '/free-digital-bid', linkLabel: 'Start Your Quote →' },
              { icon: '💬', title: 'Live Chat', sub: 'Chat with our team live', link: '#', linkLabel: 'Chat Now →' },
              { icon: '📍', title: 'Find a Location', sub: '70+ locations nationwide', link: '/service-areas', linkLabel: 'Find Location →' },
              { icon: '📅', title: 'Schedule a Call', sub: 'Pick a time that works for you', link: '/free-digital-bid', linkLabel: 'Schedule Now →' },
            ].map(w => (
              <div key={w.title} className="way-card">
                <div className="way-icon">{w.icon}</div>
                <div className="way-title">{w.title}</div>
                <div className="way-sub">{w.sub}</div>
                <Link href={w.link} className="way-link">{w.linkLabel}</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LOCATION + HOURS */}
      <section className="section section-black">
        <div className="container">
          <div className="split">
            <div>
              <h2 className="section-title">We&apos;re Here <span className="gold">For You</span></h2>
              <div style={{ marginTop: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {[
                  ['📍', 'Corporate Office', '2200 NW 32nd St #700, Pompano Beach, FL 33069'],
                  ['📞', 'Phone', '(877) 958-6408'],
                  ['✉', 'Email', 'support@nationalepoxypros.com'],
                  ['🕐', 'Hours', 'Mon–Fri: 7am–7pm | Sat: 8am–4pm | Sun: Closed'],
                  ['📍', 'Service Area', '70+ Locations Nationwide'],
                ].map(([icon, label, val]) => (
                  <div key={label as string} style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                    <div style={{ width: 36, height: 36, borderRadius: '50%', background: 'rgba(212,160,23,.12)', border: '1px solid rgba(212,160,23,.25)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>{icon}</div>
                    <div>
                      <div style={{ color: '#D4A017', fontSize: '.72rem', fontWeight: 800, letterSpacing: '.06em', textTransform: 'uppercase', marginBottom: '.15rem' }}>{label}</div>
                      <div style={{ color: '#ccc', fontSize: '.88rem' }}>{val}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <div style={{ background: 'rgba(212,160,23,.06)', border: '1px solid rgba(212,160,23,.2)', borderRadius: 12, padding: '2rem' }}>
                <h3 style={{ color: '#fff', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '.07em', marginBottom: '.5rem', fontSize: '.9rem' }}>Find a Location Near You</h3>
                <p style={{ color: '#888', fontSize: '.85rem', marginBottom: '1.25rem' }}>Enter your zip code to find the nearest National Epoxy Pros professional.</p>
                <div style={{ display: 'flex', gap: '.75rem' }}>
                  <input placeholder="Enter zip code" style={{ flex: 1, padding: '.75rem 1rem', background: '#111', border: '1.5px solid #333', borderRadius: 6, color: '#fff', fontSize: '.9rem' }} />
                  <button style={{ background: 'linear-gradient(180deg,#E5B431,#B8860B)', color: '#0A0A0A', fontWeight: 900, fontSize: '.78rem', letterSpacing: '.06em', textTransform: 'uppercase', padding: '.75rem 1.25rem', border: 'none', borderRadius: 6, cursor: 'pointer', whiteSpace: 'nowrap' }}>Find Location</button>
                </div>
                <div style={{ marginTop: '1.5rem', background: '#111', borderRadius: 8, height: 180, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#555', fontSize: '.8rem', border: '1px solid #222' }}>
                  🗺 Map — 70+ Locations Nationwide
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section section-dark">
        <div className="container" style={{ maxWidth: 800, margin: '0 auto' }}>
          <div className="section-header">
            <h2 className="section-title">Frequently Asked <span className="gold">Questions</span></h2>
          </div>
          <div>
            {FAQS.map((faq, i) => (
              <div key={i} className={`faq-item${openFaq === i ? ' open' : ''}`}>
                <button className="faq-q" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                  {faq.q}
                  <span className="faq-chevron">▼</span>
                </button>
                <div className="faq-a">{faq.a}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <div className="cta-banner">
        <div className="cta-banner-inner">
          <div className="cta-shield">🛡</div>
          <h2>Ready to Transform Your Space?</h2>
          <p>Get a free, no-obligation quote from your local epoxy flooring experts.</p>
          <div className="cta-row" style={{ justifyContent: 'center' }}>
            <Link href="/free-digital-bid" className="btn btn-gold">Get Your Free Quote</Link>
            <a href="tel:+18779586408" className="btn btn-outline">(877) 958-6408</a>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
