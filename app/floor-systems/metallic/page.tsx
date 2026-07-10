import { Check, ArrowRight, WifiOff, CheckCircle, Phone, Mail, Clock, Sparkles, Layers, Droplets, Gem, Diamond, Award, Truck, Users, ThumbsUp, Upload, Eye, Home, Building2, Factory, MapPin, Star, Shield, ChevronDown, ChevronRight, Tag, Calendar, UploadCloud, FileText, ImageIcon, Wrench, ShieldCheck, X } from '@/components/Icons';
import type { Metadata } from 'next'
import Link from 'next/link'
import FinalCTA from '@/components/ui/FinalCTA'

export const metadata: Metadata = {
  title: 'Metallic Epoxy Systems',
  description: 'Metallic epoxy flooring creates a stunning pearlescent, 3D-like appearance perfect for showrooms, lobbies, and luxury spaces.',
  alternates: { canonical: '/floor-systems/metallic' },
}

const benefits = [
  'Stunning 3D-like pearlescent appearance',
  'Unlimited color and pattern combinations',
  'Seamless, high-gloss mirror finish',
  'Highly durable and scratch-resistant',
  'UV-stable topcoats prevent yellowing',
  'Creates a unique, one-of-a-kind floor every time',
]

const environments = [
  'Showrooms', 'Lobbies & Entryways', 'Restaurants', 'Retail Spaces',
  'Residential Living Areas', 'Art Galleries', 'Office Reception Areas',
]

const installation = [
  'Surface preparation: Diamond grinding to create an open, clean surface.',
  'Crack repair: All cracks and imperfections are filled and smoothed.',
  'Base coat application: A pigmented epoxy base is applied.',
  'Metallic pigment application: Metallic pigments are mixed into the epoxy and applied with specialized tools to create movement.',
  'Manipulation: The installer uses tools to create the desired flowing, swirling pattern.',
  'Topcoat application: A high-gloss clear topcoat is applied for depth and protection.',
  'Final curing and inspection.',
]

const maintenance = [
  'Sweep or dust mop daily to prevent grit buildup.',
  'Mop with a pH-neutral cleaner and a microfiber mop.',
  'Avoid wax-based products that can dull the finish.',
  'Use walk-off mats at entrances to trap dirt.',
  'Reapply topcoat every 3-5 years to maintain gloss.',
  'Address any scratches promptly with professional repair.',
]

const relatedSystems = [
  { href: '/floor-systems/flake', name: 'Flake Systems' },
  { href: '/floor-systems/solid-color', name: 'Solid Color' },
  { href: '/floor-systems/quartz', name: 'Quartz Systems' },
  { href: '/floor-systems/polished-concrete', name: 'Polished Concrete' },
]

export default function MetallicPage() {
  return (
    <>
      <section className="dark-section section-padding">
        <div className="container-custom text-center max-w-3xl mx-auto">
          <p className="text-gold font-heading font-semibold text-sm uppercase tracking-wider mb-2">Floor System</p>
          <h1 className="font-heading font-extrabold text-3xl md:text-4xl lg:text-5xl mb-4">
            <span className="gold-text">Metallic Epoxy Flooring</span>
          </h1>
          <p className="text-white/70 text-base md:text-lg leading-relaxed">
            Metallic epoxy creates a stunning, three-dimensional pearlescent finish that mimics the look of molten metal, marble, or flowing water. Each installation is completely unique, making it the ultimate statement floor for showrooms, luxury homes, and high-end commercial spaces.
          </p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          <h2 className="font-heading font-extrabold text-2xl md:text-3xl text-black mb-8 text-center">Key Benefits</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {benefits.map((benefit) => (
              <div key={benefit} className="flex items-start gap-3 bg-light-gray rounded-lg p-4">
                <Check size={20} className="text-gold flex-shrink-0 mt-0.5" />
                <span className="text-sm text-black">{benefit}</span>
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
                <span className="text-white/20 text-sm">Metallic epoxy photo placeholder {i}</span>
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
