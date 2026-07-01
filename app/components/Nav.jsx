"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

const NAV_LINKS = [
  { label: "Services", href: "/#services" },
  { label: "Floor Systems", href: "/#floor-systems" },
  { label: "Design Center", href: "/design-center" },
  { label: "Visualizer", href: "/visualizer" },
  { label: "Gallery", href: "/gallery" },
  { label: "Training", href: "/training" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export function Nav() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      {/* Top utility bar */}
      <div className="topBar">
        <div className="topBarInner">
          <div className="topBarTrusts">
            {[
              "Powered by Xtreme Polishing Systems",
              "America's #1 Epoxy Super Store",
              "70+ Locations Nationwide",
              "Certified Trainers",
              "30+ Years Experience",
            ].map((t) => (
              <div key={t} className="trustItem">
                <svg width="12" height="12" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg>
                {t}
              </div>
            ))}
          </div>
          <div className="topBarRight">
            <a href="tel:4808008246" className="topPhone">📞 (480) 800-8246</a>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <nav className="nav" style={{ borderBottomColor: scrolled ? "rgba(246,184,0,0.25)" : "rgba(246,184,0,0.1)" }}>
        <div className="navInner">
          <Link href="/" className="navLogo">
            <div>
              <div className="navLogoText">National<span style={{color:"#F6B800"}}> Epoxy</span> Pros</div>
              <div className="navLogoSub">Powered by XPS</div>
            </div>
          </Link>

          <div className="navLinks">
            {NAV_LINKS.map((l) => (
              <Link key={l.label} href={l.href} className="navLink">{l.label}</Link>
            ))}
          </div>

          <div className="navCta">
            <a href="tel:4808008246" className="navPhone">(480) 800-8246</a>
            <Link href="/estimate" className="btn-gold" style={{padding:"10px 20px",fontSize:"0.8rem"}}>
              Start My Digital Bid
            </Link>
            <button className="hamburger" onClick={() => setMobileOpen(true)} aria-label="Open menu">
              <span/><span/><span/>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      <div className={`mobileMenu${mobileOpen ? " open" : ""}`}>
        <button className="mobileMenuClose" onClick={() => setMobileOpen(false)}>✕</button>
        {NAV_LINKS.map((l) => (
          <Link key={l.label} href={l.href} className="mobileNavLink" onClick={() => setMobileOpen(false)}>{l.label}</Link>
        ))}
        <div style={{marginTop:"auto",display:"flex",flexDirection:"column",gap:"12px",paddingTop:"24px"}}>
          <Link href="/estimate" className="btn-gold" style={{justifyContent:"center"}} onClick={() => setMobileOpen(false)}>
            Start My Digital Bid — Get 15% Off
          </Link>
          <a href="tel:4808008246" className="btn-ghost" style={{justifyContent:"center"}}>
            📞 (480) 800-8246
          </a>
        </div>
      </div>
    </>
  );
}