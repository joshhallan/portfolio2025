import Featured from "@/components/HomePage/Featured/Featured";
import Hero from "@/components/HomePage/Hero/Hero";
import SkillsSection from "@/components/HomePage/Skills/Skills";
import About from "@/components/HomePage/About/About";
import ExperienceSummary from "@/components/HomePage/Experience/Experience";
import Analytics from "@/components/Global/Analytics/Analytics";
import Divider from "@/components/Global/Divider/Divider";

export default function Home() {
  return (
    <>
      <Analytics />

      <Hero />
      <Divider variant="accent" />
      <About />
      <Divider variant="accent" />
      <SkillsSection />
      <Divider variant="accent" />
      <Featured />
      <Divider variant="accent" />
      <ExperienceSummary />
    </>
  );
}
