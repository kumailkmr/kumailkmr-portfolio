import Link from "next/link";
import { faqs, pricingTiers } from "@/lib/data";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function ServicesPage() {
  return (
    <div className="premium-section min-h-screen">
      {/* Ambient orbs */}
      <div className="orb -left-20 top-20 opacity-30" />
      <div className="orb -right-40 bottom-40 opacity-20" />

      <section className="container mx-auto px-4 py-16 md:py-24 space-y-24">
        <div className="space-y-6 text-center lg:text-left">
          <h1 className="text-[3.5rem] font-bold leading-[1.1] tracking-tight sm:text-[4.5rem] md:text-6xl lg:text-7xl">
            <span className="gradient-text italic">Services</span> <br />
            & Pricing
          </h1>
          <p className="text-lg font-light text-slate-400 sm:text-xl max-w-2xl leading-relaxed">
            Transparent investment for high-performance digital products. No hidden fees. Premium craftsmanship guaranteed.
          </p>
        </div>

        <div className="grid gap-8 sm:gap-10 lg:grid-cols-3">
          {pricingTiers.map((tier) => (
            <Card key={tier.id} className={cn(
              "p-8 sm:p-10 flex flex-col h-full relative overflow-hidden group",
              tier.popular ? "border-[#d4af37]/40 shadow-[0_0_50px_rgba(212,175,55,0.1)]" : "border-white/10"
            )}>
              {tier.popular && (
                <div className="absolute top-0 right-0 bg-[#d4af37] text-black text-[10px] font-bold uppercase tracking-widest px-4 py-1.5 rounded-bl-2xl z-10">
                  Most Popular
                </div>
              )}
              
              <div className="mb-8">
                <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#d4af37] mb-3">{tier.name}</p>
                <h3 className="text-4xl font-bold text-white mb-2">{tier.price}</h3>
                <p className="text-sm font-light text-slate-500">Delivery: {tier.delivery}</p>
              </div>

              <div className="space-y-6 grow">
                <div>
                   <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-4 pb-4 border-b border-white/5">
                     Best For: <span className="text-white ml-2">{tier.bestFor}</span>
                   </p>
                   <ul className="space-y-4">
                     {tier.features.map((f) => (
                       <li key={f} className="text-sm font-light text-slate-300 flex items-start gap-3">
                         <span className="text-[#d4af37] mt-0.5">✦</span>
                         {f}
                       </li>
                     ))}
                   </ul>
                </div>
                
                {tier.excludedFeatures.length > 0 && (
                   <ul className="space-y-4 opacity-40">
                     {tier.excludedFeatures.map((f) => (
                       <li key={f} className="text-sm font-light text-slate-400 flex items-start gap-3">
                         <span className="mt-0.5 text-xs">✕</span>
                         {f}
                       </li>
                     ))}
                   </ul>
                )}
              </div>

              <Link href={tier.ctaLink} target="_blank" className="mt-12 block w-full">
                <Button 
                  className="w-full h-14 text-base font-bold" 
                  variant={tier.popular ? "default" : "outline"}
                >
                  {tier.ctaLabel}
                </Button>
              </Link>
            </Card>
          ))}
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
           <Card className="p-10 border-cyan-500/20 bg-linear-to-br from-cyan-500/5 to-transparent relative overflow-hidden group hover:border-cyan-500/40">
              <div className="absolute -right-12 -top-12 text-[10rem] opacity-[0.03] group-hover:opacity-[0.07] transition-opacity">🤖</div>
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                 <span className="w-10 h-10 rounded-xl bg-cyan-500/10 flex items-center justify-center text-xl">🤖</span>
                 AI Automation Add-On
              </h2>
              <p className="text-slate-400 font-light mb-6">
                Integrate advanced AI agents and custom automation workflows into your existing platform to eliminate manual operations.
              </p>
              <p className="text-2xl font-bold text-cyan-400 mb-8">₹20,000 - ₹50,000</p>
              <Link href="https://wa.me/916006121193?text=Hi%20Kumail!%20I%20want%20to%20add%20AI%20Automation%20to%20my%20project." target="_blank">
                <Button variant="outline" className="h-12 px-8 border-cyan-500/20! text-cyan-400!">Discuss Automation →</Button>
              </Link>
           </Card>

           <Card className="p-10 border-[#6C63FF]/20 bg-linear-to-br from-[#6C63FF]/5 to-transparent relative overflow-hidden group hover:border-[#6C63FF]/40">
              <div className="absolute -right-12 -top-12 text-[10rem] opacity-[0.03] group-hover:opacity-[0.07] transition-opacity">🤝</div>
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                 <span className="w-10 h-10 rounded-xl bg-[#6C63FF]/10 flex items-center justify-center text-xl">🤝</span>
                 Monthly Retainer
              </h2>
              <p className="text-slate-400 font-light mb-6">
                A long-term partnership providing dedicated support, continuous development, and priority maintenance for your systems.
              </p>
              <p className="text-2xl font-bold text-[#6C63FF] mb-8">₹30,000 - ₹60,000 <span className="text-xs font-light text-slate-500 uppercase tracking-widest">/ month</span></p>
              <Link href="https://wa.me/916006121193?text=Hi%20Kumail!%20I'm%20interested%20in%20a%20monthly%20retainer%20partnership." target="_blank">
                <Button variant="outline" className="h-12 px-8 border-[#6C63FF]/20! text-[#6C63FF]!">Explore Partnership →</Button>
              </Link>
           </Card>
        </div>

        <div className="grid gap-12 lg:grid-cols-3">
           <div className="lg:col-span-1 space-y-6">
              <h2 className="text-3xl font-bold text-white">Payment & FAQs</h2>
              <p className="text-slate-400 font-light">
                Everything you need to know about starting a project. If you have more questions, feel free to reach out.
              </p>
              <div className="p-8 glass-card border-white/5 rounded-3xl space-y-4">
                 <p className="text-xs font-bold uppercase tracking-widest text-[#d4af37]">Preferred Methods</p>
                 <div className="space-y-2 text-slate-300">
                    <p className="flex items-center gap-2">💳 <span className="font-medium">UPI:</span> Provided on Request</p>
                    <p className="flex items-center gap-2">🏦 <span className="font-medium">Bank:</span> Details on Request</p>
                 </div>
                 <div className="pt-4 border-t border-white/5">
                    <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">Standard Terms</p>
                    <p className="text-sm text-slate-400 mt-2">50% Commitment to start project <br /> 50% On successful delivery</p>
                 </div>
              </div>
           </div>
           
           <div className="lg:col-span-2 grid gap-4">
              {faqs.map((f) => (
                <Card key={f.question} className="p-8 hover:border-[#d4af37]/30 transition-colors">
                  <h4 className="text-lg font-bold text-white mb-3">{f.question}</h4>
                  <p className="text-sm text-slate-400 font-light leading-relaxed">{f.answer}</p>
                </Card>
              ))}
           </div>
        </div>
      </section>
    </div>
  );
}
