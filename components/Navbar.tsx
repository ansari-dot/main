
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/Button';
import { PageID } from '../types';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '/logo.png';

interface NavbarProps {
  activeSection: string;
  onNavigate: (section: string) => void;
  isScrolled?: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection, onNavigate, isScrolled = false }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { label: 'Home', id: PageID.HOME },
    { label: 'About', id: PageID.ABOUT },
    { label: 'Services', id: PageID.SERVICES },
    { label: 'Portfolio', id: PageID.PORTFOLIO },
    { label: 'Contact', id: PageID.CONTACT },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${isScrolled ? 'py-1 mt-4' : 'py-4'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Desktop Navbar */}
        <div className={`hidden lg:flex mx-auto items-center justify-between px-10 rounded-3xl transition-all duration-500 ${isScrolled ? 'glass max-w-7xl shadow-realistic border-slate-200 py-2' : 'max-w-[90rem] bg-transparent backdrop-blur-0 shadow-none border-transparent py-8'} relative overflow-visible`}>
          <div className={`flex items-center gap-4 cursor-pointer group ${isScrolled ? '' : 'absolute left-10 top-1/2 -translate-y-1/2 z-10'}`} onClick={() => onNavigate(PageID.HOME)}>
            <motion.img 
              src={logo} 
              alt="3Novator Tech" 
              className="h-auto w-auto"
              animate={{
                height: isScrolled ? 60 : 160,
                width: isScrolled ? 60 : 160
              }}
              transition={{
                duration: 0.5,
                ease: "easeInOut"
              }}
              whileHover={{ scale: 1.1 }}
            />
          </div>

          <div className={`flex items-center gap-10 flex-1 ${isScrolled ? 'justify-center' : 'justify-start'}`} style={isScrolled ? {} : { paddingLeft: '256px' }}>
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`text-[10px] font-black uppercase tracking-[0.3em] transition-all relative group ${activeSection === item.id ? 'text-brand-blueMedium' : 'text-slate-400 hover:text-slate-900'}`}
              >
                {item.label}
                {activeSection === item.id && (
                  <motion.span 
                    layoutId="activeNav"
                    className="absolute -bottom-2 left-0 w-full h-1 bg-brand-greenMedium rounded-full"
                  />
                )}
              </button>
            ))}
          </div>

          <div>
            <Button size="sm" className="rounded-xl font-black text-[10px] px-8 py-3 uppercase tracking-[0.2em]" onClick={() => onNavigate(PageID.CONTACT)}>Get Started</Button>
          </div>
        </div>

        {/* Mobile Navbar */}
        <div className="flex lg:hidden items-center justify-between px-4 py-3 bg-white/95 backdrop-blur-md rounded-2xl shadow-lg border border-slate-200">
          <div className="flex items-center gap-3">
            <motion.img 
              src={logo} 
              alt="3Novator Tech" 
              className="h-12 w-12 sm:h-14 sm:w-14"
              whileHover={{ scale: 1.1 }}
              onClick={() => onNavigate(PageID.HOME)}
            />
            <span className="text-lg sm:text-xl font-black text-slate-900">3Novator</span>
          </div>

          <button 
            className="text-slate-900 p-2 rounded-xl hover:bg-slate-100 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: '-100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-100%' }}
            className="lg:hidden fixed top-20 left-0 right-0 z-40 bg-white border-b border-slate-200 shadow-xl"
          >
            <div className="container mx-auto px-4 py-6">
              <div className="flex flex-col space-y-4">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => {
                      onNavigate(item.id);
                      setIsMobileMenuOpen(false);
                    }}
                    className={`text-left px-4 py-3 rounded-xl font-semibold text-lg transition-all ${
                      activeSection === item.id 
                        ? 'bg-brand-blueMedium text-white' 
                        : 'text-slate-700 hover:bg-slate-100'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
                <Button 
                  className="w-full mt-4 py-4 rounded-xl font-bold text-lg" 
                  onClick={() => {
                    onNavigate(PageID.CONTACT);
                    setIsMobileMenuOpen(false);
                  }}
                >
                  Get Started
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
