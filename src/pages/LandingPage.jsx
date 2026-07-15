import ContentCatalog from "../components/catalog/ContentCatalog";
import FlowSection from "../components/catalog/FlowSection";
import HeroSlider from "../components/catalog/HeroSlider";
import MobilePageShell from "../components/layout/MobilePageShell";
import { contentSections } from "../data/content";
import { flowSteps, heroBanners } from "../data/site";
import { useScrollReveal } from "../hooks/useScrollReveal";

export default function LandingPage() {
  useScrollReveal(contentSections.length);

  return (
    <MobilePageShell mainId="top">
      <HeroSlider banners={heroBanners} />
      <ContentCatalog sections={contentSections} />
      <FlowSection steps={flowSteps} />
    </MobilePageShell>
  );
}
