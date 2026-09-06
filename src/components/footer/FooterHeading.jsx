import React from 'react';

export const FooterHeading = ({ isDarkMode, title, subtitle }) => {
  return (
    <div className="flex flex-col items-center text-center mb-10">
      <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-cyan-500 mb-2">
        <span className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse" />
        <span>System Terminal // End of Page</span>
      </div>
      
      <h3 className={`text-2xl sm:text-4xl font-black uppercase tracking-tight mb-2 ${
        isDarkMode ? 'text-white' : 'text-slate-900'
      }`}>
        {title}
      </h3>
      
      <p className={`text-xs sm:text-sm max-w-md ${
        isDarkMode ? 'text-slate-400' : 'text-slate-600'
      }`}>
        {subtitle}
      </p>
    </div>
  );
};