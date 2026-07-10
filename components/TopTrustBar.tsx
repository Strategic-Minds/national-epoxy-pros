import { TRUST_BAR_ITEMS } from '@/lib/site';
export default function TopTrustBar(){
  return (
    <div className="locked-topbar">
      <div className="locked-topbar-inner">
        {TRUST_BAR_ITEMS.map((item)=>(
          <span key={item.text}>
            <span className="gold">{item.icon}</span> {item.text}
          </span>
        ))}
      </div>
    </div>
  );
}
