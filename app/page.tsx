'use client';
import Link from 'next/link';
import { useState } from 'react';

const SECTORS = [
  { icon: '🏭', title: 'Industrial & Manufacturing', desc: 'Heavy-duty systems for chemical resistance, impact tolerance and machinery loads.' },
  { icon: '🏬', title: 'Warehouse & Logistics', desc: 'Seamless, forklift-rated floors that maximize durability and throughput.' },
  { icon: '🏥', title: 'Healthcare & Pharmaceutical', desc: 'Hygienic, antimicrobial, slip-resistant systems meeting OSHA and FDA standards.' },
  { icon: '🏢', title: 'Commercial & Office', desc: 'Polished concrete and decorative systems that project authority and reduce maintenance.' },
  { icon: '🏪', title: 'Retail & Hospitality', desc: 'High-design, high-traffic floors that reinforce brand and withstand daily use.' },
  { icon: '🔧', title: 'Auto Dealerships & Service', desc: 'Chemical-resistant, slip-safe systems built for automotive environments.' },
];

const SYSTEMS = [
  { slug:'flake', label:'Decorative Flake', spec:'100–400 sq ft/gal coverage', badge:'Most Popular' },
  { slug:'metallic', label:'Metallic Epoxy', spec:'Premium decorative finish', badge:'High-End' },
  { slug:'solid-color', label:'Solid Color Epoxy', spec:'Single or multi-coat', badge:'Cost Effective' },
  { slug:'quartz', label:'Quartz Flooring', spec:'Slip-resistant broadcast', badge:'Safety First' },
  { slug:'polished-concrete', label:'Polished Concrete', spec:'Densify & polish existing slab', badge:'Sustainable' },
];

const STATS = [
  { num:'2,400+', label:'Commercial Projects' },
  { num:'47', label:'States Served' },
  { num:'15', label:'Years in Industry' },
  { num:'98%', label:'Client Retention' },
];

const PROCESS = [
  { step:'01', title:'Site Assessment', desc:'We evaluate substrate condition, existing coatings, moisture, and load requirements before recommending any system.' },
  { step:'02', title:'Specification Package', desc:'Full written spec with product data sheets, coverage rates, cure schedules, and warranty terms — ready for your GC or architect.' },
  { step:'03', title:'Competitive Bid', desc:'Itemized proposal with material, labor, and timeline. No hidden costs. No surprise change orders.' },
  { step:'04', title:'Installation', desc:'Certified applicators only. Surface prep to topcoat. Every project is quality-inspected before handoff.' },
];

