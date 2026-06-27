import PWAInstallButton from "./pwa-install-button";

const stats = [
  ["70+", "Locations", "Nationwide"],
  ["Monthly", "Crew Training", "Program"],
  ["Built On", "XPS Standards", "Nationwide"],
  ["Faster", "Digital", "Estimate"],
  ["Fast Response", "No Phone Tag", "Ever"],
];

const products = [
  ["flake", "Top Flake", "Floor Systems", "Decorative, slip-resistant, and built to last.", "View Flake Colors"],
  ["metallic", "Metallic", "Epoxy Floors", "High-gloss, custom metallic finishes.", "Explore Metallics"],
  ["solid", "Solid Color", "Epoxy Floors", "Clean, modern, and seamless looks.", "View Solid Colors"],
  ["design", "Design", "Center", "Visualize your floor before you buy.", "Start Designing"],
];

const process = [
  ["01", "Enter Info", "Takes 60 seconds"],
  ["02", "Prefill Estimate", "We gather your details"],
  ["03", "Pick Finish", "Select system and color"],
  ["04", "Visualizer", "See your floor direction"],
  ["05", "Upload Photos", "Your photos. Our system."],
  ["06", "Submit Bid", "Get your 15% discount"],
  ["07", "Dashboard", "Track every step"],
];

const trust = [
  ["5-Star Rated", "Consistently rated high by customers"],
  ["10,000+", "Projects completed"],
  ["Licensed", "Professional crews you can trust"],
  ["70+", "Locations nationwide"],
  ["XPS", "Backed by standards"],
  ["Fast", "No phone tag"],
];

export default function Home() {
  return (
    <>
      <header className="utilityBar" aria-label="National Epoxy Pros trust bar">
        <span>Powered by Xtreme Polishing Systems</span>
        <span>America&apos;s #1 Epoxy Super Store</span>
        <span>70+ Locations Nationwide</span>
        <span>Certified Trainers</span>
        <span>Manufacturers With 30+ Years Of Experience</span>
      </header>

      <nav className="mainNav" aria-label="Primary navigation">
        <a className="brandLockup" href="/" aria-label="National Epoxy Pros home">
          <span className="brandWings" aria-hidden="true">NEP</span>
          <span>
            <b>National</b>
            <small>Epoxy Pros</small>
          </span>
        </a>
        <div className="navLinks">
          <a href="#services">Services</a>
          <a href="#systems">Floor Systems</a>
          <a href="/design-center">Design Center</a>
          <a href="#process">Visualizer</a>
          <a href="#resources">Resources</a>
          <a href="#about">About</a>
          <a href="#reviews">Reviews</a>
          <a href="#contact">Contact</a>
        </div>
        <div className="navCtas">
          <PWAInstallButton variant="desktop" />
          <a className="goldCta" href="#digital-bid">Start My Digital Bid</a>
          <a className="phone" href="tel:+14808008246">(480) 800-8246</a>
        </div>
      </nav>

      <main className="homeCanvas">
        <section className="heroMatch" aria-label="Premium epoxy garage hero">
          <div className="heroText">
            <h1>
              <span>Premium Floors.</span>
              <span>Built To Last.</span>
              <strong>Built By National.</strong>
            </h1>
            <p>High-performance epoxy, concrete coatings, and polished floors for homes, businesses, and industrial spaces.</p>
            <ul>
              <li>Durable. Beautiful. Easy to Maintain.</li>
              <li>Installed by Certified Professionals.</li>
              <li>Backed by America&apos;s #1 Epoxy Super Store.</li>
            </ul>
            <div className="heroActions">
              <a className="goldCta large" href="#digital-bid">Start My Digital Bid</a>
              <a className="outlineCta" href="#systems">Explore Floor Systems</a>
            </div>
          </div>
          <aside className="statsPanel" aria-label="Trust metrics">
            {stats.map(([top, middle, bottom]) => (
              <article key={`${top}-${middle}`}>
                <span className="statIcon" aria-hidden="true" />
                <b>{top}</b>
                <span>{middle}</span>
                <small>{bottom}</small>
              </article>
            ))}
          </aside>
        </section>

        <section id="digital-bid" className="promoStrip">
          <span>Get 15% off your project with our digital bid system - fast - easy - accurate</span>
          <a href="#contact">Get My 15% Estimate</a>
        </section>

        <section id="systems" className="productBand">
          <article className="comparisonCard" aria-label="Before and after floor preview">
            <div className="comparisonImage" />
          </article>
          <div className="productCards">
            {products.map(([kind, title, subtitle, copy, link]) => (
              <article className="productCard" key={kind}>
                <div className={`productArt ${kind}`} aria-hidden="true" />
                <h2>{title}</h2>
                <h3>{subtitle}</h3>
                <p>{copy}</p>
                <a href="#digital-bid">{link}</a>
              </article>
            ))}
          </div>
        </section>

        <section className="bottomGrid" id="process">
          <article className="processPanel">
            <h2>The Simple 7-Step Digital Bid Process</h2>
            <div className="stepsRow">
              {process.map(([num, title, copy]) => (
                <div className="stepItem" key={num}>
                  <span className="stepIcon" aria-hidden="true" />
                  <b>{num}</b>
                  <strong>{title}</strong>
                  <small>{copy}</small>
                </div>
              ))}
            </div>
          </article>

          <article className="trustPanel" id="reviews">
            <h2>Trusted By Thousands Of Homeowners &amp; Businesses</h2>
            <div className="trustRow">
              {trust.map(([title, copy]) => (
                <div className="trustItem" key={title}>
                  <span className="trustIcon" aria-hidden="true" />
                  <b>{title}</b>
                  <small>{copy}</small>
                </div>
              ))}
            </div>
          </article>
        </section>
      </main>

      <PWAInstallButton variant="mobile" />
    </>
  );
}
