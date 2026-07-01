"use client";
import Link from "next/link";
const PHOTOS = [
  { src:"https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=700&q=75", cap:"Garage Floor · Phoenix, AZ" },
  { src:"https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=700&q=75", cap:"Metallic Epoxy · Scottsdale, AZ" },
  { src:"https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=700&q=75", cap:"Commercial · Mesa, AZ" },
  { src:"https://images.unsplash.com/photo-1541123437800-1bb1317badc2?w=700&q=75", cap:"Polished Concrete · Tempe, AZ" },
  { src:"https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=700&q=75", cap:"Residential · Chandler, AZ" },
];
export function GallerySection() {
  const scroll = () => document.getElementById("gs")?.scrollBy({left:300,behavior:"smooth"});
  return (
    <section className="gal" id="gallery">
      <div className="w">
        <div className="gal-hdr">
          <div>
            <h2 className="gal-h">Real Projects. <span className="g">Real Results.</span><span className="gal-sub">See the quality. Experience the difference.</span></h2>
          </div>
          <Link href="/gallery" className="btn btn-dark-out">View Gallery →</Link>
        </div>
        <div className="gal-strip">
          <div className="gal-scroll" id="gs">
            {PHOTOS.map((p,i) => (
              <div key={i} className="g-item">
                <img src={p.src} alt={p.cap} loading="lazy"/>
                <div className="g-cap">{p.cap}</div>
              </div>
            ))}
          </div>
          <button className="gal-arr" onClick={scroll}>›</button>
        </div>
      </div>
    </section>
  );
}