import Link from "next/link";
import { Button } from "@/components/ui/button";
import { personalInfo } from "@/lib/data";

export function CTA() {
  return (
    <section className="premium-section py-20 overflow-hidden">
      <div className="container mx-auto px-4 relative">
        {/* Decorative background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[800px] h-full bg-[radial-gradient(circle,rgba(212,175,55,0.1)_0%,transparent_70%)] pointer-events-none" />
        
        <div className="glass-card p-8 sm:p-16 text-center relative z-10 rounded-[3rem] border-[#d4af37]/20 bg-linear-to-br from-[#d4af37]/5 to-transparent">
          <div className="space-y-6">
            <h2 className="text-[2.5rem] sm:text-[3.5rem] font-bold leading-tight tracking-tight text-white">
              Ready to <span className="text-[#d4af37] italic">Automate</span> & <span className="gradient-text italic">Scale</span>?
            </h2>
            <p className="text-lg font-light text-slate-300 max-w-2xl mx-auto leading-relaxed">
              Let&apos;s build your next-gen web application and integrate AI systems that work for you 24/7. 
              <span className="block mt-2 text-[#d4af37] font-medium">Free 30-minute strategy call included.</span>
            </p>
            
            <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
              <Link href={personalInfo.whatsappUrl} target="_blank" className="w-full sm:w-auto">
                <Button className="w-full sm:h-14 sm:px-10 text-base font-bold shadow-[0_10px_30px_rgba(212,175,55,0.2)]">
                  Message on WhatsApp
                </Button>
              </Link>
              <Link href="/contact" className="w-full sm:w-auto">
                <Button variant="outline" className="w-full sm:h-14 sm:px-10 text-base font-bold bg-white/5! border-white/10! hover:border-[#d4af37]! text-white!">
                   Book Free Call
                </Button>
              </Link>
            </div>
            
            <div className="pt-8 flex flex-col items-center gap-4">
              <div className="h-px w-20 bg-white/10" />
              <div className="flex flex-col sm:flex-row items-center gap-3 text-sm text-slate-400 font-light">
                 <p className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    Fast response within 2h
                 </p>
                 <span className="hidden sm:inline text-white/20">•</span>
                 <p>{personalInfo.email}</p>
                 <span className="hidden sm:inline text-white/20">•</span>
                 <p>{personalInfo.phone}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
