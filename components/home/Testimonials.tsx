import { testimonials } from "@/lib/data";
import { Quote } from "lucide-react";

export default function Testimonials() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-sdu-gold font-bold tracking-widest uppercase text-xs mb-3 block">Uğur Hekayələri</span>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-sdu-blue mb-6">Tələbə və Məzunlarımızdan</h2>
            <p className="text-gray-500">
                SDU məzunları bu gün dünyanın aparıcı şirkətlərində və elmi mərkəzlərində uğurla fəaliyyət göstərirlər.
            </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((item) => (
                <div key={item.id} className="group relative bg-paper p-8 pt-12 border border-transparent hover:border-gray-100 transition-all duration-300">
                    <Quote className="absolute top-8 left-8 w-8 h-8 text-sdu-gold/20 group-hover:text-sdu-gold/40 transition-colors" />
                    
                    <p className="text-sdu-blue/80 italic mb-8 relative z-10 leading-relaxed min-h-[100px]">
                        "{item.quote}"
                    </p>
                    
                    <div className="flex items-center gap-4 border-t border-gray-200 pt-6">
                        <img 
                            src={item.image} 
                            alt={item.name} 
                            className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-sm"
                        />
                        <div>
                            <h4 className="font-serif font-bold text-sdu-blue">{item.name}</h4>
                            <p className="text-xs text-sdu-gold font-bold uppercase tracking-wider">{item.role}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
}
