import { useRef } from "react";
import { m, useInView } from "framer-motion";
import heroImg from "@/assets/saath-phere/hero.png";
import decorImg from "@/assets/saath-phere/decor.png";
import ritualsImg from "@/assets/saath-phere/rituals.png";

/* ─── Data ─── */
const offerings = [
  {
    title: "End-to-End Planning",
    desc: "From concept to flawless execution. Venue coordination, guest management, and logistical precision.",
    icon: "✨"
  },
  {
    title: "Theme & Decor Design",
    desc: "Customized wedding themes, stage styling, and floral aesthetics crafted to reflect your personality.",
    icon: "🌸"
  },
  {
    title: "Experiential Curation",
    desc: "Unique entry concepts, ritual storytelling, and immersive guest experiences that stay with you.",
    icon: "🏮"
  },
  {
    title: "Production & Logistics",
    desc: "High-end lighting, sound, and on-ground coordination with our elite vendor network.",
    icon: "⚙️"
  },
  {
    title: "Cinematic Coverage",
    desc: "Premium wedding shoots, cinematic highlights, and social-ready content that captures every emotion.",
    icon: "🎥"
  }
];

const approachSteps = [
  { num: "01", title: "Understand Your Story", desc: "Your vision, traditions, and preferences are the foundation of everything we build." },
  { num: "02", title: "Curate the Experience", desc: "We design unique themes, interactive concepts, and a seamless event flow." },
  { num: "03", title: "Execute Seamlessly", desc: "Our team handles the complexity so you can enjoy every moment stress-free." },
  { num: "04", title: "Capture Every Moment", desc: "Turning fleeting memories into timeless cinematic content for generations." }
];

