import { motion } from "framer-motion";

const HeroSection = () => {
  const scrollToBooking = () => {
    const element = document.getElementById('booking');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
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

  return (
    <section className="relative bg-gradient-to-br from-teal-50 to-blue-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          <div className="space-y-8">
            <motion.div variants={itemVariants} className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Book a Healthier, 
                <span className="text-teal-500"> Pain-Free Life</span> 
                with NeuroGym
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Personalized massage and training sessions that meet your needs. Experience professional care in the heart of Ottawa.
              </p>
            </motion.div>
            
            <motion.div 
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={scrollToBooking}
                className="bg-teal-500 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-teal-600 transition-all duration-200 shadow-lg"
              >
                Book Your Session
              </motion.button>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={scrollToBooking}
                className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-xl font-semibold text-lg hover:border-teal-500 hover:text-teal-500 transition-all duration-200"
              >
                View Availability
              </motion.button>
            </motion.div>

            <motion.div 
              variants={itemVariants}
              className="flex items-center space-x-8 pt-4"
            >
              <div className="flex items-center space-x-2">
                <div className="flex text-yellow-400">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                </div>
                <span className="text-gray-600 font-medium">5.0 (127 reviews)</span>
              </div>
              <div className="flex items-center space-x-2">
                <i className="fas fa-certificate text-teal-500"></i>
                <span className="text-gray-600 font-medium">Certified Professionals</span>
              </div>
            </motion.div>
          </div>

          <motion.div 
            variants={itemVariants}
            className="relative"
          >
            <img 
              src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
              alt="Professional massage therapy session" 
              className="rounded-2xl shadow-2xl w-full h-auto"
            />
            
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg max-w-xs"
            >
              <div className="flex items-center space-x-3">
                <img 
                  src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100" 
                  alt="Satisfied client testimonial" 
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="text-sm text-gray-600 font-medium">"Life-changing experience!"</p>
                  <div className="flex text-yellow-400 text-xs">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
