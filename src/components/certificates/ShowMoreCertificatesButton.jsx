// src/components/certificates/ShowMoreCertificatesButton.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router';
import { useTheme } from '../../context/ThemeContext';

export const ShowMoreCertificatesButton = ({ totalCount, isDarkMode: isDarkModeProp }) => {
  const themeContext = useTheme();
  // Fall back to prop if context is unavailable
  const isDarkMode = themeContext?.isDarkMode ?? isDarkModeProp;

  return (
    <div className="flex justify-center border-t border-slate-800/10 dark:border-slate-800/80 pt-10 sm:pt-12 w-full">
      <Link to="/certificates" className="inline-block">
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className={`group px-6 sm:px-8 py-3.5 border font-mono text-xs uppercase tracking-widest font-semibold rounded-xl transition-all duration-300 flex items-center justify-center gap-3 cursor-pointer relative overflow-hidden ${
            isDarkMode
              ? 'bg-slate-900/90 hover:bg-slate-800 border-slate-700/80 hover:border-purple-500/50 text-slate-200 shadow-xl shadow-purple-500/5'
              : 'bg-white hover:bg-purple-50/50 border-purple-200 hover:border-purple-300 text-purple-950 shadow-md'
          }`}
        >
          <span>Explore All Certificates ({totalCount})</span>
          <svg
            className="w-4 h-4 text-purple-500 transition-transform duration-300 group-hover:translate-x-1 shrink-0"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </motion.button>
      </Link>
    </div>
  );
};