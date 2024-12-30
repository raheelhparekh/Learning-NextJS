import About from "@/components/About";
import FeaturedSection from "@/components/FeaturedSection";
import Footer from "@/components/Footer";
import Herosection from "@/components/Herosection";
import TestimonialCards from "@/components/TestimonialCards";
import UpcomingWebinars from "@/components/UpcomingWebinars";
import WhyChooseUs from "@/components/WhyChooseUs";

export default function Home() {
  return (
    <>
      <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
        <Herosection/>
        <FeaturedSection/>
        <WhyChooseUs/>
        <TestimonialCards/>
        <UpcomingWebinars/>
        <About/>
        <Footer/>
      </main>
    </>
  );
}
