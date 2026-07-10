'use client';
import Link from 'next/link';

const SPECS = [
  { id:'SPC-001', name:'Decorative Flake Epoxy System', type:'Decorative', finish:'Flake Broadcast', coverage:'200–300 sq ft/gal', coats:3, cure:'72 hrs full cure', temp:'50°F–90°F', traffic:'Pedestrian / Light Vehicle', doc:'SPC-001-v2.pdf' },
  { id:'SPC-002', name:'Metallic Epoxy System', type:'Decorative Premium', finish:'Metallic / Pearl', coverage:'150–250 sq ft/gal', coats:3, cure:'72 hrs', temp:'55°F–85°F', traffic:'Pedestrian', doc:'SPC-002-v1.pdf' },
  { id:'SPC-003', name:'Solid Color Epoxy — Commercial Grade', type:'Commercial', finish:'Smooth / Satin', coverage:'250–400 sq ft/gal', coats:2, cure:'48 hrs light / 7d full', temp:'50°F–90°F', traffic:'Forklift / Heavy Vehicle', doc:'SPC-003-v3.pdf' },
  { id:'SPC-004', name:'Quartz Broadcast System', type:'Safety / Anti-Slip', finish:'Aggregate Broadcast', coverage:'100–150 sq ft/gal', coats:3, cure:'72 hrs', temp:'50°F–85°F', traffic:'Commercial / Industrial', doc:'SPC-004-v2.pdf' },
  { id:'SPC-005', name:'Polished Concrete — Level 3 Finish', type:'Mechanically Polished', finish:'800–3000 grit', coverage:'N/A (mechanical)', coats:0, cure:'Densifier cure 24 hrs', temp:'40°F+', traffic:'All Classes', doc:'SPC-005-v1.pdf' },
];

export default function SpecsPage() {
  return (
    <main>
      <div style={{background:'#0A0A0A',padding:'56px 0'}}>
        <div className="container">
          <div className="section-label">Technical Library</div>
          <h1 className="display-md" style={{color:'#fff'}}>PRODUCT SPECIFICATIONS</h1>
          <p style={{color:'#9CA3AF',marginTop:12,fontSize:15}}>Full technical data sheets for all National Epoxy Pros floor systems. For project-specific recommendations, request a bid.</p>
        </div>
      </div>
      <div className="container" style={{padding:'56px 24px'}}>
        <div style={{background:'#fff',borderRadius:10,border:'1px solid #E5E7EB',overflow:'hidden'}}>
          <table className="data-table">
            <thead style={{background:'#F9FAFB'}}>
              <tr>
                <th>ID</th><th>System Name</th><th>Type</th><th>Finish</th><th>Coverage</th>
                <th>Coats</th><th>Cure Schedule</th><th>Traffic Class</th><th>Spec Sheet</th>
              </tr>
            </thead>
            <tbody>
              {SPECS.map(s=>(
                <tr key={s.id}>
                  <td><span className="badge badge-gold">{s.id}</span></td>
                  <td style={{fontWeight:600,color:'#111827'}}>{s.name}</td>
                  <td style={{fontSize:13,color:'#6B7280'}}>{s.type}</td>
                  <td style={{fontSize:13}}>{s.finish}</td>
                  <td style={{fontSize:13,fontFamily:'monospace'}}>{s.coverage}</td>
                  <td style={{textAlign:'center'}}>{s.coats||'—'}</td>
                  <td style={{fontSize:13}}>{s.cure}</td>
                  <td style={{fontSize:13}}>{s.traffic}</td>
                  <td>
                    <a href="#" style={{fontSize:12,color:'#D4AF37',fontWeight:600,textDecoration:'none'}}
                       onClick={e=>e.preventDefault()}>
                      ↓ PDF
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div style={{marginTop:32,textAlign:'center'}}>
          <p style={{fontSize:14,color:'#6B7280',marginBottom:16}}>Need a custom specification for your project?</p>
          <Link href="/commercial" className="btn-primary">Request Project Specification</Link>
        </div>
      </div>
    </main>
  );
}
