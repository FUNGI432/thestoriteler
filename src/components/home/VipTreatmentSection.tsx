import { useRef } from "react"
import { useInView } from "motion/react"
// @ts-ignore
import Lanyard from "@/components/ui/Lanyard"

export default function VipTreatmentSection() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: false, amount: 0.2 });

  return (
    <section className="w-full bg-white relative z-10" ref={containerRef}>
      <div className="w-full max-w-[1920px] mx-auto px-4 md:px-[10%] py-24 lg:py-40 relative">
        <div 
          className="w-full relative flex flex-col lg:flex-row items-center justify-between rounded-[36px] overflow-hidden shadow-2xl min-h-[700px] lg:min-h-[842px]"
          style={{ backgroundImage: "linear-gradient(243.544deg, rgb(0, 0, 0) 5.7541%, rgb(45, 0, 66) 97.896%)" }}
        >
          
          {/* Full-bleed 3D Lanyard Interactive Component */}
          <div className="absolute inset-0 z-10 flex items-center justify-center cursor-grab active:cursor-grabbing">
            {/* Pass isInView as dropped prop to trigger physics fall */}
            <Lanyard position={[0, 0, 15]} gravity={[0, -40, 0]} transparent={true} dropped={isInView} />
          </div>

          {/* Right Side: Typography (Pointer events configured to allow dragging behind) */}
          <div className="relative w-full lg:w-1/2 p-8 lg:p-16 flex flex-col justify-center space-y-8 lg:space-y-12 h-[700px] lg:h-full z-20 pointer-events-none lg:ml-auto">
            
            <div className="space-y-2 pointer-events-auto">
              <h2 className="text-[36px] md:text-[52.182px] text-[#c7c7c7] font-light leading-tight">
                Your Events Deserve
              </h2>
              <h3 className="text-[54px] md:text-[79.969px] font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#2ba7ff] via-[#ca45ff] to-[#fe881b] leading-[1.1] tracking-[-1px]">
                VIP treatment
              </h3>
            </div>

            <div className="space-y-6 text-[#bdaee7] text-[18px] md:text-[26.452px] font-light tracking-[1px] max-w-[611px] leading-[1.4] pointer-events-auto">
              <p>
                We engineer <span className="font-bold">high-value business environments.</span>
              </p>
              <p className="text-[16px] md:text-[22px] tracking-normal leading-[1.6]">
                The Stori Teler creates curated platforms where serious buyers meet credible brands, ensuring every interaction is intentional, every presence is strategic, and every outcome drives measurable growth.
              </p>
            </div>

          </div>
          
        </div>
      </div>
    </section>
  )
}
