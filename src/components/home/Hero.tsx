// @ts-ignore
import LogoLoop from "@/components/ui/LogoLoop";

const logo1 = "http://localhost:3845/assets/9002cafa8dac1522b767fcf7fbfbeb9d11a0e1da.svg";
const logo2 = "http://localhost:3845/assets/2b192aeafa829e40644a1630b5f526573ae2e778.svg";
const logo3 = "http://localhost:3845/assets/992976782c5efeb09af276b97aea3a7df82d6421.svg";

const imageLogos = [
  { src: logo1, alt: "Logo 1", width: 95, height: 54 },
  { src: logo2, alt: "Logo 2", width: 151, height: 51 },
  { src: logo3, alt: "Logo 3", width: 119, height: 43 }
];

export default function Hero() {
  return (
    <section className="w-full flex flex-col items-center justify-center pt-32 lg:pt-48 pb-16 min-h-[80vh] relative z-10">
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

      {/* Endless logo carousel section */}
      <div className="w-full mt-24 md:mt-40 relative overflow-hidden h-[120px] block">
        <LogoLoop
          logos={imageLogos}
          speed={60}
          direction="left"
          logoHeight={60}
          gap={100}
          hoverSpeed={0}
          scaleOnHover={false}
          fadeOut={false}
          ariaLabel="Partner logos"
        />
      </div>
    </section>
  )
}
