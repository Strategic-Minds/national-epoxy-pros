import type { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircle, Phone, Mail, Clock, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Thank You',
  description: 'Your quote request has been received. We will be in touch shortly.',
  alternates: { canonical: '/thank-you' },
}

export default function ThankYouPage() {
  return (
    <div className="bg-light-gray min-h-screen flex items-center justify-center py-16">
      <div className="container-custom max-w-2xl text-center">
        <div className="w-20 h-20 rounded-full gold-gradient flex items-center justify-center mx-auto mb-6">
          <CheckCircle size={48} className="text-black" />
        </div>

        <h1 className="font-heading font-extrabold text-3xl md:text-4xl text-black mb-4">
          Thank You for Your Request!
        </h1>

        <p className="text-slate-brand text-base md:text-lg mb-2">
          Your quote request has been received. Our team will review your project details and contact you within 24 hours.
        </p>

        <div className="bg-white rounded-xl border border-light-gray p-6 my-8">
          <p className="text-slate-brand text-sm mb-1">Your Quote Reference Number</p>
          <p className="font-heading font-extrabold text-2xl gold-text">
            {/* This will be replaced by client-side URL param reading */}
            <span id="quote-ref">Loading...</span>
          </p>
        </div>

        <div className="bg-white rounded-xl border border-light-gray p-6 my-8 text-left">
          <h2 className="font-heading font-bold text-lg text-black mb-4 text-center">What Happens Next?</h2>
          <ol className="space-y-3">
            <li className="flex gap-3 items-start">
              <span className="w-7 h-7 rounded-full bg-charcoal text-gold flex items-center justify-center text-xs font-bold flex-shrink-0">1</span>
              <p className="text-slate-brand text-sm">We review your project details and assign a specialist.</p>
            </li>
            <li className="flex gap-3 items-start">
              <span className="w-7 h-7 rounded-full bg-charcoal text-gold flex items-center justify-center text-xs font-bold flex-shrink-0">2</span>
              <p className="text-slate-brand text-sm">We contact you within 24 hours to discuss your project.</p>
            </li>
            <li className="flex gap-3 items-start">
              <span className="w-7 h-7 rounded-full bg-charcoal text-gold flex items-center justify-center text-xs font-bold flex-shrink-0">3</span>
              <p className="text-slate-brand text-sm">We provide a detailed, transparent quote — no hidden fees.</p>
            </li>
            <li className="flex gap-3 items-start">
              <span className="w-7 h-7 rounded-full bg-charcoal text-gold flex items-center justify-center text-xs font-bold flex-shrink-0">4</span>
              <p className="text-slate-brand text-sm">Upon approval, we schedule your installation at your convenience.</p>
            </li>
          </ol>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
          <div className="bg-white rounded-xl border border-light-gray p-4 text-center">
            <Phone size={24} className="text-gold mx-auto mb-2" />
            <p className="text-xs text-slate-brand">Call Us</p>
            <p className="text-sm font-medium text-black">1-800-NEP-FLOOR</p>
          </div>
          <div className="bg-white rounded-xl border border-light-gray p-4 text-center">
            <Mail size={24} className="text-gold mx-auto mb-2" />
            <p className="text-xs text-slate-brand">Email Us</p>
            <p className="text-sm font-medium text-black">info@nationalepoxypros.com</p>
          </div>
          <div className="bg-white rounded-xl border border-light-gray p-4 text-center">
            <Clock size={24} className="text-gold mx-auto mb-2" />
            <p className="text-xs text-slate-brand">Response Time</p>
            <p className="text-sm font-medium text-black">Within 24 Hours</p>
          </div>
        </div>

        <Link
          href="/"
          className="inline-flex items-center gap-2 text-gold font-heading font-bold hover:underline"
        >
          Return to Homepage <ArrowRight size={18} />
        </Link>
      </div>

      <script
        dangerouslySetInnerHTML={{
          __html: `
            const params = new URLSearchParams(window.location.search);
            const ref = params.get('ref') || 'NEP-XXXX-XXXX';
            document.getElementById('quote-ref').textContent = ref;
          `,
        }}
      />
    </div>
  )
}
