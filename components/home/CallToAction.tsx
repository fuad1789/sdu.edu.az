import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CallToAction() {
  return (
    <section className="py-24 bg-paper border-t border-gray-200">
      <div className="container mx-auto px-4 md:px-6 text-center">
         <h2 className="text-4xl md:text-6xl font-serif font-bold text-sdu-blue mb-8">
            Gələcəyini bizimlə qur.
         </h2>
         <p className="text-gray-600 max-w-xl mx-auto mb-10 text-lg">
            Sumqayıt Dövlət Universitetinin tələbəsi olmaq və uğurlu karyera qurmaq üçün ilk addımı atın.
         </p>
         <Link 
            href="/apply" 
            className="inline-flex items-center gap-3 px-10 py-5 border-2 border-sdu-blue text-sdu-blue font-bold tracking-widest text-sm hover:bg-sdu-blue hover:text-white transition-all duration-300 uppercase"
        >
            Müraciət et <ArrowRight className="w-5 h-5" />
        </Link>
      </div>
    </section>
  );
}
