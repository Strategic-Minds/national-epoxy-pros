import { Check, ArrowRight, WifiOff, CheckCircle, Phone, Mail, Clock, Sparkles, Layers, Droplets, Gem, Diamond, Award, Truck, Users, ThumbsUp, Upload, Eye, Home, Building2, Factory, MapPin, Star, Shield, ChevronDown, ChevronRight, Tag, Calendar, UploadCloud, FileText, ImageIcon, Wrench, ShieldCheck, X } from '@/components/Icons';
import type { Metadata } from 'next'
import CTAButton from '@/components/ui/CTAButton'

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with National Epoxy Pros. Call, email, or request a free quote for your epoxy flooring project.',
  alternates: { canonical: '/contact' },
}

export default function ContactPage() {
  return (
    <>
      <section className="dark-section section-padding">
        <div className="container-custom text-center max-w-3xl mx-auto">
          <h1 className="font-heading font-extrabold text-3xl md:text-4xl lg:text-5xl mb-4">
            <span className="gold-text">Contact</span> National Epoxy Pros
          </h1>
          <p className="text-white/70 text-base md:text-lg">
            Have questions? Ready to start your project? We are here to help.
            Reach out and our team will get back to you within 24 hours.
          </p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="text-center p-6 rounded-xl border border-light-gray">
              <div className="w-14 h-14 rounded-full bg-charcoal flex items-center justify-center mx-auto mb-4">
                <Phone size={24} className="text-gold" />
              </div>
              <h3 className="font-heading font-bold text-black mb-1">Phone</h3>
              <p className="text-slate-brand text-sm">(480) 800-8246</p>
              <p className="text-slate-brand text-xs mt-1">Mon-Fri, 8am-6pm EST</p>
            </div>
            <div className="text-center p-6 rounded-xl border border-light-gray">
              <div className="w-14 h-14 rounded-full bg-charcoal flex items-center justify-center mx-auto mb-4">
                <Mail size={24} className="text-gold" />
              </div>
              <h3 className="font-heading font-bold text-black mb-1">Email</h3>
              <p className="text-slate-brand text-sm">leads@nationalepoxypros.com</p>
              <p className="text-slate-brand text-xs mt-1">Response within 24h</p>
            </div>
            <div className="text-center p-6 rounded-xl border border-light-gray">
              <div className="w-14 h-14 rounded-full bg-charcoal flex items-center justify-center mx-auto mb-4">
                <MapPin size={24} className="text-gold" />
              </div>
              <h3 className="font-heading font-bold text-black mb-1">Service Area</h3>
              <p className="text-slate-brand text-sm">Nationwide</p>
              <p className="text-slate-brand text-xs mt-1">All 50 states</p>
            </div>
            <div className="text-center p-6 rounded-xl border border-light-gray">
              <div className="w-14 h-14 rounded-full bg-charcoal flex items-center justify-center mx-auto mb-4">
                <Clock size={24} className="text-gold" />
              </div>
              <h3 className="font-heading font-bold text-black mb-1">Hours</h3>
              <p className="text-slate-brand text-sm">Mon-Fri: 8am-6pm</p>
              <p className="text-slate-brand text-xs mt-1">Sat: 9am-2pm EST</p>
            </div>
          </div>

          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-heading font-extrabold text-2xl md:text-3xl text-black mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-slate-brand text-base mb-6">
              The fastest way to get pricing and details for your project is through our online quote wizard.
              It takes just 5 minutes and gives us everything we need to provide an accurate estimate.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <CTAButton href="/quote" size="lg" variant="gold">
                Start My Free Quote
              </CTAButton>
              <CTAButton href="/service-areas" size="lg" variant="outline">
                Check Service Areas
              </CTAButton>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
