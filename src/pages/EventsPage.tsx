import { useEffect, useRef, useState } from "react";
import { m, useInView, useSpring, useTransform, AnimatePresence } from "framer-motion";

const AccordionCard = ({ ev, defaultExpanded = false }: { ev: any; defaultExpanded?: boolean }) => {
  const [isHovered, setIsHovered] = useState(defaultExpanded);

  return (
    <m.div
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className={`relative rounded-[32px] overflow-hidden p-[2px] cursor-pointer transition-colors duration-500 shrink-0 min-w-[60px] md:min-w-[80px] ${
        isHovered ? "bg-gradient-to-br from-[#1c4eff] via-[#ca45ff] to-[#fe881b]" : "bg-white/10"
      }`}
      animate={{ flex: isHovered ? 4 : 1 }}
      initial={{ flex: defaultExpanded ? 4 : 1 }}
      transition={{ type: "spring", stiffness: 200, damping: 25 }}
    >
      <div className="w-full h-full bg-[#13101c]/80 backdrop-blur-xl rounded-[30px] relative overflow-hidden group flex">
        
        {/* Background Event Image - ONLY when expanded, on the left side */}
        <AnimatePresence mode="wait">
          {ev.image && isHovered && (
            <m.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5, ease: "circOut" }}
              className="w-[45%] h-full relative z-0 border-r border-white/5"
            >
              <img 
                src={ev.image} 
                className="w-full h-full object-contain p-4 drop-shadow-[0_0_40px_rgba(202,69,255,0.1)] rounded-[50px]" 
                alt={ev.name}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#13101c]/20" />
            </m.div>
          )}
        </AnimatePresence>

        {/* Info Content - Moves to the right when expanded */}
        <div className={`h-full flex flex-col justify-end p-6 md:p-8 relative z-10 transition-all duration-500 ${isHovered ? "w-[55%] flex-1" : "w-full items-center justify-center p-0"}`}>
          {/* Abstract glow inside for visual interest */}
          <div className={`absolute -bottom-20 -right-20 w-64 h-64 rounded-full blur-[70px] transition-all duration-700 ${isHovered ? "opacity-40 bg-[#ca45ff]" : "opacity-0"}`} />

          <m.div 
            animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 20 }}
            initial={{ opacity: defaultExpanded ? 1 : 0, y: defaultExpanded ? 0 : 20 }}
            transition={{ duration: 0.4, delay: isHovered ? 0.2 : 0 }}
            className={`flex flex-col gap-2 whitespace-nowrap relative z-10 w-full ${!isHovered ? "pointer-events-none" : ""}`}
          >
            <h4 className="text-[26px] lg:text-[34px] font-black text-white drop-shadow-md w-full uppercase tracking-tighter mb-4 leading-none">{ev.name}</h4>
            
            <div className="flex flex-col text-[14px] lg:text-[15px] space-y-4 mt-2 w-full">
              {ev.venue && <div className="flex items-center gap-4 bg-white/5 p-4 rounded-3xl border border-white/10 shadow-lg group-hover:bg-white/10 transition-all duration-300"><span className="p-3 bg-white/5 rounded-2xl text-xl">📍</span> <span className="text-[#e2d5ec] font-medium leading-tight"><strong className="text-[#ca45ff] font-bold text-[10px] tracking-[2px] uppercase mb-1 block">OFFICIAL VENUE</strong>{ev.venue}</span></div>}
              {ev.org && <div className="flex items-center gap-4 bg-white/5 p-4 rounded-3xl border border-white/10 shadow-lg group-hover:bg-white/10 transition-all duration-300"><span className="p-3 bg-white/5 rounded-2xl text-xl">🎯</span> <span className="text-[#bdaee7] font-medium leading-tight"><strong className="text-[#ca45ff] font-bold text-[10px] tracking-[2px] uppercase mb-1 block">ORGANISER</strong>{ev.org}</span></div>}
              {ev.date && <div className="flex items-center gap-4 bg-white/5 p-4 rounded-3xl border border-white/10 shadow-lg group-hover:bg-white/10 transition-all duration-300"><span className="p-3 bg-white/5 rounded-2xl text-xl">📅</span> <span className="text-[#A69FB6] font-medium leading-tight"><strong className="text-[#ca45ff] font-bold text-[10px] tracking-[2px] uppercase mb-1 block">EVENT DATE</strong>{ev.date}</span></div>}
            </div>
          </m.div>
          
          {/* Collapsed Vertical Title */}
          <AnimatePresence>
            {!isHovered && (
              <m.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden"
              >
                <h4 className="text-white/20 text-[18px] md:text-[20px] font-black tracking-[4px] -rotate-90 origin-center uppercase drop-shadow-sm">
                  {ev.name}
                </h4>
              </m.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </m.div>
  );
};

