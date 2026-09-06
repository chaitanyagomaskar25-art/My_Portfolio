import React from 'react';

export const EducationBadge = ({ isDarkMode }) => (
  <div
    className={`inline-flex items-center gap-2 font-mono text-[10px] sm:text-xs uppercase tracking-widest px-3 py-1 rounded-full border mb-3 ${
      isDarkMode
        ? 'bg-purple-950/40 border-purple-800/50 text-purple-400'
        : 'bg-purple-50 border-purple-200 text-purple-700'
    }`}
  >
    <span className="w-2 h-2 rounded-full bg-purple-500 animate-pulse shrink-0" />
    <span>Background // Education</span>
  </div>
);