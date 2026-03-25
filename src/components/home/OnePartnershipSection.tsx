'use client';

import { useEffect, useRef, useState } from 'react';
import { AnimatedBeam } from '@/components/ui/animated-beam';

const imgVector = "http://localhost:3845/assets/2fd1dedb64dfcb7d234b18c74354a417244d47e0.svg";
const imgVector1 = "http://localhost:3845/assets/fbaffc91edc8b1b44341b433e124ec5720085eb4.svg";
const imgVector2 = "http://localhost:3845/assets/80f0af09ef148845b53d00adf4daaf45eda257ca.svg";
const imgVector3 = "http://localhost:3845/assets/9da45865d203ab10e42efeca2dbb39c36be35f5f.svg";
const imgVector4 = "http://localhost:3845/assets/fc9219c2f06a9685097a79450971ef75a3a53c6b.svg";
const imgVector5 = "http://localhost:3845/assets/6ff263e28e667fd178371ecbc2d288fcf3500fc5.svg";
const imgVector6 = "http://localhost:3845/assets/7ba87de0aca6f31e26dfe9991fe38728ac7bc7ab.svg";
const imgVector7 = "http://localhost:3845/assets/b33871279329e9a342cc421d1154cd8d31fc833a.svg";
const imgVector8 = "http://localhost:3845/assets/fba5d4cf84f716c678da88b08a000143a0cd42ec.svg";
const imgVector9 = "http://localhost:3845/assets/f09cabd6626b509824040f11db3453e732d25e96.svg";
const imgVector10 = "http://localhost:3845/assets/1b23c5ca5999d04c8749c570def882f53fdec75d.svg";

