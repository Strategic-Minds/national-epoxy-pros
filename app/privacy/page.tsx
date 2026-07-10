import { Check, ArrowRight, WifiOff, CheckCircle, Phone, Mail, Clock, Sparkles, Layers, Droplets, Gem, Diamond, Award, Truck, Users, ThumbsUp, Upload, Eye, Home, Building2, Factory, MapPin, Star, Shield, ChevronDown, ChevronRight, Tag, Calendar, UploadCloud, FileText, ImageIcon, Wrench, ShieldCheck, X } from '@/components/Icons';
import type { Metadata } from 'next'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

export const metadata: Metadata = {
  title: 'Privacy Policy | National Epoxy Pros',
  description: 'How National Epoxy Pros collects, uses, and protects your personal information.',
}

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main className="bg-[#080808] py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-black text-white mb-4">Privacy Policy</h1>
          <p className="text-gray-500 text-sm mb-10">Last updated: July 2026</p>

          <div className="space-y-10 text-gray-400 leading-relaxed">
            <section>
              <h2 className="text-white font-bold text-xl mb-3">Information We Collect</h2>
              <p>When you submit a quote request or contact form, we collect information you voluntarily provide: your name, email address, phone number, project address, and project details. We also collect basic usage data (pages visited, browser type, referral source) to improve our site.</p>
            </section>

            <section>
              <h2 className="text-white font-bold text-xl mb-3">How We Use Your Information</h2>
              <p>We use submitted information solely to respond to your quote request, communicate about your project, and improve our services. We do not sell, rent, or share your personal information with third parties for marketing purposes.</p>
            </section>

            <section>
              <h2 className="text-white font-bold text-xl mb-3">Uploaded Files</h2>
              <p>Photos you upload during the quote process are stored securely and used only by our team to assess your project. Files are not shared publicly and are retained only as long as necessary for project evaluation.</p>
            </section>

            <section>
              <h2 className="text-white font-bold text-xl mb-3">Cookies and Analytics</h2>
              <p>We may use cookies and analytics tools to understand how visitors use our site. This data is aggregated and not personally identifiable. You can disable cookies in your browser settings, though some site features may be affected.</p>
            </section>

            <section>
              <h2 className="text-white font-bold text-xl mb-3">Data Security</h2>
              <p>We use industry-standard security practices to protect your information, including encrypted transmission and access controls. No system is completely secure, but we take reasonable precautions to protect your data.</p>
            </section>

            <section>
              <h2 className="text-white font-bold text-xl mb-3">Your Rights</h2>
              <p>You may request access to, correction of, or deletion of your personal information by contacting us directly. We will respond to reasonable requests within a reasonable timeframe.</p>
            </section>

            <section>
              <h2 className="text-white font-bold text-xl mb-3">Contact</h2>
              <p>Questions about this policy? Contact us through our <a href="/contact" className="text-[#D4AF37] hover:underline">contact page</a>.</p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
