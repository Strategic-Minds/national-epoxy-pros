import Link from 'next/link';
const SYSTEMS=[
  {slug:'flake',title:'Decorative Flake',desc:'Durable chip-broadcast systems for garages and commercial spaces.'},
  {slug:'metallic',title:'Metallic Epoxy',desc:'Premium decorative metallic finish for high-end applications.'},
  {slug:'solid-color',title:'Solid Color Epoxy',desc:'Single or multi-coat solid color systems for industrial use.'},
  {slug:'quartz',title:'Quartz Flooring',desc:'Slip-resistant quartz broadcast for safety-critical environments.'},
  {slug:'polished-concrete',title:'Polished Concrete',desc:'Mechanically densified and polished concrete for commercial facilities.'},
];
export default function FloorSystemsPage(){
  return(
    <main>
      <div style={{background:'#0A0A0A',padding:'56px 0'}}>
        <div className="container">
          <div className="section-label">Floor System Catalog</div>
          <h1 className="display-md" style={{color:'#fff'}}>ALL FLOOR SYSTEMS</h1>
        </div>
      </div>
      <div className="container" style={{padding:'64px 24px'}}>
        <div className="grid-3">
          {SYSTEMS.map(s=>(
            <Link key={s.slug} href={`/floor-systems/${s.slug}`} style={{textDecoration:'none'}}>
              <div className="card">
                <h2 style={{fontFamily:'var(--font-display)',fontSize:24,color:'#0A0A0A',marginBottom:10}}>{s.title}</h2>
                <p style={{fontSize:14,color:'#6B7280',lineHeight:1.6,marginBottom:16}}>{s.desc}</p>
                <span style={{fontSize:13,fontWeight:600,color:'#D4AF37'}}>View Specifications →</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
