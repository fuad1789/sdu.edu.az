import { partners } from "@/lib/data";
import Marquee from "react-fast-marquee";

export default function Partners() {
  return (
    <section className="py-20 bg-white border-t border-gray-100 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 mb-10">
        <p className="text-center text-xs font-bold text-gray-400 uppercase tracking-widest">
            Tərəfdaşlarımız və Əməkdaşlıqlar
        </p>
      </div>
      
      <div className="relative">
        {/* Gradient Masks for smooth fade out at edges */}
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

        <Marquee gradient={false} speed={40} pauseOnHover={true}>
            {partners.map((partner) => (
                <div key={partner.id} className="mx-8 md:mx-12 group relative w-32 md:w-40 grayscale hover:grayscale-0 transition-all duration-500 opacity-60 hover:opacity-100 flex items-center justify-center h-24">
                    <img 
                        src={partner.logo} 
                        alt={partner.name} 
                        className="max-w-full max-h-full object-contain"
                    />
                </div>
            ))}
        </Marquee>
      </div>
    </section>
  );
}
