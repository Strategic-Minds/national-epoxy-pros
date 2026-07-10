import Link from 'next/link';
export default function ThankYouPage() {
  return (
    <main style={{minHeight:'80vh',display:'flex',alignItems:'center',justifyContent:'center',padding:'48px 24px',background:'var(--gray-light)'}}>
      <div style={{background:'var(--white)',borderRadius:'var(--radius-lg)',boxShadow:'var(--shadow-md)',padding:'56px 48px',maxWidth:600,width:'100%',textAlign:'center'}}>
        <div style={{width:80,height:80,borderRadius:'50%',background:'rgba(212,175,55,0.12)',border:'2px solid var(--gold)',display:'flex',alignItems:'center',justifyContent:'center',fontSize:36,margin:'0 auto 24px'}}>✓</div>
        <span className="eyebrow">Quote Request Received</span>
        <h1 className="heading" style={{fontSize:'clamp(24px,4vw,40px)',margin:'12px 0 16px'}}>YOUR REQUEST WAS RECEIVED!</h1>
        <p style={{fontSize:17,color:'var(--text-secondary)',marginBottom:32,lineHeight:1.65}}>Our team will review your project details and contact you within 24 hours to discuss next steps.</p>
        <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:16,marginBottom:40}}>
          {[['📋','We Review','Your project details are reviewed by our team.'],['📞','We Contact You','Expect a call or email within 24 hours.'],['💰','You Get Your Quote','A detailed, no-obligation quote for your project.']].map(([ic,t,d]) => (
            <div key={t} style={{background:'var(--gray-light)',borderRadius:'var(--radius)',padding:'20px 16px',textAlign:'center'}}>
              <div style={{fontSize:28,marginBottom:8}}>{ic}</div>
              <div style={{fontFamily:'Montserrat,sans-serif',fontWeight:800,fontSize:13,textTransform:'uppercase',letterSpacing:'0.06em',marginBottom:6}}>{t}</div>
              <div style={{fontSize:13,color:'var(--text-muted)',lineHeight:1.5}}>{d}</div>
            </div>
          ))}
        </div>
        <div style={{display:'flex',gap:16,justifyContent:'center',flexWrap:'wrap'}}>
          <Link href="/floor-systems" className="btn btn-gold">EXPLORE FLOOR SYSTEMS</Link>
          <Link href="/" className="btn btn-outline">BACK TO HOME</Link>
        </div>
      </div>
    </main>
  );
}
