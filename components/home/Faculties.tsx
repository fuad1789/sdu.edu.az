"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { faculties } from "@/lib/data";

export default function Faculties() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === 'left' ? -400 : 400;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-24 bg-paper overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        
        {/* Header & Controls */}
        {/* Header & Controls */}
        <div className="flex flex-col items-center text-center mb-12 gap-6 relative">
          <div className="max-w-xl">
            <span className="text-sdu-gold font-bold tracking-widest uppercase text-xs mb-3 block">
              Akademik Struktur
            </span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-sdu-blue leading-[1.1]">
              Fakültələr
            </h2>
            <p className="text-gray-500 text-sm md:text-base mt-4 max-w-sm mx-auto">
                SDU-nun 7 fakültəsi üzrə təhsil imkanlarını kəşf edin.
            </p>
          </div>

          {/* simple nav controls - Absolute on desktop to not mess with center alignment? 
              Or just center them below? Let's center them below for now as it's cleaner. */}
          <div className="hidden md:flex items-center gap-3">
            <button 
                onClick={() => scroll('left')}
                className="w-12 h-12 rounded-full border border-sdu-blue/10 flex items-center justify-center hover:bg-sdu-blue hover:text-sdu-gold transition-all duration-300 active:scale-95 text-sdu-blue"
                aria-label="Previous slide"
            >
                <ChevronLeft className="w-5 h-5" />
            </button>
            <button 
                onClick={() => scroll('right')}
                className="w-12 h-12 rounded-full border border-sdu-blue/10 flex items-center justify-center hover:bg-sdu-blue hover:text-sdu-gold transition-all duration-300 active:scale-95 text-sdu-blue"
                aria-label="Next slide"
            >
                <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Horizontal Slider Track - Native Scroll */}
        <div 
            ref={scrollContainerRef}
            className="flex gap-6 overflow-x-auto pb-8 snap-x snap-mandatory scrollbar-hide -mx-4 px-4 md:mx-0 md:px-0"
            style={{ msOverflowStyle: 'none', scrollbarWidth: 'none' }}
        >
          {faculties.map((faculty, idx) => (
            <Link 
              key={faculty.id} 
              href={faculty.href}
              className="relative flex-shrink-0 w-[240px] md:w-[280px] aspect-[3/4] snap-center group rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500"
            >
              {/* Full Background Image */}
              <Image
                src={faculty.image}
                alt={faculty.name}
                fill
                className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
                sizes="(max-width: 768px) 240px, 280px"
              />
              
              {/* Gradient Overlay for Text Readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-90 transition-opacity duration-300"></div>
              
              {/* Top Right Index */}
              <div className="absolute top-4 right-4">
                <span className="text-5xl font-serif font-bold text-white/10 select-none group-hover:text-white/20 transition-colors duration-300">
                    {String(idx + 1).padStart(2, '0')}
                </span>
              </div>

              {/* Bottom Content */}
              <div className="absolute bottom-0 left-0 w-full p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-2xl font-serif font-bold text-white mb-2 leading-tight">
                    {faculty.name}
                </h3>
                <div className="h-0 group-hover:h-auto overflow-hidden transition-all duration-300">
                     <p className="text-white/80 text-xs line-clamp-2 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                        {faculty.description}
                     </p>
                </div>
                
                <div className="mt-4 flex items-center gap-2 text-sdu-gold text-[10px] font-bold tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-200">
                    <span>Ətraflı</span>
                    <ArrowRight className="w-3 h-3" />
                </div>
              </div>
            </Link>
          ))}
          
           {/* Spacer for end scroll */}
           <div className="w-1 flex-shrink-0" />
        </div>
      </div>
    </section>
  );
}
