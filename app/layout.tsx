
import type { Metadata, Viewport } from 'next';
import './globals.css';
import TopTrustBar from '@/components/TopTrustBar';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { site } from '@/lib/site';
export const metadata: Metadata = {metadataBase:new URL('https://nationalepoxypros.com'),title:{default:'National Epoxy Pros | Premium Epoxy Floors Built to Perform',template:'%s | National Epoxy Pros'},description:'Premium epoxy, flake garage floors, metallic epoxy, exterior coatings, polished concrete, color charts, and mock-safe digital bid intake.',applicationName:'National Epoxy Pros',manifest:'/manifest.webmanifest',openGraph:{title:'National Epoxy Pros',description:site.tagline,images:[site.hero],type:'website'}};
export const viewport: Viewport = {themeColor:'#0A0A0A'};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body><TopTrustBar/><Header/>{children}<Footer/></body></html>}
