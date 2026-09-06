import React from 'react';

export const FooterMetadata = ({ authorName, tagline, isDarkMode }) => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="flex flex-col gap-1.5 items-center md:items-start text-center md:text-left">
      <div className={`flex items-center gap-2 font-mono text-xs ${isDarkMode ? 'text-gray-300' : 'text-slate-800'}`}>
        <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
        <span>© {currentYear} // {authorName}</span>
      </div>
      <p className={`text-[10px] font-mono tracking-wide uppercase ${isDarkMode ? 'text-gray-500' : 'text-slate-500'}`}>
        {tagline}
      </p>
    </div>
  );
};