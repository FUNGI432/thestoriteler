import { useEffect, useRef, useState } from "react";
import { m, useInView, useSpring, useTransform } from "framer-motion";

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
      <div className="w-full h-full bg-[#13101c]/80 backdrop-blur-xl rounded-[30px] p-6 flex flex-col justify-end relative overflow-hidden group">
        
        {/* Abstract glow inside for visual interest */}
        <div className={`absolute -bottom-20 -right-20 w-64 h-64 rounded-full blur-[70px] transition-all duration-700 ${isHovered ? "opacity-40 bg-[#ca45ff]" : "opacity-0"}`} />

        <m.div 
          animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 20 }}
          initial={{ opacity: defaultExpanded ? 1 : 0, y: defaultExpanded ? 0 : 20 }}
          transition={{ duration: 0.3 }}
          className="flex flex-col gap-2 whitespace-nowrap relative z-10 w-full"
        >
          <h4 className="text-[20px] lg:text-[24px] font-bold text-white truncate drop-shadow-md w-full">{ev.name}</h4>
          
          <div className="flex flex-col text-[13px] lg:text-[15px] space-y-2 mt-2 w-full overflow-hidden text-ellipsis">
            {ev.venue && <span className="text-[#e2d5ec] truncate"><strong className="text-white">📍 Ven:</strong> {ev.venue}</span>}
            {ev.org && <span className="text-[#bdaee7] truncate"><strong className="text-white">🎯 Org:</strong> {ev.org}</span>}
            {ev.date && <span className="text-[#A69FB6] truncate"><strong className="text-white">📅 Dat:</strong> {ev.date}</span>}
          </div>
        </m.div>
        
        {/* Collapsed Vertical Title */}
        <m.div 
           animate={{ opacity: isHovered ? 0 : 1 }}
           initial={{ opacity: defaultExpanded ? 0 : 1 }}
           className="absolute inset-0 flex items-center justify-center pointer-events-none"
        >
           <h4 className="text-white/50 text-[18px] md:text-[22px] font-medium tracking-widest whitespace-nowrap md:-rotate-90 origin-center truncate w-[250px] md:w-[350px] text-center">
             {ev.name}
           </h4>
        </m.div>
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

  return <m.span ref={ref}>{display}</m.span>;
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
      { name: "The Designer’s India", org: "KOLKATA FASHION EXPO", date: "", venue: "" },
      { name: "Kolkata Fabric Expo", org: "THE STORI TELER", date: "April", venue: "Milan Mela, Kolkata" },
    ]
  },
  {
    year: "2024",
    events: [
      { name: "Bharat Ethnic Expo", org: "GM AGENCY", date: "July", venue: "Gandhi Nagar" },
      { name: "Delhi Tuff Ethnic Expo", org: "TRUE UNITY ASSOCIATION", date: "July", venue: "Bharat Mandapam, Delhi" },
      { name: "Kolkata Couture Expo", org: "SAREE ASSOCIATION", date: "", venue: "Milan Mela, Kolkata" },
    ]
  },
  {
    year: "2025",
    events: [
      { name: "Kerala Fashion Expo", org: "THE STORI TELER", date: "", venue: "Adlux International Convention Centre, Angamaly, Kerala" },
      { name: "Signature Drapes by Dolly Jain", org: "THE STORI TELER", date: "", venue: "Avadh Utopia, Surat" },
    ]
  }
];

const upcomingEvents = [
  { name: "Eco Thread by Saurabh Nivetia", org: "", date: "", venue: "Kolkata" },
  { name: "South Textile Expo", org: "THE STORI TELER", date: "", venue: "Tripura Vasini, Palace Grounds, Bangalore" },
  { name: "Bharat Ethnic Expo", org: "GM AGENCY", date: "", venue: "Gandhinagar" },
  { name: "Delhi Tuff Ethnic Expo", org: "TRUE UNITY ASSOCIATION", date: "", venue: "Bharat Mandapam" },
  { name: "Kolkata Couture Expo", org: "SAREE ASSOCIATION", date: "", venue: "Milan Mela, Kolkata" },
];

