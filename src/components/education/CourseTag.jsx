import React from 'react';

export const CourseTag = ({ name, isDarkMode }) => (
  <span
    className={`px-2 py-0.5 rounded text-[10px] font-mono border ${
      isDarkMode
        ? 'bg-slate-950 border-slate-800 text-purple-300'
        : 'bg-purple-50 border-purple-200 text-purple-900'
    }`}
  >
    {name}
  </span>
);