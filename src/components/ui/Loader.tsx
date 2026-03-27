import { m } from "framer-motion";

export default function Loader() {
  return (
    <div className="fixed inset-0 z-[9999] bg-[#13101C] flex flex-col items-center justify-center overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute w-[400px] h-[400px] bg-[#ca45ff] opacity-10 blur-[100px] rounded-full animate-pulse" />
      
      {/* Spinner ring structure */}
      <div className="relative w-24 h-24 mb-10">
        <div className="absolute inset-0 border-4 border-white/5 rounded-full" />
        <div className="absolute inset-0 border-4 border-t-[#ca45ff] border-r-[#1c4eff] border-b-transparent border-l-transparent rounded-full animate-spin" />
      </div>

      {/* Pulsating Typography */}
      <m.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
        className="flex flex-col items-center gap-3"
      >
        <span className="text-white font-medium tracking-[8px] uppercase text-sm drop-shadow-md">
          Loading Experience
        </span>
        <span className="text-[#868097] text-xs font-light tracking-[3px] uppercase">
          The Stori Teler
        </span>
      </m.div>
    </div>
  );
}
