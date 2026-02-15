import Link from "next/link";
import { Facebook, Instagram, Linkedin, Youtube, MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-sdu-blue text-white pt-20 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Column 1: Brand & Contact */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
                {/* Placeholder Logo */}
                <div className="w-10 h-10 bg-white rounded-sm opacity-90"></div>
                <div>
                    <h3 className="text-xl font-serif font-bold leading-none">SDU</h3>
                    <p className="text-[10px] uppercase tracking-wider opacity-70">Sumqayıt Dövlət Universiteti</p>
                </div>
            </div>
            <p className="text-white/70 text-sm leading-relaxed max-w-xs">
                60 illik akademik təcrübə, müasir innovasiyalar və qlobal hədəflər ilə gələcəyi inşa edirik.
            </p>
            <div className="space-y-3 pt-2">
                <div className="flex items-start gap-3 text-white/80 text-sm">
                    <MapPin className="w-4 h-4 mt-1 shrink-0 text-sdu-gold" />
                    <span>Sumqayıt ş., Bakı küçəsi 1, AZ5008</span>
                </div>
                <div className="flex items-center gap-3 text-white/80 text-sm">
                    <Phone className="w-4 h-4 shrink-0 text-sdu-gold" />
                    <span>+994 18 642 12 63</span>
                </div>
                <div className="flex items-center gap-3 text-white/80 text-sm">
                    <Mail className="w-4 h-4 shrink-0 text-sdu-gold" />
                    <span>info@sdu.edu.az</span>
                </div>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-lg font-serif font-bold text-white mb-6">Faydalı Linklər</h4>
            <ul className="space-y-3">
                {[
                    { label: "Tələbələr üçün", href: "/students" },
                    { label: "Əməkdaşlar üçün", href: "/staff" },
                    { label: "Karyera Mərkəzi", href: "/career" },
                    { label: "Elmi Kitabxana", href: "/library" },
                    { label: "Təqaüd Proqramları", href: "/scholarships" },
                    { label: "Akademik Təqvim", href: "/calendar" },
                ].map((link, idx) => (
                    <li key={idx}>
                        <Link href={link.href} className="text-white/70 hover:text-sdu-gold transition-colors text-sm">
                            {link.label}
                        </Link>
                    </li>
                ))}
            </ul>
          </div>

          {/* Column 3: Academics */}
          <div>
            <h4 className="text-lg font-serif font-bold text-white mb-6">Fakültələr</h4>
             <ul className="space-y-3">
                {[
                    "Riyaziyyat",
                    "Təbiət Elmləri",
                    "İqtisadiyyat və İdarəetmə",
                    "Mühəndislik",
                    "Tarix və Coğrafiya",
                    "Filologiya"
                ].map((faculty, idx) => (
                    <li key={idx}>
                        <Link href={`/az/${faculty.toLowerCase()}`} className="text-white/70 hover:text-sdu-gold transition-colors text-sm">
                            {faculty}
                        </Link>
                    </li>
                ))}
            </ul>
          </div>

          {/* Column 4: Connect */}
          <div>
             <h4 className="text-lg font-serif font-bold text-white mb-6">Bizi İzləyin</h4>
             <p className="text-white/70 text-sm mb-6">
                Universitet həyatından ən son xəbərləri sosial media hesablarımızdan izləyin.
             </p>
             <div className="flex items-center gap-4">
                <Link href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-sdu-gold hover:text-sdu-blue transition-all duration-300">
                    <Facebook className="w-5 h-5" />
                </Link>
                <Link href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-sdu-gold hover:text-sdu-blue transition-all duration-300">
                    <Instagram className="w-5 h-5" />
                </Link>
                <Link href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-sdu-gold hover:text-sdu-blue transition-all duration-300">
                    <Linkedin className="w-5 h-5" />
                </Link>
                <Link href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-sdu-gold hover:text-sdu-blue transition-all duration-300">
                    <Youtube className="w-5 h-5" />
                </Link>
             </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-white/50 text-xs">
                © 2026 Sumqayıt Dövlət Universiteti. Bütün hüquqlar qorunur.
            </p>
            <div className="flex items-center gap-6">
                <Link href="/privacy" className="text-white/50 hover:text-white text-xs transition-colors">Məxfilik Siyasəti</Link>
                <Link href="/terms" className="text-white/50 hover:text-white text-xs transition-colors">İstifadə Şərtləri</Link>
            </div>
        </div>
      </div>
    </footer>
  );
}
