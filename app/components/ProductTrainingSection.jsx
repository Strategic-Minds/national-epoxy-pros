import Link from "next/link";

export function ProductTrainingSection() {
  return (
    <section className="pt-section">
      <div className="pt-half">
        <img src="https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=200&q=75" alt="Products" className="pt-img"/>
        <div>
          <div className="pt-label">XPS Products</div>
          <div className="pt-title">Premium Products & Equipment</div>
          <p className="pt-desc">Professional-grade solutions for maximum performance & longevity.</p>
          <Link href="/products" className="btn-gold">Shop Products →</Link>
        </div>
      </div>
      <div className="pt-half">
        <img src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=200&q=75" alt="Training" className="pt-img" style={{opacity:0.7}}/>
        <div>
          <div className="pt-label">XPS Training</div>
          <div className="pt-title">Training & Contractor Success</div>
          <p className="pt-desc">Build skills. Grow your business. Join the network of certified pros.</p>
          <Link href="/training" className="btn-gold">Learn More →</Link>
        </div>
      </div>
    </section>
  );
}