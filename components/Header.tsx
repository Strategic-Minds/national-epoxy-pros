'use client';
import Link from 'next/link';
import { useState } from 'react';

const LOGO_DARK = 'https://base44.app/api/apps/6a3a1cc6fda8cc665dd22ea4/files/mp/public/6a3a1cc6fda8cc665dd22ea4/5e28d6604_logo-horizontal-dark.svg';
const nav = [
  ['Floor Systems','/floor-systems'],
  ['Design Center','/color-charts'],
  ['Digital Bid','/free-digital-bid'],
  ['Reviews','/reviews'],
  ['About','/about'],
  ['Contact','/contact'],
];

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="trust-bar">
        <div className="trust-bar-inner">
          <span className="trust-bar-item">⏰ 24-Hour Quote Guarantee</span>
          <span className="trust-bar-divider">|</span>
          <span className="trust-bar-item">📍 Over 70 Locations Nationwide</span>
          <span className="trust-bar-divider">|</span>
          <span className="trust-bar-item">🛡 Licensed, Insured &amp; Bonded</span>
          <span className="trust-bar-divider">|</span>
          <span className="trust-bar-item">⭐ 4.4-Star Rated by Homeowners</span>
          <span className="trust-bar-divider">|</span>
          <span className="trust-bar-item">⚡ Powered by Xtreme Polishing Systems</span>
        </div>
      </div>
      <header className="site-header">
        <div className="header-inner">
          <Link href="/" className="brand" aria-label="National Epoxy Pros">
            <img src={LOGO_DARK} alt="National Epoxy Pros" />
          </Link>
          <nav className="main-nav">
            {nav.map(([label, href]) => (
              <Link key={href} href={href}>{label}</Link>
            ))}
          </nav>
          <Link href="/free-digital-bid" className="header-cta">Get a Quote</Link>
          <button className="hamburger" onClick={() => setOpen(true)} aria-label="Open menu">
            <span /><span /><span />
          </button>
        </div>
      </header>
      {open && (
        <div className="mobile-nav-overlay" style={{position:'fixed',inset:0,background:'#050505',zIndex:200,display:'flex',flexDirection:'column',padding:'1.5rem 2rem',gap:'1.5rem'}}>
          <button onClick={() => setOpen(false)} style={{alignSelf:'flex-end',background:'none',border:'none',color:'#fff',fontSize:'2rem',cursor:'pointer'}}>✕</button>
          <Link href="/" className="brand"><img src={LOGO_DARK} alt="National Epoxy Pros" style={{height:40}} /></Link>
          {nav.map(([label, href]) => (
            <Link key={href} href={href} onClick={() => setOpen(false)} style={{fontSize:'1.3rem',fontWeight:700,color:'#fff',borderBottom:'1px solid rgba(255,255,255,.1)',paddingBottom:'1rem'}}>{label}</Link>
          ))}
          <Link href="/free-digital-bid" className="btn btn-gold" onClick={() => setOpen(false)}>Get a Quote</Link>
        </div>
      )}
    </>
  );
}
