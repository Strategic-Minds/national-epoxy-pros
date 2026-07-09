import Link from 'next/link';
import DigitalBidForm from '@/components/DigitalBidForm';
import { chartAssets, pages, site } from '@/lib/site';

type Key = keyof typeof pages;

export default function ReferencePage({pageKey, mode='service'}:{pageKey:Key, mode?:'home'|'service'|'charts'|'bid'|'contact'|'reviews'|'legal'}){
 const page=pages[pageKey];
 return <main className="approved-surface-page"><section className="approved-image-stage"><img className="approved-page-image" src={page.image} alt={`${page.title} approved website design`}/><div className="approved-floating-actions"><Link className="btn primary" href="/free-digital-bid">Start My Free Digital Bid</Link><a className="btn secondary" href={site.phoneHref}>Call {site.phone}</a></div></section>{mode==='bid'?<BidSections/>:mode==='charts'?<ChartSections/>:<EditableNote/>}</main>
}

function EditableNote(){return <section className="approved-editable-note"><strong>Editable live site:</strong> approved visuals are controlled from <code>lib/site.ts</code>. Forms and charts remain live below their own pages.</section>}

function ChartSections(){return <section className="section"><div className="section-head"><span className="eyebrow">Editable Chart Assets</span><h2>Color Charts & Finish Collections</h2><p className="muted">Charts are loaded from one editable list in <strong>lib/site.ts</strong>.</p></div><div className="grid-3">{chartAssets.map(([src,label])=><div className="chart-card" key={src}><img src={src} alt={label}/><h3>{label}</h3><Link className="btn primary" href="/free-digital-bid">Use In My Bid</Link></div>)}</div></section>}

function BidSections(){return <section className="section"><div className="section-head"><span className="eyebrow">Real Lead Intake</span><h2>Submit Your Free Digital Bid</h2><p className="muted">This form posts to <strong>/api/leads</strong>. Add <strong>RESEND_API_KEY</strong> in Vercel to deliver lead emails to {site.leadsEmail}.</p></div><DigitalBidForm/></section>}
