export const metadata = { title: "Free Quote | National Epoxy Pros", description: "Get a free epoxy flooring quote from National Epoxy Pros." };
export default function GetQuotePage() {
  return (
    <main style={{minHeight:"100vh",background:"#0a0a0a",color:"#fff",padding:"80px 20px",maxWidth:"700px",margin:"0 auto"}}>
      <h1 style={{fontSize:"2.5rem",fontWeight:900,color:"#F6B800",marginBottom:"10px"}}>Get Your Free Quote</h1>
      <p style={{color:"#aaa",marginBottom:"30px"}}>Most quotes delivered in under 60 seconds. 📞 (561) 678-0328</p>
      <div style={{background:"#161616",border:"1px solid #2a2a2a",borderRadius:"12px",padding:"30px",display:"flex",flexDirection:"column",gap:"16px"}}>
        <input type="text" placeholder="Your Name" style={{background:"#0a0a0a",border:"1px solid #333",borderRadius:"8px",padding:"12px 16px",color:"#fff",fontSize:"15px",outline:"none"}}/>
        <input type="tel" placeholder="Phone Number" style={{background:"#0a0a0a",border:"1px solid #333",borderRadius:"8px",padding:"12px 16px",color:"#fff",fontSize:"15px",outline:"none"}}/>
        <select style={{background:"#0a0a0a",border:"1px solid #333",borderRadius:"8px",padding:"12px 16px",color:"#888",fontSize:"15px",outline:"none"}}>
          <option>Select Floor Type</option><option>Garage Epoxy</option><option>Commercial Floor</option><option>Basement Epoxy</option><option>Metallic System</option><option>Flake System</option>
        </select>
        <button style={{background:"#F6B800",color:"#000",border:"none",borderRadius:"8px",padding:"16px",fontSize:"16px",fontWeight:700,cursor:"pointer"}}>Submit — Get Quote Now</button>
      </div>
    </main>
  );
}