'use client'

import Link from 'next/link'
import { X } from 'lucide-react'

interface MobileMenuProps {
  open: boolean
  onClose: () => void
  links: { href: string; label: string }[]
}

export default function MobileMenu({ open, onClose, links }: MobileMenuProps) {
  if (!open) return null

  return (
    <div className="fixed inset-0 z-[60] lg:hidden">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/70 animate-fade-in"
        onClick={onClose}
      />

      {/* Drawer */}
      <div className="absolute right-0 top-0 bottom-0 w-80 max-w-[85vw] bg-charcoal animate-slide-in-right flex flex-col">
        <div className="flex items-center justify-between p-5 border-b border-white/10">
          <span className="font-heading font-bold text-white text-lg">Menu</span>
          <button onClick={onClose} aria-label="Close menu" className="text-white p-2">
            <X size={24} />
          </button>
        </div>

        <nav className="flex flex-col p-4 gap-1 flex-1 overflow-y-auto">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={onClose}
              className="text-white/90 hover:text-gold py-3 px-4 rounded-lg hover:bg-white/5 transition-colors text-base font-medium"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/quote"
            onClick={onClose}
            className="mt-4 gold-gradient text-black font-heading font-bold py-3.5 px-4 rounded-lg text-center text-base"
          >
            Get a Free Quote
          </Link>
        </nav>

        <div className="p-5 border-t border-white/10">
          <p className="text-white/60 text-xs">
            National Epoxy Pros — Premium epoxy flooring nationwide.
          </p>
        </div>
      </div>
    </div>
  )
}
