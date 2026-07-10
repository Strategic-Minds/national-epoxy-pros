import Link from 'next/link';

const LOGO_LIGHT = 'https://base44.app/api/apps/6a3a1cc6fda8cc665dd22ea4/files/mp/public/6a3a1cc6fda8cc665dd22ea4/2ed112497_logo-horizontal-light.svg';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div>
          <img className="footer-logo" src={LOGO_LIGHT} alt="National Epoxy Pros" />
          <p className="footer-tagline">Premium epoxy, flake, metallic, and concrete coating systems for homes, businesses, and industrial spaces nationwide.</p>
          <div className="footer-socials">
            <a href="#" className="footer-social" aria-label="Facebook">f</a>
            <a href="#" className="footer-social" aria-label="Instagram">ig</a>
            <a href="#" className="footer-social" aria-label="YouTube">▶</a>
            <a href="#" className="footer-social" aria-label="TikTok">♪</a>
            <a href="#" className="footer-social" aria-label="Pinterest">P</a>
          </div>
        </div>
        <div className="footer-col">
          <h4>Quick Links</h4>
          <Link href="/floor-systems">Floor Systems</Link>
          <Link href="/color-charts">Design Center</Link>
          <Link href="/free-digital-bid">Digital Bid</Link>
          <Link href="/reviews">Reviews</Link>
          <Link href="/about">About Us</Link>
          <Link href="/contact">Contact</Link>
        </div>
        <div className="footer-col">
          <h4>Services</h4>
          <Link href="/flake-garage-floors">Flake Systems</Link>
          <Link href="/metallic-epoxy">Metallic Epoxy</Link>
          <Link href="/polished-concrete">Polished Concrete</Link>
          <Link href="/exterior-coatings">Solid Color Epoxy</Link>
          <Link href="/exterior-coatings">Exterior Patio Coating</Link>
          <Link href="/exterior-coatings">Exterior Driveway Coating</Link>
        </div>
        <div className="footer-col">
          <h4>Contact Us</h4>
          <a href="mailto:support@nationalepoxypros.com">support@nationalepoxypros.com</a>
          <a href="mailto:leads@nationalepoxypros.com">leads@nationalepoxypros.com</a>
          <p>WhatsApp: +1 555-973-0487</p>
          <p>70+ Locations Nationwide</p>
          <Link href="/free-digital-bid" className="footer-cta-btn">Get a Quote</Link>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© 2025 National Epoxy Pros. All rights reserved.</span>
        <span style={{display:'flex',gap:'1rem'}}>
          <Link href="/privacy">Privacy Policy</Link>
          <span>|</span>
          <Link href="/terms">Terms of Service</Link>
          <span>|</span>
          <Link href="/sitemap.xml">Sitemap</Link>
          <span>|</span>
          <span>Licensed, Insured &amp; Bonded</span>
        </span>
      </div>
    </footer>
  );
}
