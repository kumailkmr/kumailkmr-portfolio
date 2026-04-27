"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { personalInfo, skills, timeline } from "@/lib/data";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import SectionReveal from "@/components/animations/SectionReveal";
import { SectionHeading } from "@/components/shared/SectionHeading";

import { SectionBackground } from "@/components/animations/premium/SectionBackground";

export default function AboutPage() {
  return (
    <div className="premium-section min-h-screen relative overflow-hidden">
      <SectionBackground />
      
      <section className="container mx-auto space-y-20 px-4 py-16 sm:space-y-32 md:py-24">
        {/* Profile Header */}
        <div className="flex flex-col items-center text-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative h-44 w-44 sm:h-56 sm:w-56"
          >
            {/* Pulsing outer rings */}
            <div className="absolute inset-[-20px] rounded-full bg-[radial-gradient(circle,rgba(212,175,55,0.15)_0%,transparent_70%)] animate-pulse" />
            <div className="absolute inset-[-10px] border border-[#d4af37]/20 rounded-full animate-[spin_10s_linear_infinite]" />
            
            {/* Main Avatar Container */}
            <div className="absolute inset-0 rounded-full p-[4px] bg-linear-to-br from-[#d4af37] via-[#d4af37]/30 to-[#d4af37] shadow-[0_0_50px_rgba(212,175,55,0.25)]">
              <div className="relative h-full w-full rounded-full overflow-hidden border-4 border-[#0d0d0d] bg-[#0d0d0d]">
                <Image
                  src="/kumail-profile.jpg"
                  alt="Kumail Kmr"
                  fill
                  className="object-cover object-top hover:scale-110 transition-transform duration-700"
                  priority
                />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mt-10 space-y-4"
          >
            <h1 className="text-[3rem] font-bold leading-tight tracking-tight sm:text-[4rem] md:text-6xl lg:text-7xl">
              <span className="gradient-text italic">Kumail Kmr</span>
            </h1>
            <p className="mx-auto max-w-2xl text-lg font-light text-slate-400 sm:text-xl leading-relaxed">
              {personalInfo.role}
            </p>
            <div className="flex items-center justify-center gap-2 text-sm font-bold tracking-[0.2em] uppercase text-[#d4af37]/80">
              <span>📍 Srinagar</span>
              <span className="text-white/20">•</span>
              <span>Kashmir</span>
              <span className="text-white/20">•</span>
              <span>India 🏔️</span>
            </div>
            
            <div className="pt-6">
              <Link href={personalInfo.whatsappUrl} target="_blank">
                <Button className="h-14 px-10 text-base font-bold shadow-[0_10px_40px_rgba(212,175,55,0.2)]">
                  Start a Project
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Story Section */}
        <div className="grid gap-10 lg:grid-cols-5 items-start">
          <SectionReveal className="lg:col-span-3">
            <Card className="p-8 sm:p-12 hover:translate-y-0 cursor-default">
              <h2 className="text-3xl font-bold tracking-tight text-white mb-8 border-b border-white/5 pb-6 flex items-center gap-3">
                <span className="text-[#d4af37]">01.</span> My Story
              </h2>
              <div className="space-y-6 text-lg font-light leading-relaxed text-slate-300">
                <p>
                  I&apos;m Kumail, a dedicated <span className="text-white font-medium">Full-Stack Developer</span> and <span className="text-[#d4af37] font-medium">AI Automation Specialist</span> based in the serene valley of Srinagar, Kashmir.
                </p>
                <p>
                  I don&apos;t just write code; I architect systems that solve real business problems. By combining the speed of <span className="text-[#00D4FF] font-medium">Next.js</span> with the power of <span className="text-emerald-400 font-medium">AI Agents</span>, I help businesses eliminate manual work and scale their operations to new heights.
                </p>
                <p>
                  My goal is simple: to deliver premium digital products that convert. Whether it&apos;s a high-performance SaaS platform or a 24/7 AI-driven customer support system, I bring a level of precision and craftsmanship that sets your brand apart.
                </p>
              </div>
            </Card>
          </SectionReveal>

          <SectionReveal delay={0.2} className="lg:col-span-2 space-y-6">
             <div className="glass-card p-8 rounded-3xl border-[#d4af37]/10 flex flex-col items-center justify-center text-center space-y-4">
                <p className="text-5xl font-bold text-[#d4af37]">10+</p>
                <p className="text-sm font-bold uppercase tracking-widest text-slate-400">Happy Clients</p>
             </div>
             <div className="glass-card p-8 rounded-3xl border-cyan-500/10 flex flex-col items-center justify-center text-center space-y-4">
                <p className="text-5xl font-bold text-[#00D4FF]">15+</p>
                <p className="text-sm font-bold uppercase tracking-widest text-slate-400">Successful Launches</p>
             </div>
          </SectionReveal>
        </div>

        {/* Skills Section */}
        <div className="space-y-12">
          <SectionHeading title="System Expertise" subtitle="Mastering the tools of the future" center />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <SkillBlock title="Frontend Core" items={skills.frontend} />
            <SkillBlock title="Backend Architecture" items={skills.backend} />
            <SkillBlock title="AI & Automation" items={skills.aiAutomation} />
            <SkillBlock title="Operations & Tools" items={skills.tools} />
          </div>
        </div>

        {/* Timeline Section */}
        <div className="max-w-4xl mx-auto">
          <SectionReveal>
            <Card className="p-8 sm:p-12 hover:translate-y-0 cursor-default">
               <h2 className="text-3xl font-bold tracking-tight text-white mb-12 flex items-center gap-3">
                <span className="text-[#d4af37]">02.</span> My Journey
              </h2>
              <div className="space-y-12">
                {timeline.map((item) => (
                  <div key={`${item.year}-${item.text}`} className="relative pl-10 border-l border-white/5 pb-2 last:pb-0">
                    <div className="absolute left-[-9px] top-0 h-4 w-4 rounded-full bg-[#d4af37] shadow-[0_0_15px_rgba(212,175,55,0.6)]" />
                    <div className="absolute left-[-5px] top-4 h-full w-px bg-linear-to-b from-[#d4af37] to-transparent last:hidden" />
                    <span className="text-xs font-bold text-[#d4af37] tracking-[0.3em] uppercase mb-2 block">{item.year}</span>
                    <p className="text-lg font-light text-slate-300 leading-relaxed">{item.text}</p>
                  </div>
                ))}
              </div>
            </Card>
          </SectionReveal>
        </div>
      </section>
    </div>
  );
}

function SkillBlock({ title, items }: { title: string; items: { name: string; level: number }[] }) {
  return (
    <Card className="p-6 h-full flex flex-col group">
      <h3 className="text-lg font-bold tracking-tight text-white group-hover:text-[#d4af37] transition-colors">{title}</h3>
      <div className="mt-8 space-y-6 grow">
        {items.map((item) => (
          <div key={item.name} className="space-y-2">
            <div className="flex justify-between text-[11px] font-bold uppercase tracking-widest text-slate-400">
              <span>{item.name}</span>
              <span className="text-[#d4af37]">{item.level}%</span>
            </div>
            <div className="h-1 rounded-full bg-white/5 overflow-hidden">
              <motion.div 
                initial={{ width: 0 }}
                whileInView={{ width: `${item.level}%` }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="h-full rounded-full bg-linear-to-r from-[#d4af37] to-[#00D4FF]" 
              />
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}
