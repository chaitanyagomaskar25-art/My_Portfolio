import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import { footerData } from '../../data/footerData';
import { FooterHeading } from './FooterHeading';
import { FooterNavLinks } from './FooterNavLinks';
import { FooterSocials } from './FooterSocials';

export default function Footer() {
  const { isDarkMode } = useTheme();
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className={`relative z-10 w-full border-t py-14 px-4 sm:px-6 select-none font-sans transition-colors duration-500 ${
        isDarkMode
          ? 'bg-[#070a13] border-gray-900 text-slate-100'
          : 'bg-slate-50 border-cyan-100 text-slate-900'
      }`}
    >
      <div className="max-w-7xl mx-auto w-full flex flex-col items-center">
        
        {/* Header CTA matching About section */}
        <FooterHeading
          isDarkMode={isDarkMode}
          title={footerData.title}
          subtitle={footerData.subtitle}
        />

        {/* Quick Navigation Links */}
        <div className="mb-8">
          <FooterNavLinks navLinks={footerData.navLinks} isDarkMode={isDarkMode} />
        </div>

        {/* Social Badges */}
        <div className="mb-10">
          <FooterSocials socialLinks={footerData.socialLinks} isDarkMode={isDarkMode} />
        </div>

        {/* Bottom Bar Divider */}
        <div className="w-full border-t border-slate-800/20 dark:border-slate-800/80 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4 font-mono text-[11px] text-slate-500">
          <div>
            © {currentYear} <span className={isDarkMode ? 'text-slate-300' : 'text-slate-800'}>{footerData.authorName}</span>. All rights reserved.
          </div>
          
          <div>
            Built with{' '}
            <span className={isDarkMode ? 'text-slate-300' : 'text-slate-800'}>
              {footerData.techStack.join(', ')}
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
}