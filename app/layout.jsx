import "./globals.css";

export const metadata = {
  title: "National Epoxy Pros — Premium Epoxy & Concrete Floors | 70+ Locations",
  description: "America's #1 epoxy floor network. Powered by Xtreme Polishing Systems. Get your free digital bid today and save 15%.",
  keywords: "epoxy floor, garage floor coating, concrete polishing, metallic epoxy, floor systems",
  openGraph: { title: "National Epoxy Pros", description: "Premium Epoxy Floor Systems Built For Real Projects.", type: "website" },
  themeColor: "#F5A900",
  manifest: "/manifest.json",
  icons: { icon: "/icons/icon-192x192.png", apple: "/icons/icon-192x192.png" },
  viewport: "width=device-width, initial-scale=1, maximum-scale=5",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Oswald:wght@400;500;600;700&family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-title" content="NEP" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "HomeAndConstructionBusiness",
          "name": "National Epoxy Pros",
          "telephone": "877-958-8408",
          "email": "support@nationalepoxypros.com",
          "url": "https://nationalepoxypros.com",
          "areaServed": "United States",
        }) }} />
      </head>
      <body>{children}</body>
    </html>
  );
}