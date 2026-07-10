import { Check, ArrowRight, WifiOff, CheckCircle, Phone, Mail, Clock, Sparkles, Layers, Droplets, Gem, Diamond, Award, Truck, Users, ThumbsUp, Upload, Eye, Home, Building2, Factory, MapPin, Star, Shield, ChevronDown, ChevronRight, Tag, Calendar, UploadCloud, FileText, ImageIcon, Wrench, ShieldCheck, X } from '@/components/Icons';
import type { Metadata } from 'next'
import Link from 'next/link'
import CTAButton from '@/components/ui/CTAButton'
import FinalCTA from '@/components/ui/FinalCTA'

export const metadata: Metadata = {
  title: 'Flake Epoxy Systems',
  description: 'Flake epoxy flooring combines a durable epoxy base with decorative vinyl chips broadcast across the surface, creating a textured, multi-colored finish. The flakes add both visual appeal and practical slip resistance, making this system one of the most popular choices for residential garages, commercial spaces, and outdoor patios.',
  alternates: { canonical: '/floor-systems/flake' },
}

const benefits = [
  'Excellent slip resistance for safety',
  'Wide variety of color and flake combinations',
  'Hides minor imperfections in concrete',
  'UV-stable options for outdoor use',
  'Resistant to chemicals, oil, and stains',
  'Easy to clean and maintain'
]
const environments = ['Residential Garages', 'Commercial Retail', 'Patios & Decks', 'Basements', 'Laundry Rooms', 'Auto Shops']
const installation = [
  'Surface preparation: We diamond-grind the concrete to open pores and remove contaminants.',
  'Crack and joint repair: All cracks are filled and joints are addressed for a smooth base.',
  'Base coat application: A primer epoxy is applied to the prepared surface.',
  'Flake broadcast: Vinyl flakes are evenly broadcast across the wet base coat.',
  'Scraping and topcoat: Once cured, loose flakes are scraped and two clear topcoats are applied.',
  'Final inspection: We ensure full coverage and a uniform appearance.'
]
const maintenance = [
  'Sweep regularly to remove dirt and debris.',
  'Mop with a pH-neutral cleaner as needed.',
  'Avoid abrasive cleaning tools and harsh chemicals.',
  'Clean spills promptly to prevent staining.',
  'Reapply a clear topcoat every 3-5 years to refresh the surface.',
  'Use felt pads under furniture legs to prevent scratching.'
]
const relatedSystems = [
  { href: '/floor-systems/metallic', name: 'Metallic Systems' },
  { href: '/floor-systems/solid-color', name: 'Solid Color' },
  { href: '/floor-systems/quartz', name: 'Quartz Systems' },
  { href: '/floor-systems/polished-concrete', name: 'Polished Concrete' }
]

export default function FlakePage() {
  return (
    <>
      {/* Hero */}
      <section className="dark-section section-padding">
        <div className="container-custom text-center max-w-3xl mx-auto">
          <p className="text-gold font-heading font-semibold text-sm uppercase tracking-wider mb-2">Floor System</p>
          <h1 className="font-heading font-extrabold text-3xl md:text-4xl lg:text-5xl mb-4">
            <span className="gold-text">Flake Epoxy Flooring</span>
          </h1>
          <p className="text-white/70 text-base md:text-lg leading-relaxed">
            Flake epoxy flooring combines a durable epoxy base with decorative vinyl chips broadcast across the surface, creating a textured, multi-colored finish. The flakes add both visual appeal and practical slip resistance, making this system one of the most popular choices for residential garages, commercial spaces, and outdoor patios.
          </p>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          <h2 className="font-heading font-extrabold text-2xl md:text-3xl text-black mb-8 text-center">
            Key Benefits
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {benefits.map((benefit: string) => (
              <div key={benefit} className="flex items-start gap-3 bg-light-gray rounded-lg p-4">
                <Check size={20} className="text-gold flex-shrink-0 mt-0.5" />
                <span className="text-sm text-black">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Suitable Environments */}
      <section className="section-padding bg-light-gray">
        <div className="container-custom max-w-4xl">
          <h2 className="font-heading font-extrabold text-2xl md:text-3xl text-black mb-8 text-center">
            Suitable Environments
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            {environments.map((env: string) => (
              <span key={env} className="bg-white border border-light-gray px-5 py-2.5 rounded-full text-sm font-medium text-black">
                {env}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Installation Overview */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          <h2 className="font-heading font-extrabold text-2xl md:text-3xl text-black mb-6 text-center">
            Installation Overview
          </h2>
          <div className="space-y-4">
            {installation.map((step: string, index: number) => (
              <div key={index} className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-charcoal text-gold flex items-center justify-center font-heading font-bold text-sm flex-shrink-0">
                  {index + 1}
                </div>
                <p className="text-slate-brand text-sm leading-relaxed pt-2">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Maintenance Guide */}
      <section className="section-padding bg-light-gray">
        <div className="container-custom max-w-4xl">
          <h2 className="font-heading font-extrabold text-2xl md:text-3xl text-black mb-6 text-center">
            Maintenance Guide
          </h2>
          <div className="bg-white rounded-xl border border-light-gray p-6 space-y-3">
            {maintenance.map((tip: string) => (
              <div key={tip} className="flex items-start gap-3">
                <Check size={18} className="text-gold flex-shrink-0 mt-0.5" />
                <span className="text-sm text-slate-brand">{tip}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Placeholder */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="font-heading font-extrabold text-2xl md:text-3xl text-black mb-8 text-center">
            Gallery
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="aspect-[4/3] bg-gradient-to-br from-charcoal to-black rounded-xl flex items-center justify-center">
                <span className="text-white/20 text-sm">Flake Epoxy Systems photo placeholder {i}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Systems */}
      <section className="section-padding bg-light-gray">
        <div className="container-custom">
          <h2 className="font-heading font-extrabold text-2xl md:text-3xl text-black mb-8 text-center">
            Related Floor Systems
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {relatedSystems.map((sys) => (
              <Link
                key={sys.href}
                href={sys.href}
                className="group bg-white rounded-xl border border-light-gray hover:border-gold p-5 transition-colors"
              >
                <h3 className="font-heading font-bold text-sm text-black mb-1">{sys.name}</h3>
                <div className="flex items-center gap-1 text-gold text-xs font-medium mt-2">
                  Learn More <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  )
}
