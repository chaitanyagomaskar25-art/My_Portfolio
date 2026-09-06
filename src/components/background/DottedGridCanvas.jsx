import React, { useEffect, useRef } from 'react';
import { useTheme } from '../../context/ThemeContext';

export const DottedGridCanvas = () => {
  const { isDarkMode } = useTheme();
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    const mouse = { x: -1000, y: -1000, radius: 180 };
    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };
    window.addEventListener('mousemove', handleMouseMove);

    const gap = 34;
    const dots = [];

    for (let x = 0; x < width; x += gap) {
      for (let y = 0; y < height; y += gap) {
        dots.push({ x, y, baseX: x, baseY: y });
      }
    }

    const render = () => {
      ctx.clearRect(0, 0, width, height);
      const dotColor = isDarkMode ? 'rgba(168, 85, 247, 0.2)' : 'rgba(168, 85, 247, 0.18)';
      const activeDotColor = isDarkMode ? '#ec4899' : '#9333ea';

      dots.forEach((dot) => {
        const dx = mouse.x - dot.baseX;
        const dy = mouse.y - dot.baseY;
        const dist = Math.sqrt(dx * dx + dy * dy);

        let targetX = dot.baseX;
        let targetY = dot.baseY;

        if (dist < mouse.radius) {
          const force = (mouse.radius - dist) / mouse.radius;
          const angle = Math.atan2(dy, dx);
          targetX -= Math.cos(angle) * force * 24;
          targetY -= Math.sin(angle) * force * 24;
        }

        dot.x += (targetX - dot.x) * 0.1;
        dot.y += (targetY - dot.y) * 0.1;

        ctx.beginPath();
        const isHovered = dist < mouse.radius;
        ctx.arc(dot.x, dot.y, isHovered ? 2.5 : 1.2, 0, Math.PI * 2);
        ctx.fillStyle = isHovered ? activeDotColor : dotColor;
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [isDarkMode]);

  return <canvas ref={canvasRef} className="fixed inset-0 w-screen h-screen z-1 pointer-events-none" />;
};