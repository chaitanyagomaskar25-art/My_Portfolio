// src/pages/CertificateDetails.jsx
import React from 'react';
import { useParams, Link } from 'react-router';
import { useTheme } from '../context/ThemeContext';
import { certificatesData } from '../data/certificatesData';

export default function CertificateDetails() {
  const { id } = useParams();
  const { isDarkMode } = useTheme();

  // Find matching certificate or fallback to index 0
  const cert =
    certificatesData.find((item) => String(item.id) === String(id)) ||
    certificatesData[0];

  return (
    <div
      className={`min-h-screen font-sans transition-colors duration-500 relative ${
        isDarkMode ? 'bg-[#060911] text-slate-100' : 'bg-slate-50 text-slate-900'
      }`}
    >
      {/* Soft Ambient Background Lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-purple-600/10 blur-[130px] pointer-events-none rounded-full" />
      <div className="absolute top-1/3 right-0 w-[500px] h-[300px] bg-indigo-600/10 blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-20 relative z-10 space-y-10">
        
        {/* Navigation Breadcrumb */}
        <div className="flex items-center justify-between">
          <Link
            to="/certificates"
            className={`inline-flex items-center gap-2 text-xs font-mono font-semibold transition-colors ${
              isDarkMode ? 'text-slate-400 hover:text-purple-400' : 'text-slate-600 hover:text-purple-700'
            }`}
          >
            ← Back to Certificates
          </Link>

          <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 text-xs font-mono">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            {cert.verificationStatus}
          </div>
        </div>

        {/* Certificate Header Info */}
        <div className="space-y-4 max-w-4xl">
          <div className="flex flex-wrap items-center gap-3">
            <span className={`px-3 py-1 rounded-full text-xs font-mono font-semibold uppercase tracking-wider ${
              isDarkMode
                ? 'bg-purple-500/15 text-purple-300 border border-purple-500/30'
                : 'bg-purple-100 text-purple-800 border border-purple-200'
            }`}>
              Issued by {cert.issuer} ({cert.platform})
            </span>
            <span className={`text-xs font-mono ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>
              Completed on {cert.issueDate}
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight">
            {cert.title}
          </h1>

          <p className={`text-base sm:text-lg ${isDarkMode ? 'text-slate-300' : 'text-slate-700'}`}>
            Awarded to <span className="font-bold text-purple-400">{cert.recipient}</span>
          </p>
        </div>

        {/* Structured Performance Metrics */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className={`p-5 rounded-2xl border ${
            isDarkMode ? 'bg-slate-900/60 border-slate-800/80' : 'bg-white border-slate-200 shadow-sm'
          }`}>
            <span className={`text-[11px] font-mono uppercase tracking-wider block mb-1 ${
              isDarkMode ? 'text-slate-500' : 'text-slate-400'
            }`}>
              Grade Achieved
            </span>
            <span className="text-3xl font-black text-emerald-400 tracking-tight">
              {cert.grade}
            </span>
          </div>

          <div className={`p-5 rounded-2xl border ${
            isDarkMode ? 'bg-slate-900/60 border-slate-800/80' : 'bg-white border-slate-200 shadow-sm'
          }`}>
            <span className={`text-[11px] font-mono uppercase tracking-wider block mb-1 ${
              isDarkMode ? 'text-slate-500' : 'text-slate-400'
            }`}>
              Estimated Effort
            </span>
            <span className="text-2xl font-black tracking-tight">
              {cert.duration}
            </span>
          </div>

          <div className={`p-5 rounded-2xl border ${
            isDarkMode ? 'bg-slate-900/60 border-slate-800/80' : 'bg-white border-slate-200 shadow-sm'
          }`}>
            <span className={`text-[11px] font-mono uppercase tracking-wider block mb-1 ${
              isDarkMode ? 'text-slate-500' : 'text-slate-400'
            }`}>
              Provider / Platform
            </span>
            <span className="text-xl font-bold text-purple-400 block truncate">
              {cert.issuer} / {cert.platform}
            </span>
          </div>
        </div>

        {/* Main Content Dashboard */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Main Column: Image & Learning Outcomes */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Full-bleed certificate image (100% width, zero letterboxing) */}
            <div className={`rounded-2xl py-10 overflow-hidden border shadow-lg ${
              isDarkMode ? 'border-slate-800/80 bg-slate-950' : 'border-slate-200 bg-white'
            }`}>
              <img
                src={cert.image}
                alt={cert.title}
                className="w-full h-auto block object-cover"
              />
            </div>

            {/* Learning Outcomes Matrix */}
            <div className={`p-6 sm:p-8 rounded-3xl border space-y-4 ${
              isDarkMode ? 'bg-slate-900/40 border-slate-800/80' : 'bg-white border-slate-200 shadow-sm'
            }`}>
              <h2 className="text-lg font-bold flex items-center gap-2">
                <span className="text-purple-500">✦</span> What I Learnt
              </h2>

              <ul className="space-y-3">
                {cert.learningOutcomes.map((outcome, idx) => (
                  <li key={idx} className={`flex items-start gap-3 text-sm leading-relaxed ${
                    isDarkMode ? 'text-slate-300' : 'text-slate-700'
                  }`}>
                    <span className="text-purple-500 font-mono text-xs font-bold mt-0.5">0{idx + 1}.</span>
                    <span>{outcome}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>

          {/* Sidebar: Authentication & Skills */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Official Credential Verification Link */}
            <div className={`p-6 rounded-3xl border space-y-4 ${
              isDarkMode ? 'bg-slate-900/60 border-slate-800' : 'bg-white border-slate-200 shadow-sm'
            }`}>
              <h3 className={`text-xs font-mono uppercase tracking-widest font-semibold ${
                isDarkMode ? 'text-slate-400' : 'text-slate-500'
              }`}>
                // External Authentication
              </h3>

              <a
                href={cert.verifyLink}
                target="_blank"
                rel="noreferrer"
                className="w-full py-3.5 px-5 rounded-2xl bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-mono text-xs font-bold shadow-lg shadow-purple-600/20 hover:opacity-95 transition-all flex items-center justify-between"
              >
                <span>Verify Credential Link</span>
                <span>↗</span>
              </a>
            </div>

            {/* Professional Verified Skills Matrix */}
            <div className={`p-6 rounded-3xl border space-y-5 ${
              isDarkMode ? 'bg-slate-900/60 border-slate-800' : 'bg-white border-slate-200 shadow-sm'
            }`}>
              <div className="flex items-center justify-between border-b border-slate-800/60 pb-3">
                <div>
                  <h3 className={`text-xs font-mono uppercase tracking-widest font-bold ${
                    isDarkMode ? 'text-slate-300' : 'text-slate-700'
                  }`}>
                    Validated Competencies
                  </h3>
                  <p className={`text-[10px] ${isDarkMode ? 'text-slate-500' : 'text-slate-400'}`}>
                    Verified by course curriculum
                  </p>
                </div>
                <span className="px-2.5 py-1 rounded-full text-[11px] font-mono font-bold bg-purple-500/10 border border-purple-500/20 text-purple-400">
                  {cert.skillsVerified.length} Skills
                </span>
              </div>

              {/* Structured Grid Layout */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {cert.skillsVerified.map((skill, index) => (
                  <div
                    key={index}
                    className={`p-3 rounded-xl border transition-all flex flex-col justify-between ${
                      isDarkMode
                        ? 'bg-slate-950/70 border-slate-800/80 hover:border-purple-500/40'
                        : 'bg-slate-50 border-slate-200 hover:border-purple-300'
                    }`}
                  >
                    <div className="flex items-center gap-1.5 mb-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-purple-400 shrink-0" />
                      <span className="text-xs font-semibold tracking-tight truncate">
                        {skill.name}
                      </span>
                    </div>
                    <span className={`text-[9px] uppercase tracking-wider font-mono ${
                      isDarkMode ? 'text-slate-500' : 'text-slate-400'
                    }`}>
                      {skill.category}
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}