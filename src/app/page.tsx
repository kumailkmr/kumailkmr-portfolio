import { Hero } from "@/components/home/Hero";
import { TechStack } from "@/components/home/TechStack";
import { ServicesSection } from "@/components/home/Services";
import { FeaturedProjects } from "@/components/home/FeaturedProjects";
import { WhyHireMe } from "@/components/home/WhyHireMe";
import { Testimonials } from "@/components/home/Testimonials";
import { CTA } from "@/components/home/CTA";
import SectionReveal from "@/components/animations/SectionReveal";

export default function Home() {
  return (
    <>
      <Hero />
      <SectionReveal delay={0.1}><TechStack /></SectionReveal>
      <ServicesSection />
      <FeaturedProjects />
      <SectionReveal delay={0.1}><WhyHireMe /></SectionReveal>
      <Testimonials />
      <SectionReveal delay={0.1}><CTA /></SectionReveal>
    </>
  );
}
