// @ts-ignore
import CircularGallery from "@/components/ui/CircularGallery"

// Original full-wide image asset previously requested by Figma
// const imgImage17 = "http://localhost:3845/assets/cc23e900b1d7fd6dac8f5436c9b7fcef16b486ec.png";

export default function ExperienceSection() {
  return (
    <section className="w-full bg-gradient-to-b from-white to-[#f9f9f9] relative overflow-hidden py-24 lg:py-40">
      
      {/* Typography Block */}
      <div className="w-full max-w-[1920px] mx-auto px-4 flex flex-col items-center justify-center text-center space-y-6 relative z-10 mb-20 lg:mb-32">
        <h2 className="text-[60px] md:text-[80px] lg:text-[125.834px] font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#2ba7ff] via-[#ca45ff] to-[#fe881b] leading-[1.1] md:leading-[1.18] tracking-[-1px] lg:tracking-[-2px]">
          Experience the Energy.
        </h2>
        
        <p className="text-[18px] md:text-[22px] lg:text-[26.452px] text-black font-light tracking-[1px] leading-[1.4] max-w-[817px]">
          where every event is a story, and every story creates impact.
        </p>
      </div>

      {/* Image Arc Block */}
      <div style={{ height: '600px', position: 'relative' }} className="w-full max-w-[1920px] mx-auto mt-auto z-0 overflow-hidden lg:overflow-visible">
        {/* @ts-ignore */}
        <CircularGallery 
          bend={1} 
          textColor="#000000" 
          borderRadius={0.05} 
          scrollEase={0.05} 
          scrollSpeed={2}
        />
      </div>
      
    </section>
  );
}
