import Link from "next/link";
import { projects } from "@/lib/data";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { Button } from "@/components/ui/button";
import { AnimatedDiv } from "@/components/shared/AnimatedDiv";

import { SectionBackground } from "@/components/animations/premium/SectionBackground";

export function FeaturedProjects() {
  return (
    <section className="premium-section py-8 relative">
      <SectionBackground />
      <div className="container mx-auto px-4">
        <SectionHeading title="Featured Work" subtitle="Real projects solving real business problems" center />
        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {projects.slice(0, 3).map((p, i) => (
            <AnimatedDiv key={p.id} delay={i * 0.08}>
              <ProjectCard project={p} />
            </AnimatedDiv>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link href="/projects"><Button variant="outline">View All Projects →</Button></Link>
        </div>
      </div>
    </section>
  );
}
