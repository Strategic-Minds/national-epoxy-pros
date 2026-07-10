'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import MobileMenu from './MobileMenu'

const navLinks = [
  { href: '/floor-systems', label: 'Floor Systems' },
  { href: '/visualizer', label: 'Visualizer' },
  { href: '/projects', label: 'Projects' },
  { href: '/process', label: 'Process' },
  { href: '/service-areas', label: 'Service Areas' },
  { href: '/reviews', label: 'Reviews' },
  { href: '/about', label: 'About' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  return (
    <>
      {/* Announcement bar */}
      <div className="bg-gold text-black text-center py-2 px-4 text-xs sm:text-sm font-medium">
        Nationwide epoxy flooring — get a free quote today
      </div>

      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-black/95 backdrop-blur-md shadow-lg'
            : 'bg-black/80 backdrop-blur-sm'
        }`}
      >
        <div className="container-custom flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group" onClick={() => setMenuOpen(false)}>
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg gold-gradient flex items-center justify-center font-heading font-extrabold text-black text-sm md:text-base">
              NEP
            </div>
            <span className="font-heading font-bold text-white text-sm md:text-lg leading-tight">
              National Epoxy Pros
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-white/80 hover:text-gold transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA + Hamburger */}
          <div className="flex items-center gap-3">
            <Link
              href="/quote"
              className="hidden sm:inline-flex gold-gradient text-black font-heading font-bold px-5 py-2.5 rounded-lg text-sm hover:opacity-90 transition-opacity"
            >
              Get a Free Quote
            </Link>
            <button
              className="lg:hidden text-white p-2"
              onClick={() => setMenuOpen(true)}
              aria-label="Open menu"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </header>

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} links={navLinks} />
    </>
  )
}
