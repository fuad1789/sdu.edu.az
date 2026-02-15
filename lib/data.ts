export interface NewsItem {
  id: number;
  title: string;
  date: string;
  category: "XƏBƏRLƏR" | "TƏLƏBƏ HƏYATI" | "TƏHSİL" | "BEYNƏLXALQ";
  image: string;
  description: string;
  href: string;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  quote: string;
  image: string;
}

export interface Partner {
  id: number;
  name: string;
  logo: string;
}

export interface UpcomingEvent {
  id: number;
  day: string;
  month: string;
  title: string;
  time: string;
  location: string;
  category: "Cultural" | "Science" | "Social" | "Academic";
  image: string;
}

export interface Faculty {
  id: number;
  name: string;
  href: string;
  image: string;
  description: string;
}

export const faculties: Faculty[] = [
  { 
    id: 1, 
    name: "Riyaziyyat", 
    href: "/az/mathematics", 
    image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=1000&auto=format&fit=crop",
    description: "Riyazi analiz, cəbr və tətbiqi riyaziyyat sahəsində fundamental biliklər."
  },
  { 
    id: 2, 
    name: "Təbiət Elmləri", 
    href: "/az/chemics", 
    image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=1000&auto=format&fit=crop",
    description: "Kimya, biologiya və fizika elmləri üzrə müasir laboratoriya tədqiqatları."
  },
  { 
    id: 3, 
    name: "İqtisadiyyat", 
    href: "/az/economics", 
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=1000&auto=format&fit=crop",
    description: "Müasir iqtisadi nəzəriyyələr, maliyyə bazarları və biznesin idarə edilməsi."
  },
  { 
    id: 4, 
    name: "Mühəndislik", 
    href: "/az/engineering", 
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Sənaye, energetika və informasiya texnologiyaları üzrə mühəndis kadr hazırlığı."
  },
  { 
    id: 5, 
    name: "Tarix və Coğrafiya", 
    href: "/az/history", 
    image: "https://images.unsplash.com/photo-1461360370896-922624d12aa1?q=80&w=1000&auto=format&fit=crop",
    description: "Azərbaycan və dünya tarixi, fiziki və iqtisadi coğrafiya."
  },
  { 
    id: 6, 
    name: "Filologiya", 
    href: "/az/philology", 
    image: "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?q=80&w=1000&auto=format&fit=crop",
    description: "Azərbaycan dili və ədəbiyyatı, xarici dillər və tərcüməşünaslıq."
  },
];

