import Link from 'next/link'
import {
  Sparkles, Layers, Droplets, Gem, Diamond, ArrowRight,
  Award, Truck, Users, ThumbsUp, Upload, Eye,
  Home, Building2, Factory, Phone,
} from 'lucide-react'
import CTAButton from '@/components/ui/CTAButton'
import TrustStrip from '@/components/ui/TrustStrip'
import FloorSystemCard from '@/components/ui/FloorSystemCard'
import BeforeAfterViewer from '@/components/ui/BeforeAfterViewer'
import ProjectCard from '@/components/ui/ProjectCard'
import TestimonialCard from '@/components/ui/TestimonialCard'
import FAQAccordion from '@/components/ui/FAQAccordion'
import FinalCTA from '@/components/ui/FinalCTA'
import ServiceAreaCard from '@/components/ui/ServiceAreaCard'

const floorSystems = [
  { href: '/floor-systems/flake', name: 'Flake Systems', description: 'Decorative vinyl flakes for a textured, slip-resistant finish. Great for garages and patios.', icon: Sparkles },
  { href: '/floor-systems/metallic', name: 'Metallic Systems', description: 'Stunning pearlescent, 3D-like appearance. Perfect for showrooms and luxury spaces.', icon: Layers },
  { href: '/floor-systems/solid-color', name: 'Solid Color', description: 'Clean, uniform color with a sleek modern look. Ideal for commercial and industrial floors.', icon: Droplets },
  { href: '/floor-systems/quartz', name: 'Quartz Systems', description: 'Durable colored quartz aggregate for high-traffic and safety environments.', icon: Gem },
  { href: '/floor-systems/polished-concrete', name: 'Polished Concrete', description: 'Grinded and polished concrete for a natural, low-maintenance premium finish.', icon: Diamond },
]

const pillars = [
  { icon: Award, title: 'Expert Craftsmen', text: 'Our certified installers bring years of specialized experience to every project.' },
  { icon: Gem, title: 'Premium Materials', text: 'We use only commercial-grade epoxies and coatings designed to last for decades.' },
  { icon: Truck, title: 'Nationwide Reach', text: 'From coast to coast, our network of professionals serves customers everywhere.' },
  { icon: ThumbsUp, title: 'Satisfaction Focused', text: 'We back our work with warranties and a commitment to your complete satisfaction.' },
]

const processSteps = [
  { num: '01', title: 'Free Consultation', text: 'Tell us about your project. We assess your space and recommend the best system.' },
  { num: '02', title: 'Custom Quote', text: 'Receive a detailed, transparent quote with no hidden fees or surprises.' },
  { num: '03', title: 'Surface Prep', text: 'We diamond-grind and repair your concrete for optimal coating adhesion.' },
  { num: '04', title: 'Installation', text: 'Our team applies your chosen system with precision and care.' },
  { num: '05', title: 'Final Walkthrough', text: 'We inspect every detail and ensure you are 100% satisfied with the result.' },
]

const useCases = [
  { icon: Home, title: 'Residential', text: 'Garages, basements, patios, and pool decks. Transform your home with durable, beautiful floors.', features: ['Garage Floors', 'Basements', 'Patios & Decks', 'Laundry Rooms'] },
  { icon: Building2, title: 'Commercial', text: 'Retail spaces, restaurants, offices, and showrooms. Make a lasting impression on your customers.', features: ['Retail Stores', 'Restaurants', 'Office Spaces', 'Showrooms'] },
  { icon: Factory, title: 'Industrial', text: 'Warehouses, manufacturing facilities, and heavy-duty environments. Floors that stand up to anything.', features: ['Warehouses', 'Manufacturing', 'Auto Shops', 'Healthcare'] },
]

