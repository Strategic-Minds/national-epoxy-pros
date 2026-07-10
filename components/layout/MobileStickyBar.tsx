'use client'

import Link from 'next/link'
import { Calendar } from 'lucide-react'

export default function MobileStickyBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 sm:hidden bg-black/95 backdrop-blur-md border-t border-gold/20 p-3">
      <Link
        href="/quote"
        className="flex items-center justify-center gap-2 gold-gradient text-black font-heading font-bold py-3 rounded-lg text-sm"
      >
        <Calendar size={18} />
        GET MY FREE QUOTE
      </Link>
    </div>
  )
}
