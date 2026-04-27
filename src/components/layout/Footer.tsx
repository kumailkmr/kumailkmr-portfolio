"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { personalInfo } from "@/lib/data";

export function Footer() {
  return (
    <footer className="relative mt-20 border-t border-white/10 bg-black backdrop-blur-md">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,var(--tw-gradient-stops))] from-[#d4af37]/5 via-transparent to-transparent" />
      <div className="container mx-auto grid gap-8 px-4 py-12 sm:gap-12 sm:py-16 md:grid-cols-4 lg:gap-16 relative">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          <div>
            <h3 className="gradient-text text-2xl font-bold tracking-tight">
              Kumail Kmr
            </h3>
            <p className="mt-1 text-xs font-bold uppercase tracking-[0.2em] text-[#d4af37]/80">
              Systems Studio
            </p>
          </div>
          <p className="text-sm leading-relaxed font-light text-slate-400">
            Freelance Web Developer & AI Automation Specialist building high-performance digital products from Srinagar, Kashmir.
          </p>
          <div className="flex items-center gap-2 text-xs font-bold text-slate-400">
            <MapPin className="h-4 w-4 text-[#d4af37]" />
            Srinagar, Kashmir, India 🏔️
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="space-y-6"
        >
          <h4 className="text-sm font-bold uppercase tracking-[0.3em] text-white">Explore</h4>
          <div className="space-y-4">
            {["/", "/about", "/projects", "/services", "/contact"].map((link) => (
              <Link 
                key={link} 
                href={link}
                className="group flex items-center gap-2 text-sm font-light text-slate-400 transition-all hover:text-[#d4af37]"
              >
                <ArrowUpRight className="h-3 w-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                {link === "/" ? "Home" : link.slice(1).charAt(0).toUpperCase() + link.slice(2)}
              </Link>
            ))}
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="space-y-6"
        >
          <h4 className="text-sm font-bold uppercase tracking-[0.3em] text-white">Expertise</h4>
          <div className="space-y-4 text-sm font-light text-slate-400">
            <p className="hover:text-[#d4af37] transition-colors cursor-default">SaaS Applications</p>
            <p className="hover:text-[#d4af37] transition-colors cursor-default">E-Commerce Stores</p>
            <p className="hover:text-[#d4af37] transition-colors cursor-default">Business Websites</p>
            <p className="hover:text-[#d4af37] transition-colors cursor-default">AI Automation</p>
            <p className="hover:text-[#d4af37] transition-colors cursor-default">Digital Systems</p>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="space-y-6"
        >
          <h4 className="text-sm font-bold uppercase tracking-[0.3em] text-white">Connect</h4>
          <div className="space-y-4">
            <Link 
              href={`mailto:${personalInfo.email}`}
              className="group flex items-center gap-2 text-sm font-light text-slate-400 transition-all hover:text-[#d4af37]"
            >
              <Mail className="h-4 w-4 text-[#d4af37]" />
              {personalInfo.email}
            </Link>
            <div className="group flex items-center gap-2 text-sm font-light text-slate-400 transition-all">
              <Phone className="h-4 w-4 text-[#d4af37]" />
              <button 
                onClick={(e) => {
                  const btn = e.currentTarget;
                  if (btn.innerText.includes('Click to show')) {
                    btn.innerText = personalInfo.phone;
                  } else {
                    window.location.href = `tel:${personalInfo.phone}`;
                  }
                }}
                className="hover:text-[#d4af37] transition-colors"
              >
                Click to show number
              </button>
            </div>
            <Link 
              href={personalInfo.social.linkedin}
              target="_blank"
              className="group flex items-center gap-2 text-sm font-light text-slate-400 transition-all hover:text-[#d4af37]"
              title="LinkedIn"
            >
              <FaLinkedin className="h-5 w-5 text-[#d4af37]" />
            </Link>
            <Link 
              href={personalInfo.social.github}
              target="_blank"
              className="group flex items-center gap-2 text-sm font-light text-slate-400 transition-all hover:text-[#d4af37]"
              title="GitHub"
            >
              <FaGithub className="h-5 w-5 text-[#d4af37]" />
            </Link>
          </div>
        </motion.div>
      </div>
      
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="border-t border-white/5 px-4 py-10 text-center"
      >
        <p className="text-xs font-bold uppercase tracking-[0.4em] text-slate-500">
          © 2026 Kumail Kmr — Building the Future of Web & AI
        </p>
      </motion.div>
    </footer>
  );
}
