import React from 'react';
import { motion } from 'framer-motion';
import { CourseTag } from './CourseTag';

export const EducationTimelineItem = ({ item, index, isDarkMode }) => (
  <motion.div
    initial={{ opacity: 0, y: 15 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.1, duration: 0.3 }}
    className={`relative pl-6 sm:pl-8 border-l-2 ${
      isDarkMode ? 'border-purple-500/30' : 'border-purple-300'
    } pb-6 last:pb-0 w-full`}
  >
    {/* Dot on timeline */}
    <span
      className={`absolute -left-1.75 top-0.5 w-3 h-3 rounded-full border-2 border-purple-500 ${
        isDarkMode ? 'bg-slate-950' : 'bg-white'
      }`}
    />

    <div className="flex flex-col gap-1">
      <div className="flex items-center justify-between gap-2 flex-wrap">
        <span className={`font-mono text-[11px] font-semibold ${isDarkMode ? 'text-purple-400' : 'text-purple-700'}`}>
          {item.duration}
        </span>
        <span className={`px-2 py-0.5 rounded text-[10px] font-mono font-bold ${isDarkMode ? 'bg-purple-950/80 text-purple-300' : 'bg-purple-100 text-purple-800'}`}>
          {item.grade}
        </span>
      </div>

      <h3 className={`text-base sm:text-lg font-bold ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
        {item.degree}
      </h3>

      <p className={`text-xs font-medium ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
        {item.institution} • {item.location}
      </p>

      <p className={`text-xs leading-relaxed my-2 ${isDarkMode ? 'text-slate-300' : 'text-slate-600'}`}>
        {item.description}
      </p>

      {item.courses && (
        <div className="flex flex-wrap gap-1 mt-1">
          {item.courses.map((course, i) => (
            <CourseTag key={i} name={course} isDarkMode={isDarkMode} />
          ))}
        </div>
      )}
    </div>
  </motion.div>
);