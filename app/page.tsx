import Navbar from "@/components/shared/navbar";
import Hero from "@/components/home/Hero";
import QuickAccess from "@/components/home/QuickAccess";
import NewsGrid from "@/components/home/NewsGrid";
import Faculties from "@/components/home/Faculties";
import Stats from "@/components/home/Stats";
import CallToAction from "@/components/home/CallToAction";
import UpcomingEvents from "@/components/home/UpcomingEvents";
import Testimonials from "@/components/home/Testimonials";
import Partners from "@/components/home/Partners";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <QuickAccess />
      <NewsGrid />
      <UpcomingEvents />
      <Stats />
      <Faculties />
      <Testimonials />
      <Partners />
      <CallToAction />
    </main>
  );
}