const testimonials = [
  { rating: 5, text: 'The team was professional from start to finish. My garage floor looks incredible — better than I imagined. The metallic system is absolutely stunning.', author: 'Verified Customer', projectType: 'Residential Garage', location: 'Texas' },
  { rating: 5, text: 'Outstanding work on our showroom floor. The installation was quick, clean, and the results are exactly what we wanted. Highly recommend.', author: 'Verified Customer', projectType: 'Commercial Showroom', location: 'Florida' },
  { rating: 5, text: 'Our warehouse floor has held up perfectly through forklift traffic and chemical spills. The quartz system is incredibly durable.', author: 'Verified Customer', projectType: 'Industrial Warehouse', location: 'Ohio' },
]

const faqItems = [
  { question: 'What is epoxy flooring?', answer: 'Epoxy flooring is a durable, high-performance surface created by applying layers of epoxy resin over properly prepared concrete. It creates a seamless, non-porous finish that is resistant to chemicals, stains, impact, and wear.' },
  { question: 'How long does epoxy flooring last?', answer: 'With proper installation and maintenance, epoxy flooring can last 15-20+ years in residential settings and 10-15 years in high-traffic commercial or industrial environments.' },
  { question: 'How long does installation take?', answer: 'Most residential garage floors take 1-2 days, while larger commercial or industrial projects may take 3-5 days depending on size, system complexity, and curing conditions.' },
  { question: 'Can epoxy be installed in winter?', answer: 'Yes. We use temperature-controlled equipment and specialized curing agents for cold-weather installations. Indoor projects with climate control can be done year-round.' },
  { question: 'How much does epoxy flooring cost?', answer: 'Costs vary based on square footage, system type, surface condition, and location. Residential garages typically range from $4-$12 per square foot. Commercial and industrial projects vary widely. Request a free quote for accurate pricing.' },
  { question: 'What surfaces work with epoxy?', answer: 'Epoxy adheres best to properly prepared concrete. We can also install over certain existing coatings if they are in good condition. We assess every surface during your free consultation.' },
  { question: 'Can I install epoxy flooring myself?', answer: 'While DIY kits exist, professional installation ensures proper surface preparation, correct mixing ratios, and optimal curing conditions. Improper installation leads to peeling, bubbling, and premature failure.' },
  { question: 'How do I maintain my epoxy floor?', answer: 'Regular sweeping and occasional mopping with a pH-neutral cleaner is all that is needed. Avoid abrasive cleaners and tools. Reapply a topcoat every 3-5 years to maintain the glossy finish.' },
]

