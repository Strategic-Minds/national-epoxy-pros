import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import './globals.css';

export const metadata: Metadata = {
  title: 'National Epoxy Pros | Commercial & Industrial Floor Systems',
  description: 'Enterprise-grade epoxy and polished concrete for commercial, industrial, warehouse, and healthcare facilities. Full spec packages, competitive bids, nationwide installation.',
  keywords: 'commercial epoxy flooring, industrial floor systems, warehouse epoxy, polished concrete commercial',
  openGraph: {
    title: 'National Epoxy Pros | Commercial & Industrial Floor Systems',
    description: 'Enterprise-grade epoxy and polished concrete nationwide.',
    url: 'https://nationalepoxypros.com',
    siteName: 'National Epoxy Pros',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#0A0A0A" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
