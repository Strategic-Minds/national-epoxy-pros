'use client';
import { chartAssets } from '@/lib/site';
import Link from 'next/link';

export default function ColorCharts(){
  return (
    <section className="section">
      <div className="section-head">
        <span className="eyebrow">Color and finish direction</span>
        <h2>Approved chart assets for real buyer conversations.</h2>
        <p>Use these as starting points for finish direction. Final color and system choices require project review and approved samples.</p>
      </div>
      <div className="chart-grid">
        {chartAssets.map((asset) => (
          <Link className="chart-card" href={asset.href} key={asset.title}>
            <img src={asset.image} alt={asset.title} />
            <h3>{asset.title}</h3>
          </Link>
        ))}
      </div>
    </section>
  );
}
