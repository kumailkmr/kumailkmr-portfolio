"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { MessageCircle, ArrowRight, Sparkles, MapPin } from "lucide-react";
import { personalInfo, stats } from "@/lib/data";
import MagneticButton from "@/components/ui/MagneticButton";

export function Hero() {
  return (
    <section className="premium-section relative overflow-x-hidden pt-28 pb-8 md:pt-36">
      {/* Ambient orbs */}
      <div className="orb -right-20 top-10 opacity-60" />
      <div className="orb -left-24 bottom-0 opacity-40" />
      {/* Extra gold orb */}
      <div className="absolute right-1/3 top-1/4 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(212,175,55,0.08)_0%,transparent_70%)] pointer-events-none" />

      <div className="container mx-auto grid gap-10 px-4 lg:grid-cols-2 lg:gap-16 items-center">

        {/* Left — Content */}
        <motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="space-y-7">

          {/* Availability badge */}
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.1, duration: 0.5 }}
            className="inline-flex items-center gap-2.5 rounded-full border border-[rgba(212,175,55,0.5)] bg-[rgba(212,175,55,0.06)] px-5 py-2.5 text-sm font-semibold text-[rgba(212,175,55,0.95)] backdrop-blur-sm shadow-[0_0_24px_rgba(212,175,55,0.12)] tracking-wide">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[rgba(212,175,55,0.8)] opacity-75" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[rgba(212,175,55,1)]" />
            </span>
            Available for Premium Projects
            <Sparkles className="h-3.5 w-3.5 opacity-70" />
          </motion.div>

          {/* Location */}
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.15, duration: 0.5 }}
            className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground">
            <MapPin className="h-4 w-4 text-[rgba(212,175,55,0.7)]" />
            Srinagar, Kashmir, India
          </motion.p>

          {/* Headline */}
          <h1 className="max-w-[22ch] text-[2.4rem] font-medium leading-[1.1] tracking-tight sm:max-w-none sm:text-[2.9rem] md:text-5xl lg:text-[4rem]">
            {"I Build Fast Modern".split(" ").map((word, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.18 + i * 0.1, duration: 0.55 }}
                className="inline-block mr-3"
              >
                {word}
              </motion.span>
            ))}
            <motion.span
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.55 }}
              className="relative inline-block"
            >
              <span className="gradient-text font-semibold italic">Web Apps</span>
            </motion.span>
            {" "}&{" "}
            <motion.span
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.55 }}
              className="gradient-text font-semibold italic"
            >
              AI Automation
            </motion.span>{" "}
            <br className="hidden md:block" />
            <motion.span
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0, duration: 0.55 }}
              className="inline-block"
            >
              For Businesses
            </motion.span>
          </h1>

          {/* Sub-headline */}
          <motion.p initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.22, duration: 0.5 }}
            className="max-w-xl text-base font-light leading-relaxed text-muted-foreground sm:text-lg md:text-xl">
            Helping startups &amp; businesses automate operations, capture leads, and scale 24/7.{" "}
            <span className="text-white font-medium">Fast delivery with AI-powered workflows.</span>
          </motion.p>

          {/* Stats */}
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.28, duration: 0.5 }}
            className="grid grid-cols-4 gap-1 rounded-2xl border border-white/8 bg-white/3 p-3 backdrop-blur-sm sm:gap-2 sm:p-4">
            {stats.map((s, idx) => (
              <motion.div key={s.label} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 + idx * 0.06, duration: 0.5 }}
                className="group flex flex-col items-center text-center px-1 py-2 rounded-xl hover:bg-white/5 transition-all duration-300 cursor-default">
                <p className="text-2xl font-bold text-white sm:text-3xl lg:text-4xl group-hover:text-[rgba(212,175,55,0.9)] transition-colors duration-300">
                  {s.value}{s.suffix}
                </p>
                <p className="mt-1.5 text-[0.6rem] font-bold uppercase tracking-[0.14em] text-[rgba(212,175,55,0.75)] sm:text-xs">
                  {s.label}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35, duration: 0.5 }}
            className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
            <Link href="/projects" className="w-full sm:w-auto">
              <MagneticButton className="w-full sm:w-auto h-13 px-7 sm:h-14 sm:px-9 text-base tracking-wide flex items-center justify-center">
                See My Work
                <ArrowRight className="ml-2 h-5 w-5" />
              </MagneticButton>
            </Link>
            <Link href={personalInfo.whatsappUrl} target="_blank" className="w-full sm:w-auto">
              <MagneticButton className="w-full sm:w-auto h-13 px-7 sm:h-14 sm:px-9 text-base tracking-wide flex items-center justify-center border-[#25D366]! hover:border-[#25D366]! hover:shadow-[0_0_12px_4px_rgba(37,211,102,0.6)]">
                <MessageCircle className="mr-2 h-5 w-5" /> WhatsApp Me
              </MagneticButton>
            </Link>
            <Link href="/contact" className="w-full sm:w-auto">
              <MagneticButton className="w-full sm:w-auto h-13 px-7 sm:h-14 sm:px-9 text-base tracking-wide flex items-center justify-center bg-transparent! text-white! hover:bg-[#d4af37]/10!">
                Book Free Call
              </MagneticButton>
            </Link>
          </motion.div>

          {/* Social links */}
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.42, duration: 0.5 }}
            className="flex flex-wrap items-center gap-3 pt-1">
            <span className="text-xs text-muted-foreground uppercase tracking-widest font-bold">Find me on</span>
            <Link href={personalInfo.social.linkedin} target="_blank"
              className="group inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/4 px-4 py-2 text-sm font-semibold text-slate-300 hover:border-[rgba(212,175,55,0.5)] hover:bg-[rgba(212,175,55,0.07)] hover:text-[rgba(212,175,55,0.9)] transition-all duration-300 backdrop-blur-sm">
              <svg className="h-4 w-4 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              LinkedIn
              <ArrowRight className="h-3 w-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
            </Link>
            <Link href={personalInfo.social.github} target="_blank"
              className="group inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/4 px-4 py-2 text-sm font-semibold text-slate-300 hover:border-[rgba(212,175,55,0.5)] hover:bg-[rgba(212,175,55,0.07)] hover:text-[rgba(212,175,55,0.9)] transition-all duration-300 backdrop-blur-sm">
              <svg className="h-4 w-4 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              GitHub
              <ArrowRight className="h-3 w-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
            </Link>
            <Link href={`mailto:${personalInfo.email}`}
              className="group inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/4 px-4 py-2 text-sm font-semibold text-slate-300 hover:border-[rgba(212,175,55,0.5)] hover:bg-[rgba(212,175,55,0.07)] hover:text-[rgba(212,175,55,0.9)] transition-all duration-300 backdrop-blur-sm">
              ✉ Email Me
            </Link>
          </motion.div>
        </motion.div>

        {/* Right — CSS Premium Mockup */}
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.4, duration: 0.8 }}
          className="relative hidden lg:flex items-center justify-center w-full h-[600px]">
          
          {/* Main Glass Mockup Container */}
          <div className="relative w-full max-w-[500px] h-[400px] glass-card rounded-[2.5rem] p-4 flex flex-col gap-3 rotate-[-4deg] hover:rotate-0 transition-transform duration-700 shadow-[0_40px_80px_rgba(0,0,0,0.6)]">
            {/* Header Bar */}
            <div className="flex items-center gap-2 px-2 py-1">
              <div className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50" />
              <div className="w-2.5 h-2.5 rounded-full bg-green-500/50" />
              <div className="ml-2 h-4 w-32 rounded-full bg-white/5" />
            </div>
            
            {/* Content Area Mockup */}
            <div className="flex-1 rounded-2xl bg-black/40 border border-white/5 p-4 flex flex-col gap-4 overflow-hidden">
              <div className="h-6 w-2/3 rounded-md bg-white/10" />
              <div className="grid grid-cols-2 gap-3">
                <div className="h-24 rounded-xl bg-white/5 border border-white/5" />
                <div className="h-24 rounded-xl bg-white/5 border border-white/5" />
              </div>
              <div className="flex-1 rounded-xl bg-linear-to-br from-violet-500/10 to-cyan-500/10 border border-white/5 flex items-center justify-center">
                 <div className="w-12 h-12 rounded-full bg-white/10 animate-pulse flex items-center justify-center">
                    <Sparkles className="w-6 h-6 text-[#d4af37]" />
                 </div>
              </div>
            </div>
          </div>

          {/* Floating Element 1: AI Brain / Node */}
          <motion.div 
            animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-4 right-10 w-32 h-32 glass-card rounded-3xl flex items-center justify-center rotate-12 shadow-2xl z-10"
          >
            <div className="relative w-16 h-16">
              <div className="absolute inset-0 bg-cyan-500/20 blur-xl rounded-full animate-pulse" />
              <div className="relative z-10 w-full h-full border-2 border-cyan-400/30 rounded-2xl flex items-center justify-center bg-black/40">
                <span className="text-2xl">🤖</span>
              </div>
            </div>
          </motion.div>

          {/* Floating Element 2: Code Snippet */}
          <motion.div 
            animate={{ y: [0, 25, 0], rotate: [0, -5, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute -bottom-10 left-0 w-48 h-28 glass-card rounded-2xl p-4 rotate-[-8deg] shadow-2xl z-20 border-[#d4af37]/20"
          >
            <div className="space-y-2">
              <div className="h-2 w-full rounded bg-white/10" />
              <div className="h-2 w-4/5 rounded bg-white/10" />
              <div className="h-2 w-3/4 rounded bg-[#d4af37]/30" />
              <div className="pt-2 flex items-center gap-2">
                <div className="w-4 h-4 rounded-full bg-[#d4af37]/20 flex items-center justify-center text-[8px] text-[#d4af37]">✓</div>
                <div className="h-2 w-1/2 rounded bg-white/10" />
              </div>
            </div>
          </motion.div>

          {/* Background Glows */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(108,99,255,0.15)_0%,transparent_70%)] pointer-events-none" />
          <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-[radial-gradient(circle,rgba(212,175,55,0.1)_0%,transparent_70%)] pointer-events-none" />
        </motion.div>

      </div>
    </section>
  );
}
