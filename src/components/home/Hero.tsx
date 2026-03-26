// @ts-ignore
import logo1 from "@/assets/hero-logo-1.svg";
import logo2 from "@/assets/hero-logo-2.svg";
import logo3 from "@/assets/hero-logo-3.svg";

const imageLogos = [
  { src: logo1, alt: "Logo 1", width: 95, height: 54 },
  { src: logo2, alt: "Logo 2", width: 151, height: 51 },
  { src: logo3, alt: "Logo 3", width: 119, height: 43 }
];

// Create an extended array by repeating the logos 10 times so it fills ultra-wide screens
const extendedLogos = Array(10).fill(imageLogos).flat();

export default function Hero() {
  return (
    <section className="w-full flex flex-col items-center justify-center pt-32 lg:pt-48 pb-16 min-h-screen relative z-10">
      <div className="text-center space-y-6 max-w-5xl mx-auto px-4">
        <h2 className="text-[28px] md:text-[39.5px] text-white font-light tracking-[-1.4px]">
          India’s Leading Experiential
        </h2>
        
        <h1 className="text-[48px] md:text-[77.6px] font-bold tracking-[-2.75px] bg-clip-text text-transparent bg-gradient-to-r from-[#2ba7ff] via-[#ca45ff] to-[#fe881b] pb-2 leading-tight">
          Marketing & Event Company
        </h1>
        
        <p className="text-[28px] md:text-[39.5px] text-white tracking-[-1.4px] leading-tight">
          <span className="font-light">Connecting</span>{" "}
          <span className="font-bold">Brands, Buyers & Industries</span>{" "}
          <span className="font-light">around the world</span>
        </p>
      </div>

      {/* Endless logo carousel section - Native CSS Marquee */}
      <div className="absolute bottom-8 lg:bottom-16 left-0 w-full overflow-hidden h-[80px] flex items-center">
        <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
          {/* We create 2 identical halves for the marquee to seamlessly loop over 50% translation */}
          {[...Array(2)].map((_, halfIndex) => (
            <div key={halfIndex} className="flex shrink-0 items-center justify-center gap-16 md:gap-24 px-8 md:px-12">
              {extendedLogos.map((logo, index) => (
                <img 
                  key={`${halfIndex}-${index}`}
                  src={logo.src}
                  alt={logo.alt}
                  style={{ aspectRatio: `${logo.width} / ${logo.height}` }}
                  className="h-[40px] md:h-[50px] w-auto object-contain brightness-0 invert"
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
