'use client';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const NAV_LINKS = [
  { label: 'Floor Systems', href: '/floor-systems' },
  { label: 'Visualizer', href: '/visualizer' },
  { label: 'Projects', href: '/projects' },
  { label: 'Process', href: '/process' },
  { label: 'Service Areas', href: '/service-areas' },
  { label: 'Reviews', href: '/reviews' },
  { label: 'About', href: '/about' },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="announcement-bar">
        🏆 America&apos;s Premium Epoxy Floor System &nbsp;|&nbsp; 70+ Cities Nationwide &nbsp;|&nbsp; Free Quotes in 60 Seconds
      </div>
      <header className="site-header">
        <div className="header-inner">
          <Link href="/" className="header-logo">
            <img src="/logos/nep-logo-horizontal-black-gold-v1.svg" alt="National Epoxy Pros" height={44} />
          </Link>
          <nav className="header-nav">
            {NAV_LINKS.map(l => (
              <Link key={l.href} href={l.href}>{l.label}</Link>
            ))}
          </nav>
          <Link href="/quote" className="btn btn-gold btn-sm" style={{flexShrink:0}}>
            GET MY FREE QUOTE
          </Link>
          <button
            className="mobile-menu-btn"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            style={{display:'none',background:'none',border:'none',fontSize:24,color:'var(--text-primary)',padding:'8px'}}
          >
            ☰
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      {open && (
        <div style={{position:'fixed',inset:0,zIndex:200,background:'rgba(0,0,0,0.5)'}} onClick={() => setOpen(false)}>
          <div
            style={{position:'absolute',top:0,left:0,bottom:0,width:280,background:'var(--white)',padding:'24px',overflowY:'auto'}}
            onClick={e => e.stopPropagation()}
          >
            <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',marginBottom:32}}>
              <img src="/logos/nep-logo-horizontal-black-gold-v1.svg" alt="National Epoxy Pros" height={36} />
              <button onClick={() => setOpen(false)} style={{background:'none',border:'none',fontSize:24}}>✕</button>
            </div>
            <nav style={{display:'flex',flexDirection:'column',gap:4}}>
              {NAV_LINKS.map(l => (
                <Link key={l.href} href={l.href} onClick={() => setOpen(false)}
                  style={{padding:'14px 0',fontFamily:'Montserrat,sans-serif',fontWeight:700,fontSize:14,textTransform:'uppercase',letterSpacing:'0.06em',borderBottom:'1px solid var(--gray-mid)',color:'var(--text-primary)'}}>
                  {l.label}
                </Link>
              ))}
            </nav>
            <Link href="/quote" className="btn btn-gold" style={{width:'100%',marginTop:24,justifyContent:'center'}}>
              GET MY FREE QUOTE
            </Link>
          </div>
        </div>
      )}

      {/* Mobile Sticky CTA */}
      <div className="mobile-cta-bar">
        <Link href="/quote" className="btn btn-gold">GET MY FREE QUOTE — FREE IN 60 SECONDS</Link>
      </div>
    </>
  );
}
