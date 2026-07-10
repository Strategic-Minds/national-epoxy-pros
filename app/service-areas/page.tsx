import type { Metadata } from 'next'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import FinalCTA from '@/components/ui/FinalCTA'
import CTAButton from '@/components/ui/CTAButton'

export const metadata: Metadata = {
  title: 'Service Areas | National Epoxy Pros',
  description: 'National Epoxy Pros serves residential, commercial, and industrial clients nationwide. Check coverage for your area.',
}

const regions = [
  { name: 'Southeast', states: 'FL, GA, SC, NC, TN, AL, MS' },
  { name: 'Southwest', states: 'TX, AZ, NM, NV, UT' },
  { name: 'West Coast', states: 'CA, OR, WA' },
  { name: 'Midwest', states: 'OH, IN, IL, MI, WI, MN, MO, IA' },
  { name: 'Mid-Atlantic', states: 'VA, MD, DE, PA, NJ, NY' },
  { name: 'Mountain', states: 'CO, MT, ID, WY' },
]

export default function ServiceAreasPage() {
  return (
    <>
      <Header />
      <main>
        <section className="bg-[#080808] py-20 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-[#D4AF37] text-sm font-semibold tracking-widest uppercase mb-4">Service Areas</p>
            <h1 className="text-4xl md:text-5xl font-black text-white mb-6">Nationwide Coverage</h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              We serve clients across the United States. Submit your ZIP code in the quote form to confirm coverage for your specific location.
            </p>
          </div>
        </section>

        <section className="bg-[#0d0d0d] py-16 px-6">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
              {regions.map(r => (
                <div key={r.name} className="bg-[#111] border border-[#222] rounded-2xl p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-2 h-2 rounded-full bg-[#D4AF37]" />
                    <h3 className="text-white font-bold">{r.name}</h3>
                  </div>
                  <p className="text-gray-400 text-sm">{r.states}</p>
                </div>
              ))}
            </div>

            <div className="bg-[#111] border border-[#1a1a1a] rounded-2xl p-8 text-center">
              <p className="text-white font-semibold text-lg mb-2">Not sure if we cover your area?</p>
              <p className="text-gray-400 mb-6">Enter your ZIP code in the quote form — we&apos;ll confirm availability when we review your request.</p>
              <CTAButton href="/quote">Check Your Area</CTAButton>
            </div>
          </div>
        </section>

        <FinalCTA />
      </main>
      <Footer />
    </>
  )
}
