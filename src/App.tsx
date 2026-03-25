import Navbar from "@/components/layout/Navbar"
import Hero from "@/components/home/Hero"
// @ts-ignore
import PrismaticBurst from "@/components/ui/PrismaticBurst"

import AboutSection from "@/components/home/AboutSection"
import MetricsSection from "@/components/home/MetricsSection"
import VipTreatmentSection from "@/components/home/VipTreatmentSection"
import ExperienceSection from "@/components/home/ExperienceSection"
import OnePartnershipSection from "@/components/home/OnePartnershipSection"
import Footer from "@/components/home/Footer"
// @ts-ignore
import GradualBlur from "@/components/ui/GradualBlur"
// @ts-ignore
import CustomCursor from "@/components/ui/CustomCursor"

function App() {
  return (
    <div className="dark min-h-screen bg-background text-foreground relative overflow-x-hidden">
      <CustomCursor />
      
      {/* Global Viewport Blurs */}
      <GradualBlur preset="page-header" height="5vh" strength={3} zIndex={100} />
      <GradualBlur preset="page-footer" height="5vh" strength={3} zIndex={100} />

      {/* Sticky Navbar Wrapper */}
      <div className="fixed top-0 left-0 w-full z-[1000] pointer-events-none">
        <div className="pointer-events-auto">
          <Navbar />
        </div>
      </div>
      
      {/* Top Section containing Hero with restricted background */}
      <div className="relative w-full z-10 bg-[#13101C] overflow-hidden">
        {/* Dynamic Background Layer restricted to this section */}
        <div className="absolute inset-0 z-0 pointer-events-none opacity-80" aria-hidden="true">
          <PrismaticBurst
            animationType="rotate3d"
            intensity={2}
            speed={0.5}
            distort={0}
            paused={false}
            offset={{ x: 0, y: 0 }}
            hoverDampness={0.25}
            rayCount={0}
            mixBlendMode="lighten"
            colors={['#1c4eff', '#ca45ff', '#fe881b']}
          />
        </div>

        {/* Hero Content - Navbar removed as it's now global fixed */}
        <div className="relative z-50 flex flex-col items-center pt-24 w-full">
          <Hero />
        </div>
      </div>

      {/* Rest of the site - ensure it overlaps the header by 1px to avoid subpixel lines */}
      <main className="w-full relative z-20 bg-white drop-shadow-[0_-10px_50px_rgba(0,0,0,0.3)] -mt-1">
        <AboutSection />
        <MetricsSection />
        <VipTreatmentSection />
        <ExperienceSection />
        <OnePartnershipSection />
      </main>
      
      <Footer />
    </div>
  )
}

export default App
