import { chartCollections } from "./chart-data";

export default function ColorChartGallery({
  id = "color-charts",
  eyebrow = "XPS Color Chart Library",
  title = "Pick the finish from the actual charts.",
  copy = "Tap any chart to expand it full screen, compare colors, then use that direction in your digital bid.",
  ctaHref = "#digital-bid",
  ctaLabel = "Use A Chart In My Bid",
  variant = "",
}) {
  return (
    <section id={id} className={`chartGallerySection ${variant}`.trim()}>
      <div className="chartHeader">
        <p className="eyebrow">{eyebrow}</p>
        <h2>{title}</h2>
        <p>{copy}</p>
      </div>

      <div className="chartGrid" aria-label="Expandable XPS color chart library">
        {chartCollections.map((chart) => (
          <a className="chartCard" href={`#chart-${chart.id}`} key={chart.id} aria-label={`Expand ${chart.title}`}>
            <span className="chartImageFrame">
              <span className="miniChart" aria-hidden="true">
                <span className="miniChartHeader">
                  <b>{chart.title}</b>
                  <small>{chart.label}</small>
                </span>
                <span className="miniChartGrid">
                  {chart.swatches.slice(0, 12).map(([name, code, color]) => (
                    <span className="swatchTile" key={`${chart.id}-${name}`}>
                      <i style={{ background: color }} />
                      <b>{name}</b>
                      <small>{code}</small>
                    </span>
                  ))}
                </span>
              </span>
            </span>
            <span className="chartCardMeta">
              <small>{chart.label}</small>
              <b>{chart.title}</b>
              <span>Click to expand</span>
            </span>
          </a>
        ))}
      </div>

      <div className="chartGalleryCta">
        <span>Know the exact finish you want?</span>
        <a className="goldCta" href={ctaHref}>
          {ctaLabel}
        </a>
      </div>

      {chartCollections.map((chart) => (
        <div className="chartLightbox" id={`chart-${chart.id}`} key={`lightbox-${chart.id}`} role="dialog" aria-label={`${chart.title} expanded chart`}>
          <a className="lightboxBackdrop" href={`#${id}`} aria-label="Close expanded chart" />
          <figure className="lightboxFrame">
            <a className="lightboxClose" href={`#${id}`} aria-label="Close expanded chart">
              Close
            </a>
            <div className="expandedChart">
              <div className="miniChartHeader">
                <b>{chart.title}</b>
                <small>{chart.label}</small>
              </div>
              <div className="expandedSwatchGrid">
                {chart.swatches.map(([name, code, color]) => (
                  <div className="swatchTile expanded" key={`expanded-${chart.id}-${name}`}>
                    <i style={{ background: color }} />
                    <b>{name}</b>
                    <small>{code}</small>
                  </div>
                ))}
              </div>
            </div>
            <figcaption>
              <b>{chart.title}</b>
              <span>{chart.copy}</span>
            </figcaption>
          </figure>
        </div>
      ))}
    </section>
  );
}