export default function OnePartnershipSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);

  // Center node
  const centerRef = useRef<HTMLDivElement>(null);

  // Left cities
  const varanasiRef = useRef<HTMLDivElement>(null);
  const lucknowRef = useRef<HTMLDivElement>(null);
  const suratRef = useRef<HTMLDivElement>(null);
  const bangaloreRef = useRef<HTMLDivElement>(null);
  const keralaRef = useRef<HTMLDivElement>(null);

  // Right cities
  const delhiRef = useRef<HTMLDivElement>(null);
  const jaipurRef = useRef<HTMLDivElement>(null);
  const kolkataRef = useRef<HTMLDivElement>(null);
  const ahmedabadRef = useRef<HTMLDivElement>(null);
  const chennaiRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const resize = () => {
      if (!containerRef.current) return;
      const width = containerRef.current.clientWidth;
      setScale(width / 1920);
    };
    resize();
    window.addEventListener('resize', resize);
    return () => window.removeEventListener('resize', resize);
  }, []);

  return (
    <section 
      ref={containerRef}
      className="w-full bg-[#f9f9f9] rounded-b-[53.34px] overflow-hidden relative z-10"
    >
      <div 
        className="w-[1920px] h-[1400px] relative origin-top pointer-events-none" 
        style={{ 
          transform: `scale(${scale})`, 
          marginBottom: `${1400 * (scale - 1)}px`, 
          left: '50%',
          marginLeft: '-960px'
        }}
      >
        <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-white h-[55px] left-[50%] rounded-[40px] top-[150px] w-[193px] pointer-events-auto shadow-sm flex items-center justify-center">
          <p className="text-[#1a0b54] text-[18.6px] font-medium">Our Promise</p>
        </div>
        
        <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col items-center left-[50%] top-[340px] w-[800px]">
          <h2 className="text-[77px] font-bold tracking-[-2px] leading-tight text-center">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#2ba7ff] via-[#ca45ff] to-[#fe881b]">
              One partnership
            </span>
            <br />
            <span className="text-[#1a0b54] font-medium">makes change easy.</span>
          </h2>
        </div>
        
        <div className="-translate-x-1/2 absolute bg-gradient-to-r from-[#1c4eff] via-[#ac24ff] to-[#fe881b] h-[64px] left-[50%] rounded-[13px] top-[470px] w-[232px] pointer-events-auto cursor-pointer flex items-center justify-center hover:opacity-90 transition-opacity">
          <p className="text-white text-[18.7px] font-bold tracking-tight">What We Do</p>
        </div>

        {/* --- NETWORK GRAPH MAPPING --- */}

        {/* Center Node */}
        <div ref={centerRef} className="absolute left-[880px] top-[716px] size-[157px] pointer-events-auto hover:scale-105 transition-transform bg-white rounded-full flex items-center justify-center shadow-lg border border-gray-100 z-50">
          <img alt="The Stori Teler" className="w-[115px] h-[54px] object-contain shrink-0" src={imgVector} />
        </div>

        {/* LEFT CITIES (X: 430) */}
        <div className="absolute left-[430px] top-[400px] w-[95px] flex flex-col items-center">
          <div ref={varanasiRef} className="size-[95px] bg-white rounded-full flex items-center justify-center shadow-sm border border-[#e5e5e5] hover:scale-105 transition-transform z-20 pointer-events-auto">
            <img alt="Varanasi" className="w-[50%] h-[50%] object-contain shrink-0" src={imgVector2} />
          </div>
          <p className="mt-4 text-[14px] text-[#1a0b54] font-medium tracking-[1px] text-center w-[120px]">Varanasi</p>
        </div>

        <div className="absolute left-[430px] top-[575px] w-[95px] flex flex-col items-center">
          <div ref={lucknowRef} className="size-[95px] bg-white rounded-full flex items-center justify-center shadow-sm border border-[#e5e5e5] hover:scale-105 transition-transform z-20 pointer-events-auto">
            <img alt="Lucknow" className="w-[50%] h-[50%] object-contain shrink-0" src={imgVector4} />
          </div>
          <p className="mt-4 text-[14px] text-[#1a0b54] font-medium tracking-[1px] text-center w-[120px]">Lucknow</p>
        </div>

        <div className="absolute left-[430px] top-[750px] w-[95px] flex flex-col items-center">
          <div ref={suratRef} className="size-[95px] bg-white rounded-full flex items-center justify-center shadow-sm border border-[#e5e5e5] hover:scale-105 transition-transform z-20 pointer-events-auto">
            <img alt="Surat" className="w-[50%] h-[50%] object-contain shrink-0" src={imgVector6} />
          </div>
          <p className="mt-4 text-[14px] text-[#1a0b54] font-medium tracking-[1px] text-center w-[120px]">Surat</p>
        </div>

        <div className="absolute left-[430px] top-[925px] w-[95px] flex flex-col items-center">
          <div ref={bangaloreRef} className="size-[95px] bg-white rounded-full flex items-center justify-center shadow-sm border border-[#e5e5e5] hover:scale-105 transition-transform z-20 pointer-events-auto">
            <img alt="Bangalore" className="w-[50%] h-[50%] object-contain shrink-0" src={imgVector8} />
          </div>
          <p className="mt-4 text-[14px] text-[#1a0b54] font-medium tracking-[1px] text-center w-[120px]">Bangalore</p>
        </div>

        <div className="absolute left-[430px] top-[1100px] w-[95px] flex flex-col items-center">
          <div ref={keralaRef} className="size-[95px] bg-white rounded-full flex items-center justify-center shadow-sm border border-[#e5e5e5] hover:scale-105 transition-transform z-20 pointer-events-auto">
            <img alt="Kerala" className="w-[50%] h-[50%] object-contain shrink-0" src={imgVector10} />
          </div>
          <p className="mt-4 text-[14px] text-[#1a0b54] font-medium tracking-[1px] text-center w-[120px]">Kerala</p>
        </div>

        {/* RIGHT CITIES (X: 1395) */}
        <div className="absolute left-[1395px] top-[400px] w-[95px] flex flex-col items-center">
          <div ref={delhiRef} className="size-[95px] bg-white rounded-full flex items-center justify-center shadow-sm border border-[#e5e5e5] hover:scale-105 transition-transform z-20 pointer-events-auto">
            <img alt="Delhi" className="w-[50%] h-[50%] object-contain shrink-0" src={imgVector1} />
          </div>
          <p className="mt-4 text-[14px] text-[#1a0b54] font-medium tracking-[1px] text-center w-[120px]">Delhi</p>
        </div>

        <div className="absolute left-[1395px] top-[575px] w-[95px] flex flex-col items-center">
          <div ref={jaipurRef} className="size-[95px] bg-white rounded-full flex items-center justify-center shadow-sm border border-[#e5e5e5] hover:scale-105 transition-transform z-20 pointer-events-auto">
            <img alt="Jaipur" className="w-[50%] h-[50%] object-contain shrink-0" src={imgVector3} />
          </div>
          <p className="mt-4 text-[14px] text-[#1a0b54] font-medium tracking-[1px] text-center w-[120px]">Jaipur</p>
        </div>

        <div className="absolute left-[1395px] top-[750px] w-[95px] flex flex-col items-center">
          <div ref={kolkataRef} className="size-[95px] bg-white rounded-full flex items-center justify-center shadow-sm border border-[#e5e5e5] hover:scale-105 transition-transform z-20 pointer-events-auto">
            <img alt="Kolkata" className="w-[50%] h-[50%] object-contain shrink-0" src={imgVector5} />
          </div>
          <p className="mt-4 text-[14px] text-[#1a0b54] font-medium tracking-[1px] text-center w-[120px]">Kolkata</p>
        </div>

        <div className="absolute left-[1395px] top-[925px] w-[95px] flex flex-col items-center">
          <div ref={ahmedabadRef} className="size-[95px] bg-white rounded-full flex items-center justify-center shadow-sm border border-[#e5e5e5] hover:scale-105 transition-transform z-20 pointer-events-auto">
            <img alt="Ahmedabad" className="w-[50%] h-[50%] object-contain shrink-0" src={imgVector7} />
          </div>
          <p className="mt-4 text-[14px] text-[#1a0b54] font-medium tracking-[1px] text-center w-[120px]">Ahmedabad</p>
        </div>

        <div className="absolute left-[1395px] top-[1100px] w-[95px] flex flex-col items-center">
          <div ref={chennaiRef} className="size-[95px] bg-white rounded-full flex items-center justify-center shadow-sm border border-[#e5e5e5] hover:scale-105 transition-transform z-20 pointer-events-auto">
            <img alt="Chennai" className="w-[50%] h-[50%] object-contain shrink-0" src={imgVector9} />
          </div>
          <p className="mt-4 text-[14px] text-[#1a0b54] font-medium tracking-[1px] text-center w-[120px]">Chennai</p>
        </div>

        {/* ANIMATED BEAMS FROM CITIES RADIATING TO CENTER */}
        
        {/* Left Beams (Move left-to-right natively -> INTO center) */}
        <AnimatedBeam containerRef={containerRef} fromRef={varanasiRef} toRef={centerRef} duration={3} delay={0.4} curvature={50} />
        <AnimatedBeam containerRef={containerRef} fromRef={lucknowRef} toRef={centerRef} duration={3} delay={1.8} curvature={25} />
        <AnimatedBeam containerRef={containerRef} fromRef={suratRef} toRef={centerRef} duration={3} delay={0.1} curvature={0} />
        <AnimatedBeam containerRef={containerRef} fromRef={bangaloreRef} toRef={centerRef} duration={3} delay={2.3} curvature={-25} />
        <AnimatedBeam containerRef={containerRef} fromRef={keralaRef} toRef={centerRef} duration={3} delay={1.1} curvature={-50} />

        {/* Right Beams (Move left-to-right natively -> OUT of center. Reverse -> INTO center) */}
        <AnimatedBeam containerRef={containerRef} fromRef={delhiRef} toRef={centerRef} duration={3} delay={2.8} curvature={-50} reverse />
        <AnimatedBeam containerRef={containerRef} fromRef={jaipurRef} toRef={centerRef} duration={3} delay={0.9} curvature={-25} reverse />
        <AnimatedBeam containerRef={containerRef} fromRef={kolkataRef} toRef={centerRef} duration={3} delay={1.7} curvature={0} reverse />
        <AnimatedBeam containerRef={containerRef} fromRef={ahmedabadRef} toRef={centerRef} duration={3} delay={0.2} curvature={25} reverse />
        <AnimatedBeam containerRef={containerRef} fromRef={chennaiRef} toRef={centerRef} duration={3} delay={2.5} curvature={50} reverse />

      </div>
    </section>
  );
}
