import Header from "@/app/(components)/commons/Header";
import HeroSection from "@/app/(components)/landing/HeroSection";
import FeaturesSection from "@/app/(components)/landing/FeaturesSection";
import CTASection from "@/app/(components)/landing/CTASection";
import TestimonialsSection from "@/app/(components)/landing/TestimonialsSection";
import Footer from "@/app/(components)/commons/Footer";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <Header />
      <HeroSection />
      <FeaturesSection />
      <TestimonialsSection />
      <CTASection />
      <Footer />
    </main>
  );
}
