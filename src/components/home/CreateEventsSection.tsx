import { m } from "framer-motion";

const Bubble = ({ size, top, left, delay, duration }: { size: number, top: string, left: string, delay: number, duration: number }) => {
  return (
    <m.div
      className="absolute pointer-events-none"
      style={{
        width: size,
        height: size,
        top,
        left,
        boxShadow: `
          inset 0 0 20px rgba(255, 255, 255, 0.15),
          inset 10px 0 60px rgba(202, 69, 255, 0.3),
          inset -20px 0 60px rgba(28, 78, 255, 0.3),
          inset 0 -20px 40px rgba(255, 255, 255, 0.1),
          0 0 20px rgba(255, 255, 255, 0.05)
        `,
        background: "radial-gradient(circle at 25% 25%, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0.02) 20%, transparent 60%)",
        backdropFilter: "blur(3px)",
      }}
      animate={{
        y: [0, -40, 0],
        x: [0, 40, -10, 0],
        scaleX: [1, 1.05, 0.95, 1],
        scaleY: [1, 0.95, 1.05, 1],
        borderRadius: ["50%", "50%", "50%", "50%"]
      }}
      transition={{
        duration: duration,
        repeat: Infinity,
        ease: "easeInOut",
        delay: delay
      }}
    />
  );
};

export default function CreateEventsSection() {
  return (
    <section className="relative w-full min-h-[80vh] flex flex-col items-center justify-center py-32 lg:py-56 bg-[#13101C] z-20">
      
      {/* Background Animated Bubbles - Repositioned strictly to the central focal area */}
      <Bubble size={300} top="15%" left="20%" delay={0} duration={24} />
      <Bubble size={380} top="25%" left="55%" delay={2} duration={32} />
      <Bubble size={180} top="65%" left="25%" delay={5} duration={28} />
      <Bubble size={250} top="75%" left="60%" delay={1} duration={36} />
      <Bubble size={120} top="45%" left="22%" delay={3} duration={20} />

      {/* Main Typography Content */}
      <m.div 
        className="relative z-10 flex flex-col items-center text-center space-y-4 px-4 max-w-4xl mx-auto"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
                <h2 className="text-[#898989] text-[24px] md:text-[32px] lg:text-[49.88px] font-bold tracking-[-1px] leading-[1.1]">
            We don't just<br />
            Create <span className="text-[#c7c7c7]">events</span>
          </h2>
        
        <h3 className="text-[18px] md:text-[24px] text-[#A69FB6] font-light tracking-[2px] md:tracking-[4px] uppercase pt-4">
          We create stories that
        </h3>
        
        <h2 className="text-[50px] md:text-[80px] lg:text-[100px] font-black uppercase tracking-tight leading-[1.1] pb-4">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#1c4eff] via-[#8545ff] to-[#ca45ff]">
            Drive Business
          </span>
        </h2>

        <p className="text-[12px] md:text-[14px] lg:text-[16px] text-[#868097] font-light tracking-[1.5px] md:tracking-[3px] uppercase max-w-3xl pt-8 leading-relaxed">
          From concept to execution, we design experiences that engage, influence, and convert.
        </p>

      </m.div>
      
    </section>
  );
}
