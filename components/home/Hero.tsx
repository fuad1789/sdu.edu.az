"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1627556704290-2b1f5853ff78?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Graduation
    title: "Təhsil Millətin Gələcəyidir",
    subtitle: "60 illik akademik təcrübə və qlobal hədəflər.",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2000&auto=format&fit=crop", // Lab/Tech
    title: "Gələcəyin Mühəndisləri Buradadır",
    subtitle: "Müasir laboratoriyalar və real təcrübə imkanları.",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?q=80&w=2000&auto=format&fit=crop", // Campus/Students
    title: "Unudulmaz Tələbə Həyatı",
    subtitle: "Sosial klublar, idman və dostluq mühiti.",
  },
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-advance logic
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000); // 5 seconds per slide
    return () => clearInterval(timer);
  }, [currentSlide]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="relative h-screen w-full overflow-hidden bg-black">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Background Image with Ken Burns Effect */}
          <motion.div
            className="absolute inset-0 w-full h-full"
            initial={{ scale: 1 }}
            animate={{ scale: 1.1 }}
            transition={{ duration: 6, ease: "linear" }}
          >
            <Image
              src={slides[currentSlide].image}
              alt={slides[currentSlide].title}
              fill
              className="object-cover"
              priority
            />
          </motion.div>

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/40 md:bg-black/30" />

          {/* Text Content */}
          <div className="absolute inset-0 flex items-center">
            <div className="container mx-auto px-4 md:px-6">
              <div className="max-w-3xl space-y-4 md:space-y-6">
                <motion.h1
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  className="text-4xl md:text-7xl font-serif font-bold text-white leading-[1.1]"
                >
                  {slides[currentSlide].title}
                </motion.h1>
                <motion.p
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                  className="text-lg md:text-2xl text-white/90 font-light"
                >
                  {slides[currentSlide].subtitle}
                </motion.p>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation & Controls */}
      <div className="absolute bottom-32 left-0 w-full z-20">
        <div className="container mx-auto px-4 md:px-6 flex items-end justify-between">
          
          {/* Progress Bar & Counter */}
          <div className="flex items-center gap-6">
            <span className="text-4xl font-serif font-bold text-white">
              {String(currentSlide + 1).padStart(2, "0")} <span className="text-white/40 text-2xl">/ {String(slides.length).padStart(2, "0")}</span>
            </span>
            
            {/* Simple Progress Line (Resetting on slide change) */}
            <div className="w-24 md:w-32 h-1 bg-white/20 rounded-full overflow-hidden">
                <motion.div 
                    key={currentSlide}
                    initial={{ width: "0%" }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 5, ease: "linear" }}
                    className="h-full bg-sdu-gold"
                />
            </div>
          </div>

          {/* Navigation Arrows */}
          <div className="flex gap-4">
             <button 
                onClick={prevSlide}
                className="w-12 h-12 md:w-14 md:h-14 rounded-full border border-white/30 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all duration-300 backdrop-blur-sm"
             >
                <ChevronLeft className="w-6 h-6" />
             </button>
             <button 
                onClick={nextSlide}
                className="w-12 h-12 md:w-14 md:h-14 rounded-full border border-white/30 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all duration-300 backdrop-blur-sm"
             >
                <ChevronRight className="w-6 h-6" />
             </button>
          </div>

        </div>
      </div>
      {/* QS Ranking Badges */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="flex items-center absolute top-24 right-4 md:top-28 md:right-10 z-30 bg-white/10 backdrop-blur-md border border-white/20 p-3 md:p-4 rounded-xl gap-3 md:gap-5 origin-top-right"
      >
        <div className="relative w-16 h-16 md:w-24 md:h-24 bg-white/5 rounded-lg p-2">
            <Image 
                src="/assets/icons/europe_qs_ranking.png" 
                alt="QS Europe Ranking 483" 
                width={96} 
                height={96} 
                className="object-contain w-full h-full"
            />
        </div>
        <div className="relative w-16 h-16 md:w-24 md:h-24 bg-white/5 rounded-lg p-2">
            <Image 
                src="/assets/icons/western_asia_2025_qs_ranking.png" 
                alt="QS Western Asia Ranking 31" 
                width={96} 
                height={96} 
                className="object-contain w-full h-full"
            />
        </div>
      </motion.div>
    </section>
  );
}
