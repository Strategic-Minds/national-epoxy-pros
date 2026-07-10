import type { Metadata } from 'next'
import Link from 'next/link'
import { WifiOff } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Offline',
  description: 'You appear to be offline. Please check your connection.',
  robots: { index: false, follow: false },
}

export default function OfflinePage() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <WifiOff size={64} className="text-gold mx-auto mb-6" />
        <h1 className="font-heading font-extrabold text-3xl text-white mb-4">
          You&apos;re Offline
        </h1>
        <p className="text-white/60 text-base mb-8">
          Please check your internet connection and try again. Some content may still be available from cache.
        </p>
        <Link
          href="/"
          className="inline-flex items-center justify-center gold-gradient text-black font-heading font-bold px-6 py-3 rounded-lg text-sm"
        >
          Return to Homepage
        </Link>
      </div>
    </div>
  )
}
