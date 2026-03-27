import imgWeWork from "@/assets/we work beyond the box.png";
import { m } from "framer-motion";

export default function AboutSection() {
  return (
    <section className="w-full mx-auto px-4 md:px-[8%] py-32 lg:py-56 relative z-10 bg-[#13101C] overflow-hidden">
      <div className="w-full max-w-[1600px] mx-auto relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-24">
        
        {/* Left Graphic Block */}
        <div className="w-full lg:w-[50%] flex justify-center lg:justify-start">
          <img 
            src={imgWeWork} 
            alt="We Work Beyond The Box" 
            className="w-full max-w-[650px] h-auto object-contain drop-shadow-2xl"
          />
        </div>

        {/* Right Content Block */}
        <m.div 
          className="w-full lg:w-[45%] flex flex-col items-center lg:items-start space-y-12"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <p className="text-[#e2d5ec] text-[16px] md:text-[18px] leading-[1.8] font-light tracking-wide text-justify lg:text-left">
            The Stori Teler is a strategic experiential marketing and events company built for businesses that value scale, credibility, and results. We design high-impact platforms that connect serious buyers with leading brands, transforming interactions into measurable growth, powerful positioning, and long-term industry influence across India’s most competitive and opportunity-driven markets.
          </p>
          
          {/* Pure Glass CTA Button */}
          <a 
            href="#contact" 
            className="relative group px-10 py-3.5 rounded-full bg-white/5 backdrop-blur-md border border-white/20 hover:bg-white/10 transition-all duration-300 shadow-[0_8px_32px_rgba(255,255,255,0.05)] inline-flex items-center justify-center overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent opacity-50 pointer-events-none rounded-full" />
            
            <span className="text-white font-semibold text-[14px] md:text-[15px] tracking-[1.5px] uppercase relative z-10 drop-shadow-md">
              Partner With Us
            </span>
          </a>
        </m.div>

      </div>
    </section>
  );
}
