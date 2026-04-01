import { useEffect, useRef, useState } from "react";
import { m, useInView, useSpring, useTransform, AnimatePresence } from "framer-motion";
import { X, Calendar, MapPin, Target, Users, TrendingUp, Presentation, Clock, ArrowUpRight } from "lucide-react";

const AccordionCard = ({ ev, defaultExpanded = false, onClick }: { ev: any; defaultExpanded?: boolean; onClick?: () => void }) => {
  const [isHovered, setIsHovered] = useState(defaultExpanded);

  return (
    <m.div
      onClick={onClick}
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
              className="w-[40%] h-full relative z-0 border-r border-white/5"
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
        <div className={`h-full flex flex-col justify-end p-6 md:p-8 relative z-10 transition-all duration-500 ${isHovered ? "w-[60%] flex-1" : "w-full items-center justify-center p-0"}`}>
          {/* Abstract glow inside for visual interest */}
          <div className={`absolute -bottom-20 -right-20 w-64 h-64 rounded-full blur-[70px] transition-all duration-700 ${isHovered ? "opacity-40 bg-[#ca45ff]" : "opacity-0"}`} />

          <m.div 
            animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 20 }}
            initial={{ opacity: defaultExpanded ? 1 : 0, y: defaultExpanded ? 0 : 20 }}
            transition={{ duration: 0.4, delay: isHovered ? 0.2 : 0 }}
            className={`flex flex-col gap-2 relative z-10 w-full ${!isHovered ? "pointer-events-none" : ""}`}
          >
            <div className="flex justify-between items-start w-full">
              <h4 className="text-[22px] lg:text-[28px] font-black text-white drop-shadow-md flex-1 uppercase tracking-tighter mb-4 leading-tight break-words whitespace-normal px-1">{ev.name}</h4>
              <m.div
                animate={{ opacity: isHovered ? 1 : 0, scale: isHovered ? 1 : 0.8 }}
                className="p-2 bg-[#ca45ff]/20 rounded-full border border-[#ca45ff]/40 text-[#ca45ff] ml-2 shrink-0 group-hover:bg-[#ca45ff] group-hover:text-white transition-colors duration-300"
              >
                <ArrowUpRight size={20} />
              </m.div>
            </div>
            
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

