import Link from 'next/link';

const SOLUTIONS = [
  { slug:'industrial', title:'Industrial & Manufacturing', icon:'🏭', desc:'Heavy-duty epoxy systems rated for chemical splash, thermal shock, and machinery impact loads.' },
  { slug:'warehouse', title:'Warehouse & Logistics', icon:'🏬', desc:'Seamless forklift-rated floors with aisle delineation, safety striping, and anti-fatigue zones.' },
  { slug:'healthcare', title:'Healthcare & Pharmaceutical', icon:'🏥', desc:'Antimicrobial, VOC-compliant, seamless floors meeting FDA and OSHA requirements.' },
  { slug:'commercial', title:'Commercial Office', icon:'🏢', desc:'Polished concrete and decorative systems that require minimal maintenance and project authority.' },
  { slug:'retail', title:'Retail & Hospitality', icon:'🏪', desc:'High-design, high-traffic systems that reinforce brand identity and reduce lifecycle cost.' },
  { slug:'automotive', title:'Auto Dealership & Service', icon:'🔧', desc:'Chemical-resistant, oil-safe, slip-resistant systems purpose-built for automotive environments.' },
];

export default function SolutionsPage() {
  return (
    <main>
      <div style={{background:'#0A0A0A',padding:'56px 0'}}>
        <div className="container">
          <div className="section-label">By Industry</div>
          <h1 className="display-md" style={{color:'#fff'}}>FACILITY SOLUTIONS</h1>
        </div>
      </div>
      <div className="container" style={{padding:'64px 24px'}}>
        <div className="grid-3">
          {SOLUTIONS.map(s=>(
            <div key={s.slug} className="card">
              <div style={{fontSize:36,marginBottom:16}}>{s.icon}</div>
              <h2 style={{fontFamily:'var(--font-display)',fontSize:24,color:'#0A0A0A',marginBottom:10}}>{s.title}</h2>
              <p style={{fontSize:14,color:'#6B7280',lineHeight:1.7,marginBottom:20}}>{s.desc}</p>
              <Link href="/commercial" style={{display:'inline-flex',alignItems:'center',gap:6,fontSize:13,fontWeight:600,color:'#D4AF37',textDecoration:'none'}}>
                Get Specification →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
