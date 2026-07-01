import Link from "next/link";

const SYSTEMS = [
  { title: "Flake Systems", desc: "Durable. Decorative. Slip-resistant.", img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=75", icon: "🪨", href: "/flake-systems" },
  { title: "Metallic Epoxy", desc: "High-gloss. Stunning 3D finishes.", img: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=400&q=75", icon: "✨", href: "/metallic-epoxy" },
  { title: "Quartz Systems", desc: "Textured. Tough. Natural elegance.", img: "https://images.unsplash.com/photo-1541123437800-1bb1317badc2?w=400&q=75", icon: "💎", href: "/quartz-systems" },
  { title: "Solid Colors", desc: "Clean. Seamless. Modern. Minimal.", img: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=400&q=75", icon: "🎨", href: "/solid-colors" },
  { title: "Stained Concrete", desc: "Rich. Natural. Timeless beauty.", img: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=400&q=75", icon: "🏔️", href: "/stained-concrete" },
  { title: "Polished Concrete", desc: "Industrial grade. Effortlessly sleek.", img: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&q=75", icon: "⚡", href: "/polished-concrete" },
];

export function FloorSystemsSection() {
  return (
    <section className="systems-section" id="floor-systems">
      <div className="container">
        <div className="section-heading">
          <h2>Premium <span className="gold">Epoxy</span> Floor Systems</h2>
        </div>
        <div className="systems-grid">
          {SYSTEMS.map((s) => (
            <Link href={s.href} key={s.title} className="sys-card">
              <div className="sys-card-img">
                <img src={s.img} alt={s.title} loading="lazy" />
                <div className="sys-card-icon">{s.icon}</div>
              </div>
              <div className="sys-card-body">
                <div className="sys-card-title">{s.title}</div>
                <p className="sys-card-desc">{s.desc}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}