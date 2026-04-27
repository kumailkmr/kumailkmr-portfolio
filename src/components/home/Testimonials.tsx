import TestimonialsCarousel from "@/components/testimonials/TestimonialsCarousel";
import { SectionHeading } from "@/components/shared/SectionHeading";
import SectionReveal from "@/components/animations/SectionReveal";

export function Testimonials() {
  return (
    <section className="premium-section py-20 relative overflow-hidden">
      {/* Background glow for testimonials */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(212,175,55,0.05)_0%,transparent_70%)] pointer-events-none" />
      
      <div className="container mx-auto px-4 relative z-10">
        <SectionReveal>
          <SectionHeading title="What Clients Say" subtitle="Trust from businesses worldwide" center />
        </SectionReveal>
        
        <SectionReveal delay={0.3}>
          <TestimonialsCarousel />
        </SectionReveal>
      </div>
    </section>
  );
}
