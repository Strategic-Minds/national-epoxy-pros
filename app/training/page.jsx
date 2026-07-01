import { MainNavbar } from '../components/MainNavbar';
import { Footer } from '../components/Footer';
export const metadata = { title: 'Training | National Epoxy Pros' };
export default function Page() {
  return (
    <>
      <MainNavbar />
      <div style={{background:'#050505',minHeight:'80vh',display:'flex',alignItems:'center',justifyContent:'center',flexDirection:'column',gap:'16px',padding:'80px 24px',textAlign:'center'}}>
        <div style={{color:'#F5A900',fontSize:'0.65rem',fontWeight:800,letterSpacing:'0.15em',textTransform:'uppercase',marginBottom:'8px'}}>National Epoxy Pros</div>
        <h1 style={{fontFamily:'Bebas Neue,Oswald,Impact,sans-serif',fontSize:'clamp(2.5rem,5vw,4rem)',fontWeight:400,textTransform:'uppercase',lineHeight:0.92,color:'#fff'}}>
          Training
        </h1>
        <p style={{color:'#B8B8B8',fontSize:'0.95rem',maxWidth:'500px',lineHeight:1.7}}>This section is coming soon. <a href='/digital-bid' style={{color:'#F5A900',fontWeight:700}}>Start your digital bid</a> while we finish building.</p>
        <a href='/' style={{display:'inline-flex',alignItems:'center',gap:'6px',background:'#F5A900',color:'#050505',fontWeight:800,fontSize:'0.75rem',letterSpacing:'0.08em',textTransform:'uppercase',padding:'12px 24px',borderRadius:'5px',marginTop:'8px',textDecoration:'none'}}>← Back to Home</a>
      </div>
      <Footer />
    </>
  );
}