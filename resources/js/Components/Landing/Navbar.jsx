import React, { useEffect, useState } from 'react';
import { Menu, X, ChevronDown, Send } from 'lucide-react';
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
            return rect.top <= 120 && rect.bottom >= 120;
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

  const isItemActive = (item) => {
    if (item.id === 'blog') {
      return activeSection === 'blog';
    }

    if (item.type === 'link') {
      return activeSection === item.id && window.location.pathname === '/';
    }

    return activeSection === item.id && window.location.pathname === '/';
  };

  const closeMobileMenu = () => {
    setIsOpen(false);
    setMobileDropdownOpen(false);
  };

  return (
    <>
      <style>{`
        .ks-navbar-shell {
          position: fixed;
          left: 0;
          right: 0;
          top: 0;
          z-index: 999;
          padding: 1.35rem 1.25rem 0;
          pointer-events: none;
          transition: all .35s ease;
        }

        .ks-navbar-shell.is-scrolled {
          padding-top: .85rem;
        }

        .ks-navbar {
          width: min(100%, 1480px);
          height: 78px;
          margin: 0 auto;
          pointer-events: auto;
          display: grid;
          grid-template-columns: 330px 1fr 260px;
          align-items: center;
          gap: 1.25rem;
          padding: 0 1.15rem 0 1.25rem;
          border-radius: 18px;
          border: 1px solid rgba(0, 160, 255, .58);
          background:
            linear-gradient(180deg, rgba(5, 18, 38, .78), rgba(2, 10, 24, .82)),
            radial-gradient(circle at 8% 50%, rgba(0, 154, 255, .16), transparent 32%),
            radial-gradient(circle at 92% 50%, rgba(0, 91, 255, .12), transparent 36%);
          box-shadow:
            0 0 28px rgba(0, 118, 255, .22),
            0 18px 50px rgba(0, 0, 0, .35),
            inset 0 1px 0 rgba(119, 224, 255, .18),
            inset 0 -1px 0 rgba(0, 91, 255, .18);
          backdrop-filter: blur(22px);
          -webkit-backdrop-filter: blur(22px);
          overflow: visible;
          transition:
            height .35s ease,
            border-color .35s ease,
            box-shadow .35s ease,
            background .35s ease;
        }

        .ks-navbar-shell.is-scrolled .ks-navbar {
          height: 72px;
          border-color: rgba(0, 185, 255, .68);
          background:
            linear-gradient(180deg, rgba(5, 18, 38, .88), rgba(2, 10, 24, .9)),
            radial-gradient(circle at 8% 50%, rgba(0, 154, 255, .14), transparent 32%),
            radial-gradient(circle at 92% 50%, rgba(0, 91, 255, .12), transparent 36%);
          box-shadow:
            0 0 34px rgba(0, 150, 255, .28),
            0 18px 50px rgba(0, 0, 0, .42),
            inset 0 1px 0 rgba(119, 224, 255, .2);
        }

        .ks-navbar::before {
          content: '';
          position: absolute;
          left: 1.5rem;
          right: 1.5rem;
          top: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(67, 230, 255, .7), transparent);
          opacity: .75;
          pointer-events: none;
        }

        .ks-brand {
          min-width: 0;
          display: inline-flex;
          align-items: center;
          gap: .9rem;
          text-decoration: none;
          color: #fff;
        }

        .ks-logo-wrap {
          position: relative;
          width: 50px;
          height: 50px;
          flex: 0 0 auto;
        }

        .ks-logo-wrap::before {
          content: '';
          position: absolute;
          inset: -7px;
          border-radius: 18px;
          background:
            radial-gradient(circle, rgba(0, 214, 255, .62), rgba(0, 86, 255, .22) 48%, transparent 72%);
          filter: blur(8px);
          opacity: .9;
          transition: .3s ease;
        }

        .ks-brand:hover .ks-logo-wrap::before {
          opacity: 1;
          filter: blur(10px);
        }

        .ks-logo-box {
          position: relative;
          z-index: 1;
          width: 50px;
          height: 50px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 16px;
          background:
            linear-gradient(145deg, rgba(0, 213, 255, .95), rgba(0, 101, 255, .94) 48%, rgba(2, 54, 172, .95)),
            radial-gradient(circle at 30% 25%, rgba(255, 255, 255, .42), transparent 38%);
          border: 1px solid rgba(158, 239, 255, .5);
          box-shadow:
            inset 0 1px 10px rgba(255,255,255,.24),
            inset 0 -7px 14px rgba(0, 28, 118, .3),
            0 0 24px rgba(0, 159, 255, .45);
          overflow: hidden;
        }

        .ks-logo-box img {
          width: 35px;
          height: 35px;
          object-fit: contain;
          filter: drop-shadow(0 0 8px rgba(255,255,255,.5));
        }

        .ks-logo-fallback {
          font-size: 1.65rem;
          line-height: 1;
          font-weight: 900;
          font-family: Inter, system-ui, sans-serif;
          color: #fff;
          text-shadow: 0 0 14px rgba(255,255,255,.65);
        }

        .ks-brand-text {
          min-width: 0;
          display: flex;
          flex-direction: column;
          line-height: 1.1;
        }

        .ks-brand-name {
          font-size: 1.55rem;
          font-weight: 900;
          letter-spacing: -.04em;
          color: #fff;
          text-shadow:
            0 0 18px rgba(109, 216, 255, .28),
            0 2px 16px rgba(0,0,0,.35);
          white-space: nowrap;
        }

        .ks-brand-subtitle {
          margin-top: .25rem;
          font-size: .92rem;
          font-weight: 500;
          color: rgba(195, 230, 255, .78);
          white-space: nowrap;
        }

        .ks-nav-center {
          display: flex;
          align-items: center;
          justify-content: center;
          min-width: 0;
        }

        .ks-nav-menu {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: .38rem;
          height: 52px;
        }

        .ks-nav-link,
        .ks-nav-dropdown-btn {
          position: relative;
          height: 48px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: .35rem;
          padding: 0 1.25rem;
          border: 0;
          border-radius: 18px;
          background: transparent;
          color: rgba(255,255,255,.9);
          font-size: .98rem;
          font-weight: 800;
          text-decoration: none;
          line-height: 1;
          transition:
            color .25s ease,
            background .25s ease,
            box-shadow .25s ease,
            transform .25s ease;
          cursor: pointer;
        }

        .ks-nav-link:hover,
        .ks-nav-dropdown-btn:hover {
          color: #fff;
          background: rgba(23, 112, 210, .14);
          box-shadow:
            inset 0 0 18px rgba(0, 161, 255, .08),
            0 0 18px rgba(0, 123, 255, .08);
        }

        .ks-nav-link.is-active,
        .ks-nav-dropdown-btn.is-active {
          color: #aeefff;
          background:
            linear-gradient(180deg, rgba(12, 51, 100, .9), rgba(2, 29, 68, .76)),
            radial-gradient(circle at 50% 0%, rgba(46, 212, 255, .32), transparent 55%);
          border: 1px solid rgba(68, 211, 255, .1);
          box-shadow:
            inset 0 1px 16px rgba(79, 215, 255, .16),
            0 0 26px rgba(0, 143, 255, .3);
        }

        .ks-nav-link.is-active::before,
        .ks-nav-dropdown-btn.is-active::before {
          content: '';
          position: absolute;
          left: 26%;
          right: 26%;
          bottom: -8px;
          height: 3px;
          border-radius: 999px;
          background: linear-gradient(90deg, transparent, #30ddff 22%, #006dff 50%, #30ddff 78%, transparent);
          box-shadow:
            0 0 12px rgba(0, 183, 255, .95),
            0 0 24px rgba(0, 110, 255, .6);
        }

        .ks-nav-link.is-active::after,
        .ks-nav-dropdown-btn.is-active::after {
          content: '';
          position: absolute;
          left: 36%;
          right: 36%;
          bottom: -15px;
          height: 1px;
          border-radius: 999px;
          background: rgba(91, 228, 255, .7);
          box-shadow: 0 0 12px rgba(0, 190, 255, .8);
        }

        .ks-dropdown {
          position: relative;
        }

        .ks-dropdown-panel {
          position: absolute;
          top: calc(100% + .7rem);
          right: 0;
          width: 210px;
          padding: .55rem;
          border-radius: 16px;
          border: 1px solid rgba(0, 174, 255, .36);
          background:
            linear-gradient(180deg, rgba(4, 21, 47, .96), rgba(1, 9, 24, .96)),
            radial-gradient(circle at 50% 0%, rgba(0, 169, 255, .18), transparent 60%);
          box-shadow:
            0 20px 48px rgba(0, 0, 0, .42),
            0 0 28px rgba(0, 135, 255, .18),
            inset 0 1px 0 rgba(118, 228, 255, .16);
          backdrop-filter: blur(22px);
          -webkit-backdrop-filter: blur(22px);
          opacity: 0;
          visibility: hidden;
          transform: translateY(10px);
          transition: all .25s ease;
        }

        .ks-dropdown:hover .ks-dropdown-panel {
          opacity: 1;
          visibility: visible;
          transform: translateY(0);
        }

        .ks-dropdown-item {
          display: block;
          padding: .8rem .95rem;
          border-radius: 12px;
          color: rgba(225, 244, 255, .82);
          text-decoration: none;
          font-size: .9rem;
          font-weight: 700;
          transition: all .2s ease;
        }

        .ks-dropdown-item:hover {
          color: #fff;
          background: rgba(0, 155, 255, .14);
          box-shadow: inset 0 0 16px rgba(0, 155, 255, .08);
        }

        .ks-navbar-actions {
          display: flex;
          align-items: center;
          justify-content: flex-end;
        }

        .ks-cta-nav {
          position: relative;
          height: 52px;
          min-width: 205px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: .65rem;
          padding: 0 1.35rem;
          border-radius: 16px;
          border: 1px solid rgba(104, 227, 255, .88);
          color: #fff;
          text-decoration: none;
          font-size: .98rem;
          font-weight: 900;
          overflow: hidden;
          background:
            linear-gradient(180deg, #26d7ff 0%, #0b85ff 48%, #0644d6 100%);
          box-shadow:
            inset 0 1px 16px rgba(255,255,255,.24),
            inset 0 -8px 18px rgba(0, 25, 122, .3),
            0 0 28px rgba(0, 146, 255, .62),
            0 12px 28px rgba(0, 0, 0, .32);
          transition:
            transform .25s ease,
            box-shadow .25s ease,
            border-color .25s ease;
        }

        .ks-cta-nav::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,.65), transparent);
          transform: translateX(-130%);
          transition: transform .75s ease;
        }

        .ks-cta-nav:hover {
          transform: translateY(-2px);
          border-color: rgba(171, 245, 255, .95);
          box-shadow:
            inset 0 1px 18px rgba(255,255,255,.28),
            inset 0 -8px 18px rgba(0, 25, 122, .26),
            0 0 36px rgba(0, 190, 255, .8),
            0 16px 32px rgba(0, 0, 0, .36);
        }

        .ks-cta-nav:hover::before {
          transform: translateX(130%);
        }

        .ks-cta-nav span,
        .ks-cta-nav svg {
          position: relative;
          z-index: 1;
        }

        .ks-cta-nav .ks-cta-arrow {
          width: 17px;
          height: 17px;
          transition: transform .25s ease;
        }

        .ks-cta-nav:hover .ks-cta-arrow {
          transform: translateX(4px);
        }

        .ks-mobile-toggle {
          display: none;
        }

        .ks-mobile-menu-wrap {
          display: none;
        }

        @media (max-width: 1180px) {
          .ks-navbar {
            grid-template-columns: 300px 1fr 230px;
            gap: .85rem;
          }

          .ks-nav-link,
          .ks-nav-dropdown-btn {
            padding: 0 .95rem;
            font-size: .9rem;
          }

          .ks-brand-name {
            font-size: 1.42rem;
          }

          .ks-brand-subtitle {
            font-size: .82rem;
          }

          .ks-cta-nav {
            min-width: 185px;
            font-size: .9rem;
          }
        }

        @media (max-width: 1024px) {
          .ks-navbar-shell {
            padding: 1rem .9rem 0;
          }

          .ks-navbar {
            height: 76px;
            grid-template-columns: 1fr auto;
            padding: 0 1rem;
            border-radius: 18px;
          }

          .ks-nav-center,
          .ks-navbar-actions {
            display: none;
          }

          .ks-mobile-toggle {
            width: 56px;
            height: 56px;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            border-radius: 16px;
            border: 1px solid rgba(74, 215, 255, .72);
            color: #fff;
            background:
              linear-gradient(180deg, rgba(10, 35, 74, .9), rgba(2, 14, 36, .88)),
              radial-gradient(circle at 50% 0%, rgba(0, 168, 255, .22), transparent 60%);
            box-shadow:
              inset 0 1px 12px rgba(111, 231, 255, .16),
              0 0 24px rgba(0, 152, 255, .34);
            transition: all .25s ease;
          }

          .ks-mobile-toggle:hover {
            transform: translateY(-1px);
            box-shadow:
              inset 0 1px 12px rgba(111, 231, 255, .2),
              0 0 30px rgba(0, 180, 255, .45);
          }

          .ks-mobile-menu-wrap {
            display: block;
            width: min(100%, 1480px);
            margin: .75rem auto 0;
            pointer-events: auto;
            overflow: hidden;
            transition:
              max-height .45s ease,
              opacity .35s ease,
              transform .35s ease;
          }

          .ks-mobile-menu-wrap.is-open {
            max-height: 680px;
            opacity: 1;
            transform: translateY(0);
          }

          .ks-mobile-menu-wrap.is-closed {
            max-height: 0;
            opacity: 0;
            transform: translateY(-8px);
          }

          .ks-mobile-menu {
            border-radius: 18px;
            border: 1px solid rgba(0, 160, 255, .5);
            background:
              linear-gradient(180deg, rgba(5, 20, 44, .94), rgba(1, 9, 24, .96)),
              radial-gradient(circle at 50% 0%, rgba(0, 168, 255, .16), transparent 62%);
            box-shadow:
              0 20px 48px rgba(0, 0, 0, .42),
              0 0 26px rgba(0, 128, 255, .2),
              inset 0 1px 0 rgba(119, 224, 255, .18);
            backdrop-filter: blur(22px);
            -webkit-backdrop-filter: blur(22px);
            padding: .75rem;
          }

          .ks-mobile-link,
          .ks-mobile-dropdown-btn {
            width: 100%;
            min-height: 48px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 0 1rem;
            border: 0;
            border-radius: 14px;
            background: transparent;
            color: rgba(236, 248, 255, .9);
            text-decoration: none;
            font-size: .95rem;
            font-weight: 800;
            transition: all .2s ease;
          }

          .ks-mobile-link:hover,
          .ks-mobile-dropdown-btn:hover {
            background: rgba(0, 145, 255, .12);
            color: #fff;
          }

          .ks-mobile-link.is-active,
          .ks-mobile-dropdown-btn.is-active {
            color: #bdf4ff;
            background:
              linear-gradient(180deg, rgba(10, 61, 118, .76), rgba(3, 28, 68, .76));
            box-shadow:
              inset 0 0 18px rgba(0, 156, 255, .16),
              0 0 18px rgba(0, 156, 255, .12);
          }

          .ks-mobile-submenu {
            overflow: hidden;
            transition: all .3s ease;
          }

          .ks-mobile-submenu.is-open {
            max-height: 150px;
            opacity: 1;
            margin-top: .45rem;
          }

          .ks-mobile-submenu.is-closed {
            max-height: 0;
            opacity: 0;
            margin-top: 0;
          }

          .ks-mobile-submenu-inner {
            display: grid;
            gap: .3rem;
            padding: .45rem;
            border-radius: 14px;
            background: rgba(255,255,255,.045);
            border: 1px solid rgba(255,255,255,.06);
          }

          .ks-mobile-submenu-inner a {
            display: block;
            padding: .75rem .9rem;
            border-radius: 12px;
            color: rgba(220, 242, 255, .78);
            text-decoration: none;
            font-size: .9rem;
            font-weight: 700;
          }

          .ks-mobile-submenu-inner a:hover {
            color: #fff;
            background: rgba(0, 145, 255, .12);
          }

          .ks-mobile-cta {
            margin-top: .75rem;
            padding-top: .75rem;
            border-top: 1px solid rgba(83, 219, 255, .14);
          }

          .ks-mobile-cta .ks-cta-nav {
            width: 100%;
            height: 52px;
          }
        }

        @media (max-width: 640px) {
          .ks-navbar-shell {
            padding: .75rem .75rem 0;
          }

          .ks-navbar {
            height: 72px;
            padding: 0 .85rem;
            border-radius: 16px;
          }

          .ks-logo-wrap,
          .ks-logo-box {
            width: 46px;
            height: 46px;
          }

          .ks-logo-box img {
            width: 32px;
            height: 32px;
          }

          .ks-brand {
            gap: .72rem;
          }

          .ks-brand-name {
            font-size: 1.28rem;
          }

          .ks-brand-subtitle {
            margin-top: .18rem;
            font-size: .72rem;
          }

          .ks-mobile-toggle {
            width: 52px;
            height: 52px;
            border-radius: 15px;
          }
        }

        @media (max-width: 380px) {
          .ks-brand-name {
            font-size: 1.12rem;
          }

          .ks-brand-subtitle {
            font-size: .66rem;
          }

          .ks-logo-wrap,
          .ks-logo-box {
            width: 42px;
            height: 42px;
          }

          .ks-logo-box img {
            width: 29px;
            height: 29px;
          }

          .ks-mobile-toggle {
            width: 48px;
            height: 48px;
          }
        }
      `}</style>

      <nav className={`ks-navbar-shell ${scrolled ? 'is-scrolled' : ''}`}>
        <div className="ks-navbar">
          <Link href="/" className="ks-brand" onClick={closeMobileMenu}>
            <div className="ks-logo-wrap">
              <div className="ks-logo-box">
                {settings?.logo ? (
                  <img src={`/storage/${settings.logo}`} alt="Logo" />
                ) : (
                  <span className="ks-logo-fallback">K</span>
                )}
              </div>
            </div>

            <div className="ks-brand-text">
              <span className="ks-brand-name">
                {settings?.company_name || 'KyySolutions'}
              </span>
              <span className="ks-brand-subtitle">
                {settings?.tagline || 'Professional IT Solutions'}
              </span>
            </div>
          </Link>

          <div className="ks-nav-center">
            <div className="ks-nav-menu">
              {navItems.map((item) => {
                const active = isItemActive(item);

                if (item.type === 'dropdown') {
                  return (
                    <div key={item.name} className="ks-dropdown">
                      <button className={`ks-nav-dropdown-btn ${active ? 'is-active' : ''}`}>
                        {item.name}
                        <ChevronDown size={14} />
                      </button>

                      <div className="ks-dropdown-panel">
                        {item.children.map((child) => (
                          <Link key={child.name} href={child.href} className="ks-dropdown-item">
                            {child.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  );
                }

                if (item.type === 'link') {
                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={`ks-nav-link ${active ? 'is-active' : ''}`}
                    >
                      {item.name}
                    </Link>
                  );
                }

                return (
                  <a
                    key={item.name}
                    href={item.href}
                    className={`ks-nav-link ${active ? 'is-active' : ''}`}
                  >
                    {item.name}
                  </a>
                );
              })}
            </div>
          </div>

          <div className="ks-navbar-actions">
            <a
              href="https://wa.me/6281232916758"
              target="_blank"
              rel="noopener noreferrer"
              className="ks-cta-nav"
            >
              <Send size={19} />
              <span>Hubungi Kami</span>
              <svg
                className="ks-cta-arrow"
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
            </a>
          </div>

          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="ks-mobile-toggle"
            aria-label="Toggle navigation menu"
          >
            {isOpen ? <X size={26} strokeWidth={2.4} /> : <Menu size={28} strokeWidth={2.4} />}
          </button>
        </div>

        <div className={`ks-mobile-menu-wrap ${isOpen ? 'is-open' : 'is-closed'}`}>
          <div className="ks-mobile-menu">
            {navItems.map((item) => {
              const active = isItemActive(item);

              if (item.type === 'dropdown') {
                return (
                  <div key={item.name}>
                    <button
                      type="button"
                      onClick={() => setMobileDropdownOpen(!mobileDropdownOpen)}
                      className={`ks-mobile-dropdown-btn ${active ? 'is-active' : ''}`}
                    >
                      <span>{item.name}</span>
                      <ChevronDown
                        size={17}
                        className={`transition-transform duration-300 ${
                          mobileDropdownOpen ? 'rotate-180' : ''
                        }`}
                      />
                    </button>

                    <div className={`ks-mobile-submenu ${mobileDropdownOpen ? 'is-open' : 'is-closed'}`}>
                      <div className="ks-mobile-submenu-inner">
                        {item.children.map((child) => (
                          <Link
                            key={child.name}
                            href={child.href}
                            onClick={closeMobileMenu}
                          >
                            {child.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              }

              if (item.type === 'link') {
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={closeMobileMenu}
                    className={`ks-mobile-link ${active ? 'is-active' : ''}`}
                  >
                    <span>{item.name}</span>
                  </Link>
                );
              }

              return (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={closeMobileMenu}
                  className={`ks-mobile-link ${active ? 'is-active' : ''}`}
                >
                  <span>{item.name}</span>
                </a>
              );
            })}

            <div className="ks-mobile-cta">
              <a
                href="https://wa.me/6281232916758"
                target="_blank"
                rel="noopener noreferrer"
                className="ks-cta-nav"
                onClick={closeMobileMenu}
              >
                <Send size={19} />
                <span>Hubungi Kami</span>
                <svg
                  className="ks-cta-arrow"
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
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default ElegantNavbar;