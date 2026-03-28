import { useRef } from "react";
import { m, useScroll, useSpring, useInView } from "framer-motion";
import journeyFoundationImg from "@/assets/journey/foundation.png";
import journeyScalingImg from "@/assets/journey/scaling.png";
import journeyFutureImg from "@/assets/journey/future.png";

/* ─── Data ─── */
const timelinePhases = [
  {
    phase: "Phase 1",
    label: "Building Industry Roots",
    title: "The Foundation",
    description: "Deep involvement in textile exhibitions. Strong network of manufacturers & buyers. Understanding real market gaps.",
    image: journeyFoundationImg,
    side: "right"
  },
  {
    phase: "Phase 2",
    label: "From Events to Vision",
    title: "The Shift",
    description: "Identifying the gap between visibility & growth. Moving beyond execution into strategy. Beginning of brand-focused thinking.",
    side: "left"
  },
  {
    phase: "Phase 3",
    label: "A New Beginning",
    title: "The Birth of The Stori Teler",
    description: "Formation of The Stori Teler. Expanding into branding & digital marketing. Focus on storytelling-led growth.",
    side: "right"
  },
  {
    phase: "Phase 4",
    label: "Scaling Across Markets",
    title: "Expansion",
    description: "Presence in Delhi, Surat, Gandhinagar, Kolkata. Launch of premium exhibitions & summits. Stronger buyer-seller ecosystems.",
    image: journeyScalingImg,
    side: "left"
  },
  {
    phase: "Phase 5",
    label: "A Growth Ecosystem",
    title: "Today",
    description: "Events + Digital + Content under one roof. Helping brands scale with strategy. Building industry influence.",
    side: "right"
  },
  {
    phase: "Phase 6",
    label: "What We’re Building Next",
    title: "The Future",
    description: "Expanding into new markets. Creating larger platforms. Becoming India’s leading story-driven growth company.",
    image: journeyFutureImg,
    side: "left"
  }
];

const milestones = [
  "Successful large-scale exhibitions",
  "Strong industry network across India",
  "Expansion into digital marketing & production",
  "Launch of premium events like summits & expos"
];

/* ─── Components ─── */
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

