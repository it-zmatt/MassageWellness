import { motion } from "framer-motion";

const BioSection = () => {
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
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const credentials = [
    {
      icon: "fas fa-graduation-cap",
      title: "Registered Massage Therapist (RMT)",
      description: "Licensed in Ontario, specialized in sports therapy and chronic pain management",
      bgColor: "bg-teal-500"
    },
    {
      icon: "fas fa-award",
      title: "Certified Personal Trainer (CPT)",
      description: "ACSM certified with focus on corrective exercise and functional movement",
      bgColor: "bg-blue-800"
    },
    {
      icon: "fas fa-certificate",
      title: "Additional Certifications",
      description: "Dry needling, cupping therapy, and neuromuscular rehabilitation",
      bgColor: "bg-teal-500"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="order-2 lg:order-1"
          >
            <motion.div variants={itemVariants}>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Meet Peng Tan</h2>
              <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                With over 8 years of experience in therapeutic massage and fitness training, Peng brings a unique approach that combines traditional techniques with modern rehabilitation methods.
              </p>
            </motion.div>
            
            <div className="space-y-4 mb-8">
              {credentials.map((credential, index) => (
                <motion.div 
                  key={index}
                  variants={itemVariants}
                  className="flex items-start space-x-4"
                >
                  <div className={`w-12 h-12 ${credential.bgColor} rounded-full flex items-center justify-center flex-shrink-0`}>
                    <i className={`${credential.icon} text-white`}></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">{credential.title}</h4>
                    <p className="text-gray-600">{credential.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div 
              variants={itemVariants}
              className="bg-white rounded-xl p-6 shadow-lg"
            >
              <p className="text-gray-700 italic leading-relaxed">
                "My philosophy is simple: every body is unique, and every treatment should be too. I work with each client to understand their specific needs and create a personalized path to wellness."
              </p>
              <div className="mt-4 flex items-center space-x-3">
                <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                <span className="font-semibold text-gray-900">Peng Tan, RMT, CPT</span>
              </div>
            </motion.div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2 relative"
          >
            <img 
              src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=700" 
              alt="Peng Tan - Registered Massage Therapist and Personal Trainer" 
              className="rounded-2xl shadow-2xl w-full h-auto"
            />
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              viewport={{ once: true }}
              className="absolute -bottom-4 -right-4 bg-white rounded-xl p-4 shadow-lg"
            >
              <div className="text-center">
                <div className="text-2xl font-bold text-teal-500">8+</div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BioSection;
