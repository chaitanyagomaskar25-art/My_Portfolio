import React, { useEffect, useRef } from 'react';
import { Sun, Moon, ArrowUpRight, Sparkles, Terminal, GitBranch } from 'lucide-react';
import gsap from 'gsap';
import { useTheme } from '../context/ThemeContext';

const About = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  const containerRef = useRef(null);
  const badgeRef = useRef(null);
  const titleRef = useRef(null);
  const bioRef = useRef(null);
  const buttonsRef = useRef(null);
  const avatarRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out', duration: 1 } });

      tl.fromTo(badgeRef.current, { opacity: 0, y: -20 }, { opacity: 1, y: 0 })
        .fromTo(titleRef.current, { opacity: 0, y: 30 }, { opacity: 1, y: 0 }, '-=0.6')
        .fromTo(bioRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0 }, '-=0.6')
        .fromTo(buttonsRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0 }, '-=0.6')
        .fromTo(avatarRef.current, { opacity: 0, scale: 0.8 }, { opacity: 1, scale: 1 }, '-=0.8');
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className={`min-h-screen pt-20 w-full font-sans overflow-x-hidden relative transition-colors duration-500 sm:cursor-none select-none ${
        isDarkMode
          ? ' text-white'
          : 'bg-linear-to-b from-slate-50 via-purple-50/20 to-pink-50/20 text-slate-900'
      }`}
    >
      <style>{`
        * {
          scrollbar-width: thin;
          scrollbar-color: ${isDarkMode ? '#a855f7 #030712' : '#c084fc #f8fafc'};
        }
        ::-webkit-scrollbar {
          width: 10px;
        }
        ::-webkit-scrollbar-track {
          background: ${isDarkMode ? '#030712' : '#f8fafc'};
        }
        ::-webkit-scrollbar-thumb {
          background: ${
            isDarkMode
              ? 'linear-linear(180deg, #a855f7 0%, #ec4899 100%)'
              : 'linear-linear(180deg, #c084fc 0%, #e879f9 100%)'
          };
          border-radius: 9999px;
          border: 2px solid ${isDarkMode ? '#030712' : '#f8fafc'};
        }
        ::-webkit-scrollbar-thumb:hover {
          background: ${
            isDarkMode
              ? 'linear-linear(180deg, #c084fc 0%, #f472b6 100%)'
              : 'linear-linear(180deg, #a855f7 0%, #d946ef 100%)'
          };
        }
      `}</style>

      

      {/* Hero Content */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 pt-24 sm:pt-28 md:pt-32 pb-12 md:pb-20 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center relative z-10">
        <div className="flex flex-col justify-center text-center md:text-left order-2 md:order-1">
          <div ref={badgeRef} className="flex justify-center md:justify-start mb-3 sm:mb-4">
            <span
              className={`inline-flex items-center gap-2 text-[11px] sm:text-xs font-mono font-semibold uppercase tracking-[0.15em] sm:tracking-[0.2em] px-3.5 py-1.5 rounded-lg border backdrop-blur-md transition-colors duration-500 ${
                isDarkMode
                  ? 'bg-purple-950/50 border-purple-500/30 text-purple-300'
                  : 'bg-purple-100/70 border-purple-200 text-purple-800'
              }`}
            >
              <Terminal size={13} /> Welcome to my space
            </span>
          </div>

          <h1
            ref={titleRef}
            className={`text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight mb-4 sm:mb-6 leading-[1.15] transition-colors duration-500 ${
              isDarkMode ? 'text-white' : 'text-slate-900'
            }`}
          >
            Hii, I'm{' '}
            <span
              className={`bg-clip-text text-transparent bg-linear-to-r ${
                isDarkMode
                  ? 'from-purple-400 via-fuchsia-400 to-pink-400'
                  : 'from-purple-700 via-fuchsia-600 to-pink-600'
              }`}
            >
              Chaitanya Gomaskar
            </span>
          </h1>

          <p
            ref={bioRef}
            className={`text-sm sm:text-base lg:text-lg max-w-xl mb-6 sm:mb-8 leading-relaxed font-normal transition-colors duration-500 mx-auto md:mx-0 ${
              isDarkMode ? 'text-slate-300' : 'text-slate-700'
            }`}
          >
            I build highly interactive, sleek, and responsive full-stack web applications.
            Focused on creating exceptional digital experiences that combine clean code
            with stunning visual aesthetics.
          </p>

          <div ref={buttonsRef} className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 justify-center md:justify-start items-center">
            <a
              href="#skills"
              className={`w-full sm:w-auto group relative inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3 sm:py-3.5 font-bold rounded-xl text-sm transition-all duration-300 hover:-translate-y-0.5 sm:cursor-none ${
                isDarkMode
                  ? 'bg-linear-to-r from-purple-500 to-pink-500 text-white shadow-[0_0_25px_rgba(168,85,247,0.3)] hover:shadow-[0_0_35px_rgba(168,85,247,0.5)]'
                  : 'bg-linear-to-r from-purple-600 via-fuchsia-600 to-pink-600 text-white shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40'
              }`}
            >
              <Sparkles size={16} />
              <span>Explore Capabilities</span>
              <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>

            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className={`w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3 sm:py-3.5 border font-semibold rounded-xl text-sm transition-all duration-300 hover:-translate-y-0.5 sm:cursor-none ${
                isDarkMode
                  ? 'bg-slate-900/80 border-slate-700 hover:border-slate-500 text-slate-200 hover:text-white backdrop-blur-md'
                  : 'bg-white/80 border-purple-200/80 hover:border-purple-300 text-slate-800 hover:text-purple-700 shadow-sm shadow-purple-200/50 backdrop-blur-md'
              }`}
            >
              <GitBranch size={16} />
              <span>View GitHub</span>
            </a>
          </div>
        </div>

        {/* Responsive Avatar */}
        <div ref={avatarRef} className="flex justify-center items-center order-1 md:order-2 my-2 sm:my-0">
          <div className="relative group w-52 h-52 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-92 lg:h-92">
            <div
              className={`absolute -inset-2 rounded-full bg-linear-to-tr from-purple-500 via-fuchsia-500 to-pink-500 blur-2xl group-hover:opacity-70 transition-all duration-700 animate-pulse ${
                isDarkMode ? 'opacity-40' : 'opacity-25'
              }`}
            />
            <div
              className={`absolute -inset-2.5 sm:-inset-3 rounded-full border border-dashed animate-[spin_20s_linear_infinite] pointer-events-none ${
                isDarkMode ? 'border-purple-400/40' : 'border-purple-500/40'
              }`}
            />
            <div
              className={`relative w-full h-full rounded-full p-2.5 sm:p-3.5 border backdrop-blur-xl transition-all duration-500 ${
                isDarkMode
                  ? 'bg-slate-900/60 border-white/20 shadow-2xl shadow-purple-950/50'
                  : 'bg-white/70 border-purple-200/80 shadow-2xl shadow-purple-500/15'
              }`}
            >
              <div
                className={`w-full h-full rounded-full overflow-hidden relative border transition-colors duration-500 ${
                  isDarkMode ? 'bg-slate-950 border-slate-800' : 'bg-purple-50/50 border-purple-100'
                }`}
              >
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdEnoGeUZaDMLqixFd0DwYoC1W56zUsfRsDdji8XiIVA&s=10"
                  alt="Chaitanya Gomaskar"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out grayscale group-hover:grayscale-0"
                />
                <div
                  className={`absolute inset-0 pointer-events-none transition-opacity duration-500 ${
                    isDarkMode
                      ? 'bg-linear-to-t from-slate-950/80 via-transparent to-transparent'
                      : 'bg-linear-to-t from-purple-900/10 via-transparent to-transparent'
                  }`}
                />
              </div>
            </div>

            <div
              className={`absolute -bottom-2 left-1/2 -translate-x-1/2 px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full border backdrop-blur-md shadow-xl flex items-center gap-2 text-[11px] sm:text-xs font-semibold whitespace-nowrap transition-colors duration-500 ${
                isDarkMode
                  ? 'bg-slate-900/90 border-slate-700 text-slate-100'
                  : 'bg-white/90 border-purple-200 text-purple-900 shadow-purple-500/10'
              }`}
            >
              <div className="w-2 h-2 rounded-full bg-purple-500 animate-pulse" />
              Full-Stack Developer
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About 