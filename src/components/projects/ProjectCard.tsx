import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { ProjectItem } from "@/types";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { SiMongodb, SiNextdotjs, SiOpenai, SiPostgresql, SiPrisma, SiReact, SiStripe, SiTailwindcss, SiTypescript } from "react-icons/si";
import { TbBrandVercel, TbRobot } from "react-icons/tb";
import SectionReveal from "@/components/animations/SectionReveal";
import MagneticButton from "@/components/ui/MagneticButton";

const tagIcons: Record<string, ReactNode> = {
  "Next.js": <SiNextdotjs />,
  TypeScript: <SiTypescript />,
  Prisma: <SiPrisma />,
  Stripe: <SiStripe />,
  PostgreSQL: <SiPostgresql />,
  MongoDB: <SiMongodb />,
  Tailwind: <SiTailwindcss />,
  OpenAI: <SiOpenai />,
  "Vercel AI": <TbBrandVercel />,
  React: <SiReact />,
  n8n: <TbRobot />,
};

export function ProjectCard({ project }: { project: ProjectItem }) {
  return (
    <SectionReveal>
      <Card className="group overflow-hidden p-0 glass-card relative h-full flex flex-col">
          {project.image ? (
            <div className="h-52 relative overflow-hidden group/img">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-1000 group-hover/img:scale-110"
              />
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover/img:opacity-100 transition-opacity duration-500 flex items-center justify-center backdrop-blur-[2px]">
                <Link href={project.liveUrl} target="_blank">
                  <MagneticButton className="px-6 py-2.5 text-xs font-bold uppercase tracking-widest">View Project ↗</MagneticButton>
                </Link>
              </div>
              <div className="absolute inset-0 bg-linear-to-t from-[#000000] via-[#000000]/20 to-transparent pointer-events-none" />
            </div>
          ) : (
            <div className={`h-52 bg-linear-to-br ${project.gradient} relative overflow-hidden`}>
              <div className="absolute inset-0 bg-black/20 backdrop-blur-[2px]" />
              <div className="absolute inset-0 flex items-center justify-center opacity-20">
                <span className="text-8xl font-bold text-white/10 uppercase tracking-tighter select-none">{project.badge}</span>
              </div>
            </div>
          )}
          <div className="space-y-4 p-6 sm:p-7 flex flex-col flex-1">
            <div className="flex justify-between items-start">
              <Badge className={`${project.badgeColor} border-none px-3 py-1 text-[10px] font-bold uppercase tracking-wider`}>
                {project.badge}
              </Badge>
            </div>
            <h3 className="text-2xl font-bold tracking-tight text-white group-hover:text-[#d4af37] transition-colors duration-300">
              {project.title}
            </h3>
            <p className="text-[15px] text-slate-400 font-light leading-relaxed flex-1">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2 pt-2">
              {project.tags.map((tag) => (
                <Badge key={tag} className="inline-flex items-center gap-1.5 bg-white/5 border-white/10 text-[11px] font-medium text-slate-300">
                  <span className="text-[#00D4FF] text-sm">{tagIcons[tag] ?? <SiReact />}</span>
                  {tag}
                </Badge>
              ))}
            </div>
            <div className="flex gap-3 pt-6">
              <Link href={project.liveUrl} target="_blank" className="flex-1">
                <MagneticButton className="w-full text-[11px] font-bold uppercase tracking-widest py-2.5 px-4 shadow-[0_4px_20px_rgba(212,175,55,0.15)]">
                  Live Demo
                </MagneticButton>
              </Link>
              <Link href={project.githubUrl} target="_blank" className="flex-1">
                <MagneticButton className="w-full text-[11px] font-bold uppercase tracking-widest py-2.5 px-4 bg-transparent! border-white/10! hover:border-[#d4af37]/50! text-slate-300!">
                  Source
                </MagneticButton>
              </Link>
            </div>
          </div>
        </Card>
    </SectionReveal>
  );
}
