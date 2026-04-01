import { useRef, useState } from "react";
import { m, useInView } from "framer-motion";

import heroImg from "@/assets/shoots/hero.png";
import catalogImg from "@/assets/shoots/catalog.png";
import campaignImg from "@/assets/shoots/campaign.png";
import lifestyleImg from "@/assets/shoots/lifestyle.png";
import productImg from "@/assets/shoots/product.png";
import videoImg from "@/assets/shoots/video.png";

/* ─── Data ─── */
const services = [
  {
    title: "E-commerce Shoots",
    desc: "Clean, consistent, and detail-focused product photography designed for high-conversion catalogues, wholesale, and marketplace listings.",
    tag: "High-conversion product catalogues",
    image: catalogImg,
  },
  {
    title: "Creative Shoots",
    desc: "Vivid, scroll-stopping visuals specifically designed for campaigns, social ads, and seasonal launches that command attention.",
    tag: "Designed for campaigns & ads",
    image: campaignImg,
  },
  {
    title: "Editorial Shoots",
    desc: "Premium, magazine-style storytelling that positions your brand at the top of its niche. High-end aesthetic and direction.",
    tag: "Magazine-style brand positioning",
    image: lifestyleImg,
  },
  {
    title: "Conceptualised Shoots",
    desc: "From ideation to the final frame. End-to-end styling, direction, and execution tailored exactly to your brand's unique DNA.",
    tag: "End-to-end ideation & execution",
    image: productImg,
  },
];

const steps = [
  { num: "01", title: "Onboarding & Discovery", desc: "Understanding brand vision & goals" },
  { num: "02", title: "Conceptualisation", desc: "Brainstorming and defining the visual narrative" },
  { num: "03", title: "Shoot Strategy", desc: "Setting timeline, purpose, and deliverables" },
  { num: "04", title: "Style & Moodboarding", desc: "Defining the aesthetic, lighting, and palette" },
  { num: "05", title: "Pre-Production", desc: "Venue, models, styling, and coordination" },
  { num: "06", title: "Shoot Execution", desc: "On-ground production with elite precision" },
  { num: "07", title: "Editing & Delivery", desc: "Final high-selling visuals delivered" },
];

