import React from 'react';
import { motion } from 'framer-motion';

export const ContactForm = ({ formData, setFormData, handleSubmit, isSubmitted, isDarkMode }) => {
  return (
    <div
      className={`rounded-2xl border p-6 sm:p-8 backdrop-blur-md relative overflow-hidden group hover:border-cyan-500/30 transition-all duration-500 flex flex-col justify-center ${
        isDarkMode
          ? 'bg-[#0d1527]/80 border-gray-800/80'
          : 'bg-white/80 border-cyan-100 shadow-sm'
      }`}
    >
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-linear-to-r from-transparent via-cyan-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <form onSubmit={handleSubmit} className="flex flex-col gap-4 relative z-10 select-text">
        <div>
          <label className={`block text-[11px] font-mono uppercase tracking-widest mb-1.5 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            // Your Identity
          </label>
          <input
            type="text"
            required
            placeholder="John Doe"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className={`w-full border rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/20 transition-all ${
              isDarkMode
                ? 'bg-[#131a2a]/60 border-gray-800/80 text-gray-200 placeholder-gray-600'
                : 'bg-slate-50 border-cyan-200 text-gray-900 placeholder-gray-400'
            }`}
          />
        </div>

        <div>
          <label className={`block text-[11px] font-mono uppercase tracking-widest mb-1.5 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            // Inbox Coordinate
          </label>
          <input
            type="email"
            required
            placeholder="johndoe@example.com"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className={`w-full border rounded-xl px-4 py-2.5 text-sm font-mono focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/20 transition-all ${
              isDarkMode
                ? 'bg-[#131a2a]/60 border-gray-800/80 text-gray-200 placeholder-gray-600'
                : 'bg-slate-50 border-cyan-200 text-gray-900 placeholder-gray-400'
            }`}
          />
        </div>

        <div>
          <label className={`block text-[11px] font-mono uppercase tracking-widest mb-1.5 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            // The Transmission
          </label>
          <textarea
            rows="3"
            required
            placeholder="Hello, I would love to collaborate on..."
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            className={`w-full border rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/20 transition-all resize-none ${
              isDarkMode
                ? 'bg-[#131a2a]/60 border-gray-800/80 text-gray-200 placeholder-gray-600'
                : 'bg-slate-50 border-cyan-200 text-gray-900 placeholder-gray-400'
            }`}
          />
        </div>

        <div className="pt-2">
          <motion.button
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            className={`w-full py-3.5 border font-mono uppercase tracking-widest rounded-xl text-xs font-bold transition-all duration-300 shadow-xl flex items-center justify-center gap-2 group/btn cursor-pointer ${
              isDarkMode
                ? 'bg-gray-950 border-gray-800 hover:border-cyan-500/60 text-gray-200 hover:text-cyan-400'
                : 'bg-slate-900 border-slate-700 hover:border-cyan-600 text-white hover:text-cyan-300'
            }`}
          >
            <span>Transmit Message</span>
            <span className="text-sm transition-transform duration-300 group-hover/btn:translate-x-1">→</span>
          </motion.button>
        </div>

        {isSubmitted && (
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-xs font-mono text-cyan-400 mt-2 text-center"
          >
            ✓ Message transmitted successfully. Talk soon!
          </motion.p>
        )}
      </form>
    </div>
  );
};