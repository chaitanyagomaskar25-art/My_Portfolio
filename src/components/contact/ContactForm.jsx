// src/components/contact/ContactForm.jsx
import React from 'react';
import { motion } from 'framer-motion';

export const ContactForm = ({ formData, setFormData, handleSubmit, isSubmitted, isDarkMode }) => {
  return (
    <div
      className={`rounded-xl border p-6 sm:p-8 backdrop-blur-md relative overflow-hidden group transition-all duration-300 flex flex-col justify-center h-full ${
        isDarkMode
          ? 'bg-slate-900/60 border-slate-800/80 hover:border-purple-500/30 shadow-xl shadow-purple-500/5'
          : 'bg-white border-slate-200/80 hover:border-purple-300 shadow-md'
      }`}
    >
      {/* Subtle Top Accent Line on Hover */}
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <form onSubmit={handleSubmit} className="flex flex-col gap-4 relative z-10">
        {/* Name Field */}
        <div>
          <label className={`block text-[11px] font-mono uppercase tracking-widest mb-1.5 ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
            // Your Identity
          </label>
          <input
            type="text"
            required
            placeholder="John Doe"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className={`w-full border rounded-lg px-4 py-2.5 text-xs sm:text-sm focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500/30 transition-all ${
              isDarkMode
                ? 'bg-slate-950/60 border-slate-800 text-slate-100 placeholder-slate-600'
                : 'bg-slate-50 border-slate-200 text-slate-900 placeholder-slate-400'
            }`}
          />
        </div>

        {/* Email Field */}
        <div>
          <label className={`block text-[11px] font-mono uppercase tracking-widest mb-1.5 ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
            // Inbox Coordinate
          </label>
          <input
            type="email"
            required
            placeholder="johndoe@example.com"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className={`w-full border rounded-lg px-4 py-2.5 text-xs sm:text-sm font-mono focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500/30 transition-all ${
              isDarkMode
                ? 'bg-slate-950/60 border-slate-800 text-slate-100 placeholder-slate-600'
                : 'bg-slate-50 border-slate-200 text-slate-900 placeholder-slate-400'
            }`}
          />
        </div>

        {/* Message Field */}
        <div>
          <label className={`block text-[11px] font-mono uppercase tracking-widest mb-1.5 ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
            // The Transmission
          </label>
          <textarea
            rows="4"
            required
            placeholder="Hello, I would love to collaborate on..."
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            className={`w-full border rounded-lg px-4 py-2.5 text-xs sm:text-sm focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500/30 transition-all resize-none ${
              isDarkMode
                ? 'bg-slate-950/60 border-slate-800 text-slate-100 placeholder-slate-600'
                : 'bg-slate-50 border-slate-200 text-slate-900 placeholder-slate-400'
            }`}
          />
        </div>

        {/* Submit Button */}
        <div className="pt-2">
          <motion.button
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            className={`w-full py-3.5 border font-mono uppercase tracking-widest rounded-xl text-xs font-semibold transition-all duration-300 flex items-center justify-center gap-2.5 group/btn cursor-pointer ${
              isDarkMode
                ? 'bg-purple-600 hover:bg-purple-500 border-purple-500/50 text-white shadow-lg shadow-purple-600/20'
                : 'bg-purple-600 hover:bg-purple-700 border-purple-600 text-white shadow-md shadow-purple-500/10'
            }`}
          >
            <span>Transmit Message</span>
            <svg
              className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </motion.button>
        </div>

        {/* Success Alert */}
        {isSubmitted && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className={`p-3 rounded-lg border text-xs font-mono text-center flex items-center justify-center gap-2 ${
              isDarkMode
                ? 'bg-purple-500/10 border-purple-500/30 text-purple-300'
                : 'bg-purple-50 border-purple-200 text-purple-800'
            }`}
          >
            <svg className="w-4 h-4 text-purple-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            </svg>
            <span>Message transmitted successfully. Talk soon!</span>
          </motion.div>
        )}
      </form>
    </div>
  );
};