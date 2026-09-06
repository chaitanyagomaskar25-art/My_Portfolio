import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { useTheme } from '../../context/ThemeContext';

export const GlowingCursor = () => {
  const { isDarkMode } = useTheme();
  const dotRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    const onMouseMove = (e) => {
      gsap.to(dot, { x: e.clientX, y: e.clientY, duration: 0.1, ease: 'power2.out' });
      gsap.to(ring, { x: e.clientX, y: e.clientY, duration: 0.35, ease: 'power3.out' });
    };

    window.addEventListener('mousemove', onMouseMove);
    return () => window.removeEventListener('mousemove', onMouseMove);
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden hidden sm:block">
      <div
        ref={ringRef}
        className={`fixed top-0 left-0 w-10 h-10 -mt-5 -ml-5 rounded-full border-2 transition-colors duration-300 ${
          isDarkMode
            ? 'border-purple-400/80 bg-purple-400/10 shadow-[0_0_20px_rgba(168,85,247,0.5)]'
            : 'border-purple-600/60 bg-purple-500/10 shadow-[0_0_20px_rgba(168,85,247,0.25)]'
        }`}
      />
      <div
        ref={dotRef}
        className={`fixed top-0 left-0 w-3 h-3 -mt-1.5 -ml-1.5 rounded-full transition-colors duration-300 ${
          isDarkMode ? 'bg-purple-300 shadow-[0_0_10px_#a855f7]' : 'bg-purple-600 shadow-[0_0_10px_#9333ea]'
        }`}
      />
    </div>
  );
};