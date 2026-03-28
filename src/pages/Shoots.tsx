import { useRef } from "react";
import { m, useInView } from "framer-motion";

import heroImg from "@/assets/shoots/hero.png";
import catalogImg from "@/assets/shoots/catalog.png";
import campaignImg from "@/assets/shoots/campaign.png";
import lifestyleImg from "@/assets/shoots/lifestyle.png";
import productImg from "@/assets/shoots/product.png";
import videoImg from "@/assets/shoots/video.png";

/* ─── Data ─── */
const services = [
  {
    title: "Catalog Shoots",
    desc: "Clean, professional, and detail-focused visuals for e-commerce, wholesale catalogs, and product listings.",
    tag: "Designed to showcase products clearly and professionally.",
    image: catalogImg,
  },
  {
    title: "Campaign Shoots",
    desc: "Creative, styled, and brand-focused shoots for new launches, seasonal collections, and promotions.",
    tag: "Built to create impact and brand recall.",
    image: campaignImg,
  },
  {
    title: "Fashion & Lifestyle",
    desc: "Story-driven visuals that bring your brand to life — models, styling, direction, indoor & outdoor setups.",
    tag: "Perfect for social media & branding.",
    image: lifestyleImg,
  },
  {
    title: "Product Shoots",
    desc: "Focused visuals highlighting fabric quality, design details, and craftsmanship for textile & fashion brands.",
    tag: "Ideal for textile & fashion brands.",
    image: productImg,
  },
  {
    title: "Video Content & Reels",
    desc: "Short-form and promotional videos — Instagram reels, ad creatives, and brand videos designed for reach.",
    tag: "Content designed to increase reach & engagement.",
    image: videoImg,
  },
];

const steps = [
  { num: "01", title: "Understand the Brand", desc: "Audience, positioning, and purpose" },
  { num: "02", title: "Concept & Planning", desc: "Moodboards, styling, shoot direction" },
  { num: "03", title: "Execution", desc: "Professional production with attention to detail" },
  { num: "04", title: "Delivery & Optimization", desc: "Content ready for marketing, ads, and platforms" },
];

const whyUs = [
  "Industry expertise in textile & fashion",
  "Shoots designed for sales, not just aesthetics",
  "End-to-end execution (concept to final output)",
  "Content optimized for digital marketing & ads",
  "Strong understanding of B2B & wholesale markets",
];

const clientFit = [
  "Textile Manufacturers",
  "Fashion Brands",
  "D2C Brands",
  "Wholesale Businesses",
  "Designers & Labels",
];

/* ─── Helpers ─── */
function FadeIn({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <m.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </m.div>
  );
}

