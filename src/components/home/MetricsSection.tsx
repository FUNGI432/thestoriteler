import imgNumbers from "@/assets/metrics-bg.png";

const metrics = [
  { value: "4678+", label: "Textile\nBusiness\nConnected" },
  { value: "80+", label: "Cities\nConnected\nGlobally" },
  { value: "17+", label: "Years of\nExperince" },
  { value: "60+", label: "Experiences\nCreated" },
];

export default function MetricsSection() {
  return (
    <section className="relative w-full min-h-[800px] flex items-center justify-center py-24 overflow-hidden">
      
      {/* Background Image Layer */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img alt="" className="w-full h-full object-cover" src={imgNumbers} />
      </div>

      {/* Top Transition Gradient Layer */}
      <div className="absolute top-0 left-0 w-full h-[30%] bg-gradient-to-b from-[#13101C] to-transparent z-0 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-full h-[30%] bg-gradient-to-t from-[#13101C] to-transparent z-0 pointer-events-none" />

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-[1920px] mx-auto px-[10%]">
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 lg:gap-8">
          
          {metrics.map((metric, index) => (
            <div 
              key={index}
              className="flex flex-col items-center justify-center p-8 bg-[rgba(0,0,0,0.24)] backdrop-blur-md rounded-[21.33px] shadow-[0_8px_32px_rgba(0,0,0,0.37)] aspect-[3/4] border border-white/5 transition-transform hover:scale-[1.02] duration-500 ease-out"
            >
              <h2 className="text-[60px] lg:text-[85.91px] text-white font-medium tracking-[-0.5155px] leading-tight text-center mb-8">
                {metric.value}
              </h2>
              
              <div className="w-full max-w-[260px] h-[1px] bg-gradient-to-r from-transparent via-[#bdaee7]/40 to-transparent mb-10" />
              
              <p className="text-[28px] lg:text-[42.182px] text-[#bdaee7] font-normal text-center leading-[1.1] whitespace-pre-line">
                {metric.label}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
