import type { Metadata } from 'next'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import FinalCTA from '@/components/ui/FinalCTA'
import CTAButton from '@/components/ui/CTAButton'

export const metadata: Metadata = {
  title: 'Reviews | National Epoxy Pros',
  description: 'Real reviews from National Epoxy Pros customers across the country.',
}

export default function ReviewsPage() {
  return (
    <>
      <Header />
      <main>
        <section className="bg-[#080808] py-20 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-[#D4AF37] text-sm font-semibold tracking-widest uppercase mb-4">Reviews</p>
            <h1 className="text-4xl md:text-5xl font-black text-white mb-6">What Customers Say</h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">Verified reviews are published here as they are collected. We do not publish fabricated testimonials.</p>
          </div>
        </section>

        <section className="bg-[#0d0d0d] py-20 px-6">
          <div className="max-w-3xl mx-auto">
            <div className="bg-[#111] border border-[#222] rounded-2xl p-12 text-center">
              <div className="w-16 h-px bg-[#D4AF37] mx-auto mb-6" />
              <p className="text-gray-400 text-lg mb-4">Customer reviews are being collected and will appear here.</p>
              <p className="text-gray-600 text-sm">We verify each review before publishing. No fabricated or incentivized reviews are posted on this site.</p>
              <div className="mt-8">
                <CTAButton href="/quote">Get a Quote Today</CTAButton>
              </div>
            </div>
          </div>
        </section>

        <FinalCTA />
      </main>
      <Footer />
    </>
  )
}
