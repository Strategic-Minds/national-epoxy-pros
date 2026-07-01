import Link from "next/link";
export const metadata = { title: "Contractor Training & Startup Packages | National Epoxy Pros", description: "XPS-certified epoxy floor training programs. Startup packages, equipment bundles, and monthly crew training." };

const PACKAGES = [
  { tag:"Starter", price:"$4,997", title:"Epoxy Startup Package", features:["XPS Starter Kit (floor grinder + vac)","2-day hands-on training in Phoenix","Product formulation guide","Digital bid system access","Business setup checklist","30-day support hotline"], cta:"Get Started", href:"/estimate" },
  { tag:"Most Popular", price:"$9,997", title:"Full Launch Package", features:["Everything in Starter","4-day advanced training","Full XPS product inventory","Custom branded bid portal","Marketing starter kit","60-day mentorship access","First 2 job site visits"], cta:"Apply Now", href:"/estimate" },
  { tag:"Enterprise", price:"Custom", title:"Territory License", features:["Everything in Full Launch","Exclusive territory rights","White-label customer portal","Automated estimating system","Ongoing training program","National leads program","Dedicated account manager"], cta:"Schedule Call", href:"/contact" },
];

export default function TrainingPage() {
  return (
    <div style={{background:"#0a0a0a",minHeight:"100vh",padding:"80px 24px"}}>
      <div style={{maxWidth:"1200px",margin:"0 auto"}}>
        <div style={{textAlign:"center",marginBottom:"64px"}}>
          <div style={{color:"#F6B800",fontSize:"0.75rem",fontWeight:700,letterSpacing:"0.15em",textTransform:"uppercase",marginBottom:"12px"}}>Powered by XPS</div>
          <h1 style={{fontFamily:"Barlow Condensed,Impact,sans-serif",fontSize:"clamp(2.5rem,5vw,4rem)",fontWeight:900,textTransform:"uppercase",lineHeight:1,marginBottom:"16px"}}>
            Start Your Own<br/><span style={{color:"#F6B800"}}>Epoxy Business</span>
          </h1>
          <p style={{color:"#9CA3AF",fontSize:"1rem",maxWidth:"600px",margin:"0 auto",lineHeight:1.7}}>
            Join the fastest-growing network of certified epoxy contractors in America. Backed by 30+ years of XPS expertise, real training, and real equipment.
          </p>
        </div>
        <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(300px,1fr))",gap:"24px",marginBottom:"80px"}}>
          {PACKAGES.map((p)=>(
            <div key={p.title} style={{background:p.tag==="Most Popular"?"rgba(246,184,0,0.05)":"#111",border:p.tag==="Most Popular"?"1px solid rgba(246,184,0,0.4)":"1px solid #2d2d2d",borderRadius:"16px",overflow:"hidden",transition:"transform 0.2s"}}>
              <div style={{background:p.tag==="Most Popular"?"#F6B800":"#1a1a1a",padding:"24px",display:"flex",justifyContent:"space-between",alignItems:"flex-start"}}>
                <div>
                  <div style={{fontSize:"0.7rem",fontWeight:800,letterSpacing:"0.1em",textTransform:"uppercase",color:p.tag==="Most Popular"?"#0a0a0a":"#9CA3AF",marginBottom:"4px"}}>{p.tag}</div>
                  <div style={{fontFamily:"Barlow Condensed,Impact,sans-serif",fontSize:"2.2rem",fontWeight:900,color:p.tag==="Most Popular"?"#0a0a0a":"#fff"}}>{p.price}</div>
                </div>
              </div>
              <div style={{padding:"24px"}}>
                <h3 style={{fontFamily:"Barlow Condensed,Impact,sans-serif",fontSize:"1.3rem",fontWeight:800,textTransform:"uppercase",marginBottom:"20px"}}>{p.title}</h3>
                <ul style={{listStyle:"none",display:"flex",flexDirection:"column",gap:"10px",marginBottom:"28px"}}>
                  {p.features.map(f=>(
                    <li key={f} style={{display:"flex",alignItems:"flex-start",gap:"10px",fontSize:"0.875rem",color:"#d1d5db"}}>
                      <span style={{color:"#F6B800",fontWeight:700,flexShrink:0}}>✓</span>{f}
                    </li>
                  ))}
                </ul>
                <Link href={p.href} style={{display:"block",background:"#F6B800",color:"#0a0a0a",fontWeight:800,fontSize:"0.875rem",textTransform:"uppercase",letterSpacing:"0.08em",padding:"14px",borderRadius:"8px",textAlign:"center"}}>
                  {p.cta} →
                </Link>
              </div>
            </div>
          ))}
        </div>
        <div style={{background:"#111",border:"1px solid #2d2d2d",borderRadius:"16px",padding:"48px",textAlign:"center"}}>
          <h2 style={{fontFamily:"Barlow Condensed,Impact,sans-serif",fontSize:"2rem",fontWeight:900,textTransform:"uppercase",marginBottom:"12px"}}>Monthly Crew Training</h2>
          <p style={{color:"#9CA3AF",marginBottom:"28px",maxWidth:"500px",margin:"0 auto 28px"}}>Already have a crew? Bring them to our monthly XPS certification training in Phoenix. Hands-on, product-specific, standards-based.</p>
          <Link href="/contact" style={{display:"inline-block",background:"transparent",color:"#F6B800",border:"2px solid #F6B800",fontWeight:800,fontSize:"0.875rem",textTransform:"uppercase",letterSpacing:"0.08em",padding:"14px 32px",borderRadius:"8px"}}>
            Register Your Crew →
          </Link>
        </div>
      </div>
    </div>
  );
}