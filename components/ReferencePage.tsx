import Link from 'next/link';
import DigitalBidForm from '@/components/DigitalBidForm';
import { chartAssets, pages, site } from '@/lib/site';

type Key = keyof typeof pages;

export default function ReferencePage({pageKey, mode='service'}:{pageKey:Key, mode?:'home'|'service'|'charts'|'bid'|'contact'|'reviews'|'legal'}){
 const page=pages[pageKey];
 return <main className="approved-surface-page"><section className="approved-image-stage"><img className="approved-page-image" src={page.image} alt={`${page.title} approved website design`}/><ApprovedHotspots/><div className="approved-floating-actions"><Link className="btn primary" href="/free-digital-bid">Start My Free Digital Bid</Link><a className="btn secondary" href={site.phoneHref}>Call {site.phone}</a></div></section>{mode==='bid'?<BidSections/>:mode==='charts'?<ChartSections/>:<EditableNote/>}</main>
}

function ApprovedHotspots(){
 const nav=[
  {href:'/',label:'Home',className:'hotspot home'},
  {href:'/floor-systems',label:'Floor Systems',className:'hotspot nav-systems'},
  {href:'/design-center',label:'Design Center',className:'hotspot nav-design'},
  {href:'/free-digital-bid',label:'Digital Bid',className:'hotspot nav-bid'},
  {href:'/contact',label:'Contact',className:'hotspot nav-contact'},
  {href:'/free-digital-bid',label:'Start My Digital Bid',className:'hotspot hero-bid'},
  {href:site.phoneHref,label:`Call ${site.phone}`,className:'hotspot hero-call'},
  {href:'/color-charts',label:'Color Charts',className:'hotspot lower-left'},
  {href:'/flake-garage-floors',label:'Flake Garage Floors',className:'hotspot lower-mid'},
  {href:'/metallic-epoxy',label:'Metallic Epoxy',className:'hotspot lower-right'},
 ];
 return <div className="approved-hotspots" aria-label="Clickable approved design links">{nav.map(item=><Link key={`${item.href}-${item.label}`} href={item.href} className={item.className} aria-label={item.label}><span>{item.label}</span></Link>)}</div>
}

function EditableNote(){return <section className="approved-editable-note"><strong>Editable live site:</strong> approved visuals are controlled from <code>lib/site.ts</code>. Buttons are live clickable overlays. Forms and charts remain live below their own pages.</section>}

function ChartSections(){return <section className="section"><div className="section-head"><span className="eyebrow">Editable Chart Assets</span><h2>Color Charts & Finish Collections</h2><p className="muted">Charts are loaded from one editable list in <strong>lib/site.ts</strong>.</p></div><div className="grid-3">{chartAssets.map(([src,label])=><div className="chart-card" key={src}><img src={src} alt={label}/><h3>{label}</h3><Link className="btn primary" href="/free-digital-bid">Use In My Bid</Link></div>)}</div></section>}

function BidSections(){return <section className="section"><div className="section-head"><span className="eyebrow">Real Lead Intake</span><h2>Submit Your Free Digital Bid</h2><p className="muted">This form posts to <strong>/api/leads</strong>. Add <strong>RESEND_API_KEY</strong> in Vercel to deliver lead emails to {site.leadsEmail}.</p></div><DigitalBidForm/></section>}
