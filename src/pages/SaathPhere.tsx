import { useRef } from "react";
import { m, useInView } from "framer-motion";
import { 
  Gem, Palette, MapPin, Tent, Users, Hotel, Music, Settings,
  Network, Award, Heart, Sparkles, Globe
} from "lucide-react";
import heroImg from "@/assets/saath-phere/hero.png";
import decorImg from "@/assets/saath-phere/decor.png";
import ritualsImg from "@/assets/saath-phere/rituals.png";

/* ─── Data ─── */
const offerings = [
  { title: "End-to-End Wedding Management", desc: "Complete oversight from initial concept to grand finale.", icon: Gem },
  { title: "Concept & Theme Design", desc: "Crafting a unique visual language for your celebration.", icon: Palette },
  { title: "Venue Selection & Destination Planning", desc: "Finding the perfect backdrop across India and beyond.", icon: MapPin },
  { title: "Décor & Styling", desc: "Editorial-quality aesthetic design for every sub-event.", icon: Tent },
  { title: "Vendor Management", desc: "Coordinating with our elite network for flawless results.", icon: Users },
  { title: "Guest Hospitality & Logistics", desc: "Ensuring every guest feels the VIP treatment.", icon: Hotel },
  { title: "Entertainment & Artist Management", desc: "Curating high-energy performances and experiences.", icon: Music },
  { title: "Wedding Production & Execution", desc: "On-ground precision for a glitch-free experience.", icon: Settings }
];

const approachSteps = [
  { num: "01", title: "Understanding Your Vision", desc: "We deep-dive into your story, preferences, and expectations." },
  { num: "02", title: "Curating Every Detail", desc: "From décor to experiences, everything is thoughtfully designed." },
  { num: "03", title: "Seamless Execution", desc: "Our team ensures everything runs flawlessly — so you can enjoy every moment." }
];