const YearAccordionColumn = ({ group, defaultExpanded = false }: { group: any; defaultExpanded?: boolean }) => {
  const [isHovered, setIsHovered] = useState(defaultExpanded);

  return (
    <m.div
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="relative border-b md:border-b-0 md:border-r border-white/10 last:border-r-0 last:border-b-0 overflow-hidden flex flex-col bg-white/[0.01] hover:bg-white/[0.04] transition-colors duration-700 min-h-[150px] md:min-h-[600px] cursor-pointer group/col"
      animate={{ flex: isHovered ? 4 : 1 }}
      initial={{ flex: defaultExpanded ? 4 : 1 }}
      transition={{ type: "spring", stiffness: 200, damping: 25 }}
    >
      {/* Hollow Text Background Year - Rotated 90 degrees Clockwise */}
      <div className={`absolute inset-0 flex items-center justify-center pointer-events-none transition-opacity duration-700 select-none mix-blend-screen overflow-hidden ${isHovered ? 'opacity-0' : 'opacity-60'}`}>
          <span 
            className="text-[100px] lg:text-[140px] xl:text-[160px] font-black tracking-[10px] md:tracking-[15px] origin-center rotate-90"
            style={{ 
              color: 'transparent',
              WebkitTextStroke: '2px #ca45ff', 
            }}
          >
            {group.year}
          </span>
      </div>

      {/* Content wrapper - Only fully visible when hovered or expanded */}
      <m.div 
        animate={{ opacity: isHovered ? 1 : 0 }}
        initial={{ opacity: defaultExpanded ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="absolute inset-0 z-10 w-full h-full flex flex-col pointer-events-none p-6 lg:p-10" 
      >
        <div className={`w-full h-full flex flex-col ${isHovered ? "pointer-events-auto" : "pointer-events-none"}`}>
          {/* Top Year Label */}
          <h3 className="text-[#A69FB6] font-medium tracking-[4px] uppercase mb-8">#{group.year}</h3>

          {/* Content container */}
          <div className="flex flex-col space-y-6 mt-auto overflow-hidden">
             {group.events.map((ev: any, i: number) => (
                <div key={i} className="flex flex-col gap-1 border-l-[3px] border-[#ca45ff]/60 pl-5 min-w-max">
                  <h4 className="text-white font-bold text-[18px] md:text-[20px] leading-tight hover:text-[#ca45ff] transition-colors whitespace-nowrap overflow-hidden text-ellipsis">{ev.name}</h4>
                  {ev.venue && <span className="text-[#e2d5ec] text-[13px] whitespace-nowrap overflow-hidden text-ellipsis">📍 {ev.venue}</span>}
                  {ev.org && <span className="text-[#bdaee7] text-[13px] whitespace-nowrap overflow-hidden text-ellipsis">🎯 {ev.org}</span>}
                  {ev.date && <span className="text-[#A69FB6] text-[13px] whitespace-nowrap overflow-hidden text-ellipsis">📅 {ev.date}</span>}
                </div>
             ))}
          </div>
        </div>
      </m.div>
    </m.div>
  );
};

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

  return <m.span ref={ref} className="whitespace-nowrap">{display}</m.span>;
}

const metrics = [
  { value: 5000, suffix: "+", label: "Verified\nBuyers" },
  { value: 1000, suffix: "+", label: "Exhibitors" },
  { value: "Pan", suffix: " India", label: "Reach", isString: true },
  { value: "High", suffix: " Conversion", label: "Networking", isString: true },
];

const previousEventsByYear = [
  {
    year: "2023",
    events: [
      {
        name: "Kolkata Couture Expo",
        org: "Calcutta Saree Dealers Association & The South Calcutta Saree Dealers Welfare Association",
        date: "25th & 26th August 2023",
        venue: "Milan Mela, Kolkata"
      },
    ]
  },
  {
    year: "2024",
    events: [
      {
        name: "The Designer’s India",
        org: "Kolkata Fashion Expo",
        date: "17th & 18th March 2024",
        venue: "NSIC, Okhla, New Delhi"
      },
      {
        name: "Kolkata Fabric Expo",
        org: "The Stori Teler",
        date: "28th & 29th November 2024",
        venue: "Biswa Bangla, Eco Park, Kolkata"
      },
      {
        name: "Kolkata Couture Expo",
        org: "Calcutta Saree Dealers Association & The South Calcutta Saree Dealers Welfare Association",
        date: "1st & 2nd August 2024",
        venue: "Milan Mela, Kolkata"
      },
      {
        name: "Surat Fashion Summit",
        org: "GM Agency",
        date: "13 & 14 August 2024",
        venue: "Mahatma Mandir Convention Center"
      },
    ]
  },
  {
    year: "2025",
    events: [
      {
        name: "Kolkata Fabric Expo",
        org: "The Stori Teler",
        date: "26th & 27th May 2025",
        venue: "Biswa Bangla Convention Centre, Kolkata"
      },
      {
        name: "Bharat Ethnic Expo",
        org: "GM Agency",
        date: "21st & 22nd July 2025",
        venue: "Mahatma Mandir, Gandhinagar"
      },
      {
        name: "Delhi Tuff Ethnic Expo",
        org: "True Unity Group Association",
        date: "22 & 23 July 2025",
        venue: "Bharat Mandapam, New Delhi"
      },
      {
        name: "Kolkata Couture Expo",
        org: "Calcutta Saree Dealers Association & The South Calcutta Saree Dealers Welfare Association",
        date: "24th & 25th July 2025",
        venue: "Milan Mela, Kolkata"
      },
      {
        name: "Kerala Fashion Expo",
        org: "The Stori Teler",
        date: "Not Specified",
        venue: "Adlux International Convention Centre, Angamaly, Kerala",
        image: imgKeralaFashion
      },
      {
        name: "Signature Drapes by Dolly Jain",
        org: "The Stori Teler",
        date: "18 December 2025",
        venue: "Avadh Utopia, Surat"
      },
    ]
  }
];

const upcomingEvents = [
  {
    name: "Eco Threads",
    org: "Saurabh Nevatia",
    date: "17th & 18th May 2026",
    venue: "To be Revealed",
    image: imgEcoThreads
  },
  {
    name: "South Textile Expo",
    org: "The Stori Teler",
    date: "4 & 5 July 2026",
    venue: "Tripura Vasini, Palace Grounds, Bangalore",
    image: imgSouthTextile2
  },
  {
    name: "Bharat Ethnic Expo",
    org: "GM Agency",
    date: "To be Revealed",
    venue: "To be Revealed",
    image: imgBharatEthnic
  },
  {
    name: "Delhi Tuff Ethnic Expo",
    org: "True Unity Group Association",
    date: "30 & 31 July 2026",
    venue: "Bharat Mandapam, New Delhi",
    image: imgDelhiTuff
  },
  {
    name: "Kolkata Couture Expo",
    org: "Calcutta Saree Dealers Association & The South Calcutta Saree Dealers Welfare Association",
    date: "6 & 7 August 2026",
    venue: "Milan Mela, Kolkata",
    image: imgKolkataCouture
  },
];

import imgSouthTextile from "@/assets/south textile expo.jpeg"
import heroVideo from "@/assets/Ideation storiteler website - Whiteboard.mp4"

// New Upcoming Event Images
import imgEcoThreads from "@/assets/ecothreads.png"
import imgSouthTextile2 from "@/assets/south textile expo 2.png"
import imgBharatEthnic from "@/assets/bharat ethnic expo.png"
import imgDelhiTuff from "@/assets/delhi tuff.png"
import imgKolkataCouture from "@/assets/Kolkata couture expo.jpeg"
import imgKeralaFashion from "@/assets/kerala fashion expo.png"

// ... existing code ...

export default function EventsPage() {
  return (
    <div className="w-full bg-[#13101C] min-h-screen text-white overflow-x-hidden relative">
      
      {/* Background Soft Glows (confined to an overflow-hidden wrapper to prevent scroll- stretching) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-[120vh] left-[-10%] w-[50vw] h-[50vw] bg-[#ca45ff] opacity-[0.05] blur-[150px] rounded-full" />
        <div className="absolute top-[250vh] right-[-10%] w-[50vw] h-[50vw] bg-[#1c4eff] opacity-[0.05] blur-[150px] rounded-full" />
        <div className="absolute bottom-[20vh] left-[10%] w-[40vw] h-[40vw] bg-[#fe881b] opacity-[0.03] blur-[150px] rounded-full" />
      </div>

      {/* Hero Header - Split Glass Layout */}
      <div className="relative w-full min-h-screen flex">
        {/* Dynamic Video Background Layer */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden" aria-hidden="true">
          <video 
            autoPlay 
            loop 
            muted 
            playsInline 
            className="w-full h-full object-cover opacity-80"
          >
            <source src={heroVideo} type="video/mp4" />
          </video>
        </div>

        {/* Left Glass Panel (60% width on Desktop, full on mobile) */}
        <div className="relative z-10 w-full lg:w-[60%] min-h-screen bg-black/30 backdrop-blur-3xl border-r border-[#ca45ff]/20 flex flex-col justify-center px-8 lg:px-[10%] pt-32 pb-20 shadow-[20px_0_100px_rgba(0,0,0,0.5)]">
          
          <h3 className="text-[16px] md:text-[20px] text-[#A69FB6] font-medium tracking-[4px] uppercase mb-6 flex items-center gap-4">
            <span className="w-12 h-[1px] bg-[#ca45ff]"></span>
            Events Page
          </h3>
          
          <h2 className="text-[50px] md:text-[70px] xl:text-[90px] font-black uppercase tracking-tight leading-[1.05] mb-8">
            <span className="text-white">Where India’s</span>
            <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#ca45ff] via-[#8545ff] to-[#1c4eff]">
              Most Serious
            </span>
            <br />
            <span className="text-white">Business Happens.</span>
          </h2>

          <div className="w-full max-w-[500px] h-[1px] bg-gradient-to-r from-[#ca45ff]/50 to-transparent mb-8" />

          <h3 className="text-[20px] md:text-[28px] text-[#e2d5ec] font-medium tracking-wide leading-snug mb-6">
            Not Just Events.<br/> High-Value Business Opportunities.
          </h3>

          <p className="text-[16px] md:text-[18px] text-[#A69FB6] font-light tracking-[0.5px] max-w-[550px] leading-relaxed relative z-20">
            Curated, high-impact exhibitions and networking platforms designed for decision-makers, serious buyers, and brands ready to scale.
          </p>
          
          {/* subtle interior glow */}
          <div className="absolute bottom-0 left-0 w-full h-[50vh] bg-gradient-to-t from-[#ca45ff]/10 to-transparent pointer-events-none z-0" />
        </div>

        {/* Right Transparent Side (to show video cleanly) */}
        <div className="hidden lg:block relative z-10 w-[40%] bg-transparent" />
      </div>

      {/* Metrics Grid */}
      <div className="relative z-10 w-full max-w-[1920px] mx-auto px-4 sm:px-[10%] py-20 lg:py-32">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {metrics.map((metric, index) => (
            <m.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex flex-col items-center p-8 bg-white/[0.03] backdrop-blur-xl rounded-[24px] shadow-[inset_0_1px_1px_rgba(255,255,255,0.1),_0_8px_32px_rgba(0,0,0,0.5)] aspect-[3/4] border border-white/10 hover:bg-white/[0.05] hover:border-white/20 transition-all duration-500 ease-out group"
            >
              <div className="flex-1 flex items-center justify-center w-full min-h-[120px] px-2">
                <h2 className={`text-white font-medium tracking-[-1px] leading-[1.1] text-center drop-shadow-[0_2px_10px_rgba(255,255,255,0.2)] flex items-center justify-center ${metric.isString ? "text-[36px] lg:text-[48px]" : "text-[50px] lg:text-[70px] whitespace-nowrap"}`}>
                  {metric.isString ? (
                    <span className="leading-tight">{metric.value}{metric.suffix}</span>
                  ) : (
                    <AnimatedNumber value={metric.value as number} suffix={metric.suffix} />
                  )}
                </h2>
              </div>
              
              <div className="w-full max-w-[260px] h-[1px] bg-gradient-to-r from-transparent via-[#bdaee7]/30 group-hover:via-[#bdaee7]/60 transition-colors duration-500 to-transparent my-8" />
              
              {/* Label Zone - Fixed Height to align row-wise */}
              <div className="flex-1 flex items-center justify-center w-full min-h-[100px]">
                <p className="text-[26px] lg:text-[38px] text-[#bdaee7] font-normal text-center leading-[1.1] whitespace-pre-line group-hover:text-white transition-colors duration-500">
                  {metric.label}
                </p>
              </div>
            </m.div>
          ))}
        </div>
      </div>

      {/* Spotlight: South Textile Expo News */}
      <m.div 
        className="relative z-10 w-full max-w-[1400px] mx-auto px-4 py-20 lg:py-32"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <div className="w-full relative rounded-[32px] p-[2px] bg-gradient-to-br from-[#1c4eff] via-[#ca45ff] to-[#fe881b] overflow-hidden group">
          <div className="w-full h-full bg-[#13101C] rounded-[30px] p-8 md:p-16 flex flex-col md:flex-row items-center gap-12 justify-between backdrop-blur-3xl relative overflow-hidden">
            {/* Spotlight Glows */}
            <div className="absolute -top-32 -left-32 w-96 h-96 bg-[#1c4eff] opacity-20 blur-[100px] rounded-full" />
            
            <div className="flex-1 flex flex-col space-y-8 relative z-10">
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-1 rounded-full bg-white/10 border border-white/20 text-[#bdaee7] text-[12px] uppercase tracking-[2px] w-fit font-semibold">Spotlight 2026</span>
                <span className="px-4 py-1 rounded-full bg-[#ca45ff]/20 border border-[#ca45ff]/40 text-[#ca45ff] text-[12px] uppercase tracking-[2px] w-fit font-bold">Registration Open</span>
              </div>
              
              <div className="space-y-4">
                <h2 className="text-[40px] md:text-[60px] lg:text-[72px] font-black uppercase leading-[0.95] tracking-tight text-white drop-shadow-2xl">
                  South Textile <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#ca45ff] to-[#1c4eff]">Expo 2026</span>
                </h2>
                <h3 className="text-[20px] md:text-[24px] text-[#e2d5ec] font-medium tracking-wide leading-tight max-w-2xl">
                  South India’s Next Biggest B2B Destination for Women’s Ethnic Wear
                </h3>
              </div>

              <div className="flex flex-col space-y-2">
                <p className="text-[#fe881b] font-bold text-[18px] uppercase tracking-[2px]">Your next best-selling collections are waiting.</p>
                <p className="text-[#A69FB6] font-light text-[16px]">Where pan-India manufacturers meet South India’s most powerful buyers</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 py-6 border-y border-white/10">
                <div className="flex items-center gap-3">
                  <span className="text-[22px]">📍</span>
                  <span className="text-white font-medium">Bangalore</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-[22px]">📅</span>
                  <span className="text-white font-medium">4–5 July 2026</span>
                </div>
                <div className="flex items-center gap-3 text-[#ca45ff]">
                  <span className="text-[18px]">✨</span>
                  <span className="font-bold uppercase text-[13px] tracking-[1px]">The Stori Teler</span>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {["70+ Exhibitors", "Verified Buyers Only", "Pan-India Sourcing"].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-[#bdaee7] text-[14px] font-medium uppercase tracking-[1px]">
                    <span className="text-[#ca45ff]">✔</span> {item}
                  </div>
                ))}
              </div>

              <div className="space-y-4 pt-4">
                 <p className="text-white/80 font-bold uppercase tracking-[2px] text-sm">Everything in Women’s Ethnic Wear — Under One Roof</p>
                 <div className="flex flex-wrap gap-2">
                   {["Sarees", "Unstitched Suits", "Readymade Ethnic Wear", "Fabrics & Textiles"].map((cat, i) => (
                     <span key={i} className="px-3 py-1 bg-white/5 border border-white/10 rounded text-[12px] text-[#A69FB6] tracking-wider uppercase font-medium">{cat}</span>
                   ))}
                 </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6 border-t border-white/10">
                <div className="space-y-3">
                  <h4 className="text-white font-bold uppercase text-xs tracking-[2px] flex items-center gap-2">
                    <span className="w-4 h-[1px] bg-[#ca45ff]"></span> Exhibitors
                  </h4>
                  <p className="text-[#A69FB6] text-[14px] leading-relaxed">
                    70+ leading manufacturers showcasing their latest collections.<br/>
                    <span className="text-white/70 font-medium italic">Surat | Ahmedabad | Varanasi | Jaipur | Kolkata | Delhi | Bhagalpur | Mumbai | Bangalore</span>
                  </p>
                </div>
                <div className="space-y-3">
                  <h4 className="text-white font-bold uppercase text-xs tracking-[2px] flex items-center gap-2">
                    <span className="w-4 h-[1px] bg-[#1c4eff]"></span> Buyers
                  </h4>
                  <p className="text-[#A69FB6] text-[14px] leading-relaxed">
                    Curated for South Indian market demand.<br/>
                    <span className="text-white/70 font-medium italic text-xs uppercase tracking-wider">TN | KA | KL | AP | TS</span><br/>
                    <span className="text-[#bdaee7]">Retailers | Wholesalers | Boutique Owners | Exporters</span>
                  </p>
                </div>
              </div>

            </div>

            <div className="shrink-0 flex flex-col items-center gap-8 relative z-10 w-full md:w-[400px]">
              <div className="w-full relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-[#ca45ff] to-[#1c4eff] rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200" />
                <img 
                  src={imgSouthTextile} 
                  alt="South Textile Expo" 
                  className="relative w-full h-[550px] rounded-2xl shadow-2xl border border-white/10 object-cover"
                />
              </div>

              <div className="w-full flex flex-col gap-4">
                <m.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <p className="text-center text-[#A69FB6] text-[12px] uppercase tracking-[2px] font-bold mb-4">- Pre-Registration is Now Open -</p>
                  <a 
                    href="#" 
                    className="w-full block text-center px-10 py-5 rounded-full bg-gradient-to-r from-[#ca45ff] to-[#1c4eff] text-white font-black uppercase tracking-[2px] text-[16px] hover:scale-105 transition-transform shadow-[0_0_30px_rgba(202,69,255,0.4)]"
                  >
                    Pre-Register as Buyer
                  </a>
                </m.div>

                <a 
                  href="#" 
                  className="w-full text-center px-10 py-4 rounded-full border border-white/20 text-white font-bold uppercase tracking-[2px] text-[14px] hover:bg-white/10 transition-colors"
                >
                  Join Waitlist (Exhibitors)
                </a>

                <p className="text-center text-white/50 text-[11px] leading-tight px-6 italic">
                  Limited access. Entry for verified B2B buyers only. Are you a textile buyer?
                </p>
              </div>
            </div>
          </div>
        </div>
      </m.div>

      {/* Main Lists Section */}
      <div className="w-full max-w-[1400px] mx-auto px-4 relative z-10 flex flex-col gap-24 py-20 lg:py-32">
        <m.div 
          className="text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-[30px] md:text-[45px] font-bold text-white uppercase tracking-tight">
            Our Events <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ca45ff] to-[#1c4eff]">& Venues</span>
          </h2>
          <p className="text-[#A69FB6] text-[16px] uppercase tracking-[2px] mt-4">Organised Platforms driving Business</p>
        </m.div>

        {/* Upcoming Events - Interactive Accordion */}
        <m.div 
          className="flex flex-col space-y-8"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          <h3 className="text-[28px] md:text-[36px] font-medium text-white border-b border-white/10 pb-4 inline-block tracking-tight w-fit">
            Upcoming Events
          </h3>
          
          <div className="flex flex-col md:flex-row w-full h-[600px] md:h-[450px] gap-4">
            {upcomingEvents.map((ev, i) => (
              <AccordionCard key={i} ev={ev} defaultExpanded={i === 0} />
            ))}
          </div>
        </m.div>

        {/* Previous Events - Wireframe Columns */}
        <m.div 
          className="w-full flex flex-col lg:flex-row min-h-[600px] border border-white/10 rounded-[32px] overflow-hidden mt-12 mb-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          
          {/* Left Panel: We Create History */}
          <div className="w-full lg:w-[40%] bg-black/40 backdrop-blur-3xl flex flex-col justify-center p-12 lg:p-20 border-b lg:border-b-0 lg:border-r border-white/10 relative overflow-hidden shrink-0">
            {/* Soft background glow */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-[#1c4eff] opacity-10 blur-[100px] rounded-full" />
            
            <h2 className="text-[60px] md:text-[80px] xl:text-[100px] font-black leading-[1.05] tracking-tight relative z-10">
               <span className="text-white block">We</span>
               <span className="text-white block">Create</span>
               <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#ca45ff] via-[#8545ff] to-[#1c4eff] block pb-2">History.</span>
            </h2>
            <div className="w-24 h-[4px] rounded-full bg-gradient-to-r from-[#ca45ff] to-[#fe881b] mt-12 relative z-10" />
          </div>

          {/* Columns for Years */}
          <div className="flex-1 flex flex-col md:flex-row justify-end bg-[#13101C]">
             {previousEventsByYear.map((group, i) => (
                <YearAccordionColumn key={group.year} group={group} defaultExpanded={i === 0} />
             ))}
          </div>
        </m.div>

      </div>

    </div>
  );
}
