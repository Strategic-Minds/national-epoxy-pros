import ColorChartGallery from "../color-chart-gallery";
import PwaInstallButton from "../pwa-install-button";

export const metadata = {
  title: "Design Center | National Epoxy Pros",
  description:
    "Explore XPS-backed epoxy, flake, quartz, metallic, glitter, solid, dye, and stain color charts at nationalepoxypros.com.",
};

export default function DesignCenter() {
  return (
    <>
      <nav className="mainNav" aria-label="Design center navigation">
        <a className="brandLockup" href="/" aria-label="National Epoxy Pros home">
          <span className="brandMark" aria-hidden="true">
            NEP
          </span>
          <span>
            <b>National</b>
            <small>Epoxy Pros</small>
          </span>
        </a>
        <div className="navLinks">
          <a href="/">Home</a>
          <a href="#collections">Color Charts</a>
          <a href="/#systems">Floor Systems</a>
          <a href="/#digital-bid">Digital Bid</a>
        </div>
        <div className="navCtas">
          <PwaInstallButton />
          <a className="goldCta" href="/#digital-bid">
            Start My Digital Bid
          </a>
        </div>
      </nav>

      <main>
        <section className="designHero">
          <p className="eyebrow">National Epoxy Pros Design Center</p>
          <h1>Choose the finish before the quote.</h1>
          <p>Browse the same XPS-backed color charts, expand each one full screen, then start a digital bid with a clearer direction for your floor.</p>
        </section>

        <ColorChartGallery
          id="collections"
          eyebrow="Interactive XPS Chart Library"
          title="Open every chart full screen."
          copy="These cropped chart assets keep the XPS black-and-gold branding intact while fitting cleanly into the National Epoxy Pros page layout."
          ctaHref="/#digital-bid"
          ctaLabel="Use This Finish In My Bid"
          variant="designCharts"
        />

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
