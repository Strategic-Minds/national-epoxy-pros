import { TopBars } from "../components";

export default function GalleryPage() {
  const images = ["/images/homepage-reference.png", "/images/rockhard-epoxy.png", "/images/xps-flake-boxes.png", "/images/concrete-grinder.webp"];
  return (
    <main>
      <TopBars />
      <section className="pageHero compactHero">
        <h1>Gallery</h1>
        <p>Transformation examples, finish references, and XPS-backed installation visuals.</p>
      </section>
      <section className="contentBand galleryGrid">
        {images.map((image, index) => (
          <article key={image}>
            <img src={image} alt={`National Epoxy Pros gallery ${index + 1}`} />
            <h3>{index === 0 ? "Premium Garage Finish" : index === 1 ? "Rockhard Epoxy System" : index === 2 ? "Torginol Flake Broadcast" : "Certified Surface Prep"}</h3>
          </article>
        ))}
      </section>
    </main>
  );
}
