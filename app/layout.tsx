import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import './globals.css';

export const metadata: Metadata = {
  title: { default: 'National Epoxy Pros — Premium Floors. Built Nationwide.', template: '%s | National Epoxy Pros' },
  description: 'High-performance epoxy, concrete coating, and polished flooring solutions for garages, businesses, and industrial spaces. 70+ cities nationwide.',
  keywords: ['epoxy floors','garage floor coating','metallic epoxy','flake floors','polished concrete','nationwide'],
  openGraph: {
    type: 'website',
    siteName: 'National Epoxy Pros',
    title: 'National Epoxy Pros — Premium Floors. Built Nationwide.',
    description: 'High-performance epoxy flooring for garages, businesses, and industrial spaces.',
    images: [{ url: '/logos/nep-logo-horizontal-black-gold-v1-preview.png', width: 1200, height: 630 }],
  },
  twitter: { card: 'summary_large_image', title: 'National Epoxy Pros', description: 'Premium floors. Built nationwide.' },
  robots: { index: true, follow: true },
  manifest: '/manifest.json',
  appleWebApp: { capable: true, statusBarStyle: 'black', title: 'National Epoxy Pros' },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta name="theme-color" content="#080808" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700;800;900&family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
        <link rel="apple-touch-icon" href="/icons/icon-192x192.png" />
      </head>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