const metrics = [
  { title: "450+ Vendors", desc: "Selective elite network", icon: Network },
  { title: "Flawless On-Ground Execution", desc: "Glitch-free production", icon: Award },
  { title: "Stress-Free Planning for Families", desc: "You celebrate, we handle", icon: Heart },
  { title: "Premium Design & Aesthetic", desc: "Elevated cinematic look", icon: Sparkles },
  { title: "Celebrate Anywhere, We Handle Everything", desc: "Destination expertise", icon: Globe }
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

          <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-10 text-center py-40 mt-10">
            <m.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-block px-6 py-2 rounded-full border border-[#fe881b]/30 bg-[#fe881b]/5 backdrop-blur-md mb-6"
            >
              <span className="text-[#fe881b] text-[10px] md:text-sm uppercase tracking-[4px] font-black">#WeddingPlanners</span>
            </m.div>

            <m.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="mb-4"
            >
               <span className="text-white/40 uppercase tracking-[6px] font-black text-xs md:text-sm italic">WEDDINGS</span>
            </m.div>

            <m.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.1 }}
              className="text-[40px] md:text-[80px] lg:text-[100px] font-black uppercase tracking-tighter leading-[0.9] mb-10"
            >
              Saath phere by <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#fe881b] via-[#ca45ff] to-[#fe881b] bg-[length:200%_auto] animate-gradient-flow">The Stori Teler</span>
            </m.h1>

            <m.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-[18px] md:text-[26px] text-[#e2d5ec] max-w-3xl mx-auto font-black uppercase tracking-[2px] leading-relaxed mb-6"
            >
              Curating the celebration of your forever!
            </m.p>
            <m.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.35 }}
              className="text-[16px] md:text-[20px] text-[#A69FB6] max-w-2xl mx-auto font-light leading-relaxed mb-16 italic"
            >
              We Handle the Stress on your special day!
            </m.p>

            <m.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-6"
            >
              <a href="#contact" className="px-12 py-5 rounded-full bg-gradient-to-r from-[#fe881b] to-[#ca45ff] text-[#13101C] font-black text-[16px] uppercase tracking-[2px] hover:shadow-[0_0_40px_rgba(254,136,27,0.4)] transition-all">
                Start Planning
              </a>
              <a href="#contact" className="px-12 py-5 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl text-white font-bold text-[16px] uppercase tracking-[2px] hover:bg-white/10 transition-all">
                Get Your Quote
              </a>
            </m.div>
          </div>
        </section>

        {/* 2. INTRO SECTION */}
        <section className="max-w-[1400px] mx-auto px-6 lg:px-10 py-32 text-center lg:text-left">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <FadeIn>
              <h2 className="text-[36px] md:text-[60px] font-black uppercase tracking-tighter leading-[1] mb-8">
                Your Story, <br /><span className="text-[#fe881b]">Beautifully Celebrated</span>
              </h2>
              <div className="w-20 h-[3px] bg-gradient-to-r from-[#fe881b] to-transparent" />
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="text-[18px] md:text-[20px] text-[#bdaee7] space-y-8 font-light leading-[1.8] border-l border-[#fe881b]/20 pl-10 h-full flex flex-col justify-center italic">
                <p>
                  At The Stori Teler, we believe weddings are more than events — they are once-in-a-lifetime stories.
                </p>
                <p className="text-white font-black uppercase tracking-wide not-italic">
                  We bring together creativity, culture, and flawless execution to create celebrations that reflect your vision, your traditions, and your personality.
                </p>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* 3. WHAT WE OFFER */}
        <section className="bg-white/[0.02] py-32 border-y border-white/5">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
            <FadeIn className="text-center mb-20">
              <h3 className="text-[#fe881b] text-sm uppercase tracking-[4px] font-bold mb-4 italic">The Masterlist</h3>
              <h2 className="text-[36px] md:text-[70px] font-black uppercase tracking-tighter leading-[0.95]">
                Full-Service <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#fe881b] to-[#ca45ff]">Curation</span>
              </h2>
            </FadeIn>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {offerings.map((svc, i) => {
                const Icon = svc.icon;
                return (
                  <FadeIn key={i} delay={i * 0.05} y={0}>
                    <div className="h-full group p-8 rounded-[32px] bg-[#1a1625] border border-white/10 hover:border-[#fe881b]/40 transition-all duration-500 overflow-hidden relative">
                      <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-[#fe881b] mb-6 group-hover:scale-110 transition-transform">
                         <Icon size={24} strokeWidth={1.5} />
                      </div>
                      <h4 className="text-[16px] md:text-[18px] font-black uppercase tracking-tight text-white mb-4 group-hover:text-[#fe881b] transition-colors leading-tight">
                        {svc.title}
                      </h4>
                      <p className="text-[13px] text-[#A69FB6] leading-relaxed font-light">
                        {svc.desc}
                      </p>
                    </div>
                  </FadeIn>
                );
              })}
            </div>
          </div>
        </section>

        {/* 4. OUR APPROACH */}
        <section className="py-32 max-w-[1400px] mx-auto px-6 lg:px-10 border-b border-white/5">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <FadeIn>
              <h3 className="text-[#fe881b] text-sm uppercase tracking-[4px] font-bold mb-6 italic">Strategy & Heart</h3>
              <h2 className="text-[36px] md:text-[60px] font-black uppercase tracking-tighter leading-[1] mb-10">
                Designed with Heart. <br /> <span className="text-[#fe881b]">Executed with Precision.</span>
              </h2>
              <p className="text-[20px] text-[#A69FB6] font-light max-w-xl italic">
                From the first conversation to the final guest checkout, our 3-step framework ensures excellence.
              </p>
            </FadeIn>
            
            <div className="space-y-12">
              {approachSteps.map((step, i) => (
                <FadeIn key={i} delay={i * 0.1} y={0} className="flex gap-8 group">
                  <span className="text-[40px] md:text-[50px] font-black text-white/5 group-hover:text-[#fe881b]/20 transition-all leading-none">
                    {step.num}
                  </span>
                  <div>
                    <h4 className="text-[20px] md:text-[24px] font-black uppercase text-white mb-2 underline decoration-[#fe881b]/30 decoration-4 underline-offset-8">
                       {step.title}
                    </h4>
                    <p className="text-[15px] md:text-[18px] text-[#A69FB6] font-light leading-relaxed">
                       {step.desc}
                    </p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* 5. GALLERY SECTION */}
        <section id="gallery" className="py-32 max-w-[1400px] mx-auto px-6 lg:px-10">
          <FadeIn className="text-center mb-20">
            <h3 className="text-[#fe881b] text-sm uppercase tracking-[4px] font-bold mb-4">Wedding Stories</h3>
            <h2 className="text-[40px] md:text-[70px] font-black uppercase tracking-tighter leading-none mb-6">
              Moments We’ve <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#fe881b] to-[#ca45ff]">Crafted</span>
            </h2>
          </FadeIn>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
             {[heroImg, decorImg, ritualsImg, ritualsImg, heroImg, decorImg].map((img, i) => (
               <FadeIn key={i} delay={i * 0.1} className={i === 1 || i === 4 ? "row-span-2" : ""}>
                  <div className="h-full rounded-[35px] overflow-hidden border border-white/10 group relative">
                    <img src={img} className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000" alt="Gallery" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#13101C]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  </div>
               </FadeIn>
             ))}
          </div>
        </section>

        {/* 6. NUMBERS / METRICS SECTION */}
        <section className="py-32 bg-white/[0.01]">
           <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
              <FadeIn className="text-center mb-20">
                 <h2 className="text-[40px] md:text-[60px] font-black uppercase tracking-tighter leading-none">
                    Scale Meets <span className="text-[#fe881b]">Selective</span> Excellence
                 </h2>
              </FadeIn>

              <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
                 {metrics.map((m, i) => {
                   const Icon = m.icon;
                   return (
                     <FadeIn key={i} delay={i * 0.05} y={0}>
                        <div className="h-full p-8 rounded-[30px] border border-white/5 bg-white/[0.03] text-center flex flex-col items-center justify-center group hover:bg-[#fe881b]/5 transition-all duration-500">
                           <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-[#fe881b] mb-5 group-hover:scale-125 transition-transform duration-500">
                              <Icon size={20} strokeWidth={1.5} />
                           </div>
                           <h4 className="text-[15px] font-black uppercase tracking-widest text-[#fe881b] mb-2 leading-tight">{m.title}</h4>
                           <p className="text-[11px] uppercase tracking-[3px] text-white/40 group-hover:text-white/60 transition-colors">{m.desc}</p>
                        </div>
                     </FadeIn>
                   );
                 })}
              </div>
           </div>
        </section>

        {/* 7. CLOSING HUMOR BLOCK */}
        <section className="py-32 text-center relative border-t border-white/5">
           <FadeIn className="max-w-[1000px] mx-auto px-6 lg:px-10">
              <div className="relative inline-block mb-10">
                 <div className="absolute -inset-4 bg-[#fe881b] opacity-[0.05] blur-[40px] rounded-full" />
                 <h3 className="text-[20px] md:text-[32px] font-black uppercase tracking-tighter leading-tight text-white relative">
                   Create A Wedding that your Relatives <br />
                   <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#fe881b] to-[#ca45ff]">(p.s. Bua)</span> can’t stop talking about!
                 </h3>
              </div>
              <p className="text-[14px] font-black uppercase tracking-[8px] text-white/20 italic mb-10 italic">Just kidding</p>
              
              <div className="w-16 h-[1px] bg-white/10 mx-auto mb-10" />
              
              <p className="text-[18px] md:text-[24px] font-bold text-[#bdaee7] uppercase tracking-widest italic leading-relaxed">
                 The Stori Teler — <span className="text-white">Crafting Celebrations That Last a Lifetime.</span>
              </p>
           </FadeIn>
        </section>

        {/* 8. CALL TO ACTION */}
        <section className="py-32 pb-60 text-center relative overflow-hidden">
          <div className="absolute bottom-0 left-0 w-[50vw] h-[50vw] bg-[#fe881b] opacity-[0.02] blur-[150px] rounded-full" />
          
          <FadeIn className="max-w-[1000px] mx-auto px-6 lg:px-10">
            <h3 className="text-[#fe881b] text-sm uppercase tracking-[4px] font-bold mb-8 italic">Get Your Personalized Wedding Plan</h3>
            <h2 className="text-[40px] md:text-[80px] font-black uppercase tracking-tighter leading-[0.9] mb-12">
              Let’s Create <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-[#fe881b] to-[#ca45ff]">Your Dream Wedding</span>
            </h2>
            <p className="text-[18px] md:text-[22px] text-[#A69FB6] font-light max-w-2xl mx-auto mb-16 italic leading-relaxed">
              From the first idea to the final farewell — we’re with you every step of the way.
            </p>
            
            <button className="group relative p-[2px] rounded-full bg-gradient-to-r from-[#fe881b] to-[#ca45ff] hover:shadow-[0_0_50px_rgba(254,136,27,0.5)] transition-shadow">
               <div className="bg-[#13101C] rounded-full px-16 py-6 group-hover:bg-transparent transition-colors duration-500">
                  <span className="text-white font-black text-[20px] uppercase tracking-[4px]">Start Planning</span>
               </div>
            </button>
          </FadeIn>
        </section>

      </div>
    </div>
  );
}