export const newsData: NewsItem[] = [
  {
    id: 3733,
    title: "Multidisiplinar Mühəndislik Qış Məktəbi ...",
    date: "13 Fevral 2026 10:52",
    category: "TƏHSİL",
    image: "https://sdu.edu.az/userfiles/image/news/13.02.2026%20(4).jpg",
    description: "Sumqayıt Dövlət Universitetinin (SDU) tələbələri üçün təşkil olunan Multidisiplinar Mühəndislik Qış Məktəbi çərçivəsində praktik təcrübə yönü...",
    href: "/az/news/3733",
  },
  {
    id: 3734,
    title: "SDU-nun fakültə dekanı beynəlxalq maliyy...",
    date: "12 Fevral 2026 17:04",
    category: "BEYNƏLXALQ", 
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=1000&auto=format&fit=crop",
    description: "Fevralın 11-də Sumqayıt Dövlət Universitetinin İqtisadiyyat və idarəetmə fakültəsinin dekanı, dosent Loğman Abdullayevə ICB (Global Certificate in Advanced Bookkeeping) və ICFM (The Institut...",
    href: "/az/news/3734",
  },
  {
    id: 3732,
    title: "Əməkdaşlar arasında keçirilən voleybol y...",
    date: "12 Fevral 2026 16:32",
    category: "TƏLƏBƏ HƏYATI", 
    image: "https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?q=80&w=1000&auto=format&fit=crop",
    description: "Sumqayıt Dövlət Universitetində “Şəhərsalma və Memarlıq İli” çərçivəsində Həmkarlar İttifaqı Komitəsi və İdman Klubunun birgə təşkilatçılığı ilə universitet...",
    href: "/az/news/3732",
  },
  {
    id: 3730,
    title: "Multidisiplinar Mühəndislik Qış Məktəbin...",
    date: "11 Fevral 2026 10:09",
    category: "TƏHSİL", 
    image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=1000&auto=format&fit=crop",
    description: "Multidisiplinar Mühəndislik Qış Məktəbi Mühəndislik fakültəsinin tələbələri üçün nəzərdə tutulmuş zəngin məzmunlu və praktik yönümlü proqramı ilə i...",
    href: "/az/news/3730",
  },
  {
    id: 3729,
    title: "Əməkdaşlar arasında dama turnirində Mühə...",
    date: "10 Fevral 2026 15:31",
    category: "TƏLƏBƏ HƏYATI", 
    image: "https://images.unsplash.com/photo-1606167668584-78701c57f13d?q=80&w=1000&auto=format&fit=crop",
    description: "Sumqayıt Dövlət Universitetində (SDU) “Şəhərsalma və Memarlıq İli” çərçivəsində Həmkarlar İttifaqı Komitəsi və İdman Klubunun təşkilatçılığı ilə universitet və Su...",
    href: "/az/news/3729",
  },
  {
    id: 3728,
    title: "“Şəhərsalma və Memarlıq İli” çərçivəsind...",
    date: "10 Fevral 2026 09:53",
    category: "XƏBƏRLƏR", 
    image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80&w=1000&auto=format&fit=crop",
    description: "Fevralın 9-da “Şəhərsalma və Memarlıq İli” çərçivəsində Sumqayıt Dövlət Universiteti (SDU) və Sumqayıt Dövlət Texniki Kollecinin əməkdaşlarının birgə iştirakı...",
    href: "/az/news/3728",
  },
  {
    id: 3727,
    title: "Sumqayıt Dövlət Universitetində Multidis...",
    date: "10 Fevral 2026 09:28",
    category: "TƏHSİL", 
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=1000&auto=format&fit=crop",
    description: "Sumqayıt Dövlət Universitetində (SDU) fevralın 9-da Multidisiplinar Mühəndislik Qış Məktəbi fəaliyyətə başlayıb. Qış Məktəbi SDU-nun Karyera və Məzunlarla İş Mərkəzinin təşəbbüs...",
    href: "/az/news/3727",
  },
  {
    id: 3726,
    title: "Sumqayıt Dövlət Universiteti Özbəkistanı...",
    date: "06 Fevral 2026 09:48",
    category: "BEYNƏLXALQ", 
    image: "https://images.unsplash.com/photo-1577962917302-cd874c4e31d2?q=80&w=1000&auto=format&fit=crop",
    description: "Fevralın 4-də Özbəkistan Dövlət Dünya Dilləri Universiteti ilə Sumqayıt Dövlət Universiteti arasında ikitərəfli görüş keçirilib. SDU-nun rektoru v.i.e., AMEA...",
    href: "/az/news/3726",
  },
  {
    id: 3725,
    title: "Sumqayıt Dövlət Universiteti və Atırau U...",
    date: "05 Fevral 2026 14:23",
    category: "BEYNƏLXALQ", 
    image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=1000&auto=format&fit=crop",
    description: "Fevralın 4-də Qazaxıstan Respublikasının Xalel Dosmuxamedov adına Atırau Universitetində “Qazaxıstan və Azərbaycan arasında universitetlərarası əməkdaşlıq: Regional aspekt” mövz...",
    href: "/az/news/3725",
  },
  {
    id: 3724,
    title: "SDU əməkdaşları Atırau Universitetində q...",
    date: "04 Fevral 2026 11:36",
    category: "BEYNƏLXALQ", 
    image: "https://images.unsplash.com/photo-1544531586-fde5298cdd40?q=80&w=1000&auto=format&fit=crop",
    description: "Fevralın 3-də Qazaxıstan Respublikasının Xalel Dosmuhamedov adına Atırau Universitetində Sumqayıt Dövlət Universitetinin (SDU) alimlərinin iştirakı ilə qonaq mühazirələr və elmi-metodi...",
    href: "/az/news/3724",
  },
  {
    id: 3731,
    title: "Sumqayıt Dövlət Universitetinin tələbələ...",
    date: "04 Fevral 2026 10:25",
    category: "BEYNƏLXALQ", 
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1000&auto=format&fit=crop",
    description: "Sumqayıt Dövlət Universitetində (SDU) ilə Qazaxıstan Respublikasının nüfuzlu ali təhsil müəssisələrindən biri olan Toragirov Universiteti arasında 13 oktyabr 2025-ci il tarixində imz...",
    href: "/az/news/3731",
  },
  {
    id: 3723,
    title: "SDU-da Gənclər Günü münasibətilə gənc əm...",
    date: "03 Fevral 2026 14:56",
    category: "TƏLƏBƏ HƏYATI", 
    image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=1000&auto=format&fit=crop",
    description: "Sumqayıt Dövlət Universitetində (SDU) 2 Fevral - Azərbaycan Gəncləri Günü münasibətilə gənc əməkdaşlarla görüş keçirilib. Tədbir universitetin Həmkarlar İtti...",
    href: "/az/news/3723",
  },
];

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Aysel Məmmədova",
    role: "BP-də Mühəndis (Məzun 2022)",
    quote: "Sumqayıt Dövlət Universiteti mənə yalnız nəzəri biliklər deyil, həm də real sənaye təcrübəsi qazandırdı. Praktik laboratoriyalar və sənaye əməkdaşlıqları sayəsində karyerama inamla başladım.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: 2,
    name: "Murad Əliyev",
    role: "Startap Təsisçisi (IV Kurs Tələbəsi)",
    quote: "Universitetimizin İnnovasiya və Yaradıcılıq Mərkəzi ideyalarımı reallaşdırmaq üçün mükəmməl mühit yaratdı. Buradakı mentorluq dəstəyi startap layihəmi növbəti mərhələyə daşıdı.",
    image: "https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: 3,
    name: "Nərgiz Həsənova",
    role: "Gənc Müəllim",
    quote: "SDU-nun akademik mühiti davamlı inkişafı təşviq edir. Burada həm tədrisin keyfiyyəti, həm də tədqiqat imkanları gənc alimlər üçün geniş perspektivlər açır.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1000&auto=format&fit=crop",
  },
];

