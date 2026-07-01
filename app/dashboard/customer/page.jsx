import { MainNavbar } from '../../components/MainNavbar';
export const metadata = { title: 'Customer Dashboard | National Epoxy Pros' };
export default function CustomerDashboard() {
  return (
    <>
      <MainNavbar />
      <div style={{background:'#050505',minHeight:'100vh',padding:'80px 48px',maxWidth:'1440px',margin:'0 auto'}}>
        <div style={{color:'#F5A900',fontSize:'0.65rem',fontWeight:800,letterSpacing:'0.15em',textTransform:'uppercase',marginBottom:'12px'}}>Customer Portal</div>
        <h1 style={{fontFamily:'Bebas Neue,Oswald,Impact,sans-serif',fontSize:'2.5rem',fontWeight:400,textTransform:'uppercase',marginBottom:'32px',color:'#fff'}}>Your Dashboard</h1>
        <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(240px,1fr))',gap:'20px'}}>
          {['My Projects','My Estimates','Design Center','Contact Crew','Documents','Support'].map(t=>(
            <div key={t} style={{background:'#111',border:'1px solid rgba(245,169,0,0.2)',borderRadius:'10px',padding:'24px'}}>
              <div style={{color:'#F5A900',fontSize:'0.65rem',fontWeight:800,letterSpacing:'0.12em',textTransform:'uppercase',marginBottom:'6px'}}>Module</div>
              <div style={{fontFamily:'Oswald,sans-serif',fontSize:'1.1rem',fontWeight:700,textTransform:'uppercase',marginBottom:'8px'}}>{t}</div>
              <div style={{fontSize:'0.75rem',color:'#888',lineHeight:1.6}}>Access your {t.toLowerCase()} and manage your epoxy floor project.</div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}