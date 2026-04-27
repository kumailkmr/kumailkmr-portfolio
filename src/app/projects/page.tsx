"use client";

import { useState } from "react";
import Link from "next/link";
import { ProjectGrid } from "@/components/projects/ProjectGrid";
import { Button } from "@/components/ui/button";
import { projects } from "@/lib/data";
import { cn } from "@/lib/utils";

const filters = ["All", "SaaS", "E-Commerce", "AI Tools", "Websites", "Automation"];

export default function ProjectsPage() {
  const [active, setActive] = useState("All");
  return (
    <div className="premium-section min-h-screen">
       {/* Ambient orbs */}
      <div className="orb -left-20 top-20 opacity-20" />
      <div className="orb -right-40 bottom-40 opacity-30" />

      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="space-y-6 text-center lg:text-left">
          <h1 className="text-[3.5rem] font-bold leading-[1.1] tracking-tight sm:text-[4.5rem] md:text-6xl lg:text-7xl">
            <span className="gradient-text italic">Featured</span> <br />
            Portfolio
          </h1>
          <p className="text-lg font-light text-slate-400 sm:text-xl max-w-2xl leading-relaxed">
            A collection of high-performance web applications and AI automation systems designed to solve complex business challenges.
          </p>
          <div className="flex items-center justify-center lg:justify-start gap-4 pt-2">
            <div className="h-px w-12 bg-[#d4af37]/30" />
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-slate-500">
              {projects.length} Total Projects
            </p>
          </div>
        </div>

        <div className="mt-16 mb-12 flex flex-wrap justify-center lg:justify-start gap-3">
          {filters.map((f) => {
            const isActive = active === f;
            return (
              <button
                key={f}
                onClick={() => setActive(f)}
                className={cn(
                  "px-6 py-2.5 rounded-full text-[11px] font-bold uppercase tracking-widest transition-all duration-300 border",
                  isActive 
                    ? "bg-[#d4af37] border-[#d4af37] text-black shadow-[0_0_20px_rgba(212,175,55,0.4)]" 
                    : "bg-white/5 border-white/10 text-slate-400 hover:border-[#d4af37]/50 hover:text-white"
                )}
              >
                {f}
              </button>
            );
          })}
        </div>

        <ProjectGrid category={active} />
        
        <div className="mt-20 p-12 glass-card rounded-[3rem] text-center space-y-6 bg-linear-to-br from-[#d4af37]/5 to-transparent">
           <h3 className="text-2xl font-bold text-white">Have a custom project in mind?</h3>
           <p className="text-slate-400 font-light max-w-xl mx-auto">
             I specialize in building custom SaaS platforms, e-commerce systems, and AI automation tailored to your specific business needs.
           </p>
           <div className="pt-4">
             <Link href="/contact">
               <Button className="h-14 px-10 text-base font-bold">Book a Strategy Call</Button>
             </Link>
           </div>
        </div>
      </section>
    </div>
  );
}
