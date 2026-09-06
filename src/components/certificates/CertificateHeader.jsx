import React from 'react';

export const CertificateHeader = ({ isDarkMode, badgeText, mainTitle, gradientTitle, subtitle }) => {
  return (
    <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-6 border-b border-slate-800/20 dark:border-slate-800/80 gap-4 w-full">
      <div className="max-w-full">
        <div
          className={`flex items-center gap-2 font-mono text-[10px] sm:text-xs uppercase tracking-widest mb-2 ${
            isDarkMode ? 'text-cyan-400' : 'text-cyan-600 font-semibold'
          }`}
        >
          <span className="w-2 h-2 rounded-sm bg-cyan-500 animate-pulse shrink-0" />
          <span className="truncate">{badgeText}</span>
        </div>
        <h2
          className={`text-2xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight wrap-break-word ${
            isDarkMode ? 'text-white' : 'text-slate-900'
          }`}
        >
          {mainTitle}{' '}
          <span
            className={`bg-clip-text text-transparent bg-linear-to-r ${
              isDarkMode
                ? 'from-cyan-400 via-teal-400 to-blue-500'
                : 'from-cyan-600 via-teal-600 to-blue-700'
            }`}
          >
            {gradientTitle}
          </span>
        </h2>
      </div>
      {subtitle && (
        <p className={`text-xs sm:text-sm max-w-md leading-relaxed ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
};