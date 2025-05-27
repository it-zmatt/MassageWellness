import { motion } from "framer-motion";
import { useState } from "react";
import ServiceCard from "./ServiceCard";

const ServicesSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const myofascialServices = [
    { duration: "30 Minutes", price: "$96.95", therapist: "Peng Tan" },
    { duration: "45 Minutes", price: "$121.95", therapist: "Peng Tan" },
    { duration: "60 Minutes", price: "$146.95", therapist: "Peng Tan" },
    { duration: "75 Minutes", price: "$171.95", therapist: "Peng Tan" },
    { duration: "90 Minutes", price: "$196.95", therapist: "Peng Tan" },
    { duration: "120 Minutes", price: "$246.95", therapist: "Peng Tan" }
  ];

  const cardsToShow = 3; // Show 3 cards at a time on desktop
  const maxIndex = Math.max(0, myofascialServices.length - cardsToShow);

  const nextSlide = () => {
    setCurrentIndex(prev => Math.min(prev + 1, maxIndex));
  };

  const prevSlide = () => {
    setCurrentIndex(prev => Math.max(prev - 1, 0));
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const scrollToBooking = () => {
    const element = document.getElementById('booking');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Specialized Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Combining therapeutic massage and personalized training to help you achieve optimal health and wellness.
          </p>
        </motion.div>

        {/* Main Services Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20"
        >
          <motion.div variants={itemVariants}>
            <ServiceCard
              title="Registered Massage Therapy"
              description="Professional therapeutic massage to relieve pain, reduce stress, and improve mobility. Our registered massage therapists use evidence-based techniques tailored to your specific needs."
              icon="fas fa-spa"
              iconBg="bg-teal-500"
              bgGradient="bg-gradient-to-br from-teal-50 to-teal-100"
              price="$120"
              duration="60 minutes"
              features={[
                "Deep tissue massage",
                "Sports injury rehabilitation", 
                "Stress relief therapy",
                "Chronic pain management"
              ]}
              checkColor="text-teal-500"
              priceColor="text-teal-600"
              buttonColor="bg-teal-500 hover:bg-teal-600"
            />
          </motion.div>

          <motion.div variants={itemVariants}>
            <ServiceCard
              title="Personal Training"
              description="Customized fitness programs designed to help you reach your health goals. Our certified trainers focus on proper form, injury prevention, and sustainable progress."
              icon="fas fa-dumbbell"
              iconBg="bg-blue-800"
              bgGradient="bg-gradient-to-br from-blue-50 to-blue-100"
              price="$85"
              duration="60 minutes"
              features={[
                "Strength & conditioning",
                "Corrective exercise",
                "Functional movement",
                "Injury prevention"
              ]}
              checkColor="text-blue-800"
              priceColor="text-blue-800"
              buttonColor="bg-blue-800 hover:bg-blue-900"
            />
          </motion.div>
        </motion.div>

        {/* Myofascial Release Carousel */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Myofascial Release Therapy</h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Specialized technique to release tension in the fascia, improving mobility and reducing pain. 
              Choose from various session lengths to meet your specific needs.
            </p>
          </div>

          <div className="relative">
            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              disabled={currentIndex === 0}
              className={`absolute left-4 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center transition-all duration-200 ${
                currentIndex === 0 
                  ? 'opacity-50 cursor-not-allowed' 
                  : 'hover:shadow-xl hover:scale-105'
              }`}
            >
              <i className="fas fa-chevron-left text-gray-600"></i>
            </button>

            <button
              onClick={nextSlide}
              disabled={currentIndex === maxIndex}
              className={`absolute right-4 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center transition-all duration-200 ${
                currentIndex === maxIndex 
                  ? 'opacity-50 cursor-not-allowed' 
                  : 'hover:shadow-xl hover:scale-105'
              }`}
            >
              <i className="fas fa-chevron-right text-gray-600"></i>
            </button>

            {/* Carousel Container */}
            <div className="overflow-hidden mx-16">
              <motion.div 
                className="flex gap-6"
                animate={{ 
                  x: `-${currentIndex * (100 / cardsToShow)}%` 
                }}
                transition={{ 
                  type: "spring", 
                  stiffness: 300, 
                  damping: 30 
                }}
                style={{ width: `${(myofascialServices.length / cardsToShow) * 100}%` }}
              >
                {myofascialServices.map((service, index) => (
                  <motion.div
                    key={index}
                    className="flex-shrink-0"
                    style={{ width: `${100 / myofascialServices.length}%` }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 h-full">
                      <div className="text-center">
                        <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                          <i className="fas fa-hands text-white text-2xl"></i>
                        </div>
                        
                        <h4 className="text-xl font-bold text-gray-900 mb-2">
                          Myofascial Release
                        </h4>
                        
                        <div className="text-lg font-semibold text-purple-600 mb-2">
                          {service.duration}
                        </div>
                        
                        <div className="text-2xl font-bold text-purple-700 mb-3">
                          {service.price}
                        </div>
                        
                        <div className="text-sm text-gray-600 mb-4">
                          Offered by {service.therapist}
                        </div>
                        
                        <div className="space-y-2 mb-6 text-sm text-gray-700">
                          <div className="flex items-center justify-center space-x-2">
                            <i className="fas fa-check-circle text-purple-500"></i>
                            <span>Fascia tension release</span>
                          </div>
                          <div className="flex items-center justify-center space-x-2">
                            <i className="fas fa-check-circle text-purple-500"></i>
                            <span>Improved mobility</span>
                          </div>
                          <div className="flex items-center justify-center space-x-2">
                            <i className="fas fa-check-circle text-purple-500"></i>
                            <span>Pain reduction</span>
                          </div>
                        </div>
                        
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={scrollToBooking}
                          className="w-full bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded-xl font-semibold transition-all duration-200"
                        >
                          Book Now
                        </motion.button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* Dots Indicator */}
            <div className="flex justify-center mt-6 space-x-2">
              {Array.from({ length: maxIndex + 1 }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-200 ${
                    index === currentIndex 
                      ? 'bg-purple-500' 
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
          </div>
        </motion.div>

        {/* Combination Packages */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-gray-100 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Combination Packages Available</h3>
            <p className="text-gray-600 mb-6">Get the best of both worlds with our integrated approach to wellness</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-teal-500">$180</div>
                <div className="text-gray-600">Massage + Training</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-teal-500">$500</div>
                <div className="text-gray-600">3-Session Package</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-teal-500">$950</div>
                <div className="text-gray-600">6-Session Package</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
