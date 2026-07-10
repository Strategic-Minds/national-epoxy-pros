'use client';

import { useState } from 'react';
import { NAV_LINKS, TRUST_BAR_ITEMS, CDN, SITE } from '@/lib/site';

function TrustBarIcon({ name }: { name: string }) {
  const icons: Record<string, React.ReactNode> = {
    clock: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
    pin: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
    shield: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    star: (
      <svg viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="1">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
    award: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="8" r="7" />
        <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
      </svg>
    ),
  };
  return <>{icons[name] || icons.star}</>;
}

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      {/* Trust Bar */}
      <div className="trust-bar">
        <div className="trust-bar-inner">
          {TRUST_BAR_ITEMS.map((item, i) => (
            <div key={i} className="trust-bar-item">
              <TrustBarIcon name={item.icon} />
              <span>{item.text}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Header */}
      <header className="header">
        <div className="header-inner">
          <a href="/" className="header-logo" aria-label={SITE.businessName}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={CDN.logoDark} alt="National Epoxy Pros" />
          </a>

          <nav className="header-nav">
            {NAV_LINKS.map((link) => (
              <a key={link.href} href={link.href}>
                {link.label}
              </a>
            ))}
          </nav>

          <a href="/free-digital-bid" className="header-cta">
            GET A QUOTE
          </a>

          <button
            className={`mobile-menu-btn ${mobileOpen ? 'active' : ''}`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </header>

      {/* Mobile Nav */}
      <nav className={`mobile-nav ${mobileOpen ? 'active' : ''}`}>
        {NAV_LINKS.map((link) => (
          <a key={link.href} href={link.href} onClick={() => setMobileOpen(false)}>
            {link.label}
          </a>
        ))}
        <a
          href="/free-digital-bid"
          className="header-cta"
          onClick={() => setMobileOpen(false)}
        >
          GET A QUOTE
        </a>
      </nav>
    </>
  );
}
