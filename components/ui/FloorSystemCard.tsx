import Link from 'next/link'
import { ArrowRight, LucideIcon } from 'lucide-react'

interface FloorSystemCardProps {
  href: string
  name: string
  description: string
  icon: LucideIcon
}

export default function FloorSystemCard({ href, name, description, icon: Icon }: FloorSystemCardProps) {
  return (
    <Link
      href={href}
      className="group bg-white rounded-xl border border-light-gray hover:border-gold p-6 transition-all duration-200 hover:shadow-xl flex flex-col"
    >
      <div className="w-14 h-14 rounded-lg bg-charcoal flex items-center justify-center mb-4 group-hover:bg-black transition-colors">
        <Icon size={28} className="text-gold" />
      </div>
      <h3 className="font-heading font-bold text-lg mb-2 text-black">{name}</h3>
      <p className="text-slate-brand text-sm leading-relaxed flex-1">{description}</p>
      <div className="flex items-center gap-1 mt-4 text-gold text-sm font-medium">
        Learn More
        <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
      </div>
    </Link>
  )
}
