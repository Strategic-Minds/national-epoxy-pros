import { CategoryPageTemplate } from "../components/CategoryPageTemplate";
export const metadata = { title: "Flake Systems | National Epoxy Pros" };
export default function Page() {
  return (
    <CategoryPageTemplate
      title="Flake Systems"
      tagline="Full-broadcast decorative flake with a polyaspartic topcoat — the most popular residential garage system."
      heroImg="/images/xps-flake-boxes.png"
      description="Flake systems combine a pigmented epoxy base coat with a full broadcast of vinyl color chips, locked in with a UV-stable polyaspartic topcoat. The result is a durable, slip-resistant, decorative floor that hides dirt and imperfections year-round."
      benefits={["Diamond-ground surface prep for correct bond profile","Full broadcast to refusal — no bare spots","Polyaspartic topcoat cures in hours, not days","Slip-resistant texture, hot-tire pickup resistant"]}
      galleryImgs={["/images/xps-flake-boxes.png","/images/chart-approved-flake.webp","/images/chart-top-12-flake.png"]}
    />
  );
}
