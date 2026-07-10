import Link from 'next/link'
import { MapPin, Tag } from 'lucide-react'

interface ProjectCardProps {
  type: 'Residential' | 'Commercial' | 'Industrial'
  system: string
  location: string
}

export default function ProjectCard({ type, system, location }: ProjectCardProps) {
  const badgeColors = {
    Residential: 'bg-gold/20 text-gold border-gold/30',
    Commercial: 'bg-blue-500/20 text-blue-400 border-blue-500/30',
    Industrial: 'bg-green-500/20 text-green-400 border-green-500/30',
  }

  return (
    <div className="bg-charcoal rounded-xl overflow-hidden group flex flex-col">
      {/* Image placeholder */}
      <div className="relative aspect-[4/3] bg-gradient-to-br from-charcoal to-black flex items-center justify-center">
        <span className="text-white/20 text-sm">Project photo placeholder</span>
        <div className={`absolute top-3 left-3 ${badgeColors[type]} border px-3 py-1 rounded-full text-xs font-medium`}>
          {type}
        </div>
      </div>

      <div className="p-5 flex-1 flex flex-col">
        <div className="flex items-center gap-2 text-gold text-sm mb-2">
          <Tag size={14} />
          <span>{system}</span>
        </div>
        <div className="flex items-center gap-2 text-white/60 text-sm mb-4">
          <MapPin size={14} />
          <span>{location}</span>
        </div>
        <Link
          href="/quote"
          className="mt-auto text-gold text-sm font-medium hover:underline"
        >
          Request a Similar Quote →
        </Link>
      </div>
    </div>
  )
}
