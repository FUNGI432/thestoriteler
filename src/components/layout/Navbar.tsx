import { Link } from "react-router-dom";
import imgIdeationStoritelerWebsite1 from "@/assets/navbar-logo.png";

interface NavbarProps {
  layer?: "blended" | "normal" | "all";
}

export default function Navbar({ layer = "all" }: NavbarProps) {
  const showBlended = layer === "all" || layer === "blended";
  const showNormal = layer === "all" || layer === "normal";

  return (
    <nav className={`w-full max-w-[1785px] mx-auto flex items-center justify-between gap-4 px-4 sm:px-8 py-2 mt-4 ${showNormal ? 'bg-[#D9D9D9]/5 backdrop-blur-md border border-white/10 rounded-[30px] shadow-[0_4px_30px_rgba(0,0,0,0.1)]' : ''}`}>
      
      {/* Left: Logo Wrapper */}
      <div className={`shrink-0 flex items-center px-4 ${!showBlended ? "opacity-0 pointer-events-none select-none" : ""}`}>
        <Link to="/" className="p-2 -ml-2 block">
          <img
            src={imgIdeationStoritelerWebsite1}
            alt="TheStoriTeler"
            className="h-[40px] md:h-[60px] w-auto object-contain brightness-0 invert"
          />
        </Link>
      </div>

      {/* Right: All Links + Contact */}
      <div className="flex-1 hidden xl:flex items-center justify-end px-4 gap-2 2xl:gap-6">
        
        {/* Consolidated Links */}
        <div className={`flex items-center gap-2 2xl:gap-4 ${!showBlended ? "opacity-0 pointer-events-none select-none" : ""}`}>
          {["Home", "Events", "Blogs", "Saath Pere", "Marketing", "Shoots", "Founder’s Note", "Our Journey"].map((item) => (
            <Link
              key={item}
              to={item === "Home" ? "/" : item === "Events" ? "/events" : item === "Blogs" ? "/blogs" : item === "Shoots" ? "/shoots" : item === "Founder’s Note" ? "/founders-note" : item === "Our Journey" ? "/our-journey" : item === "Saath Pere" ? "/saath-phere" : item === "Marketing" ? "/marketing" : `/#${item.toLowerCase().replace("’", "").replace(" ", "-")}`}
              className="text-white font-bold text-[14px] 2xl:text-[16px] tracking-[-0.56px] hover:text-[#ca45ff] transition-colors py-2 px-3 flex items-center uppercase"
            >
              {item}
            </Link>
          ))}
        </div>
        
        {/* Contact Button */}
        <Link
          to="/#contact"
          className={`relative group p-[3px] rounded-[13px] bg-gradient-to-r from-[#1c4eff] to-[#f97316] hover:opacity-90 transition-opacity ml-4 ${!showNormal ? "opacity-0 pointer-events-none select-none" : ""}`}
        >
          <div className="bg-[#2c2d3c] h-full w-full rounded-[10px] px-8 py-2 flex items-center justify-center">
            <span className="text-white font-bold text-[14px] 2xl:text-[16px] tracking-[-0.56px] uppercase">
              Contact
            </span>
          </div>
        </Link>
      </div>

      {/* Mobile Menu Toggle */}
      <div className={`xl:hidden flex items-center ${!showNormal ? "opacity-0 pointer-events-none select-none" : ""}`}>
        <button className="text-white bg-white/10 p-4 rounded-lg backdrop-blur-md">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </nav>
  )
}
