// src/components/contact/ContactInfoCard.jsx
import React from 'react';

export const ContactInfoCard = ({ title, children, isDarkMode }) => {
  return (
    <div
      className={`group relative flex flex-col justify-center rounded-xl border p-5 backdrop-blur-md overflow-hidden transition-all duration-300 hover:border-purple-500/40 grow ${
        isDarkMode
          ? 'bg-slate-900/60 border-slate-800/80 hover:border-purple-500/30 shadow-xl shadow-purple-500/5'
          : 'bg-white border-slate-200/80 hover:border-purple-300 shadow-sm'
      }`}
    >
      <span className={`text-xs font-mono uppercase tracking-wider block mb-2 font-semibold ${
        isDarkMode ? 'text-slate-300' : 'text-slate-800'
      }`}>
        // {title}
      </span>
      <div className="relative z-10">{children}</div>
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-purple-500/0 via-purple-500/5 to-pink-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
    </div>
  );
};