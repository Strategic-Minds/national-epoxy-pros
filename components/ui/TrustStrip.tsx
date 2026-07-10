import { ShieldCheck, MapPin, FileText, Wrench } from 'lucide-react'

const items = [
  { icon: ShieldCheck, label: 'Licensed & Insured' },
  { icon: MapPin, label: 'Nationwide Coverage' },
  { icon: FileText, label: 'Free Estimates' },
  { icon: Wrench, label: 'Expert Installation' },
]

export default function TrustStrip({ dark = false }: { dark?: boolean }) {
  return (
    <div className={`flex flex-wrap items-center justify-center gap-x-8 gap-y-4 ${dark ? 'text-white/80' : 'text-black/70'}`}>
      {items.map((item) => (
        <div key={item.label} className="flex items-center gap-2">
          <item.icon size={20} className="text-gold" />
          <span className="text-sm font-medium">{item.label}</span>
        </div>
      ))}
    </div>
  )
}
