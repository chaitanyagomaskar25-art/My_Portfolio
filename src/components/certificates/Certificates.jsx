import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import { CertificateHeader } from './CertificateHeader';
import { CertificateCard } from './CertificateCard';
import { ShowMoreCertificatesButton } from './ShowMoreCertificatesButton';
import { certificatesData } from '../../data/certificatesData';

export default function Certificates() {
  const { isDarkMode } = useTheme();

  // Show top 3 items on the home section
  const homeCertificates = certificatesData.slice(0, 3);

  return (
    <section
      className={`py-12 sm:py-20 px-4 sm:px-6 font-sans relative overflow-x-clip w-full max-w-full transition-colors duration-500 ${
        isDarkMode ? ' text-slate-100' : 'bg-transparent text-slate-900'
      }`}
      id="certificates"
    >
      <div className="max-w-7xl mx-auto relative z-10 w-full">
        <CertificateHeader
          isDarkMode={isDarkMode}
          badgeText="Accomplishments // Credentials"
          mainTitle="Verified"
          gradientTitle="Certificates"
          subtitle="Verified technical certifications, engineering credentials, and software development foundations."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-10 sm:mb-12 w-full max-w-full">
          {homeCertificates.map((cert, index) => (
            <CertificateCard key={cert.id} cert={cert} index={index} isDarkMode={isDarkMode} />
          ))}
        </div>

        <ShowMoreCertificatesButton isDarkMode={isDarkMode} totalCount={certificatesData.length} />
      </div>
    </section>
  );
}