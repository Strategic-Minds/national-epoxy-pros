'use client';
import { useState } from 'react';
import Link from 'next/link';
const FILTERS = ['All','Garage','Commercial','Patio','Basement','Showroom'];
const PROJECTS = [
  { type:'Garage', system:'Decorative Flake', location:'Phoenix, AZ', img:'/images/floor-systems/nep-hero-flake-garage-sports-cars.png', title:'Luxury Garage Transformation' },
  { type:'Commercial', system:'Metallic Epoxy', location:'Nashville, TN', img:'/images/floor-systems/nep-metallic-epoxy-luxury-lounge.png', title:'Commercial Showroom Floor' },
  { type:'Commercial', system:'Polished Concrete', location:'Dallas, TX', img:'/images/floor-systems/nep-polished-concrete-commercial-lobby.png', title:'Corporate Lobby Refinish' },
  { type:'Patio', system:'Exterior Coating', location:'Orlando, FL', img:'/images/floor-systems/nep-exterior-patio-coating.png', title:'Resort Pool Deck Coating' },
  { type:'Commercial', system:'Solid Color Epoxy', location:'Atlanta, GA', img:'/images/floor-systems/nep-solid-color-commercial-epoxy.png', title:'Warehouse Industrial Floor' },
  { type:'Garage', system:'Polished Concrete', location:'Denver, CO', img:'/images/floor-systems/nep-polished-concrete-retail.png', title:'Retail Space Concrete Polish' },
];
export default function ProjectsPage() {
  const [filter, setFilter] = useState('All');
  const shown = filter === 'All' ? PROJECTS : PROJECTS.filter(p => p.type === filter);
  return (
    <main>
      <section style={{background:'var(--black)',color:'var(--white)',padding:'64px 24px',textAlign:'center'}}>
        <div style={{maxWidth:'var(--container)',margin:'0 auto'}}>
          <span className="eyebrow">Our Work</span>
          <h1 className="display" style={{fontSize:'clamp(36px,5vw,60px)',color:'var(--white)',marginBottom:16}}>PROJECT GALLERY</h1>
          <p style={{fontSize:17,color:'#aaa'}}>Real projects. Real results. See what we can do for your space.</p>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div style={{display:'flex',gap:8,flexWrap:'wrap',justifyContent:'center',marginBottom:40}}>
            {FILTERS.map(f => (
              <button key={f} className={`btn btn-sm ${filter===f?'btn-gold':'btn-outline'}`} onClick={()=>setFilter(f)}>{f}</button>
            ))}
          </div>
          <div className="grid-3">
            {shown.map((p,i) => (
              <div key={i} className="card">
                <img src={p.img} alt={p.title} className="card-img" />
                <div className="card-body">
                  <span style={{display:'inline-block',background:'rgba(212,175,55,0.12)',color:'var(--gold)',padding:'4px 10px',borderRadius:999,fontFamily:'Montserrat,sans-serif',fontWeight:700,fontSize:11,textTransform:'uppercase',letterSpacing:'0.06em',marginBottom:12}}>{p.type}</span>
                  <h3>{p.title}</h3>
                  <p style={{fontSize:13,color:'var(--text-muted)',marginBottom:4}}>System: {p.system}</p>
                  <p style={{fontSize:13,color:'var(--text-muted)'}}>📍 {p.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <div className="cta-banner"><div className="container"><h2>LOVE WHAT YOU SEE?</h2><p>Get a free quote for your project today.</p><div className="cta-banner-btns"><Link href="/quote" className="btn btn-gold btn-lg">GET MY FREE QUOTE</Link></div></div></div>
    </main>
  );
}
