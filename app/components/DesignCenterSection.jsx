import Link from "next/link";
const COLS = [
  { t:"Flake Systems", imgs:["/images/chart-approved-flake.webp","/images/chart-top-12-flake.png","/images/xps-flake-boxes.png","/images/chart-approved-flake.webp"] },
  { t:"Metallic Epoxy", imgs:["/images/chart-metallic-colors.webp","/images/rockhard-epoxy.png","/images/chart-metallic-colors.webp","/images/system-mockup.png"] },
  { t:"Quartz Epoxy", dots:["#D1D5DB","#1E3A5F","#B45309","#065F46","#6B7280","#374151"] },
  { t:"Solid Colors", dots:["#1a1a1a","#1E3A5F","#065F46","#B91C1C","#FFC107","#374151","#9CA3AF","#7C3AED"] },
];
export function DesignCenterSection() {
  return (
    <section className="dc" id="design-center">
      <div className="w">
        <div>
          <div className="dc-lbl">Design Center</div>
          <h2 className="dc-h">Design Center</h2>
          <p className="dc-sub">Explore colors, see 3D, match, create your perfect floor.</p>
          <Link href="/design-center" className="btn btn-outline-gold">Browse All Colors →</Link>
        </div>
        <div className="dc-cols">
          {COLS.map(col => (
            <div key={col.t}>
              <div className="dc-ct">{col.t}</div>
              {col.imgs ? (
                <div className="dc-sg">{col.imgs.map((img,i) => <div key={i} className="dc-sw"><img src={img} alt="" loading="lazy"/></div>)}</div>
              ) : (
                <div className="dc-dots">{col.dots.map(d => <div key={d} className="dc-dot" style={{background:d}}/>)}</div>
              )}
              <div className="view-all">View All →</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
