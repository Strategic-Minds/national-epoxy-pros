import { MainNavbar } from '../../components/MainNavbar';
export const metadata = { title: 'Admin Dashboard | National Epoxy Pros' };
export default function AdminDashboard() {
  return (
    <>
      <MainNavbar />
      <div style={{background:'#050505',minHeight:'100vh',padding:'80px 48px',maxWidth:'1440px',margin:'0 auto'}}>
        <div style={{color:'#F5A900',fontSize:'0.65rem',fontWeight:800,letterSpacing:'0.15em',textTransform:'uppercase',marginBottom:'12px'}}>Admin</div>
        <h1 style={{fontFamily:'Bebas Neue,Oswald,Impact,sans-serif',fontSize:'2.5rem',fontWeight:400,textTransform:'uppercase',marginBottom:'32px',color:'#fff'}}>Admin Dashboard</h1>
        <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(240px,1fr))',gap:'20px'}}>
          {['All Leads','Projects Pipeline','Estimates Queue','Locations','Crew Management','System Status','Analytics','Settings'].map(t=>(
            <div key={t} style={{background:'#111',border:'1px solid rgba(245,169,0,0.2)',borderRadius:'10px',padding:'24px'}}>
              <div style={{color:'#F5A900',fontSize:'0.65rem',fontWeight:800,letterSpacing:'0.12em',textTransform:'uppercase',marginBottom:'6px'}}>Admin</div>
              <div style={{fontFamily:'Oswald,sans-serif',fontSize:'1.1rem',fontWeight:700,textTransform:'uppercase',marginBottom:'8px'}}>{t}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}