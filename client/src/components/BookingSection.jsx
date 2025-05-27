import { motion } from "framer-motion";

const BookingSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="booking" className="py-20 bg-gradient-to-br from-teal-50 to-blue-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Ready to Start Your Wellness Journey?</h2>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
            Book your personalized massage therapy or personal training session today and take the first step towards a healthier, pain-free life.
          </p>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
          >
            <motion.a 
              variants={itemVariants}
              href="tel:+16135551234"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-teal-500 text-white px-10 py-4 rounded-xl font-semibold text-lg hover:bg-teal-600 transition-all duration-200 shadow-lg flex items-center space-x-3"
            >
              <i className="fas fa-phone"></i>
              <span>Call Now: (613) 555-1234</span>
            </motion.a>
            
            <motion.a 
              variants={itemVariants}
              href="mailto:info@neurogym.ca"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-800 text-white px-10 py-4 rounded-xl font-semibold text-lg hover:bg-blue-900 transition-all duration-200 shadow-lg flex items-center space-x-3"
            >
              <i className="fas fa-envelope"></i>
              <span>Email Us</span>
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Service Cards */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12"
        >
          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="bg-white rounded-2xl p-8 shadow-lg text-center"
          >
            <div className="w-16 h-16 bg-teal-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <i className="fas fa-spa text-white text-2xl"></i>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Massage Therapy</h3>
            <p className="text-gray-600 mb-6">Professional therapeutic massage to relieve pain and improve mobility</p>
            <div className="text-3xl font-bold text-teal-500 mb-4">$120</div>
            <p className="text-gray-500">60 minutes</p>
          </motion.div>

          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="bg-white rounded-2xl p-8 shadow-lg text-center"
          >
            <div className="w-16 h-16 bg-blue-800 rounded-full flex items-center justify-center mx-auto mb-6">
              <i className="fas fa-dumbbell text-white text-2xl"></i>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Personal Training</h3>
            <p className="text-gray-600 mb-6">Customized fitness programs designed to help you reach your goals</p>
            <div className="text-3xl font-bold text-blue-800 mb-4">$85</div>
            <p className="text-gray-500">60 minutes</p>
          </motion.div>
        </motion.div>

        {/* Contact Information */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl p-8 shadow-lg text-center"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-teal-500 rounded-full flex items-center justify-center mb-3">
                <i className="fas fa-map-marker-alt text-white"></i>
              </div>
              <p className="text-gray-600 text-center">123 Bank Street<br />Ottawa, ON K1P 5N2</p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-teal-500 rounded-full flex items-center justify-center mb-3">
                <i className="fas fa-phone text-white"></i>
              </div>
              <a href="tel:+16135551234" className="text-teal-500 font-semibold hover:text-teal-600 transition-colors">
                (613) 555-1234
              </a>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-teal-500 rounded-full flex items-center justify-center mb-3">
                <i className="fas fa-envelope text-white"></i>
              </div>
              <a href="mailto:info@neurogym.ca" className="text-teal-500 font-semibold hover:text-teal-600 transition-colors">
                info@neurogym.ca
              </a>
            </div>
          </div>
          
          <div className="mt-8 p-4 bg-gray-50 rounded-xl">
            <p className="text-gray-600">
              <strong>Business Hours:</strong> Mon-Fri: 8AM-8PM | Sat: 9AM-5PM | Sun: 10AM-4PM
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BookingSection;
