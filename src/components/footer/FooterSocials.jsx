import React from 'react';

export const FooterSocials = ({ socialLinks, isDarkMode }) => {
  return (
    <div className="flex items-center gap-4">
      {socialLinks.map((social) => (
        <a
          key={social.name}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          className={`px-3 py-1.5 rounded-lg border font-mono text-xs flex items-center gap-2 transition-all duration-300 ${
            isDarkMode
              ? 'bg-[#0d1527] border-gray-800 text-slate-300 hover:border-cyan-500/40 hover:text-cyan-400'
              : 'bg-white border-cyan-100 text-slate-700 hover:border-cyan-300 hover:text-cyan-600 shadow-sm'
          }`}
        >
          <span>{social.icon}</span>
          <span>{social.name}</span>
        </a>
      ))}
    </div>
  );
};