import React from 'react';

export const ContactInfoCard = ({ title, children, isDarkMode }) => {
  return (
    <div
      className={`group relative flex flex-col justify-center rounded-2xl border p-5 backdrop-blur-md overflow-hidden transition-all duration-500 hover:border-cyan-500/40 grow ${
        isDarkMode
          ? 'bg-[#0d1527]/80 border-gray-800/80'
          : 'bg-white/80 border-cyan-100 shadow-sm'
      }`}
    >
      <span className="text-base font-semibold block mb-2">{title}</span>
      {children}
      <div className="absolute inset-0 z-0 bg-linear-to-br from-cyan-500/0 via-cyan-500/5 to-cyan-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
    </div>
  );
};