'use client';
import { useState } from 'react';
import Link from 'next/link';

const NAV = [
  { label: 'Solutions', href: '/solutions', sub: ['Commercial Flooring','Industrial Facilities','Warehouse & Logistics','Healthcare','Retail & Hospitality'] },
  { label: 'Floor Systems', href: '/floor-systems', sub: ['Decorative Flake','Metallic Epoxy','Solid Color','Quartz Flooring','Polished Concrete'] },
  { label: 'Projects', href: '/projects' },
  { label: 'Specifications', href: '/specs' },
  { label: 'About', href: '/about' },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [activeNav, setActiveNav] = useState<string|null>(null);

  return (
    <>
      {/* Announcement bar */}
      <div className="announcement-bar">
        ★ &nbsp;Nationwide Commercial & Industrial Epoxy Flooring — Request Specifications &amp; Bids&nbsp; ★
      </div>

      <header style={{
        position:'sticky',top:0,zIndex:100,
        background:'#fff',
        borderBottom:'1px solid #E5E7EB',
        boxShadow:'0 1px 8px rgba(0,0,0,0.06)'
      }}>
        <div className="container-wide" style={{display:'flex',alignItems:'center',justifyContent:'space-between',height:'72px'}}>
          {/* Logo */}
          <Link href="/" style={{textDecoration:'none',display:'flex',alignItems:'center',gap:'12px'}}>
            <div style={{
              width:40,height:40,borderRadius:6,
              background:'linear-gradient(135deg,#0A0A0A,#1A1A1A)',
              display:'flex',alignItems:'center',justifyContent:'center',
              fontSize:18,fontWeight:900,color:'#D4AF37',
              fontFamily:'var(--font-display)'
            }}>N</div>
            <div>
              <div style={{fontFamily:'var(--font-display)',fontSize:20,letterSpacing:'0.05em',color:'#0A0A0A',lineHeight:1}}>NATIONAL EPOXY PROS</div>
              <div style={{fontSize:10,color:'#9CA3AF',letterSpacing:'0.12em',textTransform:'uppercase',marginTop:2}}>Commercial &amp; Facility Solutions</div>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav style={{display:'flex',alignItems:'center',gap:'4px'}} className="desktop-nav">
            {NAV.map(item => (
              <div key={item.label} style={{position:'relative'}}
                onMouseEnter={()=>item.sub&&setActiveNav(item.label)}
                onMouseLeave={()=>setActiveNav(null)}>
                <Link href={item.href} style={{
                  padding:'8px 14px',borderRadius:6,
                  fontSize:13,fontWeight:600,letterSpacing:'0.03em',
                  color:'#374151',textDecoration:'none',display:'block',
                  transition:'color 0.15s'
                }}
                onMouseEnter={e=>(e.currentTarget.style.color='#D4AF37')}
                onMouseLeave={e=>(e.currentTarget.style.color='#374151')}
                >{item.label}</Link>
                {item.sub && activeNav === item.label && (
                  <div style={{
                    position:'absolute',top:'100%',left:0,minWidth:200,
                    background:'#fff',border:'1px solid #E5E7EB',borderRadius:8,
                    boxShadow:'0 8px 32px rgba(0,0,0,0.12)',padding:'8px 0',zIndex:200
                  }}>
                    {item.sub.map(s=>(
                      <Link key={s} href={`${item.href}/${s.toLowerCase().replace(/[^a-z0-9]+/g,'-')}`}
                        style={{display:'block',padding:'10px 18px',fontSize:13,color:'#374151',textDecoration:'none'}}
                        onMouseEnter={e=>{e.currentTarget.style.background='#F9FAFB';e.currentTarget.style.color='#D4AF37'}}
                        onMouseLeave={e=>{e.currentTarget.style.background='transparent';e.currentTarget.style.color='#374151'}}
                      >{s}</Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* CTA */}
          <div style={{display:'flex',alignItems:'center',gap:'12px'}}>
            <Link href="tel:+14808008246" style={{fontSize:13,fontWeight:600,color:'#374151',textDecoration:'none',letterSpacing:'0.02em'}}>
              (480) 800-8246
            </Link>
            <Link href="/commercial" className="btn-primary" style={{padding:'10px 20px',fontSize:12}}>
              Request Bid
            </Link>
            {/* Mobile hamburger */}
            <button onClick={()=>setOpen(!open)} className="mobile-menu-btn" style={{
              display:'none',background:'none',border:'none',cursor:'pointer',padding:8
            }}>
              <div style={{width:22,height:2,background:'#374151',marginBottom:5,borderRadius:2}}/>
              <div style={{width:22,height:2,background:'#374151',marginBottom:5,borderRadius:2}}/>
              <div style={{width:22,height:2,background:'#374151',borderRadius:2}}/>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {open && (
          <div style={{background:'#fff',borderTop:'1px solid #E5E7EB',padding:'16px 24px'}}>
            {NAV.map(item=>(
              <Link key={item.label} href={item.href}
                style={{display:'block',padding:'12px 0',fontSize:15,fontWeight:600,color:'#111827',textDecoration:'none',borderBottom:'1px solid #F3F4F6'}}
                onClick={()=>setOpen(false)}
              >{item.label}</Link>
            ))}
            <Link href="/commercial" className="btn-primary" style={{marginTop:16,display:'block',textAlign:'center'}}>
              Request Bid
            </Link>
          </div>
        )}
      </header>

      <style>{`
        @media (max-width: 1024px) { .desktop-nav { display: none !important; } .mobile-menu-btn { display: block !important; } }
      `}</style>
    </>
  );
}
