import './globals.css';

export const metadata = {
  title: 'Phoenix Epoxy Pros | Digital Bid System',
  description: 'Digital estimate, floor visualizer, proposal, and dashboard system for Phoenix Epoxy Pros.',
  manifest: '/manifest.json',
  appleWebApp: { capable: true, title: 'Phoenix Epoxy', statusBarStyle: 'black-translucent' }
};

export const viewport = { themeColor: '#d99a00', width: 'device-width', initialScale: 1 };

export default function RootLayout({ children }) {
  return <html lang="en"><body>{children}<script dangerouslySetInnerHTML={{ __html: "if('serviceWorker' in navigator){window.addEventListener('load',function(){navigator.serviceWorker.register('/sw.js').catch(function(){})})}" }} /></body></html>;
}