export default function OurJourney() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"]
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="w-full bg-[#13101C] min-h-screen text-white pt-32 pb-20 relative overflow-x-hidden">
      
      {/* Background Glows */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-[10%] left-[-15%] w-[60vw] h-[60vw] bg-[#ca45ff] opacity-[0.03] blur-[180px] rounded-full" />
        <div className="absolute top-[50%] right-[-15%] w-[55vw] h-[55vw] bg-[#1c4eff] opacity-[0.03] blur-[180px] rounded-full" />
      </div>

      <div className="relative z-10">
        
        {/* HERO SECTION */}
        <section className="max-w-[1400px] mx-auto px-6 lg:px-10 mb-32 text-center lg:text-left">
          <m.h3 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[16px] md:text-[20px] text-[#A69FB6] font-medium tracking-[4px] uppercase mb-4"
          >
            Since the Beginning
          </m.h3>
          <m.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-[50px] md:text-[80px] lg:text-[100px] font-black uppercase tracking-tighter leading-none mb-8"
          >
            From <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ca45ff] via-[#8545ff] to-[#1c4eff]">Vision</span> to Impact
          </m.h1>
          <m.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-[18px] md:text-[22px] text-[#bdaee7] max-w-2xl font-light leading-relaxed"
          >
            A journey built on connections, creativity, and creating real business growth.
          </m.p>
        </section>

        {/* INTRO SECTION */}
        <section className="max-w-[1400px] mx-auto px-6 lg:px-10 py-20 mb-32">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeIn>
              <h2 className="text-[32px] md:text-[48px] font-black uppercase tracking-tight leading-[1.1] mb-10">
                The Stori Teler didn’t start as just a company — it started as a vision.
              </h2>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="text-[18px] md:text-[20px] text-[#A69FB6] leading-[1.8] font-light space-y-6">
                <p>
                  From building strong industry relationships to executing large-scale exhibitions, our journey has always been rooted in one thing — <span className="text-white font-medium">creating meaningful impact for businesses.</span>
                </p>
                <p>
                  Today, we stand as a platform where strategy, storytelling, and scale come together.
                </p>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* TIMELINE SECTION */}
        <section ref={containerRef} className="relative max-w-[1400px] mx-auto px-6 lg:px-10 py-20 mb-40 overflow-hidden">
          
          {/* Timeline Center Line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-[2px] bg-white/[0.05] -translate-x-1/2" />
          
          {/* Animated Progress Line */}
          <m.div 
            style={{ scaleY, originY: 0 }}
            className="absolute left-6 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#ca45ff] via-[#1c4eff] to-[#fe881b] -translate-x-1/2 hidden md:block"
          />

          {timelinePhases.map((phase, index) => (
            <div key={index} className={`relative flex items-center justify-between mb-24 md:mb-40 group ${phase.side === 'left' ? 'md:flex-row-reverse' : ''}`}>
              
              {/* Timeline Dot */}
              <div className="absolute left-0 md:left-1/2 w-4 h-4 rounded-full bg-[#13101C] border-2 border-[#ca45ff] -translate-x-1/2 z-20 group-hover:scale-150 transition-transform duration-500 shadow-[0_0_15px_rgba(202,69,255,0.5)]" />
              
              {/* Content Card */}
              <div className="w-full md:w-[45%] pl-10 md:pl-0">
                <FadeIn x={phase.side === 'left' ? -40 : 40} y={0} delay={0.1}>
                  <div className="relative p-8 md:p-12 rounded-[40px] border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] transition-all duration-700 backdrop-blur-xl group overflow-hidden">
                    
                    {/* Background Phase Glow */}
                    <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#ca45ff] opacity-0 group-hover:opacity-[0.1] blur-[60px] rounded-full transition-all duration-700" />
                    
                    <span className="inline-block px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-[#ca45ff] text-[12px] font-bold uppercase tracking-[2px] mb-6 shadow-xl">
                      {phase.phase}
                    </span>
                    
                    <h3 className="text-[28px] md:text-[36px] font-black uppercase tracking-tighter leading-none mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#ca45ff] group-hover:to-[#1c4eff] transition-all duration-500">
                      {phase.title}
                    </h3>
                    
                    <p className="text-[16px] md:text-[18px] text-[#bdaee7] font-medium italic mb-6">
                      “{phase.label}”
                    </p>
                    
                    <p className="text-[17px] text-[#A69FB6] leading-relaxed font-light">
                      {phase.description}
                    </p>

                    {phase.image && (
                      <div className="mt-8 rounded-2xl overflow-hidden aspect-[16/9] border border-white/5 shadow-2xl">
                        <img 
                          src={phase.image} 
                          alt={phase.title} 
                          className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000"
                        />
                      </div>
                    )}
                  </div>
                </FadeIn>
              </div>
              
              {/* Spacer for MD screens to keep the alignment centered */}
              <div className="hidden md:block w-[45%]" />
            </div>
          ))}
        </section>

        {/* MILESTONES SECTION */}
        <section className="max-w-[1400px] mx-auto px-6 lg:px-10 py-20 mb-32 relative">
          <div className="absolute top-[20%] right-[-10%] w-[40vw] h-[40vw] bg-[#ca45ff] opacity-[0.02] blur-[150px] rounded-full" />
          
          <FadeIn className="text-center mb-20">
            <h3 className="text-[#ca45ff] text-sm uppercase tracking-[4px] font-bold mb-4">Milestones</h3>
            <h2 className="text-[40px] md:text-[60px] lg:text-[80px] font-black uppercase tracking-tighter leading-[0.9] mb-8">
              Moments That <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ca45ff] to-[#1c4eff]">Define Us</span>
            </h2>
          </FadeIn>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {milestones.map((item, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="h-full group relative p-8 rounded-[32px] border border-white/10 bg-white/[0.02] hover:bg-white/[0.05] hover:border-[#ca45ff]/40 transition-all duration-500 overflow-hidden text-center flex flex-col items-center justify-center">
                   <div className="absolute -bottom-10 -right-10 w-24 h-24 bg-[#ca45ff] opacity-0 group-hover:opacity-[0.1] blur-[40px] rounded-full transition-all duration-700" />
                   <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center mb-6 text-[#ca45ff] group-hover:scale-110 transition-transform shadow-xl">
                      ✦
                   </div>
                   <p className="text-[16px] md:text-[18px] font-black uppercase text-white tracking-widest leading-relaxed">
                     {item}
                   </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </section>

        {/* PHILOSOPHY SECTION */}
        <section className="max-w-[1400px] mx-auto px-6 lg:px-10 py-32 mb-32 border-y border-white/5 relative">
          <div className="absolute bottom-0 left-[-10%] w-[30vw] h-[30vw] bg-[#1c4eff] opacity-[0.03] blur-[120px] rounded-full" />
          
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeIn>
              <h3 className="text-[#ca45ff] text-sm uppercase tracking-[4px] font-bold mb-4 underline underline-offset-8">Our Philosophy</h3>
              <h2 className="text-[36px] md:text-[56px] font-black uppercase tracking-tight leading-[1] mb-6">
                What Has Stayed <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-[#ca45ff] to-[#1c4eff]">Constant</span>
              </h2>
              <p className="text-[22px] md:text-[28px] font-black uppercase text-white/40 tracking-widest">
                Growth isn’t accidental — <span className="text-white">it’s designed.</span>
              </p>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="text-[18px] md:text-[20px] text-[#A69FB6] leading-[1.8] font-light italic border-l-4 border-[#ca45ff] pl-8">
                Every step in our journey reflects our belief that businesses don’t just need visibility — they need <span className="text-white font-medium">direction, positioning, and execution</span> that delivers results.
              </div>
            </FadeIn>
          </div>
        </section>

        {/* CLOSING SECTION */}
        <section className="max-w-[1000px] mx-auto px-6 lg:px-10 py-32 text-center pb-40 relative">
          <FadeIn>
            <m.div 
               animate={{ scale: [1, 1.05, 1], opacity: [1, 0.8, 1] }}
               transition={{ duration: 4, repeat: Infinity }}
               className="w-20 h-20 rounded-full border border-[#ca45ff]/40 flex items-center justify-center mx-auto mb-10"
            >
               <div className="w-4 h-4 rounded-full bg-[#ca45ff] animate-pulse shadow-[0_0_20px_rgba(202,69,255,0.8)]" />
            </m.div>
            <h2 className="text-[40px] md:text-[70px] font-black uppercase tracking-tighter leading-none mb-10">
              This Is Just <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ca45ff] to-[#1c4eff]">the Beginning</span>
            </h2>
            <p className="text-[18px] md:text-[22px] text-[#A69FB6] font-light max-w-2xl mx-auto mb-16 italic">
              Our journey is still unfolding. And we’re building it with brands that are ready to grow, lead, and scale.
            </p>
            
            <a 
              href="mailto:office@thestoriteler.com" 
              className="group relative inline-flex p-[2px] rounded-full bg-gradient-to-r from-[#ca45ff] to-[#1c4eff] hover:shadow-[0_0_40px_rgba(202,69,255,0.4)] transition-shadow"
            >
              <div className="bg-[#13101C] rounded-full px-12 py-5 group-hover:bg-transparent transition-colors duration-500">
                <span className="text-white font-bold text-[18px] uppercase tracking-[3px]">Start Your Story</span>
              </div>
            </a>
          </FadeIn>
        </section>

      </div>
    </div>
  );
}
