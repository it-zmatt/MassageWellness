import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`bg-white fixed w-full top-0 z-50 transition-shadow duration-300 ${isScrolled ? 'shadow-lg' : 'shadow-sm'}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <motion.div 
            className="flex items-center"
            whileHover={{ scale: 1.05 }}
          >
            <h1 className="text-2xl font-bold text-blue-800">NeuroGym</h1>
          </motion.div>
          
          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <button 
                onClick={() => scrollToSection('services')}
                className="text-gray-600 hover:text-teal-500 px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Services
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="text-gray-600 hover:text-teal-500 px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('testimonials')}
                className="text-gray-600 hover:text-teal-500 px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Testimonials
              </button>
              <button 
                onClick={() => scrollToSection('booking')}
                className="text-gray-600 hover:text-teal-500 px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Booking
              </button>
              <motion.button 
                onClick={() => scrollToSection('contact')}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-teal-500 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-teal-600 transition-colors"
              >
                Contact
              </motion.button>
            </div>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <motion.button 
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-600 hover:text-gray-900"
            >
              <i className="fas fa-bars text-xl"></i>
            </motion.button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden bg-white border-t"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <button 
                onClick={() => scrollToSection('services')}
                className="text-gray-600 hover:text-teal-500 block px-3 py-2 rounded-md text-base font-medium w-full text-left"
              >
                Services
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="text-gray-600 hover:text-teal-500 block px-3 py-2 rounded-md text-base font-medium w-full text-left"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('testimonials')}
                className="text-gray-600 hover:text-teal-500 block px-3 py-2 rounded-md text-base font-medium w-full text-left"
              >
                Testimonials
              </button>
              <button 
                onClick={() => scrollToSection('booking')}
                className="text-gray-600 hover:text-teal-500 block px-3 py-2 rounded-md text-base font-medium w-full text-left"
              >
                Booking
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="bg-teal-500 text-white block px-3 py-2 rounded-md text-base font-medium w-full text-left hover:bg-teal-600"
              >
                Contact
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar;
