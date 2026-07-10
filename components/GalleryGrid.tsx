'use client';
import { gallery } from '@/lib/site';

export default function GalleryGrid({limit}:{limit?:number}){
  const items = limit ? gallery.slice(0, limit) : gallery;
  return (
    <div className="gallery-grid">
      {items.map(item => (
        <figure className="gallery-card" key={item.title}>
          <img src={item.image} alt={item.title} />
          <figcaption>
            <span>{item.category}</span>
            <h3>{item.title}</h3>
            <p>Concept visual. Not a photo of a completed installation.</p>
          </figcaption>
        </figure>
      ))}
    </div>
  );
}
