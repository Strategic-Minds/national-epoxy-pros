import Link from "next/link";
export function Footer() {
  const yr = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="ft-top">
        <div className="w">
          <div className="ft-grid">
            <div>
              <div className="ft-ln">National <em>Epoxy</em> Pros</div>
              <div className="ft-sys"><span className="status-dot"/>System Online</div>
              <p className="ft-desc">The leader in premium epoxy floor systems. Built for performance. Backed by pros. Trusted nationwide.</p>
              <div className="ft-socs">{["f","📸","▶","♪"].map((s,i)=><div key={i} className="ft-soc">{s}</div>)}</div>
            </div>
            <div>
              <div className="ft-ct">Services</div>
              <div className="ft-links">{["Flake Systems","Metallic Epoxy","Quartz Blends","Solid Colors","Stain Systems","Polished Concrete"].map(l=><Link key={l} href="/services" className="ft-link">{l}</Link>)}</div>
            </div>
            <div>
              <div className="ft-ct">Floor Systems</div>
              <div className="ft-links">{["Top Flake","Metallic Epoxy","Quartz Blends","Solid Colors","Stain Systems","Seals & Topcoats"].map(l=><Link key={l} href="#" className="ft-link">{l}</Link>)}</div>
            </div>
            <div>
              <div className="ft-ct">Design Center</div>
              <div className="ft-links">{["Color Charts","Gallery","Inspiration","Compare","Finishes"].map(l=><Link key={l} href="/design-center" className="ft-link">{l}</Link>)}</div>
            </div>
            <div>
              <div className="ft-ct">Company</div>
              <div className="ft-links">{[["About Us","/about"],["Our Process","/about"],["Training","/training"],["Guides","#"],["FAQs","#"]].map(([l,h])=><Link key={l} href={h} className="ft-link">{l}</Link>)}</div>
            </div>
            <div>
              <div className="ft-ct">Contact</div>
              <div className="ft-ci">📞 877-958-8408</div>
              <div className="ft-ci">✉️ support@nationalepoxypros.com</div>
              <div className="ft-ci">💬 WhatsApp Us</div>
              <div className="ft-ci">📍 Corporation HQ | Phoenix, AZ 85040</div>
              <div className="ft-ci">📍 70+ Locations Nationwide</div>
              <div className="ft-cta-box">
                <div className="ft-cta-t">Start Your Project</div>
                <p className="ft-cta-d">Get your fast, accurate epoxy floor estimate today.</p>
                <Link href="/digital-bid" className="btn btn-gold" style={{display:"flex",justifyContent:"center",width:"100%"}}>Start Digital Bid →</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="ft-bot">
        <div className="w">
          <div className="ft-copy">© {yr} National Epoxy Pros. All rights reserved.</div>
          <div className="ft-legal"><a href="#">Privacy Policy</a><a href="#">Terms of Service</a></div>
        </div>
      </div>
    </footer>
  );
}