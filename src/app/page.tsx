import { Header } from "@/components/landing/Header";
import { Hero } from "@/components/landing/Hero";
import { Intro } from "@/components/landing/Intro";
import { FeatureZigzag } from "@/components/landing/FeatureZigzag";
import { ResourceTrio } from "@/components/landing/ResourceTrio";
import { CrossLinks } from "@/components/landing/CrossLinks";
import { LiveDemoCta } from "@/components/landing/LiveDemoCta";
import { Footer } from "@/components/landing/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="pt-[60px] md:pt-[74px]">
        <Hero />
        <Intro />
        <FeatureZigzag />
        <ResourceTrio />
        <CrossLinks />
        <LiveDemoCta />
      </main>
      <Footer />
    </>
  );
}
