import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import HowItWorks from '@/components/HowItWorks';
import Stats from '@/components/Stats';
import Technology from '@/components/Technology';
import Pricing from '@/components/Pricing';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import StarryBackground from '@/components/StarryBackground';

export default function App() {
  return (
    <main className="relative bg-[#0A0D14]">
      {/* Interactive starry sky canvas */}
      <StarryBackground />
      <Navbar />
      <Hero />
      <Stats />
      <Features />
      <HowItWorks />
      <Technology />
      <Pricing />
      <Contact />
      <Footer />
    </main>
  );
}
