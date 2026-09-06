import React from 'react';
import { motion } from 'framer-motion';
import { CertificateSkillChip } from './CertificatesSkillChip';

export const CertificateCard = ({ cert, index, isDarkMode }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
      className={`group relative border rounded-2xl overflow-hidden flex flex-col justify-between transition-all duration-300 w-full max-w-full ${
        isDarkMode
          ? 'bg-[#111827]/80 border-slate-800/80 hover:border-cyan-500/40'
          : 'bg-white/80 border-cyan-100 hover:border-cyan-300 shadow-sm'
      }`}
    >
      {/* Image Preview Box */}
      <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-slate-950">
        <img
          src={cert.image}
          alt={cert.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <span
          className={`absolute top-3 right-3 text-[10px] font-mono tracking-wider font-bold uppercase px-2.5 py-1 rounded-md border backdrop-blur-md ${
            isDarkMode
              ? 'bg-slate-950/80 border-slate-700 text-cyan-400'
              : 'bg-white/90 border-cyan-200 text-cyan-700'
          }`}
        >
          {cert.date}
        </span>
      </div>

      {/* Content Body */}
      <div className="p-5 sm:p-6 flex flex-col justify-between grow w-full">
        <div>
          <span
            className={`font-mono text-[10px] sm:text-xs uppercase tracking-wider font-semibold block mb-1 ${
              isDarkMode ? 'text-cyan-400' : 'text-cyan-700'
            }`}
          >
            {cert.issuer}
          </span>
          <h3 className={`text-lg sm:text-xl font-bold mb-2 wrap-break ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
            {cert.title}
          </h3>
          <p className={`text-xs font-mono mb-4 ${isDarkMode ? 'text-slate-500' : 'text-slate-400'}`}>
            ID: <span className="text-slate-400 select-all">{cert.credentialId}</span>
          </p>
        </div>

        {/* Footer Links & Chips */}
        <div className="pt-4 border-t border-slate-800/20 dark:border-slate-800/80 flex flex-col gap-4">
          <div className="flex flex-wrap gap-1.5">
            {cert.skillsVerified.map((skill, i) => (
              <CertificateSkillChip key={i} skill={skill} isDarkMode={isDarkMode} />
            ))}
          </div>

          <a
            href={cert.verifyLink}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center gap-1.5 font-mono text-xs font-bold transition-colors ${
              isDarkMode ? 'text-cyan-400 hover:text-cyan-300' : 'text-cyan-600 hover:text-cyan-700'
            }`}
          >
            <span>🔍</span> Verify Credential <span className="transition-transform group-hover:translate-x-1">→</span>
          </a>
        </div>
      </div>
    </motion.div>
  );
};