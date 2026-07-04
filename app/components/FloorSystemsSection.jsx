import Link from "next/link";
const SYS = [
  { t:"Flake Systems", d:"Durable. Decorative. Slip-resistant.", img:"/images/xps-flake-boxes.png", ico:"🪨", href:"/flake-systems" },
  { t:"Metallic Epoxy", d:"High-gloss. Stunning 3D finishes.", img:"/images/chart-metallic-colors.webp", ico:"✨", href:"/metallic-epoxy" },
  { t:"Quartz Systems", d:"Textured. Tough. Natural elegance.", img:"/images/xps-poly-products.png", ico:"💎", href:"/quartz-systems" },
  { t:"Solid Colors", d:"Clean. Seamless. Modern. Minimal.", img:"/images/chart-solid-color-base-coats.webp", ico:"🎨", href:"/solid-colors" },
  { t:"Stained Concrete", d:"Rich. Natural. Timeless beauty.", img:"/images/chart-concrete-dye-stain.webp", ico:"🏔️", href:"/stained-concrete" },
  { t:"Polished Concrete", d:"Industrial grade. Effortlessly sleek.", img:"/images/concrete-grinder.webp", ico:"⚡", href:"/polished-concrete" },
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
