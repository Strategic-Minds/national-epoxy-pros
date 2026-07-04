import { CategoryPageTemplate } from "../components/CategoryPageTemplate";
export const metadata = { title: "Quartz Systems | National Epoxy Pros" };
export default function Page() {
  return (
    <CategoryPageTemplate
      title="Quartz Systems"
      tagline="Textured, slip-resistant quartz aggregate broadcast systems built for high-traffic commercial and industrial floors."
      heroImg="/images/xps-poly-products.png"
      description="Quartz systems broadcast graded silica quartz aggregate into epoxy resin for a durable, textured, slip-resistant surface. Built for commercial kitchens, locker rooms, and industrial spaces where traction and chemical resistance matter most."
      benefits={["Textured surface for superior slip resistance","Chemical, grease, and abrasion resistant","Built for commercial and industrial traffic","Seamless, easy to clean and sanitize"]}
      galleryImgs={["/images/xps-poly-products.png","/images/concrete-grinder.webp","/images/xps-ectm.webp"]}
    />
  );
}
