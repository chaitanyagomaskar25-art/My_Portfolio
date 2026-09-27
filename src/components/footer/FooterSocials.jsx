// src/components/footer/FooterSocials.jsx
import React from 'react';

export const FooterSocials = ({ socialLinks, isDarkMode }) => {
  return (
    <div className="flex flex-wrap justify-center items-center gap-3">
      {socialLinks.map((social) => (
        <a
          key={social.name}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          className={`px-3.5 py-1.5 rounded-xl border font-mono text-xs flex items-center gap-2 transition-all duration-300 ${
            isDarkMode
              ? 'bg-slate-900/80 border-slate-800 text-slate-300 hover:border-purple-500/40 hover:text-purple-400'
              : 'bg-white border-purple-100 text-slate-700 hover:border-purple-300 hover:text-purple-700 shadow-sm'
          }`}
        >
          <span>{social.icon}</span>
          <span>{social.name}</span>
        </a>
      ))}
    </div>
  );
};