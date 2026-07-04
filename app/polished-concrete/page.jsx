import { CategoryPageTemplate } from "../components/CategoryPageTemplate";
export const metadata = { title: "Polished Concrete | National Epoxy Pros" };
export default function Page() {
  return (
    <CategoryPageTemplate
      title="Polished Concrete"
      tagline="Industrial-grade mechanically polished concrete — effortlessly sleek, built for decades of traffic."
      heroImg="/images/concrete-grinder.webp"
      description="Polished concrete uses progressively finer diamond abrasives to grind and polish the existing slab to a high-gloss, densified finish. No coating to wear off — just the concrete itself, polished and sealed for industrial-grade durability at a lower long-term cost."
      benefits={["No topcoat to wear, chip, or peel over time","Densified surface resists moisture and staining","Lowest long-term maintenance cost of any system","Ideal for warehouses, retail, and showrooms"]}
      galleryImgs={["/images/concrete-grinder.webp","/images/xps-ectm.webp","/images/system-mockup.png"]}
    />
  );
}
