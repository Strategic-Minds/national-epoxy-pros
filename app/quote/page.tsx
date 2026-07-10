'use client';
import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const STEPS = ['Project Info','Measurements','Floor & Finish','Photos','Contact & Review'];

export default function QuotePage() {
  const router = useRouter();
  const [step, setStep] = useState(0);
  const [data, setData] = useState({ sector:'',sqft:'',finish:'',name:'',email:'',phone:'',notes:'' });
  const [submitted, setSubmitted] = useState(false);
  const up = (k:string,v:string) => setData(d=>({...d,[k]:v}));

  const handleSubmit = async (e:React.FormEvent) => {
    e.preventDefault();
    try { await fetch('/api/leads',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({...data,source:'Quote Wizard'})}); } catch{}
    setSubmitted(true);
    router.push('/thank-you');
  };

  if(submitted) return null;

  return (
    <main style={{background:'#F9FAFB',minHeight:'100vh',padding:'48px 24px'}}>
      <div style={{maxWidth:640,margin:'0 auto'}}>
        <div style={{textAlign:'center',marginBottom:40}}>
          <h1 style={{fontFamily:'var(--font-display)',fontSize:40,color:'#0A0A0A',marginBottom:8}}>GET YOUR FREE QUOTE</h1>
          <p style={{fontSize:15,color:'#6B7280'}}>Step {step+1} of {STEPS.length} — {STEPS[step]}</p>
          <div style={{display:'flex',gap:4,marginTop:16,justifyContent:'center'}}>
            {STEPS.map((_,i)=><div key={i} style={{height:3,width:80,borderRadius:2,background:i<=step?'#D4AF37':'#E5E7EB',transition:'background 0.3s'}}/>)}
          </div>
        </div>
        <div style={{background:'#fff',borderRadius:12,border:'1px solid #E5E7EB',padding:36}}>
          <form onSubmit={step<STEPS.length-1?(e)=>{e.preventDefault();setStep(s=>s+1)}:handleSubmit}>
            {step===0&&<div style={{display:'flex',flexDirection:'column',gap:16}}>
              <div className="form-group"><label className="form-label">Project Type</label>
                <select className="form-select" value={data.sector} onChange={e=>up('sector',e.target.value)} required>
                  <option value="">Select...</option>
                  <option>Garage Floor</option><option>Basement</option><option>Commercial Space</option><option>Warehouse</option><option>Restaurant / Retail</option><option>Other</option>
                </select>
              </div>
            </div>}
            {step===1&&<div style={{display:'flex',flexDirection:'column',gap:16}}>
              <div className="form-group"><label className="form-label">Approximate Square Footage</label>
                <input className="form-input" placeholder="e.g. 500" value={data.sqft} onChange={e=>up('sqft',e.target.value)} required/>
              </div>
            </div>}
            {step===2&&<div style={{display:'flex',flexDirection:'column',gap:16}}>
              <div className="form-group"><label className="form-label">Preferred Finish</label>
                <select className="form-select" value={data.finish} onChange={e=>up('finish',e.target.value)}>
                  <option value="">Select...</option>
                  <option>Decorative Flake</option><option>Metallic Epoxy</option><option>Solid Color</option><option>Quartz Broadcast</option><option>Polished Concrete</option><option>Not Sure</option>
                </select>
              </div>
            </div>}
            {step===3&&<div style={{textAlign:'center',padding:'20px 0'}}>
              <div style={{fontSize:40,marginBottom:12}}>📸</div>
              <p style={{fontSize:14,color:'#6B7280'}}>Photo upload coming soon. We will ask for photos when we schedule your site visit.</p>
            </div>}
            {step===4&&<div style={{display:'flex',flexDirection:'column',gap:16}}>
              <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:16}}>
                <div className="form-group"><label className="form-label">Name</label><input className="form-input" value={data.name} onChange={e=>up('name',e.target.value)} required/></div>
                <div className="form-group"><label className="form-label">Phone</label><input className="form-input" type="tel" value={data.phone} onChange={e=>up('phone',e.target.value)}/></div>
              </div>
              <div className="form-group"><label className="form-label">Email</label><input className="form-input" type="email" value={data.email} onChange={e=>up('email',e.target.value)} required/></div>
              <div className="form-group"><label className="form-label">Notes</label><textarea className="form-textarea" value={data.notes} onChange={e=>up('notes',e.target.value)} style={{minHeight:80}}/></div>
            </div>}
            <div style={{display:'flex',justifyContent:'space-between',marginTop:24}}>
              {step>0?<button type="button" className="btn-dark" onClick={()=>setStep(s=>s-1)}>← Back</button>:<div/>}
              <button type="submit" className="btn-primary">{step<STEPS.length-1?'Next →':'Submit Quote Request'}</button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}
