'use client';

import { useEffect, useRef, useState } from 'react';
import { World } from '@/components/ui/globe';
import { m } from "framer-motion";

const globeConfig = {
  pointSize: 4,
  globeColor: "#08031A",
  showAtmosphere: true,
  atmosphereColor: "#1c4eff",
  atmosphereAltitude: 0.15,
  emissive: "#200d3d",
  emissiveIntensity: 0.3,
  shininess: 0.9,
  polygonColor: "rgba(255, 255, 255, 0.6)",
  ambientLight: "#ffffff",
  directionalLeftLight: "#ca45ff",
  directionalTopLight: "#1c4eff",
  pointLight: "#fe881b",
  arcTime: 1200,
  arcLength: 0.9,
  rings: 2,
  maxRings: 4,
  initialPosition: { lat: 20.5937, lng: 78.9629 }, // Render centered near India
  autoRotate: true,
  autoRotateSpeed: 1,
};

const brandColors = ["#1c4eff", "#ca45ff", "#fe881b"];

const sampleArcs = [
  { order: 1, startLat: 28.6139, startLng: 77.209, endLat: 3.139, endLng: 101.6869, arcAlt: 0.2, color: brandColors[0] }, // Delhi to KL
  { order: 1, startLat: 19.0760, startLng: 72.8777, endLat: 25.2048, endLng: 55.2708, arcAlt: 0.3, color: brandColors[1] }, // Mumbai to Dubai
  { order: 2, startLat: 1.3521, startLng: 103.8198, endLat: 35.6762, endLng: 139.6503, arcAlt: 0.2, color: brandColors[2] }, // Singapore to Tokyo
  { order: 2, startLat: 51.5072, startLng: -0.1276, endLat: 19.0760, endLng: 72.8777, arcAlt: 0.4, color: brandColors[0] }, // London to Mumbai
  { order: 3, startLat: 22.3193, startLng: 114.1694, endLat: 28.6139, endLng: 77.209, arcAlt: 0.3, color: brandColors[1] }, // Hong Kong to Delhi
  { order: 3, startLat: 12.9716, startLng: 77.5946, endLat: 37.7749, endLng: -122.4194, arcAlt: 0.6, color: brandColors[2] }, // Bangalore to SF
  { order: 4, startLat: 28.6139, startLng: 77.209, endLat: -33.8688, endLng: 151.2093, arcAlt: 0.5, color: brandColors[0] }, // Delhi to Sydney
  { order: 4, startLat: 48.8566, startLng: -2.3522, endLat: 19.0760, endLng: 72.8777, arcAlt: 0.3, color: brandColors[1] }, // Paris to Mumbai
  { order: 5, startLat: 13.0827, startLng: 80.2707, endLat: 1.3521, endLng: 103.8198, arcAlt: 0.2, color: brandColors[2] }, // Chennai to Singapore
  { order: 5, startLat: 25.2048, startLng: 55.2708, endLat: 51.5072, endLng: -0.1276, arcAlt: 0.3, color: brandColors[0] }, // Dubai to London    
];

/**
 * Emits cities radially from the center, creating the illusion that they are
 * spawning from behind the 3D globe and fading outwards.
 */
const CITIES = [
  "Noida", "Delhi", "Surat", "Kerala", "Mumbai", 
  "Chennai", "Jaipur", "Kolkata", "Bangalore", "Varanasi", 
  "Pune", "Hyderabad", "Ahmedabad", "Lucknow", "Chandigarh", "Indore",
  "Goa", "Kochi", "Gurgaon", "Agra"
];

const RadialCityEmitter = () => {
  return (
    <div className="absolute left-1/2 top-[900px] w-0 h-0 z-10 pointer-events-none">
      {CITIES.map((city, i) => {
        // Distribute angles using the golden ratio (137.5 degrees) for organic pseudo-random spacing
        const angle = ((i * 137.5) % 360) * (Math.PI / 180); 
        const maxRadius = 750 + (i % 5) * 150; // Randomize max distance from 750px to 1350px
        const endX = Math.cos(angle) * maxRadius;
        const endY = Math.sin(angle) * maxRadius;
        
        return (
          <m.div
            key={`${city}-${i}`}
            className="absolute left-0 top-0 pointer-events-none"
            viewport={{ once: true, amount: 0.1 }}
            whileInView={{
              x: [0, endX],
              y: [0, endY],
              opacity: [0, 0, 1, 0], // Stay invisible -> Fade in -> Fade out
              scale: [0.6, 1, 1.2],
            }}
            transition={{
              duration: 6 + (i % 3) * 2, // Faster float (6s to 10s)
              repeat: Infinity,
              delay: i * 0.4, // Faster spawn staggering
              ease: "linear",
              times: [0, 0.2, 0.5, 1] // Faster fade-in curve
            }}
          >
            <div className="absolute -translate-x-1/2 -translate-y-1/2 flex items-center gap-3">
              <div className="h-[2px] w-[30px] bg-white/40 rounded-full" />
              <p className="text-[#e2e2e2] text-sm md:text-lg tracking-[4px] font-medium uppercase whitespace-nowrap drop-shadow-md">
                {city}
              </p>
            </div>
          </m.div>
        );
      })}
    </div>
  );
};

export default function OnePartnershipSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const resize = () => {
      if (!containerRef.current) return;
      const width = containerRef.current.clientWidth;
      setScale(Math.min(width / 1920, 1));
    };
    resize();
    window.addEventListener('resize', resize);
    return () => window.removeEventListener('resize', resize);
  }, []);

  return (
    <section 
      ref={containerRef}
      className="w-full bg-[#13101C] rounded-b-[53.34px] overflow-hidden relative z-10"
    >
      <div 
        className="w-[1920px] h-[1600px] relative origin-top" 
        style={{ 
          transform: `scale(${scale})`, 
          marginBottom: `${1600 * (scale - 1)}px`, 
          left: '50%',
          marginLeft: '-960px'
        }}
      >
        {/* Top Titles */}
        <m.div 
          className="absolute top-[120px] w-full flex flex-col items-center pointer-events-none z-40 px-4"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <div className="bg-white/5 backdrop-blur-md border border-white/10 h-[55px] rounded-[40px] px-10 shadow-sm flex items-center justify-center mb-10 pointer-events-auto">
            <p className="text-white text-[18.6px] font-medium uppercase tracking-[2px]">Our Promise</p>
          </div>
          
          <h2 className="text-[32px] md:text-[56px] font-bold tracking-tight leading-[1.3] text-center drop-shadow-2xl w-[90%] max-w-[1240px]">
            <span className="text-white font-medium">
              Whether you're a brand looking to grow, a manufacturer seeking buyers, or a business aiming to create visibility —
            </span>
            <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#2ba7ff] via-[#ca45ff] to-[#fe881b]">
              we are here to make it happen.
            </span>
          </h2>
        </m.div>

        {/* Ambient Radial City Emitter (Behind the globe) */}
        <RadialCityEmitter />

        {/* Central 3D Globe Component */}
        <div className="absolute left-1/2 top-[900px] -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] z-20 cursor-move pointer-events-auto">
          {/* Fading glow behind globe */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#1c4eff] via-[#ca45ff] to-[#fe881b] opacity-10 blur-[150px] rounded-full pointer-events-none" />
          <World data={sampleArcs} globeConfig={globeConfig} />
        </div>

      </div>
    </section>
  );
}
