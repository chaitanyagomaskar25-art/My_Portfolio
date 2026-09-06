import React, { useEffect, useRef, useState } from 'react';
import { useTheme } from '../../context/ThemeContext';
import { isWebGLAvailable } from '../../utils/webgl';
import { FallbackSwarm } from './FallbackSwarm';

export const VantaBackground = () => {
  const { isDarkMode } = useTheme();
  const vantaRef = useRef(null);
  const [vantaEffect, setVantaEffect] = useState(null);
  const [webGlFailed, setWebGlFailed] = useState(false);

  useEffect(() => {
    if (!isWebGLAvailable()) {
      setWebGlFailed(true);
      return;
    }

    let effect = null;
    try {
      if (window.VANTA && window.VANTA.BIRDS && !vantaEffect && vantaRef.current) {
        effect = window.VANTA.BIRDS({
          el: vantaRef.current,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 1.0,
          backgroundColor: isDarkMode ? 0x030712 : 0xf8fafc,
          color1: isDarkMode ? 0xa855f7 : 0x8b5cf6,
          color2: isDarkMode ? 0xec4899 : 0xd946ef,
          colorMode: 'variance',
          birdSize: 1.1,
          wingSpan: 24.0,
          speedLimit: 5.0,
          separation: 28.0,
          alignment: 30.0,
          cohesion: 30.0,
          quantity: 5.0,
        });
        setVantaEffect(effect);
      }
    } catch (error) {
      console.warn('WebGL context failed. Switching to 2D fallbacks.', error);
      setWebGlFailed(true);
    }

    return () => {
      if (effect) {
        try {
          effect.destroy();
        } catch (e) {}
      }
    };
  }, []);

  useEffect(() => {
    if (vantaEffect && !webGlFailed) {
      try {
        vantaEffect.setOptions({
          backgroundColor: isDarkMode ? 0x030712 : 0xf8fafc,
          color1: isDarkMode ? 0xa855f7 : 0x8b5cf6,
          color2: isDarkMode ? 0xec4899 : 0xd946ef,
        });
      } catch (e) {}
    }
  }, [isDarkMode, vantaEffect, webGlFailed]);

  if (webGlFailed) {
    return <FallbackSwarm />;
  }

  return <div ref={vantaRef} className="fixed inset-0 w-screen h-screen z-0 pointer-events-none" />;
};