import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import { EducationBadge } from './EducationBadge';
import { AcademicStatItem } from './AcademicStatItem';
import { EducationTimelineItem } from './EducationTimeline';

import { educationData } from '../../data/educationData';

export default function Education() {
  const { isDarkMode } = useTheme();

  return (
    <section
      className={`py-12 sm:py-20 px-4 sm:px-6 font-sans relative overflow-x-hidden w-full max-w-full transition-colors duration-500 ${
        isDarkMode ? ' text-slate-100' : 'bg-transparent text-slate-900'
      }`}
      id="education"
    >
      <div className="max-w-7xl mx-auto w-full">
        {/* Responsive 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Side: Section Intro & Summary Box (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <EducationBadge isDarkMode={isDarkMode} />
              <h2 className={`text-2xl sm:text-4xl font-black uppercase tracking-tight mb-4 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
                Academic{' '}
                <span className="bg-clip-text text-transparent bg-linear-to-r from-purple-400 via-fuchsia-400 to-pink-500">
                  Journey
                </span>
              </h2>
              <p className={`text-xs sm:text-sm leading-relaxed mb-6 ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                A strong foundational background in Computer Science principles, problem-solving, and web development.
              </p>
            </div>

            {/* Academic Stat Grid */}
            <div className="grid grid-cols-2 gap-3 w-full">
              <AcademicStatItem label="CGPA" value="8.8" isDarkMode={isDarkMode} />
              <AcademicStatItem label="Graduation" value="2025" isDarkMode={isDarkMode} />
              <AcademicStatItem label="Core Modules" value="12+" isDarkMode={isDarkMode} />
              <AcademicStatItem label="Hackathons" value="3+" isDarkMode={isDarkMode} />
            </div>
          </div>

          {/* Right Side: Streamlined Timeline (7 cols) */}
          <div className="lg:col-span-7 w-full">
            <div
              className={`p-5 sm:p-8 rounded-2xl border transition-all ${
                isDarkMode ? 'bg-slate-900/60 border-slate-800' : 'bg-white border-purple-100 shadow-sm'
              }`}
            >
              <div className="flex flex-col gap-2">
                {educationData.map((item, index) => (
                  <EducationTimelineItem key={item.id} item={item} index={index} isDarkMode={isDarkMode} />
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}