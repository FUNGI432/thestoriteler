import { useRef } from "react";
import { m, useScroll, useSpring, useInView } from "framer-motion";

/* ─── Data ─── */
const timelineMonths = [
  { month: "APRIL", title: "INNAUGRATION", description: "The official birth of our journey." },
  { month: "MAY", title: "KOLKATA FABRIC EXPO", description: "First major footprint in the textile industry." },
  { month: "JUNE", title: "EXPANSION & PLANNING", description: "Setting the stage for a nationwide reach." },
  { month: "JULY", title: "BHARAT ETHNIC EXPO, DELHI TUFF ETHNIC EXPO, KOLKATA COUTURE EXPO", description: "Three major simultaneous exhibitions across key hubs." },
  { month: "AUGUST", title: "ANNOUNCED KERALA FASHION EXPO", description: "Pushing boundaries into the southern markets." },
  { month: "SEPTEMBER", title: "SHOOTS & EDITS", description: "Diversifying into high-end content and production." },
  { month: "OCTOBER", title: "INCREASED OUR CLIENT FAMILY FOR DIGITAL MARKETING", description: "A pivotal shift toward full-service brand growth." },
  { month: "NOVEMBER", title: "KERALA FASHION EXPO, KAWAAD - BAGRECHA WEDDING", description: "Grand scale events meets luxury wedding experiences." },
  { month: "DECEMBER", title: "SIGNATURE DRAPES BY DOLLY JAIN", description: "High-fashion collaborations and elite styling." },
  { month: "JANUARY", title: "ANNOUNCED SOUTH TEXTILE EXPO", description: "Strengthening the B2B textile ecosystem." },
  { month: "FEBRUARY", title: "ANNOUNCED ECO THREADS", description: "Pioneering sustainable and niche industry platforms." },
  { month: "MARCH", title: "ANNOUNCED BHARAT ETHNIC EXPO, DELHI TUFF ETHNIC EXPO, KOLKATA COUTURE EXPO", description: "Scaling the impact for the next cycle of growth." }
];

