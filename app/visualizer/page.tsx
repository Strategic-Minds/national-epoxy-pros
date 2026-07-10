'use client';
import { useState } from 'react';
import Link from 'next/link';
const SYSTEMS = ['Decorative Flake','Metallic Epoxy','Solid Color','Quartz Flooring','Polished Concrete'];
const COLORS = [['Domino','#3a3a3a'],['Gravel','#8a8276'],['Tuxedo','#1a1a2e'],['Pearl','#e8e0d0'],['Onyx','#1c1c1c'],['Sandstone','#c4a882']];
export default function VisualizerPage() {
  const [step, setStep] = useState(0);
  const [photo, setPhoto] = useState<string|null>(null);
  const [system, setSystem] = useState('');
  const [color, setColor] = useState('');
  return (
    <main>
      <section style={{background:'var(--black)',color:'var(--white)',padding:'64px 24px',textAlign:'center'}}>
        <div style={{maxWidth:'var(--container)',margin:'0 auto'}}>
          <span className="eyebrow">Design Tool</span>
          <h1 className="display" style={{fontSize:'clamp(36px,5vw,60px)',color:'var(--white)',marginBottom:16}}>VISUALIZE YOUR NEW FLOOR</h1>
          <p style={{fontSize:17,color:'#aaa',maxWidth:520,margin:'0 auto'}}>Upload a photo of your space and explore how our floor systems will look — before you commit.</p>
        </div>
      </section>
      <section className="section">
        <div className="container" style={{maxWidth:860}}>
          {/* Step indicators */}
          <div style={{display:'flex',gap:0,marginBottom:40,borderRadius:'var(--radius)',overflow:'hidden',border:'1px solid var(--gray-mid)'}}>
            {['1. Upload Photo','2. Choose System','3. Choose Color','4. Preview'].map((s,i) => (
              <button key={s} onClick={()=>setStep(i)} style={{flex:1,padding:'14px 8px',background:step===i?'var(--gold)':'var(--white)',color:step===i?'var(--black)':'var(--text-muted)',fontFamily:'Montserrat,sans-serif',fontWeight:700,fontSize:12,textTransform:'uppercase',letterSpacing:'0.06em',border:'none',borderRight:i<3?'1px solid var(--gray-mid)':'none',cursor:'pointer'}}>{s}</button>
            ))}
          </div>

          {step === 0 && (
            <div style={{border:'2px dashed var(--gray-border)',borderRadius:'var(--radius-lg)',padding:64,textAlign:'center'}}>
              <div style={{fontSize:56,marginBottom:16}}>📸</div>
              <h2 style={{fontFamily:'Montserrat,sans-serif',fontWeight:800,fontSize:22,marginBottom:12}}>UPLOAD YOUR CURRENT FLOOR PHOTO</h2>
              <p style={{color:'var(--text-muted)',marginBottom:24}}>Upload a clear photo for the best visualization results</p>
              <input type="file" accept="image/*" id="viz-upload" style={{display:'none'}} onChange={e=>{const f=e.target.files?.[0];if(f){setPhoto(URL.createObjectURL(f));setStep(1);}}} />
              <label htmlFor="viz-upload" className="btn btn-gold btn-lg" style={{cursor:'pointer'}}>UPLOAD CURRENT FLOOR PHOTO</label>
              <p style={{fontSize:12,color:'var(--text-muted)',marginTop:16}}>JPG, PNG, HEIC accepted • Max 20MB</p>
            </div>
          )}

          {step === 1 && (
            <div>
              {photo && <img src={photo} alt="Your floor" style={{width:'100%',borderRadius:'var(--radius-lg)',marginBottom:24,maxHeight:320,objectFit:'cover'}} />}
              <h2 style={{fontFamily:'Montserrat,sans-serif',fontWeight:800,fontSize:22,marginBottom:24}}>CHOOSE YOUR FLOOR SYSTEM</h2>
              <div className="grid-3">
                {SYSTEMS.map(s => (
                  <div key={s} className={`option-card${system===s?' selected':''}`} onClick={()=>{setSystem(s);setStep(2);}}>
                    <div className="label" style={{fontSize:13}}>{s}</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {step === 2 && (
            <div>
              <h2 style={{fontFamily:'Montserrat,sans-serif',fontWeight:800,fontSize:22,marginBottom:24}}>CHOOSE YOUR COLOR</h2>
              <div style={{display:'grid',gridTemplateColumns:'repeat(6,1fr)',gap:12,marginBottom:24}}>
                {COLORS.map(([name,hex]) => (
                  <div key={name} onClick={()=>{setColor(name);setStep(3);}} style={{cursor:'pointer',textAlign:'center'}}>
                    <div style={{width:'100%',aspectRatio:'1',borderRadius:'var(--radius)',background:hex,border:`2px solid ${color===name?'var(--gold)':'transparent'}`,marginBottom:8,transition:'border-color 0.15s'}} />
                    <span style={{fontSize:11,fontFamily:'Montserrat,sans-serif',fontWeight:700}}>{name}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {step === 3 && (
            <div style={{textAlign:'center'}}>
              {photo && (
                <div style={{position:'relative',borderRadius:'var(--radius-lg)',overflow:'hidden',marginBottom:24}}>
                  <img src={photo} alt="Your floor" style={{width:'100%',maxHeight:400,objectFit:'cover'}} />
                  <div style={{position:'absolute',inset:0,background:'rgba(212,175,55,0.18)',display:'flex',alignItems:'center',justifyContent:'center'}}>
                    <div style={{background:'rgba(0,0,0,0.7)',color:'white',padding:'12px 24px',borderRadius:8,fontFamily:'Montserrat,sans-serif',fontWeight:700,fontSize:13}}>VISUALIZATION CONCEPT — {system} in {color}</div>
                  </div>
                </div>
              )}
              <div style={{background:'var(--gray-light)',borderRadius:'var(--radius)',padding:16,marginBottom:24,fontSize:13,color:'var(--text-muted)'}}>
                ⚠️ This is a visualization concept. Actual results vary based on lighting, surface condition, and material. Request a free quote for accurate samples.
              </div>
              <div style={{display:'flex',gap:16,justifyContent:'center',flexWrap:'wrap'}}>
                <Link href="/quote" className="btn btn-gold btn-lg">GET A FREE QUOTE FOR THIS DESIGN</Link>
                <button className="btn btn-outline" onClick={()=>setStep(0)}>START OVER</button>
              </div>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
