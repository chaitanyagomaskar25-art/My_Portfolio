// src/components/certificates/CertificateCard.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router';
import { useTheme } from '../../context/ThemeContext';

export const CertificateCard = ({ cert, index }) => {
  const { isDarkMode } = useTheme();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.08, ease: "easeOut" }}
      className={`group relative rounded-xl border overflow-hidden flex flex-col justify-between transition-all duration-300 ${
        isDarkMode
          ? 'bg-slate-900/60 border-slate-800/80 hover:border-purple-500/30 hover:shadow-xl hover:shadow-purple-500/5'
          : 'bg-white border-slate-200/80 hover:border-purple-300 hover:shadow-xl hover:shadow-purple-500/10'
      }`}
    >
      {/* Top Image Banner & Hover Action Overlay */}
      <div className="relative h-48 w-full overflow-hidden bg-slate-950">
        <img
          src={cert.image}
          alt={cert.title}
          className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
        />

        {/* Floating Issue Date Badge */}
        <span
          className={`absolute top-3 right-3 text-[10px] font-mono font-medium uppercase px-2.5 py-1 rounded-md border backdrop-blur-md z-10 ${
            isDarkMode
              ? 'bg-slate-950/80 border-slate-700/80 text-slate-300'
              : 'bg-white/90 border-slate-200 text-slate-700'
          }`}
        >
          {cert.issueDate}
        </span>

        {/* Hover Action Overlay */}
        <div className="absolute inset-0 bg-slate-950/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-2 px-3 backdrop-blur-[2px]">
          {/* View Details Button */}
          <Link
            to={`/certificates/${cert.id}`}
            className="px-3.5 py-2 bg-purple-600 hover:bg-purple-500 text-white font-medium text-xs rounded-lg transition-colors flex items-center gap-1.5 shadow-md"
          >
            <span>Details</span>
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>

          {/* Direct External Verification Button */}
          {cert.verifyLink && (
            <a
              href={cert.verifyLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-2 bg-slate-800/90 hover:bg-slate-700 text-slate-100 font-medium text-xs rounded-lg border border-slate-700 transition-colors flex items-center gap-1.5 shadow-md"
            >
              <span>Verify</span>
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          )}
        </div>
      </div>

      {/* Card Content Section */}
      <div className="p-5 flex flex-col justify-between grow">
        <div>
          {/* Issuer Badge & ID */}
          <div className="flex items-center justify-between gap-2 mb-2.5">
            <span
              className={`text-[11px] font-semibold tracking-wider uppercase px-2.5 py-0.5 rounded-full ${
                isDarkMode
                  ? 'bg-purple-500/10 text-purple-400 border border-purple-500/20'
                  : 'bg-purple-50 text-purple-700 border border-purple-200'
              }`}
            >
              {cert.issuer}
            </span>
            {cert.credentialId && (
              <span className={`font-mono text-xs ${isDarkMode ? 'text-slate-500' : 'text-slate-400'}`}>
                #{cert.credentialId}
              </span>
            )}
          </div>

          {/* Certificate Title */}
          <Link to={`/certificates/${cert.id}`}>
            <h3 className={`text-lg font-semibold tracking-tight mb-2 group-hover:text-purple-500 transition-colors ${
              isDarkMode ? 'text-slate-100' : 'text-slate-900'
            }`}>
              {cert.title}
            </h3>
          </Link>
        </div>

        {/* Footer Navigation */}
        <div className="pt-3 border-t border-slate-800/10 dark:border-slate-800/60 flex items-center justify-between">
          <Link
            to={`/certificates/${cert.id}`}
            className={`text-xs font-semibold flex items-center justify-between w-full pt-1 transition-colors ${
              isDarkMode
                ? 'text-purple-400 hover:text-purple-300'
                : 'text-purple-600 hover:text-purple-700'
            }`}
          >
            <span>View Certificate Details</span>
            <svg className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};