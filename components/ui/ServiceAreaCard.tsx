import Link from 'next/link'
import { MapPin } from 'lucide-react'

interface ServiceAreaCardProps {
  region: string
  states: string[]
}

export default function ServiceAreaCard({ region, states }: ServiceAreaCardProps) {
  return (
    <div className="bg-white rounded-xl border border-light-gray p-6 hover:border-gold transition-colors">
      <div className="flex items-center gap-2 mb-3">
        <MapPin size={20} className="text-gold" />
        <h3 className="font-heading font-bold text-lg text-black">{region}</h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {states.map((state) => (
          <span
            key={state}
            className="text-xs font-medium bg-light-gray text-slate-brand px-3 py-1 rounded-full"
          >
            {state}
          </span>
        ))}
      </div>
      <Link
        href="/quote"
        className="mt-4 inline-block text-gold text-sm font-medium hover:underline"
      >
        Get a Quote in This Area →
      </Link>
    </div>
  )
}
