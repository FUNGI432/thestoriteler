import imgImage34 from "@/assets/footer-reveal.png";
import imgArrow from "@/assets/footer-arrow.svg";
import imgVector from "@/assets/footer-logo.svg";

export default function Footer() {
  return (
    <footer 
      className="relative w-full h-[700px]"
      style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" }}
    >
      <div className="fixed bottom-0 left-0 w-full h-[700px] bg-[#13101C] overflow-hidden flex flex-col justify-between">
        {/* Dotted Background */}
        <div className="absolute inset-0 z-0">
          <img 
            src={imgImage34} 
            alt="" 
            className="w-full h-full object-cover opacity-60"
          />
        </div>

        {/* Top Content Row */}
        <div className="relative z-10 w-full max-w-[1500px] mx-auto pt-24 px-8 md:px-16 flex flex-col md:flex-row justify-between items-start gap-12">
          
          {/* Contact Section */}
          <div className="flex flex-col text-white max-w-sm">
            <p className="text-[18px] font-light tracking-wide mb-4 opacity-80">+91 98985 88035</p>
            <div className="flex items-center gap-4 mb-16 relative">
              <div className="w-[18px] h-[18px] rounded-full bg-white flex items-center justify-center shrink-0">
                <div className="w-[8px] h-[2px] bg-[#13101C] relative">
                   <div className="absolute w-[2px] h-[8px] bg-[#13101C] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"></div>
                </div>
              </div>
              <a href="mailto:info@thestoriteler.com" className="text-[28px] md:text-[34px] font-semibold tracking-[-0.05em] relative inline-block after:content-[''] after:absolute after:w-full after:h-[2px] after:bg-white after:bottom-0 after:left-0 hover:opacity-80 transition-opacity">
                info@thestoriteler.com
              </a>
            </div>
            <p className="text-[16px] md:text-[18px] font-light opacity-80 leading-relaxed">
              609,International Wealth Center, VIP Road,<br/>
              Vesu, Surat, Gujarat - 395007
            </p>
          </div>

          {/* Links Section */}
          <div className="flex gap-24 md:gap-32">
            {/* Navigation */}
            <div className="flex flex-col">
              <p className="text-[14px] text-white opacity-40 mb-6 uppercase tracking-wider">Navigation</p>
              <nav className="flex flex-col gap-4">
                {['Home', 'Studio', 'Projects', 'Blog'].map((item) => (
                  <a key={item} href="#" className="text-[22px] text-white font-light hover:opacity-70 transition-opacity">
                    {item}
                  </a>
                ))}
              </nav>
            </div>

            {/* Social */}
            <div className="flex flex-col">
              <p className="text-[14px] text-white opacity-40 mb-6 uppercase tracking-wider">Social</p>
              <nav className="flex flex-col gap-4">
                {['Twitter', 'Instagram', 'Linkedin', 'Whatsapp', 'Youtube', 'Facebook'].map((item) => (
                  <a key={item} href="#" className="group flex items-center gap-3 text-[22px] text-white font-light hover:opacity-70 transition-opacity">
                    {item}
                    <img src={imgArrow} alt="arrow" className="w-[10px] h-[11px] opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </a>
                ))}
              </nav>
            </div>
          </div>
        </div>

        {/* Bottom Giant Text */}
        <div className="relative z-10 w-full flex justify-center pb-12 overflow-hidden px-8 pointer-events-none">
          <img 
            src={imgVector} 
            alt="Thestoriteler" 
            className="w-full max-w-[1814px] aspect-[1814/253] object-contain pointer-events-none"
          />
        </div>
      </div>
    </footer>
  );
}
