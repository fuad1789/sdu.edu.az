const stats = [
    { value: "60+", label: "İl Təcrübə" },
    { value: "7", label: "Fakültə" },
    { value: "6000+", label: "Tələbə" },
  ];
  
  export default function Stats() {
    return (
      <section className="py-12 md:py-24 bg-sdu-blue text-white border-y border-white/10">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-3 gap-4 md:gap-12 text-center divide-x divide-white/20">
            {stats.map((stat, idx) => (
               <div key={idx} className="px-2 md:px-4 flex flex-col items-center justify-center">
                  <div className="text-3xl md:text-7xl font-serif font-bold text-sdu-gold mb-1 md:mb-3 leading-none">
                    {stat.value}
                  </div>
                  <div className="text-[10px] md:text-sm font-bold uppercase tracking-widest text-white/60">
                    {stat.label}
                  </div>
               </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
