import { CategoryPageTemplate } from "../components/CategoryPageTemplate";
export const metadata = { title: "Stained Concrete | National Epoxy Pros" };
export default function Page() {
  return (
    <CategoryPageTemplate
      title="Stained Concrete"
      tagline="Penetrating dye and acid stain systems that bring out the rich, natural character of concrete."
      heroImg="/images/chart-concrete-dye-stain.webp"
      description="Concrete stain and dye systems penetrate the slab to create rich, variegated, natural-stone-like coloration — a timeless option for patios, walkways, and interior spaces that want texture and warmth without a high-gloss coating."
      benefits={["Penetrates concrete — will not peel or chip","Natural, variegated, one-of-a-kind coloration","Ideal for patios, walkways, interior floors","Sealed finish protects against wear and moisture"]}
      galleryImgs={["/images/chart-concrete-dye-stain.webp","/images/homepage-reference.png","/images/concrete-grinder.webp"]}
    />
  );
}
