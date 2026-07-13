import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

export default function Header({ onOpenModal, activeSection, onChangePage }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Monitor page scroll coordinates to trigger blurry sticky header effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigate = (id) => {
    setMobileMenuOpen(false);
    if (onChangePage) {
      onChangePage(id);
    }
    // Smooth scroll to top when changing tab so starting point is perfect
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const navItems = [
    { label: 'Home', id: 'home' },
    { label: 'Projects', id: 'projects' },
    { label: 'Skills', id: 'skills' },
    { label: 'Contact', id: 'contact' }
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled || activeSection !== 'home'
            ? 'bg-white/80 backdrop-blur-md shadow-sm border-b border-neutral-100 py-3'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          
          {/* Logo */}
          <button
            id="nav-logo"
            onClick={() => handleNavigate('home')}
            className="flex items-center text-xl sm:text-2xl font-display font-black tracking-tighter text-neutral-900 cursor-pointer focus:outline-none"
          >
             HARSHA<span className="text-[#FF6000]">.</span>K<span className="text-[#FF6000]">.</span>P
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1.5 bg-neutral-50/80 border border-neutral-100 rounded-full px-1.5 py-1 shadow-inner">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  id={`nav-link-${item.id}`}
                  onClick={() => handleNavigate(item.id)}
                  className={`relative px-4 py-1.5 rounded-full text-xs font-semibold cursor-pointer transition-all duration-200 outline-none ${
                    isActive ? 'text-neutral-900' : 'text-neutral-500 hover:text-neutral-900'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeNavBackground"
                      className="absolute inset-0 bg-white border border-neutral-200/60 rounded-full shadow-sm"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{item.label}</span>
                </button>
              );
            })}
          </nav>

          {/* Action Button & Menu Icon */}
          <div className="flex items-center gap-3">
            <button
              id="header-hire-me"
              onClick={() => onOpenModal('contact')}
              className="hidden sm:inline-flex items-center gap-1.5 bg-[#FF6000] text-white hover:bg-orange-700 font-display font-bold text-xs tracking-wide px-5 py-2.5 rounded-xl border border-[#FF6000] hover:border-orange-750 transition-all duration-205 shadow-md shadow-orange-500/10 active:scale-98 cursor-pointer"
            >
              Let's connect
              <ArrowUpRight className="h-3.5 w-3.5" />
            </button>

            {/* Mobile Hamburger toggle */}
            <button
              id="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(true)}
              className="md:hidden flex h-10 w-10 items-center justify-center rounded-xl border border-neutral-200 bg-white text-neutral-600 hover:text-neutral-900 shadow-sm"
            >
              <Menu className="h-4.5 w-4.5" />
            </button>
          </div>

        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <div className="fixed inset-0 z-50 md:hidden flex justify-end">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="absolute inset-0 bg-neutral-950/40 backdrop-blur-sm"
            />

            {/* Sliding Panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="relative w-72 h-full bg-white shadow-2xl p-6 flex flex-col justify-between border-l border-neutral-100"
            >
              <div>
                {/* Mobile Drawer Header */}
                <div className="flex items-center justify-between pb-6 border-b border-neutral-100">
                  <span className="text-lg font-display font-black tracking-tighter text-neutral-900">
                    HARSHA<span className="text-[#FF6000]">.</span>K P
                  </span>
                  <button
                    id="mobile-menu-close"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex h-8 w-8 items-center justify-center rounded-full border border-neutral-150 text-neutral-400 hover:text-neutral-800"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </div>

                {/* Mobile Nav Links */}
                <nav className="flex flex-col gap-2 pt-6">
                  {navItems.map((item) => {
                    const isActive = activeSection === item.id;
                    return (
                      <button
                        key={item.id}
                        onClick={() => handleNavigate(item.id)}
                        className={`w-full text-left px-4 py-3 rounded-xl text-sm font-bold flex items-center justify-between border ${
                          isActive
                            ? 'bg-neutral-50 text-neutral-900 border-neutral-200/80 shadow-sm'
                            : 'text-neutral-500 border-transparent hover:bg-neutral-25'
                        }`}
                      >
                        <span>{item.label}</span>
                        {isActive && <div className="h-1.5 w-1.5 rounded-full bg-[#FF6000]" />}
                      </button>
                    );
                  })}
                </nav>
              </div>

              {/* Drawer Mobile Footer */}
              <div className="pt-6 border-t border-neutral-100 space-y-3">
                <button
                  id="mobile-drawer-hire"
                  onClick={() => { setMobileMenuOpen(false); onOpenModal('contact'); }}
                  className="w-full flex items-center justify-center gap-2 rounded-xl bg-[#FF6000] text-white py-3.5 font-display font-bold text-xs tracking-wider uppercase cursor-pointer"
                >
                  Let's Connect
                  <ArrowUpRight className="h-4 w-4" />
                </button>
                {/* <button
                  id="mobile-drawer-schedule"
                  onClick={() => { setMobileMenuOpen(false); onOpenModal('schedule'); }}
                  className="w-full flex items-center justify-center gap-2 rounded-xl border border-neutral-200 bg-white text-neutral-700 py-3 font-display font-semibold text-xs cursor-pointer hover:bg-neutral-50"
                >
                  Schedule Call
                </button> */}
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
