// src/components/projects/ProjectCard.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';

export const ProjectCard = ({ project, index }) => {
  const { isDarkMode } = useTheme();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
      className={`group relative border rounded-2xl overflow-hidden flex flex-col justify-between transition-all duration-300 w-full max-w-full ${
        isDarkMode
          ? 'bg-[#111827]/80 border-slate-800/80'
          : 'bg-white/80 border-purple-200/80'
      }`}
    >
      {/* Image Preview */}
      <div className="relative h-48 sm:h-56 w-full overflow-hidden bg-slate-950">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>

      {/* Card Body */}
      <div className="p-4 sm:p-6 flex flex-col justify-between grow w-full">
        <div>
          <div className="flex items-center justify-between mb-2">
            <span
              className={`font-mono text-[10px] sm:text-xs uppercase tracking-wider font-semibold ${
                isDarkMode ? 'text-purple-400' : 'text-purple-700'
              }`}
            >
              {project.category}
            </span>
            <span className={`font-mono text-[10px] sm:text-xs ${isDarkMode ? 'text-slate-500' : 'text-slate-400'}`}>
              #{project.id}
            </span>
          </div>

          <h3 className={`text-lg sm:text-xl font-bold mb-2 wrap-break-word ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
            {project.title}
          </h3>

          <p className={`text-xs sm:text-sm leading-relaxed mb-4 ${isDarkMode ? 'text-slate-300' : 'text-slate-600'}`}>
            {project.description}
          </p>
        </div>

        <div>
          {/* Tech Badges */}
          <div className="flex flex-wrap gap-1.5 mb-4 w-full">
            {project.tags.map((tag, i) => (
              <span
                key={i}
                className={`px-2 py-0.5 font-mono text-[10px] sm:text-[11px] rounded border ${
                  isDarkMode
                    ? 'bg-slate-900 border-slate-800 text-slate-300'
                    : 'bg-purple-50 border-purple-200 text-purple-900'
                }`}
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Action Links */}
          <div className="grid grid-cols-2 gap-2 pt-3 border-t border-slate-800/20 dark:border-slate-800/80 font-mono text-[11px] uppercase tracking-wider w-full">
            <a
              href={project.liveLink}
              target="_blank"
              rel="noreferrer"
              className={`py-2 text-center font-bold rounded-lg transition-all ${
                isDarkMode
                  ? 'bg-purple-600 text-white'
                  : 'bg-purple-600 text-white'
              }`}
            >
              Demo ↗
            </a>
            <a
              href={project.githubLink}
              target="_blank"
              rel="noreferrer"
              className={`py-2 text-center border font-semibold rounded-lg transition-all ${
                isDarkMode
                  ? 'bg-slate-900 border-slate-700 text-slate-200'
                  : 'bg-white border-purple-200 text-slate-800'
              }`}
            >
              Code
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};