"use client";
import { useState } from "react";
import Link from "next/link";

export function PWASection() {
  const [installing, setInstalling] = useState(false);

  const handleAndroidInstall = () => {
    if (window._pwaPrompt) {
      window._pwaPrompt.prompt();
    } else {
      alert("To install: tap your browser menu → 'Add to Home Screen'");
    }
  };

  return (
    <section className="pwaSection">
      <div className="pwaInner">
        <div className="pwaCopy">
          <div className="sectionLabel">Mobile App</div>
          <h2 className="sectionTitle">Install the National<br/>Epoxy Pros App</h2>
          <p className="pwaDesc">
            Track your project, chat with your crew, view your digital estimate, and get real-time updates — 
            all from your phone. No app store required. Works on any device.
          </p>
          <div className="pwaButtons">
            <button className="pwaBtn" onClick={handleAndroidInstall}>
              <span className="pwaBtnIcon">🤖</span>
              <span className="pwaBtnText">
                <span className="pwaBtnTextSub">Get it on</span>
                <span className="pwaBtnTextMain">Android / Chrome</span>
              </span>
            </button>
            <button className="pwaBtn" onClick={() => alert("On iPhone: tap Share → Add to Home Screen")}>
              <span className="pwaBtnIcon"></span>
              <span className="pwaBtnText">
                <span className="pwaBtnTextSub">Add to</span>
                <span className="pwaBtnTextMain">iPhone Home Screen</span>
              </span>
            </button>
            <Link href="/customer-portal" className="pwaBtn" style={{display:"flex",alignItems:"center",gap:"14px"}}>
              <span className="pwaBtnIcon">👤</span>
              <span className="pwaBtnText">
                <span className="pwaBtnTextSub">Access your</span>
                <span className="pwaBtnTextMain">Customer Portal</span>
              </span>
            </Link>
          </div>
        </div>
        <div className="pwaMockup">
          <div className="phoneMockup">
            <div className="phoneMockupScreen">
              <div className="phoneMockupIcon">
                <span style={{fontSize:"2rem",color:"#0a0a0a"}}>⚡</span>
              </div>
              <div className="phoneMockupTitle">National Epoxy Pros</div>
              <div className="phoneMockupSub">Your Floor. Your Project. Your App.</div>
              <Link href="/estimate" className="phoneMockupCta">Start Digital Bid</Link>
              <div style={{marginTop:"16px",display:"flex",flexDirection:"column",gap:"8px",width:"100%"}}>
                {["Track My Project","View My Estimate","Contact Crew","Floor Visualizer"].map(l=>(
                  <div key={l} style={{background:"rgba(246,184,0,0.08)",border:"1px solid rgba(246,184,0,0.15)",borderRadius:"8px",padding:"10px 14px",fontSize:"0.7rem",color:"#d1d5db",display:"flex",alignItems:"center",gap:"8px"}}>
                    <span style={{color:"#F6B800"}}>→</span>{l}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}