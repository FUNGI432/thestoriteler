import { useEffect, useRef } from "react";
import { motion, useInView, useSpring, useTransform } from "framer-motion";

const metrics = [
  { value: 4678, suffix: "+", label: "Textile\nBusiness\nConnected" },
  { value: 80, suffix: "+", label: "Cities\nConnected\nGlobally" },
  { value: 17, suffix: "+", label: "Years of\nExperince" },
  { value: 60, suffix: "+", label: "Experiences\nCreated" },
];

function AnimatedNumber({ value, suffix = "" }: { value: number; suffix?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  const spring = useSpring(0, {
    bounce: 0,
    duration: 2500
  });

  useEffect(() => {
    if (isInView) {
      spring.set(value);
    }
  }, [isInView, value, spring]);

  const display = useTransform(spring, (current) => Math.round(current) + suffix);

  return <motion.span ref={ref}>{display}</motion.span>;
}

export default function MetricsSection() {
  return (
    <section className="relative w-full min-h-[800px] flex items-center justify-center py-32 lg:py-56 overflow-hidden bg-[#13101C]">

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-[1920px] mx-auto px-[10%]">
        
        {/* Section Typography Intro */}
        <div className="flex flex-col items-center justify-center text-center space-y-3 lg:space-y-4 mb-20 lg:mb-28">
          <h3 className="text-[20px] md:text-[24px] lg:text-[28px] font-black uppercase tracking-[2px] md:tracking-[4px]">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#ca45ff] via-[#8545ff] to-[#1c4eff]">
              Our Growing Footprint
            </span>
          </h3>
          
          <h2 className="text-[24px] md:text-[32px] lg:text-[40px] font-medium text-[#e2d5ec] uppercase tracking-wide">
            Expanding Across The World
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 lg:gap-8">
          
          {metrics.map((metric, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex flex-col items-center justify-center p-8 bg-white/[0.03] backdrop-blur-xl rounded-[24px] shadow-[inset_0_1px_1px_rgba(255,255,255,0.1),_0_8px_32px_rgba(0,0,0,0.5)] aspect-[3/4] border border-white/10 hover:bg-white/[0.05] hover:border-white/20 transition-all duration-500 ease-out group"
            >
              <h2 className="text-[60px] lg:text-[85.91px] text-white font-medium tracking-[-0.5155px] leading-tight text-center mb-8 drop-shadow-[0_2px_10px_rgba(255,255,255,0.2)]">
                <AnimatedNumber value={metric.value} suffix={metric.suffix} />
              </h2>
              
              <div className="w-full max-w-[260px] h-[1px] bg-gradient-to-r from-transparent via-[#bdaee7]/30 group-hover:via-[#bdaee7]/60 transition-colors duration-500 to-transparent mb-10" />
              
              <p className="text-[28px] lg:text-[42.182px] text-[#bdaee7] font-normal text-center leading-[1.1] whitespace-pre-line group-hover:text-white transition-colors duration-500">
                {metric.label}
              </p>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}
