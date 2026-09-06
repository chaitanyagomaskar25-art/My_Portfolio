import React, { useEffect, useRef } from 'react';
import { useTheme } from '../../context/ThemeContext';

export const ButterflyLayer = () => {
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

    const butterflyCount = 12;
    const butterflies = Array.from({ length: butterflyCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 1.8,
      vy: (Math.random() - 0.5) * 1.8,
      size: Math.random() * 10 + 12,
      wingAngle: Math.random() * Math.PI * 2,
      wingSpeed: 0.15 + Math.random() * 0.1,
      color: isDarkMode ? 'rgba(236, 72, 153, 0.85)' : 'rgba(147, 51, 234, 0.75)',
      glowColor: isDarkMode ? 'rgba(236, 72, 153, 0.4)' : 'rgba(168, 85, 247, 0.25)',
      trail: [],
    }));

    const drawButterfly = (b) => {
      ctx.save();
      ctx.translate(b.x, b.y);

      const heading = Math.atan2(b.vy, b.vx);
      ctx.rotate(heading + Math.PI / 2);

      const wingScaleX = Math.abs(Math.sin(b.wingAngle));

      ctx.shadowColor = b.glowColor;
      ctx.shadowBlur = 12;
      ctx.fillStyle = b.color;

      // Wings
      ctx.beginPath();
      ctx.ellipse(-b.size * 0.6 * wingScaleX, -b.size * 0.2, b.size * 0.7 * wingScaleX, b.size * 0.4, -Math.PI / 6, 0, Math.PI * 2);
      ctx.fill();

      ctx.beginPath();
      ctx.ellipse(b.size * 0.6 * wingScaleX, -b.size * 0.2, b.size * 0.7 * wingScaleX, b.size * 0.4, Math.PI / 6, 0, Math.PI * 2);
      ctx.fill();

      ctx.beginPath();
      ctx.ellipse(-b.size * 0.4 * wingScaleX, b.size * 0.3, b.size * 0.45 * wingScaleX, b.size * 0.3, Math.PI / 4, 0, Math.PI * 2);
      ctx.fill();

      ctx.beginPath();
      ctx.ellipse(b.size * 0.4 * wingScaleX, b.size * 0.3, b.size * 0.45 * wingScaleX, b.size * 0.3, -Math.PI / 4, 0, Math.PI * 2);
      ctx.fill();

      // Body
      ctx.shadowBlur = 0;
      ctx.fillStyle = isDarkMode ? '#ffffff' : '#475569';
      ctx.beginPath();
      ctx.ellipse(0, 0, b.size * 0.12, b.size * 0.5, 0, 0, Math.PI * 2);
      ctx.fill();

      ctx.restore();
    };

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      butterflies.forEach((b) => {
        b.vx += (Math.random() - 0.5) * 0.3;
        b.vy += (Math.random() - 0.5) * 0.3;

        const speed = Math.hypot(b.vx, b.vy);
        if (speed > 2.2) {
          b.vx = (b.vx / speed) * 2.2;
          b.vy = (b.vy / speed) * 2.2;
        }

        b.x += b.vx;
        b.y += b.vy;
        b.wingAngle += b.wingSpeed;

        if (b.x < -20) b.x = width + 20;
        if (b.x > width + 20) b.x = -20;
        if (b.y < -20) b.y = height + 20;
        if (b.y > height + 20) b.y = -20;

        b.trail.push({ x: b.x, y: b.y, alpha: 0.5 });
        if (b.trail.length > 8) b.trail.shift();

        b.trail.forEach((t) => {
          t.alpha -= 0.05;
          if (t.alpha > 0) {
            ctx.beginPath();
            ctx.arc(t.x, t.y, 1.8, 0, Math.PI * 2);
            ctx.fillStyle = isDarkMode
              ? `rgba(236, 72, 153, ${t.alpha})`
              : `rgba(168, 85, 247, ${t.alpha})`;
            ctx.fill();
          }
        });

        drawButterfly(b);
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, [isDarkMode]);

  return <canvas ref={canvasRef} className="fixed inset-0 w-screen h-screen z-2 pointer-events-none" />;
};