import { Star } from 'lucide-react'

interface TestimonialCardProps {
  rating: number
  text: string
  author: string
  projectType: string
  location: string
}

export default function TestimonialCard({ rating, text, author, projectType, location }: TestimonialCardProps) {
  return (
    <div className="bg-white rounded-xl border border-light-gray p-6 flex flex-col">
      <div className="flex gap-1 mb-3">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            size={18}
            className={i < rating ? 'text-gold fill-gold' : 'text-light-gray'}
          />
        ))}
      </div>
      <p className="text-black/80 text-sm leading-relaxed flex-1 italic">&ldquo;{text}&rdquo;</p>
      <div className="mt-4 pt-4 border-t border-light-gray">
        <p className="font-heading font-bold text-sm text-black">{author}</p>
        <p className="text-slate-brand text-xs mt-0.5">{projectType} · {location}</p>
      </div>
    </div>
  )
}
