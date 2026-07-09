import Link from 'next/link';
import { services } from '@/lib/site';

export default function ServiceGrid(){
  return <div className="grid-3">
    {services.map(s => <Link className="service-card" href={s.href} key={s.href}>
      <img src={s.image} alt={s.title} />
      <div className="card-body"><span className="tag">Explore</span><h3>{s.title}</h3><p className="muted">{s.copy}</p><strong>Explore system →</strong></div>
    </Link>)}
  </div>
}
