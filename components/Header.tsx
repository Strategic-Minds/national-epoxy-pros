
import Link from 'next/link';
import { nav, site } from '@/lib/site';
export default function Header(){return <header className="site-header"><div className="header-inner"><Link className="brand" href="/"><img src={site.logo} alt="National Epoxy Pros" /></Link><nav className="nav" aria-label="Primary navigation">{nav.map(([label,href])=><Link key={href} href={href}>{label}</Link>)}</nav><Link className="quote-button" href="/free-digital-bid">Get a Quote</Link></div></header>}
