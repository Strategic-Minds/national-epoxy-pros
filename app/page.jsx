import { MainNavbar } from "./components/MainNavbar";
import { HeroSection } from "./components/HeroSection";
import { FloorSystemsSection } from "./components/FloorSystemsSection";
import { DigitalBidPanel } from "./components/DigitalBidPanel";
import { VisualizerSection } from "./components/VisualizerSection";
import { DesignCenterSection } from "./components/DesignCenterSection";
import { GallerySection } from "./components/GallerySection";
import { ProductTrainingSection } from "./components/ProductTrainingSection";
import { Footer } from "./components/Footer";

export default function HomePage() {
  return (
    <>
      <MainNavbar />
      <HeroSection />
      <FloorSystemsSection />
      <DigitalBidPanel />
      <VisualizerSection />
      <DesignCenterSection />
      <GallerySection />
      <ProductTrainingSection />
      <Footer />
    </>
  );
}