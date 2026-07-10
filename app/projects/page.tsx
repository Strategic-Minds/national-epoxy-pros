import type { Metadata } from 'next'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import FinalCTA from '@/components/ui/FinalCTA'
import CTAButton from '@/components/ui/CTAButton'

export const metadata: Metadata = {
  title: 'Project Gallery | National Epoxy Pros',
  description: 'Browse completed epoxy flooring projects — garage floors, commercial spaces, and industrial facilities.',
}

const systems = ['All', 'Flake Epoxy', 'Metallic Epoxy', 'Solid Color', 'Quartz', 'Polished Concrete']
const markets = ['All', 'Residential', 'Commercial', 'Industrial']

const placeholderProjects = [
  { system: 'Flake Epoxy', market: 'Residential', label: 'Garage Floor — Decorative Flake', location: 'Texas' },
  { system: 'Metallic Epoxy', market: 'Commercial', label: 'Showroom Floor — Metallic', location: 'Florida' },
  { system: 'Solid Color', market: 'Commercial', label: 'Retail Space — Solid Color', location: 'Georgia' },
  { system: 'Quartz', market: 'Commercial', label: 'Restaurant Kitchen — Quartz', location: 'Arizona' },
  { system: 'Polished Concrete', market: 'Industrial', label: 'Warehouse — Polished Concrete', location: 'Ohio' },
  { system: 'Flake Epoxy', market: 'Residential', label: 'Three-Car Garage — Flake', location: 'Nevada' },
]

export default function ProjectsPage() {
  return (
    <>
      <Header />
      <main>
        <section className="bg-[#080808] py-20 px-6">
          <div className="max-w-5xl mx-auto text-center">
            <p className="text-[#D4AF37] text-sm font-semibold tracking-widest uppercase mb-4">Project Gallery</p>
            <h1 className="text-4xl md:text-5xl font-black text-white mb-6">Our Work</h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">Completed floors across residential, commercial, and industrial applications. New projects added regularly.</p>
          </div>
        </section>

        <section className="bg-[#0d0d0d] py-16 px-6">
          <div className="max-w-6xl mx-auto">
            {/* Filters */}
            <div className="flex flex-wrap gap-3 mb-10 justify-center">
              {systems.map(s => (
                <button key={s} className="text-sm border border-[#333] text-gray-400 px-4 py-1.5 rounded-full hover:border-[#D4AF37] hover:text-[#D4AF37] transition-colors">
                  {s}
                </button>
              ))}
            </div>

            {/* Gallery grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {placeholderProjects.map((p, i) => (
                <div key={i} className="bg-[#111] border border-[#222] rounded-2xl overflow-hidden group">
                  {/* Placeholder image */}
                  <div className="aspect-[4/3] bg-gradient-to-br from-[#1a1a1a] to-[#0d0d0d] flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-16 h-px bg-[#D4AF37] mx-auto mb-3" />
                      <p className="text-gray-600 text-xs uppercase tracking-widest">Photo coming soon</p>
                    </div>
                  </div>
                  <div className="p-5">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[#D4AF37] text-xs font-semibold uppercase tracking-wide">{p.system}</span>
                      <span className="text-gray-500 text-xs">{p.market}</span>
                    </div>
                    <h3 className="text-white font-semibold">{p.label}</h3>
                    <p className="text-gray-500 text-sm mt-1">{p.location}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <p className="text-gray-500 text-sm mb-6">Project photos are added as they become available. All images reflect actual completed work.</p>
              <CTAButton href="/quote">Get a Quote for Your Project</CTAButton>
            </div>
          </div>
        </section>

        <FinalCTA />
      </main>
      <Footer />
    </>
  )
}
