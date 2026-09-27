// src/pages/CertificatesPage.jsx
import React from 'react';
import { Link } from 'react-router';
import { ArrowLeft } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { certificatesData } from '../data/certificatesData';
import { CertificateHeader } from '../components/certificates/CertificateHeader';
import { CertificateCard } from '../components/certificates/CertificateCard';

export default function CertificatesPage() {
  const { isDarkMode } = useTheme();

  // Metrics summary for executive overview
  const totalCertificates = certificatesData.length;

  return (
    <section
      className={`py-12 sm:py-20 px-4 sm:px-6 lg:px-8 font-sans relative overflow-hidden w-full min-h-screen transition-colors duration-500 ${
        isDarkMode ? 'bg-[#060911] text-slate-100' : 'bg-slate-50 text-slate-900'
      }`}
    >
      {/* Soft Ambient Background Lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-purple-600/10 blur-[140px] pointer-events-none rounded-full" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[250px] bg-indigo-600/10 blur-[130px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto relative z-10 w-full space-y-10">
        
        {/* Navigation Bar / Back to Home */}
        <div className="flex items-center justify-between">
          <Link
            to="/"
            className={`group inline-flex items-center gap-2 text-xs font-mono font-semibold px-3.5 py-2 rounded-xl border transition-all duration-300 ${
              isDarkMode
                ? 'bg-slate-900/80 border-slate-800 text-slate-300 hover:text-purple-400 hover:border-purple-500/40'
                : 'bg-white border-slate-200 text-slate-700 hover:text-purple-700 hover:border-purple-300 shadow-sm'
            }`}
          >
            <ArrowLeft size={14} className="transition-transform group-hover:-translate-x-1" />
            <span>Back to Home</span>
          </Link>

          <div className={`px-3 py-1.5 rounded-full border flex items-center gap-2 font-mono text-xs ${
            isDarkMode ? 'bg-slate-900/60 border-slate-800 text-slate-400' : 'bg-white border-slate-200 text-slate-600 shadow-sm'
          }`}>
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Live Registry</span>
          </div>
        </div>

        {/* Header Block */}
        <div className="flex flex-col items-center text-center space-y-4">
          <CertificateHeader
            isDarkMode={isDarkMode}
            badgeText="Verified Competencies // Academic & Industry"
            mainTitle="Professional"
            gradientTitle="Certificates"
          />

          {/* Quick Metrics Bar */}
          <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-8 pt-2">
            <div className={`px-4 py-2 rounded-xl border flex items-center gap-2.5 font-mono text-xs transition-colors ${
              isDarkMode ? 'bg-slate-900/60 border-slate-800' : 'bg-white border-slate-200 shadow-sm'
            }`}>
              <span className="w-2 h-2 rounded-full bg-purple-500" />
              <span className={isDarkMode ? 'text-slate-400' : 'text-slate-500'}>Total Credentials:</span>
              <span className="font-bold text-purple-400">{totalCertificates}</span>
            </div>

            <div className={`px-4 py-2 rounded-xl border flex items-center gap-2.5 font-mono text-xs transition-colors ${
              isDarkMode ? 'bg-slate-900/60 border-slate-800' : 'bg-white border-slate-200 shadow-sm'
            }`}>
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className={isDarkMode ? 'text-slate-400' : 'text-slate-500'}>Authenticity Status:</span>
              <span className="font-bold text-emerald-400">100% Verified</span>
            </div>
          </div>
        </div>

        {/* Certificate Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 w-full">
          {certificatesData.map((cert, index) => (
            <CertificateCard 
              key={cert.id || index} 
              cert={cert} 
              index={index} 
              isDarkMode={isDarkMode} 
            />
          ))}
        </div>

      </div>
    </section>
  );
}