/* ─── Components ─── */
function FadeIn({ children, className = "", delay = 0, x = 0, y = 30 }: { children: React.ReactNode; className?: string; delay?: number; x?: number; y?: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
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
    <div className="w-full bg-[#13101C] min-h-screen text-white pt-32 pb-40 relative overflow-x-hidden">
      
      {/* Background Glows */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-[10%] left-[-15%] w-[60vw] h-[60vw] bg-[#ca45ff] opacity-[0.03] blur-[180px] rounded-full" />
        <div className="absolute top-[50%] right-[-15%] w-[55vw] h-[55vw] bg-[#1c4eff] opacity-[0.03] blur-[180px] rounded-full" />
        <div className="absolute bottom-[0%] left-[10%] w-[40vw] h-[40vw] bg-[#fe881b] opacity-[0.02] blur-[150px] rounded-full" />
      </div>

      <div className="relative z-10">
        
        {/* HERO SECTION */}
        <section className="max-w-[1400px] mx-auto px-6 lg:px-10 mb-32 text-center lg:text-left">
           <FadeIn>
              <h3 className="text-[#A69FB6] text-[16px] md:text-[20px] font-black tracking-[8px] uppercase mb-6 italic">Our Journey</h3>
              <h1 className="text-[50px] md:text-[100px] font-black uppercase tracking-tighter leading-none mb-8">
                 From <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ca45ff] via-[#8545ff] to-[#1c4eff]">Vision</span> to Impact
              </h1>
              <p className="text-[18px] md:text-[24px] text-[#bdaee7] max-w-2xl font-light leading-relaxed italic">
                 A journey built on connections, creativity, and creating real business growth.
              </p>
           </FadeIn>
        </section>

        {/* INTRO SECTION */}
        <section className="max-w-[1400px] mx-auto px-6 lg:px-10 py-20 mb-32 text-center md:text-left">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeIn>
              <h2 className="text-[32px] md:text-[48px] font-black uppercase tracking-tight leading-[1.1] mb-10">
                The Stori Teler didn’t start as just a company — it started as a vision.
              </h2>
            </FadeIn>
            <FadeIn delay={0.2} x={20}>
              <div className="text-[18px] md:text-[20px] text-[#A69FB6] leading-[1.8] font-light space-y-6 italic">
                <p>
                  From building strong industry relationships to executing large-scale exhibitions, our journey has always been rooted in one thing — <span className="text-white font-black uppercase tracking-wider not-italic">creating meaningful impact for businesses.</span>
                </p>
                <p>
                  Today, we stand as a platform where strategy, storytelling, and scale come together.
                </p>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* YEAR HEADER */}
        <section className="text-center mb-20 relative">
           <FadeIn>
              <span className="text-[80px] md:text-[150px] font-black text-transparent bg-clip-text bg-gradient-to-b from-white/10 to-transparent">2005</span>
           </FadeIn>
        </section>

        {/* MONTHLY TIMELINE SECTION */}
        <section ref={containerRef} className="relative max-w-[1400px] mx-auto px-6 lg:px-10 py-10 mb-40 overflow-hidden">
          
          {/* Central Vertical Connector (The "I") */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-[1px] md:w-[2px] bg-white/[0.05] -translate-x-1/2" />
          
          <m.div 
            style={{ scaleY, originY: 0 }}
            className="absolute left-6 md:left-1/2 top-0 bottom-0 w-[1px] md:w-[2px] bg-gradient-to-b from-[#ca45ff] via-[#1c4eff] to-[#fe881b] -translate-x-1/2"
          />

          {timelineMonths.map((item, index) => (
            <div key={index} className="relative mb-24 md:mb-32">
               {/* "I" Connector Extension */}
               <div className="absolute left-6 md:left-1/2 top-10 flex flex-col items-center -translate-x-1/2 pointer-events-none opacity-20 group-hover:opacity-100 transition-opacity">
                  <div className="w-[1px] md:w-[2px] h-20 bg-white/20" />
               </div>

               <div className={`flex flex-col md:flex-row items-center justify-between group ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
                  {/* Timeline Dot & Label */}
                  <div className="absolute left-[24px] md:left-1/2 w-4 h-4 rounded-full bg-[#13101C] border-2 border-[#ca45ff] -translate-x-1/2 z-20 group-hover:scale-150 transition-all duration-500 shadow-[0_0_15px_rgba(202,69,255,0.4)]" />
                  
                  {/* Content Card */}
                  <div className="w-full md:w-[45%] pl-14 md:pl-0">
                    <FadeIn x={index % 2 !== 0 ? -30 : 30} y={0} delay={0.05}>
                      <div className="relative p-8 md:p-10 rounded-[35px] border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-700 backdrop-blur-xl group overflow-hidden">
                        <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#ca45ff] opacity-0 group-hover:opacity-[0.05] blur-[60px] rounded-full transition-all duration-700" />
                        
                        <div className="flex flex-col mb-4">
                           <span className="text-[#ca45ff] text-[12px] md:text-[14px] font-black uppercase tracking-[6px] mb-2">{item.month}</span>
                           <h3 className="text-[18px] md:text-[24px] font-black uppercase tracking-tight text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#ca45ff] group-hover:to-[#fe881b] transition-all duration-500">
                             {item.title}
                           </h3>
                        </div>
                        <p className="text-[14px] md:text-[16px] text-[#A69FB6] leading-relaxed font-light italic">
                          {item.description}
                        </p>
                      </div>
                    </FadeIn>
                  </div>
                  
                  {/* Spacer for MD screens */}
                  <div className="hidden md:block w-[45%]" />
               </div>
            </div>
          ))}
        </section>

        {/* CLOSING SECTION */}
        <section className="max-w-[1200px] mx-auto px-6 lg:px-10 py-32 text-center pb-60 relative">
           <FadeIn>
              <div className="mb-10 text-white/20 font-black uppercase tracking-[15px] text-xs md:text-sm">And this is just the beginning</div>
              <h2 className="text-[40px] md:text-[80px] font-black uppercase tracking-tighter leading-none mb-10">
                 WE THANK ALL WHO HAVE BEEN <br />A PART OF THIS <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ca45ff] via-[#8545ff] to-[#fe881b]">MONUMENTAL JOURNEY!</span>
              </h2>
              <div className="w-24 h-[1px] bg-white/10 mx-auto" />
           </FadeIn>
        </section>

      </div>
    </div>
  );
}