export default function HomePage() {
  const [bidStep, setBidStep] = useState(0);
  const [bidData, setBidData] = useState({ sector:'', sqft:'', timeline:'', name:'', email:'', phone:'' });
  const [submitted, setSubmitted] = useState(false);

  const handleBidSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await fetch('/api/leads', { method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify({ ...bidData, source:'Homepage Bid Form', campaign:'design-06' }) });
    } catch {}
    setSubmitted(true);
  };

  return (
    <>
      {/* ── HERO ── */}
      <section style={{background:'linear-gradient(135deg,#0A0A0A 0%,#111827 60%,#1F2937 100%)',minHeight:'92vh',display:'flex',alignItems:'center',position:'relative',overflow:'hidden'}}>
        {/* Grid texture */}
        <div style={{position:'absolute',inset:0,backgroundImage:'linear-gradient(rgba(212,175,55,0.04) 1px,transparent 1px),linear-gradient(90deg,rgba(212,175,55,0.04) 1px,transparent 1px)',backgroundSize:'48px 48px'}}/>
        {/* Gold accent line */}
        <div style={{position:'absolute',top:0,left:0,right:0,height:3,background:'linear-gradient(90deg,transparent,#D4AF37,transparent)'}}/>

        <div className="container-wide" style={{position:'relative',zIndex:2,display:'grid',gridTemplateColumns:'1fr 420px',gap:64,alignItems:'center',padding:'80px 32px'}}>
          {/* Left */}
          <div>
            <div className="section-label" style={{color:'#D4AF37'}}>Commercial &amp; Facility Solutions</div>
            <h1 className="display-xl" style={{color:'#fff',marginBottom:24,lineHeight:1.0}}>
              ENTERPRISE<br/>
              <span style={{WebkitTextStroke:'1px #D4AF37',color:'transparent'}}>FLOOR</span><br/>
              SYSTEMS
            </h1>
            <p style={{fontSize:18,color:'#9CA3AF',lineHeight:1.7,maxWidth:520,marginBottom:36}}>
              Industrial-grade epoxy and polished concrete for facilities that cannot afford downtime. Full specification packages, competitive bids, certified installation.
            </p>
            <div style={{display:'flex',gap:12,flexWrap:'wrap'}}>
              <Link href="/commercial" className="btn-primary">Request a Bid</Link>
              <Link href="/specs" className="btn-outline">Download Specifications</Link>
            </div>
            {/* Trust row */}
            <div style={{display:'flex',gap:32,marginTop:48,borderTop:'1px solid #1F2937',paddingTop:32}}>
              {STATS.map(s=>(
                <div key={s.label}>
                  <div style={{fontFamily:'var(--font-display)',fontSize:36,color:'#D4AF37',lineHeight:1}}>{s.num}</div>
                  <div style={{fontSize:11,color:'#6B7280',letterSpacing:'0.08em',textTransform:'uppercase',marginTop:4}}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Bid card */}
          <div style={{background:'#fff',borderRadius:12,padding:'36px',boxShadow:'0 24px 80px rgba(0,0,0,0.4)'}}>
            {submitted ? (
              <div style={{textAlign:'center',padding:'24px 0'}}>
                <div style={{fontSize:48,marginBottom:16}}>✓</div>
                <h3 style={{fontFamily:'var(--font-display)',fontSize:28,marginBottom:8,color:'#0A0A0A'}}>BID REQUEST RECEIVED</h3>
                <p style={{fontSize:14,color:'#6B7280'}}>A specifications consultant will contact you within 1 business day.</p>
              </div>
            ) : (
              <>
                <div style={{marginBottom:24}}>
                  <div className="section-label" style={{fontSize:10}}>Free Bid Request</div>
                  <h2 style={{fontFamily:'var(--font-display)',fontSize:28,color:'#0A0A0A',lineHeight:1.1}}>GET YOUR PROJECT<br/>SPECIFICATION</h2>
                </div>
                <form onSubmit={handleBidSubmit} style={{display:'flex',flexDirection:'column',gap:14}}>
                  <div className="form-group">
                    <label className="form-label">Facility Type</label>
                    <select className="form-select" value={bidData.sector} onChange={e=>setBidData({...bidData,sector:e.target.value})} required>
                      <option value="">Select sector...</option>
                      {SECTORS.map(s=><option key={s.title} value={s.title}>{s.title}</option>)}
                    </select>
                  </div>
                  <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:12}}>
                    <div className="form-group">
                      <label className="form-label">Sq Footage</label>
                      <input className="form-input" placeholder="e.g. 10,000" value={bidData.sqft} onChange={e=>setBidData({...bidData,sqft:e.target.value})} required/>
                    </div>
                    <div className="form-group">
                      <label className="form-label">Timeline</label>
                      <select className="form-select" value={bidData.timeline} onChange={e=>setBidData({...bidData,timeline:e.target.value})}>
                        <option value="">Select...</option>
                        <option>ASAP</option><option>1–3 months</option><option>3–6 months</option><option>Planning phase</option>
                      </select>
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="form-label">Your Name</label>
                    <input className="form-input" placeholder="Full name" value={bidData.name} onChange={e=>setBidData({...bidData,name:e.target.value})} required/>
                  </div>
                  <div className="form-group">
                    <label className="form-label">Email</label>
                    <input className="form-input" type="email" placeholder="work@company.com" value={bidData.email} onChange={e=>setBidData({...bidData,email:e.target.value})} required/>
                  </div>
                  <div className="form-group">
                    <label className="form-label">Phone</label>
                    <input className="form-input" type="tel" placeholder="(555) 000-0000" value={bidData.phone} onChange={e=>setBidData({...bidData,phone:e.target.value})}/>
                  </div>
                  <button type="submit" className="btn-primary" style={{marginTop:4,justifyContent:'center',width:'100%',padding:'16px'}}>
                    REQUEST SPECIFICATION & BID →
                  </button>
                  <p style={{fontSize:11,color:'#9CA3AF',textAlign:'center'}}>No spam. No obligation. Response within 1 business day.</p>
                </form>
              </>
            )}
          </div>
        </div>
      </section>

      {/* ── SECTORS ── */}
      <section style={{padding:'96px 0',background:'#F9FAFB'}}>
        <div className="container">
          <div style={{textAlign:'center',marginBottom:56}}>
            <div className="section-label" style={{justifyContent:'center'}}>Industries Served</div>
            <h2 className="display-md" style={{color:'#0A0A0A'}}>BUILT FOR YOUR FACILITY</h2>
            <p style={{fontSize:16,color:'#6B7280',marginTop:12,maxWidth:560,margin:'12px auto 0'}}>
              Every environment demands different performance. We specify and install the right system for your exact conditions.
            </p>
          </div>
          <div className="grid-3">
            {SECTORS.map(s=>(
              <div key={s.title} className="card" style={{cursor:'pointer'}}>
                <div style={{fontSize:32,marginBottom:14}}>{s.icon}</div>
                <h3 style={{fontFamily:'var(--font-display)',fontSize:22,color:'#0A0A0A',marginBottom:8,letterSpacing:'0.03em'}}>{s.title}</h3>
                <p style={{fontSize:14,color:'#6B7280',lineHeight:1.6}}>{s.desc}</p>
                <Link href="/commercial" style={{display:'inline-flex',alignItems:'center',gap:6,marginTop:16,fontSize:13,fontWeight:600,color:'#D4AF37',textDecoration:'none'}}>
                  Get Specifications →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FLOOR SYSTEMS ── */}
      <section style={{padding:'96px 0',background:'#fff'}}>
        <div className="container">
          <div style={{display:'flex',justifyContent:'space-between',alignItems:'flex-end',marginBottom:48,flexWrap:'wrap',gap:16}}>
            <div>
              <div className="section-label">Floor System Catalog</div>
              <h2 className="display-md" style={{color:'#0A0A0A'}}>ENGINEERED SYSTEMS</h2>
            </div>
            <Link href="/floor-systems" className="btn-dark">View All Systems</Link>
          </div>
          <div style={{display:'grid',gridTemplateColumns:'repeat(5,1fr)',gap:16}}>
            {SYSTEMS.map(s=>(
              <Link key={s.slug} href={`/floor-systems/${s.slug}`} style={{textDecoration:'none'}}>
                <div style={{
                  border:'1px solid #E5E7EB',borderRadius:10,overflow:'hidden',
                  transition:'all 0.2s',background:'#fff'
                }}
                onMouseEnter={e=>{(e.currentTarget as HTMLElement).style.borderColor='#D4AF37';(e.currentTarget as HTMLElement).style.transform='translateY(-3px)';(e.currentTarget as HTMLElement).style.boxShadow='0 12px 40px rgba(0,0,0,0.1)'}}
                onMouseLeave={e=>{(e.currentTarget as HTMLElement).style.borderColor='#E5E7EB';(e.currentTarget as HTMLElement).style.transform='translateY(0)';(e.currentTarget as HTMLElement).style.boxShadow='none'}}
                >
                  <div style={{height:120,background:'linear-gradient(135deg,#111827,#374151)',display:'flex',alignItems:'center',justifyContent:'center',position:'relative'}}>
                    <div style={{fontFamily:'var(--font-display)',fontSize:13,color:'#D4AF37',letterSpacing:'0.1em',textAlign:'center',padding:'0 12px'}}>{s.label.toUpperCase()}</div>
                    <div style={{position:'absolute',top:8,right:8}}><span className="badge badge-gold" style={{fontSize:9}}>{s.badge}</span></div>
                  </div>
                  <div style={{padding:'14px 16px'}}>
                    <div style={{fontWeight:600,fontSize:13,color:'#111827',marginBottom:4}}>{s.label}</div>
                    <div style={{fontSize:11,color:'#9CA3AF'}}>{s.spec}</div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section style={{padding:'96px 0',background:'#0A0A0A',position:'relative',overflow:'hidden'}}>
        <div style={{position:'absolute',inset:0,backgroundImage:'linear-gradient(rgba(212,175,55,0.03) 1px,transparent 1px),linear-gradient(90deg,rgba(212,175,55,0.03) 1px,transparent 1px)',backgroundSize:'64px 64px'}}/>
        <div className="container" style={{position:'relative',zIndex:2}}>
          <div style={{textAlign:'center',marginBottom:64}}>
            <div className="section-label">How We Work</div>
            <h2 className="display-md" style={{color:'#fff'}}>FROM SPEC TO<br/><span style={{WebkitTextStroke:'1px #D4AF37',color:'transparent'}}>INSTALLATION</span></h2>
          </div>
          <div className="grid-4">
            {PROCESS.map((p,i)=>(
              <div key={p.step} style={{position:'relative'}}>
                {i < PROCESS.length-1 && (
                  <div style={{position:'absolute',top:28,left:'50%',width:'100%',height:1,background:'linear-gradient(90deg,#D4AF37,transparent)',zIndex:0}}/>
                )}
                <div style={{position:'relative',zIndex:1}}>
                  <div style={{
                    width:56,height:56,borderRadius:'50%',
                    border:'2px solid #D4AF37',
                    display:'flex',alignItems:'center',justifyContent:'center',
                    fontFamily:'var(--font-display)',fontSize:20,color:'#D4AF37',
                    marginBottom:20,background:'#0A0A0A'
                  }}>{p.step}</div>
                  <h3 style={{fontFamily:'var(--font-display)',fontSize:20,color:'#fff',marginBottom:10,letterSpacing:'0.03em'}}>{p.title}</h3>
                  <p style={{fontSize:13,color:'#6B7280',lineHeight:1.7}}>{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SPECS CTA ── */}
      <section style={{padding:'80px 0',background:'linear-gradient(135deg,#D4AF37 0%,#F0D060 50%,#D4AF37 100%)'}}>
        <div className="container" style={{textAlign:'center'}}>
          <h2 className="display-md" style={{color:'#0A0A0A',marginBottom:16}}>READY TO SPECIFY YOUR PROJECT?</h2>
          <p style={{fontSize:17,color:'#4B3B00',marginBottom:32,maxWidth:560,margin:'0 auto 32px'}}>
            Get a complete specification package and competitive bid — no obligation, no pressure.
          </p>
          <div style={{display:'flex',gap:16,justifyContent:'center',flexWrap:'wrap'}}>
            <Link href="/commercial" style={{
              display:'inline-flex',alignItems:'center',gap:8,
              padding:'16px 36px',background:'#0A0A0A',color:'#fff',
              borderRadius:6,fontWeight:700,fontSize:14,letterSpacing:'0.05em',textTransform:'uppercase',
              textDecoration:'none'
            }}>Request Bid Now →</Link>
            <Link href="/contact" style={{
              display:'inline-flex',alignItems:'center',gap:8,
              padding:'15px 35px',background:'transparent',color:'#0A0A0A',
              borderRadius:6,fontWeight:600,fontSize:14,letterSpacing:'0.05em',textTransform:'uppercase',
              textDecoration:'none',border:'2px solid #0A0A0A'
            }}>Talk to a Specialist</Link>
          </div>
        </div>
      </section>
    </>
  );
}
