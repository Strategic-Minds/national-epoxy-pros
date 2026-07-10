import type { Metadata } from 'next'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import FinalCTA from '@/components/ui/FinalCTA'

export const metadata: Metadata = {
  title: 'About Us | National Epoxy Pros',
  description: 'Premium epoxy and concrete coating professionals serving residential, commercial, and industrial clients nationwide.',
}

const pillars = [
  { title: 'Premium Materials', desc: 'We use industrial-grade coatings designed for lasting performance — not contractor-grade shortcuts.' },
  { title: 'Nationwide Reach', desc: 'Serving homeowners, businesses, and industrial clients across the country with consistent quality.' },
  { title: 'Expert Crews', desc: 'Trained installation specialists who take surface prep and application detail seriously on every job.' },
  { title: 'Measurable Results', desc: 'We quote clearly, communicate throughout, and follow up after every installation.' },
]

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        <section className="bg-[#080808] py-20 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-[#D4AF37] text-sm font-semibold tracking-widest uppercase mb-4">About Us</p>
            <h1 className="text-4xl md:text-5xl font-black text-white mb-6">Built on Quality.<br />Trusted Nationwide.</h1>
            <p className="text-gray-400 text-lg leading-relaxed max-w-2xl mx-auto">
              National Epoxy Pros delivers premium floor coating systems for garages, commercial spaces, and industrial facilities. We combine quality materials, proven processes, and experienced crews to protect and transform your floors.
            </p>
          </div>
        </section>

        <section className="bg-[#0d0d0d] py-20 px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-black text-white text-center mb-12">What Sets Us Apart</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {pillars.map(p => (
                <div key={p.title} className="bg-[#111] border border-[#222] rounded-2xl p-8">
                  <div className="w-2 h-8 bg-[#D4AF37] rounded mb-4" />
                  <h3 className="text-white font-bold text-xl mb-3">{p.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#080808] py-20 px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-black text-white text-center mb-8">Our Commitment</h2>
            <p className="text-gray-400 text-lg leading-relaxed text-center">
              Every project we take on receives the same attention to detail — thorough surface preparation, precise application, and a finished result built to last. We don&apos;t cut corners on materials or process.
            </p>
          </div>
        </section>

        <FinalCTA />
      </main>
      <Footer />
    </>
  )
}
