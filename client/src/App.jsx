import { motion } from "framer-motion";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import ServicesSection from "./components/ServicesSection";
import BioSection from "./components/BioSection";
import TestimonialsSection from "./components/TestimonialsSection";
import BookingSection from "./components/BookingSection";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="font-sans bg-gray-50">
      <Navbar />
      <main className="space-y-16">
        <HeroSection />
        <ServicesSection />
        <BioSection />
        <TestimonialsSection />
        <BookingSection />
      </main>
      <Footer />
    </div>
  );
}

export default App; 