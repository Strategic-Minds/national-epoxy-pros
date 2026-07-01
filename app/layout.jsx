import "./globals.css";
export const metadata = {
  title: "National Epoxy Pros — Premium Epoxy & Concrete Floors | 70+ Locations",
  description: "Americas #1 epoxy floor network. Powered by Xtreme Polishing Systems. Get your free digital bid today.",
  keywords: "epoxy floor, garage floor coating, concrete polishing, metallic epoxy, floor systems",
  themeColor: "#FFC107",
  manifest: "/manifest.json",
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  );
}