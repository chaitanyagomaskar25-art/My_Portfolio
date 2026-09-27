// src/components/contact/Contact.jsx
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut', staggerChildren: 0.08 },
    },
  };

  return (
    <section
      className={`py-16 sm:py-24 px-4 sm:px-6 font-sans relative overflow-hidden w-full transition-colors duration-500 ${
        isDarkMode ? 'text-slate-100' : 'bg-transparent text-slate-900'
      }`}
      id="contact"
    >
      <div className="max-w-7xl mx-auto relative z-10 w-full">
        <ContactHeader isDarkMode={isDarkMode} />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 lg:grid-cols-5 gap-6 sm:gap-8 items-stretch w-full"
        >
          {/* Left Side: Contact Information Cards */}
          <div className="lg:col-span-2 flex flex-col gap-4 justify-between">
            {/* Resume */}
            <ContactInfoCard title="Technical Resume" isDarkMode={isDarkMode}>
              <a
                href={contactInfo.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-xs font-mono font-semibold transition-colors inline-flex items-center gap-1.5 ${
                  isDarkMode
                    ? 'text-purple-400 hover:text-purple-300'
                    : 'text-purple-600 hover:text-purple-700'
                }`}
              >
                <span>Download Resume</span>
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </ContactInfoCard>

            {/* Email */}
            <ContactInfoCard title="Direct Email" isDarkMode={isDarkMode}>
              <a
                href={`mailto:${contactInfo.email}`}
                className={`text-xs font-mono font-medium transition-colors truncate block ${
                  isDarkMode
                    ? 'text-purple-400 hover:text-purple-300'
                    : 'text-purple-600 hover:text-purple-700'
                }`}
              >
                {contactInfo.email}
              </a>
            </ContactInfoCard>

            {/* Phone */}
            <ContactInfoCard title="Direct Line" isDarkMode={isDarkMode}>
              <a
                href={`tel:${contactInfo.phoneRaw}`}
                className={`text-xs font-mono font-medium transition-colors block ${
                  isDarkMode
                    ? 'text-purple-400 hover:text-purple-300'
                    : 'text-purple-600 hover:text-purple-700'
                }`}
              >
                {contactInfo.phone}
              </a>
            </ContactInfoCard>

            {/* Social Spaces */}
            <ContactInfoCard title="Social Coordinates" isDarkMode={isDarkMode}>
              <div className="flex flex-col gap-2 font-mono text-xs">
                {contactInfo.socials.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noreferrer"
                    className={`transition-colors flex items-center gap-2 ${
                      isDarkMode
                        ? 'text-slate-400 hover:text-purple-400'
                        : 'text-slate-600 hover:text-purple-600'
                    }`}
                  >
                    <span className="text-purple-500">{social.icon}</span>
                    <span>{social.name}</span>
                  </a>
                ))}
              </div>
            </ContactInfoCard>
          </div>

          {/* Right Side: Interactive Contact Form */}
          <div className="lg:col-span-3">
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