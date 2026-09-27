// src/pages/AllProjects.jsx
import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router';
import { useTheme } from '../context/ThemeContext';
import { projectsData } from '../data/projectsData';
import { ProjectCard } from '../components/projects/ProjectCard';

export default function AllProjects() {
  const { isDarkMode } = useTheme();
  const [activeTab, setActiveTab] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = ['All', 'Full Stack', 'Frontend'];

  // Filter projects dynamically based on category tab & search input
  const filteredProjects = useMemo(() => {
    return projectsData.filter((project) => {
      const matchesCategory =
        activeTab === 'All' ? true : project.category === activeTab;
      
      const matchesSearch =
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.description?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.tags?.some((tag) =>
          tag.toLowerCase().includes(searchQuery.toLowerCase())
        );

      return matchesCategory && matchesSearch;
    });
  }, [activeTab, searchQuery]);

  return (
    <div
      className={`min-h-screen font-sans transition-colors duration-500 relative overflow-hidden ${
        isDarkMode ? 'bg-[#080c15] text-slate-100' : 'bg-slate-50 text-slate-900'
      }`}
    >
      <div className="absolute top-1/3 right-0 w-[500px] h-[300px] bg-indigo-600/10 blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-20 relative z-10 space-y-10">
        
        <div className="space-y-6">
          <Link to="/" className="inline-block">
            <motion.button
              whileHover={{ x: -4 }}
              whileTap={{ scale: 0.98 }}
              className={`text-xs font-semibold px-4 py-2 rounded-xl transition-all flex items-center gap-2 cursor-pointer ${
                isDarkMode
                  ? 'bg-slate-900/80 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-700'
                  : 'bg-white border border-slate-200 text-slate-700 hover:text-slate-900 shadow-sm'
              }`}
            >
              <span>←</span> Return Home
            </motion.button>
          </Link>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-2">
            <div className="max-w-2xl space-y-3">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-purple-500" />
                <span className={`text-xs font-mono uppercase tracking-widest font-semibold ${
                  isDarkMode ? 'text-purple-400' : 'text-purple-700'
                }`}>
                  System Portfolio Directory
                </span>
              </div>

              <h1 className="text-4xl sm:text-6xl font-black tracking-tight leading-tight">
                All Projects
              </h1>

              <p className={`text-base sm:text-lg leading-relaxed ${
                isDarkMode ? 'text-slate-400' : 'text-slate-600'
              }`}>
                Browse through all production-ready applications, custom component libraries, and full-stack software architectures.
              </p>
            </div>

            {/* Total System Metrics Counter */}
            <div className={`p-4 rounded-2xl border flex items-center gap-6 shrink-0 ${
              isDarkMode
                ? 'bg-slate-900/60 border-slate-800/80 backdrop-blur-md'
                : 'bg-white border-slate-200/80 shadow-sm'
            }`}>
              <div>
                <span className="text-2xl font-black block tracking-tight">
                  {projectsData.length}
                </span>
                <span className={`text-[11px] font-mono uppercase ${
                  isDarkMode ? 'text-slate-500' : 'text-slate-400'
                }`}>
                  Total Systems
                </span>
              </div>
              <div className={`h-8 w-px ${isDarkMode ? 'bg-slate-800' : 'bg-slate-200'}`} />
              <div>
                <span className="text-2xl font-black block tracking-tight text-emerald-500">
                  100%
                </span>
                <span className={`text-[11px] font-mono uppercase ${
                  isDarkMode ? 'text-slate-500' : 'text-slate-400'
                }`}>
                  Deployed
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Filter Controls & Live Search Toolbar */}
        <div className={`p-3 rounded-2xl border flex flex-col md:flex-row items-center justify-between gap-4 backdrop-blur-md transition-all ${
          isDarkMode
            ? 'bg-slate-900/50 border-slate-800/80'
            : 'bg-white border-slate-200 shadow-sm'
        }`}>
          {/* Category Pill Switcher */}
          <div className="flex items-center gap-1.5 w-full md:w-auto overflow-x-auto pb-1 md:pb-0">
            {categories.map((cat) => {
              const isActive = activeTab === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveTab(cat)}
                  className={`relative px-4 py-2 rounded-xl text-xs font-semibold transition-all whitespace-nowrap cursor-pointer ${
                    isActive
                      ? 'text-white'
                      : isDarkMode
                      ? 'text-slate-400 hover:text-slate-200'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeCategoryIndicator"
                      className="absolute inset-0 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-xl shadow-md shadow-purple-600/20"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{cat}</span>
                </button>
              );
            })}
          </div>

          {/* Search Bar Input */}
          <div className="relative w-full md:w-72">
            <svg
              className={`w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 ${
                isDarkMode ? 'text-slate-500' : 'text-slate-400'
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>

            <input
              type="text"
              placeholder="Search by title or tech..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className={`w-full pl-10 pr-4 py-2 rounded-xl text-xs font-medium outline-none transition-all ${
                isDarkMode
                  ? 'bg-slate-950 border border-slate-800 text-slate-200 placeholder-slate-500 focus:border-purple-500/60'
                  : 'bg-slate-100 border border-slate-200 text-slate-800 placeholder-slate-400 focus:border-purple-400'
              }`}
            />

            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-200"
              >
                ✕
              </button>
            )}
          </div>
        </div>

        {/* Dynamic Project Grid Render */}
        <AnimatePresence mode="wait">
          {filteredProjects.length > 0 ? (
            <motion.div
              layout
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
            >
              {filteredProjects.map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} />
              ))}
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className={`py-16 text-center rounded-3xl border ${
                isDarkMode ? 'bg-slate-900/30 border-slate-800/80 text-slate-400' : 'bg-white border-slate-200 text-slate-600'
              }`}
            >
              <p className="text-sm font-semibold mb-1">No projects matched your criteria</p>
              <p className="text-xs text-slate-500 mb-4">Try clearing your search query or selecting a different filter.</p>
              <button
                onClick={() => {
                  setActiveTab('All');
                  setSearchQuery('');
                }}
                className="px-4 py-2 rounded-xl bg-purple-600 text-white text-xs font-semibold hover:bg-purple-500 transition-colors"
              >
                Reset Filters
              </button>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </div>
  );
}