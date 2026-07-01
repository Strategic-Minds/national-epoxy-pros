import Link from "next/link";

export function Footer() {
  const yr = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-grid">
          {/* Brand */}
          <div className="footer-brand">
            <div className="logo-name">National <span>Epoxy</span> Pros</div>
            <div className="logo-sub-text"><span className="status-dot"/> System Online</div>
            <p>The leader in premium epoxy floor systems. Built for performance. Backed by pros. Trusted nationwide.</p>
            <div className="footer-socials">
              {["f","📸","▶","♪"].map((s,i)=><div key={i} className="f-social">{s}</div>)}
            </div>
          </div>
          {/* Services */}
          <div>
            <div className="footer-col-title">Services</div>
            <div className="footer-links">
              {["Flake Systems","Metallic Epoxy","Quartz Blends","Solid Colors","Stain Systems","Polished Concrete"].map(l=>(
                <Link key={l} href="/services" className="footer-link">{l}</Link>
              ))}
            </div>
          </div>
          {/* Floor Systems */}
          <div>
            <div className="footer-col-title">Floor Systems</div>
            <div className="footer-links">
              {["Top Flake","Metallic Epoxy","Quartz Blends","Solid Colors","Stain Systems","Seals & Topcoats"].map(l=>(
                <Link key={l} href="#" className="footer-link">{l}</Link>
              ))}
            </div>
          </div>
          {/* Design Center */}
          <div>
            <div className="footer-col-title">Design Center</div>
            <div className="footer-links">
              {["Color Charts","Gallery","Inspiration","Compare","Finishes"].map(l=>(
                <Link key={l} href="/design-center" className="footer-link">{l}</Link>
              ))}
            </div>
          </div>
          {/* Company */}
          <div>
            <div className="footer-col-title">Company</div>
            <div className="footer-links">
              {[["About Us","/about"],["Our Process","/about"],["Design Center","/design-center"],["Training","/training"],["Guides","#"],["FAQs","#"]].map(([l,h])=>(
                <Link key={l} href={h} className="footer-link">{l}</Link>
              ))}
            </div>
          </div>
          {/* CTA Box */}
          <div>
            <div className="footer-col-title">Contact</div>
            <div className="footer-contact-item">📞 877-958-8408</div>
            <div className="footer-contact-item">✉️ support@nationalepoxypros.com</div>
            <div className="footer-contact-item">💬 WhatsApp Us</div>
            <div className="footer-contact-item">📍 Phoenix, AZ 85040</div>
            <div style={{marginTop:"16px"}}>
              <div className="footer-cta-box">
                <div className="footer-cta-title">Start Your Project</div>
                <p className="footer-cta-desc">Get your fast, accurate epoxy floor estimate today.</p>
                <Link href="/digital-bid" className="btn-gold" style={{display:"flex",justifyContent:"center",width:"100%"}}>
                  Start Digital Bid →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="footer-bottom-inner">
          <div className="footer-copy">© {yr} National Epoxy Pros. All rights reserved.</div>
          <div className="footer-legal">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}