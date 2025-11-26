import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';

const ElegantNavbar = ({ settings }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      const sections = ['home', 'about', 'services', 'portfolio', 'team', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Team', href: '#team' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900 backdrop-blur-xl shadow-2xl shadow-blue-900/50 border-b border-blue-700/30'
          : 'bg-gradient-to-r from-blue-900/95 via-blue-800/95 to-indigo-900/95 backdrop-blur-md'
      }`}
    >
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">

          {/* Logo - Modern & Minimal */}
          <a href="#home" className="flex items-center gap-3 group relative z-10">
            <div className="relative">
              {/* Logo Container with Gradient Border */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 rounded-2xl blur-md opacity-60 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative w-12 h-12 rounded-2xl bg-gradient-to-br from-cyan-400 via-blue-500 to-indigo-600 flex items-center justify-center transition-all duration-300 group-hover:scale-110 shadow-lg group-hover:shadow-2xl group-hover:shadow-cyan-400/50 border border-white/20">
                {settings?.logo ? (
                  <img
                    src={`/storage/${settings.logo}`}
                    alt="Logo"
                    className="w-7 h-7 object-contain"
                  />
                ) : (
                  <span className="text-white font-bold text-xl drop-shadow-lg">K</span>
                )}
              </div>
            </div>

            {/* Company Name - Clean Typography */}
            <div className="flex flex-col">
              <span className="font-bold text-xl text-white tracking-tight group-hover:text-cyan-300 transition-colors duration-300 drop-shadow-lg">
                {settings?.company_name || 'KyySolutions'}
              </span>
              <span className="text-xs text-blue-200 font-medium">Professional Solutions</span>
            </div>
          </a>

          {/* Desktop Menu - Glass Morphism Style */}
          <div className="hidden lg:flex items-center">
            <div className="flex items-center gap-1 bg-white/10 backdrop-blur-md rounded-2xl px-2 py-2 border border-white/20 shadow-xl shadow-black/20">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={`relative px-5 py-2.5 text-sm font-semibold rounded-xl transition-all duration-300 ${
                    activeSection === item.href.slice(1)
                      ? 'text-blue-900 bg-gradient-to-r from-cyan-300 via-blue-200 to-indigo-300 shadow-lg shadow-cyan-400/50'
                      : 'text-white/90 hover:text-white hover:bg-white/20'
                  }`}
                >
                  {item.name}

                  {/* Active Indicator Dot */}
                  {activeSection === item.href.slice(1) && (
                    <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-blue-900 rounded-full shadow-lg"></span>
                  )}
                </a>
              ))}
            </div>
          </div>

          {/* CTA Buttons - Modern Gradient */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="https://wa.me/6281232916758"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative px-6 py-2.5 bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 text-blue-900 text-sm font-bold rounded-xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-400/50 hover:scale-105 border border-white/30"
            >
              {/* Shine Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/60 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>

              <span className="relative flex items-center gap-2">
                Hubungi Admin
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            </a>
          </div>

          {/* Mobile Menu Button - Sleek Design */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden relative p-2.5 rounded-xl bg-white/10 text-white hover:bg-white/20 transition-all duration-300 hover:scale-105 border border-white/20"
          >
            {isOpen ? <X size={22} strokeWidth={2.5} /> : <Menu size={22} strokeWidth={2.5} />}
          </button>
        </div>

        {/* Mobile Menu - Modern Slide Down */}
        <div className={`lg:hidden overflow-hidden transition-all duration-500 ease-out ${
          isOpen ? 'max-h-[600px] opacity-100 pb-6' : 'max-h-0 opacity-0'
        }`}>
          <div className="flex flex-col gap-2 bg-gradient-to-br from-blue-800/90 to-indigo-900/90 backdrop-blur-lg rounded-2xl p-4 shadow-2xl border border-white/20 mt-4">
            {navItems.map((item, index) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={`relative px-5 py-3.5 text-sm font-semibold rounded-xl transition-all duration-300 ${
                  activeSection === item.href.slice(1)
                    ? 'text-blue-900 bg-gradient-to-r from-cyan-300 via-blue-200 to-indigo-300 shadow-lg shadow-cyan-400/30'
                    : 'text-white/90 hover:bg-white/10 hover:text-white hover:shadow-md'
                }`}
                style={{
                  animation: isOpen ? `slideDown 0.4s ease-out ${index * 60}ms both` : 'none'
                }}
              >
                <span className="flex items-center justify-between">
                  {item.name}
                  {activeSection === item.href.slice(1) && (
                    <span className="w-2 h-2 bg-blue-900 rounded-full shadow-lg"></span>
                  )}
                </span>
              </a>
            ))}

            {/* Mobile CTA Buttons */}
            <div className="flex flex-col gap-2 mt-4 pt-4 border-t border-white/20">
              <a
                href="https://wa.me/6281232916758"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3.5 bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 text-blue-900 text-sm font-bold text-center rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 border border-white/30"
                style={{
                  animation: isOpen ? `slideDown 0.4s ease-out ${navItems.length * 60}ms both` : 'none'
                }}
              >
                <span className="flex items-center justify-center gap-2">
                  Hubungi Admin
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </nav>
  );
};

export default ElegantNavbar;
