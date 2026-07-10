import CTAButton from './CTAButton'

interface FinalCTAProps {
  title?: string
  subtitle?: string
}

export default function FinalCTA({
  title = 'Ready to Transform Your Floors?',
  subtitle = 'Get your free, no-obligation quote today. Our nationwide team is standing by to help you choose the perfect system for your space.',
}: FinalCTAProps) {
  return (
    <section className="dark-section section-padding">
      <div className="container-custom text-center max-w-3xl mx-auto">
        <h2 className="font-heading font-extrabold text-3xl md:text-4xl lg:text-5xl mb-4">
          {title}
        </h2>
        <p className="text-white/70 text-base md:text-lg mb-8 leading-relaxed">
          {subtitle}
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <CTAButton href="/quote" size="lg" variant="gold">
            GET MY FREE QUOTE
          </CTAButton>
          <CTAButton href="/contact" size="lg" variant="outline">
            Contact Us
          </CTAButton>
        </div>
      </div>
    </section>
  )
}
