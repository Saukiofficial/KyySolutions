import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Link } from '@inertiajs/react';

const ElegantNavbar = ({ settings }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      if (window.location.pathname === '/') {
        const sections = ['home', 'about', 'services', 'portfolio', 'team', 'contact'];

        const current = sections.find((section) => {
          const element = document.getElementById(section);

          if (element) {
            const rect = element.getBoundingClientRect();
            return rect.top <= 100 && rect.bottom >= 100;
          }

          return false;
        });

        if (current) setActiveSection(current);
      }
    };

    if (window.location.pathname.startsWith('/news')) {
      setActiveSection('blog');
    }

    if (window.location.pathname.startsWith('/tutorials')) {
      setActiveSection('blog');
    }

    handleScroll();

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '/', type: 'link', id: 'home' },
    { name: 'About', href: '/#about', type: 'anchor', id: 'about' },
    { name: 'Services', href: '/#services', type: 'anchor', id: 'services' },
    { name: 'Portfolio', href: '/#portfolio', type: 'anchor', id: 'portfolio' },
    { name: 'Team', href: '/#team', type: 'anchor', id: 'team' },
    {
      name: 'Blog',
      type: 'dropdown',
      id: 'blog',
      children: [
        { name: 'Berita IT', href: route('news.index') },
        { name: 'Tutorial', href: '/tutorials' },
      ],
    },
    { name: 'Contact', href: '/#contact', type: 'anchor', id: 'contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[#020817]/75 backdrop-blur-2xl shadow-2xl shadow-cyan-500/10 border-b border-cyan-400/10'
          : 'bg-transparent backdrop-blur-sm border-b border-white/5'
      }`}
    >
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group relative z-10">
            <div className="relative">
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

            <div className="flex flex-col">
              <span className="font-bold text-xl text-white tracking-tight group-hover:text-cyan-300 transition-colors duration-300 drop-shadow-lg">
                {settings?.company_name || 'KyySolutions'}
              </span>
              <span className="text-xs text-cyan-200/80 font-medium">
                Professional Solutions
              </span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center">
            <div className="flex items-center gap-1 bg-[#061426]/45 backdrop-blur-xl rounded-2xl px-2 py-2 border border-cyan-300/15 shadow-xl shadow-cyan-500/10">
              {navItems.map((item) => {
                if (item.type === 'dropdown') {
                  return (
                    <div key={item.name} className="relative group">
                      <button
                        className={`flex items-center gap-1 relative px-5 py-2.5 text-sm font-semibold rounded-xl transition-all duration-300 ${
                          activeSection === item.id
                            ? 'text-blue-950 bg-gradient-to-r from-cyan-300 via-blue-200 to-indigo-300 shadow-lg shadow-cyan-400/40'
                            : 'text-white/90 hover:text-white hover:bg-white/10'
                        }`}
                      >
                        {item.name}
                        <ChevronDown
                          size={14}
                          className="group-hover:rotate-180 transition-transform duration-300"
                        />
                      </button>

                      {/* Dropdown Content */}
                      <div className="absolute top-full right-0 pt-2 w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-0 translate-y-2">
                        <div className="bg-[#061426]/95 backdrop-blur-2xl rounded-xl shadow-2xl shadow-cyan-500/10 border border-cyan-300/15 overflow-hidden py-1">
                          {item.children.map((child) => (
                            <Link
                              key={child.name}
                              href={child.href}
                              className="block px-4 py-2.5 text-sm text-white/80 hover:bg-cyan-400/10 hover:text-cyan-200 transition-colors"
                            >
                              {child.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  );
                }

                return item.type === 'link' ? (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`relative px-5 py-2.5 text-sm font-semibold rounded-xl transition-all duration-300 ${
                      activeSection === item.id
                        ? 'text-blue-950 bg-gradient-to-r from-cyan-300 via-blue-200 to-indigo-300 shadow-lg shadow-cyan-400/40'
                        : 'text-white/90 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    {item.name}
                  </Link>
                ) : (
                  <a
                    key={item.name}
                    href={item.href}
                    className={`relative px-5 py-2.5 text-sm font-semibold rounded-xl transition-all duration-300 ${
                      activeSection === item.id && window.location.pathname === '/'
                        ? 'text-blue-950 bg-gradient-to-r from-cyan-300 via-blue-200 to-indigo-300 shadow-lg shadow-cyan-400/40'
                        : 'text-white/90 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    {item.name}

                    {activeSection === item.id && window.location.pathname === '/' && (
                      <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-blue-950 rounded-full shadow-lg"></span>
                    )}
                  </a>
                );
              })}
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="https://wa.me/6281232916758"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative px-6 py-2.5 bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 text-blue-950 text-sm font-bold rounded-xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-400/40 hover:scale-105 border border-white/30"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/60 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>

              <span className="relative flex items-center gap-2">
                Hubungi Admin
                <svg
                  className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.5}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden relative p-2.5 rounded-xl bg-[#061426]/60 text-white hover:bg-white/10 transition-all duration-300 hover:scale-105 border border-cyan-300/15 backdrop-blur-xl"
          >
            {isOpen ? <X size={22} strokeWidth={2.5} /> : <Menu size={22} strokeWidth={2.5} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-500 ease-out ${
            isOpen ? 'max-h-[600px] opacity-100 pb-6' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="flex flex-col gap-2 bg-[#061426]/90 backdrop-blur-2xl rounded-2xl p-4 shadow-2xl shadow-cyan-500/10 border border-cyan-300/15 mt-4">
            {navItems.map((item, index) => {
              if (item.type === 'dropdown') {
                return (
                  <div key={item.name} className="relative">
                    <button
                      onClick={() => setMobileDropdownOpen(!mobileDropdownOpen)}
                      className={`w-full flex items-center justify-between px-5 py-3.5 text-sm font-semibold rounded-xl transition-all duration-300 ${
                        activeSection === item.id
                          ? 'text-blue-950 bg-gradient-to-r from-cyan-300 via-blue-200 to-indigo-300'
                          : 'text-white/90 hover:bg-white/10'
                      }`}
                    >
                      {item.name}
                      <ChevronDown
                        size={16}
                        className={`transition-transform duration-300 ${
                          mobileDropdownOpen ? 'rotate-180' : ''
                        }`}
                      />
                    </button>

                    {/* Submenu Mobile */}
                    <div
                      className={`overflow-hidden transition-all duration-300 ${
                        mobileDropdownOpen ? 'max-h-40 opacity-100 mt-2' : 'max-h-0 opacity-0'
                      }`}
                    >
                      <div className="bg-white/5 rounded-xl p-2 space-y-1 border border-white/5">
                        {item.children.map((child) => (
                          <Link
                            key={child.name}
                            href={child.href}
                            onClick={() => setIsOpen(false)}
                            className="block px-4 py-2.5 text-sm text-white/80 hover:text-cyan-200 hover:bg-cyan-400/10 rounded-lg transition-colors"
                          >
                            {child.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              }

              return item.type === 'link' ? (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`relative px-5 py-3.5 text-sm font-semibold rounded-xl transition-all duration-300 ${
                    activeSection === item.id
                      ? 'text-blue-950 bg-gradient-to-r from-cyan-300 via-blue-200 to-indigo-300 shadow-lg shadow-cyan-400/30'
                      : 'text-white/90 hover:bg-white/10 hover:text-white hover:shadow-md'
                  }`}
                  style={{
                    animation: isOpen ? `slideDown 0.4s ease-out ${index * 60}ms both` : 'none',
                  }}
                >
                  <span className="flex items-center justify-between">{item.name}</span>
                </Link>
              ) : (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`relative px-5 py-3.5 text-sm font-semibold rounded-xl transition-all duration-300 ${
                    activeSection === item.id && window.location.pathname === '/'
                      ? 'text-blue-950 bg-gradient-to-r from-cyan-300 via-blue-200 to-indigo-300 shadow-lg shadow-cyan-400/30'
                      : 'text-white/90 hover:bg-white/10 hover:text-white hover:shadow-md'
                  }`}
                  style={{
                    animation: isOpen ? `slideDown 0.4s ease-out ${index * 60}ms both` : 'none',
                  }}
                >
                  <span className="flex items-center justify-between">
                    {item.name}

                    {activeSection === item.id && window.location.pathname === '/' && (
                      <span className="w-2 h-2 bg-blue-950 rounded-full shadow-lg"></span>
                    )}
                  </span>
                </a>
              );
            })}

            <div className="flex flex-col gap-2 mt-4 pt-4 border-t border-cyan-300/10">
              <a
                href="https://wa.me/6281232916758"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3.5 bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 text-blue-950 text-sm font-bold text-center rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 border border-white/30"
                style={{
                  animation: isOpen ? `slideDown 0.4s ease-out ${navItems.length * 60}ms both` : 'none',
                }}
              >
                <span className="flex items-center justify-center gap-2">
                  Hubungi Admin
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2.5}
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
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