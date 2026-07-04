"use client";
import Link from "next/link";
const PHOTOS = [
  { src:"/images/rockhard-epoxy.png", cap:"Rock Hard Epoxy System · XPS" },
  { src:"/images/homepage-reference.png", cap:"Full Flake System · Installed" },
  { src:"/images/system-mockup.png", cap:"Commercial Floor System" },
  { src:"/images/xps-flake-boxes.png", cap:"XPS Flake Product Line" },
  { src:"/images/xps-poly-products.png", cap:"Polyaspartic Topcoat Systems" },
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
