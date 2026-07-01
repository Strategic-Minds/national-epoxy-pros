import Link from "next/link";
export function HeroSection() {
  return (
    <section className="hero" id="home">
      <div className="h-bg" />
      <div className="h-gl" />
      <div className="h-gb" />
      <div className="h-body">
        <div className="h-pill">⚡ Enterprise</div>
        <h1 className="h-h1">
          Epoxy Flooring<br />
          Systems Built For<br />
          <span className="g">Real Projects.</span>
        </h1>
        <p className="h-sub">High-performance epoxy floor systems for commercial, industrial, and residential spaces. Backed by 30+ years of expertise and nationwide service you can count on.</p>
        <div className="offer-box">
          <span className="offer-i">🎁</span>
          <div>
            <div className="offer-top">Start your digital bid and receive</div>
            <div className="offer-pct">15% OFF <span>your approved project proposal.</span></div>
            <div className="offer-fine">24-hour bid response guarantee. Terms apply.</div>
          </div>
        </div>
        <div className="h-ctas">
          <Link href="/digital-bid" className="btn btn-gold btn-lg">Start Digital Bid →</Link>
          <Link href="/design-center" className="btn btn-outline btn-lg">Explore Design Center</Link>
        </div>
      </div>
      <StatsBand />
    </section>
  );
}
function StatsBand() {
  const stats = [
    { ico:"🛡️", n:"30+", l:"Years of Experience", s:"Built on performance." },
    { ico:"📍", n:"70+", l:"Locations Nationwide", s:"Local Expertise. National Scale." },
    { ico:"📊", n:"Millions", l:"Sq Ft Installed", s:"Advanced systems. Professionally applied." },
    { ico:"✅", n:"Thousands", l:"Certified Pros", s:"Trained. Verified. Trusted." },
  ];
  return (
    <div className="stats">
      <div className="w">
        {stats.map(s => (
          <div key={s.l} className="stat">
            <div className="stat-ico">{s.ico}</div>
            <div>
              <div className="stat-n">{s.n}</div>
              <div className="stat-l">{s.l}</div>
              <div className="stat-s">{s.s}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}