import Link from 'next/link'
import { Phone, Mail, MapPin } from 'lucide-react'

const footerLinks = {
  Systems: [
    { href: '/floor-systems/flake', label: 'Flake Systems' },
    { href: '/floor-systems/metallic', label: 'Metallic Systems' },
    { href: '/floor-systems/solid-color', label: 'Solid Color' },
    { href: '/floor-systems/quartz', label: 'Quartz Systems' },
    { href: '/floor-systems/polished-concrete', label: 'Polished Concrete' },
  ],
  Company: [
    { href: '/about', label: 'About Us' },
    { href: '/process', label: 'Our Process' },
    { href: '/projects', label: 'Project Gallery' },
    { href: '/reviews', label: 'Reviews' },
    { href: '/faq', label: 'FAQ' },
  ],
  Resources: [
    { href: '/visualizer', label: 'Floor Visualizer' },
    { href: '/service-areas', label: 'Service Areas' },
    { href: '/quote', label: 'Get a Quote' },
    { href: '/contact', label: 'Contact' },
    { href: '/blog', label: 'Blog' },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-black text-white pb-24 sm:pb-0">
      <div className="container-custom py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-12 h-12 rounded-lg gold-gradient flex items-center justify-center font-heading font-extrabold text-black">
                NEP
              </div>
              <span className="font-heading font-bold text-lg">National Epoxy Pros</span>
            </div>
            <p className="text-white/60 text-sm leading-relaxed mb-4">
              Premium epoxy flooring solutions for residential, commercial, and industrial spaces.
              Expert installation. Nationwide coverage.
            </p>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2 text-white/70">
                <Phone size={16} className="text-gold" />
                <span>1-800-NEP-FLOOR</span>
              </div>
              <div className="flex items-center gap-2 text-white/70">
                <Mail size={16} className="text-gold" />
                <span>info@nationalepoxypros.com</span>
              </div>
              <div className="flex items-center gap-2 text-white/70">
                <MapPin size={16} className="text-gold" />
                <span>Nationwide Service</span>
              </div>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="font-heading font-bold text-gold text-sm uppercase tracking-wider mb-4">
                {title}
              </h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-white/60 hover:text-gold transition-colors text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/50 text-xs">
            © {new Date().getFullYear()} National Epoxy Pros. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/privacy" className="text-white/50 hover:text-gold text-xs transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-white/50 hover:text-gold text-xs transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
