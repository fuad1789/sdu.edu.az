"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-sdu-blue">
      {/* Background Image / Placeholder */}
      <div className="absolute inset-0 z-0">
         {/* In production: <Image src="/assets/images/hero-main.jpg" layout="fill" objectFit="cover" /> */}
         {/* Since we don't have the image file yet, using a high-quality academic placeholder from Unsplash via CSS/div */}
         <div 
            className="w-full h-full bg-cover bg-center opacity-40 mix-blend-overlay"
            style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=2670&auto=format&fit=crop")' }}
         ></div>
         <div className="absolute inset-0 bg-gradient-to-t from-sdu-blue via-sdu-blue/80 to-transparent opacity-90"></div>
      </div>

      {/* Content */}
      <div className="container relative z-10 px-4 md:px-6 text-center">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8, delay: 0.2 }}
           className="max-w-4xl mx-auto space-y-8"
        >
            <span className="inline-block px-4 py-1.5 border border-white/20 rounded-full text-xs font-medium tracking-[0.2em] text-white/80 uppercase backdrop-blur-sm">
                Rəsmi Web Sayt
            </span>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-white leading-tight">
                Təhsil Millətin <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-sdu-gold to-white">Gələcəyidir</span>
            </h1>

            <p className="text-lg md:text-xl text-white/80 font-light max-w-2xl mx-auto leading-relaxed">
                Sumqayıt Dövlət Universiteti – 60 illik akademik təcrübə, müasir innovasiyalar və qlobal hədəflər.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
                <Link 
                    href="/az/about_us" 
                    className="w-full sm:w-auto px-8 py-4 bg-transparent border border-white text-white font-semibold tracking-wide hover:bg-white hover:text-sdu-blue transition-all duration-300"
                >
                    HAQQIMIZDA
                </Link>
                <Link 
                    href="/apply" 
                    className="w-full sm:w-auto px-8 py-4 bg-sdu-gold text-sdu-blue font-bold tracking-wide hover:bg-white transition-all duration-300 flex items-center justify-center gap-2 group"
                >
                    QƏBUL 2026
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
            </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-widest text-white/60">Kəşf Et</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-white to-transparent"></div>
      </motion.div>
    </section>
  );
}
