import Header from '@/components/Header';
import Footer from '@/components/Footer';
import QuoteFormCard from '@/components/QuoteFormCard';
import {
  CDN,
  HERO_BULLETS,
  HERO_TRUST_BADGES,
  FEATURES_STRIP,
  FLOOR_SYSTEMS_CARDS,
  WHY_CHECKS,
  REVIEWS,
  SITE,
} from '@/lib/site';

/* ===== ICON COMPONENTS ===== */

function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

function StarIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="1">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  );
}

function ArrowRightIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  );
}

function FeatureIcon({ name }: { name: string }) {
  const icons: Record<string, React.ReactNode> = {
    warranty: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <polyline points="9 12 11 14 15 10" />
      </svg>
    ),
    nation: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
    star: <StarIcon />,
    lifetime: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
    shield: <ShieldIcon />,
    expert: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <polyline points="17 11 19 13 23 9" />
      </svg>
    ),
  };
  return <>{icons[name] || icons.shield}</>;
}

function FloorCardIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  );
}

/* ===== PAGE ===== */

export default function HomePage() {
  return (
    <>
      <Header />

      {/* ===== HERO SECTION ===== */}
      <section className="hero">
        <div className="hero-bg">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={CDN.hero} alt="Premium epoxy flooring" />
        </div>
        <div className="hero-overlay" />

        <div className="hero-inner">
          {/* LEFT */}
          <div className="hero-left">
            <span className="hero-eyebrow">PREMIUM EPOXY FLOORS</span>
            <h1 className="hero-h1">
              <span className="line1">BUILT NATIONWIDE.</span>
              <span className="line2">MADE TO LAST.</span>
            </h1>
            <p className="hero-subtext">
              Professional epoxy floor systems for garages, patios &amp; commercial
              spaces. Source-controlled. Scalable. Secure. Ready to grow.
            </p>

            <div className="hero-bullets">
              {HERO_BULLETS.map((bullet, i) => (
                <div key={i} className="hero-bullet">
                  <CheckIcon />
                  <span>{bullet}</span>
                </div>
              ))}
            </div>

            <div className="hero-ctas">
              <a href="/free-digital-bid" className="btn-gold">
                GET A FREE QUOTE
              </a>
              <a href="/floor-systems" className="btn-outline">
                EXPLORE FLOOR SYSTEMS
              </a>
            </div>

            <div className="hero-trust-badges">
              {HERO_TRUST_BADGES.map((badge, i) => (
                <div key={i} className="hero-trust-badge">
                  <FeatureIcon name={badge.icon} />
                  <span>{badge.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT — Quote Form */}
          <div className="hero-right">
            <QuoteFormCard />
          </div>
        </div>
      </section>

      {/* ===== FEATURES STRIP ===== */}
      <section className="features-strip">
        <div className="features-strip-inner">
          {FEATURES_STRIP.map((feature, i) => (
            <div key={i} className="feature-badge">
              <FeatureIcon name={feature.icon} />
              <span>{feature.text}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ===== FLOOR SYSTEMS SECTION ===== */}
      <section className="floor-systems">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">PREMIUM EPOXY FLOOR SYSTEMS</h2>
            <p className="section-subtitle">
              Engineered for beauty, built for performance. Installed by pros.
            </p>
          </div>

          <div className="floor-systems-grid">
            {FLOOR_SYSTEMS_CARDS.map((card, i) => (
              <div key={i} className="floor-card">
                <div className="floor-card-image">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={card.image} alt={card.title} />
                  <div className="floor-card-icon">
                    <FloorCardIcon />
                  </div>
                </div>
                <div className="floor-card-body">
                  <h3 className="floor-card-title">{card.title}</h3>
                  <p className="floor-card-desc">{card.desc}</p>
                  <a href="/floor-systems" className="floor-card-link">
                    EXPLORE SYSTEMS <ArrowRightIcon />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== WHY HOMEOWNERS SECTION ===== */}
      <section className="why-section">
        <div className="container">
          <div className="why-grid">
            {/* Left Panel */}
            <div className="why-left">
              <h2 className="why-headline">
                WHY HOMEOWNERS &amp; BUSINESSES TRUST NATIONAL EPOXY PROS
              </h2>
              <div className="why-checks">
                {WHY_CHECKS.map((check, i) => (
                  <div key={i} className="why-check">
                    <CheckIcon />
                    <span>{check}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Image Panel */}
            <div className="why-right">
              <div className="why-right-bg" />
              <div className="why-right-overlay" />
              <div className="why-right-text">
                <h3>
                  ONE SYSTEM. <span>ONE STANDARD.</span> <br />
                  EVERY LOCATION.
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== REVIEWS SECTION ===== */}
      <section className="reviews-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">5-STAR RATED BY HOMEOWNERS</h2>
            <p className="section-subtitle">Real results. Real reviews. Real people.</p>
          </div>

          <div className="reviews-grid">
            {REVIEWS.map((review, i) => (
              <div key={i} className="review-card">
                <div className="review-stars">
                  {[...Array(5)].map((_, idx) => (
                    <StarIcon key={idx} />
                  ))}
                </div>
                <p className="review-text">&ldquo;{review.text}&rdquo;</p>
                <div className="review-author">
                  <div className="review-avatar">{review.initials}</div>
                  <div>
                    <div className="review-name">{review.name}</div>
                    <div className="review-city">{review.city}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA BANNER ===== */}
      <section className="cta-banner">
        <div className="container">
          <div className="cta-banner-inner">
            <ShieldIcon />
            <h2 className="cta-banner-title">READY TO TRANSFORM YOUR SPACE?</h2>
            <p className="cta-banner-subtitle">
              Get a free, no-obligation quote from your local epoxy flooring experts.
            </p>
            <div className="cta-banner-buttons">
              <a href="/free-digital-bid" className="btn-gold">
                GET A FREE QUOTE
              </a>
              <a href={SITE.phoneHref} className="btn-outline">
                1-800-EPOXY-PRO
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
