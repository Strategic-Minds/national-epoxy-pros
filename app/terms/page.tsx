import type { Metadata } from 'next'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

export const metadata: Metadata = {
  title: 'Terms of Use | National Epoxy Pros',
  description: 'Terms and conditions for using the National Epoxy Pros website.',
}

export default function TermsPage() {
  return (
    <>
      <Header />
      <main className="bg-[#080808] py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-black text-white mb-4">Terms of Use</h1>
          <p className="text-gray-500 text-sm mb-10">Last updated: July 2026</p>

          <div className="space-y-10 text-gray-400 leading-relaxed">
            <section>
              <h2 className="text-white font-bold text-xl mb-3">Acceptance</h2>
              <p>By using this website, you agree to these terms. If you do not agree, please do not use this site. We may update these terms periodically — continued use after changes constitutes acceptance.</p>
            </section>

            <section>
              <h2 className="text-white font-bold text-xl mb-3">Use of This Site</h2>
              <p>This site is provided for informational purposes and to facilitate quote requests. You may not use this site for unlawful purposes, to transmit harmful content, or to interfere with site operations.</p>
            </section>

            <section>
              <h2 className="text-white font-bold text-xl mb-3">No Binding Estimates</h2>
              <p>Submitting a quote request does not create a contract or binding price commitment. All pricing is subject to site inspection, scope confirmation, and a written proposal. Ranges shown during the quote process are estimates only.</p>
            </section>

            <section>
              <h2 className="text-white font-bold text-xl mb-3">Content Accuracy</h2>
              <p>We make reasonable efforts to keep content accurate and current. Product information, service descriptions, and service area coverage are subject to change. We do not guarantee the accuracy or completeness of any content on this site.</p>
            </section>

            <section>
              <h2 className="text-white font-bold text-xl mb-3">Intellectual Property</h2>
              <p>Content on this site, including text, images, and design elements, is owned by or licensed to National Epoxy Pros. You may not reproduce, distribute, or create derivative works without written permission.</p>
            </section>

            <section>
              <h2 className="text-white font-bold text-xl mb-3">Limitation of Liability</h2>
              <p>To the extent permitted by law, National Epoxy Pros is not liable for indirect, incidental, or consequential damages arising from use of this site or reliance on its content.</p>
            </section>

            <section>
              <h2 className="text-white font-bold text-xl mb-3">Contact</h2>
              <p>Questions about these terms? Contact us through our <a href="/contact" className="text-[#D4AF37] hover:underline">contact page</a>.</p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
