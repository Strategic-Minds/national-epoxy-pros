"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
const NAV = ["Services","Floor Systems","Design Center","Visualizer","Resources","About","Reviews","Contact"];
const HREFS = ["/services","/#floor-systems","/design-center","/visualizer","#","about","/","contact"];
export function MainNavbar() {
  const [open, setOpen] = useState(false);
  useEffect(() => { document.body.style.overflow = open ? "hidden" : ""; return () => { document.body.style.overflow = ""; }; }, [open]);
  return (
    <>
      {/* UTILITY BAR */}
      <div className="util">
        <div className="w">
          <div className="util-l">
            <a href="tel:8779588408" className="util-item"><span className="ico">📞</span>877-958-8408</a>
            <a href="mailto:support@nationalepoxypros.com" className="util-item"><span className="ico">✉️</span>support@nationalepoxypros.com</a>
            <a href="https://wa.me/18779588408" className="util-item"><span className="ico">💬</span>WhatsApp Us</a>
          </div>
          <div className="util-c"><span>⚡</span>POWERED BY XTREME POLISHING SYSTEMS</div>
          <div className="util-r">America&apos;s #1 Epoxy Super Store</div>
        </div>
      </div>
      {/* NAV */}
      <nav className="nav">
        <div className="w">
          <Link href="/" className="nav-logo">
            <div className="logo-sq">NEP</div>
            <div>
              <div className="logo-name">National <em>Epoxy</em> Pros</div>
              <div className="logo-tag">Powered by XPS</div>
            </div>
          </Link>
          <div className="nav-links">
            {NAV.map((l,i) => <Link key={l} href={HREFS[i]} className="nav-a">{l}</Link>)}
          </div>
          <div className="nav-r">
            <a href="tel:8779588408" style={{color:"var(--gold)",fontSize:"18px"}}>📞</a>
            <Link href="/digital-bid" className="btn btn-gold" style={{padding:"9px 16px",fontSize:"11px"}}>Start My Digital Bid</Link>
            <button className="burger" onClick={() => setOpen(true)}><span/><span/><span/></button>
          </div>
        </div>
      </nav>
      {/* MOBILE MENU */}
      <div className={`mob${open?" open":""}`}>
        <button className="mob-x" onClick={() => setOpen(false)}>✕</button>
        {NAV.map((l,i) => <Link key={l} href={HREFS[i]} className="mob-a" onClick={() => setOpen(false)}>{l}</Link>)}
        <div style={{marginTop:"auto",display:"flex",flexDirection:"column",gap:"10px",paddingTop:"24px"}}>
          <Link href="/digital-bid" className="btn btn-gold btn-lg" style={{justifyContent:"center"}} onClick={() => setOpen(false)}>⚡ Start My Digital Bid — Save 15%</Link>
          <a href="tel:8779588408" className="btn btn-outline btn-lg" style={{justifyContent:"center"}}>📞 877-958-8408</a>
        </div>
      </div>
    </>
  );
}