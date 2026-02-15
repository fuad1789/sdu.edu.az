"use client";

import { newsData } from "@/lib/data";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

export default function NewsGrid() {
  // Take first 5 items for the grid
  const featured = newsData[0];
  const gridItems = newsData.slice(1, 5);

  return (
    <section className="py-24 bg-paper">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
                <span className="text-sdu-gold font-bold tracking-widest uppercase text-xs mb-2 block">Xəbərlər və Yeniliklər</span>
                <h2 className="text-4xl md:text-5xl font-serif font-bold text-sdu-blue">SDU Gündəliyi</h2>
            </div>
            <Link href="/news" className="group flex items-center gap-2 text-sdu-blue font-semibold border-b border-sdu-blue pb-1 hover:text-sdu-gold hover:border-sdu-gold transition-colors">
                Bütün xəbərlər <ArrowUpRight className="w-4 h-4 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
            </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 auto-rows-[300px]">
             {/* Main Featured Item - Spans 2 cols, 2 rows */}
             <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="md:col-span-2 md:row-span-2 group relative overflow-hidden rounded-sm cursor-pointer"
             >
                <Link href={featured.href} className="block h-full w-full relative">
                    <div className="absolute inset-0 bg-sdu-blue/10 group-hover:bg-sdu-blue/0 transition-colors z-10"></div>
                     
                     <div className="absolute inset-0">
                        <Image 
                            src={featured.image}
                            alt={featured.title}
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                     </div>
                     
                     <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent z-10"></div>
                     
                     <div className="absolute bottom-0 left-0 p-8 z-20 w-full">
                        <span className="inline-block px-3 py-1 bg-sdu-gold text-sdu-blue text-[10px] font-bold tracking-widest uppercase mb-3 rounded-sm">
                            {featured.category}
                        </span>
                        <h3 className="text-2xl md:text-4xl font-serif font-bold text-white mb-2 leading-tight group-hover:underline decoration-1 underline-offset-4">
                            {featured.title}
                        </h3>
                        <p className="text-white/80 line-clamp-2 text-sm md:text-base font-light mb-4">
                            {featured.description}
                        </p>
                        <span className="text-white/60 text-xs uppercase tracking-wide">{featured.date}</span>
                     </div>
                </Link>
             </motion.div>

             {/* Smaller Grid Items */}
             {gridItems.map((item, idx) => (
                <motion.div 
                    key={item.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="group relative bg-white border border-gray-100 overflow-hidden flex flex-col h-full rounded-sm hover:shadow-lg transition-shadow duration-300"
                >
                    <Link href={item.href} className="flex flex-col h-full">
                        <div className="h-48 overflow-hidden relative">
                             <div className="w-full h-full relative">
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 25vw"
                                />
                             </div>
                             <span className="absolute top-4 left-4 z-10 bg-white/90 backdrop-blur-sm px-2 py-1 text-[10px] font-bold tracking-wider uppercase text-sdu-blue">
                                {item.category}
                             </span>
                        </div>
                        <div className="p-6 flex-1 flex flex-col justify-between">
                            <div>
                                <h4 className="font-serif font-bold text-lg text-sdu-blue mb-3 leading-snug group-hover:text-sdu-blue/80">
                                    {item.title}
                                </h4>
                                <p className="text-xs text-gray-500 line-clamp-2 mb-2">
                                     {item.description}
                                </p>
                            </div>
                            <span className="text-[10px] text-gray-400 font-medium uppercase">{item.date}</span>
                        </div>
                    </Link>
                </motion.div>
             ))}
        </div>
      </div>
    </section>
  );
}
