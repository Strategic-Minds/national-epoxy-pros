import Link from 'next/link';
import DigitalBidForm from '@/components/DigitalBidForm';
import QuoteFormCard from '@/components/QuoteFormCard';
import { chartAssets, pages, services, site } from '@/lib/site';

type Key = keyof typeof pages;

export default function ReferencePage({pageKey, mode='service'}:{pageKey:Key, mode?:'home'|'service'|'charts'|'bid'|'contact'|'reviews'|'legal'}){
 const page=pages[pageKey];
 return <main className="route-layout"><section className="hero-locked"><div className="hero-bg" style={{backgroundImage:`url(${page.image})`}}/><div className="hero-shade"/><div className="hero-inner"><div><span className="eyebrow">{page.eyebrow}</span><h1 className="hero-title">{page.title}</h1><p className="hero-copy">{page.copy}</p><div className="cta-row"><Link className="btn primary" href="/free-digital-bid">Start My Free Digital Bid</Link><a className="btn secondary" href={site.phoneHref}>Call {site.phone}</a><Link className="btn secondary" href="/design-center">View Color Charts</Link></div></div><QuoteFormCard/></div></section><RealNav/>{mode==='bid'?<BidSections/>:mode==='charts'?<ChartSections/>:mode==='contact'?<ContactSections/>:<HomeSections/>}</main>
}

function RealNav(){const links=[['Floor Systems','/floor-systems'],['Color Charts','/color-charts'],['Garage Flake','/flake-garage-floors'],['Metallic Epoxy','/metallic-epoxy'],['Contact','/contact']];return <div className="trust-strip"><div className="trust-strip-inner">{links.map(([label,href])=><Link className="trust-item" href={href} key={href}><span className="trust-icon">•</span>{label}</Link>)}</div></div>}

function HomeSections(){return <><section className="section"><div className="section-head"><span className="eyebrow">Approved Floor Systems</span><h2>Premium Floor Systems Built For Real Projects.</h2><p className="muted">This is the real working site structure: clean hero, real links, real forms, editable charts, and service pages using the approved visual direction without a flat image layer.</p></div><div className="grid-3">{services.map(s=><Link className="service-card" href={s.href} key={s.href}><img src={s.image} alt={s.title}/><div className="card-body"><span className="tag">Explore</span><h3>{s.title}</h3><p className="muted">{s.copy}</p></div></Link>)}</div></section><section className="section alt"><div className="section-inner"><div className="section-head"><span className="eyebrow">How It Works</span><h2>Digital Bid Workflow</h2></div><div className="grid-3"><Process title="1. Choose" text="Pick a floor system or finish direction."/><Process title="2. Submit" text="Send project details, photos, measurements, and notes."/><Process title="3. Review" text="National Epoxy Pros reviews the project before final scope."/></div></div></section></>}

function Process({title,text}:{title:string;text:string}){return <div className="process-card"><div className="card-body"><h3>{title}</h3><p className="muted">{text}</p></div></div>}

function ChartSections(){return <section className="section"><div className="section-head"><span className="eyebrow">Editable Chart Assets</span><h2>Color Charts & Finish Collections</h2><p className="muted">Charts are loaded from one editable list in lib/site.ts.</p></div><div className="grid-3">{chartAssets.map(([src,label])=><div className="chart-card" key={src}><img src={src} alt={label}/><h3>{label}</h3><Link className="btn primary" href="/free-digital-bid">Use In My Bid</Link></div>)}</div></section>}

function BidSections(){return <section className="section"><div className="section-head"><span className="eyebrow">Real Lead Intake</span><h2>Submit Your Free Digital Bid</h2><p className="muted">This form posts to /api/leads.</p></div><DigitalBidForm/></section>}

function ContactSections(){return <section className="section"><div className="split"><div><span className="eyebrow">Contact</span><h2 className="page-title">Start Your Project.</h2><p className="muted"><strong>Phone:</strong> {site.phone}<br/><strong>Address:</strong> {site.address}<br/><strong>Support:</strong> {site.supportEmail}<br/><strong>Leads:</strong> {site.leadsEmail}<br/><strong>WhatsApp:</strong> {site.whatsapp}<br/><strong>SMS:</strong> {site.sms}</p></div><QuoteFormCard/></div></section>}
