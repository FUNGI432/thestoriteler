import { useRef } from "react";
import { m, useInView } from "framer-motion";
import vimalImg from "@/assets/founders-note.png"; // Placeholder for now or actual image
import kamalImg from "@/assets/saath-phere/hero.png"; // Placeholder for now or actual image

/* ─── Helpers ─── */
function FadeIn({ children, className = "", delay = 0, x = 0, y = 30 }: { children: React.ReactNode; className?: string; delay?: number; x?: number; y?: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  return (
    <m.div
      ref={ref}
      initial={{ opacity: 0, x, y }}
      animate={isInView ? { opacity: 1, x: 0, y: 0 } : {}}
      transition={{ duration: 0.8, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </m.div>
  );
}

export default function FoundersNote() {
  return (
    <div className="w-full bg-[#13101C] min-h-screen text-white pt-32 pb-60 relative overflow-x-hidden">
      
      {/* Background Glows */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-[10%] left-[-15%] w-[60vw] h-[60vw] bg-[#ca45ff] opacity-[0.03] blur-[180px] rounded-full" />
        <div className="absolute top-[50%] right-[-15%] w-[55vw] h-[55vw] bg-[#1c4eff] opacity-[0.03] blur-[180px] rounded-full" />
        <div className="absolute bottom-[0%] left-[10%] w-[40vw] h-[40vw] bg-[#fe881b] opacity-[0.02] blur-[150px] rounded-full" />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-10">
        
        {/* Header */}
        <header className="mb-24 text-center lg:text-left">
           <FadeIn>
              <h3 className="text-[#ca45ff] text-[16px] md:text-[20px] font-black tracking-[8px] uppercase mb-6 italic">Founder’s Note</h3>
              <h1 className="text-[40px] md:text-[90px] font-black uppercase tracking-tighter leading-none mb-4">
                 Building <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ca45ff] via-[#8545ff] to-[#1c4eff]">More Than</span> Brands
              </h1>
              <div className="w-24 h-[2px] bg-gradient-to-r from-[#ca45ff] to-transparent mx-auto lg:mx-0" />
           </FadeIn>
        </header>

        {/* Founder 1: Mr. Vimal Gandhi */}
        <section className="mb-40">
           <div className="grid lg:grid-cols-12 gap-20 items-center">
              <FadeIn className="lg:col-span-7">
                 <div className="relative p-1 bg-white/5 rounded-[50px] mb-8 lg:mb-0">
                    <div className="bg-[#13101C] rounded-[50px] p-10 md:p-16 border border-white/10">
                       <span className="text-[#ca45ff] text-xs font-black uppercase tracking-[6px] mb-6 block italic">✍️ Mr. Vimal Gandhi</span>
                       <h2 className="text-[24px] md:text-[36px] font-black uppercase tracking-tight text-white mb-10 leading-tight italic decoration-[#ca45ff]/20 underline underline-offset-8">
                          “We didn’t just build events — we built platforms where businesses found their turning points.”
                       </h2>
                       <div className="text-[17px] md:text-[19px] text-[#A69FB6] leading-[1.8] font-light space-y-6">
                          <p>For me, this journey has never just been about events — it has been about people, relationships, and the belief that the right platform can change the course of a business.</p>
                          <p>Over the last <span className="text-white font-black">16+ years</span>, we’ve had the privilege of building <span className="text-white font-black">75+ national-level events</span>. Each one came with its own challenges, its own energy, and its own story. But what stayed constant was the intent — <span className="text-[#ca45ff]">to create something meaningful, something that truly adds value.</span></p>
                          <p>I’ve seen first-hand how a single connection at the right time can transform a business. That belief is what drives everything we do even today.</p>
                          <p>The Stori Teler is not just a company — it’s a reflection of that journey, those learnings, and that commitment to keep building platforms that matter. And honestly, we’re still as passionate about it as we were on day one.</p>
                       </div>
                    </div>
                 </div>
              </FadeIn>
              <FadeIn className="lg:col-span-5" delay={0.2} x={30}>
                 <div className="relative aspect-[4/5] rounded-[50px] overflow-hidden border border-white/10 group grayscale hover:grayscale-0 transition-all duration-1000">
                    <img src={vimalImg} alt="Vimal Gandhi Vision" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#ca45ff]/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                 </div>
              </FadeIn>
           </div>
        </section>

        {/* Founder 2: Mr. Kamal Puglia */}
        <section className="mb-40">
           <div className="grid lg:grid-cols-12 gap-20 items-center">
              <FadeIn className="lg:col-span-5 order-2 lg:order-1" delay={0.2} x={-30}>
                 <div className="relative aspect-[4/5] rounded-[50px] overflow-hidden border border-white/10 group grayscale hover:grayscale-0 transition-all duration-1000">
                    <img src={kamalImg} alt="Kamal Puglia Impact" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1c4eff]/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                 </div>
              </FadeIn>
              <FadeIn className="lg:col-span-7 order-1 lg:order-2">
                 <div className="relative p-1 bg-white/5 rounded-[50px]">
                    <div className="bg-[#13101C] rounded-[50px] p-10 md:p-16 border border-white/10">
                       <span className="text-[#1c4eff] text-xs font-black uppercase tracking-[6px] mb-6 block italic">✍️ Mr. Kamal Puglia</span>
                       <h2 className="text-[24px] md:text-[36px] font-black uppercase tracking-tight text-white mb-10 leading-tight italic decoration-[#1c4eff]/20 underline underline-offset-8">
                          “For us, it was never about creating events — it was always about creating impact that lasts beyond them.”
                       </h2>
                       <div className="text-[17px] md:text-[19px] text-[#A69FB6] leading-[1.8] font-light space-y-6">
                          <p>Sixteen years in this industry has been more than a profession — it’s been a journey filled with experiences, risks, learnings, and moments that stay with you.</p>
                          <p>Having been part of <span className="text-white font-black">75+ large-scale, national events</span>, I’ve seen what goes into creating something truly impactful. It’s not just planning or execution — it’s the people behind it, the intent, and the responsibility of <span className="text-[#1c4eff]">delivering something that businesses rely on.</span></p>
                          <p>What excites me even today is not just the scale, but the outcomes — the deals, the growth, the opportunities that come out of every platform we build.</p>
                          <p>With The Stori Teler, our vision is simple but strong — to keep raising the bar, to keep creating experiences that feel larger than life, yet remain deeply meaningful.</p>
                          <p className="italic underline underline-offset-8 decoration-white/10">Because in the end, it’s not just about what we create — it’s about what it creates for others.</p>
                       </div>
                    </div>
                 </div>
              </FadeIn>
           </div>
        </section>

        {/* Brand Birth Section */}
        <section className="py-20 border-t border-white/5 text-center">
           <FadeIn>
              <p className="text-[20px] md:text-[32px] lg:text-[40px] font-black uppercase tracking-tight text-white leading-tight max-w-5xl mx-auto mb-10">
                 WITH MULTIPLE VENTURES IN OUR LIVES WE BUILT SOMETHING THAT WOULD CREATE AN <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ca45ff] to-[#fe881b]">EVER LASTING EXPERINCES</span> AND HENCE THE STORI TELER WAS BORN
              </p>
              <m.div 
                 animate={{ scale: [1, 1.1, 1] }}
                 transition={{ repeat: Infinity, duration: 4 }}
                 className="w-16 h-[2px] bg-[#fe881b] mx-auto opacity-50" 
              />
           </FadeIn>
        </section>

      </div>
    </div>
  );
}
