import Hero from "@/components/home/Hero";
import IntroStatement from "@/components/home/IntroStatement";
import UMKMExplorer from "@/components/home/UMKMExplorer";
import ProductGallery from "@/components/home/ProductGallery";
import ShowcaseDivider from "@/components/home/ShowcaseDivider";
import StorySection from "@/components/home/StorySection";
import VillageSection from "@/components/home/VillageSection";
import Statistics from "@/components/home/Statistics";
import FinalCTA from "@/components/home/FinalCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <IntroStatement />
      <UMKMExplorer />
      <ShowcaseDivider />
      <ProductGallery />
      <StorySection />
      <VillageSection />
      <Statistics />
      <FinalCTA />
    </>
  );
}
