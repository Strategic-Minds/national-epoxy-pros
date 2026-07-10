import type { Metadata } from 'next'
import QuoteWizard from '@/components/forms/QuoteWizard'

export const metadata: Metadata = {
  title: 'Get a Free Quote',
  description: 'Get your free, no-obligation epoxy flooring quote. Tell us about your project and we will provide a detailed estimate.',
  alternates: { canonical: '/quote' },
}

export default function QuotePage() {
  return (
    <div className="bg-light-gray min-h-screen">
      <div className="dark-section py-12 md:py-16">
        <div className="container-custom text-center max-w-3xl mx-auto">
          <h1 className="font-heading font-extrabold text-3xl md:text-4xl lg:text-5xl mb-4">
            <span className="gold-text">Get Your Free Quote</span>
          </h1>
          <p className="text-white/70 text-base md:text-lg">
            Tell us about your project in 5 quick steps. No obligation, no hidden fees.
            We will get back to you within 24 hours.
          </p>
        </div>
      </div>

      <div className="container-custom py-8 md:py-12">
        <QuoteWizard />
      </div>
    </div>
  )
}
