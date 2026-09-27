// src/components/contact/ContactHeader.jsx
import React from 'react';
import { useTheme } from '../../context/ThemeContext';

export const ContactHeader = ({ isDarkMode: isDarkModeProp }) => {
  const themeContext = useTheme();
  // Safely fallback to prop if context is unavailable
  const isDarkMode = themeContext?.isDarkMode ?? isDarkModeProp;

  return (
    <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-8 border-b border-slate-800/20 dark:border-slate-800/80 gap-6 w-full">
      <div className="max-w-2xl">
        {/* Pill Badge Tag */}
        <div
          className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono tracking-wider mb-3 border ${
            isDarkMode
              ? 'bg-purple-500/10 border-purple-500/20 text-purple-400'
              : 'bg-purple-50 border-purple-200 text-purple-700'
          }`}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-purple-500 animate-pulse shrink-0" />
          <span>04—04 // CONTACT</span>
        </div>

        {/* Heading */}
        <h2
          className={`text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight ${
            isDarkMode ? 'text-white' : 'text-slate-900'
          }`}
        >
          Get In{' '}
          <span
            className={`bg-clip-text text-transparent bg-gradient-to-r ${
              isDarkMode
                ? 'from-purple-400 via-fuchsia-400 to-pink-400'
                : 'from-purple-700 via-fuchsia-600 to-pink-600'
            }`}
          >
            Touch
          </span>
        </h2>
      </div>

      {/* Subtitle */}
      <p
        className={`text-sm sm:text-base max-w-md leading-relaxed ${
          isDarkMode ? 'text-slate-400' : 'text-slate-600'
        }`}
      >
        Have a project in mind, an engineering opportunity, or just want to connect? Drop a message below or reach out directly.
      </p>
    </div>
  );
};