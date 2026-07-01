"use client";
import Link from "next/link";

const PHOTOS = [
  { src:"https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=700&q=75", caption:"Garage Floor · Phoenix, AZ" },
  { src:"https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=700&q=75", caption:"Metallic Epoxy · Scottsdale, AZ" },
  { src:"https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=700&q=75", caption:"Commercial · Mesa, AZ" },
  { src:"https://images.unsplash.com/photo-1541123437800-1bb1317badc2?w=700&q=75", caption:"Polished Concrete · Tempe, AZ" },
  { src:"https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=700&q=75", caption:"Residential · Chandler, AZ" },
];

export function GallerySection() {
  const scroll = () => document.getElementById("gScroll")?.scrollBy({left:300,behavior:"smooth"});
  return (
    <section className="gallery-section" id="gallery">
      <div className="gallery-inner">
        <div className="gallery-header">
          <div>
            <div className="sec-label">Portfolio</div>
            <h2 className="gallery-h2">
              Real Projects. <span className="gold">Real Results.</span>
              <span className="sub">See the quality. Experience the difference.</span>
            </h2>
          </div>
          <Link href="/gallery" className="btn-outline-dark">View Gallery →</Link>
        </div>
        <div className="gallery-strip">
          <div className="gallery-scroll" id="gScroll">
            {PHOTOS.map((p,i)=>(
              <div key={i} className="g-item">
                <img src={p.src} alt={p.caption} loading="lazy"/>
                <div className="g-overlay">{p.caption}</div>
              </div>
            ))}
          </div>
          <button className="gallery-arrow" onClick={scroll}>›</button>
        </div>
      </div>
    </section>
  );
}