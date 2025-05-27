import { motion } from "framer-motion";

const ServiceCard = ({
  title,
  description,
  icon,
  iconBg,
  bgGradient,
  price,
  duration,
  features,
  checkColor,
  priceColor,
  buttonColor
}) => {
  const scrollToBooking = () => {
    const element = document.getElementById('booking');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.div 
      whileHover={{ scale: 1.02 }}
      className={`${bgGradient} rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300`}
    >
      <div className="mb-6">
        <div className={`w-16 h-16 ${iconBg} rounded-full flex items-center justify-center mb-4`}>
          <i className={`${icon} text-white text-2xl`}></i>
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-3">{title}</h3>
        <p className="text-gray-600 text-lg leading-relaxed mb-6">
          {description}
        </p>
      </div>

      <div className="space-y-3 mb-8">
        {features.map((feature, index) => (
          <div key={index} className="flex items-center space-x-3">
            <i className={`fas fa-check-circle ${checkColor}`}></i>
            <span className="text-gray-700">{feature}</span>
          </div>
        ))}
      </div>

      <div className="flex items-center justify-between">
        <div>
          <span className={`text-3xl font-bold ${priceColor}`}>{price}</span>
          <span className="text-gray-500 ml-2">/ {duration}</span>
        </div>
        <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={scrollToBooking}
          className={`${buttonColor} text-white px-6 py-3 rounded-xl font-semibold transition-all duration-200`}
        >
          Book Now
        </motion.button>
      </div>
    </motion.div>
  );
};

export default ServiceCard;
