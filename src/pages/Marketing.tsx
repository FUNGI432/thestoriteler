import { useRef } from "react";
import { m, useInView } from "framer-motion";
import ethnicWearHero from "@/assets/marketing-ethnic.png";
import { 
  Users, Target, Camera, Zap, MessageSquare, Search, 
  Lightbulb, Layout, RefreshCw, Mail, ArrowRightCircle, 
  Database, Globe, Calendar, Repeat, ShoppingCart, 
  ShieldCheck, BarChart3, User, Video 
} from "lucide-react";

/* ─── Data ─── */
const expertiseList = [
  { name: "Social Media Strategy & Management", icon: Users },
  { name: "Performance Marketing (Meta, Google Ads)", icon: Target },
  { name: "Content Creation & Brand Shoots", icon: Camera },
  { name: "B2B Lead Generation Systems", icon: Zap },
  { name: "WhatsApp API Integration & Automation", icon: MessageSquare },
  { name: "SEO & Search Engine Visibility", icon: Search },
  { name: "Brand Positioning & Communication Strategy", icon: Lightbulb },
  { name: "Website & Landing Page Development", icon: Layout },
  { name: "Conversion Rate Optimization (CRO)", icon: RefreshCw },
  { name: "Email Marketing & Automation", icon: Mail },
  { name: "Marketing Funnel Design & Execution", icon: ArrowRightCircle },
  { name: "CRM Integration & Lead Management Systems", icon: Database },
  { name: "Influencer & Industry Collaborations", icon: Globe },
  { name: "Exhibition & Event Marketing", icon: Calendar },
  { name: "Retargeting & Customer Journey Mapping", icon: Repeat },
  { name: "Marketplace Marketing (Amazon, Flipkart, etc.)", icon: ShoppingCart },
  { name: "Online Reputation Management (ORM)", icon: ShieldCheck },
  { name: "Analytics, Reporting & Growth Scaling", icon: BarChart3 },
  { name: "Personal Branding for Founders", icon: User },
  { name: "Video Marketing & YouTube Strategy", icon: Video }
];

const frameworkSteps = [
  { 
    num: "01", 
    title: "Strategy First", 
    desc: "Deep understanding of your brand, audience, and market. We don't guess; we research." 
  },
  { 
    num: "02", 
    title: "Execution with Precision", 
    desc: "Content, ads, and campaigns perfectly aligned to your business goals and market positioning." 
  },
  { 
    num: "03", 
    title: "Continuous Optimization", 
    desc: "Constant tracking, improving, and scaling what works to ensure sustained business growth." 
  }
];

const outcomes = [
  { title: "Increased brand visibility", icon: "👁️" },
  { title: "High-quality lead generation", icon: "🎯" },
  { title: "Strong engagement & retention", icon: "🤝" },
  { title: "Improved conversion rates", icon: "📈" }
];

