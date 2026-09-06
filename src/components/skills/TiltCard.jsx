import React, { useRef, useState } from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';

export const TiltCard = ({ children }) => {
  const { isDarkMode } = useTheme();
  const ref = useRef(null);
  const [opacity, setOpacity] = useState(0);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 15 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 15 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ['14deg', '-14deg']);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ['-14deg', '14deg']);

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    x.set(mouseX / width - 0.5);
    y.set(mouseY / height - 0.5);

    setPosition({ x: mouseX, y: mouseY });
  };

  const handleMouseEnter = () => setOpacity(1);
  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    setOpacity(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      whileHover={{ scale: 1.02 }}
      transition={{ type: 'spring', stiffness: 200, damping: 18 }}
      style={{
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d',
      }}
      className={`relative group p-6 rounded-2xl border transition-colors duration-300 overflow-hidden backdrop-blur-md h-full cursor-pointer ${
        isDarkMode
          ? 'bg-[#111827]/80 border-slate-800/80 hover:border-purple-500/50 hover:shadow-[0_20px_45px_-12px_rgba(168,85,247,0.3)]'
          : 'bg-white/80 border-purple-200/80 hover:border-purple-400 hover:shadow-[0_20px_35px_-10px_rgba(168,85,247,0.22)]'
      }`}
    >
      {/* Dynamic Cursor Light Spotlight */}
      <div
        className="pointer-events-none absolute -inset-px transition-opacity duration-300 rounded-2xl z-0"
        style={{
          opacity,
          background: `radial-gradient(400px circle at ${position.x}px ${position.y}px, ${
            isDarkMode ? 'rgba(168, 85, 247, 0.15)' : 'rgba(168, 85, 247, 0.2)'
          }, transparent 80%)`,
        }}
      />

      {/* Content Layer */}
      <div style={{ transform: 'translateZ(40px)' }} className="relative z-10 flex flex-col h-full">
        {children}
      </div>
    </motion.div>
  );
};