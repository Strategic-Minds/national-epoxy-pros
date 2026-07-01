"use client";
import { useState } from "react";

const FAQS = [
  { q: "How long does epoxy floor installation take?", a: "Most residential garage floors take 2-3 days: Day 1 prep and grinding, Day 2 base coat, Day 3 top coat and broadcast. We wait the full cure time before handover — typically 24 hours after final coat." },
  { q: "What's included in the 15% digital bid discount?", a: "When you submit your bid online through our digital system, you automatically qualify for 15% off the total project cost. This applies to all floor systems. No codes, no negotiating — the discount is applied to your official quote." },
  { q: "How is National Epoxy Pros connected to Xtreme Polishing Systems?", a: "National Epoxy Pros runs exclusively on XPS products and training systems. Every crew is XPS-certified, every project uses XPS or Torginol products, and every installation follows XPS quality standards — the same system trusted by 10,000+ contractors." },
  { q: "Do you offer a warranty?", a: "Yes. All installations come with a workmanship warranty. Product warranties are backed by Xtreme Polishing Systems. Specific terms are provided in your signed contract before work begins." },
  { q: "What's the difference between epoxy and polished concrete?", a: "Epoxy is a coating applied over concrete — it creates a sealed, glossy surface available in hundreds of colors and patterns. Polished concrete works the concrete itself — grinding it to a mirror-like sheen without coatings. Both are durable; the right choice depends on your application and aesthetic preference." },
  { q: "How do I prepare for my installation?", a: "Clear the floor of all items, remove vehicles, and ensure the area is dry. Our crew handles all the technical prep — diamond grinding, crack repair, moisture testing — before any product goes down." },
  { q: "Can epoxy be installed over existing concrete?", a: "In most cases yes. We test moisture levels and inspect for existing coatings, paint, or sealers. If the surface needs remediation we'll include that in your quote. Our diamond grinders can handle virtually any existing surface condition." },
  { q: "Do you serve my city?", a: "We operate in 70+ cities and are expanding monthly. Enter your ZIP code in our digital bid form and we'll confirm coverage and connect you with your nearest XPS-certified crew." },
];

export function FAQSection() {
  const [open, setOpen] = useState(null);
  return (
    <section className="faqSection">
      <div className="container">
        <div className="sectionLabel">FAQ</div>
        <h2 className="sectionTitle" style={{textAlign:"center"}}>Common Questions</h2>
        <div className="faqList">
          {FAQS.map((f, i) => (
            <div key={i} className={`faqItem${open===i?" open":""}`}>
              <div className="faqQuestion" onClick={() => setOpen(open===i?null:i)}>
                <span>{f.q}</span>
                <span className="faqArrow">▼</span>
              </div>
              <div className="faqAnswer">{f.a}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}