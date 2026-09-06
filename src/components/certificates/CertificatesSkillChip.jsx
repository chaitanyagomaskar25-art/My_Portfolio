import React from 'react';

export const CertificateSkillChip = ({ skill, isDarkMode }) => {
  return (
    <span
      className={`px-2 py-0.5 font-mono text-[10px] sm:text-[11px] rounded border ${
        isDarkMode
          ? 'bg-slate-900 border-slate-800 text-slate-300'
          : 'bg-cyan-50/80 border-cyan-200 text-cyan-900'
      }`}
    >
      {skill}
    </span>
  );
};