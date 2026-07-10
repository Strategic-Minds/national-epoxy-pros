import Link from 'next/link';

const FLOOR_SYSTEMS = ['Decorative Flake', 'Metallic Epoxy', 'Solid Color', 'Quartz Flooring', 'Polished Concrete'];
const QUICK_LINKS = ['Floor Systems', 'Visualizer', 'Projects', 'Our Process', 'Service Areas', 'Reviews', 'About Us', 'Contact'];

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div>
          <img src="/logos/nep-logo-horizontal-black-gold-v1.svg" alt="National Epoxy Pros" className="footer-logo" />
          <p className="footer-tagline">Premium epoxy, flake, metallic, and concrete coating systems for homes, businesses, and industrial spaces nationwide.</p>
          <div className="footer-social">
            <a href="#" aria-label="Facebook">f</a>
            <a href="#" aria-label="Instagram">in</a>
            <a href="#" aria-label="YouTube">▶</a>
            <a href="#" aria-label="Pinterest">P</a>
            <a href="#" aria-label="LinkedIn">li</a>
          </div>
        </div>
        <div className="footer-col">
          <h4>Quick Links</h4>
          <ul>
            {QUICK_LINKS.map(l => (
              <li key={l}><Link href={`/${l.toLowerCase().replace(/\s+/g,'-')}`}>{l}</Link></li>
            ))}
          </ul>
        </div>
        <div className="footer-col">
          <h4>Floor Systems</h4>
          <ul>
            {FLOOR_SYSTEMS.map(s => (
              <li key={s}><Link href={`/floor-systems/${s.toLowerCase().replace(/\s+/g,'-')}`}>{s}</Link></li>
            ))}
          </ul>
        </div>
        <div className="footer-col">
          <h4>Contact Us</h4>
          <div className="footer-contact-item"><span>📧</span><div><div>support@nationalepoxypros.com</div><div>leads@nationalepoxypros.com</div></div></div>
          <div className="footer-contact-item"><span>📱</span><div><div>WhatsApp: +1 555 973 0487</div><div>1-800-EPOXY-PRO</div></div></div>
          <div className="footer-contact-item"><span>📍</span><div>70+ Locations Nationwide</div></div>
          <Link href="/quote" className="btn btn-gold btn-sm" style={{marginTop:16}}>GET A FREE QUOTE</Link>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} National Epoxy Pros. All rights reserved.</p>
        <div className="footer-bottom-links">
          <Link href="/privacy">Privacy Policy</Link>
          <Link href="/terms">Terms of Service</Link>
          <Link href="/sitemap.xml">Sitemap</Link>
        </div>
        <p style={{color:'var(--gold)',fontFamily:'Montserrat,sans-serif',fontWeight:700,fontSize:13}}>nationalepoxypros.com</p>
      </div>
    </footer>
  );
}
