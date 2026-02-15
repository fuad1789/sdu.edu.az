"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { upcomingEvents } from "@/lib/data";

export default function UpcomingEvents() {
  return (
    <section className="py-24 bg-paper">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-sdu-gold font-bold tracking-widest uppercase text-xs mb-3 block">
              Təqvim
            </span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-sdu-blue leading-[1.1]">
              Gələcək Tədbirlər
            </h2>
          </div>
          <div className="flex items-center gap-2 text-sdu-blue font-bold text-sm tracking-wider uppercase border-b border-sdu-blue pb-1 cursor-pointer hover:text-sdu-gold hover:border-sdu-gold transition-colors">
            <span>Bütün Tədbirlər</span>
            <ArrowRight className="w-4 h-4" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {upcomingEvents.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white group flex flex-col h-full min-h-[450px] relative shadow-sm hover:shadow-xl transition-shadow duration-300"
            >
              {/* Top: Description */}
              <div className="p-8 pb-0 flex-1">
                 <h3 className="text-lg font-serif font-medium text-gray-800 leading-snug line-clamp-3">
                    {event.title}
                 </h3>
              </div>

              {/* Middle: Date */}
              <div className="px-8 py-6">
                <div className="flex items-start gap-2">
                    <span className="text-7xl font-sans font-light text-gray-900 tracking-tighter leading-none">
                        {event.day}
                    </span>
                    <div className="flex flex-col pt-2 uppercase tracking-widest text-[#B0B0B0] font-bold text-xs">
                        <span>{event.month}</span>
                    </div>
                </div>
              </div>

              {/* Bottom: Image & Footer */}
              <div className="relative mt-auto">
                 {/* Image Container */}
                 <div className="relative h-48 w-full overflow-hidden">
                    <Image
                        src={event.image}
                        alt={event.title}
                        fill
                        className="object-cover"
                    />
                 </div>

                 {/* Dark Footer Actions */}
                 <div className="bg-[#333] text-white flex divide-x divide-white/20">
                    <button className="flex-1 py-4 text-xs font-bold tracking-widest uppercase hover:bg-black transition-colors">
                        Qeydiyyat
                    </button>
                    <button className="flex-1 py-4 text-xs font-bold tracking-widest uppercase hover:bg-black transition-colors">
                        Ətraflı
                    </button>
                 </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
