// src/components/projects/ProjectLivePreview.jsx
import React, { useState } from 'react';

export const ProjectLivePreview = ({ project, isDarkMode }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [iframeError, setIframeError] = useState(false);
  const [viewport, setViewport] = useState('desktop');

  const getViewportWidth = () => {
    switch (viewport) {
      case 'mobile':
        return 'max-w-[380px]';
      case 'tablet':
        return 'max-w-[768px]';
      default:
        return 'max-w-full';
    }
  };

  return (
    <div className="w-full space-y-4 my-8">
      {/* Floating Control Toolbar */}
      <div className="flex flex-wrap items-center justify-between gap-3 px-2">
        {/* Device Mode Selector */}
        <div
          className={`inline-flex items-center p-1 rounded-2xl transition-all ${
            isDarkMode
              ? 'bg-slate-900/90 text-slate-400 border border-slate-800/80 shadow-inner'
              : 'bg-slate-200/70 text-slate-600 border border-slate-300/50 shadow-inner'
          }`}
        >
          <button
            onClick={() => setViewport('desktop')}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-medium transition-all flex items-center gap-1.5 ${
              viewport === 'desktop'
                ? isDarkMode
                  ? 'bg-purple-600 text-white shadow-md shadow-purple-900/40'
                  : 'bg-white text-purple-700 shadow-md shadow-slate-300'
                : 'hover:text-purple-500'
            }`}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <span className="hidden sm:inline">Desktop</span>
          </button>

          <button
            onClick={() => setViewport('tablet')}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-medium transition-all flex items-center gap-1.5 ${
              viewport === 'tablet'
                ? isDarkMode
                  ? 'bg-purple-600 text-white shadow-md shadow-purple-900/40'
                  : 'bg-white text-purple-700 shadow-md shadow-slate-300'
                : 'hover:text-purple-500'
            }`}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
            </svg>
            <span className="hidden sm:inline">Tablet</span>
          </button>

          <button
            onClick={() => setViewport('mobile')}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-medium transition-all flex items-center gap-1.5 ${
              viewport === 'mobile'
                ? isDarkMode
                  ? 'bg-purple-600 text-white shadow-md shadow-purple-900/40'
                  : 'bg-white text-purple-700 shadow-md shadow-slate-300'
                : 'hover:text-purple-500'
            }`}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
            </svg>
            <span className="hidden sm:inline">Mobile</span>
          </button>
        </div>

        {/* Live URL Display */}
        <div className="flex items-center gap-3">
          <span className={`text-xs font-mono hidden md:inline-flex items-center gap-2 px-3 py-1.5 rounded-xl ${
            isDarkMode ? 'bg-slate-900/80 text-slate-400' : 'bg-slate-200/60 text-slate-600'
          }`}>
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="truncate max-w-xs">{project.liveLink}</span>
          </span>

          <a
            href={project.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className={`text-xs font-semibold px-4 py-2 rounded-xl transition-all inline-flex items-center gap-1.5 ${
              isDarkMode
                ? 'bg-purple-500/10 hover:bg-purple-500/20 text-purple-400'
                : 'bg-purple-50 hover:bg-purple-100 text-purple-700'
            }`}
          >
            <span>Open Tab</span>
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      </div>

      {/* Main Preview Container */}
      <div
        className={`mx-auto transition-all duration-500 rounded-3xl overflow-hidden ${getViewportWidth()} ${
          isDarkMode
            ? 'bg-slate-900 border border-slate-800 shadow-2xl shadow-purple-950/30'
            : 'bg-white border border-slate-200/80 shadow-2xl shadow-slate-300/50'
        }`}
      >
        {/* Sleek Native Top Bar */}
        <div
          className={`flex items-center justify-between px-5 py-3 border-b text-xs select-none ${
            isDarkMode
              ? 'bg-slate-950/60 border-slate-800/80 text-slate-400'
              : 'bg-slate-100/80 border-slate-200/80 text-slate-500'
          }`}
        >
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
            <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
            <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
          </div>

          <span className="font-mono text-[11px] font-medium tracking-wide">
            Interactive Live Application Frame
          </span>

          <span className="text-[10px] font-mono capitalize px-2 py-0.5 rounded bg-purple-500/10 text-purple-400 font-semibold">
            {viewport}
          </span>
        </div>

        {/* Viewport Canvas */}
        <div className="relative w-full h-[500px] sm:h-[620px] bg-slate-950">
          {isLoading && !iframeError && (
            <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-slate-950/90 text-slate-400 font-mono text-xs gap-3">
              <div className="w-8 h-8 border-2 border-purple-500/30 border-t-purple-500 rounded-full animate-spin" />
              <span>Connecting live application...</span>
            </div>
          )}

          {iframeError ? (
            <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center bg-slate-950 text-slate-300">
              {project.image && (
                <img
                  src={project.image}
                  alt={project.title}
                  className="absolute inset-0 w-full h-full object-cover opacity-20 blur-md"
                />
              )}
              <div className="relative z-10 max-w-md flex flex-col items-center gap-4">
                <p className="text-sm text-slate-400 leading-relaxed font-sans">
                  This site restricts iframe embedding for security. You can interact with the live application directly:
                </p>
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-2xl bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-medium text-xs shadow-lg shadow-purple-600/30 hover:opacity-95 transition-all"
                >
                  Launch App in New Window ↗
                </a>
              </div>
            </div>
          ) : (
            <iframe
              src={project.liveLink}
              title={`${project.title} Live Preview`}
              className="w-full h-full border-0 select-auto"
              onLoad={() => setIsLoading(false)}
              onError={() => {
                setIsLoading(false);
                setIframeError(true);
              }}
              sandbox="allow-scripts allow-same-origin allow-popups allow-forms"
            />
          )}
        </div>
      </div>
    </div>
  );
};