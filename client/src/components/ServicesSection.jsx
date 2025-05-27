import { motion } from "framer-motion";
import ServiceCard from "./ServiceCard";

const ServicesSection = () => {
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

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
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

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
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
