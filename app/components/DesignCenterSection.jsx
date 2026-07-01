import Link from "next/link";

const DC_COLS = [
  { title: "Flake Systems", imgs: ["https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=160&q=65","https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=160&q=65","https://images.unsplash.com/photo-1541123437800-1bb1317badc2?w=160&q=65","https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=160&q=65"] },
  { title: "Metallic Epoxy", imgs: ["https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=160&q=65","https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=160&q=65","https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=160&q=65","https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=160&q=65"] },
  { title: "Quartz Epoxy", dots: ["#D1D5DB","#1E3A5F","#B45309","#065F46","#6B7280","#374151"] },
  { title: "Solid Colors", dots: ["#1a1a1a","#1E3A5F","#065F46","#B91C1C","#F5A900","#374151","#9CA3AF","#7C3AED"] },
];

export function DesignCenterSection() {
  return (
    <section className="dc-section" id="design-center">
      <div className="dc-inner">
        <div>
          <div className="dc-label">Design Center</div>
          <h2 className="dc-h2">Design Center</h2>
          <p className="dc-sub">Explore colors, see 3D, match, create your perfect floor.</p>
          <Link href="/design-center" className="btn-outline-gold">Browse All Colors →</Link>
        </div>
        <div className="dc-cols">
          {DC_COLS.map(col => (
            <div key={col.title}>
              <div className="dc-col-title">{col.title}</div>
              {col.imgs ? (
                <div className="dc-swatch-grid">
                  {col.imgs.map((img,i) => (
                    <div key={i} className="dc-swatch"><img src={img} alt="" loading="lazy"/></div>
                  ))}
                </div>
              ) : (
                <div className="dc-color-dots">
                  {col.dots.map(d => (
                    <div key={d} className="dc-dot" style={{background:d}}/>
                  ))}
                </div>
              )}
              <div className="dc-view-all">View All →</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}