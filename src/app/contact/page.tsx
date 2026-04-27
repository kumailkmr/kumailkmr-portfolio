"use client";

import Link from "next/link";
import { personalInfo } from "@/lib/data";
import { Card } from "@/components/ui/card";
import ContactFormWhatsApp from "@/components/contact/ContactFormWhatsApp";
import SectionReveal from "@/components/animations/SectionReveal";

import { SectionBackground } from "@/components/animations/premium/SectionBackground";

export default function ContactPage() {
  return (
    <div className="premium-section min-h-screen relative overflow-hidden">
      <SectionBackground />

      <section className="container mx-auto grid gap-16 px-4 py-16 md:py-24 lg:grid-cols-2 items-start">
        <SectionReveal className="space-y-10">
          <div className="space-y-6">
            <h1 className="text-[3rem] font-bold leading-[1.1] tracking-tight sm:text-[4rem] md:text-6xl lg:text-7xl">
              <span className="gradient-text italic">Let&apos;s Build</span> <br />
              Something Extraordinary
            </h1>
            <p className="text-lg font-light text-slate-400 sm:text-xl max-w-lg leading-relaxed">
              Ready to automate your operations or build a world-class web application? I&apos;m just a message away.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <Card className="p-8 group hover:border-[#25D366]/30">
              <div className="w-12 h-12 rounded-2xl bg-[#25D366]/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <span className="text-2xl">📱</span>
              </div>
              <p className="text-sm font-bold uppercase tracking-widest text-[#25D366] mb-2">WhatsApp</p>
              <p className="text-xl font-bold text-white mb-4 italic">Chat on WhatsApp</p>
              <Link target="_blank" href={personalInfo.whatsappUrl} className="inline-flex items-center gap-2 text-sm font-bold text-slate-300 hover:text-white transition-colors">
                Message Now ↗
              </Link>
            </Card>
            
            <Card className="p-8 group hover:border-[#d4af37]/30">
              <div className="w-12 h-12 rounded-2xl bg-[#d4af37]/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <span className="text-2xl">📧</span>
              </div>
              <p className="text-sm font-bold uppercase tracking-widest text-[#d4af37] mb-2">Email</p>
              <p className="text-lg font-bold text-white mb-4 truncate">{personalInfo.email}</p>
              <Link href={`mailto:${personalInfo.email}`} className="inline-flex items-center gap-2 text-sm font-bold text-slate-300 hover:text-white transition-colors">
                Send Mail ↗
              </Link>
            </Card>

            <Card className="p-8 group hover:border-blue-500/30">
              <div className="w-12 h-12 rounded-2xl bg-blue-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <span className="text-2xl">💼</span>
              </div>
              <p className="text-sm font-bold uppercase tracking-widest text-blue-400 mb-2">LinkedIn</p>
              <p className="text-xl font-bold text-white mb-4">Kumail Kmr</p>
              <Link target="_blank" href={personalInfo.social.linkedin} className="inline-flex items-center gap-2 text-sm font-bold text-slate-300 hover:text-white transition-colors">
                Connect ↗
              </Link>
            </Card>

            <Card className="p-8 group hover:border-slate-400/30">
              <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <span className="text-2xl">💻</span>
              </div>
              <p className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-2">GitHub</p>
              <p className="text-xl font-bold text-white mb-4">kumailkmr</p>
              <Link target="_blank" href={personalInfo.social.github} className="inline-flex items-center gap-2 text-sm font-bold text-slate-300 hover:text-white transition-colors">
                View Code ↗
              </Link>
            </Card>
          </div>

          <div className="p-8 glass-card border-[#d4af37]/20 rounded-4xl bg-linear-to-br from-[#d4af37]/5 to-transparent">
             <div className="flex items-center gap-4">
                <div className="w-3 h-3 rounded-full bg-[#d4af37] animate-pulse" />
                <p className="text-sm font-bold text-slate-300">Available for new projects starting June 2026</p>
             </div>
          </div>
        </SectionReveal>

        <SectionReveal delay={0.4}>
          <div className="relative">
            {/* Glow behind form */}
            <div className="absolute -inset-4 bg-[radial-gradient(circle,rgba(212,175,55,0.05)_0%,transparent_70%)] pointer-events-none" />
            <ContactFormWhatsApp />
          </div>
        </SectionReveal>
      </section>
    </div>
  );
}