const serviceAreas = [
  { region: 'Northeast', states: ['NY', 'NJ', 'PA', 'MA', 'CT', 'ME', 'VT', 'NH', 'RI'] },
  { region: 'Southeast', states: ['FL', 'GA', 'SC', 'NC', 'VA', 'TN', 'AL', 'MS'] },
  { region: 'Midwest', states: ['OH', 'MI', 'IN', 'IL', 'WI', 'MN', 'IA', 'MO', 'KY'] },
  { region: 'Southwest', states: ['TX', 'OK', 'AR', 'LA', 'NM'] },
  { region: 'West', states: ['CA', 'NV', 'AZ', 'UT', 'CO', 'OR', 'WA', 'ID'] },
]

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative dark-section section-padding min-h-[600px] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-charcoal to-black opacity-90" />
        <div className="container-custom relative z-10 text-center max-w-4xl mx-auto">
          <h1 className="font-heading font-extrabold text-4xl md:text-5xl lg:text-6xl leading-tight mb-6">
            <span className="gold-text">PREMIUM FLOORS.</span><br />
            <span className="text-white">BUILT TO LAST.</span><br />
            <span className="gold-text">NATIONWIDE.</span>
          </h1>
          <p className="text-white/70 text-lg md:text-xl mb-8 max-w-2xl mx-auto leading-relaxed">
            Transform your concrete with commercial-grade epoxy flooring systems.
            Expert installation. Free estimates. Serving residential, commercial, and industrial clients across the country.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
            <CTAButton href="/quote" size="lg" variant="gold">
              GET MY FREE QUOTE
            </CTAButton>
            <CTAButton href="/floor-systems" size="lg" variant="outline">
              VIEW FLOOR SYSTEMS
            </CTAButton>
          </div>
          <TrustStrip dark />
        </div>
      </section>

      {/* Floor Systems Grid */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <p className="text-gold font-heading font-semibold text-sm uppercase tracking-wider mb-2">Our Systems</p>
            <h2 className="font-heading font-extrabold text-3xl md:text-4xl text-black mb-4">
              Floor Systems for Every Space
            </h2>
            <p className="text-slate-brand text-base max-w-2xl mx-auto">
              From decorative flake to stunning metallic, we offer five premium epoxy systems tailored to your needs.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {floorSystems.map((system) => (
              <FloorSystemCard key={system.href} {...system} />
            ))}
            <div className="bg-charcoal rounded-xl p-6 flex flex-col items-center justify-center text-center">
              <h3 className="font-heading font-bold text-white text-lg mb-2">Not Sure Which System?</h3>
              <p className="text-white/60 text-sm mb-4">Our experts will help you choose the perfect system for your space and budget.</p>
              <Link href="/visualizer" className="text-gold text-sm font-medium hover:underline">
                Try Our Visualizer →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Before/After Section */}
      <section className="section-padding bg-light-gray">
        <div className="container-custom">
          <div className="text-center mb-12">
            <p className="text-gold font-heading font-semibold text-sm uppercase tracking-wider mb-2">See the Difference</p>
            <h2 className="font-heading font-extrabold text-3xl md:text-4xl text-black mb-4">
              Before & After Transformation
            </h2>
            <p className="text-slate-brand text-base max-w-2xl mx-auto">
              Drag the slider to see how epoxy flooring transforms ordinary concrete into a premium surface.
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <BeforeAfterViewer
              beforeAlt="Bare, stained concrete floor before epoxy installation"
              afterAlt="Finished epoxy floor with glossy coating after installation"
              label="Garage Floor Transformation"
            />
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <p className="text-gold font-heading font-semibold text-sm uppercase tracking-wider mb-2">Why Choose Us</p>
            <h2 className="font-heading font-extrabold text-3xl md:text-4xl text-black mb-4">
              The National Epoxy Pros Difference
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {pillars.map((pillar) => (
              <div key={pillar.title} className="text-center p-6 rounded-xl border border-light-gray hover:border-gold transition-colors">
                <div className="w-16 h-16 rounded-full bg-charcoal flex items-center justify-center mx-auto mb-4">
                  <pillar.icon size={28} className="text-gold" />
                </div>
                <h3 className="font-heading font-bold text-lg text-black mb-2">{pillar.title}</h3>
                <p className="text-slate-brand text-sm leading-relaxed">{pillar.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-charcoal">
        <div className="container-custom">
          <div className="text-center mb-12">
            <p className="text-gold font-heading font-semibold text-sm uppercase tracking-wider mb-2">Our Process</p>
            <h2 className="font-heading font-extrabold text-3xl md:text-4xl text-white mb-4">
              5 Steps to Perfect Floors
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {processSteps.map((step) => (
              <div key={step.num} className="relative">
                <div className="text-gold font-heading font-extrabold text-5xl mb-3">{step.num}</div>
                <h3 className="font-heading font-bold text-white text-lg mb-2">{step.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{step.text}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/process" className="text-gold text-sm font-medium hover:underline">
              Learn More About Our Process →
            </Link>
          </div>
        </div>
      </section>

      {/* Visualizer Invitation */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl text-center">
          <div className="w-20 h-20 rounded-full gold-gradient flex items-center justify-center mx-auto mb-6">
            <Eye size={36} className="text-black" />
          </div>
          <h2 className="font-heading font-extrabold text-3xl md:text-4xl text-black mb-4">
            Visualize Your New Floor
          </h2>
          <p className="text-slate-brand text-base md:text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
            Upload a photo of your space and see how different epoxy systems and colors would look.
            It is the easiest way to explore your options before requesting a quote.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <CTAButton href="/visualizer" size="lg" variant="gold">
              <Upload size={18} /> Try the Visualizer
            </CTAButton>
            <CTAButton href="/quote" size="lg" variant="outline">
              Get a Quote Instead
            </CTAButton>
          </div>
        </div>
      </section>

      {/* Project Gallery Preview */}
      <section className="section-padding bg-light-gray">
        <div className="container-custom">
          <div className="text-center mb-12">
            <p className="text-gold font-heading font-semibold text-sm uppercase tracking-wider mb-2">Our Work</p>
            <h2 className="font-heading font-extrabold text-3xl md:text-4xl text-black mb-4">
              Project Gallery Preview
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <ProjectCard type="Residential" system="Metallic Epoxy" location="Phoenix, AZ" />
            <ProjectCard type="Commercial" system="Flake System" location="Denver, CO" />
            <ProjectCard type="Industrial" system="Quartz System" location="Columbus, OH" />
          </div>
          <div className="text-center mt-10">
            <CTAButton href="/projects" size="md" variant="dark">
              View All Projects <ArrowRight size={18} />
            </CTAButton>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <p className="text-gold font-heading font-semibold text-sm uppercase tracking-wider mb-2">Use Cases</p>
            <h2 className="font-heading font-extrabold text-3xl md:text-4xl text-black mb-4">
              Floors for Every Application
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {useCases.map((use) => (
              <div key={use.title} className="bg-light-gray rounded-xl p-8">
                <div className="w-16 h-16 rounded-lg bg-charcoal flex items-center justify-center mb-4">
                  <use.icon size={28} className="text-gold" />
                </div>
                <h3 className="font-heading font-bold text-xl text-black mb-3">{use.title}</h3>
                <p className="text-slate-brand text-sm leading-relaxed mb-4">{use.text}</p>
                <ul className="space-y-2">
                  {use.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-black/70">
                      <span className="w-1.5 h-1.5 rounded-full bg-gold" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="section-padding bg-light-gray">
        <div className="container-custom">
          <div className="text-center mb-12">
            <p className="text-gold font-heading font-semibold text-sm uppercase tracking-wider mb-2">Service Areas</p>
            <h2 className="font-heading font-extrabold text-3xl md:text-4xl text-black mb-4">
              Nationwide Coverage
            </h2>
            <p className="text-slate-brand text-base max-w-2xl mx-auto">
              We serve customers across the United States with our network of certified installation professionals.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {serviceAreas.map((area) => (
              <ServiceAreaCard key={area.region} region={area.region} states={area.states} />
            ))}
          </div>
          <div className="text-center mt-10">
            <CTAButton href="/service-areas" size="md" variant="dark">
              See All Service Areas <ArrowRight size={18} />
            </CTAButton>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <p className="text-gold font-heading font-semibold text-sm uppercase tracking-wider mb-2">What Our Clients Say</p>
            <h2 className="font-heading font-extrabold text-3xl md:text-4xl text-black mb-4">
              Reviews From Our Customers
            </h2>
            <p className="text-slate-brand text-sm">Placeholder testimonials — these will be replaced with verified customer reviews.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, i) => (
              <TestimonialCard key={i} {...testimonial} />
            ))}
          </div>
          <div className="text-center mt-10">
            <CTAButton href="/reviews" size="md" variant="dark">
              Read More Reviews <ArrowRight size={18} />
            </CTAButton>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-light-gray">
        <div className="container-custom max-w-3xl">
          <div className="text-center mb-12">
            <p className="text-gold font-heading font-semibold text-sm uppercase tracking-wider mb-2">FAQ</p>
            <h2 className="font-heading font-extrabold text-3xl md:text-4xl text-black mb-4">
              Frequently Asked Questions
            </h2>
          </div>
          <FAQAccordion items={faqItems} />
          <div className="text-center mt-8">
            <Link href="/faq" className="text-gold text-sm font-medium hover:underline">
              View All FAQs →
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <FinalCTA />
    </>
  )
}
