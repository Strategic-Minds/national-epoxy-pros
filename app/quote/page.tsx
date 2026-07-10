'use client';
import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const STEPS = ['Project Info','Measurements','Floor & Finish','Photos','Contact & Review'];

interface FormData {
  projectType: string; customerType: string; squareFeet: string; zip: string; timeline: string;
  measureMethod: string; length: string; width: string; surfaceType: string; existingCoating: string; accessNotes: string;
  floorSystem: string; colorPref: string; finishLevel: string; concreteCondition: string; moistureIssue: string;
  files: File[];
  fullName: string; email: string; phone: string; contactMethod: string; contactTime: string; notes: string; consent: boolean;
}

const init: FormData = {
  projectType:'', customerType:'', squareFeet:'', zip:'', timeline:'',
  measureMethod:'', length:'', width:'', surfaceType:'', existingCoating:'', accessNotes:'',
  floorSystem:'', colorPref:'', finishLevel:'', concreteCondition:'', moistureIssue:'',
  files:[],
  fullName:'', email:'', phone:'', contactMethod:'', contactTime:'', notes:'', consent:false,
};

function OptionCard({ label, icon, selected, onClick }: { label:string; icon:string; selected:boolean; onClick:()=>void }) {
  return (
    <div className={`option-card${selected?' selected':''}`} onClick={onClick} role="button" tabIndex={0} onKeyDown={e=>e.key==='Enter'&&onClick()}>
      <div className="icon">{icon}</div>
      <div className="label">{label}</div>
    </div>
  );
}

