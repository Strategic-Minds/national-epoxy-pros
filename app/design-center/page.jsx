const collections = [
  {
    name: "Top Flake Colors",
    copy: "Garage-ready blends for fast decisions and high confidence.",
    colors: ["#cec09d", "#7f7a6f", "#9c9f9a", "#d0d0d0", "#738687", "#f1f2ef"],
  },
  {
    name: "Metallic Colors",
    copy: "High-movement showroom finishes and statement floors.",
    colors: ["#294097", "#421f14", "#ac7742", "#588086", "#e5e5e4", "#d3d3d3"],
  },
  {
    name: "Quartz Colors",
    copy: "Durable commercial looks with grip, texture, and depth.",
    colors: ["#93948f", "#beb7b2", "#c6b7a9", "#a7998c", "#d6d7d7", "#ececea"],
  },
  {
    name: "Solid Epoxy Base Coats",
    copy: "Clean utility floors, base systems, and simple color direction.",
    colors: ["#e5e6e7", "#d0d2d3", "#b1b8b9", "#cdd8d3", "#dbddde", "#eff0ed"],
  },
  {
    name: "Glitter Additives",
    copy: "Accent systems for custom, retail, and personality-driven spaces.",
    colors: ["#953435", "#a93e4e", "#904a3f", "#a85749", "#a56e5b", "#705550"],
  },
  {
    name: "Concrete Dye & Stain",
    copy: "Decorative concrete tone, warmth, and natural movement.",
    colors: ["#e0ddd9", "#cbc1bc", "#b89798", "#a98d8d", "#e7d8d9", "#efefed"],
  },
];

export const metadata = {
  title: "Design Center | National Epoxy Pros",
  description:
    "Explore XPS-backed epoxy, flake, quartz, metallic, glitter, solid, dye, and stain color families at nationalepoxypros.com.",
};

export default function DesignCenter() {
  return (
    <>
      <nav className="mainNav" aria-label="Design center navigation">
        <a className="brandLockup" href="/" aria-label="National Epoxy Pros home">
          <span className="brandWings" aria-hidden="true">NEP</span>
          <span>
            <b>National</b>
            <small>Epoxy Pros</small>
          </span>
        </a>
        <div className="navLinks">
          <a href="/">Home</a>
          <a href="#collections">Collections</a>
          <a href="/#digital-bid">Digital Bid</a>
        </div>
        <a className="goldCta" href="/#digital-bid">
          Start My Digital Bid
        </a>
      </nav>

      <main>
        <section className="designHero">
          <p className="eyebrow">National Epoxy Pros Design Center</p>
          <h1>Choose the finish before the quote.</h1>
          <p>
            Browse XPS-backed color families, then start a digital bid with a clearer direction for
            your floor at nationalepoxypros.com.
          </p>
        </section>

        <section id="collections" className="designLibrary">
          {collections.map((collection) => (
            <article className="libraryCard" key={collection.name}>
              <div className="largeSwatches" aria-hidden="true">
                {collection.colors.map((color) => (
                  <i key={color} style={{ background: color }} />
                ))}
              </div>
              <div>
                <h2>{collection.name}</h2>
                <p>{collection.copy}</p>
                <a className="textLink" href="/#digital-bid">
                  Use this direction in my bid
                </a>
              </div>
            </article>
          ))}
        </section>

        <section className="designCta">
          <h2>Ready to see it on your floor?</h2>
          <p>Start the digital bid, upload photos, and let the system guide the next step.</p>
          <a className="goldCta large" href="/#digital-bid">
            Start My Digital Bid
          </a>
        </section>
      </main>
    </>
  );
}
