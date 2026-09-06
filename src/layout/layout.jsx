// src/layouts/Layout.jsx
import React from 'react';
import { Outlet } from 'react-router';
import Navbar from './Navbar';
import Footer from '../components/footer/Footer';
import { useTheme } from '../context/ThemeContext';
import { GlowingCursor } from "../components/background/GlowingCursor";
import { VantaBackground } from "../components/background/VantaBackground";
import { DottedGridCanvas } from "../components/background/DottedGridCanvas";
import { ButterflyLayer } from "../components/background/ButterFlyLayer";
const Layout = () => {
  const { isDarkMode } = useTheme();

  return (
    <div
      className={`min-h-screen w-full max-w-full overflow-x-clip font-sans antialiased flex flex-col transition-colors duration-500 ${
        isDarkMode ? 'bg-[#030712] text-slate-100' : 'bg-slate-50 text-slate-900'
      }`}
    >
      <GlowingCursor />
      <VantaBackground />
      <ButterflyLayer />
      <DottedGridCanvas />

    
      <Navbar />

      {/* Main Container - Offsets fixed navbar & forces strict width */}
      <main className="grow pt-20 sm:pt-24 w-full max-w-full overflow-x-clip">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default Layout;