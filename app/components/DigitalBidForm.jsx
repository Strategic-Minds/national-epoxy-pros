"use client";
import { useState } from "react";

export function DigitalBidForm({ compact = false }) {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name:"", email:"", phone:"", zip:"",
    projectType:"", squareFootage:"", timeline:"",
    description:"", howHeard:"",
  });

  const update = (k, v) => setForm(f => ({...f, [k]: v}));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await fetch("/api/lead", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({...form, source: "digital-bid", discount: "15%", timestamp: new Date().toISOString()})
      });
    } catch {}
    setTimeout(() => { setLoading(false); setSubmitted(true); }, 1200);
  };

  if (submitted) return (
    <div className="bidCard" style={{textAlign:"center",padding:"60px 40px"}}>
      <div style={{fontSize:"4rem",marginBottom:"16px"}}>🎉</div>
      <h2 className="bidTitle" style={{marginBottom:"12px"}}>Bid Request Received!</h2>
      <p style={{color:"#9CA3AF",marginBottom:"8px"}}>We'll have your detailed estimate ready within 24 hours.</p>
      <div className="couponBadge" style={{display:"inline-flex",margin:"16px auto"}}>✅ 15% Discount Applied to Your Bid</div>
      <p style={{color:"#9CA3AF",fontSize:"0.85rem"}}>Check {form.email} for confirmation. We'll text {form.phone} when your estimate is ready.</p>
    </div>
  );

  return (
    <div className="bidCard">
      <div className="couponBadge">🏷️ 15% Off — Digital Bid Exclusive</div>
      <h2 className="bidTitle">Start My Free Digital Bid</h2>
      <p className="bidSub">Get a detailed quote in under 24 hours. No phone calls required.</p>

      <form onSubmit={handleSubmit}>
        <div className="bidForm">
          <div className="formGroup">
            <label className="formLabel">Full Name *</label>
            <input className="formInput" required placeholder="John Smith"
              value={form.name} onChange={e => update("name", e.target.value)} />
          </div>
          <div className="formGroup">
            <label className="formLabel">Email *</label>
            <input className="formInput" type="email" required placeholder="john@email.com"
              value={form.email} onChange={e => update("email", e.target.value)} />
          </div>
          <div className="formGroup">
            <label className="formLabel">Phone *</label>
            <input className="formInput" type="tel" required placeholder="(480) 555-0100"
              value={form.phone} onChange={e => update("phone", e.target.value)} />
          </div>
          <div className="formGroup">
            <label className="formLabel">ZIP Code *</label>
            <input className="formInput" required placeholder="85001"
              value={form.zip} onChange={e => update("zip", e.target.value)} />
          </div>
          <div className="formGroup">
            <label className="formLabel">Project Type *</label>
            <select className="formSelect" required value={form.projectType} onChange={e => update("projectType", e.target.value)}>
              <option value="">Select type...</option>
              <option>Garage Floor (Residential)</option>
              <option>Basement Floor</option>
              <option>Commercial / Retail</option>
              <option>Restaurant / Kitchen</option>
              <option>Warehouse / Industrial</option>
              <option>Showroom / Office</option>
              <option>Patio / Outdoor</option>
              <option>Other</option>
            </select>
          </div>
          <div className="formGroup">
            <label className="formLabel">Approx. Square Footage</label>
            <select className="formSelect" value={form.squareFootage} onChange={e => update("squareFootage", e.target.value)}>
              <option value="">Select range...</option>
              <option>Under 500 sq ft</option>
              <option>500 - 1,000 sq ft</option>
              <option>1,000 - 2,500 sq ft</option>
              <option>2,500 - 5,000 sq ft</option>
              <option>5,000+ sq ft</option>
            </select>
          </div>
          <div className="formGroup">
            <label className="formLabel">Project Timeline</label>
            <select className="formSelect" value={form.timeline} onChange={e => update("timeline", e.target.value)}>
              <option value="">When do you need it?</option>
              <option>ASAP (within 2 weeks)</option>
              <option>1-2 months</option>
              <option>3-6 months</option>
              <option>Just planning</option>
            </select>
          </div>
          <div className="formGroup">
            <label className="formLabel">How did you hear about us?</label>
            <select className="formSelect" value={form.howHeard} onChange={e => update("howHeard", e.target.value)}>
              <option value="">Select...</option>
              <option>Google Search</option>
              <option>Facebook / Instagram</option>
              <option>Friend / Referral</option>
              <option>XPS / Xtreme Polishing Systems</option>
              <option>Contractor recommendation</option>
              <option>Other</option>
            </select>
          </div>
          <div className="formGroup full">
            <label className="formLabel">Describe Your Project</label>
            <textarea className="formTextarea" placeholder="Tell us about your floor: current condition, desired finish, any special requirements..."
              value={form.description} onChange={e => update("description", e.target.value)} />
          </div>
          <div className="formGroup full">
            <button type="submit" className="btn-gold bidSubmit" disabled={loading}>
              {loading ? "⏳ Submitting..." : "⚡ Submit Bid Request — Get 15% Off"}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}