/* ─── Components ─── */
function FadeIn({ children, className = "", delay = 0, y = 30 }: { children: React.ReactNode; className?: string; delay?: number; y?: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  return (
    <m.div
      ref={ref}
      initial={{ opacity: 0, y }}
      animate={isInView ? { opacity: 1, x: 0, y: 0 } : {}}
      transition={{ duration: 0.8, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </m.div>
  );
}

export default function Marketing() {
  return (
    <div className="w-full bg-[#13101C] min-h-screen text-white relative overflow-x-hidden pt-20">
      
      {/* Background Abstract Glows */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-[10%] left-[-15%] w-[60vw] h-[60vw] bg-[#ca45ff] opacity-[0.03] blur-[150px] rounded-full" />
        <div className="absolute top-[50%] right-[-15%] w-[55vw] h-[55vw] bg-[#1c4eff] opacity-[0.03] blur-[150px] rounded-full" />
      </div>

      <div className="relative z-10">
        
        {/* 1. HERO SECTION */}
        <section className="max-w-[1400px] mx-auto px-6 lg:px-10 py-20 lg:py-40">
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-8">
              <FadeIn className="mb-8">
                <m.div
                   animate={{ scale: [1, 1.05, 1] }}
                   transition={{ duration: 4, repeat: Infinity }}
                   className="inline-block px-5 py-2 rounded-full border border-[#ca45ff]/30 bg-[#ca45ff]/10 backdrop-blur-md mb-6"
                >
                  <span className="text-[#ca45ff] text-sm md:text-base font-black uppercase tracking-[4px]">Marketing🐕</span>
                </m.div>
                <h1 className="text-[40px] md:text-[80px] lg:text-[90px] font-black uppercase tracking-tighter leading-[0.9] mb-10">
                  Aren’t you tired of <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ca45ff] to-[#1c4eff]">old marketing ways?!</span>
                  <br /> <span className="opacity-40 italic">Cuz we are.</span>
                </h1>
                
                <div className="relative pl-8 mb-12 border-l-4 border-[#ca45ff]">
                   <p className="text-[20px] md:text-[28px] font-black uppercase text-white tracking-widest mb-4">
                      Built Exclusively for <span className="text-[#ca45ff]">B2B Women’s Ethnic Wear</span>
                   </p>
                   <p className="text-[24px] md:text-[34px] font-black uppercase text-white/40">
                      We Don’t Do Marketing. <span className="text-white">We Build Demand.</span>
                   </p>
                </div>
                
                <div className="flex flex-col sm:flex-row items-center gap-6">
                   <button className="w-full sm:w-auto px-14 py-6 rounded-full bg-gradient-to-r from-[#ca45ff] to-[#1c4eff] text-white font-black text-[18px] uppercase tracking-[3px] transition-all hover:shadow-[0_0_50px_rgba(202,69,255,0.4)]">
                      Convert Attention Into Revenue
                   </button>
                   <button className="w-full sm:w-auto px-14 py-6 rounded-full border border-white/10 bg-white/5 text-white font-bold text-[18px] uppercase tracking-[3px] transition-all hover:bg-white/10">
                      Book A Free Consultation
                   </button>
                </div>
              </FadeIn>
            </div>
            
            <m.div 
               initial={{ opacity: 0, rotate: 5, scale: 0.9 }}
               animate={{ opacity: 1, rotate: 0, scale: 1 }}
               transition={{ duration: 1.2, delay: 0.5 }}
               className="lg:col-span-4 hidden lg:block"
            >
               <div className="relative aspect-[4/5] rounded-[50px] overflow-hidden border border-white/10 shadow-2xl">
                  <img src={ethnicWearHero} alt="B2B Women's Ethnic Wear Demand" className="w-full h-full object-cover" />
                  <div className="absolute inset-x-0 bottom-0 p-8 pt-20 bg-gradient-to-t from-[#13101C] via-[#13101C]/60 to-transparent">
                     <p className="text-[#ca45ff] text-[10px] font-black tracking-[4px] uppercase mb-2">Built for Growth</p>
                     <p className="text-white font-bold italic leading-tight">Focusing on high-intent leads and measurable ROI.</p>
                  </div>
               </div>
            </m.div>
          </div>
        </section>

        {/* 2. INTRO SECTION (GREY & WHITE) */}
        <section className="w-full bg-[#f3f4f6] py-32">
           <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
              <FadeIn className="max-w-4xl">
                 <h2 className="text-[32px] md:text-[56px] font-black text-[#13101C] uppercase tracking-tighter leading-[1.1] mb-12">
                   Driving growth for ambitious brands across India through performance-driven, industry-focused strategies.
                 </h2>
                 <div className="flex items-center gap-10">
                    <div className="w-20 h-[2px] bg-[#13101C]/20" />
                    <p className="text-[18px] md:text-[22px] text-[#13101C]/60 font-medium italic">
                       Strategies that generate high-intent leads and deliver measurable business outcomes.
                    </p>
                 </div>
              </FadeIn>
           </div>
        </section>

        {/* 3. OUR WORK SPEAKS (CAROUSEL PLACEHOLDER) */}
        <section className="py-32">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
             <FadeIn className="mb-20">
                <h3 className="text-[#ca45ff] text-sm font-black tracking-[5px] uppercase mb-6 italic">Visual Proof</h3>
                <h2 className="text-[40px] md:text-[70px] font-black uppercase tracking-tighter leading-none">
                  Our Work <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ca45ff] to-[#1c4eff]">Speaks</span>
                </h2>
             </FadeIn>
             
             {/* Grid of brand work highlights */}
             <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[1,2,3,4].map((i) => (
                  <FadeIn key={i} delay={i * 0.1}>
                     <div className="aspect-[4/5] rounded-3xl bg-white/5 border border-white/5 overflow-hidden group hover:border-[#ca45ff]/40 transition-all cursor-crosshair">
                        <div className="w-full h-full bg-gradient-to-br from-white/5 to-transparent flex items-center justify-center italic text-white/20 group-hover:text-white/40 transition-all font-light">
                           Project {i} • Grid
                        </div>
                     </div>
                  </FadeIn>
                ))}
             </div>
          </div>
        </section>

        {/* 4. EXPERTISE (THE CHECK PATTERN) */}
        <section className="py-32 border-y border-white/5">
           <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
              <FadeIn className="text-center mb-20">
                 <h2 className="text-[36px] md:text-[60px] lg:text-[80px] font-black uppercase tracking-tighter leading-none">
                   Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ca45ff] to-[#1c4eff]">Expertise</span>
                 </h2>
              </FadeIn>

              {/* 4xN Grid on desktop, 2xN on md, 1xN on sm */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border border-white/5 rounded-[40px] overflow-hidden">
                {expertiseList.map((item, i) => {
                  // Algorithm to create checkered pattern based on column count
                  const isEvenRow = Math.floor(i / 4) % 2 === 0;
                  const isCheck = isEvenRow ? (i % 2 === 0) : (i % 2 !== 0);
                  const Icon = item.icon;
                  
                  return (
                    <FadeIn key={i} y={0} delay={i * 0.02} className="w-full aspect-square md:aspect-auto lg:aspect-square">
                      <div className={`w-full h-full p-8 flex flex-col justify-center items-center text-center transition-all duration-700 hover:scale-[1.02] border-[0.5px] border-white/5 ${isCheck ? 'bg-white/5' : 'bg-transparent'}`}>
                        <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-[#ca45ff] mb-6 group-hover:scale-110 transition-transform">
                           <Icon size={24} strokeWidth={1.5} />
                        </div>
                        <h4 className="text-[14px] lg:text-[16px] font-black uppercase tracking-widest text-[#e2d5ec] leading-relaxed">
                          {item.name}
                        </h4>
                      </div>
                    </FadeIn>
                  );
                })}
              </div>
           </div>
        </section>

        {/* 5. 3-STEP FRAMEWORK */}
        <section className="py-32 bg-white/[0.02]">
           <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
              <div className="grid lg:grid-cols-2 gap-20 items-center">
                 <FadeIn>
                    <h3 className="text-[#ca45ff] text-sm font-black tracking-[5px] uppercase mb-6 italic">Built for Results, Not Just Reach</h3>
                    <h2 className="text-[36px] md:text-[56px] font-black uppercase tracking-tight leading-[1] mb-12">
                       Our 3-Step <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ca45ff] to-[#1c4eff]">Framework</span>
                    </h2>
                    <button className="group relative p-[1px] rounded-full bg-gradient-to-r from-[#ca45ff] to-[#1c4eff] hover:shadow-[0_0_50px_rgba(202,69,255,0.4)] transition-shadow">
                       <div className="bg-[#13101C] rounded-full px-10 py-4 group-hover:bg-transparent transition-colors">
                          <span className="text-white font-black text-[14px] uppercase tracking-[2px]">Free Brand Audit & Growth Plan</span>
                       </div>
                    </button>
                 </FadeIn>
                 
                 <div className="space-y-12">
                    {frameworkSteps.map((step, i) => (
                      <FadeIn key={i} delay={i * 0.1} className="flex gap-8 group">
                         <span className="text-[40px] md:text-[50px] font-black text-white/5 group-hover:text-[#ca45ff]/20 transition-all leading-none">
                            {step.num}
                         </span>
                         <div>
                            <h4 className="text-[20px] md:text-[24px] font-black uppercase text-white mb-3 underline decoration-[#ca45ff]/30 decoration-4 underline-offset-8">
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
           </div>
        </section>

        {/* 6. FROM VISIBILITY TO PROFITABILITY */}
        <section className="py-32 border-t border-white/5">
           <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
              <FadeIn className="text-center mb-20">
                 <h2 className="text-[32px] md:text-[56px] font-black uppercase tracking-tighter leading-none mb-6">
                   From Visibility to <span className="text-[#ca45ff]">Profitability</span>
                 </h2>
                 <p className="text-[20px] md:text-[24px] text-[#A69FB6] font-light italic uppercase tracking-[4px]">Marketing That Delivers Business Outcomes</p>
              </FadeIn>

              <div className="grid md:grid-cols-4 gap-6">
                 {outcomes.map((item, i) => (
                   <FadeIn key={i} delay={i * 0.1}>
                      <div className="h-full p-8 rounded-[32px] border border-white/10 bg-white/[0.03] text-center hover:bg-[#ca45ff]/5 transition-all group overflow-hidden relative">
                         <span className="text-4xl mb-6 block grayscale group-hover:grayscale-0 transition-all">{item.icon}</span>
                         <p className="text-[15px] md:text-[17px] font-black uppercase tracking-widest text-white">{item.title}</p>
                         <div className="absolute -bottom-10 -right-10 w-24 h-24 bg-[#ca45ff] opacity-0 group-hover:opacity-[0.05] blur-3xl rounded-full transition-all" />
                      </div>
                   </FadeIn>
                 ))}
              </div>
           </div>
        </section>

        {/* 7. SOCIAL MINI SECTION */}
        <section className="py-20 text-center">
           <FadeIn>
              <div className="flex flex-col items-center gap-6">
                 <p className="text-[14px] font-black uppercase tracking-[5px] text-white/40">Follow us through our journey</p>
                 <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-[18px] md:text-[22px] font-black uppercase text-[#ca45ff] hover:underline decoration-2 underline-offset-8">
                    @thestoriteler
                 </a>
              </div>
           </FadeIn>
        </section>

        {/* 8. FINAL CTA */}
        <section className="py-32 pb-60 text-center relative overflow-hidden">
          <div className="absolute bottom-0 right-0 w-[50vw] h-[50vw] bg-[#1c4eff] opacity-[0.02] blur-[150px] rounded-full" />
          
          <FadeIn className="max-w-[1000px] mx-auto px-6 lg:px-10">
            <h2 className="text-[40px] md:text-[80px] font-black uppercase tracking-tighter leading-[0.9] mb-12">
              Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ca45ff] to-[#1c4eff]">Scale Your Brand</span> Digitally?
            </h2>
            
            <button className="group relative p-[2px] rounded-full bg-gradient-to-r from-[#ca45ff] to-[#1c4eff] hover:shadow-[0_0_50px_rgba(202,69,255,0.5)] transition-shadow">
               <div className="bg-[#13101C] rounded-full px-16 py-6 group-hover:bg-transparent transition-colors duration-500">
                  <span className="text-white font-black text-[20px] uppercase tracking-[4px]">Start Your Growth Journey</span>
               </div>
            </button>
          </FadeIn>
        </section>

      </div>
    </div>
  );
}
