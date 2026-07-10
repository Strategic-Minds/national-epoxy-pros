import { Check, ArrowRight, WifiOff, CheckCircle, Phone, Mail, Clock, Sparkles, Layers, Droplets, Gem, Diamond, Award, Truck, Users, ThumbsUp, Upload, Eye, Home, Building2, Factory, MapPin, Star, Shield, ChevronDown, ChevronRight, Tag, Calendar, UploadCloud, FileText, ImageIcon, Wrench, ShieldCheck, X } from '@/components/Icons';
import type { Metadata } from 'next'
import Link from 'next/link'
import FinalCTA from '@/components/ui/FinalCTA'

export const metadata: Metadata = {
  title: 'Polished Concrete',
  description: 'Polished concrete is a natural, low-maintenance flooring option that delivers a premium glossy finish through mechanical grinding and polishing.',
  alternates: { canonical: '/floor-systems/polished-concrete' },
}

const benefits = [
  'Natural, elegant appearance using existing concrete',
  'Extremely low maintenance — no coatings to reapply',
  'Reflective surface improves lighting and reduces energy costs',
  'Long-lasting — can last the lifetime of the building',
  'Compatible with integral dyes and stains for color',
  'Environmentally friendly — no volatile organic compounds',
]

const environments = [
  'Retail Stores', 'Warehouses', 'Office Buildings',
  'Restaurants', 'Showrooms', 'Residential Interiors', 'Educational Facilities',
]

const installation = [
  'Assessment: We evaluate the concrete slab for cracks, stains, and overall condition.',
  'Surface repair: Cracks and joints are repaired; stains are treated.',
  'Coarse grinding: Diamond abrasives progressively grind the surface to the desired exposure level.',
  'Fine grinding: Successively finer diamond pads refine the surface.',
  'Densifier application: A liquid densifier is applied to harden and strengthen the concrete.',
  'Polishing: Ultra-fine diamond resin pads polish the surface to the desired gloss level.',
  'Stain guard: An optional stain protector is applied for added resistance.',
]

const maintenance = [
  'Dust mop or sweep daily to prevent grit wear.',
  'Wet mop with a pH-neutral cleaner as needed.',
  'Avoid acidic or abrasive cleaners.',
  'Clean spills promptly to prevent staining.',
  'Burnish periodically to restore shine.',
  'Reapply stain protector every 1-2 years in high-traffic areas.',
]

const relatedSystems = [
  { href: '/floor-systems/flake', name: 'Flake Systems' },
  { href: '/floor-systems/metallic', name: 'Metallic Systems' },
  { href: '/floor-systems/solid-color', name: 'Solid Color' },
  { href: '/floor-systems/quartz', name: 'Quartz Systems' },
]

export default function PolishedConcretePage() {
  return (
    <>
      <section className="dark-section section-padding">
        <div className="container-custom text-center max-w-3xl mx-auto">
          <p className="text-gold font-heading font-semibold text-sm uppercase tracking-wider mb-2">Floor System</p>
          <h1 className="font-heading font-extrabold text-3xl md:text-4xl lg:text-5xl mb-4">
            <span className="gold-text">Polished Concrete</span>
          </h1>
          <p className="text-white/70 text-base md:text-lg leading-relaxed">
            Polished concrete is a premium, natural flooring option that transforms existing concrete slabs into a smooth, glossy, and highly durable surface. Through a multi-step grinding and polishing process, we create a mirror-like finish that is both beautiful and incredibly low-maintenance.
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
                <span className="text-white/20 text-sm">Polished concrete photo placeholder {i}</span>
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