const YearAccordionColumn = ({ group, defaultExpanded = false, onEventClick }: { group: any; defaultExpanded?: boolean; onEventClick?: (ev: any) => void }) => {
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
                <div 
                  key={i} 
                  onClick={() => onEventClick && onEventClick(ev)}
                  className="flex flex-col gap-1 border-l-[3px] border-[#ca45ff]/60 pl-5 min-w-max cursor-pointer group/item relative"
                >
                  <div className="flex items-center gap-2">
                    <h4 className="text-white font-bold text-[18px] md:text-[20px] leading-tight group-hover/item:text-[#ca45ff] transition-colors whitespace-nowrap overflow-hidden text-ellipsis">{ev.name}</h4>
                    <ArrowUpRight size={16} className="text-[#ca45ff] opacity-0 group-hover/item:opacity-100 group-hover/item:translate-x-1 group-hover/item:-translate-y-1 transition-all duration-300 shrink-0" />
                  </div>
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
        org: "Calcutta Saree Dealers Association & South Calcutta Saree Dealers Welfare Association",
        date: "25th & 26th August 2023",
        venue: "Milan Mela, Kolkata",
        exhibitors: "70+",
        buyers: "1000+",
        days: "2–3 Days",
        impact: "₹12–18 Cr+ business generated",
        image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=1200",
        desc: "A premium exhibition that brought together top-tier manufacturers and verified buyers, creating a powerful platform for networking, product discovery, and monumental business agreements in the textile sector."
      },
    ]
  },
  {
    year: "2024",
    events: [
      {
        name: "The Designer’s India",
        org: "Kolkata Fashion Expo / Industry Associations",
        date: "17th & 18th March 2024",
        venue: "NSIC, Okhla, New Delhi",
        exhibitors: "80+",
        buyers: "1500+",
        days: "2–3 Days",
        impact: "₹15–20 Cr+ business generated",
        image: "https://images.unsplash.com/photo-1515162816999-a0c47dc192f7?auto=format&fit=crop&q=80&w=1200",
        desc: "A dedicated regional showcase engineered to bridge the gap between national supply and local demand in the textile sector. The event set new benchmarks for high-value B2B engagement."
      },
      {
        name: "Kolkata Fabric Expo",
        org: "The Stori Teler",
        date: "28th & 29th November 2024",
        venue: "Biswa Bangla, Eco Park, Kolkata",
        exhibitors: "60+",
        buyers: "1200+",
        days: "2 Days",
        impact: "₹10–15 Cr+ business generated",
        image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&q=80&w=1200",
        desc: "A targeted industry convergence focusing exclusively on high-value ethnic wear fabrics, offering curated brands an unparalleled opportunity to scale their wholesale operations."
      },
      {
        name: "Kolkata Couture Expo",
        org: "Calcutta Saree Dealers Association & South Calcutta Saree Dealers Welfare Association",
        date: "1st & 2nd August 2024",
        venue: "Milan Mela, Kolkata",
        exhibitors: "70+",
        buyers: "1000+",
        days: "2–3 Days",
        impact: "₹12–18 Cr+ business generated",
        image: "https://images.unsplash.com/photo-1621252179027-94459d278660?auto=format&fit=crop&q=80&w=1200",
        desc: "Showcasing the pinnacle of ethnic craftsmanship, this event solidified industry bonds by presenting forward-looking couture trends to thousands of organized buyers."
      },
      {
        name: "Bharat Ethnic Expo – Gandhinagar",
        org: "GM Agency",
        date: "13 & 14 August 2024",
        venue: "Mahatma Mandir Convention Center",
        exhibitors: "45+",
        buyers: "500+",
        days: "2 Days",
        impact: "₹8–12 Cr+ business generated",
        image: "https://images.unsplash.com/photo-1558008258-3256797b43f3?auto=format&fit=crop&q=80&w=1200",
        desc: "A sprawling platform built for scale, enabling vast networking and immediate order fulfillment for the fast-moving ethnic wear category across Western India."
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
        venue: "Biswa Bangla Convention Centre, Kolkata",
        exhibitors: "60+",
        buyers: "1200+",
        days: "2 Days",
        impact: "₹10–15 Cr+ business generated",
        image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&q=80&w=1200",
        desc: "A targeted industry convergence focusing exclusively on high-value ethnic wear fabrics, offering curated brands an unparalleled opportunity to scale their wholesale operations."
      },
      {
        name: "Bharat Ethnic Expo",
        org: "GM Agency",
        date: "21st & 22nd July 2025",
        venue: "Mahatma Mandir, Gandhinagar",
        exhibitors: "45+",
        buyers: "500+",
        days: "2 Days",
        impact: "₹8–12 Cr+ business generated",
        image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=1200",
        desc: "A sprawling platform built for scale, enabling vast networking and immediate order fulfillment for the fast-moving ethnic wear category across Western India."
      },
      {
        name: "Delhi Tuff Ethnic Expo",
        org: "Industry Organisers",
        date: "22 & 23 July 2025",
        venue: "Bharat Mandapam, New Delhi",
        exhibitors: "120+",
        buyers: "4000+",
        days: "2 Days",
        impact: "₹25–30 Cr+ business generated",
        image: "https://images.unsplash.com/photo-1515162816999-a0c47dc192f7?auto=format&fit=crop&q=80&w=1200",
        desc: "Establishing dominance in the capital, this massive expo facilitated record-breaking networking densities, bringing together key national manufacturers and immense buyer volume."
      },
      {
        name: "Kolkata Couture Expo",
        org: "Industry Organisers",
        date: "24th & 25th July 2025",
        venue: "Milan Mela, Kolkata",
        exhibitors: "70+",
        buyers: "1000+",
        days: "2–3 Days",
        impact: "₹12–18 Cr+ business generated",
        image: "https://images.unsplash.com/photo-1621252179027-94459d278660?auto=format&fit=crop&q=80&w=1200",
        desc: "Showcasing the pinnacle of ethnic craftsmanship, this event solidified industry bonds by presenting forward-looking couture trends to thousands of organized buyers."
      },
      {
        name: "Kerala Fashion Expo",
        org: "Industry Organisers",
        date: "Not Specified",
        venue: "Adlux International Convention Centre, Angamaly, Kerala",
        exhibitors: "50+",
        buyers: "800+",
        days: "2 Days",
        impact: "₹8–10 Cr+ business generated",
        image: imgKeralaFashion,
        desc: "Bridging cultural aesthetics with high-value retail trade, this southern expo established a fresh corridor for deep business growth and sustainable regional sourcing."
      },
      {
        name: "Signature Drapes by Dolly Jain",
        org: "The Stori Teler",
        date: "18 December 2025",
        venue: "Avadh Utopia, Surat",
        exhibitors: "20+ (curated showcase)",
        buyers: "300+ (premium audience)",
        days: "1 Day",
        impact: "₹3–5 Cr+ business generated",
        image: "https://images.unsplash.com/photo-1558008258-3256797b43f3?auto=format&fit=crop&q=80&w=1200",
        desc: "An exclusive, invitation-only curation blending luxury art, prestige networking, and high-fashion dialogue. A defining moment for premium positioning within the niche segment."
      },
    ]
  }
];