export const partners: Partner[] = [
  { id: 1, name: "BP", logo: "/assets/parners_logos/BP_Helios_logo.svg.png" },
  { id: 2, name: "Holcim", logo: "/assets/parners_logos/Holcim_Logo_2021_sRGB.png" },
  { id: 3, name: "Kapital Bank", logo: "/assets/parners_logos/Kapital_Bank_logo.svg.png" },
  { id: 4, name: "Qartal Tikinti Firması", logo: "/assets/parners_logos/QARTAL-LOGO-241.png" },
  { id: 5, name: "Avalco", logo: "/assets/parners_logos/alco_llc_logo.jpg" },
  { id: 6, name: "İydə Perfumery", logo: "/assets/parners_logos/iyde.svg" },
  { id: 7, name: "Code Academy", logo: "/assets/parners_logos/codeacademy.png" },
  { id: 8, name: "SOCAR Polymer", logo: "/assets/parners_logos/socarPolimer.png" },
  { id: 9, name: "Azerkimya", logo: "/assets/parners_logos/Azerkimya.png" },
  { id: 10, name: "Azersun", logo: "/assets/parners_logos/azersun.jpg" },
  { id: 11, name: "Partner", logo: "/assets/parners_logos/logo.svg" },
];

export const upcomingEvents: UpcomingEvent[] = [
  {
    id: 1,
    day: "19",
    month: "MAR",
    title: "Novruz Bayramı Şənliyi",
    time: "11:00 - 15:00",
    location: "Qapalı İdman Zalı",
    category: "Cultural",
    image: "https://images.unsplash.com/photo-1514533450685-4493e01d1fdc?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: 2,
    day: "05",
    month: "APR",
    title: "“Süni İntellekt və Gələcək” Konfransı",
    time: "10:00 - 17:00",
    location: "Akt Zalı",
    category: "Science",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: 3,
    day: "25",
    month: "MAY",
    title: "Məzunlar Günü",
    time: "18:00 - 22:00",
    location: "Kampus Həyəti",
    category: "Social",
    image: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: 4,
    day: "10",
    month: "IYN",
    title: "Yay İmtahan Sessiyası",
    time: "09:00 - 18:00",
    location: "Tədris Binaları",
    category: "Academic",
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=1000&auto=format&fit=crop"
  }
];
