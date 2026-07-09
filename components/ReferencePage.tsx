import Link from 'next/link';
import type { CSSProperties } from 'react';
import DigitalBidForm from '@/components/DigitalBidForm';
import { chartAssets, pages, site } from '@/lib/site';

type Key = keyof typeof pages;
type Hotspot = { href:string; label:string; style:CSSProperties };

const baseHotspot: CSSProperties = {
 position:'absolute',
 zIndex:50,
 display:'block',
 borderRadius:10,
 background:'rgba(212,160,23,0)',
 cursor:'pointer',
};

export default function ReferencePage({pageKey, mode='service'}:{pageKey:Key, mode?:'home'|'service'|'charts'|'bid'|'contact'|'reviews'|'legal'}){
 const page=pages[pageKey];
 return <main className="approved-surface-page"><section className="approved-image-stage"><img className="approved-page-image" src={page.image} alt={`${page.title} approved website design`}/><ApprovedHotspots/><div className="approved-floating-actions"><Link className="btn primary" href="/free-digital-bid">Start My Free Digital Bid</Link><a className="btn secondary" href={site.phoneHref}>Call {site.phone}</a></div></section>{mode==='bid'?<BidSections/>:mode==='charts'?<ChartSections/>:<EditableNote/>}</main>
}

function ApprovedHotspots(){
 const nav: Hotspot[]=[
  {href:'/',label:'Home',style:{left:'4%',top:'1.5%',width:'20%',height:'5%'}},
  {href:'/floor-systems',label:'Floor Systems',style:{left:'32%',top:'2.4%',width:'12%',height:'4%'}},
  {href:'/design-center',label:'Design Center',style:{left:'44%',top:'2.4%',width:'12%',height:'4%'}},
  {href:'/free-digital-bid',label:'Digital Bid',style:{left:'56%',top:'2.4%',width:'12%',height:'4%'}},
  {href:'/contact',label:'Contact',style:{left:'68%',top:'2.4%',width:'10%',height:'4%'}},
  {href:'/free-digital-bid',label:'Start My Digital Bid',style:{left:'6%',top:'30%',width:'22%',height:'7%'}},
  {href:site.phoneHref,label:`Call ${site.phone}`,style:{left:'29%',top:'30%',width:'17%',height:'7%'}},
  {href:'/color-charts',label:'Color Charts',style:{left:'6%',top:'63%',width:'27%',height:'20%'}},
  {href:'/flake-garage-floors',label:'Flake Garage Floors',style:{left:'36%',top:'63%',width:'27%',height:'20%'}},
  {href:'/metallic-epoxy',label:'Metallic Epoxy',style:{left:'66%',top:'63%',width:'27%',height:'20%'}},
 ];
 return <div aria-label="Clickable approved design links" style={{position:'absolute',inset:0,zIndex:45}}>{nav.map(item=><Link key={`${item.href}-${item.label}`} href={item.href} aria-label={item.label} style={{...baseHotspot,...item.style}}><span style={{position:'absolute',width:1,height:1,overflow:'hidden',clip:'rect(0 0 0 0)'}}>{item.label}</span></Link>)}</div>
}

function EditableNote(){return <section className="approved-editable-note"><strong>Editable live site:</strong> approved visuals are controlled from <code>lib/site.ts</code>. Buttons are live clickable overlays. Forms and charts remain live below their own pages.</section>}

function ChartSections(){return <section className="section"><div className="section-head"><span className="eyebrow">Editable Chart Assets</span><h2>Color Charts & Finish Collections</h2><p className="muted">Charts are loaded from one editable list in <strong>lib/site.ts</strong>.</p></div><div className="grid-3">{chartAssets.map(([src,label])=><div className="chart-card" key={src}><img src={src} alt={label}/><h3>{label}</h3><Link className="btn primary" href="/free-digital-bid">Use In My Bid</Link></div>)}</div></section>}

function BidSections(){return <section className="section"><div className="section-head"><span className="eyebrow">Real Lead Intake</span><h2>Submit Your Free Digital Bid</h2><p className="muted">This form posts to <strong>/api/leads</strong>. Add <strong>RESEND_API_KEY</strong> in Vercel to deliver lead emails to {site.leadsEmail}.</p></div><DigitalBidForm/></section>}
