"use client";

import { services } from "@/lib/data";
import { Card } from "@/components/ui/card";
import { SectionHeading } from "@/components/shared/SectionHeading";
import SectionReveal from "@/components/animations/SectionReveal";
import { motion } from "framer-motion";

import { SectionBackground } from "@/components/animations/premium/SectionBackground";

export function ServicesSection() {
  return (
    <section className="premium-section py-8 relative">
      <SectionBackground />
      <div className="container mx-auto px-4">
        <SectionHeading title="What I Build For You" subtitle="Web development + AI automation to grow your business faster" center />
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <SectionReveal key={service.id} delay={index * 0.1}>
              <Card className="group p-8 relative overflow-hidden flex flex-col h-full z-10 bg-black/40 border-white/5 backdrop-blur-sm">
                  <div className="absolute inset-0 bg-linear-to-br from-[rgba(212,175,55,0.08)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none -z-10" />
                  <motion.p 
                    className="text-4xl mb-2"
                    animate={{ y: [0, -8, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: index * 0.2 }}
                  >
                    {service.icon}
                  </motion.p>
                  <h3 className="mt-3 text-xl font-semibold tracking-wide text-white group-hover:text-[#d4af37] transition-colors">{service.title}</h3>
                  <p className="mt-3 text-sm text-muted-foreground font-light leading-relaxed grow">{service.description}</p>
                  <ul className="mt-6 space-y-2 text-sm border-t border-white/5 pt-5">
                    {service.features.map((f) => (
                      <li key={f} className="text-slate-300 font-light flex items-center gap-2">
                        <span className="text-[rgba(212,175,55,0.8)] text-xs">◆</span> {f}
                      </li>
                    ))}
                  </ul>
                </Card>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