/* ─── Helpers ─── */
function FadeIn({ children, className = "", delay = 0, y = 40 }: { children: React.ReactNode; className?: string; delay?: number; y?: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <m.div
      ref={ref}
      initial={{ opacity: 0, y }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </m.div>
  );
}

/* ─── Page ─── */
export default function Shoots() {
  const [formState, setFormState] = useState({
    brand: "",
    shootType: "",
    budget: "",
    details: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Logic for form submission
    console.log("Form Submitted:", formState);
    alert("Thank you! Our team will get back to you shortly.");
  };

  return (
    <div className="w-full bg-[#13101C] min-h-screen text-white relative overflow-x-hidden pt-20">

      {/* Background Glows */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-[10%] left-[-15%] w-[60vw] h-[60vw] bg-[#ca45ff] opacity-[0.04] blur-[180px] rounded-full" />
        <div className="absolute top-[50%] right-[-15%] w-[55vw] h-[55vw] bg-[#1c4eff] opacity-[0.04] blur-[180px] rounded-full" />
        <div className="absolute bottom-[10%] left-[20%] w-[40vw] h-[40vw] bg-[#fe881b] opacity-[0.03] blur-[180px] rounded-full" />
      </div>

      {/* ─── HERO ─── */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={heroImg} alt="Shoots Hero" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#13101C] via-[#13101C]/60 to-[#13101C]" />
        </div>

        <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-10 text-center py-40">
          <m.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-3 bg-white/5 border border-white/10 backdrop-blur-xl px-6 py-3 rounded-full mb-10"
          >
            <span className="w-2 h-2 bg-[#ca45ff] rounded-full animate-pulse" />
            <span className="text-[#A69FB6] text-sm uppercase tracking-[3px] font-medium">Capture the Story</span>
          </m.div>

          <m.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="text-[48px] md:text-[80px] lg:text-[100px] font-black uppercase tracking-tighter leading-[0.9] mb-8"
          >
            Shoots & <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ca45ff] via-[#8545ff] to-[#1c4eff]">
              Catalog
            </span>
          </m.h1>

          <m.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-[18px] md:text-[24px] text-[#bdaee7] max-w-3xl mx-auto font-black uppercase tracking-[2px] leading-relaxed mb-6"
          >
            Every Frame Tells a Story Worth Remembering
          </m.p>
          <m.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35 }}
            className="text-[16px] md:text-[20px] text-[#A69FB6] max-w-3xl mx-auto font-light leading-relaxed mb-16 italic"
          >
            From e-commerce catalogues to editorial and conceptual shoots — we bring ideas to life through thoughtful direction, styling, and execution.
          </m.p>

          <m.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <a href="#form" className="px-14 py-6 rounded-full bg-gradient-to-r from-[#ca45ff] to-[#1c4eff] text-white font-black text-[18px] uppercase tracking-[3px] transition-all hover:shadow-[0_0_50px_rgba(202,69,255,0.4)]">
              Book a Shoot
            </a>
            <a href="#form" className="px-14 py-6 rounded-full border border-white/10 bg-white/5 text-white font-bold text-[18px] uppercase tracking-[3px] transition-all hover:bg-white/10">
              Get Your Quote
            </a>
          </m.div>
        </div>
      </section>

      {/* ─── SUBTITLE ─── */}
      <section className="py-24 text-center">
         <FadeIn>
            <h2 className="text-[40px] md:text-[80px] lg:text-[120px] font-black uppercase tracking-tighter leading-none opacity-10">
              Shoot. Style. Sell.
            </h2>
         </FadeIn>
      </section>

      {/* ─── SERVICES GRID ─── */}
      <section className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-10 py-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {services.map((svc, i) => (
            <FadeIn key={i} delay={i * 0.08} y={0}>
              <div className="h-full group p-8 rounded-[40px] bg-[#1a1625] border border-white/5 hover:border-[#ca45ff]/40 transition-all duration-500 overflow-hidden relative">
                <div className="absolute inset-0 z-0">
                   <img src={svc.image} className="w-full h-full object-cover opacity-20 group-hover:opacity-40 transition-opacity duration-700" alt={svc.title} />
                   <div className="absolute inset-0 bg-gradient-to-t from-[#1a1625] via-[#1a1625]/60 to-transparent" />
                </div>
                <div className="relative z-10">
                   <span className="text-[#ca45ff] text-[10px] uppercase tracking-[4px] font-black mb-4 block">Service 0{i + 1}</span>
                   <h3 className="text-[20px] md:text-[24px] font-black uppercase tracking-tight text-white mb-4 group-hover:text-[#ca45ff] transition-colors leading-tight">
                     {svc.title}
                   </h3>
                   <p className="text-[13px] text-[#A69FB6] leading-relaxed font-light">
                     {svc.desc}
                   </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* ─── OUR PROCESS ─── */}
      <section className="py-32 border-y border-white/5 my-20 bg-white/[0.01]">
         <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
            <div className="grid lg:grid-cols-2 gap-20 items-start">
               <FadeIn>
                  <h3 className="text-[#ca45ff] text-sm uppercase tracking-[4px] font-bold mb-6 italic">Built for Conversion</h3>
                  <h2 className="text-[40px] md:text-[80px] font-black uppercase tracking-tighter leading-none mb-10">
                     Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ca45ff] to-[#1c4eff]">Process.</span>
                  </h2>
                  <p className="text-[20px] text-[#A69FB6] font-light max-w-xl italic">
                     A precision-engineered workflow that transforms your simple idea into high-selling visual assets.
                  </p>
               </FadeIn>
               
               <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {steps.map((step, i) => (
                    <FadeIn key={i} delay={i * 0.05} y={0} className="flex gap-6 group">
                       <span className="text-[32px] md:text-[40px] font-black text-white/5 group-hover:text-[#ca45ff]/20 transition-all leading-none pt-1">
                          {step.num}
                       </span>
                       <div>
                          <h4 className="text-[16px] md:text-[18px] font-black uppercase text-white mb-1 group-hover:text-[#ca45ff] transition-colors">
                             {step.title}
                          </h4>
                          <p className="text-[13px] text-[#A69FB6] font-light leading-relaxed">
                             {step.desc}
                          </p>
                       </div>
                    </FadeIn>
                  ))}
               </div>
            </div>
         </div>
      </section>

      {/* ─── WORK GRID ─── */}
      <section className="py-32">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <FadeIn className="text-center mb-20 text-center">
            <h3 className="text-[#ca45ff] text-sm uppercase tracking-[4px] font-bold mb-4">Portfolio</h3>
            <h2 className="text-[40px] md:text-[90px] font-black uppercase tracking-tighter leading-none mb-6">
               Work That <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ca45ff] to-[#1c4eff]">Speaks</span>
            </h2>
          </FadeIn>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-3">
             {[catalogImg, campaignImg, lifestyleImg, productImg, videoImg, heroImg, catalogImg, campaignImg, lifestyleImg, productImg].map((img, i) => (
               <FadeIn key={i} delay={i * 0.05} y={20}>
                  <div className="aspect-square rounded-2xl overflow-hidden border border-white/5 group relative grayscale hover:grayscale-0 transition-all duration-700">
                    <img src={img} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" alt="Work" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#13101C] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
               </FadeIn>
             ))}
          </div>
        </div>
      </section>

      {/* ─── SHOOT PLANNING CONSULTATION ─── */}
      <section className="py-20 text-center">
         <FadeIn>
            <m.button 
               whileHover={{ scale: 1.05 }}
               whileTap={{ scale: 0.95 }}
               className="px-14 py-6 rounded-full bg-white/5 border border-white/10 text-white font-black text-[18px] uppercase tracking-[3px] hover:bg-white/10 transition-all hover:shadow-[0_0_30px_rgba(255,255,255,0.05)]"
            >
               Free Shoot Planning Consultation
            </m.button>
         </FadeIn>
      </section>

      {/* ─── FORM ─── */}
      <section id="form" className="py-32 mb-40 relative overflow-hidden">
        <div className="absolute right-0 bottom-0 w-[40vw] h-[40vw] bg-[#ca45ff] opacity-[0.03] blur-[150px] rounded-full" />
        <div className="max-w-[1000px] mx-auto px-6 lg:px-10">
           <FadeIn className="text-center mb-20">
              <h2 className="text-[40px] md:text-[70px] font-black uppercase tracking-tighter leading-[0.9] mb-12">
                 Ready to Create <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ca45ff] to-[#1c4eff]">High-Selling Visuals?</span>
              </h2>
              <p className="text-[16px] md:text-[22px] text-[#A69FB6] font-light max-w-2xl mx-auto italic leading-relaxed">
                 Because in today’s market — <span className="text-white font-black not-italic uppercase tracking-widest text-[#ca45ff]">jo dikhta hai woh bikta hai.</span>
              </p>
           </FadeIn>

           <FadeIn delay={0.2}>
              <form onSubmit={handleSubmit} className="p-10 lg:p-16 rounded-[60px] bg-white/[0.03] border border-white/10 backdrop-blur-3xl relative overflow-hidden">
                 <div className="grid md:grid-cols-2 gap-8 mb-8">
                    <div className="space-y-2">
                       <label className="text-[11px] uppercase tracking-[4px] font-black text-[#ca45ff]">Brand Details</label>
                       <input 
                          type="text" 
                          required
                          placeholder="Your Brand Name"
                          className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:border-[#ca45ff] focus:outline-none transition-all placeholder:text-white/20"
                          onChange={(e) => setFormState({...formState, brand: e.target.value})}
                       />
                    </div>
                    <div className="space-y-2">
                       <label className="text-[11px] uppercase tracking-[4px] font-black text-[#ca45ff]">Type of Shoot</label>
                       <select 
                          required
                          className="w-full bg-[#1a1625] border border-white/10 rounded-2xl px-6 py-4 text-white focus:border-[#ca45ff] focus:outline-none transition-all"
                          onChange={(e) => setFormState({...formState, shootType: e.target.value})}
                       >
                          <option value="">Select Kind of Shoot</option>
                          <option value="ecommerce">E-commerce / Catalog</option>
                          <option value="creative">Creative / Campaign</option>
                          <option value="editorial">Editorial / High-Fashion</option>
                          <option value="conceptual">Conceptualised Branding</option>
                       </select>
                    </div>
                 </div>

                 <div className="grid md:grid-cols-2 gap-8 mb-8">
                    <div className="space-y-2">
                       <label className="text-[11px] uppercase tracking-[4px] font-black text-[#ca45ff]">Budget Range</label>
                       <select 
                          required
                          className="w-full bg-[#1a1625] border border-white/10 rounded-2xl px-6 py-4 text-white focus:border-[#ca45ff] focus:outline-none transition-all"
                          onChange={(e) => setFormState({...formState, budget: e.target.value})}
                       >
                          <option value="">Select Your Budget</option>
                          <option value="basic">₹25k - ₹50k</option>
                          <option value="standard">₹50k - ₹1.5L</option>
                          <option value="premium">₹1.5L - ₹5L</option>
                          <option value="custom">Custom / Large Scale</option>
                       </select>
                    </div>
                    <div className="space-y-2">
                       <label className="text-[11px] uppercase tracking-[4px] font-black text-[#ca45ff]">Any Specific Requirements?</label>
                       <textarea 
                          placeholder="Briefly tell us about your vision..."
                          className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:border-[#ca45ff] focus:outline-none transition-all min-h-[58px] max-h-[150px] placeholder:text-white/20"
                          onChange={(e) => setFormState({...formState, details: e.target.value})}
                       />
                    </div>
                 </div>

                 <button className="w-full bg-gradient-to-r from-[#ca45ff] to-[#1c4eff] py-6 rounded-full font-black uppercase text-[18px] tracking-[4px] hover:shadow-[0_0_50px_rgba(202,69,255,0.4)] transition-all">
                    Start Your Creation
                 </button>
              </form>
           </FadeIn>
        </div>
      </section>

    </div>
  );
}
