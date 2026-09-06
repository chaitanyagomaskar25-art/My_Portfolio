import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router';

export const ShowMoreCertificatesButton = ({ isDarkMode, totalCount }) => {
  return (
    <div className="flex justify-center border-t border-slate-800/20 dark:border-slate-800/80 pt-8 sm:pt-10 w-full">
      <Link to="/certificates" className="inline-block max-w-full">
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className={`group px-5 sm:px-8 py-3 sm:py-3.5 border font-mono text-[11px] sm:text-xs uppercase tracking-widest font-bold rounded-xl transition-all flex items-center justify-center gap-2 sm:gap-3 cursor-pointer max-w-full ${
            isDarkMode
              ? 'bg-slate-900/90 hover:bg-slate-800 border-slate-700 hover:border-cyan-500/50 text-slate-200 shadow-lg'
              : 'bg-white hover:bg-cyan-50 border-cyan-200 hover:border-cyan-300 text-cyan-900 shadow-md'
          }`}
        >
          <span className="truncate">Show More ({totalCount} Total Certificates)</span>
          <span className="text-cyan-500 transition-transform duration-300 group-hover:translate-x-1 shrink-0">
            →
          </span>
        </motion.button>
      </Link>
    </div>
  );
};