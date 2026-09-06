// src/components/Navbar.jsx
import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import { Moon, Sun, Menu, X } from 'lucide-react';
import { Link } from 'react-router';

const navLinks = [
  { name: 'Home', href: '/#home' },
  { name: 'Projects', href: '/#projects' },
  { name: 'Skills', href: '/#skills' },
  { name: 'Contact', href: '/#contact' },
];

const Navbar = () => {
  const { isDarkMode, toggleTheme } = useTheme();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 w-full z-50 px-3 sm:px-6 py-3 transition-colors duration-500 backdrop-blur-md border-b ${
        isDarkMode
          ? 'bg-slate-950/80 border-slate-800/80 shadow-lg shadow-purple-950/10'
          : 'bg-white/80 border-purple-200/60 shadow-sm shadow-purple-500/5'
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center gap-2 w-full">
        {/* Left Badge */}
        <div className="flex items-center shrink-0">
          <div
            className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full border text-[10px] sm:text-xs font-mono font-medium backdrop-blur-md ${
              isDarkMode
                ? 'bg-slate-900/80 border-slate-800 text-purple-400'
                : 'bg-white/80 border-purple-200/80 text-purple-700'
            }`}
          >
            <span className="relative flex h-2 w-2 shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="whitespace-nowrap">Available for Hire</span>
          </div>
        </div>

        {/* Desktop Links */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-xs font-mono uppercase tracking-wider transition-colors font-semibold ${
                isDarkMode ? 'text-slate-300 hover:text-purple-400' : 'text-slate-600 hover:text-purple-700'
              }`}
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Right Controls */}
        <div className="flex items-center gap-2 shrink-0">
          <button
            onClick={toggleTheme}
            aria-label="Toggle Theme"
            className={`p-2 rounded-xl border backdrop-blur-md transition-all cursor-pointer ${
              isDarkMode
                ? 'bg-slate-900 border-slate-700 text-amber-400'
                : 'bg-white border-purple-200 text-slate-700'
            }`}
          >
            {isDarkMode ? <Sun size={16} /> : <Moon size={16} />}
          </button>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Mobile Menu"
            className={`md:hidden p-2 rounded-xl border backdrop-blur-md transition-all cursor-pointer ${
              isDarkMode ? 'bg-slate-900 border-slate-700 text-slate-200' : 'bg-white border-purple-200 text-slate-700'
            }`}
          >
            {isMobileMenuOpen ? <X size={16} /> : <Menu size={16} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div
          className={`md:hidden absolute top-full left-0 right-0 w-full border-b backdrop-blur-xl shadow-xl ${
            isDarkMode ? 'bg-slate-950/95 border-slate-800 text-slate-100' : 'bg-white/95 border-purple-200 text-slate-900'
          }`}
        >
          <div className="flex flex-col py-4 px-6 gap-3 font-mono text-xs uppercase tracking-widest">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="py-2 border-b border-slate-800/10 dark:border-slate-800/50"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}

    </header>
  );
};

export default Navbar;