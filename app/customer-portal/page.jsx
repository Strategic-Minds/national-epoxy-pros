export const metadata = { title: "Customer Portal | National Epoxy Pros" };
export default function CustomerPortalPage() {
  return (
    <main style={{minHeight:"100vh",background:"#0a0a0a",color:"#fff",padding:"80px 20px",maxWidth:"600px",margin:"0 auto",textAlign:"center"}}>
      <h1 style={{fontSize:"2rem",fontWeight:900,color:"#F6B800",marginBottom:"16px"}}>Customer Portal</h1>
      <p style={{color:"#aaa",marginBottom:"30px"}}>Track your project, view your floor design, and communicate with your team.</p>
      <div style={{background:"#161616",border:"1px solid #2a2a2a",borderRadius:"12px",padding:"30px"}}>
        <p style={{color:"#666",fontSize:"14px"}}>Portal access coming soon. Text us for updates:</p>
        <a href="sms:+15616780328" style={{display:"inline-block",marginTop:"16px",background:"#F6B800",color:"#000",padding:"12px 28px",borderRadius:"8px",fontWeight:700,textDecoration:"none"}}>Text +1 (561) 678-0328</a>
      </div>
    </main>
  );
}