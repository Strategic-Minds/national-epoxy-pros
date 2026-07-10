import Link from 'next/link';
import { nav, site } from '@/lib/site';

const primaryNav = nav.filter(([label]) => label !== 'Home');

export default function Header() {
  return (
    <header className="site-header">
      <div className="header-inner">
        <Link className="brand" href="/" aria-label="National Epoxy Pros home">
          <img src={site.logo} alt="National Epoxy Pros" />
        </Link>
        <nav className="nav" aria-label="Primary navigation">
          {primaryNav.map(([label, href]) => (
            <Link key={href} href={href}>{label}</Link>
          ))}
        </nav>
        <Link className="quote-button" href="/free-digital-bid">Start Digital Bid</Link>
      </div>
    </header>
  );
}
