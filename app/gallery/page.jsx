export const metadata = { title: "Project Gallery | National Epoxy Pros", description: "See completed epoxy floor and polished concrete projects by National Epoxy Pros crews nationwide." };

const GALLERY = [
  {src:"https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=900&q=80",alt:"Garage floor epoxy",type:"Garage Floor",location:"Phoenix, AZ",size:"large"},
  {src:"https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=600&q=80",alt:"Metallic epoxy showroom",type:"Metallic Epoxy",location:"Scottsdale, AZ",size:""},
  {src:"https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80",alt:"Commercial warehouse",type:"Industrial",location:"Mesa, AZ",size:""},
  {src:"https://images.unsplash.com/photo-1541123437800-1bb1317badc2?w=600&q=80",alt:"Polished concrete",type:"Polished Concrete",location:"Tempe, AZ",size:""},
  {src:"https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=900&q=80",alt:"Residential floor",type:"Residential",location:"Chandler, AZ",size:"large"},
  {src:"https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&q=80",alt:"Kitchen floor",type:"Kitchen",location:"Gilbert, AZ",size:""},
];

export default function GalleryPage() {
  return (
    <div style={{background:"#0a0a0a",minHeight:"100vh",padding:"80px 24px"}}>
      <div style={{maxWidth:"1280px",margin:"0 auto"}}>
        <div style={{marginBottom:"48px"}}>
          <div style={{color:"#F6B800",fontSize:"0.75rem",fontWeight:700,letterSpacing:"0.15em",textTransform:"uppercase",marginBottom:"12px"}}>Portfolio</div>
          <h1 style={{fontFamily:"Barlow Condensed,Impact,sans-serif",fontSize:"clamp(2.5rem,5vw,4rem)",fontWeight:900,textTransform:"uppercase",lineHeight:1,marginBottom:"16px"}}>
            Project <span style={{color:"#F6B800"}}>Gallery</span>
          </h1>
          <p style={{color:"#9CA3AF",maxWidth:"500px"}}>Real projects by XPS-certified National Epoxy Pros crews. Every floor backed by our workmanship guarantee.</p>
        </div>
        <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:"16px"}}>
          {GALLERY.map((g,i)=>(
            <div key={i} style={{borderRadius:"12px",overflow:"hidden",aspectRatio:g.size==="large"?"16/9":"4/3",gridColumn:g.size==="large"?"span 2":"",position:"relative",cursor:"pointer"}}>
              <img src={g.src} alt={g.alt} style={{width:"100%",height:"100%",objectFit:"cover"}} loading="lazy" />
              <div style={{position:"absolute",bottom:0,left:0,right:0,background:"linear-gradient(transparent,rgba(0,0,0,0.8))",padding:"20px 16px 16px"}}>
                <div style={{fontWeight:700,fontSize:"0.9rem"}}>{g.type}</div>
                <div style={{color:"#9CA3AF",fontSize:"0.75rem"}}>📍 {g.location}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}