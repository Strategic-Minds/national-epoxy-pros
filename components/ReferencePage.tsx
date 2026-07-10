'use client';
import Link from 'next/link';
import QuoteFormCard from '@/components/QuoteFormCard';
import DigitalBidForm from '@/components/DigitalBidForm';
import { chartAssets, faqs, gallery, pages, services, site } from '@/lib/site';

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
      {mode === 'bid' ? <BidSections /> :
       mode === 'charts' ? <ChartSections /> :
       mode === 'contact' ? <ContactSections /> :
       mode === 'reviews' ? <ReviewSections /> :
       <DefaultSections />}
      <FaqSection />
    </main>
  );
}

function TrustStrip() {
  return (
    <div className="trust-strip">
      <div className="trust-strip-inner">
        <div className="trust-item"><span className="trust-icon">⏱</span>24-Hour Quote Guarantee</div>
        <div className="trust-item"><span className="trust-icon">📍</span>70+ Locations Nationwide</div>
        <div className="trust-item"><span className="trust-icon">🛡</span>Licensed & Insured</div>
        <div className="trust-item"><span className="trust-icon">⭐</span>4.4-Star Rated</div>
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
          <h2>America's Most Advanced Floor Coating Systems</h2>
          <p className="muted">From flake garage floors to metallic epoxy showrooms — we have the right system for every project.</p>
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
            <h2>Get Your Digital Bid in 3 Simple Steps</h2>
          </div>
          <div className="grid-3">
            <div className="process-card"><div className="card-body"><h3>1. Submit Photos</h3><p className="muted">Upload your space photos, square footage, and finish preferences.</p></div></div>
            <div className="process-card"><div className="card-body"><h3>2. We Review</h3><p className="muted">Our team assesses your project details and prepares your bid.</p></div></div>
            <div className="process-card"><div className="card-body"><h3>3. Get Your Quote</h3><p className="muted">Receive a detailed quote within 24 hours — free, no obligation.</p></div></div>
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
        <span className="eyebrow">Color Collections</span>
        <h2>Color Charts & Finish Collections</h2>
        <p className="muted">Browse our complete color library — flake, metallic, quartz, solid base, glitter, and stain systems.</p>
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
        <span className="eyebrow">Free Digital Bid</span>
        <h2>Submit Your Project Details</h2>
        <p className="muted">Tell us about your space, upload photos, choose your finish, and we&apos;ll get back to you within 24 hours.</p>
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
          <h2 className="page-title">Let&apos;s Talk About Your Project.</h2>
          <p className="muted">Call us, send an email, or submit your project details below. Our team responds fast.</p>
          <div className="contact-info">
            <p><strong>Phone:</strong> <a href={site.phoneHref}>{site.phone}</a></p>
            <p><strong>Email:</strong> <a href={`mailto:${site.supportEmail}`}>{site.supportEmail}</a></p>
            <p><strong>Address:</strong> {site.address}</p>
            <p><strong>WhatsApp:</strong> <a href={`https://wa.me/${site.whatsapp.replace(/\D/g,'')}`}>{site.whatsapp}</a></p>
          </div>
        </div>
        <QuoteFormCard />
      </div>
    </section>
  );
}

const testimonials = [
  { name: 'Mike R.', location: 'Phoenix, AZ', rating: 5, text: 'The flake garage floor completely transformed my space. Clean install, great communication, zero issues.' },
  { name: 'Sarah L.', location: 'Tampa, FL', rating: 5, text: 'The metallic epoxy in my showroom is stunning. Every customer asks about it. Worth every penny.' },
  { name: 'James T.', location: 'Dallas, TX', rating: 5, text: 'Fast digital bid process and the polished concrete turned out better than I imagined. Highly recommend.' },
];

function ReviewSections() {
  return (
    <section className="section">
      <div className="section-head">
        <span className="eyebrow">Customer Reviews</span>
        <h2>Trusted by Homeowners & Businesses Nationwide</h2>
        <p className="muted">4.4-Star rated. Powered by Xtreme Polishing Systems.</p>
      </div>
      <div className="grid-3">
        {testimonials.map((t) => (
          <div className="review-card" key={t.name}>
            <div className="card-body">
              <div className="stars">{'★'.repeat(t.rating)}</div>
              <p className="muted">&ldquo;{t.text}&rdquo;</p>
              <strong>{t.name}</strong>
              <span className="tag">{t.location}</span>
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
        <span className="eyebrow">Project Gallery</span>
        <h2>Real Floors. Real Results.</h2>
        <p className="muted">Browse our floor system portfolio across garages, showrooms, patios, and commercial spaces.</p>
      </div>
      <div className="grid-3">
        {gallery.slice(0, 6).map((item) => (
          <figure className="gallery-card" key={item.src}>
            <img src={item.src} alt={item.title} />
            <figcaption className="card-body">
              <span className="tag">{item.tag}</span>
              <h3>{item.title}</h3>
            </figcaption>
          </figure>
        ))}
      </div>
      <div className="cta-center">
        <Link className="btn primary" href="/free-digital-bid">Start My Free Digital Bid</Link>
      </div>
    </section>
  );
}

function FaqSection() {
  return (
    <section className="section alt">
      <div className="section-head">
        <span className="eyebrow">FAQ</span>
        <h2>Frequently Asked Questions</h2>
      </div>
      <div className="faq-list">
        {faqs.map(([q, a]) => (
          <div className="faq-item" key={q}>
            <h3>{q}</h3>
            <p className="muted">{a}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
