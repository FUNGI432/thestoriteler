import { useState } from "react";
import { m, AnimatePresence } from "framer-motion";
import marketingImg from "@/assets/blogs/marketing.png";
import expoImg from "@/assets/blogs/expo.png";
import ethnicImg from "@/assets/blogs/ethnic.png";
import founderImg from "@/assets/blogs/founder.png";

const blogs = [
  {
    id: 1,
    title: "The Evolution of Experiential Marketing in India",
    date: "March 15, 2024",
    author: "The Stori Teler Team",
    excerpt: "Discover how brands are moving from traditional advertising to immersive, story-driven experiences that forge lasting emotional connections.",
    image: marketingImg,
    content: `
      Experiential marketing is no longer just a buzzword; it's the core of modern brand strategy. In a world saturated with digital noise, people crave physical, tangible connections. 

      At The Stori Teler, we've seen this shift firsthand. Traditional billboards and commercials are being replaced by interactive installations, sensory-rich pop-ups, and large-scale exhibitions where the 'user' is the protagonist. 

      The future of marketing in India lies in the intersection of technology—like AR and VR—and the age-old art of storytelling. By creating moments that people want to share, brands aren't just selling products; they're becoming part of the consumer's personal history.
    `
  },
  {
    id: 2,
    title: "How to Plan a Successful B2B Textile Expo",
    date: "February 28, 2024",
    author: "Events Lead",
    excerpt: "A behind-the-scenes look at the logistics, strategy, and curation required to host India's most serious textile business hubs.",
    image: expoImg,
    content: `
      Planning a B2B expo like the Kolkata Fabric Expo or the South Textile Expo is an exercise in precision. It starts months in advance with a clear focus on one thing: ROI for the exhibitors and value for the buyers.

      Curating the right mix of manufacturers is critical. We look for innovation, reliability, and market demand. It's not about the quantity of booths, but the quality of the business happening within them.

      Logistics—from venue selection at premier locations like Biswa Bangla to the flow of attendee movement—must be seamless. But the real magic happens in the networking zones, where deals are signed over coffee and industry futures are shaped.
    `
  },
  {
    id: 3,
    title: "Trends in Women's Ethnic Wear for 2025-26",
    date: "January 10, 2024",
    author: "Fashion Curation Dept.",
    excerpt: "From sustainable fabrics to revivalist embroidery, here's what's dominating the next season of Indian ethnic fashion.",
    image: ethnicImg,
    content: `
      The next two years in Indian ethnic wear are all about 'Revivalism meets Modernity'. We are seeing a massive surge in interest for hand-loomed fabrics and natural dyes, reflecting a global shift toward sustainability.

      Key trends include:
      - Lightweight Silks: Perfect for the grand but comfortable lifestyle.
      - Intricate Zardozi: Making a comeback in contemporary silhouettes.
      - Pastel Palettes: Moving away from traditional reds to more muted, sophisticated tones.

      Our exhibitions always strive to showcase these trends before they hit the retail shelves, giving our buyers the 'first-mover' advantage in a highly competitive market.
    `
  },
  {
    id: 4,
    title: "The Story Behind 'The Stori Teler'",
    date: "December 05, 2023",
    author: "Founder's Note",
    excerpt: "Why we believe every brand has a story that deserves more than just a screen—it deserves a stage.",
    image: founderImg,
    content: `
      We didn't start as just another event agency. We started because we felt that the 'soul' of brands was being lost in digital translation. 

      'The Stori Teler' was born out of a desire to build stages for those stories. Whether it's a massive textile expo or a niche couture launch, our goal remains the same: to create an environment where the brand's narrative comes alive.

      Our journey has been one of constant evolution, moving from simple event management to becoming true experiential partners. Every successful event is a chapter in our own story, and we're just getting started.
    `
  }
];

