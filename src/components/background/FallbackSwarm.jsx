import React, { useEffect, useRef } from 'react';
import { useTheme } from '../../context/ThemeContext';

export const FallbackSwarm = () => {
  const { isDarkMode } = useTheme();
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const particles = Array.from({ length: 30 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 1.5,
      vy: (Math.random() - 0.5) * 1.5,
      radius: Math.random() * 3 + 2,
    }));

    const render = () => {
      ctx.clearRect(0, 0, width, height);
      ctx.fillStyle = isDarkMode ? 'rgba(168, 85, 247, 0.5)' : 'rgba(147, 51, 234, 0.3)';

      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => cancelAnimationFrame(animationFrameId);
  }, [isDarkMode]);

  return <canvas ref={canvasRef} className="fixed inset-0 w-screen h-screen z-0 pointer-events-none" />;
};