import FeaturedSection from "@/components/FeaturedSection";
import Herosection from "@/components/Herosection";

export default function Home() {
  return (
    <>
      <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
        <Herosection/>
        <FeaturedSection/>
      </main>
    </>
  );
}
