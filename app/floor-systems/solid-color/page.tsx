import { Check, ArrowRight, WifiOff, CheckCircle, Phone, Mail, Clock, Sparkles, Layers, Droplets, Gem, Diamond, Award, Truck, Users, ThumbsUp, Upload, Eye, Home, Building2, Factory, MapPin, Star, Shield, ChevronDown, ChevronRight, Tag, Calendar, UploadCloud, FileText, ImageIcon, Wrench, ShieldCheck, X } from '@/components/Icons';
import type { Metadata } from 'next'
import Link from 'next/link'
import FinalCTA from '@/components/ui/FinalCTA'

export const metadata: Metadata = {
  title: 'Solid Color Epoxy',
  description: 'Solid color epoxy flooring provides a clean, uniform, modern look ideal for commercial and industrial environments.',
  alternates: { canonical: '/floor-systems/solid-color' },
}

const benefits = [
  'Clean, uniform appearance with consistent color',
  'Highly resistant to chemicals, oils, and solvents',
  'Seamless surface prevents bacteria and mold growth',
  'Available in virtually any solid color',
  'Fast installation with minimal downtime',
  'Excellent value for large areas',
]

const environments = [
  'Commercial Kitchens', 'Warehouse Floors', 'Manufacturing Facilities',
  'Healthcare Facilities', 'Pharmaceutical Labs', 'Auto Service Bays', 'School Gymnasiums',
]

const installation = [
  'Surface preparation: Diamond grinding to remove contaminants and open the concrete surface.',
  'Crack and joint repair for a smooth, uniform base.',
  'Primer application: A penetrating primer ensures proper adhesion.',
  'Base color coat: The solid color epoxy is applied evenly across the surface.',
  'Second coat: A second coat may be applied for enhanced coverage and depth.',
  'Topcoat: A clear, durable topcoat is applied for chemical and wear resistance.',
  'Final inspection and curing.',
]

const maintenance = [
  'Sweep daily to remove debris and prevent wear.',
  'Mop with pH-neutral cleaner as needed.',
  'For industrial settings, use an auto-scrubber with appropriate pads.',
  'Promptly clean chemical spills to prevent etching.',
  'Inspect regularly for wear in high-traffic areas.',
  'Reapply topcoat every 2-4 years depending on traffic levels.',
]

const relatedSystems = [
  { href: '/floor-systems/flake', name: 'Flake Systems' },
  { href: '/floor-systems/metallic', name: 'Metallic Systems' },
  { href: '/floor-systems/quartz', name: 'Quartz Systems' },
  { href: '/floor-systems/polished-concrete', name: 'Polished Concrete' },
]

export default function SolidColorPage() {
  return (
    <>
      <section className="dark-section section-padding">
        <div className="container-custom text-center max-w-3xl mx-auto">
          <p className="text-gold font-heading font-semibold text-sm uppercase tracking-wider mb-2">Floor System</p>
          <h1 className="font-heading font-extrabold text-3xl md:text-4xl lg:text-5xl mb-4">
            <span className="gold-text">Solid Color Epoxy</span>
          </h1>
          <p className="text-white/70 text-base md:text-lg leading-relaxed">
            Solid color epoxy provides a clean, uniform, and professional finish ideal for commercial and industrial environments. With a seamless surface available in virtually any color, it offers excellent chemical resistance and easy maintenance for high-performance spaces.
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
                <span className="text-white/20 text-sm">Solid color epoxy photo placeholder {i}</span>
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
