// src/pages/ProjectsDetails.jsx
import React from 'react';
import { useParams, Link } from 'react-router';
import { useTheme } from '../context/ThemeContext';
import { projectsData } from '../data/projectsData';
import { ProjectLivePreview } from '../components/projects/ProjectLivePreview';

export default function ProjectDetails() {
  const { id } = useParams();
  const { isDarkMode } = useTheme();

  const project = projectsData.find(
    (p) => String(p.id) === String(id) || p.slug === id
  );

  if (!project) {
    return (
      <div className={`min-h-screen py-24 px-4 flex flex-col items-center justify-center text-center ${
        isDarkMode ? 'bg-[#0b0f19] text-slate-100' : 'bg-slate-50 text-slate-900'
      }`}>
        <h2 className="text-3xl font-bold mb-2">Project Not Found</h2>
        <p className="text-slate-400 mb-6 text-sm">
          The requested project record could not be loaded.
        </p>
        <Link
          to="/projects"
          className="px-5 py-2.5 bg-purple-600 hover:bg-purple-500 text-white text-xs font-semibold rounded-xl transition-colors"
        >
          ← Back to Directory
        </Link>
      </div>
    );
  }

  return (
    <div
      className={`min-h-screen transition-colors duration-300 font-sans ${
        isDarkMode ? 'bg-[#080c15] text-slate-100' : 'bg-slate-50 text-slate-900'
      }`}
    >
      {/* Background Gradient Spotlights */}
      <div className="relative overflow-hidden">
        <div
          className={`absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] rounded-full blur-[120px] pointer-events-none opacity-40 ${
            isDarkMode ? 'bg-purple-900/40' : 'bg-purple-200/60'
          }`}
        />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 sm:py-16 relative z-10 space-y-12">
          
          {/* Top Breadcrumb & Action Row */}
          <div className="flex items-center justify-between">
            <Link
              to="/projects"
              className={`inline-flex items-center gap-2 text-xs font-semibold transition-colors ${
                isDarkMode
                  ? 'text-slate-400 hover:text-purple-400'
                  : 'text-slate-600 hover:text-purple-700'
              }`}
            >
              <span>←</span> Return to Projects
            </Link>

            <div className="flex items-center gap-3">
              {project.githubLink && (
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noreferrer"
                  className={`px-4 py-2 rounded-xl text-xs font-semibold border transition-all inline-flex items-center gap-2 ${
                    isDarkMode
                      ? 'bg-slate-900/80 border-slate-800 text-slate-300 hover:border-slate-700'
                      : 'bg-white border-slate-300/80 text-slate-700 hover:border-slate-400 shadow-sm'
                  }`}
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                  </svg>
                  <span>Code</span>
                </a>
              )}

              {project.liveLink && (
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noreferrer"
                  className="px-5 py-2 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 text-white text-xs font-semibold shadow-lg shadow-purple-600/20 hover:opacity-95 transition-all inline-flex items-center gap-1.5"
                >
                  <span>Live App</span>
                  <span>↗</span>
                </a>
              )}
            </div>
          </div>

          {/* Hero Header Presentation */}
          <div className="space-y-4 max-w-4xl">
            <div className="flex items-center gap-3">
              <span className={`px-3 py-1 rounded-full text-xs font-semibold tracking-wide ${
                isDarkMode
                  ? 'bg-purple-500/15 text-purple-300 border border-purple-500/30'
                  : 'bg-purple-100 text-purple-800 border border-purple-200'
              }`}>
                {project.category}
              </span>
              <span className={`text-xs font-medium flex items-center gap-1.5 ${
                isDarkMode ? 'text-slate-400' : 'text-slate-500'
              }`}>
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                Active System
              </span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-black tracking-tight leading-tight">
              {project.title}
            </h1>

            <p className={`text-base sm:text-xl font-normal leading-relaxed ${
              isDarkMode ? 'text-slate-300' : 'text-slate-600'
            }`}>
              {project.subtitle || project.description}
            </p>
          </div>

          {/* Seamless Interactive Frame Workspace */}
          <ProjectLivePreview project={project} isDarkMode={isDarkMode} />

          {/* Content Breakdown Section */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 pt-6">
            
            {/* Detailed Description */}
            <div className="lg:col-span-2 space-y-6">
              <div className="space-y-3">
                <h2 className={`text-xs font-mono uppercase tracking-widest font-semibold ${
                  isDarkMode ? 'text-purple-400' : 'text-purple-700'
                }`}>
                  Overview & Design Goals
                </h2>
                <p className={`text-base leading-relaxed ${
                  isDarkMode ? 'text-slate-300' : 'text-slate-700'
                }`}>
                  {project.description}
                </p>
              </div>

              {/* Highlights List */}
              <div className="space-y-3 pt-4">
                <h3 className={`text-xs font-mono uppercase tracking-widest font-semibold ${
                  isDarkMode ? 'text-purple-400' : 'text-purple-700'
                }`}>
                  System Capabilities
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                  {[
                    'Cross-platform responsive layout',
                    'Real-time state & sync',
                    'Scalable, modular architecture',
                    'Production optimized performance'
                  ].map((feature, idx) => (
                    <div
                      key={idx}
                      className={`p-3.5 rounded-2xl transition-all flex items-center gap-3 ${
                        isDarkMode
                          ? 'bg-slate-900/50 text-slate-300 border border-slate-800/80'
                          : 'bg-white text-slate-800 border border-slate-200/80 shadow-sm'
                      }`}
                    >
                      <span className="w-2 h-2 rounded-full bg-purple-500 shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar Metadata */}
            <div className="space-y-6">
              {/* Tech Stack */}
              <div className={`p-6 rounded-3xl transition-all space-y-4 ${
                isDarkMode
                  ? 'bg-slate-900/60 border border-slate-800/80'
                  : 'bg-white border border-slate-200/80 shadow-sm'
              }`}>
                <h3 className={`text-xs font-mono uppercase tracking-widest font-semibold ${
                  isDarkMode ? 'text-slate-400' : 'text-slate-500'
                }`}>
                  Tech Stack
                </h3>

                <div className="flex flex-wrap gap-2">
                  {project.tags?.map((tag) => (
                    <span
                      key={tag}
                      className={`px-3 py-1.5 rounded-xl text-xs font-medium ${
                        isDarkMode
                          ? 'bg-slate-950 text-purple-300 border border-purple-500/20'
                          : 'bg-purple-50 text-purple-800 border border-purple-200/60'
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Quick Links Card */}
              <div className={`p-6 rounded-3xl transition-all space-y-3 ${
                isDarkMode
                  ? 'bg-slate-900/60 border border-slate-800/80'
                  : 'bg-white border border-slate-200/80 shadow-sm'
              }`}>
                <h3 className={`text-xs font-mono uppercase tracking-widest font-semibold ${
                  isDarkMode ? 'text-slate-400' : 'text-slate-500'
                }`}>
                  Quick Actions
                </h3>

                <div className="space-y-2">
                  {project.liveLink && (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noreferrer"
                      className={`w-full py-2.5 px-4 rounded-xl text-xs font-medium flex items-center justify-between transition-colors ${
                        isDarkMode
                          ? 'bg-slate-950 hover:bg-slate-800 text-slate-200'
                          : 'bg-slate-100 hover:bg-slate-200 text-slate-800'
                      }`}
                    >
                      <span>Launch App</span>
                      <span>↗</span>
                    </a>
                  )}

                  {project.githubLink && (
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noreferrer"
                      className={`w-full py-2.5 px-4 rounded-xl text-xs font-medium flex items-center justify-between transition-colors ${
                        isDarkMode
                          ? 'bg-slate-950 hover:bg-slate-800 text-slate-200'
                          : 'bg-slate-100 hover:bg-slate-200 text-slate-800'
                      }`}
                    >
                      <span>View Source</span>
                      <span>↗</span>
                    </a>
                  )}
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>
    </div>
  );
}