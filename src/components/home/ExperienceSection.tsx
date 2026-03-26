import { useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame
} from "framer-motion";

const galleryImages = [
  "https://picsum.photos/seed/1/800/600?grayscale",
  "https://picsum.photos/seed/2/800/600?grayscale",
  "https://picsum.photos/seed/3/800/600?grayscale",
  "https://picsum.photos/seed/4/800/600?grayscale",
  "https://picsum.photos/seed/5/800/600?grayscale",
  "https://picsum.photos/seed/16/800/600?grayscale",
  "https://picsum.photos/seed/17/800/600?grayscale",
  "https://picsum.photos/seed/8/800/600?grayscale",
  "https://picsum.photos/seed/9/800/600?grayscale",
  "https://picsum.photos/seed/10/800/600?grayscale",
  "https://picsum.photos/seed/21/800/600?grayscale",
  "https://picsum.photos/seed/12/800/600?grayscale"
];

// Duplicated 4 times to ensure it covers the screen and can wrap safely (48 items total per row)
const duplicatedItems = [...galleryImages, ...galleryImages, ...galleryImages, ...galleryImages];

const ImageCard = ({ src }: { src: string }) => (
  <div className="w-[90px] md:w-[140px] lg:w-[190px] aspect-[4/3] rounded-[8px] md:rounded-[16px] overflow-hidden relative shrink-0 border border-white/5 shadow-[0_4px_16px_rgba(0,0,0,0.5)] group bg-[#201c29]">
    <img src={src} alt="Event showcase" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
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
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 0.5], {
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
      <motion.div className="flex gap-2 md:gap-4 min-w-max" style={{ x }}>
        {duplicatedItems.map((src, i) => (
          <ImageCard key={i} src={src} />
        ))}
      </motion.div>
    </div>
  );
}

export default function ExperienceSection() {
  return (
    <section className="w-full bg-[#13101C] relative overflow-hidden py-32 lg:py-40">
      
      {/* Typography Block */}
      <div className="w-full max-w-[1920px] mx-auto px-4 flex flex-col items-center justify-center text-center space-y-6 relative z-10 mb-20">
        <h2 className="text-[60px] md:text-[80px] lg:text-[125.834px] font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#2ba7ff] via-[#ca45ff] to-[#fe881b] leading-[1.1] md:leading-[1.18] tracking-[-1px] lg:tracking-[-2px]">
          Experience the Energy.
        </h2>
        
        <p className="text-[18px] md:text-[22px] lg:text-[26.452px] text-[#bdaee7] font-light tracking-[1px] leading-[1.4] max-w-[817px]">
          where every event is a story, and every story creates impact.
        </p>
      </div>

      {/* 3-Tier Multi-Directional Parallax Grid */}
      <div className="w-full flex flex-col space-y-2 md:space-y-4 overflow-hidden relative z-0">
        {/* Top: Rightwards */}
        <ParallaxRow baseVelocity={0.08} offset="-50px" />
        
        {/* Middle: Leftwards */}
        <ParallaxRow baseVelocity={-0.08} offset="50px" />
        
        {/* Bottom: Rightwards */}
        <ParallaxRow baseVelocity={0.08} offset="-150px" />
      </div>

      {/* Soft overlay gradients on edges to mask elements wrapping */}
      <div className="absolute top-0 bottom-0 left-0 w-[5%] lg:w-[10%] bg-gradient-to-r from-[#13101C] to-transparent pointer-events-none z-10" />
      <div className="absolute top-0 bottom-0 right-0 w-[5%] lg:w-[10%] bg-gradient-to-l from-[#13101C] to-transparent pointer-events-none z-10" />

    </section>
  );
}
