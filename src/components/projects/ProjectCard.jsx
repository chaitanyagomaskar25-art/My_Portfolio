// src/components/projects/ProjectCard.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router';
import { useTheme } from '../../context/ThemeContext';

export const ProjectCard = ({ project, index }) => {
  const { isDarkMode } = useTheme();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.08, ease: "easeOut" }}
      className={`group relative rounded-xl border overflow-hidden flex flex-col justify-between transition-all duration-300 ${
        isDarkMode
          ? 'bg-slate-900/60 border-slate-800/80 hover:border-purple-500/30 hover:shadow-xl hover:shadow-purple-500/5'
          : 'bg-white border-slate-200/80 hover:border-purple-300 hover:shadow-xl hover:shadow-purple-500/10'
      }`}
    >
      {/* Top Image Banner & Hover Overlay */}
      <div className="relative h-48 w-full overflow-hidden bg-slate-950">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
        />
        
        {/* Hover Overlay with Live Demo and Code Only */}
        <div className="absolute inset-0 bg-slate-950/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3 px-3 backdrop-blur-[2px]">
          {/* Live Demo */}
          {project.liveLink && (
            <a
              href={project.liveLink}
              target="_blank"
              rel="noreferrer"
              className="px-3.5 py-2 bg-purple-600 hover:bg-purple-500 text-white font-medium text-xs rounded-lg transition-colors flex items-center gap-1.5 shadow-md"
            >
              <span>Live Demo</span>
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          )}

          {/* Source Code */}
          {project.githubLink && (
            <a
              href={project.githubLink}
              target="_blank"
              rel="noreferrer"
              className="px-3.5 py-2 bg-slate-800/90 hover:bg-slate-700 text-slate-100 font-medium text-xs rounded-lg border border-slate-700 transition-colors flex items-center gap-1.5 shadow-md"
            >
              <span>Code</span>
              <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
              </svg>
            </a>
          )}
        </div>
      </div>

      {/* Content Section */}
      <div className="p-5 flex flex-col justify-between grow">
        <div>
          <div className="flex items-center justify-between gap-2 mb-2.5">
            <span className={`text-[11px] font-semibold tracking-wider uppercase px-2.5 py-0.5 rounded-full ${
              isDarkMode 
                ? 'bg-purple-500/10 text-purple-400 border border-purple-500/20' 
                : 'bg-purple-50 text-purple-700 border border-purple-200'
            }`}>
              {project.category}
            </span>
            <span className={`font-mono text-xs ${isDarkMode ? 'text-slate-500' : 'text-slate-400'}`}>
              #{String(project.id).padStart(2, '0')}
            </span>
          </div>

          <Link to={`/projects/${project.id}`}>
            <h3 className={`text-lg font-semibold tracking-tight mb-2 group-hover:text-purple-500 transition-colors ${
              isDarkMode ? 'text-slate-100' : 'text-slate-900'
            }`}>
              {project.title}
            </h3>
          </Link>

          <p className={`text-xs leading-relaxed line-clamp-3 mb-4 ${
            isDarkMode ? 'text-slate-400' : 'text-slate-600'
          }`}>
            {project.description}
          </p>
        </div>

        {/* Tech Badges & View Details Footer Link */}
        <div className="pt-3 border-t border-slate-800/10 dark:border-slate-800/60 flex flex-col gap-3">
          <div className="flex flex-wrap gap-1.5">
            {project.tags.map((tag, i) => (
              <span
                key={i}
                className={`px-2 py-0.5 text-[10px] font-medium rounded ${
                  isDarkMode
                    ? 'bg-slate-800/60 text-slate-300 border border-slate-700/50'
                    : 'bg-slate-100 text-slate-700 border border-slate-200'
                }`}
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Primary View Details Button */}
          <Link
            to={`/projects/${project.id}`}
            className={`text-xs font-semibold flex items-center justify-between pt-1 transition-colors ${
              isDarkMode
                ? 'text-purple-400 hover:text-purple-300'
                : 'text-purple-600 hover:text-purple-700'
            }`}
          >
            <span>View Project Details</span>
            <svg className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};