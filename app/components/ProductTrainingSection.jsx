import Link from "next/link";
export function ProductTrainingSection() {
  return (
    <section className="pt">
      <div className="pt-half">
        <img src="/images/xps-poly-products.png" alt="Products" className="pt-img"/>
        <div>
          <div className="pt-lbl">Premium Products &amp; Equipment</div>
          <div className="pt-t">Premium Products &amp; Equipment</div>
          <p className="pt-d">Professional-grade solutions for maximum performance &amp; longevity.</p>
          <Link href="/products" className="btn btn-gold">Shop Products →</Link>
        </div>
      </div>
      <div className="pt-half">
        <img src="/images/xps-flake-boxes.png" alt="Training" className="pt-img" style={{opacity:.7}}/>
        <div>
          <div className="pt-lbl">Training &amp; Contractor Success</div>
          <div className="pt-t">Training &amp; Contractor Success</div>
          <p className="pt-d">Build skills. Grow your business. Join the network of certified pros.</p>
          <Link href="/training" className="btn btn-gold">Learn More →</Link>
        </div>
      </div>
    </section>
  );
}