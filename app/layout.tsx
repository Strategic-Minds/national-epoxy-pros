import type { Metadata, Viewport } from 'next'
import { Montserrat, Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import MobileStickyBar from '@/components/layout/MobileStickyBar'

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-montserrat',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-inter',
  display: 'swap',
})

export const viewport: Viewport = {
  themeColor: '#080808',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export const metadata: Metadata = {
  metadataBase: new URL('https://nationalepoxypros.com'),
  title: {
    default: 'National Epoxy Pros | Premium Epoxy Flooring Nationwide',
    template: '%s | National Epoxy Pros',
  },
  description:
    'Premium epoxy flooring solutions for residential, commercial, and industrial spaces. Flake, metallic, solid color, quartz, and polished concrete systems. Free estimates nationwide.',
  keywords: [
    'epoxy flooring',
    'epoxy floor installation',
    'garage epoxy flooring',
    'commercial epoxy flooring',
    'industrial epoxy flooring',
    'metallic epoxy',
    'flake epoxy',
    'polished concrete',
    'epoxy flooring contractor',
    'nationwide epoxy flooring',
  ],
  authors: [{ name: 'National Epoxy Pros' }],
  creator: 'National Epoxy Pros',
  publisher: 'National Epoxy Pros',
  manifest: '/manifest.json',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'National Epoxy Pros | Premium Epoxy Flooring Nationwide',
    description:
      'Premium epoxy flooring solutions for residential, commercial, and industrial spaces. Free estimates nationwide.',
    url: 'https://nationalepoxypros.com',
    siteName: 'National Epoxy Pros',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'National Epoxy Pros | Premium Epoxy Flooring Nationwide',
    description:
      'Premium epoxy flooring solutions for residential, commercial, and industrial spaces. Free estimates nationwide.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/icons/icon-192.png',
    apple: '/icons/icon-192.png',
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: 'black',
    title: 'National Epoxy Pros',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${montserrat.variable} ${inter.variable}`}>
      <head>
        <link rel="apple-touch-icon" href="/icons/icon-192.png" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black" />
        <meta name="apple-mobile-web-app-title" content="National Epoxy Pros" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if ('serviceWorker' in navigator) {
                window.addEventListener('load', function() {
                  navigator.serviceWorker.register('/sw.js').catch(function(e) {
                    console.log('SW registration failed: ', e);
                  });
                });
              }
            `,
          }}
        />
      </head>
      <body className="font-body antialiased">
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <MobileStickyBar />
      </body>
    </html>
  )
}
