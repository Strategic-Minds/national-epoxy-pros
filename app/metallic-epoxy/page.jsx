import { CategoryPageTemplate } from "../components/CategoryPageTemplate";
export const metadata = { title: "Metallic Epoxy | National Epoxy Pros" };
export default function Page() {
  return (
    <CategoryPageTemplate
      title="Metallic Epoxy"
      tagline="High-gloss, dimensional metallic pigments create a one-of-a-kind 3D finish for showrooms and premium residential floors."
      heroImg="/images/chart-metallic-colors.webp"
      description="Metallic epoxy uses mica-based pigments suspended in clear epoxy resin, manipulated during cure to create swirling, marble-like, three-dimensional patterns. Every floor is unique — a true showpiece finish for showrooms, retail, and luxury garages."
      benefits={["Mica pigment technology — no two floors identical","High-build clear topcoat, mirror-like gloss","Ideal for showrooms, retail, luxury residential","Chemical and abrasion resistant"]}
      galleryImgs={["/images/chart-metallic-colors.webp","/images/rockhard-epoxy.png","/images/system-mockup.png"]}
    />
  );
}