export default function Blogs() {
  const [selectedBlog, setSelectedBlog] = useState<null | typeof blogs[0]>(null);

  return (
    <div className="w-full bg-[#13101C] min-h-screen text-white pt-32 pb-20 relative overflow-x-hidden">
      
      {/* Background Glows */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-[20%] left-[-10%] w-[50vw] h-[50vw] bg-[#ca45ff] opacity-[0.05] blur-[150px] rounded-full" />
        <div className="absolute bottom-[20%] right-[-10%] w-[50vw] h-[50vw] bg-[#1c4eff] opacity-[0.05] blur-[150px] rounded-full" />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-10">
        
        {/* Hero Section */}
        <header className="mb-20 text-center lg:text-left">
          <m.h3 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[16px] md:text-[20px] text-[#A69FB6] font-medium tracking-[4px] uppercase mb-4"
          >
            Insights & Stories
          </m.h3>
          <m.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-[50px] md:text-[80px] font-black uppercase tracking-tight leading-none mb-6"
          >
            The <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ca45ff] via-[#8545ff] to-[#1c4eff]">Stori Teler</span> Journal
          </m.h1>
          <m.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-[18px] md:text-[22px] text-[#bdaee7] max-w-2xl font-light leading-relaxed"
          >
            Deep dives into experiential marketing, event strategy, and the future of India's textile landscape.
          </m.p>
        </header>

        {/* Blogs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
          {blogs.map((blog, index) => (
            <m.div
              key={blog.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              onClick={() => setSelectedBlog(blog)}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[16/9] overflow-hidden rounded-[32px] border border-white/10 p-[2px] bg-gradient-to-br from-white/10 to-transparent group-hover:from-[#ca45ff]/50 transition-all duration-500">
                <div className="w-full h-full bg-[#13101C] rounded-[30px] overflow-hidden relative">
                  <img 
                    src={blog.image} 
                    alt={blog.title} 
                    className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-1000"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
                  
                  <div className="absolute bottom-8 left-8 right-8">
                     <span className="text-[#ca45ff] text-[12px] uppercase tracking-[2px] font-bold mb-2 block">{blog.date}</span>
                     <h2 className="text-[24px] md:text-[32px] font-bold text-white leading-tight group-hover:text-[#ca45ff] transition-colors">{blog.title}</h2>
                  </div>
                </div>
              </div>
              <p className="mt-6 text-[#A69FB6] text-[16px] leading-relaxed line-clamp-2 px-4 italic">
                "{blog.excerpt}"
              </p>
            </m.div>
          ))}
        </div>
      </div>

      {/* Modal Overlay */}
      <AnimatePresence>
        {selectedBlog && (
          <div className="fixed inset-0 z-[2000] flex items-center justify-center p-6 md:p-12">
            <m.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedBlog(null)}
              className="absolute inset-0 bg-black/80 backdrop-blur-2xl"
            />
            
            <m.div
              initial={{ scale: 0.9, opacity: 0, y: 100 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 100 }}
              className="relative w-full max-w-[1000px] h-full max-h-[85vh] bg-[#1a1625] rounded-[40px] border border-white/10 overflow-hidden shadow-2xl flex flex-col"
            >
              <button 
                onClick={() => setSelectedBlog(null)}
                className="absolute top-8 right-8 z-20 w-12 h-12 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-white hover:bg-white/20 transition-all"
              >
                ✕
              </button>

              <div className="shrink-0 relative h-[300px] md:h-[450px]">
                <img 
                  src={selectedBlog.image} 
                  alt={selectedBlog.title} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a1625] to-transparent" />
                
                <div className="absolute bottom-10 left-10 right-10">
                   <span className="text-[#ca45ff] text-[14px] uppercase tracking-[3px] font-bold mb-4 block">{selectedBlog.author} • {selectedBlog.date}</span>
                   <h2 className="text-[32px] md:text-[50px] font-black leading-tight text-white uppercase tracking-tight">{selectedBlog.title}</h2>
                </div>
              </div>

              <div className="flex-1 overflow-y-auto px-10 py-12 custom-scrollbar">
                <div className="max-w-[800px] mx-auto">
                   <div className="text-[18px] md:text-[20px] text-[#A69FB6] leading-[1.8] font-light space-y-8 whitespace-pre-line">
                      {selectedBlog.content}
                   </div>
                   
                   <div className="mt-20 pt-10 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
                      <div className="text-white/40 text-sm uppercase tracking-widest">End of Journal Entry</div>
                      <button 
                        onClick={() => setSelectedBlog(null)}
                        className="px-10 py-4 rounded-full bg-white/5 border border-white/10 text-white font-bold uppercase tracking-[2px] hover:bg-white/10 transition-all"
                      >
                        Back to Insights
                      </button>
                   </div>
                </div>
              </div>
            </m.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
