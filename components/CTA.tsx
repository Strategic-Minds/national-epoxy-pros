import Link from 'next/link';
import { site } from '@/lib/site';

export default function CTA({title='Ready to price the project the smart way?', copy='Upload photos, rough measurements, current floor condition, and inspiration. We will prepare your request for review without pretending every slab is identical.'}:{title?:string; copy?:string}){
  return <section className="cta-band">
    <div>
      <span className="eyebrow">Digital bid workflow</span>
      <h2>{title}</h2>
      <p>{copy}</p>
    </div>
    <div className="button-row">
      <Link className="btn primary" href="/digital-bid">Get My Digital Bid</Link>
      <a className="btn secondary" href={site.phoneHref}>Call Now</a>
    </div>
  </section>
}
