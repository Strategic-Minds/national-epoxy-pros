import type { Metadata } from 'next'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import FAQAccordion from '@/components/ui/FAQAccordion'
import FinalCTA from '@/components/ui/FinalCTA'

export const metadata: Metadata = {
  title: 'FAQ | National Epoxy Pros',
  description: 'Frequently asked questions about epoxy flooring, installation, maintenance, and the quote process.',
}

const faqs = [
  { question: 'How long does epoxy flooring installation take?', answer: 'Most residential garage installations take 1–2 days, depending on size, surface condition, and the system selected. Commercial and industrial projects vary by scope. Your quote will include a timeline estimate for your specific project.' },
  { question: 'How long does epoxy flooring last?', answer: 'Performance life depends on the system used, traffic levels, surface preparation quality, and maintenance. We use industrial-grade coatings designed for durability. Ask during your quote consultation for realistic expectations for your specific application.' },
  { question: 'Can epoxy be installed over existing concrete?', answer: 'In most cases, yes. The condition of the existing concrete is evaluated during the quote process. Surface prep — including grinding, crack repair, and moisture testing — is a critical part of every installation.' },
  { question: 'How do I care for my epoxy floor?', answer: 'Regular sweeping and occasional mopping with a pH-neutral cleaner keeps epoxy floors looking their best. Avoid harsh chemicals and abrasive scrubbers. We provide care instructions specific to your system after installation.' },
  { question: 'Do you offer warranties?', answer: 'Warranty terms depend on the system selected and project type. This is discussed in detail during your consultation — we do not publish generic warranty claims without reviewing the specifics of your project.' },
  { question: 'What is the quote process?', answer: 'Submit your project details through our five-step quote form. We review the information, may follow up with questions or a site visit, and provide a written proposal. There is no obligation to proceed after receiving a quote.' },
  { question: 'Do you work on commercial and industrial floors?', answer: 'Yes. We serve residential garages, commercial spaces, warehouses, showrooms, and industrial facilities. System recommendations vary significantly by application and traffic type.' },
  { question: 'What if my concrete has cracks or damage?', answer: 'Surface repairs are often part of the installation process. Minor cracks and damage can typically be addressed during prep. Significant structural issues may require specialist attention before coating. This is evaluated as part of the quoting process.' },
  { question: 'How much does epoxy flooring cost?', answer: 'Pricing depends on square footage, system type, surface condition, and project complexity. We provide detailed written quotes — not phone estimates — so you have accurate numbers for your specific project.' },
  { question: 'Are you available in my area?', answer: 'We serve clients nationwide. Enter your ZIP code in the quote form and we will confirm coverage for your area.' },
]

export default function FAQPage() {
  return (
    <>
      <Header />
      <main>
        <section className="bg-[#080808] py-20 px-6">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-[#D4AF37] text-sm font-semibold tracking-widest uppercase mb-4">FAQ</p>
            <h1 className="text-4xl md:text-5xl font-black text-white mb-6">Common Questions</h1>
            <p className="text-gray-400 text-lg">Honest answers about epoxy flooring, our process, and what to expect.</p>
          </div>
        </section>

        <section className="bg-[#0d0d0d] py-16 px-6">
          <div className="max-w-3xl mx-auto">
            <FAQAccordion items={faqs} />
          </div>
        </section>

        <FinalCTA />
      </main>
      <Footer />
    </>
  )
}
