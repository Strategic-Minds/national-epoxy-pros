import type { Metadata } from 'next'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import FinalCTA from '@/components/ui/FinalCTA'

export const metadata: Metadata = {
  title: 'Our Process | National Epoxy Pros',
  description: 'How we work — from initial quote to completed installation. A clear, accountable five-step process.',
}

const steps = [
  { num: '01', title: 'Submit Your Quote', desc: 'Complete our five-step quote form with project details, measurements, and floor system preferences. No phone tag required to get started.' },
  { num: '02', title: 'Project Review', desc: 'We review your submission, may request additional photos or a site visit, and prepare a detailed written proposal with clear scope and pricing.' },
  { num: '03', title: 'Surface Preparation', desc: 'On installation day, our crew prepares the concrete — diamond grinding, crack repair, moisture testing, and cleaning. Proper prep is the most important step in a lasting installation.' },
  { num: '04', title: 'System Application', desc: 'We apply your selected floor system in the correct sequence — base coat, broadcast layer if applicable, and topcoat — according to manufacturer specifications and your project requirements.' },
  { num: '05', title: 'Final Inspection & Handoff', desc: 'We walk through the finished floor with you, provide care instructions for your specific system, and confirm the project meets expectations before we consider it complete.' },
]

export default function ProcessPage() {
  return (
    <>
      <Header />
      <main>
        <section className="bg-[#080808] py-20 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-[#D4AF37] text-sm font-semibold tracking-widest uppercase mb-4">How It Works</p>
            <h1 className="text-4xl md:text-5xl font-black text-white mb-6">A Clear Process.<br />No Surprises.</h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">Every National Epoxy Pros project follows the same five-step process — designed for quality, accountability, and a result you can rely on.</p>
          </div>
        </section>

        <section className="bg-[#0d0d0d] py-20 px-6">
          <div className="max-w-3xl mx-auto space-y-6">
            {steps.map((step, i) => (
              <div key={step.num} className="flex gap-6 items-start">
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 rounded-full border-2 border-[#D4AF37] flex items-center justify-center">
                    <span className="text-[#D4AF37] font-black text-lg">{step.num}</span>
                  </div>
                  {i < steps.length - 1 && <div className="w-px h-8 bg-[#222] mx-auto mt-2" />}
                </div>
                <div className="pt-2 pb-8">
                  <h2 className="text-white font-bold text-xl mb-2">{step.title}</h2>
                  <p className="text-gray-400 leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <FinalCTA />
      </main>
      <Footer />
    </>
  )
}
