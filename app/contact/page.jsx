export const metadata = { title: "Contact | National Epoxy Pros", description: "Contact National Epoxy Pros for a free estimate on epoxy flooring." };
export default function ContactPage() {
  return (
    <main style={{minHeight:"100vh",background:"#0a0a0a",color:"#fff",padding:"80px 20px",maxWidth:"700px",margin:"0 auto"}}>
      <h1 style={{fontSize:"2.5rem",fontWeight:900,color:"#F6B800",marginBottom:"20px"}}>Contact Us</h1>
      <p style={{fontSize:"1.1rem",color:"#ccc",marginBottom:"30px"}}>Ready to transform your floors? Get in touch and we'll respond within 1 hour.</p>
      <div style={{background:"#161616",border:"1px solid #2a2a2a",borderRadius:"12px",padding:"30px"}}>
        <p style={{color:"#F6B800",fontWeight:700,fontSize:"1.1rem",marginBottom:"8px"}}>📞 Call or Text</p>
        <a href="tel:+15616780328" style={{fontSize:"1.4rem",color:"#fff",fontWeight:700,textDecoration:"none"}}>+1 (561) 678-0328</a>
        <div style={{marginTop:"20px"}}>
          <a href="/get-quote" style={{display:"inline-block",background:"#F6B800",color:"#000",padding:"14px 32px",borderRadius:"8px",fontWeight:700,textDecoration:"none"}}>Get Free Quote Online</a>
        </div>
      </div>
    </main>
  );
}