import Link from "next/link";
import { DigitalBidForm } from "./components/DigitalBidForm";
import { FAQSection } from "./components/FAQ";
import { PWASection } from "./components/PWASection";

const SERVICES = [
  { title: "Garage Floor Epoxy", desc: "Full flake, solid color, or metallic systems for residential garages. UV stable, chemical resistant.", img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80", href: "/services/garage-floor-epoxy" },
  { title: "Metallic Epoxy Floors", desc: "Stunning 3D metallic effects for showrooms, offices, and luxury residential spaces.", img: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&q=80", href: "/services/metallic-epoxy" },
  { title: "Polished Concrete", desc: "LEED-certified polished concrete systems for commercial and industrial applications.", img: "https://images.unsplash.com/photo-1541123437800-1bb1317badc2?w=800&q=80", href: "/services/polished-concrete" },
  { title: "Commercial Coatings", desc: "Industrial-grade floor systems for warehouses, restaurants, retail, and healthcare.", img: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80", href: "/services/commercial" },
];

const WHY_US = [
  { icon: "🏆", title: "XPS Certified System", desc: "Every installation uses Xtreme Polishing Systems products — the same brand trusted by 10,000+ contractors nationwide." },
  { icon: "📱", title: "Digital Bid in 60 Seconds", desc: "No phone tag. Fill out our smart estimator, get a detailed quote within 24 hours. Automated, accurate, fast." },
  { icon: "🎯", title: "Precision Installation", desc: "ACI 310.1-20 and ASCC certified processes. Every crew trains monthly on XPS standards before touching your floor." },
  { icon: "🛡️", title: "Backed by America's #1 Store", desc: "National supply chain, local crews. Products that don't fail. Installations backed by our workmanship guarantee." },
  { icon: "⚡", title: "4-Day Turnaround", desc: "From quote approval to finished floor in as little as 4 days on residential projects. No endless wait lists." },
  { icon: "💰", title: "15% Digital Estimate Discount", desc: "Get 15% off when you submit your digital bid online. No haggling. The savings are automatic." },
];

const PROCESS = [
  { num: "01", title: "Digital Bid", desc: "Submit photos + measurements online. Get your detailed estimate in under 24 hours." },
  { num: "02", title: "Design Review", desc: "Pick your system, color, and finish using our floor visualizer. We send samples if needed." },
  { num: "03", title: "Site Prep", desc: "Diamond grinding, crack repair, moisture testing. We prep right or we don't proceed." },
  { num: "04", title: "Installation", desc: "XPS-certified crew installs your system using premium Torginol or XPS products only." },
  { num: "05", title: "Cure + Inspect", desc: "We don't rush the cure. Full 24-hour inspection before we hand you the keys." },
  { num: "06", title: "Lifetime Support", desc: "Maintenance tips, product re-orders, warranty support. We're your floor partner for life." },
];

const TESTIMONIALS = [
  { name: "Marcus D.", location: "Phoenix, AZ", text: "Did our 3-car garage. The team showed up on time, the floor is absolutely stunning. The online bid process was so easy — got a quote same day and saved 15%.", stars: 5 },
  { name: "Jennifer R.", location: "Scottsdale, AZ", text: "Metallic epoxy in our showroom. Better than anything I've seen. The XPS products they used are clearly superior. Will be doing our second location next month.", stars: 5 },
  { name: "Tom K.", location: "Mesa, AZ", text: "Warehouse polished concrete. On schedule, on budget, communication was great. These guys run a real operation — not fly by night contractors.", stars: 5 },
];

const CITIES = ["Phoenix, AZ","Scottsdale, AZ","Mesa, AZ","Tempe, AZ","Chandler, AZ","Gilbert, AZ","Glendale, AZ","Peoria, AZ","Surprise, AZ","Goodyear, AZ","Avondale, AZ","Paradise Valley, AZ","Dallas, TX","Austin, TX","Houston, TX","Miami, FL","Orlando, FL","Las Vegas, NV","Denver, CO","Atlanta, GA","Charlotte, NC","Nashville, TN"];

export default function HomePage() {
  return (
    <>
      {/* ─── HERO ─── */}
      <section className="hero" id="home">
        <div className="heroBg" />
        <div className="heroOverlay" />
        <div className="heroContent">
          <div className="heroCopy">
            <div className="heroBadge">
              <span>⚡</span> Powered by Xtreme Polishing Systems — America's #1 Epoxy Super Store
            </div>
            <h1 className="heroH1">
              Premium Floors.<br />
              Built To Last.<br />
              <span className="accent">Built By National.</span>
            </h1>
            <p className="heroSub">
              High-performance epoxy, concrete coatings, and polished floors for homes, businesses, and industrial spaces across 70+ locations nationwide.
            </p>
            <ul className="heroChecks">
              <li>Durable. Beautiful. Easy to Maintain.</li>
              <li>Installed by XPS-Certified Professionals</li>
              <li>Backed by America's #1 Epoxy Super Store</li>
            </ul>
            <div className="heroActions">
              <Link href="/estimate" className="btn-gold">
                ⚡ Start My Digital Bid
              </Link>
              <Link href="#floor-systems" className="btn-ghost">
                Explore Floor Systems
              </Link>
            </div>
          </div>

          {/* Stats panel */}
          <div className="heroStatsPanel">
            <div className="heroStatsPanelTitle">Why National Epoxy Pros</div>
            <div className="heroStatsGrid">
              <div className="heroStat"><span className="heroStatNum">70+</span><span className="heroStatLabel">Locations Nationwide</span></div>
              <div className="heroStat"><span className="heroStatNum">24hr</span><span className="heroStatLabel">Digital Estimate</span></div>
              <hr className="heroStatDivider" />
              <div className="heroStat"><span className="heroStatNum">15%</span><span className="heroStatLabel">Online Bid Discount</span></div>
              <div className="heroStat"><span className="heroStatNum">30+</span><span className="heroStatLabel">Years XPS Experience</span></div>
              <hr className="heroStatDivider" />
              <div className="heroStat" style={{gridColumn:"1/-1"}}><span className="heroStatNum" style={{fontSize:"1.4rem"}}>XPS Certified</span><span className="heroStatLabel">Monthly crew training on ACI & ASCC standards</span></div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── PROMO STRIP ─── */}
      <div className="promoStrip">
        <span className="promoText">🎉 Get 15% off your project with our Digital Bid System — Fast · Easy · Accurate</span>
        <Link href="/estimate" className="promoCta">Get My 15% Estimate →</Link>
      </div>

      {/* ─── SERVICES ─── */}
      <section className="serviceBand" id="floor-systems">
        <div className="serviceBandInner">
          <div className="sectionLabel">Our Floor Systems</div>
          <h2 className="sectionTitle" style={{color:"#0a0a0a"}}>Premium Floors for<br/>Every Application</h2>
          <div className="serviceGrid">
            {SERVICES.map((s) => (
              <Link href={s.href} key={s.title} className="serviceCard">
                <div className="serviceCardImg">
                  <img src={s.img} alt={s.title} loading="lazy" />
                </div>
                <div className="serviceCardBody">
                  <div className="serviceCardTitle">{s.title}</div>
                  <p className="serviceCardDesc">{s.desc}</p>
                  <span className="serviceCardLink">Learn More →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─── DIGITAL BID FORM ─── */}
      <section className="bidSection" id="digital-bid">
        <div className="bidInner">
          <DigitalBidForm />
        </div>
      </section>

      {/* ─── WHY US ─── */}
      <section className="whySection" id="services">
        <div className="container">
          <div className="sectionLabel">Why Choose Us</div>
          <h2 className="sectionTitle">The National Epoxy Pros<br />Difference</h2>
          <div className="whyGrid">
            {WHY_US.map((w) => (
              <div key={w.title} className="whyCard">
                <div className="whyIcon"><span style={{fontSize:"1.5rem"}}>{w.icon}</span></div>
                <div className="whyCardTitle">{w.title}</div>
                <p className="whyCardDesc">{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PROCESS ─── */}
      <section className="processSection">
        <div className="container">
          <div className="sectionLabel">How It Works</div>
          <h2 className="sectionTitle">From Quote to Finished Floor<br />in 6 Steps</h2>
          <div className="processSteps">
            {PROCESS.map((p) => (
              <div key={p.num} className="processStep">
                <div className="processNum">{p.num}</div>
                <div className="processStepTitle">{p.title}</div>
                <p className="processStepDesc">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── GALLERY ─── */}
      <section className="gallerySection" id="gallery">
        <div className="container">
          <div className="sectionLabel">Project Gallery</div>
          <h2 className="sectionTitle">See Our Work</h2>
          <div className="galleryGrid" style={{marginTop:"32px"}}>
            <div className="galleryItem large">
              <img src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=900&q=80" alt="Epoxy garage floor" loading="lazy"/>
            </div>
            <div className="galleryItem">
              <img src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=600&q=80" alt="Metallic epoxy" loading="lazy"/>
            </div>
            <div className="galleryItem">
              <img src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80" alt="Commercial floor" loading="lazy"/>
            </div>
            <div className="galleryItem">
              <img src="https://images.unsplash.com/photo-1541123437800-1bb1317badc2?w=600&q=80" alt="Polished concrete" loading="lazy"/>
            </div>
            <div className="galleryItem large">
              <img src="https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=900&q=80" alt="Residential floor" loading="lazy"/>
            </div>
          </div>
          <div style={{textAlign:"center",marginTop:"40px"}}>
            <Link href="/gallery" className="btn-outline-gold">View Full Gallery →</Link>
          </div>
        </div>
      </section>

      {/* ─── TESTIMONIALS ─── */}
      <section className="testimonialsSection">
        <div className="container">
          <div className="sectionLabel">Customer Reviews</div>
          <h2 className="sectionTitle">What Homeowners &<br />Business Owners Say</h2>
          <div className="testimonialsGrid" style={{marginTop:"40px"}}>
            {TESTIMONIALS.map((t) => (
              <div key={t.name} className="testimonialCard">
                <div className="stars">{Array(t.stars).fill("★").map((s,i)=><span key={i} className="star">{s}</span>)}</div>
                <p className="testimonialText">"{t.text}"</p>
                <div className="testimonialAuthor">
                  <div className="authorAvatar">{t.name[0]}</div>
                  <div>
                    <div className="authorName">{t.name}</div>
                    <div className="authorLocation">📍 {t.location}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PWA INSTALL ─── */}
      <PWASection />

      {/* ─── SERVICE AREAS ─── */}
      <section className="areaSection">
        <div className="container">
          <div className="sectionLabel">Service Areas</div>
          <h2 className="sectionTitle">70+ Cities & Growing</h2>
          <p style={{color:"#9CA3AF",marginTop:"8px"}}>Don't see your city? We're expanding monthly. Contact us and we'll connect you with the nearest certified crew.</p>
          <div className="areaCities">
            {CITIES.map((c) => (
              <span key={c} className="areaCity">{c}</span>
            ))}
            <span className="areaCity" style={{borderColor:"rgba(246,184,0,0.3)",color:"#F6B800"}}>+ 50 more cities →</span>
          </div>
        </div>
      </section>

      {/* ─── FAQ ─── */}
      <FAQSection />

      {/* ─── FINAL CTA ─── */}
      <div className="ctaBanner">
        <h2 className="ctaBannerTitle">Ready for Your Dream Floor?</h2>
        <p className="ctaBannerSub">Get a detailed digital estimate in under 24 hours. No phone calls required. Save 15% automatically.</p>
        <div className="ctaBannerBtns">
          <Link href="/estimate" className="ctaBannerBtn">⚡ Start My Digital Bid — Save 15%</Link>
          <a href="tel:4808008246" className="ctaBannerBtn" style={{background:"transparent",border:"2px solid #0a0a0a"}}>📞 Call (480) 800-8246</a>
        </div>
      </div>
    </>
  );
}