import React from 'react';
import { motion } from 'framer-motion';

export const ContactHeader = ({ isDarkMode }) => {
  return (
    <div className="mb-12 text-center">
      <motion.h2
        initial={{ opacity: 0, tracking: '-0.05em' }}
        whileInView={{ opacity: 1, tracking: '0.05em' }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 1 }}
        className={`text-4xl sm:text-6xl md:text-7xl font-black uppercase text-transparent bg-clip-text ${
          isDarkMode
            ? 'bg-linear-to-b from-white via-gray-300 to-gray-600'
            : 'bg-linear-to-b from-gray-900 via-gray-800 to-gray-600'
        } drop-shadow-[0_2px_10px_rgba(255,255,255,0.1)]`}
      >
        Get In Touch
      </motion.h2>
      <div className="flex justify-center mt-3">
        <span className="w-3 h-1 bg-cyan-500 rounded-full mr-1 animate-ping" />
        <div className="h-0.5 w-24 bg-linear-to-r from-transparent via-cyan-500 to-transparent" />
      </div>
    </div>
  );
};