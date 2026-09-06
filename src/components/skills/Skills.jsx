import React from 'react';
import { motion } from 'framer-motion';
import { TiltCard } from './TiltCard';
import { technicalSkills, softSkills } from "../../data/skillsData";
import { useTheme } from '../../context/ThemeContext';

export const Skills = () => {
  const { isDarkMode } = useTheme();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.1 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { type: 'spring', stiffness: 80, damping: 14 },
    },
  };

  return (
    <section
      id="skills"
      className={`py-20 md:py-28 px-4 sm:px-6 w-full relative z-10 select-none overflow-hidden transition-colors duration-500 ${
        isDarkMode ? ' text-gray-100' : 'bg-transparent text-slate-900'
      }`}
    >
      <div className="max-w-7xl mx-auto w-full">
        {/* Animated Title */}
        <div className="mb-16 md:mb-20 text-center">
          <motion.h2
            initial={{ opacity: 0, y: -20, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ type: 'spring', stiffness: 100, damping: 15 }}
            className={`text-4xl sm:text-6xl md:text-7xl font-black uppercase tracking-wider text-transparent bg-clip-text bg-linear-to-r ${
              isDarkMode
                ? 'from-purple-400 via-fuchsia-400 to-pink-400 drop-shadow-[0_2px_10px_rgba(168,85,247,0.3)]'
                : 'from-purple-700 via-fuchsia-600 to-pink-600 drop-shadow-sm'
            }`}
          >
            Capabilities
          </motion.h2>
          
          <div className="flex justify-center items-center mt-3 gap-1">
            <span className="w-2.5 h-2.5 bg-purple-500 rounded-full animate-ping" />
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: 96 }}
              viewport={{ once: false }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className={`h-0.5 bg-linear-to-r ${
                isDarkMode
                  ? 'from-transparent via-purple-500 to-transparent'
                  : 'from-transparent via-purple-600 to-transparent'
              }`}
            />
          </div>
        </div>

        {/* Technical Skills Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          className="lg:max-w-[75%] xl:max-w-[65%] mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 mb-16 md:mb-20"
        >
          {technicalSkills.map((tech, index) => (
            <motion.div key={index} variants={cardVariants} className="perspective-1000">
              <TiltCard>
                <div className="flex flex-col h-full justify-between">
                  <div>
                    <div className="flex items-center gap-3 mb-5">
                      <motion.span 
                        className="text-2xl"
                        whileHover={{ scale: 1.3, rotate: 15 }}
                        transition={{ type: 'spring', stiffness: 300 }}
                      >
                        {tech.icon}
                      </motion.span>
                      <h3
                        className={`font-bold text-xl tracking-tight transition-colors duration-200 ${
                          isDarkMode
                            ? 'text-gray-100 group-hover:text-white'
                            : 'text-slate-800 group-hover:text-purple-900'
                        }`}
                      >
                        {tech.category}
                      </h3>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {tech.items.map((item, i) => (
                        <motion.span
                          key={i}
                          whileHover={{ scale: 1.08, y: -2 }}
                          transition={{ type: 'spring', stiffness: 300, damping: 10 }}
                          className={`px-3 py-1.5 text-xs font-mono rounded-lg border transition-all duration-200 cursor-default ${
                            tech.isLearning
                              ? isDarkMode
                                ? 'bg-slate-900/60 border-slate-800 text-slate-400 italic hover:border-purple-500/40'
                                : 'bg-purple-50/60 border-purple-200/60 text-purple-700/80 italic hover:border-purple-300'
                              : isDarkMode
                              ? 'bg-slate-800/60 border-slate-700/80 text-gray-300 hover:border-purple-500/50 hover:text-purple-200 hover:bg-slate-800'
                              : 'bg-purple-50 border-purple-200/80 text-purple-900 hover:border-purple-300 hover:bg-purple-100'
                          }`}
                        >
                          {item}
                        </motion.span>
                      ))}
                    </div>
                  </div>

                  {tech.isLearning && (
                    <div className="mt-auto pt-2">
                      <motion.div
                        className={`inline-flex items-center gap-2 text-xs uppercase tracking-widest px-3 py-1 rounded-full font-mono border ${
                          isDarkMode
                            ? 'text-purple-300 bg-purple-950/40 border-purple-800/60'
                            : 'text-purple-800 bg-purple-100/80 border-purple-300/80'
                        }`}
                        animate={{
                          boxShadow: isDarkMode
                            ? ['0 0 0px #a855f700', '0 0 14px #a855f760', '0 0 0px #a855f700']
                            : ['0 0 0px #a855f700', '0 0 12px #a855f740', '0 0 0px #a855f700'],
                        }}
                        transition={{ repeat: Infinity, duration: 2.2, ease: 'easeInOut' }}
                      >
                        <span className="relative flex h-2 w-2">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
                        </span>
                        Exploring
                      </motion.div>
                    </div>
                  )}
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </motion.div>

        {/* Soft Skills Floating Cloud */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.8, type: 'spring', damping: 18 }}
          className={`lg:max-w-[75%] xl:max-w-[65%] mx-auto border rounded-3xl p-6 sm:p-10 backdrop-blur-md shadow-xl transition-colors duration-500 ${
            isDarkMode
              ? 'bg-[#111827]/60 border-slate-800/80 shadow-purple-950/20'
              : 'bg-white/70 border-purple-200/80 shadow-purple-500/10'
          }`}
        >
          <h3
            className={`text-xs font-mono uppercase tracking-widest mb-8 text-center md:text-left ${
              isDarkMode ? 'text-purple-400' : 'text-purple-700 font-semibold'
            }`}
          >
            // Professional Attributes
          </h3>

          <div className="flex flex-wrap gap-3 sm:gap-4 justify-center">
            {softSkills.map((skill, index) => (
              <motion.div
                key={index}
                className="relative cursor-pointer group"
                initial={{ opacity: 0, scale: 0.7 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: false }}
                transition={{ delay: index * 0.04, type: 'spring', stiffness: 200 }}
                whileHover={{ y: -6, scale: 1.06 }}
                whileTap={{ scale: 0.94 }}
              >
                <div
                  className={`absolute inset-0 rounded-2xl blur-md opacity-0 transition-opacity duration-300 group-hover:opacity-60 ${
                    isDarkMode ? 'bg-purple-500' : 'bg-purple-400'
                  }`}
                />
                <div
                  className={`relative px-5 sm:px-6 py-2.5 sm:py-3 font-semibold rounded-2xl text-xs sm:text-sm border transition-all duration-300 ease-out ${
                    isDarkMode
                      ? 'bg-slate-900/90 text-gray-200 border-slate-700/80 hover:bg-linear-to-r hover:from-purple-500 hover:to-pink-500 hover:text-white hover:border-transparent hover:shadow-[0_0_20px_rgba(168,85,247,0.4)]'
                      : 'bg-white text-slate-800 border-purple-200 hover:bg-linear-to-r hover:from-purple-600 hover:to-pink-600 hover:text-white hover:border-transparent hover:shadow-[0_0_20px_rgba(168,85,247,0.25)]'
                  }`}
                >
                  {skill}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};