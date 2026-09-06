import React from 'react';

export const FooterNavLinks = ({ navLinks, isDarkMode }) => {
  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-8 font-mono text-xs tracking-wider uppercase">
      {navLinks.map((link) => (
        <button
          key={link.targetId}
          onClick={() => handleScroll(link.targetId)}
          className={`transition-colors duration-200 cursor-pointer ${
            isDarkMode 
              ? 'text-slate-400 hover:text-cyan-400' 
              : 'text-slate-600 hover:text-cyan-600'
          }`}
        >
          // {link.label}
        </button>
      ))}
    </div>
  );
};