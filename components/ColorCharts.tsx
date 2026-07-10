import { chartAssets } from '@/lib/site';

export default function ColorCharts(){
  return <section className="section">
    <div className="section-head">
      <span className="eyebrow">Color and finish direction</span>
      <h2>Approved chart assets for real buyer conversations.</h2>
      <p>Use these as starting points for finish direction. Final color and system choices require project review, substrate review, lighting context, and approved samples where applicable.</p>
    </div>
    <div className="chart-grid">
      {chartAssets.map(({title, image, href}) => <a className="chart-card" href={href} key={href}>
        <img src={image} alt={`${title} chart`} />
        <h3>{title}</h3>
        <p>Open chart</p>
      </a>)}
    </div>
  </section>
}
