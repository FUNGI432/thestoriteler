import { m } from "framer-motion";
import foundersNoteImg from "@/assets/founders-note.png";

export default function FoundersNote() {
  return (
    <div className="w-full bg-[#13101C] min-h-screen text-white pt-32 pb-20 relative overflow-x-hidden">
      
      {/* Background Glows */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-[20%] left-[-10%] w-[50vw] h-[50vw] bg-[#ca45ff] opacity-[0.05] blur-[150px] rounded-full" />
        <div className="absolute bottom-[20%] right-[-10%] w-[50vw] h-[50vw] bg-[#1c4eff] opacity-[0.05] blur-[150px] rounded-full" />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-10">
        
        {/* Header */}
        <header className="mb-20 text-center lg:text-left">
          <m.h3 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[16px] md:text-[20px] text-[#ca45ff] font-medium tracking-[4px] uppercase mb-4"
          >
            Founder’s Note
          </m.h3>
          <m.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-[40px] md:text-[80px] font-black uppercase tracking-tight leading-none mb-6"
          >
            Building <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ca45ff] via-[#8545ff] to-[#1c4eff]">More Than</span> Brands
          </m.h1>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Main Content */}
          <m.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-7 space-y-8"
          >
            <div className="text-[20px] md:text-[24px] text-[#e2d5ec] leading-relaxed font-light space-y-8">
              <p>
                The Stori Teler was never created to be just another marketing or events company.
                It was built with a clear intention — <span className="text-white font-bold italic">to change how businesses grow.</span>
              </p>
              
              <p>
                In industries where visibility is often mistaken for success, we saw a gap.
                Brands were present, but not positioned. Active, but not impactful.
              </p>
              
              <p className="text-[#ca45ff] font-bold text-[28px] md:text-[32px] uppercase tracking-tighter">
                That’s where The Stori Teler began.
              </p>

              <p>
                We believe growth comes from the right combination of strategy, storytelling, and execution. 
                Whether it’s an event, a campaign, or a piece of content — every element should serve a purpose: to create real business outcomes.
              </p>
              
              <p>
                Over time, we’ve evolved into a platform that connects brands with opportunities, buyers with the right sellers, and ideas with execution that delivers.
              </p>

              <div className="pt-10">
                <p className="text-[24px] md:text-[32px] font-black uppercase text-white mb-2">
                  This is just the beginning.
                </p>
                <p className="text-[#A69FB6] italic">
                  We’re here to build brands that don’t just exist — but lead.
                </p>
              </div>

              <div className="pt-12 border-t border-white/10 mt-16">
                <div className="flex items-center gap-6">
                   <div className="w-16 h-[1px] bg-[#ca45ff]" />
                   <div>
                     <p className="text-[20px] font-bold uppercase tracking-[2px]">Team The Stori Teler</p>
                     <p className="text-[#A69FB6] text-sm uppercase tracking-[1px] opacity-60">The Visionaries</p>
                   </div>
                </div>
              </div>
              
              <m.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="mt-20 p-8 border border-white/5 bg-white/[0.02] rounded-[32px] backdrop-blur-xl"
              >
                <p className="text-[18px] md:text-[22px] italic text-[#bdaee7] font-light text-center leading-relaxed">
                  “Because in the end, it’s not just about being seen — it’s about being remembered.”
                </p>
              </m.div>
            </div>
          </m.div>

          {/* Visual Element */}
          <m.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="lg:col-span-5 sticky top-32"
          >
            <div className="relative aspect-[4/5] rounded-[40px] overflow-hidden border border-white/10 shadow-2xl">
              <img 
                src={foundersNoteImg} 
                alt="Strategy and Vision" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#13101C] via-transparent to-transparent opacity-60" />
              
              {/* Floating Quote Card */}
              <div className="absolute bottom-10 left-10 right-10 p-6 bg-[#13101C]/80 backdrop-blur-md rounded-2xl border border-white/5">
                 <p className="text-[#ca45ff] text-xs font-bold uppercase tracking-[20px] mb-2">STRATEGY</p>
                 <p className="text-white/80 text-sm font-light">"Strategy First, Then Shoot." — The Stori Teler Philosophy</p>
              </div>
            </div>
          </m.div>

        </div>
      </div>
    </div>
  );
}
