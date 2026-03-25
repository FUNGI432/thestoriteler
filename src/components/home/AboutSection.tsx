import imgImage15 from "@/assets/about-story.png";

export default function AboutSection() {
  return (
    <section className="w-full max-w-[1920px] mx-auto px-[10%] py-24 lg:py-40 relative z-10 bg-white">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-24">
        
        {/* Left Typography Block */}
        <div className="w-full lg:w-[45%] flex flex-col justify-center space-y-12">
          
          <div className="space-y-4">
            <h2 className="text-[32px] md:text-[40px] text-[#4b4b4b] font-light tracking-[-1px] leading-tight">
              It’s not about marketing brands,
            </h2>
            
            <h3 className="text-[44px] md:text-[61.3px] tracking-[-2.17px] leading-[1.1]">
              <span className="font-normal text-[#1a0b54]">It’s about telling </span>
              {/* Note: The period is included in the gradient text according to Figma */}
              <span className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#2ba7ff] via-[#ca45ff] to-[#fe881b]">
                stories.
              </span>
            </h3>
          </div>

          <p className="text-[18px] md:text-[21.3px] text-[#5d5977] font-normal leading-[1.4] tracking-[-0.8px] max-w-[560px]">
            The Stori Teler is a strategic experiential marketing and events company built for businesses that value scale, credibility, and results. We design high-impact platforms that connect serious buyers with leading brands, transforming interactions into measurable growth, powerful positioning, and long-term industry influence across India’s most competitive and opportunity-driven markets.
          </p>

        </div>

        {/* Right Image Block */}
        <div className="w-full lg:w-[55%] flex justify-end">
          {/* Gradient Border Wrapper */}
          <div className="relative rounded-[16px] p-1 bg-gradient-to-br from-[#fe881b] via-[#ca45ff] to-[#1c4eff] shadow-2xl w-full max-w-[1019px]">
            <img 
              alt="Storyteller Event Marketing Showcase" 
              className="w-full h-auto object-cover rounded-[13px] pointer-events-none" 
              src={imgImage15} 
            />
          </div>
        </div>

      </div>
    </section>
  );
}
