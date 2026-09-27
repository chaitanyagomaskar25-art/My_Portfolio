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
      className={`py-16 sm:py-24 px-4 sm:px-6 font-sans relative overflow-hidden w-full transition-colors duration-500 ${
        isDarkMode ? 'text-slate-100' : 'bg-transparent text-slate-900'
      }`}
      id="projects"
    >
      <div className="max-w-7xl mx-auto relative z-10 w-full">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-8 border-b border-slate-800/20 dark:border-slate-800/80 gap-6 w-full">
          <div className="max-w-2xl">
            <div
              className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono tracking-wider mb-3 border ${
                isDarkMode
                  ? 'bg-purple-500/10 border-purple-500/20 text-purple-400'
                  : 'bg-purple-50 border-purple-200 text-purple-700'
              }`}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-purple-500 animate-pulse shrink-0" />
              <span>01—03 // SELECTED WORKS</span>
            </div>
            
            <h2
              className={`text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight ${
                isDarkMode ? 'text-white' : 'text-slate-900'
              }`}
            >
              Featured{' '}
              <span
                className={`bg-clip-text text-transparent bg-gradient-to-r ${
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
            className={`text-sm sm:text-base max-w-md leading-relaxed ${
              isDarkMode ? 'text-slate-400' : 'text-slate-600'
            }`}
          >
            A curated showcase of scalable full-stack applications, high-performance web systems, and interactive tools.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 w-full">
          {homeProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* Redirect / Show More Button */}
        <div className="flex justify-center border-t border-slate-800/10 dark:border-slate-800/80 pt-10 sm:pt-12 w-full">
          <Link to="/projects" className="inline-block">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`group px-6 sm:px-8 py-3.5 border font-mono text-xs uppercase tracking-widest font-semibold rounded-xl transition-all duration-300 flex items-center justify-center gap-3 cursor-pointer relative overflow-hidden ${
                isDarkMode
                  ? 'bg-slate-900/90 hover:bg-slate-800 border-slate-700/80 hover:border-purple-500/50 text-slate-200 shadow-xl shadow-purple-500/5'
                  : 'bg-white hover:bg-purple-50/50 border-purple-200 hover:border-purple-300 text-purple-950 shadow-md'
              }`}
            >
              <span>Explore All Projects ({projectsData.length})</span>
              <svg
                className="w-4 h-4 text-purple-500 transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </motion.button>
          </Link>
        </div>
      </div>
    </section>
  );
}