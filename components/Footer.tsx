import { CDN, SITE, FOOTER_QUICK_LINKS, FOOTER_SERVICES } from '@/lib/site';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-main">
          {/* Brand Column */}
          <div className="footer-brand">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <div className="footer-logo">
              <img src={CDN.logoLight} alt="National Epoxy Pros" />
            </div>
            <p className="footer-tagline">
              Premium epoxy, flake, metallic, and concrete coating systems for homes,
              businesses, and industrial spaces nationwide.
            </p>
            <div className="footer-social">
              {/* Facebook */}
              <a href="#" aria-label="Facebook">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
              {/* Instagram */}
              <a href="#" aria-label="Instagram">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
              {/* YouTube */}
              <a href="#" aria-label="YouTube">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
                  <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" fill="#0A0A0A" />
                </svg>
              </a>
              {/* TikTok */}
              <a href="#" aria-label="TikTok">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.2v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43V9a8.16 8.16 0 0 0 4.77 1.52v-3.2a4.85 4.85 0 0 1-1-.06z" />
                </svg>
              </a>
              {/* Pinterest */}
              <a href="#" aria-label="Pinterest">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2a10 10 0 0 0-3.65 19.31c-.09-.78-.17-1.97.03-2.82.18-.77 1.17-4.97 1.17-4.97s-.3-.6-.3-1.48c0-1.39.81-2.42 1.81-2.42.85 0 1.26.64 1.26 1.41 0 .86-.55 2.14-.83 3.33-.24 1 .5 1.81 1.48 1.81 1.78 0 3.14-1.87 3.14-4.57 0-2.39-1.72-4.06-4.17-4.06-2.84 0-4.51 2.13-4.51 4.34 0 .86.33 1.78.74 2.28a.3.3 0 0 1 .07.29c-.07.31-.24.97-.27 1.1-.04.18-.14.22-.32.13-1.2-.56-1.95-2.32-1.95-3.74 0-3.04 2.21-5.84 6.38-5.84 3.35 0 5.96 2.39 5.96 5.58 0 3.33-2.1 6.01-5.01 6.01-.98 0-1.9-.51-2.21-1.11l-.6 2.29c-.22.84-.81 1.89-1.21 2.53A10 10 0 1 0 12 2z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="footer-col">
            <h4>Quick Links</h4>
            <ul>
              {FOOTER_QUICK_LINKS.map((link) => (
                <li key={link.href}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Column */}
          <div className="footer-col">
            <h4>Services</h4>
            <ul>
              {FOOTER_SERVICES.map((link) => (
                <li key={link.label}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div className="footer-col">
            <h4>Contact Us</h4>
            <ul>
              <li>
                <a href={`mailto:${SITE.supportEmail}`}>{SITE.supportEmail}</a>
              </li>
              <li>
                <a href={`mailto:${SITE.inboundEmail}`}>{SITE.inboundEmail}</a>
              </li>
              <li>WhatsApp: {SITE.whatsappDisplay}</li>
              <li>70+ Locations Nationwide</li>
            </ul>
            <a href="/free-digital-bid" className="btn-gold footer-quote-btn">
              GET A QUOTE
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <div className="footer-bottom-inner">
          <span className="footer-copyright">
            © 2025 National Epoxy Pros. All rights reserved.
          </span>
          <div className="footer-bottom-links">
            <a href="/privacy-policy">Privacy Policy</a>
            <a href="/terms-of-service">Terms of Service</a>
            <a href="/sitemap">Sitemap</a>
            <span className="footer-copyright">Licensed, Insured &amp; Bonded</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
