import Featured from "@/components/HomePage/Featured/Featured";
import Hero from "@/components/HomePage/Hero/Hero";
import SkillsSection from "@/components/HomePage/Skills/Skills";
import About from "@/components/HomePage/About/About";
import ExperienceSummary from "@/components/HomePage/Experience/Experience";
import Analytics from "@/components/Global/Analytics/Analytics";

export default function Home() {
  return (
    <>
      <Analytics />

      <Hero />

      <About />

      <SkillsSection />

      <Featured />

      <ExperienceSummary />

      {/* You might want a final divider here before the footer/contact section */}
      {/* <NeonDivider colourVariable="var(--neon-pink)" /> */}
    </>
  );
}
