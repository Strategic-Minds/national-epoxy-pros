import Link from 'next/link';
const STEPS = [
  { n:'01', title:'Free Quote Request', desc:'Submit your project online in 60 seconds. Tell us your project type, square footage, and zip code. No obligation whatsoever.' },
  { n:'02', title:'Site Assessment', desc:'A local National Epoxy Pros specialist visits your space, takes measurements, assesses the existing surface, and answers your questions.' },
  { n:'03', title:'Surface Preparation', desc:'Professional diamond grinding, crack repair, moisture mitigation, and primer application — the most critical step for a lasting floor.' },
  { n:'04', title:'System Application', desc:'Multi-coat professional installation using Xtreme Polishing Systems materials. Each coat is applied, cured, and inspected before the next.' },
  { n:'05', title:'Final Inspection & Walkthrough', desc:'We inspect every inch, review care instructions with you, and confirm your complete satisfaction before we leave.' },
];
export default function ProcessPage() {
  return (
    <main>
      <section style={{background:'var(--black)',color:'var(--white)',padding:'80px 24px',textAlign:'center'}}>
        <div style={{maxWidth:'var(--container)',margin:'0 auto'}}>
          <span className="eyebrow">How We Work</span>
          <h1 className="display" style={{fontSize:'clamp(36px,5vw,64px)',color:'var(--white)',marginBottom:16}}>OUR INSTALLATION PROCESS</h1>
          <p style={{fontSize:18,color:'#aaa',maxWidth:560,margin:'0 auto 32px'}}>Professional, transparent, and on schedule — every time.</p>
          <Link href="/quote" className="btn btn-gold btn-lg">START WITH A FREE QUOTE</Link>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div style={{maxWidth:760,margin:'0 auto'}}>
            {STEPS.map((s,i) => (
              <div key={s.n} style={{display:'grid',gridTemplateColumns:'80px 1fr',gap:32,marginBottom:48,alignItems:'flex-start'}}>
                <div style={{width:64,height:64,borderRadius:'50%',background:'var(--gold)',display:'flex',alignItems:'center',justifyContent:'center',fontFamily:'Montserrat,sans-serif',fontWeight:900,fontSize:20,color:'var(--black)',flexShrink:0}}>{s.n}</div>
                <div>
                  <h3 style={{fontFamily:'Montserrat,sans-serif',fontWeight:800,fontSize:20,textTransform:'uppercase',letterSpacing:'0.04em',marginBottom:10}}>{s.title}</h3>
                  <p style={{fontSize:16,color:'var(--text-secondary)',lineHeight:1.7}}>{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <div className="cta-banner"><div className="container"><h2>READY TO GET STARTED?</h2><p>Get a free quote in 60 seconds.</p><div className="cta-banner-btns"><Link href="/quote" className="btn btn-gold btn-lg">GET MY FREE QUOTE</Link></div></div></div>
    </main>
  );
}
