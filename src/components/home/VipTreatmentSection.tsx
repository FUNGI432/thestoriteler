import { useRef } from "react"
import { m } from "framer-motion"

export default function VipTreatmentSection() {
  const containerRef = useRef(null);

  return (
    <section className="w-full bg-white relative z-10" ref={containerRef}>
      <div className="w-full max-w-[1920px] mx-auto px-4 md:px-[10%] py-24 lg:py-40 relative">
        <div 
          className="w-full relative flex flex-col lg:flex-row items-center justify-between rounded-[36px] overflow-hidden shadow-2xl min-h-[700px] lg:min-h-[842px]"
          style={{ backgroundImage: "linear-gradient(243.544deg, rgb(0, 0, 0) 5.7541%, rgb(45, 0, 66) 97.896%)" }}
        >
          
          {/* Left Side: Brand Typography Heading */}
          <m.div 
            className="relative w-full lg:w-1/2 p-8 lg:p-16 flex flex-col items-start justify-center z-20"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <div className="space-y-2 mb-10">
              <h2 className="text-[42px] md:text-[64px] text-white font-light leading-tight">
                Let's Build Your
              </h2>
              <h3 className="text-[54px] md:text-[84px] font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#2ba7ff] via-[#ca45ff] to-[#fe881b] leading-[1.1] tracking-[-1px]">
                Story together.
              </h3>
            </div>
          </m.div>

          {/* Right Side: High-Fidelity Contact Form */}
          <m.div 
            className="relative w-full lg:w-1/2 p-8 lg:p-16 flex flex-col justify-center h-full z-20 lg:ml-auto"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          >

            <form className="space-y-6 w-full max-w-[611px]" onSubmit={(e) => e.preventDefault()}>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[14px] text-[#bdaee7] uppercase tracking-[2px] font-medium ml-1">Name</label>
                  <input 
                    type="text" 
                    placeholder="John Doe"
                    className="w-full bg-white/5 border border-white/10 rounded-[16px] px-6 py-4 text-white placeholder:text-white/20 focus:outline-none focus:border-[#ca45ff]/50 transition-colors backdrop-blur-md"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[14px] text-[#bdaee7] uppercase tracking-[2px] font-medium ml-1">Email</label>
                  <input 
                    type="email" 
                    placeholder="john@company.com"
                    className="w-full bg-white/5 border border-white/10 rounded-[16px] px-6 py-4 text-white placeholder:text-white/20 focus:outline-none focus:border-[#ca45ff]/50 transition-colors backdrop-blur-md"
                  />
                </div>
                
                <div className="space-y-2">
                  <label className="text-[14px] text-[#bdaee7] uppercase tracking-[2px] font-medium ml-1">Number</label>
                  <input 
                    type="tel" 
                    placeholder="+91 00000 00000"
                    className="w-full bg-white/5 border border-white/10 rounded-[16px] px-6 py-4 text-white placeholder:text-white/20 focus:outline-none focus:border-[#ca45ff]/50 transition-colors backdrop-blur-md"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[14px] text-[#bdaee7] uppercase tracking-[2px] font-medium ml-1">City</label>
                  <input 
                    type="text" 
                    placeholder="Mumbai, India"
                    className="w-full bg-white/5 border border-white/10 rounded-[16px] px-6 py-4 text-white placeholder:text-white/20 focus:outline-none focus:border-[#ca45ff]/50 transition-colors backdrop-blur-md"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-[14px] text-[#bdaee7] uppercase tracking-[2px] font-medium ml-1">Company</label>
                  <input 
                    type="text" 
                    placeholder="The Stori Teler"
                    className="w-full bg-white/5 border border-white/10 rounded-[16px] px-6 py-4 text-white placeholder:text-white/20 focus:outline-none focus:border-[#ca45ff]/50 transition-colors backdrop-blur-md"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[14px] text-[#bdaee7] uppercase tracking-[2px] font-medium ml-1">Business Years</label>
                  <input 
                    type="text" 
                    placeholder="5+ Years"
                    className="w-full bg-white/5 border border-white/10 rounded-[16px] px-6 py-4 text-white placeholder:text-white/20 focus:outline-none focus:border-[#ca45ff]/50 transition-colors backdrop-blur-md"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[14px] text-[#bdaee7] uppercase tracking-[2px] font-medium ml-1">Message</label>
                <textarea 
                  rows={4}
                  placeholder="How can we help you scale?"
                  className="w-full bg-white/5 border border-white/10 rounded-[21px] px-6 py-4 text-white placeholder:text-white/20 focus:outline-none focus:border-[#ca45ff]/50 transition-colors backdrop-blur-md resize-none"
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="w-full py-5 rounded-[16px] bg-gradient-to-r from-[#1c4eff] via-[#ca45ff] to-[#fe881b] text-white font-bold text-[18px] uppercase tracking-[2px] hover:opacity-90 transition-opacity shadow-[0_8px_32px_rgba(202,69,255,0.2)]"
              >
                Send Message
              </button>
            </form>

          </m.div>
          
        </div>
      </div>
    </section>
  )
}
