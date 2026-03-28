import { useRef } from "react";
import { m, useInView } from "framer-motion";

/* ─── Data ─── */
const services = [
  {
    title: "Social Media Strategy",
    desc: "Content planning, platform-specific strategies, and consistent brand positioning built to create purposeful visibility.",
    bgColor: "bg-[#1a1625]",
    textColor: "text-white"
  },
  {
    type: "empty",
    content: "STRATEGY"
  },
  {
    title: "Performance Marketing",
    desc: "Paid ads (Meta, Google), lead generation, and retargeting funnels focused strictly on ROI, not just reach.",
    bgColor: "bg-[#251b2e]",
    textColor: "text-white"
  },
  {
    type: "empty",
    content: "EXECUTION"
  },
  {
    title: "Content Strategy",
    desc: "High-conversion content planning, reels, and audience-focused storytelling that attracts and converts.",
    bgColor: "bg-[#1a1625]",
    textColor: "text-white"
  },
  {
    type: "empty",
    content: "RESULTS"
  },
  {
    title: "Brand Positioning",
    desc: "Defining market presence, messaging strategy, and creating authority to help you stand out in crowded niches.",
    bgColor: "bg-[#251b2e]",
    textColor: "text-white"
  },
  {
    type: "empty",
    content: "GROWTH"
  },
  {
    title: "SEO & Digital Presence",
    desc: "Search and profile optimization to make your brand both discoverable and credible across platforms.",
    bgColor: "bg-[#1a1625]",
    textColor: "text-white"
  }
];

const approachSteps = [
  { num: "01", title: "Understand", desc: "Business, audience, and goals" },
  { num: "02", title: "Strategize", desc: "Content, ads, and positioning" },
  { num: "03", title: "Execute", desc: "Campaigns, creatives, and distribution" },
  { num: "04", title: "Optimize & Scale", desc: "Data-driven improvements for growth" }
];

const targetAudience = [
  "Textile manufacturers",
  "Fashion & apparel brands",
  "B2B businesses",
  "Emerging brands looking to scale",
  "Businesses struggling with leads & positioning"
];

const differences = [
  "Deep expertise in B2B & textile industry marketing",
  "Focus on lead generation, not vanity metrics",
  "Strategy-first, execution-driven approach",
  "Integrated with events & content production",
  "Built for real business growth"
];

