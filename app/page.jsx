import Link from "next/link";
import {
  BidProcess,
  DigitalBidForm,
  HeroStats,
  PromoStrip,
  ServiceCards,
  TopBars,
  XpsPowered
} from "./components";

export default function HomePage() {
  return (
    <main className="homePage">
      <TopBars />
      <section className="hero">
        <div className="heroShade" />
        <div className="heroCopy">
          <XpsPowered />
          <h1>
            Premium Floors.
            <br />
            Built To Last.
            <br />
            <span>Built By National.</span>
          </h1>
          <p>High-performance epoxy, concrete coatings, and polished floors for homes, businesses, and industrial spaces.</p>
          <ul>
            <li>Durable. Beautiful. Easy to Maintain.</li>
            <li>Installed by Certified Professionals</li>
            <li>Backed by America's #1 Epoxy Super Store</li>
          </ul>
          <div className="heroActions">
            <Link className="goldButton" href="#digital-bid">Start My Digital Bid</Link>
            <Link className="ghostButton" href="#systems">Explore Floor Systems</Link>
          </div>
        </div>
        <HeroStats />
      </section>
      <PromoStrip />
      <section className="systemBand" id="services">
        <ServiceCards />
      </section>
      <BidProcess />
      <section className="estimatorBand">
        <DigitalBidForm compact />
      </section>
    </main>
  );
}
