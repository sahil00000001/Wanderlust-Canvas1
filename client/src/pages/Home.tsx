import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/home/Hero";
import { FeaturedPackages } from "@/components/home/FeaturedPackages";
import { Destinations } from "@/components/home/Destinations";
import { SpecialDeals } from "@/components/home/SpecialDeals";
import { Testimonials } from "@/components/home/Testimonials";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main>
        <Hero />
        <FeaturedPackages />
        <Destinations />
        <SpecialDeals />
        <Testimonials />
      </main>

      <Footer />
    </div>
  );
}
