import Link from "next/link";
import { MainNavbar } from "./MainNavbar";
import { Footer } from "./Footer";

export function CategoryPageTemplate({ title, tagline, heroImg, description, benefits, galleryImgs }) {
  return (
    <>
      <MainNavbar />

      {/* DARK HERO */}
      <div style={{ position: "relative", background: "#0D0808", minHeight: "60vh", display: "flex", alignItems: "center", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: `url(${heroImg})`, backgroundSize: "cover", backgroundPosition: "center", opacity: 0.32 }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(90deg, rgba(13,8,8,1) 0%, rgba(13,8,8,.85) 45%, rgba(13,8,8,.55) 100%)" }} />
        <div style={{ position: "relative", zIndex: 2, maxWidth: "1280px", margin: "0 auto", padding: "80px 24px", width: "100%" }}>
          <div style={{ color: "#F5A900", fontSize: "0.7rem", fontWeight: 800, letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: "10px" }}>National Epoxy Pros</div>
          <h1 style={{ fontFamily: "Bebas Neue,Oswald,Impact,sans-serif", fontSize: "clamp(2.8rem,6vw,4.5rem)", fontWeight: 400, textTransform: "uppercase", lineHeight: 0.95, color: "#fff", marginBottom: "16px" }}>{title}</h1>
          <p style={{ color: "#B8B8B8", fontSize: "1.05rem", maxWidth: "560px", lineHeight: 1.7, marginBottom: "28px" }}>{tagline}</p>
          <Link href="/digital-bid" style={{ display: "inline-flex", alignItems: "center", gap: "6px", background: "#F5A900", color: "#050505", fontWeight: 800, fontSize: "0.8rem", letterSpacing: "0.08em", textTransform: "uppercase", padding: "14px 28px", borderRadius: "5px", textDecoration: "none" }}>
            Start Your Free Digital Bid →
          </Link>
        </div>
      </div>

      {/* WHITE SECTION — description + benefits */}
      <div style={{ background: "#FFFFFF", padding: "72px 24px" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", display: "grid", gridTemplateColumns: "1.1fr 0.9fr", gap: "56px", alignItems: "center" }}>
          <div>
            <div style={{ color: "#B8860B", fontSize: "0.7rem", fontWeight: 800, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "10px" }}>The System</div>
            <h2 style={{ fontFamily: "Bebas Neue,Oswald,Impact,sans-serif", fontSize: "clamp(1.8rem,3vw,2.6rem)", color: "#111", marginBottom: "16px", textTransform: "uppercase" }}>{title} — Built To Last</h2>
            <p style={{ color: "#444", fontSize: "0.98rem", lineHeight: 1.8 }}>{description}</p>
          </div>
          <div style={{ background: "#F5F5F5", borderRadius: "12px", padding: "32px", boxShadow: "0 2px 12px rgba(0,0,0,0.06)" }}>
            {benefits.map((b) => (
              <div key={b} style={{ display: "flex", alignItems: "flex-start", gap: "10px", marginBottom: "16px" }}>
                <span style={{ color: "#B8860B", fontWeight: 800 }}>✓</span>
                <span style={{ color: "#222", fontSize: "0.92rem", lineHeight: 1.5 }}>{b}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* DARK SECTION — mini gallery */}
      <div style={{ background: "#0D0808", padding: "72px 24px" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "Bebas Neue,Oswald,Impact,sans-serif", fontSize: "clamp(1.6rem,3vw,2.2rem)", color: "#fff", textTransform: "uppercase", marginBottom: "28px" }}>
            Real <span style={{ color: "#F5A900" }}>{title}</span> Projects
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))", gap: "16px" }}>
            {galleryImgs.map((src, i) => (
              <div key={i} style={{ borderRadius: "10px", overflow: "hidden", aspectRatio: "4/3", background: "#111" }}>
                <img src={src} alt={`${title} project ${i + 1}`} loading="lazy" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* WHITE CTA STRIP */}
      <div style={{ background: "#FFFFFF", padding: "56px 24px", textAlign: "center" }}>
        <h2 style={{ fontFamily: "Bebas Neue,Oswald,Impact,sans-serif", fontSize: "clamp(1.6rem,3vw,2.2rem)", color: "#111", textTransform: "uppercase", marginBottom: "16px" }}>
          Ready For Your {title}?
        </h2>
        <p style={{ color: "#555", marginBottom: "24px" }}>Free digital estimate. Proposal within 24 hours. 15% off with photo upload.</p>
        <Link href="/digital-bid" style={{ display: "inline-flex", background: "#050505", color: "#F5A900", fontWeight: 800, fontSize: "0.8rem", letterSpacing: "0.08em", textTransform: "uppercase", padding: "14px 28px", borderRadius: "5px", textDecoration: "none" }}>
          Get Free Estimate →
        </Link>
      </div>

      <Footer />
    </>
  );
}
