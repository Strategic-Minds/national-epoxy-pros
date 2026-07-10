import Link from 'next/link';
import DigitalBidForm from '@/components/DigitalBidForm';
import QuoteFormCard from '@/components/QuoteFormCard';
import { chartAssets, pages, services, site } from '@/lib/site';

type Key = keyof typeof pages;

type Mode = 'home' | 'service' | 'charts' | 'bid' | 'contact' | 'reviews' | 'legal';

export default function ReferencePage({ pageKey, mode = 'service' }: { pageKey: Key; mode?: Mode }) {
  const page = pages[pageKey];

  return (
    <main className="route-layout">
      <section className="hero-locked">
        <div className="hero-bg" style={{ backgroundImage: `url(${page.image})` }} aria-hidden="true" />
        <div className="hero-shade" aria-hidden="true" />
        <div className="hero-inner">
          <div>
            <span className="eyebrow">{page.eyebrow}</span>
            <h1 className="hero-title">{page.title}</h1>
            <p className="hero-copy">{page.copy}</p>
            <div className="cta-row">
              <Link className="btn primary" href="/free-digital-bid">Start My Free Digital Bid</Link>
              <a className="btn secondary" href={site.phoneHref}>Call {site.phone}</a>
              <Link className="btn secondary" href="/color-charts">View Color Charts</Link>
            </div>
          </div>
          <QuoteFormCard />
        </div>
      </section>
      <RealNav />
      {mode === 'bid' ? <BidSections /> : mode === 'charts' ? <ChartSections /> : mode === 'contact' ? <ContactSections /> : <HomeSections />}
    </main>
  );
}

function RealNav() {
  const links = [
    ['Floor Systems', '/floor-systems'],
    ['Color Charts', '/color-charts'],
    ['Garage Flake', '/flake-garage-floors'],
    ['Metallic Epoxy', '/metallic-epoxy'],
    ['Exterior Coatings', '/exterior-coatings'],
    ['Contact', '/contact'],
  ];

  return (
    <div className="trust-strip" aria-label="Floor system navigation">
      <div className="trust-strip-inner">
        {links.map(([label, href]) => (
          <Link className="trust-item" href={href} key={href}>
            <span className="trust-icon">•</span>{label}
          </Link>
        ))}
      </div>
    </div>
  );
}

function HomeSections() {
  return (
    <>
      <section className="section">
        <div className="section-head">
          <span className="eyebrow">Floor Systems</span>
          <h2>Real Pages. Real Buttons. Real Forms.</h2>
          <p className="muted">The approved black, white, and gold direction is rendered as HTML, CSS, and React components. Images are used only as normal hero and service imagery.</p>
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
            <span className="eyebrow">Digital Bid Workflow</span>
            <h2>Fast Project Intake Without Fake Claims.</h2>
          </div>
          <div className="grid-3">
            <Process title="1. Choose" text="Pick the finish direction that fits the project." />
            <Process title="2. Submit" text="Send photos, measurements, condition, timeline, and notes." />
            <Process title="3. Review" text="National Epoxy Pros reviews the request before final scope." />
          </div>
        </div>
      </section>
    </>
  );
}

function Process({ title, text }: { title: string; text: string }) {
  return <div className="process-card"><div className="card-body"><h3>{title}</h3><p className="muted">{text}</p></div></div>;
}

function ChartSections() {
  return (
    <section className="section">
      <div className="section-head">
        <span className="eyebrow">Editable Chart Assets</span>
        <h2>Color Charts And Finish Collections</h2>
        <p className="muted">Charts are loaded from the editable chart list in lib/site.ts.</p>
      </div>
      <div className="grid-3">
        {chartAssets.map(([src, label]) => (
          <div className="chart-card" key={src}>
            <img src={src} alt={label} />
            <h3>{label}</h3>
            <Link className="btn primary" href="/free-digital-bid">Use In My Bid</Link>
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
        <span className="eyebrow">Real Lead Intake</span>
        <h2>Submit Your Free Digital Bid</h2>
        <p className="muted">This form posts to /api/leads and remains editable as a real React form.</p>
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
          <h2 className="page-title">Start Your Project.</h2>
          <p className="muted">
            <strong>Phone:</strong> {site.phone}<br />
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
