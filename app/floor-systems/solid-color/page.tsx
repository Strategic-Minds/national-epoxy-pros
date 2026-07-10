import Link from 'next/link';
import type { Metadata } from 'next';
export const metadata: Metadata = { title: 'Solid Color Epoxy', description: 'High-gloss solid color epoxy systems for warehouses, commercial spaces, and industrial floors. Clean, professional, and built to last decades.' };
export default function Page() {
  return (
    <main>
      <section style={{background:'var(--black)',color:'var(--white)',padding:'80px 24px'}}>
        <div style={{maxWidth:'var(--container)',margin:'0 auto',display:'grid',gridTemplateColumns:'1fr 380px',gap:48,alignItems:'center'}}>
          <div>
            <span className="eyebrow">Solid Color Epoxy</span>
            <h1 className="display" style={{fontSize:'clamp(36px,5vw,64px)',color:'var(--white)',marginBottom:16}}>SOLID COLOR. PROFESSIONALLY CLEAN.</h1>
            <p style={{fontSize:17,color:'#aaa',marginBottom:32,maxWidth:520}}>High-gloss solid color epoxy systems for warehouses, commercial spaces, and industrial floors. Clean, professional, and built to last decades.</p>
            <div style={{display:'flex',gap:16,flexWrap:'wrap'}}>
              <Link href="/quote" className="btn btn-gold btn-lg">GET A FREE QUOTE</Link>
              <Link href="/floor-systems" className="btn btn-outline-white">ALL SYSTEMS</Link>
            </div>
          </div>
          <div style={{background:'rgba(255,255,255,0.05)',borderRadius:'var(--radius-lg)',padding:32}}>
            <h3 style={{fontFamily:'Montserrat,sans-serif',fontWeight:800,fontSize:16,marginBottom:20,color:'var(--gold)'}}>GET YOUR FREE QUOTE</h3>
            <Link href="/quote" className="btn btn-gold" style={{width:'100%',justifyContent:'center'}}>START QUOTE WIZARD →</Link>
          </div>
        </div>
      </section>
      <section className="section"><div className="container">
        <div className="section-header"><span className="eyebrow">Benefits</span><h2>WHY CHOOSE SOLID COLOR EPOXY?</h2></div>
        <div className="grid-3">
          {['Slip-resistant surface','Chemical & stain resistant','UV-stable, fade-resistant','Easy to clean and maintain','Installed by certified pros','10-year workmanship warranty'].map(b => (
            <div key={b} style={{padding:24,border:'1px solid var(--gray-mid)',borderRadius:'var(--radius-lg)',display:'flex',gap:12,alignItems:'flex-start'}}>
              <span style={{color:'var(--gold)',fontSize:18,flexShrink:0}}>✓</span>
              <span style={{fontFamily:'Montserrat,sans-serif',fontWeight:700,fontSize:14}}>{b}</span>
            </div>
          ))}
        </div>
      </div></section>
      <div className="cta-banner"><div className="container"><h2>READY TO UPGRADE YOUR FLOOR?</h2><p>Get a free, no-obligation quote today.</p><div className="cta-banner-btns"><Link href="/quote" className="btn btn-gold btn-lg">GET MY FREE QUOTE</Link></div></div></div>
    </main>
  );
}