const upcomingEvents = [
  {
    name: "Eco Threads",
    org: "Industry Collaboration",
    date: "17th & 18th May 2026",
    venue: "Kolkata",
    exhibitors: "50+",
    buyers: "800+",
    days: "2 Days",
    impact: "₹10–12 Cr+ projected business",
    image: imgEcoThreads,
    desc: "A visionary platform converging sustainability and textile excellence. Designed to connect eco-conscious brands with high-intent buyers seeking the next wave of industry standards."
  },
  {
    name: "South Textile Expo",
    org: "The Stori Teler",
    date: "4th – 5th July 2026",
    venue: "Tripura Vasini, Palace Grounds, Bangalore",
    exhibitors: "70+",
    buyers: "1500+ (South India focused)",
    days: "2 Days",
    impact: "₹20–25 Cr+ projected business",
    image: imgSouthTextile2,
    desc: "Set to be South India's next biggest B2B destination for women's ethnic wear. A sprawling, high-growth environment structured to connect powerful southern buyers with pan-India supply."
  },
  {
    name: "Bharat Ethnic Expo",
    org: "GM Agency",
    date: "To be Revealed",
    venue: "Gandhinagar",
    exhibitors: "50+",
    buyers: "700+",
    days: "2 Days",
    impact: "₹10–15 Cr+ projected business",
    image: imgBharatEthnic,
    desc: "Continuing the legacy of high-volume trade in Western India. This upcoming edition focuses on rapid order fulfillment and deep-network expansions for emerging and established labels."
  },
  {
    name: "Delhi Tuff Ethnic Expo",
    org: "Industry Organisers",
    date: "30 & 31 July 2026",
    venue: "Bharat Mandapam, Delhi",
    exhibitors: "120+",
    buyers: "4000+",
    days: "2 Days",
    impact: "₹30 Cr+ projected business",
    image: imgDelhiTuff,
    desc: "The premier capital exhibition scaling exponentially. A must-attend intersection for global and national distributors driving massive pipeline growth in the ethnic apparel sector."
  },
  {
    name: "Kolkata Couture Expo",
    org: "Industry Organisers",
    date: "6 & 7 August 2026",
    venue: "Milan Mela, Kolkata",
    exhibitors: "80+",
    buyers: "1200+",
    days: "2–3 Days",
    impact: "₹15–20 Cr+ projected business",
    image: imgKolkataCouture,
    desc: "An elaborate, premium showcase dedicated to luxury wedding dynamics and intricate ethnic couture. Expect an engaged audience, refined curation, and immense transactional value."
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
  const [selectedEvent, setSelectedEvent] = useState<any | null>(null);

  // Scroll lock when modal is open
  useEffect(() => {
    if (selectedEvent) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [selectedEvent]);

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
      <div className="w-full max-w-[1600px] mx-auto px-4 relative z-10 flex flex-col gap-24 py-20 lg:py-32">
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
          
          <div className="flex flex-col md:flex-row w-full h-[600px] md:h-[550px] gap-4">
            {upcomingEvents.map((ev, i) => (
              <AccordionCard key={i} ev={ev} defaultExpanded={i === 0} onClick={() => setSelectedEvent(ev)} />
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
                <YearAccordionColumn key={group.year} group={group} defaultExpanded={i === 0} onEventClick={setSelectedEvent} />
             ))}
          </div>
        </m.div>

      </div>

      {/* EVENT MODAL POPUP - RE-ARCHITECTED ENLARGED LAYOUT */}
      <AnimatePresence>
        {selectedEvent && (
          <m.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 bg-black/80 backdrop-blur-lg"
            onClick={() => setSelectedEvent(null)}
          >
            <m.div 
              initial={{ opacity: 0, scale: 0.98, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", damping: 30, stiffness: 350 }}
              className="bg-[#110e17] border border-[#ca45ff]/20 w-full max-w-[1100px] h-full max-h-[90vh] md:max-h-[85vh] rounded-[32px] md:rounded-[40px] shadow-[0_30px_100px_rgba(0,0,0,0.9),_0_0_50px_rgba(202,69,255,0.15)] overflow-hidden relative flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Decorative Glows */}
              <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#ca45ff] blur-[150px] opacity-[0.15] pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#1c4eff] blur-[150px] opacity-[0.1] pointer-events-none" />

              {/* Header Strip with Close Button */}
              <div className="absolute top-6 right-6 z-50">
                <button 
                  onClick={() => setSelectedEvent(null)}
                  className="p-3 bg-black/50 hover:bg-[#ca45ff] border border-white/10 rounded-full transition-colors shrink-0 text-white/50 hover:text-white backdrop-blur-md group"
                >
                  <X size={24} strokeWidth={2} className="group-hover:rotate-90 transition-transform duration-300" />
                </button>
              </div>

              {/* Scrolling Content Area */}
              <div className="overflow-y-auto w-full h-full custom-scrollbar relative z-10">
                
                {/* Hero Banner Area inside Modal */}
                <div className="relative w-full h-[30vh] md:h-[40vh] shrink-0 border-b border-white/5 overflow-hidden group">
                  <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#110e17] via-[#110e17]/40 to-black/20" />
                  <img 
                    src={selectedEvent.image || "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=1200"} 
                    alt={selectedEvent.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 grayscale-[20%]"
                  />
                  {/* Floating Title Inside Banner */}
                  <div className="absolute bottom-10 left-8 md:left-12 z-20 max-w-2xl">
                    <span className="text-[#ca45ff] text-[11px] md:text-xs font-black uppercase tracking-[6px] mb-3 block drop-shadow-lg bg-black/50 px-3 py-1 w-fit rounded-full border border-white/10 backdrop-blur-md">Event Profile</span>
                    <h3 className="text-[36px] md:text-[52px] font-black uppercase tracking-tighter leading-[0.9] text-white drop-shadow-[0_4px_20px_rgba(0,0,0,0.8)]">
                      {selectedEvent.name}
                    </h3>
                  </div>
                </div>

                {/* Info Grid - 60/40 Split */}
                <div className="p-8 md:p-12 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
                  
                  {/* Left Column: Description & Metadata */}
                  <div className="lg:col-span-7 space-y-10">
                    
                    {/* Generative Description Block */}
                    {selectedEvent.desc && (
                      <div className="space-y-4">
                        <h4 className="text-white font-bold tracking-[2px] uppercase text-sm border-b border-white/10 pb-4 flex items-center gap-3">
                          <span className="w-6 h-1 bg-[#1c4eff] rounded-full" /> About The Event
                        </h4>
                        <p className="text-[16px] md:text-[18px] leading-[1.8] font-light text-[#A69FB6]">
                          {selectedEvent.desc}
                        </p>
                      </div>
                    )}

                    {/* Basic Logistics Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
                      {selectedEvent.date && <div className="flex items-start gap-4">
                        <span className="p-3 bg-white/[0.03] border border-white/5 rounded-xl text-[#ca45ff] shrink-0"><Calendar size={20} strokeWidth={2}/></span>
                        <div>
                          <p className="text-[10px] font-bold uppercase tracking-[2px] text-white/40 mb-1">Date</p>
                          <p className="text-white text-[15px] font-medium leading-tight">{selectedEvent.date}</p>
                        </div>
                      </div>}

                      {selectedEvent.venue && <div className="flex items-start gap-4">
                        <span className="p-3 bg-white/[0.03] border border-white/5 rounded-xl text-[#ca45ff] shrink-0"><MapPin size={20} strokeWidth={2}/></span>
                        <div>
                          <p className="text-[10px] font-bold uppercase tracking-[2px] text-white/40 mb-1">Venue</p>
                          <p className="text-white text-[15px] font-medium leading-tight">{selectedEvent.venue}</p>
                        </div>
                      </div>}

                      {selectedEvent.org && <div className="flex items-start gap-4 sm:col-span-2">
                        <span className="p-3 bg-white/[0.03] border border-white/5 rounded-xl text-[#ca45ff] shrink-0"><Target size={20} strokeWidth={2}/></span>
                        <div>
                          <p className="text-[10px] font-bold uppercase tracking-[2px] text-white/40 mb-1">Organised By</p>
                          <p className="text-white text-[15px] font-medium leading-tight">{selectedEvent.org}</p>
                        </div>
                      </div>}
                    </div>

                  </div>

                  {/* Right Column: High Value Analytics Card */}
                  <div className="lg:col-span-5 relative">
                    <div className="sticky top-0 bg-[#15111b] border border-[#ca45ff]/20 rounded-[32px] p-8 space-y-8 shadow-[0_10px_40px_rgba(0,0,0,0.5)] overflow-hidden">
                      {/* Sub-card glow */}
                      <div className="absolute top-0 right-0 w-40 h-40 bg-[#1c4eff] opacity-10 blur-[50px]" />
                      
                      <h4 className="text-[#e2d5ec] font-black tracking-[4px] uppercase text-xs text-center pb-6 border-b border-white/5">Performance Metrics</h4>

                      <div className="space-y-6">
                        {selectedEvent.impact && <div className="bg-[#ca45ff]/[0.05] border border-[#ca45ff]/10 rounded-2xl p-6 relative overflow-hidden group">
                          <div className="absolute inset-0 bg-gradient-to-r from-[#ca45ff]/20 to-transparent w-full h-full -translate-x-full group-hover:translate-x-0 transition-transform duration-700 ease-in-out opacity-20" />
                          <div className="flex items-center gap-3 text-[#fe881b] mb-2 relative z-10"><TrendingUp size={18} strokeWidth={2.5}/> <span className="text-[11px] font-bold uppercase tracking-[2px]">Core Impact</span></div>
                          <span className="text-[#fe881b] text-[18px] md:text-[22px] font-black tracking-tight leading-none relative z-10">{selectedEvent.impact}</span>
                        </div>}

                        <div className="grid grid-cols-2 gap-4">
                          {selectedEvent.exhibitors && <div className="bg-white/[0.02] border border-white/5 rounded-2xl p-5 hover:bg-white/[0.04] transition-colors">
                            <div className="flex items-center gap-2 text-[#bdaee7] mb-3"><Presentation size={14} strokeWidth={2.5}/> <span className="text-[10px] font-bold uppercase tracking-[1px]">Exhibitors</span></div>
                            <span className="text-white text-[24px] font-black tracking-tighter">{selectedEvent.exhibitors}</span>
                          </div>}
                          
                          {selectedEvent.buyers && <div className="bg-white/[0.02] border border-white/5 rounded-2xl p-5 hover:bg-white/[0.04] transition-colors">
                            <div className="flex items-center gap-2 text-[#bdaee7] mb-3"><Users size={14} strokeWidth={2.5}/> <span className="text-[10px] font-bold uppercase tracking-[1px]">Buyers</span></div>
                            <span className="text-white text-[24px] font-black tracking-tighter">{selectedEvent.buyers}</span>
                          </div>}
                        </div>

                        {selectedEvent.days && <div className="flex items-center justify-between border-t border-white/5 pt-6 mt-4">
                          <div className="flex items-center gap-2 text-[#bdaee7]"><Clock size={16} strokeWidth={2}/> <span className="text-[11px] font-bold uppercase tracking-[2px]">Duration</span></div>
                          <span className="text-white text-[16px] font-bold">{selectedEvent.days}</span>
                        </div>}
                      </div>
                    </div>
                  </div>

                </div>
              </div>

            </m.div>
          </m.div>
        )}
      </AnimatePresence>
    </div>
  );
}
