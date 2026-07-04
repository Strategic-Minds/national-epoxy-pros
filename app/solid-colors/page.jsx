import { CategoryPageTemplate } from "../components/CategoryPageTemplate";
export const metadata = { title: "Solid Color Epoxy | National Epoxy Pros" };
export default function Page() {
  return (
    <CategoryPageTemplate
      title="Solid Color Epoxy"
      tagline="Clean, seamless, monochromatic epoxy base coats for a modern, minimal finish."
      heroImg="/images/chart-solid-color-base-coats.webp"
      description="Solid color epoxy delivers a clean, uniform, seamless look — ideal as a standalone finish or as the foundation layer for custom systems. A modern, minimal aesthetic that works in garages, warehouses, and commercial spaces alike."
      benefits={["Uniform, seamless, professional finish","Wide range of standard and custom colors","Cost-effective standalone or base-coat option","Fast install, fast cure, fast turnaround"]}
      galleryImgs={["/images/chart-solid-color-base-coats.webp","/images/system-mockup.png","/images/homepage-reference.png"]}
    />
  );
}