export default function QuotePage() {
  const [step, setStep] = useState(0);
  const [data, setData] = useState<FormData>(init);
  const [status, setStatus] = useState<'idle'|'loading'|'ok'|'err'>('idle');
  const router = useRouter();

  const set = (k: keyof FormData) => (v: string | boolean) => setData(p => ({...p,[k]:v}));

  async function submit() {
    setStatus('loading');
    try {
      const body: Record<string, unknown> = { ...data, files: data.files.map(f=>f.name), source: 'Quote Wizard', quoteRequestNumber: `QR-${Date.now()}` };
      const res = await fetch('/api/leads', { method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify(body) });
      if (res.ok) { setStatus('ok'); router.push('/thank-you'); }
      else setStatus('err');
    } catch { setStatus('err'); }
  }

  const pct = Math.round(((step+1)/STEPS.length)*100);

  return (
    <main className="wizard-wrap">
      <div className="wizard-card">
        <div className="wizard-header">
          <div style={{display:'flex',justifyContent:'space-between',alignItems:'flex-start',flexWrap:'wrap',gap:8}}>
            <div>
              <h1>GET YOUR FREE QUOTE</h1>
              <p>Step {step+1} of {STEPS.length} — {STEPS[step]}</p>
            </div>
            <Link href="/" style={{color:'#666',fontSize:13}}>← Back to Home</Link>
          </div>
          <div className="progress-bar"><div className="progress-fill" style={{width:`${pct}%`}} /></div>
          <div className="step-dots">
            {STEPS.map((_,i) => <div key={i} className={`step-dot${i===step?' active':i<step?' done':''}`} />)}
          </div>
        </div>

        <div className="wizard-body">
          {/* STEP 1 */}
          {step === 0 && (
            <>
              <h2 className="wizard-step-title">Project Information</h2>
              <p className="wizard-step-sub">Tell us about your project so we can prepare an accurate quote.</p>
              <p style={{fontFamily:'Montserrat,sans-serif',fontWeight:700,fontSize:12,textTransform:'uppercase',letterSpacing:'0.08em',marginBottom:12,color:'var(--text-muted)'}}>Project Type</p>
              <div className="option-cards">
                {[['🏠','Garage Floor'],['🏢','Commercial'],['🌤','Patio/Outdoor'],['🏚','Basement'],['✨','Showroom'],['❓','Other']].map(([ic,lb]) => (
                  <OptionCard key={lb} label={lb} icon={ic} selected={data.projectType===lb} onClick={()=>set('projectType')(lb)} />
                ))}
              </div>
              <p style={{fontFamily:'Montserrat,sans-serif',fontWeight:700,fontSize:12,textTransform:'uppercase',letterSpacing:'0.08em',marginBottom:12,color:'var(--text-muted)'}}>Customer Type</p>
              <div className="option-cards" style={{gridTemplateColumns:'repeat(2,1fr)'}}>
                {[['👤','Homeowner'],['🏢','Business Owner'],['👷','Contractor'],['🏗','Property Manager']].map(([ic,lb]) => (
                  <OptionCard key={lb} label={lb} icon={ic} selected={data.customerType===lb} onClick={()=>set('customerType')(lb)} />
                ))}
              </div>
              <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:16,marginTop:16}}>
                <div className="form-field"><label>Approx. Square Feet</label><input type="number" placeholder="e.g. 600" value={data.squareFeet} onChange={e=>set('squareFeet')(e.target.value)} /></div>
                <div className="form-field"><label>Zip Code</label><input type="text" placeholder="e.g. 85001" value={data.zip} onChange={e=>set('zip')(e.target.value)} /></div>
              </div>
              <div className="form-field">
                <label>Timeline</label>
                <select value={data.timeline} onChange={e=>set('timeline')(e.target.value)}>
                  <option value="">Select timeline</option>
                  {['ASAP','Within 1 Month','1–3 Months','Planning Ahead'].map(o=><option key={o}>{o}</option>)}
                </select>
              </div>
            </>
          )}

          {/* STEP 2 */}
          {step === 1 && (
            <>
              <h2 className="wizard-step-title">Measurements & Location</h2>
              <p className="wizard-step-sub">Help us understand your space size and current floor condition.</p>
              <div className="form-field">
                <label>How did you measure?</label>
                <select value={data.measureMethod} onChange={e=>set('measureMethod')(e.target.value)}>
                  <option value="">Select method</option>
                  {['Tape Measure','Estimated','Professional Measured'].map(o=><option key={o}>{o}</option>)}
                </select>
              </div>
              <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:16}}>
                <div className="form-field"><label>Length (ft)</label><input type="number" placeholder="20" value={data.length} onChange={e=>set('length')(e.target.value)} /></div>
                <div className="form-field"><label>Width (ft)</label><input type="number" placeholder="20" value={data.width} onChange={e=>set('width')(e.target.value)} /></div>
              </div>
              {data.length && data.width && <p style={{fontSize:13,color:'var(--gold)',fontWeight:700,marginBottom:16}}>Calculated area: {(parseFloat(data.length)||0)*(parseFloat(data.width)||0)} sq ft</p>}
              <div className="form-field">
                <label>Surface Type</label>
                <select value={data.surfaceType} onChange={e=>set('surfaceType')(e.target.value)}>
                  <option value="">Select surface</option>
                  {['Concrete','Wood','Existing Epoxy','Tile','Other'].map(o=><option key={o}>{o}</option>)}
                </select>
              </div>
              <div className="form-field">
                <label>Existing Coating</label>
                <select value={data.existingCoating} onChange={e=>set('existingCoating')(e.target.value)}>
                  <option value="">Select coating</option>
                  {['None','Paint','Epoxy','Sealer','Unknown'].map(o=><option key={o}>{o}</option>)}
                </select>
              </div>
              <div className="form-field"><label>Access Notes (optional)</label><input type="text" placeholder="e.g. tight driveway, steps..." value={data.accessNotes} onChange={e=>set('accessNotes')(e.target.value)} /></div>
            </>
          )}

          {/* STEP 3 */}
          {step === 2 && (
            <>
              <h2 className="wizard-step-title">Floor & Finish Selection</h2>
              <p className="wizard-step-sub">Choose the floor system and finish that fits your vision.</p>
              <p style={{fontFamily:'Montserrat,sans-serif',fontWeight:700,fontSize:12,textTransform:'uppercase',letterSpacing:'0.08em',marginBottom:12,color:'var(--text-muted)'}}>Floor System</p>
              <div className="option-cards">
                {[['🏠','Decorative Flake'],['✨','Metallic Epoxy'],['🎨','Solid Color'],['💎','Quartz'],['🏢','Polished Concrete'],['🌤','Exterior Coating']].map(([ic,lb]) => (
                  <OptionCard key={lb} label={lb} icon={ic} selected={data.floorSystem===lb} onClick={()=>set('floorSystem')(lb)} />
                ))}
              </div>
              <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:16,marginTop:16}}>
                <div className="form-field">
                  <label>Color Preference</label>
                  <select value={data.colorPref} onChange={e=>set('colorPref')(e.target.value)}>
                    <option value="">Select preference</option>
                    {['Light/Neutral','Dark/Bold','Earth Tones','Custom Mix'].map(o=><option key={o}>{o}</option>)}
                  </select>
                </div>
                <div className="form-field">
                  <label>Finish Level</label>
                  <select value={data.finishLevel} onChange={e=>set('finishLevel')(e.target.value)}>
                    <option value="">Select level</option>
                    {['Standard','Premium','Ultra Premium'].map(o=><option key={o}>{o}</option>)}
                  </select>
                </div>
              </div>
              <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:16}}>
                <div className="form-field">
                  <label>Concrete Condition</label>
                  <select value={data.concreteCondition} onChange={e=>set('concreteCondition')(e.target.value)}>
                    <option value="">Select condition</option>
                    {['Good','Minor Cracks','Major Damage','Unknown'].map(o=><option key={o}>{o}</option>)}
                  </select>
                </div>
                <div className="form-field">
                  <label>Moisture Issues?</label>
                  <select value={data.moistureIssue} onChange={e=>set('moistureIssue')(e.target.value)}>
                    <option value="">Select</option>
                    {['No','Possible','Yes'].map(o=><option key={o}>{o}</option>)}
                  </select>
                </div>
              </div>
            </>
          )}

          {/* STEP 4 */}
          {step === 3 && (
            <>
              <h2 className="wizard-step-title">Photo Uploads (Optional)</h2>
              <p className="wizard-step-sub">Photos help us give you the most accurate quote. Upload up to 4 images.</p>
              <div style={{border:'2px dashed var(--gray-border)',borderRadius:'var(--radius-lg)',padding:32,textAlign:'center',marginBottom:24}}>
                <div style={{fontSize:40,marginBottom:12}}>📸</div>
                <p style={{fontFamily:'Montserrat,sans-serif',fontWeight:700,fontSize:14,marginBottom:8}}>DRAG & DROP PHOTOS HERE</p>
                <p style={{fontSize:13,color:'var(--text-muted)',marginBottom:16}}>or click to browse — JPG, PNG, HEIC accepted (max 10MB each)</p>
                <input type="file" accept="image/*" multiple max={4}
                  onChange={e => setData(p => ({...p, files: Array.from(e.target.files||[]).slice(0,4)}))}
                  style={{display:'none'}} id="photo-upload" />
                <label htmlFor="photo-upload" className="btn btn-outline">CHOOSE PHOTOS</label>
              </div>
              {data.files.length > 0 && (
                <div>
                  <p style={{fontFamily:'Montserrat,sans-serif',fontWeight:700,fontSize:12,textTransform:'uppercase',letterSpacing:'0.08em',marginBottom:12,color:'var(--text-muted)'}}>
                    {data.files.length} file{data.files.length>1?'s':''} selected:
                  </p>
                  {data.files.map((f,i) => (
                    <div key={i} style={{display:'flex',alignItems:'center',gap:12,padding:'10px 0',borderBottom:'1px solid var(--gray-mid)',fontSize:14}}>
                      <span>📷</span><span style={{flex:1}}>{f.name}</span>
                      <span style={{color:'var(--text-muted)',fontSize:12}}>{(f.size/1024).toFixed(0)}KB</span>
                    </div>
                  ))}
                </div>
              )}
              <div style={{background:'var(--gray-light)',borderRadius:'var(--radius)',padding:16,marginTop:16,fontSize:13,color:'var(--text-muted)'}}>
                💡 Tip: Include photos of the full floor area, any cracks or damage, and any inspiration images you have.
              </div>
            </>
          )}

          {/* STEP 5 */}
          {step === 4 && (
            <>
              <h2 className="wizard-step-title">Contact & Review</h2>
              <p className="wizard-step-sub">Almost done! Review your project summary and submit your quote request.</p>
              {/* Summary */}
              <div style={{background:'var(--gray-light)',borderRadius:'var(--radius-lg)',padding:20,marginBottom:24,fontSize:14}}>
                <p style={{fontFamily:'Montserrat,sans-serif',fontWeight:800,fontSize:12,textTransform:'uppercase',letterSpacing:'0.08em',marginBottom:12,color:'var(--text-muted)'}}>YOUR PROJECT SUMMARY</p>
                <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:8}}>
                  {[
                    ['Project Type',data.projectType||'—'],['Square Feet',data.squareFeet||'—'],
                    ['Floor System',data.floorSystem||'—'],['Timeline',data.timeline||'—'],
                    ['Zip Code',data.zip||'—'],['Finish',data.finishLevel||'—'],
                  ].map(([k,v]) => (
                    <div key={k}><span style={{color:'var(--text-muted)',fontSize:12}}>{k}: </span><strong>{v}</strong></div>
                  ))}
                </div>
              </div>
              <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:16}}>
                <div className="form-field" style={{gridColumn:'1/-1'}}><label>Full Name *</label><input type="text" placeholder="Your full name" required value={data.fullName} onChange={e=>set('fullName')(e.target.value)} /></div>
                <div className="form-field"><label>Email Address *</label><input type="email" placeholder="name@email.com" required value={data.email} onChange={e=>set('email')(e.target.value)} /></div>
                <div className="form-field"><label>Phone Number *</label><input type="tel" placeholder="(000) 000-0000" required value={data.phone} onChange={e=>set('phone')(e.target.value)} /></div>
                <div className="form-field"><label>Preferred Contact</label><select value={data.contactMethod} onChange={e=>set('contactMethod')(e.target.value)}><option value="">Select</option>{['Phone Call','Text Message','Email'].map(o=><option key={o}>{o}</option>)}</select></div>
                <div className="form-field"><label>Best Time to Contact</label><select value={data.contactTime} onChange={e=>set('contactTime')(e.target.value)}><option value="">Select</option>{['Morning (8am–12pm)','Afternoon (12pm–5pm)','Evening (5pm–8pm)','Anytime'].map(o=><option key={o}>{o}</option>)}</select></div>
              </div>
              <div className="form-field"><label>Additional Notes</label><textarea placeholder="Anything else we should know?" rows={3} value={data.notes} onChange={e=>set('notes')(e.target.value)} /></div>
              <label style={{display:'flex',alignItems:'flex-start',gap:12,cursor:'pointer',fontSize:14,color:'var(--text-secondary)',marginTop:8}}>
                <input type="checkbox" checked={data.consent} onChange={e=>set('consent')(e.target.checked)} style={{marginTop:2,width:'auto',accentColor:'var(--gold)'}} />
                <span>I agree to be contacted about my quote request. I understand this is not a binding estimate. <Link href="/privacy" style={{color:'var(--gold)'}}>Privacy Policy</Link></span>
              </label>
              {status === 'err' && <p style={{color:'#dc2626',fontSize:13,marginTop:12}}>Something went wrong. Please try again.</p>}
            </>
          )}
        </div>

        <div className="wizard-footer">
          {step > 0 ? (
            <button className="btn btn-outline" onClick={() => setStep(s => s-1)}>← BACK</button>
          ) : <div />}
          {step < STEPS.length-1 ? (
            <button className="btn btn-gold" onClick={() => setStep(s => s+1)}>NEXT STEP →</button>
          ) : (
            <button className="btn btn-gold btn-lg" onClick={submit} disabled={status==='loading'||!data.consent||!data.fullName||!data.email||!data.phone}>
              {status==='loading' ? 'SUBMITTING...' : '✓ SUBMIT MY FREE QUOTE'}
            </button>
          )}
        </div>
      </div>
    </main>
  );
}
