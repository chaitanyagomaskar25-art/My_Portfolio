import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';
import { contactInfo } from '../../data/contactData';
import { ContactHeader } from './ContactHeader';
import { ContactInfoCard } from './ContactInfoCard';
import { ContactForm } from './ContactForm';

export default function Contact() {
  const { isDarkMode } = useTheme();
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
    setFormData({ name: '', email: '', message: '' });
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut', staggerChildren: 0.1 },
    },
  };

  return (
    <section
      className={`min-h-screen py-16 px-4 sm:px-6 flex items-center justify-center font-sans select-none overflow-hidden w-full transition-colors duration-500 ${
        isDarkMode ? 'bg-[#070a13] text-gray-100' : 'bg-slate-50 text-gray-900'
      }`}
      id="contact"
    >
      <div className="max-w-7xl mx-auto w-full flex flex-col justify-center">
        <ContactHeader isDarkMode={isDarkMode} />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.1 }}
          className="lg:max-w-[70%] xl:max-w-[60%] mx-auto grid grid-cols-1 md:grid-cols-5 gap-6 items-stretch w-full"
        >
          {/* Left Side: Contact Information Cards */}
          <div className="md:col-span-2 flex flex-col gap-4 justify-between">
            {/* Resume */}
            <ContactInfoCard title="📄 Technical Profile" isDarkMode={isDarkMode}>
              <a
                href={contactInfo.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-mono text-cyan-500 hover:text-cyan-400 transition-colors inline-flex items-center gap-1.5"
              >
                Download Resume <span className="text-xs">↗</span>
              </a>
            </ContactInfoCard>

            {/* Email */}
            <ContactInfoCard title="📧 Direct Email" isDarkMode={isDarkMode}>
              <a
                href={`mailto:${contactInfo.email}`}
                className="text-xs font-mono text-cyan-500 hover:text-cyan-400 transition-colors truncate block"
              >
                {contactInfo.email}
              </a>
            </ContactInfoCard>

            {/* Phone */}
            <ContactInfoCard title="📞 Direct Line" isDarkMode={isDarkMode}>
              <a
                href={`tel:${contactInfo.phoneRaw}`}
                className="text-xs font-mono text-cyan-500 hover:text-cyan-400 transition-colors block"
              >
                {contactInfo.phone}
              </a>
            </ContactInfoCard>

            {/* Social Spaces */}
            <ContactInfoCard title="🌐 Social Coordinates" isDarkMode={isDarkMode}>
              <div className="flex flex-col gap-1.5 font-mono text-xs tracking-wider">
                {contactInfo.socials.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noreferrer"
                    className={`text-gray-400 ${social.hoverClass} transition-colors flex items-center gap-2`}
                  >
                    <span>{social.icon}</span> {social.name}
                  </a>
                ))}
              </div>
            </ContactInfoCard>
          </div>

          {/* Right Side: Contact Interactive Form */}
          <div className="md:col-span-3">
            <ContactForm
              formData={formData}
              setFormData={setFormData}
              handleSubmit={handleSubmit}
              isSubmitted={isSubmitted}
              isDarkMode={isDarkMode}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}