const milestones = [
  "Expertise in large-scale event execution",
  "Strong selective vendor & production network",
  "Focus on storytelling, not just decoration",
  "Seamless coordination & stress-free experience",
  "Premium, detail-oriented luxury approach"
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

export default function SaathPhere() {
  return (
    <div className="w-full bg-[#13101C] min-h-screen text-white relative overflow-x-hidden">
      
      {/* Background Warm Glows */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-[10%] left-[-15%] w-[60vw] h-[60vw] bg-[#fe881b] opacity-[0.03] blur-[180px] rounded-full" />
        <div className="absolute top-[40%] right-[-15%] w-[55vw] h-[55vw] bg-[#ca45ff] opacity-[0.03] blur-[180px] rounded-full" />
        <div className="absolute bottom-[10%] left-[20%] w-[40vw] h-[40vw] bg-[#fe881b] opacity-[0.03] blur-[180px] rounded-full" />
      </div>

      <div className="relative z-10">
        
        {/* 1. HERO SECTION */}
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0 scale-105">
            <img src={heroImg} alt="Saath Phere Hero" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-b from-[#13101C]/80 via-transparent to-[#13101C]" />
          </div>

          <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-10 text-center py-40">
            <m.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-block px-6 py-2 rounded-full border border-[#fe881b]/30 bg-[#fe881b]/5 backdrop-blur-md mb-10"
            >
              <span className="text-[#fe881b] text-sm uppercase tracking-[4px] font-bold">Saath Phere</span>
            </m.div>

            <m.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.1 }}
              className="text-[40px] md:text-[80px] lg:text-[110px] font-black uppercase tracking-tighter leading-[0.9] mb-10"
            >
              Where Every Moment<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#fe881b] via-[#ca45ff] to-[#fe881b] bg-[length:200%_auto] animate-gradient-flow">Becomes a Story</span>
            </m.h1>

            <m.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-[18px] md:text-[24px] text-[#e2d5ec] max-w-3xl mx-auto font-light leading-relaxed mb-16"
            >
              Curated wedding experiences designed with emotion, precision, and timeless elegance.
            </m.p>

            <m.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-6"
            >
              <a href="#contact" className="px-12 py-5 rounded-full bg-gradient-to-r from-[#fe881b] to-[#ca45ff] text-[#13101C] font-black text-[16px] uppercase tracking-[2px] hover:shadow-[0_0_40px_rgba(254,136,27,0.4)] transition-all">
                Plan Your Wedding
              </a>
              <a href="#gallery" className="px-12 py-5 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl text-white font-bold text-[16px] uppercase tracking-[2px] hover:bg-white/10 transition-all">
                View Wedding Stories
              </a>
            </m.div>
          </div>
        </section>

        {/* 2. INTRO SECTION */}
        <section className="max-w-[1400px] mx-auto px-6 lg:px-10 py-32 text-center lg:text-left">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <FadeIn>
              <h2 className="text-[36px] md:text-[56px] font-black uppercase tracking-tighter leading-[1] mb-8">
                Weddings are not just events — they are <span className="text-[#fe881b]">stories.</span>
              </h2>
              <p className="text-[20px] md:text-[24px] text-[#A69FB6] font-light leading-relaxed">
                Celebrating the union of souls with the same precision and scale we bring to India’s largest expos.
              </p>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="text-[18px] text-[#bdaee7] space-y-8 font-light leading-[1.8] border-l border-[#fe881b]/20 pl-10 h-full flex flex-col justify-center">
                <p>
                  With Saath Phere, The Stori Teler brings its expertise in large-scale event design into the world of luxury weddings — creating celebrations that are not only beautiful, but deeply personal and flawlessly executed.
                </p>
                <p className="text-white font-medium">
                  From intimate ceremonies to grand celebrations, every detail is crafted to reflect your story uniquely.
                </p>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* 3. WHAT WE OFFER */}
        <section className="bg-white/[0.02] py-32 border-y border-white/5">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
            <FadeIn className="text-center mb-20">
              <h3 className="text-[#fe881b] text-sm uppercase tracking-[4px] font-bold mb-4">Our Services</h3>
              <h2 className="text-[36px] md:text-[60px] font-black uppercase tracking-tighter leading-[0.95]">
                Curating <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#fe881b] to-[#ca45ff]">Grandeur</span>
              </h2>
            </FadeIn>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {offerings.map((svc, i) => (
                <FadeIn key={i} delay={i * 0.1}>
                  <div className="h-full group p-10 rounded-[40px] bg-[#1a1625] border border-white/10 hover:border-[#fe881b]/40 transition-all duration-500 overflow-hidden relative">
                    <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#fe881b] opacity-0 group-hover:opacity-[0.1] blur-[60px] rounded-full transition-all duration-700" />
                    <span className="text-5xl mb-8 block grayscale group-hover:grayscale-0 transition-all duration-500 transform group-hover:scale-110 origin-left">
                      {svc.icon}
                    </span>
                    <h4 className="text-[22px] md:text-[26px] font-black uppercase tracking-tight text-white mb-6 group-hover:text-[#fe881b] transition-colors">
                      {svc.title}
                    </h4>
                    <p className="text-[16px] text-[#A69FB6] leading-relaxed font-light">
                      {svc.desc}
                    </p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* 4. OUR APPROACH */}
        <section className="py-32 max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <FadeIn>
              <h3 className="text-[#fe881b] text-sm uppercase tracking-[4px] font-bold mb-6">Execution Strategy</h3>
              <h2 className="text-[36px] md:text-[60px] font-black uppercase tracking-tighter leading-[1] mb-10">
                Designed Around <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#fe881b] to-[#ca45ff]">You.</span>
              </h2>
              <p className="text-[20px] text-[#A69FB6] font-light max-w-xl">
                We don't just plan weddings — we engineer unforgettable moments with a structured cinematic approach.
              </p>
            </FadeIn>
            
            <div className="space-y-10">
              {approachSteps.map((step, i) => (
                <FadeIn key={i} delay={i * 0.1} y={0} className="flex gap-8 group">
                  <span className="text-[32px] md:text-[40px] font-black text-white/10 group-hover:text-[#fe881b]/40 transition-colors leading-none">
                    {step.num}
                  </span>
                  <div>
                    <h4 className="text-[20px] md:text-[24px] font-bold text-white uppercase tracking-tight mb-2">
                       {step.title}
                    </h4>
                    <p className="text-[15px] md:text-[17px] text-[#A69FB6] font-light leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* 5. FEATURED WEDDING */}
        <section className="py-32 relative">
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
          <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
            <FadeIn className="text-center mb-20">
              <h3 className="text-[#fe881b] text-sm uppercase tracking-[4px] font-bold mb-4">Recent Project</h3>
              <h2 className="text-[36px] md:text-[56px] font-black uppercase tracking-tight">
                A Celebration to <span className="italic">Remember</span>
              </h2>
            </FadeIn>

            <FadeIn>
              <div className="relative rounded-[50px] overflow-hidden border border-white/10 group">
                <div className="flex flex-col lg:flex-row">
                  <div className="lg:w-3/5 aspect-[4/3] lg:aspect-auto overflow-hidden">
                    <img src={decorImg} alt="Featured Wedding" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" />
                  </div>
                  <div className="lg:w-2/5 p-12 lg:p-20 bg-white/[0.03] backdrop-blur-xl flex flex-col justify-center">
                    <span className="text-[#fe881b] text-[12px] uppercase tracking-[3px] font-black mb-6 block">Kolkata • Royal Heritage Theme</span>
                    <h3 className="text-[32px] md:text-[48px] font-black uppercase tracking-tight text-white mb-8 leading-none">
                      The Grand Imperial Wedding
                    </h3>
                    <p className="text-[16px] md:text-[18px] text-[#A69FB6] font-light leading-relaxed mb-10 italic">
                      "A beautifully curated multi-day wedding designed with elegance and precision. From vibrant pre-wedding functions to a grand ceremony, every detail was thoughtfully executed to create a seamless experience."
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                       {['Haldi', 'Mehendi', 'Wedding', 'Reception'].map(v => (
                         <div key={v} className="bg-white/5 px-4 py-2 rounded-xl text-center text-xs uppercase tracking-widest text-[#fe881b] border border-white/5 font-bold">
                           {v}
                         </div>
                       ))}
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* 6. GALLERY SECTION */}
        <section id="gallery" className="py-32 max-w-[1400px] mx-auto px-6 lg:px-10">
          <FadeIn className="text-center mb-20">
            <h3 className="text-[#fe881b] text-sm uppercase tracking-[4px] font-bold mb-4">Wedding Stories</h3>
            <h2 className="text-[40px] md:text-[70px] font-black uppercase tracking-tighter leading-none mb-6">
              Moments We’ve <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#fe881b] to-[#ca45ff]">Crafted</span>
            </h2>
          </FadeIn>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
             {[heroImg, decorImg, ritualsImg, heroImg, ritualsImg, decorImg].map((img, i) => (
               <FadeIn key={i} delay={i * 0.1} className={i === 0 || i === i ? "row-span-2" : ""}>
                 <div className="h-full rounded-[32px] overflow-hidden border border-white/10 group relative">
                    <img src={img} className="w-full h-full object-cover opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all duration-1000" alt="Gallery" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute bottom-8 left-8 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                       <span className="text-[#fe881b] text-xs font-bold uppercase tracking-[3px]">Saath Phere Moments</span>
                    </div>
                 </div>
               </FadeIn>
             ))}
          </div>
        </section>

        {/* 7. WHY SAATH PHERE */}
        <section className="py-32 border-t border-white/5">
           <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
             <div className="grid lg:grid-cols-2 gap-20 items-center">
                <FadeIn>
                  <h3 className="text-[#fe881b] text-sm uppercase tracking-[4px] font-bold mb-6">Why Trust Us</h3>
                  <h2 className="text-[36px] md:text-[56px] font-black uppercase tracking-tight leading-[1] mb-12">
                     The Premium <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ca45ff] to-[#fe881b]">Wedding Difference</span>
                  </h2>
                </FadeIn>
                <FadeIn delay={0.2}>
                   <div className="space-y-6">
                      {milestones.map((m, i) => (
                        <div key={i} className="flex gap-4 items-center bg-white/[0.03] p-5 rounded-2xl border border-white/5 hover:border-[#fe881b]/30 hover:bg-[#fe881b]/5 transition-all duration-300 group">
                           <span className="w-10 h-10 rounded-full bg-[#fe881b]/20 flex items-center justify-center text-[#fe881b] group-hover:scale-110 transition-transform">✓</span>
                           <span className="text-[16px] md:text-[18px] font-medium text-[#bdaee7]">{m}</span>
                        </div>
                      ))}
                   </div>
                </FadeIn>
             </div>
           </div>
        </section>

        {/* 8. EXPERIENCE DIFFERENCE SECTION */}
        <section className="py-32 text-center bg-gradient-to-b from-transparent via-[#fe881b]/[0.02] to-transparent">
           <FadeIn className="max-w-[1200px] mx-auto px-6 lg:px-10">
              <h2 className="text-[36px] md:text-[60px] lg:text-[80px] font-black uppercase tracking-tighter leading-none mb-10">
                Not Just Weddings.<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#fe881b] to-[#ca45ff]">Experiences.</span>
              </h2>
              <p className="text-[20px] md:text-[28px] text-[#e2d5ec] font-black uppercase tracking-widest max-w-4xl mx-auto">
                 We don’t just plan weddings — <span className="text-white">we design moments that stay with you forever.</span>
              </p>
           </FadeIn>
        </section>

        {/* 9. CALL TO ACTION */}
        <section className="py-32 relative">
          <div className="max-w-[1000px] mx-auto px-6 lg:px-10 text-center">
            <FadeIn>
              <h3 className="text-[#fe881b] text-sm uppercase tracking-[4px] font-bold mb-6">Start Your Journey</h3>
              <h2 className="text-[40px] md:text-[70px] font-black uppercase tracking-tighter leading-none mb-10">
                Let’s Create <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#fe881b] to-[#ca45ff]">Your Story</span>
              </h2>
              <p className="text-[18px] md:text-[22px] text-[#A69FB6] font-light max-w-2xl mx-auto mb-16 italic">
                Your wedding deserves more than planning — it deserves perfection.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                 <a href="#contact" className="group relative p-[2px] rounded-full bg-gradient-to-r from-[#fe881b] to-[#ca45ff] hover:shadow-[0_0_50px_rgba(254,136,27,0.5)] transition-shadow">
                    <div className="bg-[#13101C] rounded-full px-14 py-5 group-hover:bg-transparent transition-colors duration-500">
                       <span className="text-white font-black text-[18px] uppercase tracking-[3px]">Start Planning</span>
                    </div>
                 </a>
                 <a href="#contact" className="px-14 py-5 rounded-full border border-white/10 bg-white/5 text-white font-bold text-[18px] uppercase tracking-[3px] hover:bg-white/10 transition-all">
                    Speak to Our Team
                 </a>
              </div>
            </FadeIn>
          </div>
        </section>

      </div>
    </div>
  );
}
