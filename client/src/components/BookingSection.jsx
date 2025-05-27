import { motion } from "framer-motion";
import { useState } from "react";

const BookingSection = () => {
  const [selectedTime, setSelectedTime] = useState('');
  const [formData, setFormData] = useState({
    service: '',
    date: '',
    name: '',
    phone: '',
    email: '',
    notes: ''
  });

  const timeSlots = ['9:00 AM', '10:30 AM', '12:00 PM', '2:00 PM', '3:30 PM', '5:00 PM'];
  
  const services = [
    'Massage Therapy (60 min) - $120',
    'Personal Training (60 min) - $85',
    'Combination Package - $180',
    '3-Session Package - $500'
  ];

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your booking request! We will contact you within 24 hours to confirm your appointment.');
  };

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
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Book Your Session</h2>
          <p className="text-xl text-gray-600">Choose your preferred service and time slot</p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl shadow-2xl p-8"
        >
          <motion.form 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            {/* Service Selection */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.div variants={itemVariants}>
                <label className="block text-sm font-semibold text-gray-900 mb-3">Select Service</label>
                <select 
                  name="service"
                  value={formData.service}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                  required
                >
                  <option value="">Choose a service...</option>
                  {services.map((service, index) => (
                    <option key={index} value={service}>{service}</option>
                  ))}
                </select>
              </motion.div>

              <motion.div variants={itemVariants}>
                <label className="block text-sm font-semibold text-gray-900 mb-3">Preferred Date</label>
                <input 
                  type="date" 
                  name="date"
                  value={formData.date}
                  onChange={handleInputChange}
                  min={new Date().toISOString().split('T')[0]}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                  required
                />
              </motion.div>
            </div>

            {/* Time Selection */}
            <motion.div variants={itemVariants}>
              <label className="block text-sm font-semibold text-gray-900 mb-3">Available Times</label>
              <div className="grid grid-cols-3 md:grid-cols-6 gap-3">
                {timeSlots.map((time, index) => (
                  <motion.button 
                    key={index}
                    type="button"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setSelectedTime(time)}
                    className={`px-4 py-2 border rounded-lg transition-colors text-sm font-medium ${
                      selectedTime === time 
                        ? 'bg-teal-500 text-white border-teal-500' 
                        : 'border-gray-300 hover:border-teal-500 hover:bg-teal-50'
                    }`}
                  >
                    {time}
                  </motion.button>
                ))}
              </div>
            </motion.div>

            {/* Contact Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.div variants={itemVariants}>
                <label className="block text-sm font-semibold text-gray-900 mb-3">Full Name</label>
                <input 
                  type="text" 
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Enter your full name" 
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                  required
                />
              </motion.div>

              <motion.div variants={itemVariants}>
                <label className="block text-sm font-semibold text-gray-900 mb-3">Phone Number</label>
                <input 
                  type="tel" 
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="(613) 000-0000" 
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                  required
                />
              </motion.div>
            </div>

            <motion.div variants={itemVariants}>
              <label className="block text-sm font-semibold text-gray-900 mb-3">Email Address</label>
              <input 
                type="email" 
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="your.email@example.com" 
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                required
              />
            </motion.div>

            {/* Special Requests */}
            <motion.div variants={itemVariants}>
              <label className="block text-sm font-semibold text-gray-900 mb-3">Special Requests or Health Notes</label>
              <textarea 
                name="notes"
                value={formData.notes}
                onChange={handleInputChange}
                rows="4" 
                placeholder="Please share any relevant health information, injuries, or specific areas of focus..." 
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent resize-none"
              />
            </motion.div>

            {/* Booking Button */}
            <motion.div variants={itemVariants} className="text-center pt-4">
              <motion.button 
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-teal-500 text-white px-12 py-4 rounded-xl font-semibold text-lg hover:bg-teal-600 transition-all duration-200 shadow-lg"
              >
                Confirm Booking
              </motion.button>
              <p className="text-sm text-gray-500 mt-3">
                We'll contact you within 24 hours to confirm your appointment
              </p>
            </motion.div>
          </motion.form>
        </motion.div>

        {/* Quick Contact Options */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="bg-white rounded-xl p-6 shadow-lg text-center"
          >
            <div className="w-12 h-12 bg-teal-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="fas fa-phone text-white"></i>
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Call to Book</h3>
            <p className="text-gray-600 mb-3">Speak directly with our team</p>
            <a 
              href="tel:+16135551234" 
              className="text-teal-500 font-semibold hover:text-teal-600 transition-colors"
            >
              (613) 555-1234
            </a>
          </motion.div>

          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="bg-white rounded-xl p-6 shadow-lg text-center"
          >
            <div className="w-12 h-12 bg-blue-800 rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="fas fa-envelope text-white"></i>
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Email Us</h3>
            <p className="text-gray-600 mb-3">Get a response within 4 hours</p>
            <a 
              href="mailto:info@neurogym.ca" 
              className="text-blue-800 font-semibold hover:text-blue-900 transition-colors"
            >
              info@neurogym.ca
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default BookingSection;
