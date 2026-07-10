'use client';
import { useState } from 'react';
import Link from 'next/link';

const STEPS = ['Project Info','Facility Details','Scope & Specs','Contact & Submit'];
const SECTORS = ['Industrial & Manufacturing','Warehouse & Logistics','Healthcare & Pharmaceutical','Commercial & Office','Retail & Hospitality','Auto Dealership / Service','Food & Beverage','Education','Government / Municipal','Other'];
const SYSTEMS = ['Decorative Flake Epoxy','Metallic Epoxy','Solid Color Epoxy','Quartz Broadcast','Polished Concrete','Urethane Concrete','MMA Methyl Methacrylate','Not Sure — Need Recommendation'];

export default function CommercialPage() {
  const [step, setStep] = useState(0);
  const [data, setData] = useState({
    sector:'', address:'', sqft:'', timeline:'', budget:'',
    substrate:'', condition:'', systems:[] as string[],
    hasExisting:'', scope:'',
    name:'', title:'', company:'', email:'', phone:'', notes:''
  });
  const [submitted, setSubmitted] = useState(false);

  const up = (k: string, v: unknown) => setData(d=>({...d,[k]:v}));
  const toggleSystem = (s: string) => {
    setData(d=>({...d, systems: d.systems.includes(s) ? d.systems.filter(x=>x!==s) : [...d.systems,s]}));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await fetch('/api/leads',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({...data,source:'Commercial Bid Request',campaign:'design-06-commercial'})});
    } catch {}
    setSubmitted(true);
  };

  if (submitted) return (
    <main style={{minHeight:'80vh',display:'flex',alignItems:'center',justifyContent:'center',background:'#F9FAFB'}}>
      <div style={{textAlign:'center',maxWidth:480,padding:40}}>
        <div style={{width:80,height:80,borderRadius:'50%',background:'rgba(212,175,55,0.1)',border:'2px solid #D4AF37',display:'flex',alignItems:'center',justifyContent:'center',margin:'0 auto 24px',fontSize:32}}>✓</div>
        <h1 style={{fontFamily:'var(--font-display)',fontSize:40,color:'#0A0A0A',marginBottom:12}}>BID REQUEST SUBMITTED</h1>
        <p style={{fontSize:15,color:'#6B7280',lineHeight:1.7,marginBottom:32}}>
          A National Epoxy Pros specifications consultant will review your project and contact you within <strong>1 business day</strong> with a full specification package and competitive bid.
        </p>
        <Link href="/" className="btn-primary">Back to Home</Link>
      </div>
    </main>
  );

  return (
    <main style={{background:'#F9FAFB',minHeight:'100vh'}}>
      {/* Header bar */}
      <div style={{background:'#0A0A0A',padding:'32px 0'}}>
        <div className="container">
          <div className="section-label">Commercial & Industrial</div>
          <h1 className="display-md" style={{color:'#fff'}}>REQUEST A BID &amp;<br/><span style={{WebkitTextStroke:'1px #D4AF37',color:'transparent'}}>SPECIFICATION</span></h1>
          <p style={{color:'#9CA3AF',fontSize:15,marginTop:12}}>Itemized proposal with material specs, labor, and timeline. Typically delivered within 1 business day.</p>
        </div>
      </div>

      <div className="container" style={{padding:'48px 24px'}}>
        {/* Progress */}
        <div style={{display:'flex',gap:0,marginBottom:48,background:'#fff',borderRadius:10,border:'1px solid #E5E7EB',overflow:'hidden'}}>
          {STEPS.map((s,i)=>(
            <div key={s} onClick={()=>i<step&&setStep(i)} style={{
              flex:1,padding:'16px 20px',textAlign:'center',cursor:i<step?'pointer':'default',
              background:i===step?'#0A0A0A':i<step?'#F9FAFB':'#fff',
              borderRight:i<STEPS.length-1?'1px solid #E5E7EB':undefined,
              transition:'background 0.2s'
            }}>
              <div style={{fontSize:10,fontWeight:700,letterSpacing:'0.1em',textTransform:'uppercase',color:i===step?'#D4AF37':i<step?'#10B981':'#9CA3AF',marginBottom:2}}>Step {i+1}</div>
              <div style={{fontSize:13,fontWeight:600,color:i===step?'#fff':i<step?'#374151':'#9CA3AF'}}>{s}</div>
            </div>
          ))}
        </div>

        <div style={{maxWidth:720,margin:'0 auto'}}>
          <form onSubmit={step<STEPS.length-1?(e)=>{e.preventDefault();setStep(s=>s+1)}:handleSubmit}>
            <div style={{background:'#fff',borderRadius:10,border:'1px solid #E5E7EB',padding:36}}>

              {/* Step 0 */}
              {step===0 && <>
                <h2 style={{fontFamily:'var(--font-display)',fontSize:28,color:'#0A0A0A',marginBottom:24}}>PROJECT INFORMATION</h2>
                <div style={{display:'flex',flexDirection:'column',gap:18}}>
                  <div className="form-group">
                    <label className="form-label">Facility / Industry Sector</label>
                    <select className="form-select" value={data.sector} onChange={e=>up('sector',e.target.value)} required>
                      <option value="">Select your sector...</option>
                      {SECTORS.map(s=><option key={s}>{s}</option>)}
                    </select>
                  </div>
                  <div className="form-group">
                    <label className="form-label">Project Address or City/State</label>
                    <input className="form-input" placeholder="123 Industrial Pkwy, Phoenix AZ" value={data.address} onChange={e=>up('address',e.target.value)} required/>
                  </div>
                  <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:16}}>
                    <div className="form-group">
                      <label className="form-label">Total Square Footage</label>
                      <input className="form-input" placeholder="e.g. 25,000" value={data.sqft} onChange={e=>up('sqft',e.target.value)} required/>
                    </div>
                    <div className="form-group">
                      <label className="form-label">Target Timeline</label>
                      <select className="form-select" value={data.timeline} onChange={e=>up('timeline',e.target.value)}>
                        <option value="">Select...</option>
                        <option>Immediate / ASAP</option><option>1–3 Months</option><option>3–6 Months</option><option>6–12 Months</option><option>Planning Phase</option>
                      </select>
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="form-label">Approximate Budget Range</label>
                    <select className="form-select" value={data.budget} onChange={e=>up('budget',e.target.value)}>
                      <option value="">Select range...</option>
                      <option>Under $25,000</option><option>$25,000 – $75,000</option><option>$75,000 – $200,000</option><option>$200,000 – $500,000</option><option>$500,000+</option><option>Need Guidance</option>
                    </select>
                  </div>
                </div>
              </>}

              {/* Step 1 */}
              {step===1 && <>
                <h2 style={{fontFamily:'var(--font-display)',fontSize:28,color:'#0A0A0A',marginBottom:24}}>FACILITY DETAILS</h2>
                <div style={{display:'flex',flexDirection:'column',gap:18}}>
                  <div className="form-group">
                    <label className="form-label">Current Substrate / Slab Condition</label>
                    <select className="form-select" value={data.substrate} onChange={e=>up('substrate',e.target.value)}>
                      <option value="">Select...</option>
                      <option>New concrete (curing complete)</option><option>Existing bare concrete</option><option>Existing epoxy/coating (to be removed)</option><option>Existing tile (to be removed)</option><option>Damaged/cracked slab (needs repair)</option><option>Unknown</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label className="form-label">Current Slab Condition</label>
                    <select className="form-select" value={data.condition} onChange={e=>up('condition',e.target.value)}>
                      <option value="">Select...</option>
                      <option>Excellent — no visible damage</option><option>Good — minor cracks only</option><option>Fair — moderate cracking/spalling</option><option>Poor — major repairs needed</option><option>Needs Assessment</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label className="form-label">Existing Coatings or Treatments?</label>
                    <select className="form-select" value={data.hasExisting} onChange={e=>up('hasExisting',e.target.value)}>
                      <option value="">Select...</option>
                      <option>No — bare concrete</option><option>Yes — paint or sealer</option><option>Yes — epoxy coating</option><option>Yes — tile or vinyl</option><option>Unknown</option>
                    </select>
                  </div>
                </div>
              </>}

              {/* Step 2 */}
              {step===2 && <>
                <h2 style={{fontFamily:'var(--font-display)',fontSize:28,color:'#0A0A0A',marginBottom:24}}>SCOPE &amp; SYSTEMS</h2>
                <div style={{display:'flex',flexDirection:'column',gap:18}}>
                  <div className="form-group">
                    <label className="form-label">Floor Systems of Interest (select all)</label>
                    <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:10,marginTop:4}}>
                      {SYSTEMS.map(s=>(
                        <label key={s} style={{
                          display:'flex',alignItems:'center',gap:10,padding:'12px 14px',
                          border:`1px solid ${data.systems.includes(s)?'#D4AF37':'#E5E7EB'}`,
                          borderRadius:6,cursor:'pointer',
                          background:data.systems.includes(s)?'rgba(212,175,55,0.05)':'#fff',
                          transition:'all 0.15s'
                        }}>
                          <input type="checkbox" checked={data.systems.includes(s)} onChange={()=>toggleSystem(s)} style={{accentColor:'#D4AF37'}}/>
                          <span style={{fontSize:13,fontWeight:500,color:'#374151'}}>{s}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="form-label">Project Scope Notes</label>
                    <textarea className="form-textarea" placeholder="Describe special requirements: chemical exposure, forklift traffic, specific drainage, phased installation, etc." value={data.scope} onChange={e=>up('scope',e.target.value)} style={{minHeight:100}}/>
                  </div>
                </div>
              </>}

              {/* Step 3 */}
              {step===3 && <>
                <h2 style={{fontFamily:'var(--font-display)',fontSize:28,color:'#0A0A0A',marginBottom:24}}>CONTACT &amp; SUBMIT</h2>
                <div style={{display:'flex',flexDirection:'column',gap:16}}>
                  <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:16}}>
                    <div className="form-group">
                      <label className="form-label">Full Name</label>
                      <input className="form-input" placeholder="Jane Smith" value={data.name} onChange={e=>up('name',e.target.value)} required/>
                    </div>
                    <div className="form-group">
                      <label className="form-label">Title / Role</label>
                      <input className="form-input" placeholder="Facilities Manager" value={data.title} onChange={e=>up('title',e.target.value)}/>
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="form-label">Company Name</label>
                    <input className="form-input" placeholder="ACME Industries LLC" value={data.company} onChange={e=>up('company',e.target.value)}/>
                  </div>
                  <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:16}}>
                    <div className="form-group">
                      <label className="form-label">Work Email</label>
                      <input className="form-input" type="email" placeholder="jane@company.com" value={data.email} onChange={e=>up('email',e.target.value)} required/>
                    </div>
                    <div className="form-group">
                      <label className="form-label">Phone</label>
                      <input className="form-input" type="tel" placeholder="(555) 000-0000" value={data.phone} onChange={e=>up('phone',e.target.value)}/>
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="form-label">Additional Notes</label>
                    <textarea className="form-textarea" placeholder="Anything else we should know before preparing your bid..." value={data.notes} onChange={e=>up('notes',e.target.value)} style={{minHeight:80}}/>
                  </div>
                  {/* Summary */}
                  <div style={{background:'#F9FAFB',borderRadius:8,padding:20,border:'1px solid #E5E7EB',marginTop:8}}>
                    <div style={{fontSize:11,fontWeight:700,letterSpacing:'0.1em',textTransform:'uppercase',color:'#9CA3AF',marginBottom:12}}>Bid Summary</div>
                    <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:8}}>
                      {[['Sector',data.sector],['Sq Footage',data.sqft],['Timeline',data.timeline],['Systems',data.systems.join(', ')||'—']].map(([k,v])=>(
                        <div key={k}>
                          <div style={{fontSize:11,color:'#9CA3AF',textTransform:'uppercase',letterSpacing:'0.06em'}}>{k}</div>
                          <div style={{fontSize:13,color:'#111827',fontWeight:500,marginTop:2}}>{v||'—'}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </>}
            </div>

            {/* Nav */}
            <div style={{display:'flex',justifyContent:'space-between',marginTop:20}}>
              {step > 0 ? (
                <button type="button" className="btn-dark" onClick={()=>setStep(s=>s-1)}>← Back</button>
              ) : <div/>}
              <button type="submit" className="btn-primary">
                {step < STEPS.length-1 ? 'Next Step →' : 'Submit Bid Request →'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}