/* ─── Components ─── */
function FadeIn({ children, className = "", delay = 0, y = 30 }: { children: React.ReactNode; className?: string; delay?: number; y?: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  return (
    <m.div
      ref={ref}
      initial={{ opacity: 0, y }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </m.div>
  );
}

export default function Marketing() {
  return (
    <div className="w-full bg-[#13101C] min-h-screen text-white relative overflow-x-hidden">
      
      {/* Background Abstract Glows */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-[10%] left-[-15%] w-[60vw] h-[60vw] bg-[#ca45ff] opacity-[0.03] blur-[150px] rounded-full" />
        <div className="absolute top-[50%] right-[-15%] w-[55vw] h-[55vw] bg-[#1c4eff] opacity-[0.03] blur-[150px] rounded-full" />
        <div className="absolute bottom-[0%] left-[20%] w-[45vw] h-[45vw] bg-[#fe881b] opacity-[0.03] blur-[150px] rounded-full" />
      </div>

      <div className="relative z-10">
        
        {/* 1. HERO SECTION */}
        <section className="max-w-[1400px] mx-auto px-6 lg:px-10 pt-40 pb-32 text-center lg:text-left">
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-8">
              <m.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-block px-5 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-8"
              >
                <span className="text-[#ca45ff] text-sm uppercase tracking-[4px] font-bold">Strategic Growth</span>
              </m.div>
              <m.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-[44px] md:text-[80px] lg:text-[100px] font-black uppercase tracking-tighter leading-[0.9] mb-8"
              >
                Marketing That <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ca45ff] via-[#1c4eff] to-[#ca45ff] bg-[length:200%_auto] animate-gradient-flow">Doesn’t Just Reach</span>
                <br /> — It Converts
              </m.h1>
              <m.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-[18px] md:text-[24px] text-[#A69FB6] font-light max-w-3xl leading-relaxed mb-12"
              >
                Strategic digital marketing designed to generate leads, build authority, and drive real business growth.
              </m.p>
              <m.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="flex flex-col sm:flex-row items-center gap-6"
              >
                <button className="w-full sm:w-auto px-12 py-5 rounded-full bg-gradient-to-r from-[#ca45ff] to-[#1c4eff] text-white font-black text-[16px] uppercase tracking-[2px] transition-all hover:shadow-[0_0_40px_rgba(202,69,255,0.4)]">
                  Grow My Brand
                </button>
                <button className="w-full sm:w-auto px-12 py-5 rounded-full border border-white/10 bg-white/5 text-white font-bold text-[16px] uppercase tracking-[2px] transition-all hover:bg-white/10">
                  Get a Strategy Call
                </button>
              </m.div>
            </div>
            {/* Abstract visual element */}
            <m.div 
               initial={{ opacity: 0, scale: 0.9 }}
               animate={{ opacity: 1, scale: 1 }}
               transition={{ duration: 1, delay: 0.4 }}
               className="lg:col-span-4 hidden lg:block"
            >
               <div className="relative aspect-square rounded-[60px] border border-white/10 bg-gradient-to-br from-white/5 to-transparent overflow-hidden">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,#ca45ff20,transparent)] animate-pulse" />
                  <div className="absolute bottom-10 left-10 p-8 rounded-3xl border border-white/5 bg-black/40 backdrop-blur-xl">
                     <p className="text-[40px] font-black text-[#ca45ff]">92%</p>
                     <p className="text-xs uppercase tracking-[2px] text-white/60">Conversion Lift</p>
                  </div>
               </div>
            </m.div>
          </div>
        </section>

        {/* 2. INTRO SECTION */}
        <section className="max-w-[1400px] mx-auto px-6 lg:px-10 py-32 border-y border-white/5">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <FadeIn>
              <h2 className="text-[36px] md:text-[52px] font-black uppercase tracking-tight leading-[1] mb-8">
                Most brands are visible. <br />
                <span className="text-white/40 italic">Very few are remembered.</span>
              </h2>
              <div className="w-20 h-1 bg-[#ca45ff]" />
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="text-[18px] md:text-[20px] text-[#A69FB6] font-light leading-relaxed space-y-6">
                <p>
                  At The Stori Teler, we don’t believe in marketing for the sake of presence. 
                  We build <span className="text-white font-medium">structured, result-oriented marketing systems</span> that help brands attract the right audience, convert them into customers, and scale consistently.
                </p>
                <p className="text-[#ca45ff] font-bold uppercase tracking-widest text-[16px]">
                  This is not about likes. This is about leads, positioning, and growth.
                </p>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* 3. WHAT WE DO (CHESS BOARD) */}
        <section className="py-32">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
            <FadeIn className="text-center mb-24">
              <h3 className="text-[#ca45ff] text-sm uppercase tracking-[4px] font-bold mb-6 italic">Built for Growth</h3>
              <h2 className="text-[40px] md:text-[80px] font-black uppercase tracking-tighter leading-none mb-4">
                Structured <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ca45ff] to-[#1c4eff]">Systems</span>
              </h2>
            </FadeIn>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border border-white/10 rounded-[40px] overflow-hidden">
              {services.map((svc, i) => (
                <FadeIn key={i} delay={i * 0.05} y={0} className="w-full aspect-square md:aspect-auto lg:aspect-square">
                  {svc.type === 'empty' ? (
                    <div className="w-full h-full flex flex-col items-center justify-center bg-transparent border-[0.5px] border-white/5 relative group p-10">
                       <div className="w-12 h-12 rounded-full border border-white/5 flex items-center justify-center text-white/20 group-hover:scale-125 group-hover:text-[#ca45ff] transition-all duration-700">
                          ✦
                       </div>
                       <span className="absolute bottom-10 text-[10px] uppercase font-black tracking-[8px] text-white/10 group-hover:text-white/30 transition-all">
                          {svc.content}
                       </span>
                    </div>
                  ) : (
                    <div className={`${svc.bgColor} w-full h-full p-10 lg:p-12 flex flex-col justify-between border-[0.5px] border-white/5 group hover:bg-[#ca45ff]/10 hover:border-[#ca45ff]/30 transition-all duration-700`}>
                      <h4 className="text-[24px] lg:text-[28px] font-black uppercase tracking-tight text-white mb-6 group-hover:translate-x-2 transition-transform duration-500">
                        {svc.title}
                      </h4>
                      <p className="text-[14px] lg:text-[16px] text-[#A69FB6] leading-relaxed font-light group-hover:text-white transition-colors duration-500">
                        {svc.desc}
                      </p>
                    </div>
                  )}
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* 4. OUR APPROACH */}
        <section className="py-32 bg-white/[0.02]">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
             <div className="grid lg:grid-cols-2 gap-20 items-center">
                <FadeIn>
                   <h3 className="text-[#ca45ff] text-sm uppercase tracking-[4px] font-bold mb-6">Execution Strategy</h3>
                   <h2 className="text-[40px] md:text-[60px] font-black uppercase tracking-tight leading-[1] mb-10">
                      Not Random. <br /> <span className="text-[#ca45ff]">Structured.</span>
                   </h2>
                   <p className="text-[20px] text-[#A69FB6] font-light max-w-xl">
                      Step-by-step methodology to transform your brand identity into a lead-generating powerhouse.
                   </p>
                </FadeIn>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                   {approachSteps.map((step, i) => (
                     <FadeIn key={i} delay={i * 0.1}>
                        <div className="p-8 rounded-[32px] border border-white/10 bg-white/5 hover:bg-[#ca45ff]/5 hover:border-[#ca45ff]/20 transition-all duration-500 group">
                           <span className="text-[14px] font-black text-[#ca45ff] tracking-[4px] mb-4 block group-hover:translate-x-1 transition-transform">STEP {step.num}</span>
                           <h4 className="text-[20px] font-black uppercase text-white mb-2">{step.title}</h4>
                           <p className="text-[14px] text-[#A69FB6] font-light">{step.desc}</p>
                        </div>
                     </FadeIn>
                   ))}
                </div>
             </div>
          </div>
        </section>

        {/* 5. WHO THIS IS FOR */}
        <section className="py-32 border-b border-white/5">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
            <FadeIn className="text-center mb-16">
              <h2 className="text-[32px] md:text-[48px] font-black uppercase tracking-tight">Built For <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ca45ff] to-[#1c4eff]">Impact</span></h2>
            </FadeIn>
            <div className="flex flex-wrap justify-center gap-4">
               {targetAudience.map((tag, i) => (
                 <FadeIn key={i} delay={i * 0.05} y={20}>
                    <div className="px-8 py-4 rounded-full border border-white/10 bg-white/[0.03] text-white/80 font-medium hover:bg-[#ca45ff]/10 hover:border-[#ca45ff]/40 transition-all cursor-default">
                       {tag}
                    </div>
                 </FadeIn>
               ))}
            </div>
          </div>
        </section>

        {/* 8. INDUSTRY FOCUS */}
        <section className="py-32 relative">
           <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
              <div className="relative p-12 lg:p-20 rounded-[60px] overflow-hidden border border-white/10 bg-gradient-to-br from-[#1a1625] to-transparent">
                 <div className="absolute top-[10%] right-[-10%] w-[30vw] h-[30vw] bg-[#ca45ff] opacity-[0.05] blur-[120px] rounded-full" />
                 
                 <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <FadeIn>
                       <h3 className="text-[#ca45ff] text-sm uppercase tracking-[4px] font-bold mb-6 underline underline-offset-8 decoration-2">Industry Focus</h3>
                       <h2 className="text-[32px] md:text-[56px] font-black uppercase tracking-tight leading-[1] mb-8">
                          Specialized in <br />
                          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ca45ff] to-[#fe881b]">B2B Textile Marketing</span>
                       </h2>
                       <p className="text-[18px] md:text-[20px] text-[#A69FB6] font-light italic border-l-2 border-[#ca45ff] pl-8 leading-relaxed mb-6">
                          We are one of the few marketing teams that truly understand wholesale buyer behavior, retailer targeting, and exhibition-based growth.
                       </p>
                       <div className="font-black text-xs uppercase tracking-[4px] text-white/30">👉 This gives your brand a strategic advantage.</div>
                    </FadeIn>
                    
                    <FadeIn delay={0.2}>
                       <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          {[
                            "Wholesale buyer behavior",
                            "Retailer targeting",
                            "Product-driven industry expertise",
                            "Exhibition-focused scaling"
                          ].map(v => (
                            <div key={v} className="p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-[#ca45ff]/40 transition-all">
                               <p className="text-sm font-bold uppercase tracking-wider text-white/80">{v}</p>
                            </div>
                          ))}
                       </div>
                    </FadeIn>
                 </div>
              </div>
           </div>
        </section>

        {/* 6. WHAT MAKES US DIFFERENT */}
        <section className="py-32 border-t border-white/5">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
             <div className="grid lg:grid-cols-2 gap-20 items-center">
                <FadeIn>
                   <h3 className="text-[#ca45ff] text-sm uppercase tracking-[4px] font-bold mb-6">The Difference</h3>
                   <h2 className="text-[40px] md:text-[60px] font-black uppercase tracking-tighter leading-none mb-10">
                      Strategy. <span className="text-white/40 italic">Execution.</span> Results.
                   </h2>
                   <p className="text-[18px] text-[#A69FB6] font-light max-w-xl italic">
                      "Marketing without results is just noise."
                   </p>
                </FadeIn>
                
                <div className="space-y-6">
                   {differences.map((m, i) => (
                     <FadeIn key={i} delay={i * 0.1}>
                        <div className="flex gap-4 items-center bg-white/[0.03] p-5 rounded-2xl border border-white/5 hover:border-[#ca45ff]/30 hover:bg-[#ca45ff]/5 transition-all duration-300 group">
                           <div className="w-10 h-10 rounded-full bg-[#ca45ff]/20 flex items-center justify-center text-[#ca45ff] group-hover:scale-110 transition-transform">✓</div>
                           <span className="text-[16px] md:text-[18px] font-medium text-[#bdaee7]">{m}</span>
                        </div>
                     </FadeIn>
                   ))}
                </div>
             </div>
          </div>
        </section>

        {/* 9. CALL TO ACTION */}
        <section className="py-32 pb-48 text-center relative">
          <div className="absolute bottom-0 right-0 w-[50vw] h-[50vw] bg-[#1c4eff] opacity-[0.03] blur-[150px] rounded-full" />
          
          <FadeIn className="max-w-[1000px] mx-auto px-6 lg:px-10">
            <m.div 
               animate={{ scale: [1, 1.1, 1], opacity: [1, 0.7, 1] }}
               transition={{ duration: 3, repeat: Infinity }}
               className="w-16 h-16 rounded-full border border-[#ca45ff]/40 flex items-center justify-center mx-auto mb-10"
            >
               <div className="w-3 h-3 rounded-full bg-[#ca45ff] shadow-[0_0_15px_rgba(202,69,255,0.8)]" />
            </m.div>
            <h2 className="text-[40px] md:text-[80px] font-black uppercase tracking-tighter leading-[0.9] mb-10">
              Ready to <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ca45ff] to-[#1c4eff]">Scale Your Brand?</span>
            </h2>
            <p className="text-[18px] md:text-[22px] text-[#A69FB6] font-light max-w-2xl mx-auto mb-16 italic leading-relaxed">
              If you’re serious about growth, we’re ready to build it with you. Not just marketing. Business growth.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
               <button className="group relative p-[2px] rounded-full bg-gradient-to-r from-[#ca45ff] to-[#1c4eff] hover:shadow-[0_0_50px_rgba(202,69,255,0.5)] transition-shadow">
                  <div className="bg-[#13101C] rounded-full px-14 py-5 group-hover:bg-transparent transition-colors duration-500">
                     <span className="text-white font-black text-[18px] uppercase tracking-[3px]">Book a Consultation</span>
                  </div>
               </button>
               <button className="px-14 py-5 rounded-full border border-white/10 bg-white/5 text-white font-bold text-[18px] uppercase tracking-[3px] hover:bg-white/10 transition-all">
                  Start Growing Today
               </button>
            </div>
          </FadeIn>
        </section>

      </div>
    </div>
  );
}
