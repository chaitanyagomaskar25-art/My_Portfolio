// src/pages/AllProjects.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router';
import { useTheme } from '../context/ThemeContext';
import { projectsData } from '../data/projectsData';
import { ProjectCard } from '../components/projects/ProjectCard';

export default function AllProjects() {
  const { isDarkMode } = useTheme();
  const [activeTab, setActiveTab] = useState('All');

  const categories = ['All', 'Full Stack', 'Frontend'];

  const filteredProjects = projectsData.filter((project) =>
    activeTab === 'All' ? true : project.category === activeTab
  );

  return (
    <div
      className={`min-h-screen py-20 px-4 sm:px-6 font-sans transition-colors duration-500 ${
        isDarkMode ? 'bg-[#030712] text-slate-100' : 'bg-slate-50 text-slate-900'
      }`}
    >
      <div className="max-w-7xl mx-auto">
        {/* Back Button */}
        <Link to="/" className="inline-block mb-8">
          <motion.button
            whileHover={{ x: -4 }}
            className={`font-mono text-xs uppercase tracking-widest px-4 py-2 rounded-lg border font-bold flex items-center gap-2 ${
              isDarkMode
                ? 'bg-slate-900 border-slate-800 text-slate-300 hover:text-white'
                : 'bg-white border-purple-200 text-slate-700 hover:text-slate-900'
            }`}
          >
            ← Back To Home
          </motion.button>
        </Link>

        {/* Page Title */}
        <div className="mb-12">
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-purple-500 font-bold block mb-2">
            Archive // Full Collection
          </span>
          <h1 className="text-4xl sm:text-6xl font-black uppercase tracking-tight mb-4">
            All Projects ({projectsData.length})
          </h1>
          <p className={`text-base max-w-2xl ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
            Explore every web application, frontend UI design, and software system built across various tech stacks.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`px-4 py-2 rounded-xl font-mono text-xs uppercase tracking-wider transition-all cursor-pointer ${
                activeTab === cat
                  ? isDarkMode
                    ? 'bg-purple-500 text-white font-bold shadow-[0_0_20px_rgba(168,85,247,0.4)]'
                    : 'bg-purple-600 text-white font-bold shadow-md'
                  : isDarkMode
                  ? 'bg-slate-900/80 text-slate-400 border border-slate-800'
                  : 'bg-white text-slate-600 border border-purple-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Renders ALL projects from the static data file */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
}