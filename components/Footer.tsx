import Link from 'next/link';

export default function Footer() {
  return (
    <footer style={{background:'#0A0A0A',color:'#9CA3AF',paddingTop:64,paddingBottom:32}}>
      <div className="container-wide">
        <div style={{display:'grid',gridTemplateColumns:'2fr 1fr 1fr 1fr',gap:48,paddingBottom:48,borderBottom:'1px solid #1F2937'}}>
          <div>
            <div style={{fontFamily:'var(--font-display)',fontSize:24,color:'#D4AF37',letterSpacing:'0.05em',marginBottom:12}}>NATIONAL EPOXY PROS</div>
            <p style={{fontSize:14,lineHeight:1.7,color:'#6B7280',maxWidth:300}}>Enterprise-grade epoxy and polished concrete flooring systems for commercial facilities, warehouses, healthcare, and industrial environments nationwide.</p>
          </div>
          <div>
            <div style={{fontSize:11,fontWeight:700,letterSpacing:'0.12em',textTransform:'uppercase' as const,color:'#D4AF37',marginBottom:16}}>Solutions</div>
            {['Commercial','Industrial','Warehouse','Healthcare','Retail'].map(l=>(
              <Link key={l} href={`/solutions`} style={{display:'block',fontSize:14,color:'#6B7280',textDecoration:'none',marginBottom:10}}>{l}</Link>
            ))}
          </div>
          <div>
            <div style={{fontSize:11,fontWeight:700,letterSpacing:'0.12em',textTransform:'uppercase' as const,color:'#D4AF37',marginBottom:16}}>Floor Systems</div>
            {[['Decorative Flake','flake'],['Metallic Epoxy','metallic'],['Solid Color','solid-color'],['Quartz Flooring','quartz'],['Polished Concrete','polished-concrete']].map(([l,h])=>(
              <Link key={l} href={`/floor-systems/${h}`} style={{display:'block',fontSize:14,color:'#6B7280',textDecoration:'none',marginBottom:10}}>{l}</Link>
            ))}
          </div>
          <div>
            <div style={{fontSize:11,fontWeight:700,letterSpacing:'0.12em',textTransform:'uppercase' as const,color:'#D4AF37',marginBottom:16}}>Company</div>
            {[['About','/about'],['Projects','/projects'],['Specifications','/specs'],['Contact','/contact'],['Privacy','/privacy']].map(([l,h])=>(
              <Link key={l} href={h} style={{display:'block',fontSize:14,color:'#6B7280',textDecoration:'none',marginBottom:10}}>{l}</Link>
            ))}
          </div>
        </div>
        <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',paddingTop:24,flexWrap:'wrap' as const,gap:16}}>
          <p style={{fontSize:13}}>© 2026 National Epoxy Pros. All rights reserved.</p>
          <p style={{fontSize:12,color:'#4B5563'}}>Licensed · Bonded · Insured · Nationwide Service</p>
        </div>
      </div>
    </footer>
  );
}
