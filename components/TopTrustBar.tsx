
import { trustItems } from '@/lib/site';
export default function TopTrustBar(){return <div className="locked-topbar"><div className="locked-topbar-inner">{trustItems.map(([icon,label])=><span key={label}><span className="gold">{icon}</span> {label}</span>)}</div></div>}
