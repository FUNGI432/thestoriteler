import { useRef } from "react";
import {
  m,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame
} from "framer-motion";

import insta1 from "@/assets/insta_1.jpg";
import insta2 from "@/assets/insta_2.jpg";
import insta3 from "@/assets/insta_3.jpg";
import insta4 from "@/assets/insta_4.jpg";
import insta5 from "@/assets/insta_5.webp";
import insta6 from "@/assets/insta_6.webp";
import insta7 from "@/assets/insta_7.webp";
import insta8 from "@/assets/insta_8.webp";
import insta9 from "@/assets/insta_9.webp";
import insta10 from "@/assets/insta_10.webp";
import insta11 from "@/assets/insta_11.webp";
import insta12 from "@/assets/insta_12.webp";

const galleryImages = [
  insta1, insta2, insta3, insta4, insta5, insta6,
  insta7, insta8, insta9, insta10, insta11, insta12
];

// Duplicated 4 times to ensure it covers the screen and can wrap safely (48 items total per row)
const duplicatedItems = [...galleryImages, ...galleryImages, ...galleryImages, ...galleryImages];

const ImageCard = ({ src }: { src: string }) => (
  <div className="w-[169px] aspect-[169/211] rounded-[8px] md:rounded-[16px] overflow-hidden relative shrink-0 border border-white/5 shadow-[0_4px_16px_rgba(0,0,0,0.5)] group bg-[#201c29]">
    <img 
      src={src} 
      alt="Event showcase" 
      loading="lazy"
      width={169}
      height={211}
      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
    />
    <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-500" />
  </div>
);

interface ParallaxRowProps {
  baseVelocity: number;
  offset?: string;
}

function ParallaxRow({ baseVelocity, offset = "0px" }: ParallaxRowProps) {
  const baseX = useMotionValue(0); 
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400
  });

  // Map scrolling speed to a smaller velocity multiplier to keep it slow and premium
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 0.2], {
    clamp: false
  });

  const directionFactor = useRef<number>(1);

  useAnimationFrame((_, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 16);

    // If baseVelocity is positive, we want it to go right -> x increases.
    // If we scroll down (velocityFactor > 0), we want it to speed up in its current direction.
    // The directionFactor maintains the base direction, and the velocityFactor amplifies it.
    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    // Baseline movement + scroll amplified movement
    moveBy += directionFactor.current * moveBy * velocityFactor.get();

    let newX = baseX.get() + moveBy;

    // We duplicated the array 4 times. 
    // This means exactly 25% of the total width represents one full set of items.
    // We wrap 'newX' between 0% and -25% to loop seamlessly.
    if (newX <= -25) {
      newX += 25;
    } else if (newX > 0) {
      newX -= 25;
    }

    baseX.set(newX);
  });

  const x = useTransform(baseX, (v) => `${v}%`);

  return (
    <div 
      className="flex whitespace-nowrap" 
      style={{ 
        width: "150vw",
        marginLeft: "-25vw", /* Shift left so it bleeds off both ends uniformly */
        transform: `translateX(${offset})` /* Apply the staggered styling correctly */
      }}
    >
      <m.div className="flex gap-2 md:gap-4 min-w-max" style={{ x }}>
        {duplicatedItems.map((src, i) => (
          <ImageCard key={i} src={src} />
        ))}
      </m.div>
    </div>
  );
}

export default function ExperienceSection() {
  return (
    <section className="w-full bg-[#13101C] relative overflow-hidden py-32 lg:py-40">
      
      {/* Typography Block */}
      <m.div 
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="w-full max-w-[1920px] mx-auto px-4 flex flex-col items-center justify-center text-center space-y-6 relative z-10 mb-20"
      >
        <h2 className="text-[60px] md:text-[80px] lg:text-[125.834px] font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#2ba7ff] via-[#ca45ff] to-[#fe881b] leading-[1.1] md:leading-[1.18] tracking-[-1px] lg:tracking-[-2px]">
          Experience the Energy.
        </h2>
        
        <p className="text-[18px] md:text-[22px] lg:text-[26.452px] text-[#bdaee7] font-light tracking-[1px] leading-[1.4] max-w-[817px]">
          where every event is a story, and every story creates impact.
        </p>
      </m.div>

      {/* 3-Tier Multi-Directional Parallax Grid */}
      <div className="w-full flex flex-col space-y-2 md:space-y-4 overflow-hidden relative z-0">
        {/* Top: Rightwards */}
        <ParallaxRow baseVelocity={0.04} offset="-50px" />
        
        {/* Middle: Leftwards */}
        <ParallaxRow baseVelocity={-0.04} offset="50px" />
        
        {/* Bottom: Rightwards */}
        <ParallaxRow baseVelocity={0.04} offset="-150px" />
      </div>

      {/* Instagram CTA */}
      <m.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        className="w-full flex justify-center py-20 relative z-20"
      >
        <a 
          href="https://www.instagram.com/thestoriteler/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="px-10 py-5 rounded-full bg-white/5 border border-white/20 hover:bg-white/15 hover:border-[#ca45ff]/50 transition-all duration-300 backdrop-blur-md flex items-center gap-4 group shadow-[0_0_30px_rgba(202,69,255,0.0)] hover:shadow-[0_0_30px_rgba(202,69,255,0.2)]"
        >
          <span className="text-white font-medium tracking-[3px] uppercase text-sm md:text-base">View more on Instagram</span>
          <svg className="w-5 h-5 text-white group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </a>
      </m.div>

      {/* Soft overlay gradients on edges to mask elements wrapping */}
      <div className="absolute top-0 bottom-0 left-0 w-[5%] lg:w-[10%] bg-gradient-to-r from-[#13101C] to-transparent pointer-events-none z-10" />
      <div className="absolute top-0 bottom-0 right-0 w-[5%] lg:w-[10%] bg-gradient-to-l from-[#13101C] to-transparent pointer-events-none z-10" />

    </section>
  );
}
