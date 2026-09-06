// src/components/projects/Projects.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router';
import { useTheme } from '../../context/ThemeContext';
import { projectsData } from '../../data/projectsData';
import { ProjectCard } from './ProjectCard';

export default function Projects() {
  const { isDarkMode } = useTheme();

  // Show first 3 projects on the Home Page
  const homeProjects = projectsData.slice(0, 3);

  return (
    <section
      className={`py-12 sm:py-20 px-4 sm:px-6 font-sans relative overflow-x-clip w-full max-w-full transition-colors duration-500 ${
        isDarkMode ? ' text-slate-100' : 'bg-transparent text-slate-900'
      }`}
      id="projects"
    >
      <div className="max-w-7xl mx-auto relative z-10 w-full">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-6 border-b border-slate-800/20 dark:border-slate-800/80 gap-4 w-full">
          <div className="max-w-full">
            <div
              className={`flex items-center gap-2 font-mono text-[10px] sm:text-xs uppercase tracking-widest mb-2 ${
                isDarkMode ? 'text-purple-400' : 'text-purple-600 font-semibold'
              }`}
            >
              <span className="w-2 h-2 rounded-sm bg-purple-500 animate-pulse shrink-0" />
              <span className="truncate">Selected Works // 01—03</span>
            </div>
            <h2
              className={`text-2xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight wrap-break-word ${
                isDarkMode ? 'text-white' : 'text-slate-900'
              }`}
            >
              Featured{' '}
              <span
                className={`bg-clip-text text-transparent bg-linear-to-r ${
                  isDarkMode
                    ? 'from-purple-400 via-fuchsia-400 to-pink-400'
                    : 'from-purple-700 via-fuchsia-600 to-pink-600'
                }`}
              >
                Engineering
              </span>
            </h2>
          </div>
          <p
            className={`text-xs sm:text-sm max-w-md leading-relaxed ${
              isDarkMode ? 'text-slate-400' : 'text-slate-600'
            }`}
          >
            A preview of scalable full-stack applications, interactive web apps, and system integrations.
          </p>
        </div>

        {/* 1 Column on Mobile, 2 on Tablet, 3 on Desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-10 sm:mb-12 w-full max-w-full">
          {homeProjects.map((project, index) => (
            <div key={project.id} className="w-full max-w-full overflow-hidden">
              <ProjectCard project={project} index={index} />
            </div>
          ))}
        </div>

        {/* Redirect / Show More Button */}
        <div className="flex justify-center border-t border-slate-800/20 dark:border-slate-800/80 pt-8 sm:pt-10 w-full">
          <Link to="/projects" className="inline-block max-w-full">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`group px-5 sm:px-8 py-3 sm:py-3.5 border font-mono text-[11px] sm:text-xs uppercase tracking-widest font-bold rounded-xl transition-all flex items-center justify-center gap-2 sm:gap-3 cursor-pointer max-w-full ${
                isDarkMode
                  ? 'bg-slate-900/90 hover:bg-slate-800 border-slate-700 hover:border-purple-500/50 text-slate-200 shadow-lg'
                  : 'bg-white hover:bg-purple-50 border-purple-200 hover:border-purple-300 text-purple-900 shadow-md'
              }`}
            >
              <span className="truncate">Show More ({projectsData.length} Total Projects)</span>
              <span className="text-purple-500 transition-transform duration-300 group-hover:translate-x-1 shrink-0">
                →
              </span>
            </motion.button>
          </Link>
        </div>
      </div>
    </section>
  );
}