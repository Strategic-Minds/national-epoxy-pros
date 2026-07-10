import Link from 'next/link';
import QuoteFormCard from '@/components/QuoteFormCard';
import DigitalBidForm from '@/components/DigitalBidForm';
import { chartAssets, gallery, pages, services, site } from '@/lib/site';

type PageKey = keyof typeof pages;
type Mode = 'home' | 'service' | 'charts' | 'bid' | 'contact' | 'reviews' | 'legal';

export default function ReferencePage({ pageKey, mode = 'service' }: { pageKey: PageKey; mode?: Mode }) {
  const page = pages[pageKey];

  return (
    <main className="route-layout">
      <section className="hero-locked">
        <div className="hero-bg" style={{ backgroundImage: `url(${page.image})` }} />
        <div className="hero-shade" />
        <div className="hero-inner">
          <div>
            <span className="eyebrow">{page.eyebrow}</span>
            <h1 className="hero-title">{page.title}</h1>
            <p className="hero-copy">{page.copy}</p>
            <div className="cta-row">
              <Link className="btn primary" href="/free-digital-bid">Start My Free Digital Bid</Link>
              <Link className="btn secondary" href="/floor-systems">Explore Floor Systems</Link>
            </div>
          </div>
          <QuoteFormCard />
        </div>
      </section>
      <TrustStrip />
      {mode === 'bid' ? <BidSections /> : mode === 'charts' ? <ChartSections /> : mode === 'contact' ? <ContactSections /> : mode === 'reviews' ? <ReviewSections /> : <DefaultSections />}
    </main>
  );
}

function TrustStrip() {
  return (
    <div className="trust-strip">
      <div className="trust-strip-inner">
        <div className="trust-item"><span className="trust-icon">⬢</span>System Review</div>
        <div className="trust-item"><span className="trust-icon">☆</span>Premium Visuals</div>
        <div className="trust-item"><span className="trust-icon">▤</span>Color Charts</div>
        <div className="trust-item"><span className="trust-icon">✓</span>Digital Bid</div>
        <div className="trust-item"><span className="trust-icon">⚡</span>XPS Powered</div>
      </div>
    </div>
  );
}

function DefaultSections() {
  return (
    <>
      <section className="section">
        <div className="section-head">
          <span className="eyebrow">Floor Systems</span>
          <h2>Choose the system. Upload the details. Get a clearer bid path.</h2>
          <p className="muted">These cards follow the locked route map and preserve editable content for future CMS use.</p>
        </div>
        <div className="grid-3">
          {services.map((service) => (
            <Link className="service-card" href={service.href} key={service.href}>
              <img src={service.image} alt={service.title} />
              <div className="card-body">
                <span className="tag">Explore</span>
                <h3>{service.title}</h3>
                <p className="muted">{service.copy}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
      <section className="section alt">
        <div className="section-inner">
          <div className="section-head">
            <span className="eyebrow">How It Works</span>
            <h2>Digital Bid Workflow</h2>
          </div>
          <div className="grid-3">
            <div className="process-card"><div className="card-body"><h3>1. Upload</h3><p className="muted">Photos, project details, surface condition, and inspiration.</p></div></div>
            <div className="process-card"><div className="card-body"><h3>2. Review</h3><p className="muted">Prep, repair, finish direction, and timeline are organized.</p></div></div>
            <div className="process-card"><div className="card-body"><h3>3. Submit</h3><p className="muted">The request is prepared for specialist review with safe claim handling.</p></div></div>
          </div>
        </div>
      </section>
      <GalleryPreview />
    </>
  );
}

function ChartSections() {
  return (
    <section className="section">
      <div className="section-head">
        <span className="eyebrow">Locked Chart Assets</span>
        <h2>Color Charts & Finish Collections</h2>
        <p className="muted">Every chart is placed in its correct category to prevent flake, metallic, quartz, solid, glitter, and stain confusion.</p>
      </div>
      <div className="grid-3">
        {chartAssets.map(([src, label]) => (
          <div className="chart-card" key={src}>
            <img src={src} alt={label} />
            <h3>{label}</h3>
            <Link className="btn primary" href="/free-digital-bid">Use in My Bid</Link>
          </div>
        ))}
      </div>
    </section>
  );
}

function BidSections() {
  return (
    <section className="section">
      <div className="section-head">
        <span className="eyebrow">7-Step Form</span>
        <h2>Submit Your Free Digital Bid</h2>
        <p className="muted">Collect contact details, location, photos, measurements, finish preferences, and consent before review.</p>
      </div>
      <DigitalBidForm />
    </section>
  );
}

function ContactSections() {
  return (
    <section className="section">
      <div className="split">
        <div>
          <span className="eyebrow">Contact</span>
          <h2 className="page-title">We Route Projects Carefully.</h2>
          <p className="muted">Use this page for support, lead routing, and project questions. Live integrations remain gated until verified.</p>
          <p>
            <strong>Phone:</strong> <a href={site.phoneHref}>{site.phone}</a><br />
            <strong>Address:</strong> {site.address}<br />
            <strong>Support:</strong> {site.supportEmail}<br />
            <strong>Leads:</strong> {site.leadsEmail}<br />
            <strong>WhatsApp:</strong> {site.whatsapp}<br />
            <strong>SMS:</strong> {site.sms}
          </p>
        </div>
        <QuoteFormCard />
      </div>
    </section>
  );
}

function ReviewSections() {
  return (
    <section className="section">
      <div className="section-head">
        <span className="eyebrow">Reviews</span>
        <h2>Trust Signals Require Verification.</h2>
        <p className="muted">Review cards are structured for verified testimonials only. No fake 5-star claims are included.</p>
      </div>
      <div className="grid-3">
        {[1, 2, 3].map((item) => (
          <div className="review-card" key={item}>
            <div className="card-body">
              <span className="tag">Placeholder</span>
              <h3>Verified review slot {item}</h3>
              <p className="muted">Replace with a verified customer testimonial before production claim use.</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function GalleryPreview() {
  return (
    <section className="section">
      <div className="section-head">
        <span className="eyebrow">Design Gallery</span>
        <h2>Approved Visual Inventory</h2>
      </div>
      <div className="grid-3">
        {gallery.slice(0, 6).map((item) => (
          <figure className="gallery-card" key={item.src}>
            <img src={item.src} alt={item.title} />
            <figcaption className="card-body">
              <span className="tag">{item.tag}</span>
              <h3>{item.title}</h3>
              <p className="muted">Concept visual. Do not describe as completed work unless separately verified.</p>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