/* ─── Page ─── */
export default function Shoots() {
  return (
    <div className="w-full bg-[#13101C] min-h-screen text-white relative overflow-x-hidden">

      {/* Background Glows */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-[10%] left-[-15%] w-[60vw] h-[60vw] bg-[#ca45ff] opacity-[0.04] blur-[180px] rounded-full" />
        <div className="absolute top-[50%] right-[-15%] w-[55vw] h-[55vw] bg-[#1c4eff] opacity-[0.04] blur-[180px] rounded-full" />
        <div className="absolute bottom-[10%] left-[20%] w-[40vw] h-[40vw] bg-[#fe881b] opacity-[0.03] blur-[180px] rounded-full" />
      </div>

      {/* ─── HERO ─── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Hero Image */}
        <div className="absolute inset-0 z-0">
          <img src={heroImg} alt="Shoots Hero" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#13101C] via-[#13101C]/60 to-[#13101C]" />
        </div>

        <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-10 text-center py-40">
          <m.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-3 bg-white/5 border border-white/10 backdrop-blur-xl px-6 py-3 rounded-full mb-10"
          >
            <span className="w-2 h-2 bg-[#ca45ff] rounded-full animate-pulse" />
            <span className="text-[#A69FB6] text-sm uppercase tracking-[3px] font-medium">Shot with Strategy</span>
          </m.div>

          <m.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="text-[42px] md:text-[70px] lg:text-[90px] font-black uppercase tracking-tighter leading-[0.9] mb-8"
          >
            We Don't Just Shoot.
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ca45ff] via-[#8545ff] to-[#1c4eff]">
              We Create What Sells.
            </span>
          </m.h1>

          <m.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-[18px] md:text-[22px] text-[#bdaee7] max-w-3xl mx-auto font-light leading-relaxed mb-12"
          >
            High-impact photoshoots and visual content designed to position your brand, attract buyers, and drive real conversions.
          </m.p>

          <m.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-5"
          >
            <a
              href="https://www.instagram.com/thestoriteler/"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative p-[2px] rounded-full bg-gradient-to-r from-[#ca45ff] to-[#1c4eff] hover:shadow-[0_0_40px_rgba(202,69,255,0.4)] transition-shadow"
            >
              <div className="bg-[#13101C] rounded-full px-10 py-4 group-hover:bg-transparent transition-colors duration-500">
                <span className="text-white font-bold text-[16px] uppercase tracking-[2px]">Book a Shoot</span>
              </div>
            </a>
            <a
              href="#portfolio"
              className="px-10 py-4 rounded-full bg-white/5 border border-white/10 text-white font-bold text-[16px] uppercase tracking-[2px] hover:bg-white/10 transition-all"
            >
              View Portfolio
            </a>
          </m.div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10">
          <m.div
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center pt-2"
          >
            <div className="w-1.5 h-3 bg-white/40 rounded-full" />
          </m.div>
        </div>
      </section>

      {/* ─── INTRO ─── */}
      <section className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-10 py-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <FadeIn>
            <h3 className="text-[#ca45ff] text-sm uppercase tracking-[4px] font-bold mb-6">Designed to Convert</h3>
            <h2 className="text-[36px] md:text-[56px] font-black uppercase tracking-tighter leading-[1] mb-8">
              Your product deserves more than just good photos.
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-[18px] md:text-[22px] text-[#A69FB6] leading-[1.8] font-light">
              It deserves <span className="text-white font-medium">attention, desire, and demand.</span>
              <br /><br />
              At The Stori Teler, we create conversion-driven visual content tailored for brands that want to stand out in competitive markets. From catalog shoots to full-scale campaigns, every frame is crafted with <span className="text-[#ca45ff] font-medium">strategy, not guesswork.</span>
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ─── SERVICES ─── */}
      <section className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-10 py-20">
        <FadeIn className="text-center mb-20">
          <h3 className="text-[#ca45ff] text-sm uppercase tracking-[4px] font-bold mb-4">What We Offer</h3>
          <h2 className="text-[36px] md:text-[60px] font-black uppercase tracking-tighter leading-[0.95]">
            Not Just Aesthetic.<br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ca45ff] to-[#1c4eff]">Effective.</span>
          </h2>
        </FadeIn>

        <div className="space-y-8">
          {services.map((svc, i) => (
            <FadeIn key={svc.title} delay={i * 0.08}>
              <div className={`group relative overflow-hidden rounded-[40px] border border-white/5 hover:border-white/15 transition-all duration-700 ${i % 2 === 0 ? "" : "lg:flex-row-reverse"}`}>
                <div className={`flex flex-col ${i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"}`}>
                  {/* Image */}
                  <div className="lg:w-[55%] relative aspect-[16/10] lg:aspect-auto overflow-hidden">
                    <img
                      src={svc.image}
                      alt={svc.title}
                      className="w-full h-full object-cover opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-${i % 2 === 0 ? "r" : "l"} from-transparent via-transparent to-[#13101C]/90`} />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#13101C]/80 via-transparent to-transparent lg:hidden" />
                  </div>

                  {/* Content */}
                  <div className="lg:w-[45%] flex flex-col justify-center p-10 lg:p-16 relative">
                    <div className="absolute -top-20 -right-20 w-64 h-64 bg-[#ca45ff] opacity-0 group-hover:opacity-[0.06] blur-[100px] rounded-full transition-all duration-700" />
                    
                    <span className="text-[#ca45ff] text-[11px] uppercase tracking-[3px] font-bold mb-4 block">
                      0{i + 1} — Service
                    </span>
                    <h3 className="text-[28px] md:text-[40px] font-black uppercase tracking-tighter leading-[1] mb-6 group-hover:text-[#ca45ff] transition-colors duration-500">
                      {svc.title}
                    </h3>
                    <p className="text-[16px] md:text-[18px] text-[#A69FB6] leading-relaxed mb-8 font-light">
                      {svc.desc}
                    </p>
                    <div className="flex items-center gap-3 text-white/60">
                      <span className="text-[#ca45ff] text-lg">→</span>
                      <span className="text-[14px] italic font-light">{svc.tag}</span>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* ─── APPROACH / PROCESS ─── */}
      <section className="relative z-10 py-32 overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <FadeIn className="text-center mb-20">
            <h3 className="text-[#ca45ff] text-sm uppercase tracking-[4px] font-bold mb-4">Our Approach</h3>
            <h2 className="text-[36px] md:text-[60px] font-black uppercase tracking-tighter leading-[0.95] mb-6">
              Strategy First,<br />Then Shoot.
            </h2>
            <p className="text-[18px] text-[#A69FB6] font-light max-w-2xl mx-auto">
              We don't just click pictures — we build visual strategies.
            </p>
          </FadeIn>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, i) => (
              <FadeIn key={step.num} delay={i * 0.12}>
                <div className="group relative p-[1px] rounded-[32px] bg-gradient-to-b from-white/10 to-transparent hover:from-[#ca45ff]/40 transition-all duration-500">
                  <div className="bg-[#1a1625] rounded-[32px] p-10 h-full flex flex-col items-start relative overflow-hidden">
                    <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#ca45ff] opacity-0 group-hover:opacity-[0.08] blur-[60px] rounded-full transition-all duration-700" />
                    <span className="text-[60px] font-black text-transparent bg-clip-text bg-gradient-to-b from-white/10 to-transparent leading-none mb-6">
                      {step.num}
                    </span>
                    <h4 className="text-[22px] font-bold text-white mb-4 uppercase tracking-tight">{step.title}</h4>
                    <p className="text-[15px] text-[#A69FB6] font-light leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ─── WHY CHOOSE US ─── */}
      <section className="relative z-10 py-24">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeIn>
              <h3 className="text-[#ca45ff] text-sm uppercase tracking-[4px] font-bold mb-6">Why Choose Us</h3>
              <h2 className="text-[36px] md:text-[56px] font-black uppercase tracking-tighter leading-[1] mb-10">
                Built for Brands That Want to <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ca45ff] to-[#1c4eff]">Grow.</span>
              </h2>
            </FadeIn>
            <FadeIn delay={0.15}>
              <div className="space-y-5">
                {whyUs.map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-5 bg-white/[0.03] border border-white/5 hover:border-white/15 rounded-2xl p-6 group transition-all duration-300"
                  >
                    <span className="w-10 h-10 shrink-0 rounded-xl bg-gradient-to-br from-[#ca45ff]/20 to-[#1c4eff]/20 flex items-center justify-center border border-white/10 group-hover:border-[#ca45ff]/40 transition-colors">
                      <svg className="w-5 h-5 text-[#ca45ff]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
                    </span>
                    <span className="text-[16px] md:text-[18px] text-[#bdaee7] font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ─── PORTFOLIO GRID ─── */}
      <section id="portfolio" className="relative z-10 py-32">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <FadeIn className="text-center mb-20">
            <h3 className="text-[#ca45ff] text-sm uppercase tracking-[4px] font-bold mb-4">Portfolio</h3>
            <h2 className="text-[36px] md:text-[60px] font-black uppercase tracking-tighter leading-[0.95] mb-6">
              Visuals That Speak<br />For <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ca45ff] to-[#1c4eff]">Themselves.</span>
            </h2>
            <p className="text-[16px] text-[#A69FB6] font-light italic">Every frame is built with purpose — to attract, engage, and convert.</p>
          </FadeIn>

          {/* Masonry-like Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[catalogImg, campaignImg, lifestyleImg, productImg, videoImg, heroImg].map((img, i) => (
              <FadeIn key={i} delay={i * 0.08} className={`${i === 0 || i === 5 ? "row-span-2" : ""}`}>
                <div className="group relative overflow-hidden rounded-[24px] border border-white/5 hover:border-[#ca45ff]/30 transition-all duration-500 h-full">
                  <img
                    src={img}
                    alt={`Portfolio ${i + 1}`}
                    className="w-full h-full object-cover min-h-[250px] opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all duration-1000"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
                  <div className="absolute bottom-6 left-6 right-6 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                    <span className="text-xs uppercase tracking-[3px] text-[#ca45ff] font-bold">Shot with Strategy</span>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CLIENT FIT ─── */}
      <section className="relative z-10 py-24">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <FadeIn className="text-center mb-16">
            <h3 className="text-[#ca45ff] text-sm uppercase tracking-[4px] font-bold mb-4">Who Is This For?</h3>
            <h2 className="text-[36px] md:text-[50px] font-black uppercase tracking-tighter leading-[0.95]">
              If You Make It, We Make It <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ca45ff] to-[#1c4eff]">Look Irresistible.</span>
            </h2>
          </FadeIn>

          <div className="flex flex-wrap items-center justify-center gap-4">
            {clientFit.map((client, i) => (
              <FadeIn key={client} delay={i * 0.08}>
                <div className="px-8 py-5 rounded-full bg-white/[0.03] border border-white/10 hover:border-[#ca45ff]/40 hover:bg-[#ca45ff]/5 transition-all duration-300">
                  <span className="text-[16px] md:text-[18px] text-white font-bold uppercase tracking-wide">{client}</span>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ─── RESULTS / VALUE ─── */}
      <section className="relative z-10 py-32">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10 text-center">
          <FadeIn>
            <h2 className="text-[32px] md:text-[56px] font-black uppercase tracking-tighter leading-[1] mb-8">
              Good visuals get likes.<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ca45ff] via-[#8545ff] to-[#1c4eff]">
                Great visuals get customers.
              </span>
            </h2>
          </FadeIn>
          <FadeIn delay={0.15}>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
              {[
                { icon: "✦", text: "Increase product appeal" },
                { icon: "✦", text: "Improve conversion rates" },
                { icon: "✦", text: "Strengthen brand identity" },
                { icon: "✦", text: "Build trust with buyers" },
              ].map((item, i) => (
                <div key={i} className="p-8 rounded-[28px] bg-white/[0.03] border border-white/5 hover:border-[#ca45ff]/30 transition-all duration-300 group">
                  <span className="text-[28px] text-[#ca45ff] block mb-4 group-hover:scale-125 transition-transform duration-300">{item.icon}</span>
                  <span className="text-[16px] text-white font-bold uppercase tracking-wide">{item.text}</span>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ─── FINAL CTA ─── */}
      <section className="relative z-10 py-32">
        <div className="max-w-[1000px] mx-auto px-6 lg:px-10 text-center">
          <FadeIn>
            <h3 className="text-[#ca45ff] text-sm uppercase tracking-[4px] font-bold mb-6">Let's Work Together</h3>
            <h2 className="text-[36px] md:text-[64px] font-black uppercase tracking-tighter leading-[0.95] mb-8">
              Let's Create Content<br />That <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ca45ff] to-[#1c4eff]">Drives Sales.</span>
            </h2>
            <p className="text-[18px] md:text-[20px] text-[#A69FB6] font-light max-w-2xl mx-auto mb-14 leading-relaxed">
              Whether you're launching a new collection or scaling your brand, we'll create visuals that make your audience stop — and buy.
            </p>
          </FadeIn>
          <FadeIn delay={0.15}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
              <a
                href="https://www.instagram.com/thestoriteler/"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative p-[2px] rounded-full bg-gradient-to-r from-[#ca45ff] to-[#1c4eff] hover:shadow-[0_0_50px_rgba(202,69,255,0.5)] transition-shadow"
              >
                <div className="bg-[#13101C] rounded-full px-12 py-5 group-hover:bg-transparent transition-colors duration-500">
                  <span className="text-white font-bold text-[16px] uppercase tracking-[2px]">Book Your Shoot</span>
                </div>
              </a>
              <a
                href="https://www.instagram.com/thestoriteler/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-12 py-5 rounded-full bg-white/5 border border-white/10 text-white font-bold text-[16px] uppercase tracking-[2px] hover:bg-white/10 transition-all"
              >
                Talk to Our Team
              </a>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
