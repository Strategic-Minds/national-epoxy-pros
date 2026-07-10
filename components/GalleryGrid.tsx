import { gallery } from '@/lib/site';

export default function GalleryGrid({ limit }: { limit?: number }) {
  const items = limit ? gallery.slice(0, limit) : gallery;
  return (
    <div className="gallery-grid">
      {items.map((item) => (
        <figure className="gallery-card" key={item.src}>
          <img src={item.src} alt={item.title} />
          <figcaption className="card-body">
            <span className="tag">{item.tag}</span>
            <h3>{item.title}</h3>
          </figcaption>
        </figure>
      ))}
    </div>
  );
}
