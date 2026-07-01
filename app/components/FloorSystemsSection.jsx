import Link from "next/link";
const SYS = [
  { t:"Flake Systems", d:"Durable. Decorative. Slip-resistant.", img:"https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=75", ico:"🪨", href:"/flake-systems" },
  { t:"Metallic Epoxy", d:"High-gloss. Stunning 3D finishes.", img:"https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=400&q=75", ico:"✨", href:"/metallic-epoxy" },
  { t:"Quartz Systems", d:"Textured. Tough. Natural elegance.", img:"https://images.unsplash.com/photo-1541123437800-1bb1317badc2?w=400&q=75", ico:"💎", href:"/quartz-systems" },
  { t:"Solid Colors", d:"Clean. Seamless. Modern. Minimal.", img:"https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=400&q=75", ico:"🎨", href:"/solid-colors" },
  { t:"Stained Concrete", d:"Rich. Natural. Timeless beauty.", img:"https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=400&q=75", ico:"🏔️", href:"/stained-concrete" },
  { t:"Polished Concrete", d:"Industrial grade. Effortlessly sleek.", img:"https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&q=75", ico:"⚡", href:"/polished-concrete" },
];
export function FloorSystemsSection() {
  return (
    <section className="sys" id="floor-systems">
      <div className="w">
        <div className="sec-hd">
          <h2>Premium <span className="g">Epoxy</span> Floor Systems</h2>
        </div>
        <div className="sys-grid">
          {SYS.map(s => (
            <Link href={s.href} key={s.t} className="sys-card">
              <div className="sys-img">
                <img src={s.img} alt={s.t} loading="lazy" />
                <div className="sys-ico-b">{s.ico}</div>
              </div>
              <div className="sys-body">
                <div className="sys-t">{s.t}</div>
                <p className="sys-d">{s.d}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}