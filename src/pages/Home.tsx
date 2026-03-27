import { lazy, Suspense } from 'react';
import Loader from "@/components/ui/Loader"
import Hero from "@/components/home/Hero"
import heroVideo from "@/assets/Ideation storiteler website - Whiteboard.mp4"
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
        {/* Dynamic Video Background Layer */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden" aria-hidden="true">
          <div className="absolute inset-0 bg-black/50 z-10" />
          <video 
            autoPlay 
            loop 
            muted 
            playsInline 
            className="w-full h-full object-cover"
          >
            <source src={heroVideo} type="video/mp4" />
          </video>
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
        
        <Suspense fallback={<Loader />}>
          <ExperienceSection />
          <MetricsSection />
          <OnePartnershipSection />
          <VipTreatmentSection />
        </Suspense>
      </main>
    </>
  )
}
