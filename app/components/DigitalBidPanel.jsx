"use client";
import { useState } from "react";
import Link from "next/link";

export function DigitalBidPanel() {
  const [form, setForm] = useState({ type: "", sqft: "", address: "", system: "" });
  const [done, setDone] = useState(false);
  const [loading, setLoading] = useState(false);

  const submit = async () => {
    if (!form.address) return;
    setLoading(true);
    try { await fetch("/api/digital-bid", { method:"POST", headers:{"Content-Type":"application/json"}, body: JSON.stringify(form) }); } catch {}
    setTimeout(() => { setLoading(false); setDone(true); }, 1000);
  };

  return (
    <section className="bid-cta" id="digital-bid">
      <div className="bid-cta-inner">
        {/* LEFT — FORM */}
        <div className="bid-form-side">
          <div className="bid-form-card">
            <div className="bid-tag">📋 Project Bid</div>
            <div className="bid-tag-sub">Fast. Easy. Accurate. OUR PRIORITY.</div>
            {done ? (
              <div style={{textAlign:"center",padding:"24px 0"}}>
                <div style={{fontSize:"2.5rem",marginBottom:"10px"}}>✅</div>
                <div style={{fontWeight:700,marginBottom:"6px"}}>Bid Submitted!</div>
                <div style={{fontSize:"0.8rem",color:"#B8B8B8"}}>Your estimate arrives within 24 hours. 15% discount applied.</div>
              </div>
            ) : (
              <>
                <div className="bid-fields">
                  <div className="bid-field">
                    <label>Project Type</label>
                    <select className="bid-select" value={form.type} onChange={e=>setForm({...form,type:e.target.value})}>
                      <option value="">Select type...</option>
                      <option>Commercial</option><option>Residential</option>
                      <option>Industrial</option><option>Restaurant</option>
                    </select>
                  </div>
                  <div className="bid-field">
                    <label>Square Footage</label>
                    <select className="bid-select" value={form.sqft} onChange={e=>setForm({...form,sqft:e.target.value})}>
                      <option value="">Select range...</option>
                      <option>Under 500</option><option>500–1,000</option>
                      <option>1,000–2,500</option><option>5,000+</option>
                    </select>
                  </div>
                  <div className="bid-field">
                    <label>Project Address</label>
                    <input className="bid-input" placeholder="Phoenix, AZ" value={form.address} onChange={e=>setForm({...form,address:e.target.value})} />
                  </div>
                  <div className="bid-field">
                    <label>Floor System</label>
                    <select className="bid-select" value={form.system} onChange={e=>setForm({...form,system:e.target.value})}>
                      <option value="">Select system...</option>
                      <option>Flake System</option><option>Metallic Epoxy</option>
                      <option>Quartz</option><option>Solid Color</option><option>Polished Concrete</option>
                    </select>
                  </div>
                </div>
                <button className="btn-gold" style={{width:"100%",justifyContent:"center",padding:"13px"}} onClick={submit} disabled={loading}>
                  {loading ? "Submitting..." : "Get My Instant Bid →"}
                </button>
              </>
            )}
          </div>
        </div>

        {/* RIGHT — COPY */}
        <div className="bid-copy-side">
          <h2 className="bid-main-h">
            Deadlines Don&apos;t Wait.<br />
            <span style={{color:"#F5A900"}}>Neither Should You.</span>
          </h2>
          <p className="bid-sub">Get a fast, easy, and accurate epoxy-floor estimate in minutes with our Digital Bid System. Perfect for urgent projects and tight timelines.</p>
          <div className="bid-checks">
            <div className="bid-check"><div className="check-dot">✓</div>24-Hour Bid Response Guarantee</div>
            <div className="bid-check"><div className="check-dot">✓</div>Accurate Pricing You Can Trust</div>
            <div className="bid-check"><div className="check-dot">✓</div>No Phone Tag. No Delays.</div>
          </div>
          <Link href="/digital-bid" className="btn-gold btn-gold-lg" style={{alignSelf:"flex-start"}}>
            Start My Digital Bid Now →
          </Link>
        </div>
      </div>
    </section>
  );
}