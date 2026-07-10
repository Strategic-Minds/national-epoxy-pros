import type { Metadata } from 'next'
import Link from 'next/link'
import { Check, ArrowRight } from 'lucide-react'
import FinalCTA from '@/components/ui/FinalCTA'

export const metadata: Metadata = {
  title: 'Quartz Epoxy Systems',
  description: 'Quartz epoxy flooring uses colored quartz aggregate for durable, slip-resistant floors ideal for high-traffic and safety environments.',
  alternates: { canonical: '/floor-systems/quartz' },
}

const benefits = [
  'Exceptional durability for high-traffic areas',
  'Superior slip resistance even when wet',
  'Available in multiple color blends',
  'Resistant to impact, chemicals, and thermal shock',
  'Meets ADA and OSHA safety standards for slip resistance',
  'Customizable texture from fine to coarse',
]

const environments = [
  'Locker Rooms', 'Commercial Kitchens', 'Manufacturing Plants',
  'Restrooms', 'Pool Decks', 'Stairwells', 'Schools & Universities', 'Healthcare Facilities',
]

const installation = [
  'Surface preparation: Diamond grinding and cleaning of the concrete substrate.',
  'Crack and joint repair as needed.',
  'Primer application for optimal adhesion.',
  'Base coat application with quartz broadcast: Colored quartz aggregate is broadcast into the wet epoxy.',
  'Excess quartz removal: Once cured, loose quartz is vacuumed and the surface is scraped smooth.',
  'Topcoat application: One or two clear topcoats seal the quartz and provide the desired finish.',
  'Final inspection for uniform coverage and texture.',
]

const maintenance = [
  'Sweep or vacuum regularly to remove grit.',
  'Mop with a pH-neutral cleaner.',
  'For textured surfaces, use a stiff-bristle mop.',
  'Pressure wash outdoor installations annually.',
  'Reapply topcoat every 3-5 years to maintain protection.',
  'Inspect for wear in high-traffic zones and address promptly.',
]

const relatedSystems = [
  { href: '/floor-systems/flake', name: 'Flake Systems' },
  { href: '/floor-systems/metallic', name: 'Metallic Systems' },
  { href: '/floor-systems/solid-color', name: 'Solid Color' },
  { href: '/floor-systems/polished-concrete', name: 'Polished Concrete' },
]

export default function QuartzPage() {
  return (
    <>
      <section className="dark-section section-padding">
        <div className="container-custom text-center max-w-3xl mx-auto">
          <p className="text-gold font-heading font-semibold text-sm uppercase tracking-wider mb-2">Floor System</p>
          <h1 className="font-heading font-extrabold text-3xl md:text-4xl lg:text-5xl mb-4">
            <span className="gold-text">Quartz Epoxy Flooring</span>
          </h1>
          <p className="text-white/70 text-base md:text-lg leading-relaxed">
            Quartz epoxy flooring combines colored quartz aggregate with high-performance epoxy resins to create an extremely durable, slip-resistant surface. Ideal for high-traffic areas and environments where safety is paramount, quartz systems meet ADA and OSHA standards for slip resistance.
          </p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          <h2 className="font-heading font-extrabold text-2xl md:text-3xl text-black mb-8 text-center">Key Benefits</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {benefits.map((b) => (
              <div key={b} className="flex items-start gap-3 bg-light-gray rounded-lg p-4">
                <Check size={20} className="text-gold flex-shrink-0 mt-0.5" />
                <span className="text-sm text-black">{b}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-light-gray">
        <div className="container-custom max-w-4xl">
          <h2 className="font-heading font-extrabold text-2xl md:text-3xl text-black mb-8 text-center">Suitable Environments</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {environments.map((env) => (
              <span key={env} className="bg-white border border-light-gray px-5 py-2.5 rounded-full text-sm font-medium text-black">{env}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          <h2 className="font-heading font-extrabold text-2xl md:text-3xl text-black mb-6 text-center">Installation Overview</h2>
          <div className="space-y-4">
            {installation.map((step, index) => (
              <div key={index} className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-charcoal text-gold flex items-center justify-center font-heading font-bold text-sm flex-shrink-0">{index + 1}</div>
                <p className="text-slate-brand text-sm leading-relaxed pt-2">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-light-gray">
        <div className="container-custom max-w-4xl">
          <h2 className="font-heading font-extrabold text-2xl md:text-3xl text-black mb-6 text-center">Maintenance Guide</h2>
          <div className="bg-white rounded-xl border border-light-gray p-6 space-y-3">
            {maintenance.map((tip) => (
              <div key={tip} className="flex items-start gap-3">
                <Check size={18} className="text-gold flex-shrink-0 mt-0.5" />
                <span className="text-sm text-slate-brand">{tip}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="font-heading font-extrabold text-2xl md:text-3xl text-black mb-8 text-center">Gallery</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="aspect-[4/3] bg-gradient-to-br from-charcoal to-black rounded-xl flex items-center justify-center">
                <span className="text-white/20 text-sm">Quartz epoxy photo placeholder {i}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-light-gray">
        <div className="container-custom">
          <h2 className="font-heading font-extrabold text-2xl md:text-3xl text-black mb-8 text-center">Related Floor Systems</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {relatedSystems.map((sys) => (
              <Link key={sys.href} href={sys.href} className="group bg-white rounded-xl border border-light-gray hover:border-gold p-5 transition-colors">
                <h3 className="font-heading font-bold text-sm text-black mb-1">{sys.name}</h3>
                <div className="flex items-center gap-1 text-gold text-xs font-medium mt-2">Learn More <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" /></div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  )
}
