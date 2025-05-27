import { motion } from "framer-motion";

const Footer = () => {
  const socialLinks = [
    { icon: "fab fa-facebook-f", href: "#", label: "Facebook" },
    { icon: "fab fa-instagram", href: "#", label: "Instagram" },
    { icon: "fab fa-linkedin-in", href: "#", label: "LinkedIn" }
  ];

  const contactInfo = [
    { icon: "fas fa-map-marker-alt", text: "123 Bank Street, Ottawa, ON K1P 5N2" },
    { icon: "fas fa-phone", text: "(613) 555-1234", href: "tel:+16135551234" },
    { icon: "fas fa-envelope", text: "info@neurogym.ca", href: "mailto:info@neurogym.ca" }
  ];

  const businessHours = [
    { days: "Mon-Fri:", hours: "8:00 AM - 8:00 PM" },
    { days: "Sat:", hours: "9:00 AM - 5:00 PM" },
    { days: "Sun:", hours: "10:00 AM - 4:00 PM" }
  ];

  return (
    <footer id="contact" className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <h3 className="text-2xl font-bold mb-4">NeuroGym</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Professional massage therapy and personal training services in the heart of Ottawa. 
              Helping you achieve optimal health and wellness through personalized care.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a 
                  key={index}
                  href={social.href}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 bg-teal-500 rounded-full flex items-center justify-center hover:bg-teal-600 transition-colors"
                  aria-label={social.label}
                >
                  <i className={social.icon}></i>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-4">Contact Information</h4>
            <div className="space-y-3">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <i className={`${info.icon} text-teal-500`}></i>
                  {info.href ? (
                    <a 
                      href={info.href} 
                      className="text-gray-300 hover:text-teal-500 transition-colors"
                    >
                      {info.text}
                    </a>
                  ) : (
                    <span className="text-gray-300">{info.text}</span>
                  )}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Hours & Policies */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-4">Hours & Policies</h4>
            <div className="space-y-3 text-gray-300">
              <div>
                <div className="font-medium mb-2">Business Hours:</div>
                {businessHours.map((hours, index) => (
                  <div key={index} className="text-sm">
                    <span className="font-medium">{hours.days}</span> {hours.hours}
                  </div>
                ))}
              </div>
              <div className="pt-4">
                <div className="font-medium mb-2">Cancellation Policy:</div>
                <div className="text-sm">24-hour notice required for cancellations. Late cancellations may incur a fee.</div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Google Maps Link */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-12 pt-8 border-t border-gray-800"
        >
          <div className="text-center">
            <motion.a 
              href="https://maps.google.com/?q=123+Bank+Street+Ottawa+ON" 
              target="_blank" 
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center space-x-2 bg-teal-500 text-white px-6 py-3 rounded-xl font-semibold hover:bg-teal-600 transition-colors"
            >
              <i className="fas fa-map-marked-alt"></i>
              <span>View Location on Google Maps</span>
              <i className="fas fa-external-link-alt text-sm"></i>
            </motion.a>
          </div>
        </motion.div>

        {/* Copyright */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400"
        >
          <p>&copy; 2024 NeuroGym. All rights reserved. | Licensed Massage Therapy & Personal Training Services</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
