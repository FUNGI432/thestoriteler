import { lazy, Suspense } from 'react';
import Hero from "@/components/home/Hero"
import AboutSection from "@/components/home/AboutSection"
import CreateEventsSection from "@/components/home/CreateEventsSection"

// Dynamically imported below-the-fold components to save ~400KB on initial load
const MetricsSection = lazy(() => import("@/components/home/MetricsSection"));
const VipTreatmentSection = lazy(() => import("@/components/home/VipTreatmentSection"));
const ExperienceSection = lazy(() => import("@/components/home/ExperienceSection"));
const OnePartnershipSection = lazy(() => import("@/components/home/OnePartnershipSection"));

export default function Home() {
  return (
    <>
      {/* Top Section containing Hero with restricted background */}
      <div className="relative w-full z-10 bg-[#13101C] overflow-hidden">
        {/* Dynamic Background Layer (Video safely removed to fix 404 network timeout) */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden" aria-hidden="true">
          <div className="absolute inset-0 bg-gradient-to-br from-[#13101C] via-[#1a0f2e] to-[#13101C] z-10" />
        </div>

        {/* Hero Content - Navbar removed as it's now global fixed */}
        <div className="relative z-50 flex flex-col items-center w-full">
          <Hero />
        </div>
      </div>

      {/* Rest of the site - ensure it overlaps the header by 1px to avoid subpixel lines */}
      <main className="w-full relative z-20 bg-white drop-shadow-[0_-10px_50px_rgba(0,0,0,0.3)] -mt-1">
        <AboutSection />
        <CreateEventsSection />
        
        <Suspense fallback={<div className="w-full h-screen bg-[#13101C] animate-pulse flex items-center justify-center"><p className="text-white/50 tracking-widest uppercase">Loading...</p></div>}>
          <ExperienceSection />
          <MetricsSection />
          <OnePartnershipSection />
          <VipTreatmentSection />
        </Suspense>
      </main>
    </>
  )
}
