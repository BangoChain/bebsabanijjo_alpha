import Header from "@/app/(components)/commons/Header";
import HeroSection from "@/app/(components)/landing/HeroSection";
// import HeroSection2 from "@/app/(components)/landing/HeroSection2";
import FeaturesSection from "@/app/(components)/landing/FeaturesSection";
import CTASection from "@/app/(components)/landing/CTASection";
import TestimonialsSection from "@/app/(components)/landing/TestimonialsSection";
import PricingPlans from "@/app/(components)/landing/PricingSection";
// import PricingPlans2 from "@/app/(components)/landing/PricingSection2";
import Footer from "@/app/(components)/commons/Footer";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <Header />
      <HeroSection />
      {/* <HeroSection2 /> */}
      <FeaturesSection />
      <TestimonialsSection />
      <CTASection />
      <PricingPlans />
      <PricingPlans2 />
      <Footer />
    </main>
  );
}
