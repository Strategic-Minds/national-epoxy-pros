import { DigitalBidForm } from "../components/DigitalBidForm";

export const metadata = {
  title: "Free Digital Bid — Save 15% | National Epoxy Pros",
  description: "Get your free epoxy floor estimate in under 24 hours. Submit online and save 15% automatically. No phone calls required.",
};

export default function EstimatePage() {
  return (
    <div style={{background:"#111",minHeight:"100vh",padding:"80px 24px"}}>
      <div style={{maxWidth:"900px",margin:"0 auto"}}>
        <div style={{textAlign:"center",marginBottom:"48px"}}>
          <div style={{color:"#F6B800",fontSize:"0.75rem",fontWeight:700,letterSpacing:"0.15em",textTransform:"uppercase",marginBottom:"12px"}}>Free Estimate</div>
          <h1 style={{fontFamily:"Barlow Condensed, Impact, sans-serif",fontSize:"clamp(2.5rem,5vw,4rem)",fontWeight:900,textTransform:"uppercase",lineHeight:1,marginBottom:"16px"}}>
            Start Your<br/><span style={{color:"#F6B800"}}>Digital Bid</span>
          </h1>
          <p style={{color:"#9CA3AF",fontSize:"1rem",maxWidth:"500px",margin:"0 auto"}}>
            Fill out the form below. Get a detailed quote within 24 hours. Your 15% discount is automatically applied.
          </p>
        </div>
        <DigitalBidForm />
      </div>
    </div>
  );
}