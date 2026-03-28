import { BrowserRouter, Routes, Route } from "react-router-dom"
import { LazyMotion, domAnimation } from "framer-motion"
import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/home/Footer"
// @ts-ignore
import GradualBlur from "@/components/ui/GradualBlur"
// @ts-ignore
import CustomCursor from "@/components/ui/CustomCursor"

import { Suspense, lazy } from "react"
import Loader from "@/components/ui/Loader"
import ScrollToTop from "@/components/ui/ScrollToTop"

// Lazy-load the heavy page components to split the bundle
const Home = lazy(() => import("@/pages/Home"))
const EventsPage = lazy(() => import("@/pages/EventsPage"))
const Blogs = lazy(() => import("@/pages/Blogs"))
const Shoots = lazy(() => import("@/pages/Shoots"))
const FoundersNote = lazy(() => import("@/pages/FoundersNote"))
const OurJourney = lazy(() => import("@/pages/OurJourney"))
const SaathPhere = lazy(() => import("@/pages/SaathPhere"))
const Marketing = lazy(() => import("@/pages/Marketing"))

function App() {
  return (
    <BrowserRouter>
      <LazyMotion features={domAnimation} strict>
        <ScrollToTop />
        <div className="dark min-h-screen bg-background text-foreground relative overflow-x-hidden">
          <CustomCursor />
          
          {/* Global Viewport Blurs */}
          <GradualBlur preset="page-header" height="5vh" strength={3} zIndex={100} />
          <GradualBlur preset="page-footer" height="5vh" strength={3} zIndex={100} />

          {/* Sticky Navbar Wrapper - NORMAL (Background & Contact Button) */}
        <div className="fixed top-0 left-0 w-full z-[1000] pointer-events-none">
          <div className="pointer-events-auto">
            <Navbar layer="normal" />
          </div>
        </div>

        {/* Sticky Navbar Wrapper - BLENDED (Links & Logo) */}
        <div className="fixed top-0 left-0 w-full z-[1001] mix-blend-difference pointer-events-none">
          <div className="pointer-events-auto">
            <Navbar layer="blended" />
          </div>
        </div>
        
        {/* Page Routes with Code Splitting Suspense Boundary */}
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/events" element={<EventsPage />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/shoots" element={<Shoots />} />
            <Route path="/founders-note" element={<FoundersNote />} />
            <Route path="/our-journey" element={<OurJourney />} />
            <Route path="/saath-phere" element={<SaathPhere />} />
            <Route path="/marketing" element={<Marketing />} />
          </Routes>
        </Suspense>
        
          <Footer />
        </div>
      </LazyMotion>
    </BrowserRouter>
  )
}

export default App