import imgSouthTextile from "@/assets/south textile expo.jpeg"

// ... existing code ...

export default function EventsPage() {
  return (
    <div className="w-full bg-[#13101C] min-h-screen text-white overflow-x-hidden relative">
      
      {/* Background Soft Glows (only for lower sections now) */}
      <div className="absolute top-[120%] left-[-10%] w-[50vw] h-[50vw] bg-[#ca45ff] opacity-[0.05] blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute top-[160%] right-[-10%] w-[50vw] h-[50vw] bg-[#1c4eff] opacity-[0.05] blur-[150px] rounded-full pointer-events-none" />

      {/* Hero Header - Split Glass Layout */}
      <div className="relative w-full min-h-screen flex mb-32">
        {/* Dynamic Background Layer (Video safely removed due to 404) */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden" aria-hidden="true">
          <div className="absolute inset-0 bg-gradient-to-br from-[#13101C] via-[#201030] to-[#13101C] z-10" />
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
      <div className="relative z-10 w-full max-w-[1920px] mx-auto px-4 sm:px-[10%] mb-40">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {metrics.map((metric, index) => (
            <m.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex flex-col items-center justify-center p-8 bg-white/[0.03] backdrop-blur-xl rounded-[24px] shadow-[inset_0_1px_1px_rgba(255,255,255,0.1),_0_8px_32px_rgba(0,0,0,0.5)] aspect-[3/4] border border-white/10 hover:bg-white/[0.05] hover:border-white/20 transition-all duration-500 ease-out group"
            >
              <h2 className="text-[50px] lg:text-[70px] text-white font-medium tracking-[-1px] leading-tight text-center mb-8 drop-shadow-[0_2px_10px_rgba(255,255,255,0.2)]">
                {metric.isString ? (
                  <span>{metric.value}{metric.suffix}</span>
                ) : (
                  <AnimatedNumber value={metric.value as number} suffix={metric.suffix} />
                )}
              </h2>
              
              <div className="w-full max-w-[260px] h-[1px] bg-gradient-to-r from-transparent via-[#bdaee7]/30 group-hover:via-[#bdaee7]/60 transition-colors duration-500 to-transparent mb-10" />
              
              <p className="text-[26px] lg:text-[38px] text-[#bdaee7] font-normal text-center leading-[1.1] whitespace-pre-line group-hover:text-white transition-colors duration-500">
                {metric.label}
              </p>
            </m.div>
          ))}
        </div>
      </div>

      {/* Spotlight: South Textile Expo News */}
      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-4 mb-40">
        <div className="w-full relative rounded-[32px] p-[2px] bg-gradient-to-br from-[#1c4eff] via-[#ca45ff] to-[#fe881b] overflow-hidden group">
          <div className="w-full h-full bg-[#13101C] rounded-[30px] p-8 md:p-16 flex flex-col md:flex-row items-center gap-12 justify-between backdrop-blur-3xl relative overflow-hidden">
            {/* Spotlight Glows */}
            <div className="absolute -top-32 -left-32 w-96 h-96 bg-[#1c4eff] opacity-20 blur-[100px] rounded-full" />
            
            <div className="flex-1 flex flex-col space-y-6 relative z-10">
              <span className="px-4 py-1 rounded-full bg-white/10 border border-white/20 text-[#bdaee7] text-sm uppercase tracking-[2px] w-fit">News Section</span>
              
              <h2 className="text-[40px] md:text-[60px] font-black uppercase leading-[1.1] tracking-tight text-white drop-shadow-md">
                South Textile Expo <br/> Pre-Registrations Live!
              </h2>
              
              <p className="text-[18px] text-[#e2d5ec] font-light max-w-xl leading-relaxed">
                Women’s ethnic wear B2B textile expo. Over 70 top manufacturers from Surat, Ahmedabad, Varanasi, Jaipur, Kolkata, Delhi, Bhagalpur, Mumbai & Bangalore.
              </p>

              <div className="flex flex-col space-y-3 mt-4 text-[#868097]">
                <div className="flex items-start gap-3">
                  <span className="text-[20px]">📍</span> 
                  <span className="mt-1">Bangalore (Central hub of South India’s textile trade)</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-[20px]">📅</span> 
                  <span className="mt-1">4th & 5th July 2026</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-[20px]">🎯</span> 
                  <span className="mt-1">Organised by: The Stori Teler</span>
                </div>
              </div>

              <div className="pt-4 border-t border-white/10 mt-6">
                <p className="text-[14px] text-[#A69FB6] uppercase tracking-[1px] mb-2 font-medium">Focused for Verified Buyers From:</p>
                <p className="text-white font-light text-[15px] leading-relaxed">
                  Tamil Nadu | Karnataka | Kerala | Andhra Pradesh | Telangana <br/>
                  <span className="text-[#ca45ff] font-medium">Retailers, wholesalers, boutique owners, exporters, buying houses</span>
                </p>
              </div>

              <div className="pt-4 border-t border-white/10">
                <p className="text-[14px] text-[#A69FB6] uppercase tracking-[1px] mb-2 font-medium">Product Categories:</p>
                <p className="text-white font-light text-[15px]">Sarees | Unstitched suits | Readymade ethnic wear | Fabrics</p>
              </div>

            </div>

            <div className="shrink-0 flex flex-col items-center gap-8 relative z-10 w-full md:w-[400px]">
              <div className="w-full relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-[#ca45ff] to-[#1c4eff] rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200" />
                <img 
                  src={imgSouthTextile} 
                  alt="South Textile Expo" 
                  className="relative w-full h-auto rounded-2xl shadow-2xl border border-white/10 object-cover"
                />
              </div>

              <a 
                href="#" 
                className="w-full text-center px-12 py-5 rounded-full bg-white text-[#13101C] font-black uppercase tracking-[2px] text-[16px] hover:scale-105 transition-transform shadow-[0_0_40px_rgba(255,255,255,0.3)] hover:shadow-[0_0_60px_rgba(255,255,255,0.5)]"
              >
                Register Now
                <span className="block text-[10px] opacity-60 font-medium mt-1">Message Vimal Sir</span>
              </a>
            </div>

          </div>
        </div>
      </div>

      {/* Main Lists Section */}
      <div className="w-full max-w-[1400px] mx-auto px-4 relative z-10 space-y-32">
        <div className="text-center mb-20">
          <h2 className="text-[30px] md:text-[45px] font-bold text-white uppercase tracking-tight">
            Our Events <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ca45ff] to-[#1c4eff]">& Venues</span>
          </h2>
          <p className="text-[#A69FB6] text-[16px] uppercase tracking-[2px] mt-4">Organised Platforms driving Business</p>
        </div>

        {/* Upcoming Events - Interactive Accordion */}
        <div className="flex flex-col space-y-8">
          <h3 className="text-[28px] md:text-[36px] font-medium text-white border-b border-white/10 pb-4 inline-block tracking-tight w-fit">
            Upcoming Events
          </h3>
          
          <div className="flex flex-col md:flex-row w-full h-[600px] md:h-[450px] gap-4">
            {upcomingEvents.map((ev, i) => (
              <AccordionCard key={i} ev={ev} defaultExpanded={i === 0} />
            ))}
          </div>
        </div>

        {/* Previous Events - Wireframe Columns */}
        <div className="w-full flex flex-col lg:flex-row min-h-[600px] border border-white/10 rounded-[32px] overflow-hidden mt-12 mb-32">
          
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
        </div>

      </div>

    </div>
  );
}
