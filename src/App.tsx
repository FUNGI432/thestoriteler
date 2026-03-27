import { BrowserRouter, Routes, Route } from "react-router-dom"
import { LazyMotion, domAnimation } from "framer-motion"
import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/home/Footer"
// @ts-ignore
import GradualBlur from "@/components/ui/GradualBlur"
// @ts-ignore
import CustomCursor from "@/components/ui/CustomCursor"

import { Suspense, lazy } from "react"

// Lazy-load the heavy page components to split the bundle
const Home = lazy(() => import("@/pages/Home"))
const EventsPage = lazy(() => import("@/pages/EventsPage"))

function App() {
  return (
    <BrowserRouter>
      <LazyMotion features={domAnimation} strict>
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
        <Suspense fallback={<div className="w-full h-screen bg-[#13101C] flex items-center justify-center text-[#ca45ff] font-light tracking-[2px]">Loading Experience...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/events" element={<EventsPage />} />
          </Routes>
        </Suspense>
        
          <Footer />
        </div>
      </LazyMotion>
    </BrowserRouter>
  )
}

export default App
