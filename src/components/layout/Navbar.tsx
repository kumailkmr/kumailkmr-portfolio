"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { FolderKanban, Home, Mail, Menu, Moon, ShieldCheck, UserRound, X } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { personalInfo } from "@/lib/data";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const { resolvedTheme, setTheme } = useTheme();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition",
          scrolled && "border-b border-white/10 bg-black/40 backdrop-blur-xl",
        )}
      >
        <nav className="container mx-auto flex h-20 items-center justify-between px-4">
        <Link href="/" className="leading-tight">
          <p className="gradient-text text-xl font-bold">Kumail Kmr</p>
          <p className="text-xs text-muted-foreground">Web Dev & AI Automation</p>
        </Link>
        <div className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link key={item.href} href={item.href} className={cn("relative text-xs font-bold uppercase tracking-[0.15em] transition-colors duration-300 hover:text-[rgba(212,175,55,1)] group py-2", isActive ? "text-[rgba(212,175,55,1)]" : "text-slate-300")}>
                {item.label}
                {isActive && (
                  <motion.span
                    layoutId="navbar-active"
                    className="absolute bottom-0 left-0 h-[2px] w-full bg-[rgba(212,175,55,1)] rounded-full shadow-[0_0_8px_rgba(212,175,55,0.6)]"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                {!isActive && (
                  <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-[rgba(212,175,55,0.5)] rounded-full transition-all duration-300 group-hover:w-full" />
                )}
              </Link>
            );
          })}
        </div>
        <div className="hidden items-center gap-4 md:flex">
          <Link href={personalInfo.social.linkedin} target="_blank" className="text-slate-300 hover:text-[#d4af37] transition-colors">
            <FaLinkedin className="h-4 w-4" />
          </Link>
          <Link href={personalInfo.social.github} target="_blank" className="text-slate-300 hover:text-[#d4af37] transition-colors">
            <FaGithub className="h-4 w-4" />
          </Link>
          <button
            onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
            className="rounded-lg border border-white/15 p-2 ml-2"
            aria-label="Toggle theme"
          >
            <Moon className="h-4 w-4" />
          </button>
          <Link href="/contact"><Button size="sm">Hire Me</Button></Link>
        </div>
        <button className="md:hidden" onClick={() => setOpen((v) => !v)}>{open ? <X /> : <Menu />}</button>
        </nav>
        {open ? (
          <div className="mx-4 mb-4 rounded-2xl border border-white/10 bg-black/90 p-6 md:hidden">
            <div className="space-y-4">
              {navItems.map((item) => (
                <Link key={item.href} href={item.href} onClick={() => setOpen(false)} className={cn("block text-sm font-bold uppercase tracking-widest py-2", pathname === item.href ? "text-[rgba(212,175,55,1)]" : "text-slate-300")}>
                  {item.label}
                </Link>
              ))}
            </div>
            <div className="mt-8 flex items-center gap-6 border-t border-white/5 pt-6">
              <Link href={personalInfo.social.linkedin} target="_blank" className="text-slate-400 hover:text-[#d4af37]">
                <FaLinkedin className="h-5 w-5" />
              </Link>
              <Link href={personalInfo.social.github} target="_blank" className="text-slate-400 hover:text-[#d4af37]">
                <FaGithub className="h-5 w-5" />
              </Link>
              <Link href={personalInfo.whatsappUrl} target="_blank" className="text-sm font-bold uppercase tracking-widest text-[#25D366]">
                WhatsApp Me
              </Link>
            </div>
          </div>
        ) : null}
      </header>
      <nav className="mobile-bottom-nav fixed inset-x-0 bottom-0 z-80 md:hidden">
        <div className="grid grid-cols-5 gap-1 border-t border-white/10 bg-black/95 px-2 pb-[max(0.5rem,env(safe-area-inset-bottom))] pt-2 backdrop-blur-2xl">
          <Link href="/" className={cn("mobile-bottom-link", pathname === "/" && "mobile-bottom-link-active")}><Home className="h-4 w-4" /><span>Home</span></Link>
          <Link href="/projects" className={cn("mobile-bottom-link", pathname === "/projects" && "mobile-bottom-link-active")}><FolderKanban className="h-4 w-4" /><span>Projects</span></Link>
          <Link href="/services" className={cn("mobile-bottom-link", pathname === "/services" && "mobile-bottom-link-active")}><ShieldCheck className="h-4 w-4" /><span>Services</span></Link>
          <Link href="/about" className={cn("mobile-bottom-link", pathname === "/about" && "mobile-bottom-link-active")}><UserRound className="h-4 w-4" /><span>About</span></Link>
          <Link href="/contact" className={cn("mobile-bottom-link", pathname === "/contact" && "mobile-bottom-link-active")}><Mail className="h-4 w-4" /><span>Contact</span></Link>
        </div>
      </nav>
    </>
  );
}
