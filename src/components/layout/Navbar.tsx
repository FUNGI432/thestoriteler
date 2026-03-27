import { Link } from "react-router-dom";
import imgIdeationStoritelerWebsite1 from "@/assets/navbar-logo.png";

interface NavbarProps {
  layer?: "blended" | "normal" | "all";
}

export default function Navbar({ layer = "all" }: NavbarProps) {
  const showBlended = layer === "all" || layer === "blended";
  const showNormal = layer === "all" || layer === "normal";

  return (
    <nav className={`w-full max-w-[1785px] mx-auto flex items-center justify-between gap-4 px-4 sm:px-8 py-3 mt-4 ${showNormal ? 'bg-[#D9D9D9]/5 backdrop-blur-md border border-white/10 rounded-[30px] shadow-[0_4px_30px_rgba(0,0,0,0.1)]' : ''}`}>
      {/* Left Links */}
      <div className={`flex-1 hidden md:flex items-center justify-around px-8 max-w-[704px] ${!showBlended ? "opacity-0 pointer-events-none select-none" : ""}`}>
        {["Events", "Saath Pere", "Marketing", "Shoots"].map((item) => (
          <Link
            key={item}
            to={item === "Events" ? "/events" : `/#${item.toLowerCase().replace(" ", "-")}`}
            className="text-white font-bold text-[16px] xl:text-[18.7px] tracking-[-0.56px] hover:opacity-70 transition-opacity"
          >
            {item}
          </Link>
        ))}
      </div>

      {/* Logo Wrapper */}
      <div className={`shrink-0 flex items-center justify-center px-4 ${!showBlended ? "opacity-0 pointer-events-none select-none" : ""}`}>
        <Link to="/">
          <img
            src={imgIdeationStoritelerWebsite1}
            alt="TheStoriTeler"
            className="h-[60px] md:h-[98px] w-auto object-contain brightness-0 invert"
          />
        </Link>
      </div>

      {/* Right portion including Links and Contact Button */}
      <div className="flex-1 hidden md:flex items-center justify-around pr-4 pl-8 max-w-[708px]">
        
        {/* Right Links */}
        <div className={`flex items-center justify-around w-full max-w-[400px] ${!showBlended ? "opacity-0 pointer-events-none select-none" : ""}`}>
          {["Home", "Founder’s Note", "Our Journey"].map((item) => (
            <Link
              key={item}
              to={item === "Home" ? "/" : `/#${item.toLowerCase().replace("’", "").replace(" ", "-")}`}
              className="text-white font-bold text-[16px] xl:text-[18.7px] tracking-[-0.56px] hover:opacity-70 transition-opacity"
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
          <div className="bg-[#2c2d3c] h-full w-full rounded-[10px] px-6 py-2 flex items-center justify-center">
            <span className="text-white font-bold text-[16px] xl:text-[18.7px] tracking-[-0.56px]">
              Contact
            </span>
          </div>
        </Link>
      </div>

      {/* Mobile Menu Toggle */}
      <div className={`md:hidden flex items-center ${!showNormal ? "opacity-0 pointer-events-none select-none" : ""}`}>
        <button className="text-white bg-white/10 p-3 rounded-lg backdrop-blur-md">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </nav>
  )
}
