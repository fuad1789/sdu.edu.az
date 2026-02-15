"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, Search, Globe } from "lucide-react";
import SduLogoIcon from "@/public/assets/icons/SDU_LOGO_ICON";
import siteNavigation from "@/config/site-navigation.json";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  // Scroll logic for sticky header style
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMobileMenuOpen]);

  // Determine header style based on scroll or page (non-home pages always solid)
  const isHome = pathname === "/";
  const isSolidHeader = isScrolled || !isHome || isMobileMenuOpen;
  
  const headerClass = isSolidHeader
    ? "bg-white/95 backdrop-blur-md text-sdu-blue shadow-sm py-4"
    : "bg-transparent text-white py-6";

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 w-full ${headerClass}`}
      >
        <div className="container mx-auto px-4 md:px-6">
          <nav className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="relative z-50 block">
             <div className="flex items-center gap-3">
                 <SduLogoIcon className={`h-11 w-auto transition-colors duration-300 ${isSolidHeader ? 'text-sdu-blue' : 'text-white'}`} />
                 <div className="flex flex-col">
                    <span className={`text-lg font-serif font-bold tracking-tight leading-none ${isSolidHeader ? 'text-sdu-blue' : 'text-white'}`}>SDU</span>
                    <span className={`text-[10px] uppercase tracking-wider opacity-80 ${isSolidHeader ? 'text-sdu-blue' : 'text-white'}`}>Sumqayıt Dövlət Universiteti</span>
                 </div>
             </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {siteNavigation.map((item) => (
                <div 
                  key={item.label}
                  className="relative group"
                  onMouseEnter={() => setActiveDropdown(item.label)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <button className="flex items-center gap-1 text-sm font-medium tracking-wide hover:text-sdu-gold transition-colors py-2 uppercase">
                    {item.label}
                    <ChevronDown className="w-3 h-3 opacity-60" />
                  </button>

                  {/* Mega Menu Dropdown */}
                  <AnimatePresence>
                    {activeDropdown === item.label && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 w-[600px] bg-white text-sdu-blue shadow-xl rounded-sm p-8 border-t-2 border-sdu-gold mt-2 grid grid-cols-2 gap-8"
                      >
                         {item.categories.map((cat, idx) => (
                           <div key={idx}>
                             <h4 className="font-serif font-bold text-lg mb-4 text-sdu-blue border-b border-gray-100 pb-2">
                               {cat.label}
                             </h4>
                             <ul className="space-y-2">
                               {cat.items.map((sub, subIdx) => (
                                 <li key={subIdx}>
                                   <Link 
                                     href={sub.href}
                                     className="text-sm text-gray-600 hover:text-sdu-gold hover:pl-1 transition-all block"
                                   >
                                     {sub.label}
                                   </Link>
                                 </li>
                               ))}
                             </ul>
                           </div>
                         ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>

            {/* Desktop Actions */}
            <div className="hidden lg:flex items-center gap-6">
                <button aria-label="Search" className="hover:text-sdu-gold transition-colors">
                    <Search className="w-5 h-5" />
                </button>
                <div className="flex items-center gap-1 text-xs font-medium uppercase tracking-wider cursor-pointer hover:text-sdu-gold">
                    <Globe className="w-4 h-4" />
                    <span>AZ</span>
                </div>
                <Link 
                    href="/apply" 
                    className={`px-5 py-2 text-sm font-semibold tracking-wide border transition-all ${isSolidHeader ? 'border-sdu-blue text-sdu-blue hover:bg-sdu-blue hover:text-white' : 'border-white text-white hover:bg-white hover:text-sdu-blue'}`}
                >
                    MÜRACİƏT
                </Link>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="lg:hidden relative z-50 p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                 <X className="w-6 h-6 text-sdu-blue" />
              ) : (
                 <Menu className="w-6 h-6" />
              )}
            </button>
          </nav>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-40 bg-white pt-24 px-6 overflow-y-auto"
          >
            <div className="flex flex-col gap-6 pb-10">
              {siteNavigation.map((item, idx) => (
                <div key={idx} className="border-b border-gray-100 pb-4">
                  <h3 className="text-xl font-serif font-bold text-sdu-blue mb-3">{item.label}</h3>
                  <div className="grid gap-4 pl-4 border-l-2 border-sdu-gold/20">
                    {item.categories.map((cat, catIdx) => (
                        <div key={catIdx}>
                            <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">{cat.label}</h4>
                            <ul className="space-y-3 mb-4">
                                {cat.items.map((sub, subIdx) => (
                                    <li key={subIdx}>
                                        <Link 
                                            href={sub.href} 
                                            className="text-gray-600 hover:text-sdu-gold text-sm block"
                                            onClick={() => setIsMobileMenuOpen(false)}
                                        >
                                            {sub.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                  </div>
                </div>
              ))}
              <div className="mt-4 flex flex-col gap-4">
                 <Link 
                    href="/apply" 
                    className="w-full py-4 text-center bg-sdu-blue text-white font-bold tracking-widest text-sm hover:bg-sdu-blue/90 transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                >
                    QƏBUL 2026
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
