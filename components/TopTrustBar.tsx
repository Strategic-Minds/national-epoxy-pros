import { trustItems } from '@/lib/site';
const ICONS: Record<string,string> = { clock:'\u23F0', pin:'\u{1F4CD}', shield:'\u{1F6E1}', star:'\u2B50', award:'\u26A1' };
export default function TopTrustBar(){return <div className="locked-topbar"><div className="locked-topbar-inner">{trustItems.map((item,i)=>(<span key={i}><span className="gold">{ICONS[item.icon]||'\u2726'}</span> {item.text}</span>))}</div></div>}
