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
          ? 'bg-white/95 backdrop-blur-xl shadow-lg border-b border-gray-100'
          : 'bg-white/80 backdrop-blur-md'
      }`}
    >
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">

          {/* Logo - Modern & Minimal */}
          <a href="#home" className="flex items-center gap-3 group relative z-10">
            <div className="relative">
              {/* Logo Container with Gradient Border */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl blur opacity-0 group-hover:opacity-50 transition-opacity duration-500"></div>

              <div className="relative w-11 h-11 rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center transition-all duration-300 group-hover:scale-105 shadow-md group-hover:shadow-xl group-hover:shadow-blue-500/30">
                {settings?.logo ? (
                  <img
                    src={`/storage/${settings.logo}`}
                    alt="Logo"
                    className="w-6 h-6 object-contain"
                  />
                ) : (
                  <span className="text-white font-bold text-lg">K</span>
                )}
              </div>
            </div>

            {/* Company Name - Clean Typography */}
            <div className="flex flex-col">
              <span className="font-bold text-xl text-gray-900 tracking-tight group-hover:text-blue-600 transition-colors duration-300">
                {settings?.company_name || 'KyySolutions'}
              </span>
              <span className="text-xs text-gray-500 font-medium">Professional Solutions</span>
            </div>
          </a>

          {/* Desktop Menu - Glass Morphism Style */}
          <div className="hidden lg:flex items-center">
            <div className="flex items-center gap-1 bg-gray-50/50 backdrop-blur-sm rounded-2xl px-2 py-2 border border-gray-100/50">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={`relative px-5 py-2.5 text-sm font-semibold rounded-xl transition-all duration-300 ${
                    activeSection === item.href.slice(1)
                      ? 'text-white bg-gradient-to-r from-blue-600 to-indigo-600 shadow-lg shadow-blue-500/30'
                      : 'text-gray-700 hover:text-blue-600 hover:bg-white/80'
                  }`}
                >
                  {item.name}

                  {/* Active Indicator Dot */}
                  {activeSection === item.href.slice(1) && (
                    <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-white rounded-full"></span>
                  )}
                </a>
              ))}
            </div>
          </div>

          {/* CTA Buttons - Modern Gradient */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="#login"
              className="px-5 py-2.5 text-sm font-semibold text-gray-700 hover:text-blue-600 transition-colors duration-300 rounded-xl hover:bg-gray-50"
            >
              Login
            </a>

            <a
              href="#contact"
              className="group relative px-6 py-2.5 bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-900 text-sm font-bold rounded-xl overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-yellow-500/30 hover:scale-105"
            >
              {/* Shine Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>

              <span className="relative flex items-center gap-2">
                Daftar Sekarang
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            </a>
          </div>

          {/* Mobile Menu Button - Sleek Design */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden relative p-2.5 rounded-xl bg-gray-100 text-gray-700 hover:bg-gray-200 transition-all duration-300 hover:scale-105"
          >
            {isOpen ? <X size={22} strokeWidth={2.5} /> : <Menu size={22} strokeWidth={2.5} />}
          </button>
        </div>

        {/* Mobile Menu - Modern Slide Down */}
        <div className={`lg:hidden overflow-hidden transition-all duration-500 ease-out ${
          isOpen ? 'max-h-[600px] opacity-100 pb-6' : 'max-h-0 opacity-0'
        }`}>
          <div className="flex flex-col gap-2 bg-gradient-to-br from-gray-50 to-white rounded-2xl p-4 shadow-xl border border-gray-100 mt-4">
            {navItems.map((item, index) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={`relative px-5 py-3.5 text-sm font-semibold rounded-xl transition-all duration-300 ${
                  activeSection === item.href.slice(1)
                    ? 'text-white bg-gradient-to-r from-blue-600 to-indigo-600 shadow-lg shadow-blue-500/20'
                    : 'text-gray-700 hover:bg-white hover:shadow-md'
                }`}
                style={{
                  animation: isOpen ? `slideDown 0.4s ease-out ${index * 60}ms both` : 'none'
                }}
              >
                <span className="flex items-center justify-between">
                  {item.name}
                  {activeSection === item.href.slice(1) && (
                    <span className="w-2 h-2 bg-white rounded-full"></span>
                  )}
                </span>
              </a>
            ))}

            {/* Mobile CTA Buttons */}
            <div className="flex flex-col gap-2 mt-4 pt-4 border-t border-gray-200">
              <a
                href="#login"
                className="px-5 py-3.5 text-sm font-semibold text-gray-700 text-center rounded-xl bg-white hover:bg-gray-50 shadow-sm transition-all duration-300"
                style={{
                  animation: isOpen ? `slideDown 0.4s ease-out ${navItems.length * 60}ms both` : 'none'
                }}
              >
                Login
              </a>
              <a
                href="#contact"
                className="px-5 py-3.5 bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-900 text-sm font-bold text-center rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                style={{
                  animation: isOpen ? `slideDown 0.4s ease-out ${(navItems.length + 1) * 60}ms both` : 'none'
                }}
              >
                <span className="flex items-center justify-center gap-2">
                  Daftar Sekarang
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
