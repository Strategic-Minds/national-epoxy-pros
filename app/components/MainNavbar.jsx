"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { UtilityBar } from "./UtilityBar";

const LINKS = [
  { label: "Services", href: "/#services" },
  { label: "Floor Systems", href: "/#floor-systems" },
  { label: "Design Center", href: "/design-center" },
  { label: "Visualizer", href: "/visualizer" },
  { label: "Resources", href: "#" },
  { label: "About", href: "/about" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "/contact" },
];

export function MainNavbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      <UtilityBar />
      <nav className="nav" style={{ boxShadow: scrolled ? "0 4px 30px rgba(0,0,0,0.5)" : "none" }}>
        <div className="nav-inner">
          <Link href="/" className="nav-logo" onClick={() => setMenuOpen(false)}>
            <div className="logo-badge">NEP</div>
            <div className="logo-text">
              <div className="name">National <span>Epoxy</span> Pros</div>
              <div className="sub">Powered by XPS</div>
            </div>
          </Link>
          <div className="nav-links">
            {LINKS.map((l) => (
              <Link key={l.label} href={l.href} className="nav-link">{l.label}</Link>
            ))}
          </div>
          <div className="nav-right">
            <a href="tel:8779588408" className="nav-phone-icon" title="Call us">📞</a>
            <Link href="/digital-bid" className="btn-gold" style={{padding:"9px 18px",fontSize:"0.75rem"}}>
              Start My Digital Bid
            </Link>
            <button className="hamburger" onClick={() => setMenuOpen(true)} aria-label="Menu">
              <span/><span/><span/>
            </button>
          </div>
        </div>
      </nav>

      <div className={`mobile-menu${menuOpen ? " open" : ""}`}>
        <button className="mobile-close" onClick={() => setMenuOpen(false)}>✕</button>
        {LINKS.map((l) => (
          <Link key={l.label} href={l.href} className="mobile-nav-link" onClick={() => setMenuOpen(false)}>{l.label}</Link>
        ))}
        <div style={{marginTop:"auto",display:"flex",flexDirection:"column",gap:"10px",paddingTop:"24px"}}>
          <Link href="/digital-bid" className="btn-gold btn-gold-lg" style={{justifyContent:"center"}} onClick={() => setMenuOpen(false)}>
            ⚡ Start My Digital Bid — Save 15%
          </Link>
          <a href="tel:8779588408" className="btn-outline" style={{justifyContent:"center"}}>📞 877-958-8408</a>
        </div>
      </div>
    </>
  );
}