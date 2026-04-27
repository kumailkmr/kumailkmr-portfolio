import { projects } from "@/lib/data";
import { ProjectCard } from "./ProjectCard";

export function ProjectGrid({ category = "All" }: { category?: string }) {
  const filtered = category === "All" ? projects : projects.filter((p) => p.category === category);
  return (
    <div className="grid gap-4 sm:gap-5 md:grid-cols-2 lg:grid-cols-3">
      {filtered.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
}
