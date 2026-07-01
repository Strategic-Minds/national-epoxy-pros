import Link from "next/link";

export function HeroSection() {
  return (
    <section className="hero" id="home">
      <div className="hero-bg" />
      <div className="hero-overlay-l" />
      <div className="hero-overlay-b" />
      <div className="hero-content">
        <div className="hero-eyebrow">⚡ Enterprise</div>
        <h1 className="hero-h1">
          Epoxy Flooring<br />
          Systems <span className="gold-line">Built For</span>
          <span className="gold-line">Real Projects.</span>
        </h1>
        <p className="hero-sub">
          High-performance epoxy floor systems for commercial, industrial, and residential spaces. Backed by 30+ years of expertise and nationwide service you can count on.
        </p>
        <div className="offer-card">
          <span className="offer-icon">🎁</span>
          <div className="offer-text">
            <div className="top">Start your digital bid and receive</div>
            <div className="pct">15% OFF <span>your approved project proposal.</span></div>
            <div className="fine">24-hour bid response guarantee. Terms apply.</div>
          </div>
        </div>
        <div className="hero-ctas">
          <Link href="/digital-bid" className="btn-gold btn-gold-lg">Start Digital Bid →</Link>
          <Link href="/design-center" className="btn-outline btn-gold-lg">Explore Design Center</Link>
        </div>
      </div>
      <StatBar />
    </section>
  );
}

function StatBar() {
  const stats = [
    { icon: "🛡️", num: "30+", label: "Years of Experience", sub: "Built on performance." },
    { icon: "📍", num: "70+", label: "Locations Nationwide", sub: "Local Expertise. National Scale." },
    { icon: "📊", num: "Millions", label: "Sq Ft Installed", sub: "Advanced systems. Professionally applied." },
    { icon: "✅", num: "Thousands", label: "Certified Pros", sub: "Trained. Verified. Trusted." },
  ];
  return (
    <div className="stats-band">
      <div className="stats-inner">
        {stats.map((s) => (
          <div key={s.label} className="stat-block">
            <div className="stat-icon-wrap">{s.icon}</div>
            <div>
              <div className="stat-num">{s.num}</div>
              <div className="stat-label">{s.label}</div>
              <div className="stat-sub">{s.sub}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}