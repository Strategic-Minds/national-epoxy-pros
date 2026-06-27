import { DigitalBidForm, TopBars } from "../components";

export default function ContactPage() {
  return (
    <main>
      <TopBars active="Contact" />
      <section className="pageHero compactHero">
        <h1>Contact Us</h1>
        <p>Get a fast response from a National Epoxy Pros project team. No phone tag.</p>
      </section>
      <section className="contentBand contactGrid">
        <DigitalBidForm />
        <aside className="contactPanel">
          <h2>Fast Project Support</h2>
          <p>Phone: (480) 800-8246</p>
          <p>Email: projects@nationalepoxypros.com</p>
          <p>Service Area: 70+ locations nationwide</p>
        </aside>
      </section>
    </main>
  );
}
