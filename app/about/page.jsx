import { TopBars, XpsPowered } from "../components";

export default function AboutPage() {
  return (
    <main>
      <TopBars active="About" />
      <section className="pageHero splitHero">
        <div>
          <XpsPowered dark={false} />
          <h1>The Leader In Epoxy Flooring Solutions</h1>
          <p>National Epoxy Pros combines local certified crews, XPS-backed product standards, digital bidding, visualizer tools, and customer dashboard transparency.</p>
        </div>
        <img src="/images/concrete-grinder.webp" alt="XPS surface preparation equipment" />
      </section>
      <section className="contentBand valueGrid">
        {["XPS-backed standards", "70+ nationwide locations", "Certified professional installers", "Digital bid and dashboard workflow"].map((item) => (
          <article key={item}>
            <h3>{item}</h3>
            <p>Built to reduce uncertainty, improve project clarity, and create a premium floor-buying experience.</p>
          </article>
        ))}
      </section>
    </main>
  );
}
