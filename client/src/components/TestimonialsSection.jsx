import { motion } from "framer-motion";

const TestimonialsSection = () => {
  const testimonials = [
    {
      text: "After just three sessions with Peng, my chronic back pain has significantly improved. The combination of massage therapy and targeted exercises has been life-changing.",
      name: "Sarah M.",
      role: "Marketing Executive",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b15c?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100"
    },
    {
      text: "Peng's expertise in both massage and training is remarkable. He helped me recover from a sports injury and get back to peak performance. Highly recommended!",
      name: "Mike R.",
      role: "Professional Athlete",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100"
    },
    {
      text: "The personalized approach at NeuroGym is amazing. Peng takes time to understand your needs and creates a treatment plan that actually works. I feel stronger and pain-free!",
      name: "Lisa K.",
      role: "Teacher",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100"
    }
  ];

  const stats = [
    { number: "500+", label: "Happy Clients" },
    { number: "8", label: "Years Experience" },
    { number: "95%", label: "Success Rate" },
    { number: "5.0", label: "Average Rating" }
  ];

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
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
          <p className="text-xl text-gray-600">Hear from people who've transformed their health with NeuroGym</p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              className="bg-gray-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="flex text-yellow-400 mb-4">
                {[...Array(5)].map((_, i) => (
                  <i key={i} className="fas fa-star"></i>
                ))}
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed">
                {testimonial.text}
              </p>
              <div className="flex items-center space-x-4">
                <img 
                  src={testimonial.image}
                  alt={`${testimonial.name} testimonial`}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-gray-500 text-sm">{testimonial.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div 
                key={index}
                whileHover={{ scale: 1.05 }}
                className="cursor-default"
              >
                <div className="text-3xl font-bold text-teal-500">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
