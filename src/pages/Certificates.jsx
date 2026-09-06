import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { certificatesData } from '../data/certificatesData';
import { CertificateHeader } from '../components/certificates/CertificateHeader';
import { CertificateCard } from '../components/certificates/CertificateCard';

export default function CertificatesPage() {
  const { isDarkMode } = useTheme();

  return (
    <section
      className={`py-12 sm:py-20 px-4 sm:px-6 font-sans relative overflow-x-clip w-full max-w-full min-h-screen transition-colors duration-500 ${
        isDarkMode ? 'bg-[#030712] text-slate-100' : 'bg-transparent text-slate-900'
      }`}
    >
      <div className="max-w-7xl mx-auto relative z-10 w-full">
        <CertificateHeader
          isDarkMode={isDarkMode}
          badgeText="Complete Collection // Credentials"
          mainTitle="All Verified"
          gradientTitle="Certificates"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 w-full max-w-full">
          {certificatesData.map((cert, index) => (
            <CertificateCard key={cert.id} cert={cert} index={index} isDarkMode={isDarkMode} />
          ))}
        </div>
      </div>
    </section>
  );
}