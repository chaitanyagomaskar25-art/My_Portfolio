import React from 'react';

export const AcademicStatItem = ({ label, value, isDarkMode }) => (
  <div
    className={`p-3 rounded-xl border flex flex-col justify-center ${
      isDarkMode ? 'bg-slate-900/90 border-slate-800' : 'bg-slate-50 border-purple-100'
    }`}
  >
    <span className="text-xl sm:text-2xl font-black font-mono text-purple-500">{value}</span>
    <span className={`text-[10px] uppercase font-mono tracking-wider font-semibold ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
      {label}
    </span>
  </div>
);