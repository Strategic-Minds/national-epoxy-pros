import type { Metadata, Viewport } from 'next'
import { Bebas_Neue, Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const bebasNeue = Bebas_Neue({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-display',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-sans',
  display: 'swap',
})

export const viewport: Viewport = {
  themeColor: '#0A0A0A',
  width: 'device-width',
  initialScale: 1,
}

export const metadata: Metadata = {
  metadataBase: new URL('https://nationalepoxypros.com'),
  title: 'National Epoxy Pros | Commercial & Industrial Floor Systems',
  description: 'Enterprise-grade epoxy and polished concrete for commercial, industrial, warehouse, and healthcare facilities. Full spec packages, competitive bids, nationwide installation.',
  keywords: 'commercial epoxy flooring, industrial floor systems, warehouse epoxy, polished concrete commercial, facility flooring',
  openGraph: {
    title: 'National Epoxy Pros | Commercial & Industrial Floor Systems',
    description: 'Enterprise-grade epoxy and polished concrete nationwide.',
    url: 'https://nationalepoxypros.com',
    siteName: 'National Epoxy Pros',
    type: 'website',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'National Epoxy Pros' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'National Epoxy Pros | Commercial & Industrial Floor Systems',
    description: 'Enterprise-grade epoxy and polished concrete nationwide.',
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${bebasNeue.variable} ${inter.variable}`}>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
