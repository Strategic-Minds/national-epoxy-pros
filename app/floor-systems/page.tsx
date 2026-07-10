import { Check, ArrowRight, WifiOff, CheckCircle, Phone, Mail, Clock, Sparkles, Layers, Droplets, Gem, Diamond, Award, Truck, Users, ThumbsUp, Upload, Eye, Home, Building2, Factory, MapPin, Star, Shield, ChevronDown, ChevronRight, Tag, Calendar, UploadCloud, FileText, ImageIcon, Wrench, ShieldCheck, X } from '@/components/Icons';
import type { Metadata } from 'next'
import FloorSystemCard from '@/components/ui/FloorSystemCard'
import FinalCTA from '@/components/ui/FinalCTA'

export const metadata: Metadata = {
  title: 'Floor Systems',
  description: 'Explore our 5 premium epoxy floor systems: Flake, Metallic, Solid Color, Quartz, and Polished Concrete.',
  alternates: { canonical: '/floor-systems' },
}

const systems = [
  { href: '/floor-systems/flake', name: 'Flake Systems', description: 'Decorative vinyl flakes for a textured, slip-resistant finish. Great for garages and patios.', icon: Sparkles },
  { href: '/floor-systems/metallic', name: 'Metallic Systems', description: 'Stunning pearlescent, 3D-like appearance. Perfect for showrooms and luxury spaces.', icon: Layers },
  { href: '/floor-systems/solid-color', name: 'Solid Color', description: 'Clean, uniform color with a sleek modern look. Ideal for commercial and industrial floors.', icon: Droplets },
  { href: '/floor-systems/quartz', name: 'Quartz Systems', description: 'Durable colored quartz aggregate for high-traffic and safety environments.', icon: Gem },
  { href: '/floor-systems/polished-concrete', name: 'Polished Concrete', description: 'Grinded and polished concrete for a natural, low-maintenance premium finish.', icon: Diamond },
]

export default function FloorSystemsPage() {
  return (
    <>
      <section className="dark-section section-padding">
        <div className="container-custom text-center max-w-3xl mx-auto">
          <h1 className="font-heading font-extrabold text-3xl md:text-4xl lg:text-5xl mb-4">
            <span className="gold-text">Floor Systems</span>
          </h1>
          <p className="text-white/70 text-base md:text-lg">
            We offer five premium epoxy and concrete flooring systems, each designed for specific environments,
            aesthetics, and performance requirements. Explore each system to find the perfect fit for your space.
          </p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {systems.map((system) => (
              <FloorSystemCard key={system.href} {...system} />
            ))}
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  )
}
