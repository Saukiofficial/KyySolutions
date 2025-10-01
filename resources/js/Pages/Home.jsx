import React, { useState, useMemo, useEffect } from 'react';
import { usePage } from '@inertiajs/react'; // Pastikan ini ada di proyek Anda
import { Code, Smartphone, Palette, Gamepad2, MoveRight, Send, Menu, X, ArrowUp, Sparkles, Zap, TrendingUp } from 'lucide-react';

// Helper to map icon names from the database to icon components
const iconMap = {
    Code: <Code size={32} className="text-white" />,
    Smartphone: <Smartphone size={32} className="text-white" />,
    Palette: <Palette size={32} className="text-white" />,
    Gamepad2: <Gamepad2 size={32} className="text-white" />,
};

// =========================================================================
// == PREMIUM DESIGN COMPONENTS
// =========================================================================
const FloatingParticles = () => {
    const particles = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      size: Math.random() * 6 + 2,
      x: Math.random() * 100,
      y: Math.random() * 100,
      duration: Math.random() * 25 + 15,
      delay: Math.random() * 8,
      opacity: Math.random() * 0.5 + 0.1
    }));
    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {particles.map((p) => (
          <div
            key={p.id}
            className="absolute rounded-full bg-white animate-float-complex"
            style={{
              width: `${p.size}px`,
              height: `${p.size}px`,
              left: `${p.x}%`,
              top: `${p.y}%`,
              animationDuration: `${p.duration}s`,
              animationDelay: `${p.delay}s`,
              opacity: p.opacity,
              boxShadow: `0 0 ${p.size * 2}px rgba(255,255,255,0.3)`
            }}
          />
        ))}
      </div>
    );
};

const GridBackground = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-10">
    <div className="absolute inset-0" style={{
      backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
      backgroundSize: '50px 50px',
      animation: 'gridMove 20s linear infinite'
    }} />
  </div>
);

const GlowingOrbs = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-pulse-slow" />
    <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-purple-500 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-pulse-slow" style={{animationDelay: '1s'}} />
    <div className="absolute bottom-1/4 left-1/3 w-[450px] h-[450px] bg-pink-500 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-pulse-slow" style={{animationDelay: '2s'}} />
  </div>
);

// =========================================================================
// == PREMIUM NAVBAR
// =========================================================================
const AnimatedNavbar = ({ settings }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
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
    { name: 'Home', href: '#home' }, { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' }, { name: 'Portfolio', href: '#portfolio' },
    { name: 'Team', href: '#team' }, { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${scrolled ? 'bg-white/80 backdrop-blur-2xl shadow-2xl py-3 border-b border-gray-200/50' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <a href="#home" className="flex items-center space-x-3 group relative">
            {settings?.logo && (
              <div className="relative">
                <div className={`absolute inset-0 rounded-full ${scrolled ? 'bg-blue-500/20' : 'bg-white/20'} blur-xl group-hover:blur-2xl transition-all duration-500`}></div>
                <img src={`/storage/${settings.logo}`} alt={`${settings.company_name} Logo`} className="w-12 h-12 object-contain transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 relative z-10" />
              </div>
            )}
            <span className={`font-bold text-xl transition-all duration-500 ${scrolled ? 'bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent' : 'text-white'} group-hover:scale-105`}>
              {settings?.company_name || 'DIGITAL SOLUTIONS'}
            </span>
          </a>

          <div className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2">
            <div className={`flex items-center space-x-1 px-6 py-2.5 rounded-full backdrop-blur-2xl transition-all duration-500 ${scrolled ? 'bg-gray-100/80 shadow-lg' : 'bg-white/10 border border-white/20'}`}>
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={`relative px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-500 group ${
                    activeSection === item.href.slice(1)
                      ? (scrolled ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/50' : 'bg-white text-blue-600 shadow-lg shadow-white/50')
                      : (scrolled ? 'text-gray-700 hover:bg-gray-200/70' : 'text-white hover:bg-white/20')
                  }`}
                >
                  <span className="relative z-10">{item.name}</span>
                  {activeSection === item.href.slice(1) && (
                    <div className="absolute inset-0 rounded-full animate-ping-slow opacity-30 bg-current"></div>
                  )}
                </a>
              ))}
            </div>
          </div>

          {/* <div className="hidden lg:block">
            <a href="#contact" className={`group relative px-6 py-3 rounded-full font-bold transition-all duration-500 overflow-hidden ${scrolled ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:shadow-2xl hover:shadow-blue-500/50' : 'bg-white text-blue-600 hover:shadow-2xl hover:shadow-white/50'} hover:scale-105`}>
              <span className="relative z-10 flex items-center gap-2">
                Get Started
                <Sparkles className="w-4 h-4 group-hover:rotate-180 transition-transform duration-700" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </a>
          </div> */}

          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`lg:hidden p-2.5 rounded-xl transition-all duration-500 backdrop-blur-xl ${scrolled ? 'text-gray-900 bg-gray-100/80 hover:bg-gray-200/80' : 'text-white bg-white/10 hover:bg-white/20 border border-white/20'}`}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isOpen && (
          <div className="lg:hidden mt-4 bg-white/95 backdrop-blur-2xl rounded-3xl shadow-2xl p-6 animate-slideInDown border border-gray-200/50">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="block py-3.5 text-gray-700 hover:text-blue-600 font-semibold transition-all duration-300 hover:translate-x-2 border-b border-gray-100 last:border-0"
              >
                {item.name}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="block mt-4 px-6 py-3.5 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-center rounded-2xl font-bold hover:shadow-xl hover:shadow-blue-500/50 transition-all duration-300 hover:scale-105"
            >
              Get Started
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

// =========================================================================
// == PREMIUM HERO SECTION
// =========================================================================
const HeroSection = ({ hero }) => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        const handleMouseMove = (e) => {
          setMousePosition({
            x: (e.clientX / window.innerWidth - 0.5) * 30,
            y: (e.clientY / window.innerHeight - 0.5) * 30
          });
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    if (!hero) return null;

    return (
        <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
            <FloatingParticles />
            <GridBackground />
            <GlowingOrbs />

            <div className="absolute top-20 right-20 w-72 h-72 bg-blue-500 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-float-slow" />
            <div className="absolute bottom-20 left-20 w-96 h-96 bg-purple-500 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-float-slow" style={{animationDelay: '2s'}} />

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 z-10 py-32">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div className="text-white space-y-10">
                        <div className="space-y-8 animate-slideInLeft">
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-xl rounded-full border border-white/20 animate-pulse-glow">
                                <Zap className="w-4 h-4 text-yellow-400" />
                                <span className="text-sm font-semibold">Innovation Starts Here</span>
                            </div>

                            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-tight tracking-tight">
                                <span className="block mb-2" dangerouslySetInnerHTML={{ __html: hero.headline.split('Menjadi Nyata')[0] }} />
                                <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient-flow bg-[length:200%_auto]">
                                    Menjadi Nyata
                                </span>
                            </h1>

                            <p className="text-xl sm:text-2xl text-blue-100/90 leading-relaxed max-w-2xl font-light">
                                {hero.subheadline}
                            </p>

                            <div className="flex gap-8 py-4">
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-white mb-1">500+</div>
                                    <div className="text-sm text-blue-200">Projects</div>
                                </div>
                                <div className="w-px bg-white/20"></div>
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-white mb-1">98%</div>
                                    <div className="text-sm text-blue-200">Success Rate</div>
                                </div>
                                <div className="w-px bg-white/20"></div>
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-white mb-1">50+</div>
                                    <div className="text-sm text-blue-200">Team Members</div>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-wrap gap-4 animate-slideInLeft animation-delay-500">
                            <a
                                href="#contact"
                                className="group relative px-8 py-4 bg-white text-blue-900 rounded-2xl font-bold shadow-2xl hover:shadow-blue-500/50 transition-all duration-500 flex items-center gap-3 hover:scale-105 overflow-hidden"
                            >
                                <span className="relative z-10 flex items-center gap-2">
                                    {hero.cta_text}
                                    <MoveRight className="group-hover:translate-x-2 transition-transform duration-300" />
                                </span>
                                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            </a>

                            <a
                                href="#portfolio"
                                className="group px-8 py-4 bg-white/10 backdrop-blur-xl text-white rounded-2xl font-bold border-2 border-white/30 hover:bg-white/20 hover:border-white/50 transition-all duration-500 hover:scale-105 flex items-center gap-2"
                            >
                                View Portfolio
                                <TrendingUp className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                            </a>
                        </div>
                    </div>

                    <div
                        className="relative animate-slideInRight"
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                    >
                        <div
                            className="relative z-10 transform transition-all duration-700 ease-out"
                            style={{
                                transform: `perspective(1500px) rotateY(${mousePosition.x}deg) rotateX(${-mousePosition.y}deg) scale(${isHovered ? 1.05 : 1})`
                            }}
                        >
                            <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-3xl blur-3xl opacity-30 animate-pulse-slow"></div>

                            <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-6 shadow-2xl border border-white/10">
                                <div className="flex items-center gap-2 mb-4">
                                    <div className="flex gap-2">
                                        <div className="w-3 h-3 rounded-full bg-red-500"></div>
                                        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                                    </div>
                                    <div className="flex-1 h-7 bg-gray-700/50 rounded-lg mx-4"></div>
                                </div>

                                <div className="relative bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-2xl overflow-hidden aspect-video group">
                                    <img
                                        src={hero.image ? `/storage/${hero.image}` : "/images/website.jpeg"}
                                        alt="Project Preview"
                                        className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                </div>

                                <div className="h-8 bg-gray-800 rounded-b-3xl mt-4 flex items-center justify-center">
                                    <div className="w-32 h-1 bg-gray-600 rounded-full"></div>
                                </div>
                            </div>
                        </div>

                        <div className="absolute -top-10 -right-10 bg-white/10 backdrop-blur-xl rounded-2xl p-4 shadow-2xl border border-white/20 animate-float-slow">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                                    <Zap className="w-6 h-6 text-white" />
                                </div>
                                <div>
                                    <div className="text-white font-bold text-sm">Fast Delivery</div>
                                    <div className="text-blue-200 text-xs">Quick turnaround</div>
                                </div>
                            </div>
                        </div>

                        <div className="absolute -bottom-10 -left-10 bg-white/10 backdrop-blur-xl rounded-2xl p-4 shadow-2xl border border-white/20 animate-float-slow" style={{animationDelay: '1s'}}>
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-gradient-to-br from-pink-500 to-purple-600 rounded-xl flex items-center justify-center">
                                    <Sparkles className="w-6 h-6 text-white" />
                                </div>
                                <div>
                                    <div className="text-white font-bold text-sm">Premium Quality</div>
                                    <div className="text-blue-200 text-xs">Top-notch results</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
                <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
                    <div className="w-1 h-2 bg-white rounded-full animate-scroll"></div>
                </div>
            </div>
        </section>
    );
};

// =========================================================================
// == PREMIUM ABOUT SECTION
// =========================================================================
const AboutSection = ({ about }) => {
    if (!about) return null;
    return (
        <section id="about" className="py-24 sm:py-32 bg-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-blue-50 to-transparent opacity-50"></div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div className="space-y-8 animate-slideInLeft">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full">
                            <Sparkles className="w-4 h-4 text-blue-600" />
                            <span className="text-blue-600 font-bold text-sm">About Us</span>
                        </div>

                        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 leading-tight">
                            {about.title}
                        </h2>

                        <div
                            className="text-lg text-gray-600 leading-relaxed space-y-4 prose prose-lg"
                            dangerouslySetInnerHTML={{ __html: about.description }}
                        />

                        <div className="grid grid-cols-2 gap-4 pt-4">
                            <div className="p-4 bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl border border-blue-100">
                                <div className="text-3xl font-black text-blue-600 mb-1">10+</div>
                                <div className="text-sm text-gray-600 font-semibold">Years Experience</div>
                            </div>
                            <div className="p-4 bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl border border-purple-100">
                                <div className="text-3xl font-black text-purple-600 mb-1">24/7</div>
                                <div className="text-sm text-gray-600 font-semibold">Support Available</div>
                            </div>
                        </div>
                    </div>

                    <div className="relative animate-slideInRight">
                        <div className="relative group">
                            <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-3xl blur-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>

                            {about.image && (
                                <img
                                    src={`/storage/${about.image}`}
                                    alt="About Us Illustration"
                                    className="relative rounded-3xl shadow-2xl w-full transform group-hover:scale-105 transition-transform duration-700 border-4 border-white"
                                />
                            )}

                            <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl transform rotate-12 opacity-20 group-hover:rotate-24 transition-transform duration-500"></div>
                            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl transform -rotate-12 opacity-20 group-hover:-rotate-24 transition-transform duration-500"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

// =========================================================================
// == PREMIUM SERVICE CARD
// =========================================================================
const ServiceCard = ({ icon, title, description, color, index }) => (
    <div
        className="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-700 overflow-hidden hover:-translate-y-3 border border-gray-100 hover:border-transparent animate-slideInUp"
        style={{animationDelay: `${index * 100}ms`}}
    >
      <div className={`absolute inset-0 bg-gradient-to-br ${color} opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />
      <div className={`absolute -inset-1 bg-gradient-to-br ${color} opacity-0 group-hover:opacity-20 blur-xl transition-all duration-700`} />
      <div className="relative z-10">
        <div className={`w-20 h-20 bg-gradient-to-br ${color} rounded-3xl flex items-center justify-center mb-6 transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-700 shadow-lg`}>
          {iconMap[icon] || <Code size={36} className="text-white" />}
        </div>
        <h3 className="text-2xl font-black text-gray-900 mb-4 group-hover:text-white transition-colors duration-500">
          {title}
        </h3>
        <p className="text-gray-600 leading-relaxed group-hover:text-white/90 transition-colors duration-500">
          {description}
        </p>
        <div className="mt-6 flex items-center gap-2 text-gray-400 group-hover:text-white transition-colors duration-500">
          <span className="text-sm font-semibold">Learn more</span>
          <MoveRight className="w-5 h-5 transform group-hover:translate-x-2 transition-transform duration-500" />
        </div>
      </div>
      <div className="absolute top-0 right-0 w-32 h-32 opacity-10 group-hover:opacity-20 transition-opacity duration-500">
        <div className={`absolute inset-0 bg-gradient-to-br ${color} transform rotate-45 translate-x-16 -translate-y-16 rounded-2xl`}></div>
      </div>
    </div>
);

const ServicesSection = ({ services }) => {
    if (!services || services.length === 0) return null;
    const serviceColors = [
        'from-blue-500 to-purple-600',
        'from-purple-500 to-pink-600',
        'from-pink-500 to-red-600',
        'from-indigo-500 to-blue-600'
    ];

    return (
        <section id="services" className="py-24 sm:py-32 bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 relative overflow-hidden">
            <div className="absolute top-20 left-20 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float-slow" />
            <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float-slow" style={{animationDelay: '2s'}} />
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-20 animate-fadeIn">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full mb-6">
                        <Zap className="w-4 h-4 text-blue-600" />
                        <span className="text-blue-600 font-bold text-sm">Our Services</span>
                    </div>
                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 mb-6">
                        What We <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Offer</span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        Comprehensive digital solutions tailored to transform your vision into reality
                    </p>
                </div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service, index) => (
                        <ServiceCard
                            key={service.id}
                            {...service}
                            color={serviceColors[index % serviceColors.length]}
                            index={index}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

// =========================================================================
// == PREMIUM PORTFOLIO SECTION
// =========================================================================
const PortfolioSection = ({ portfolios }) => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [hoveredItem, setHoveredItem] = useState(null);

  if (!portfolios || portfolios.length === 0) return null;

  const filters = ['All', ...new Set(portfolios.map(p => p.category))];
  const filteredPortfolio = useMemo(() => {
    if (activeFilter === 'All') return portfolios;
    return portfolios.filter(item => item.category === activeFilter);
  }, [activeFilter, portfolios]);

  return (
    <section id="portfolio" className="py-24 sm:py-32 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-50/30 to-transparent"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-20 animate-fadeIn">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full mb-6">
                    <Sparkles className="w-4 h-4 text-purple-600" />
                    <span className="text-purple-600 font-bold text-sm">Our Work</span>
                </div>
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 mb-6">
                    Featured <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Projects</span>
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                    Explore our latest creations and success stories that make an impact
                </p>
            </div>

            <div className="flex justify-center flex-wrap gap-4 mb-16">
                {filters.map(filter => (
                    <button
                        key={filter}
                        onClick={() => setActiveFilter(filter)}
                        className={`relative px-8 py-3.5 rounded-2xl font-bold transition-all duration-500 overflow-hidden ${
                            activeFilter === filter
                                ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-2xl shadow-purple-500/50 scale-105'
                                : 'bg-white text-gray-700 hover:bg-gray-50 shadow-lg hover:shadow-xl border border-gray-200'
                        }`}
                    >
                        <span className="relative z-10">{filter}</span>
                        {activeFilter === filter && (
                            <div className="absolute inset-0 animate-shimmer bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
                        )}
                    </button>
                ))}
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredPortfolio.map((item, index) => (
                    <div
                        key={item.id}
                        className="group relative rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-700 animate-fadeIn hover:-translate-y-3 border-2 border-transparent hover:border-purple-200"
                        style={{ animationDelay: `${index * 100}ms` }}
                        onMouseEnter={() => setHoveredItem(item.id)}
                        onMouseLeave={() => setHoveredItem(null)}
                    >
                        <div className="relative overflow-hidden aspect-[4/3]">
                            <img
                                src={`/storage/${item.image}`}
                                alt={item.title}
                                className="w-full h-full object-cover transform group-hover:scale-125 transition-transform duration-1000"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-500"></div>
                            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                <div className="absolute inset-0 border-2 border-white/30 rounded-3xl animate-pulse-glow"></div>
                            </div>
                        </div>
                        <div className="absolute inset-0 flex flex-col justify-end p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/10 backdrop-blur-xl rounded-full text-xs font-bold text-white mb-3 w-fit border border-white/20">
                                <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full animate-pulse"></div>
                                {item.category}
                            </div>
                            <h3 className="text-white text-2xl font-black mb-2 transform group-hover:scale-105 transition-transform duration-500">
                                {item.title}
                            </h3>
                            <div className="flex items-center gap-2 text-white/80 group-hover:text-white transition-colors duration-300 opacity-0 group-hover:opacity-100">
                                <span className="text-sm font-semibold">View Project</span>
                                <MoveRight className="w-5 h-5 transform group-hover:translate-x-2 transition-transform duration-300" />
                            </div>
                        </div>
                        {hoveredItem === item.id && (
                            <div className="absolute -inset-2 bg-gradient-to-r from-purple-500 to-pink-500 opacity-30 blur-2xl -z-10 animate-pulse-slow"></div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    </section>
  );
};

// =========================================================================
// == PREMIUM TEAM SECTION
// =========================================================================
const TeamSection = ({ team }) => {
    if (!team || team.length === 0) return null;

    return (
        <section id="team" className="py-24 sm:py-32 bg-gradient-to-br from-gray-50 via-purple-50 to-pink-50 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float-slow" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float-slow" style={{animationDelay: '1.5s'}} />
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-20 animate-fadeIn">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-pink-100 to-purple-100 rounded-full mb-6">
                        <Sparkles className="w-4 h-4 text-pink-600" />
                        <span className="text-pink-600 font-bold text-sm">Our Team</span>
                    </div>
                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 mb-6">
                        Meet The <span className="bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">Experts</span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        Talented professionals dedicated to bringing your vision to life
                    </p>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {team.map((member, index) => (
                        <div
                            key={member.id}
                            className="group text-center animate-slideInUp"
                            style={{ animationDelay: `${index * 100}ms` }}
                        >
                            <div className="relative overflow-hidden rounded-3xl mb-5 shadow-2xl group-hover:shadow-3xl transition-all duration-700">
                                <div className="absolute -inset-2 bg-gradient-to-r from-pink-500 to-purple-500 opacity-0 group-hover:opacity-30 blur-2xl transition-opacity duration-500 -z-10"></div>
                                <img
                                    src={`/storage/${member.photo}`}
                                    alt={member.name}
                                    className="w-full aspect-square object-cover transform group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-purple-600/90 via-purple-600/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center pb-6">
                                    <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                        <div className="flex gap-3">
                                            <a href={member.linkedin_url || '#'} target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30 hover:bg-white/30 transition-colors cursor-pointer">
                                                <span className="text-white text-sm">in</span>
                                            </a>
                                            <a href={member.twitter_url || '#'} target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30 hover:bg-white/30 transition-colors cursor-pointer">
                                                <span className="text-white text-sm">tw</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="absolute inset-0 border-2 border-transparent group-hover:border-white/30 rounded-3xl transition-all duration-500"></div>
                            </div>
                            <h3 className="text-xl font-black text-gray-900 mb-2 group-hover:text-purple-600 transition-colors duration-300">
                                {member.name}
                            </h3>
                            <p className="text-gray-600 font-medium">
                                {member.role}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

// =========================================================================
// == PREMIUM CONTACT SECTION
// =========================================================================
const ContactSection = () => {
  const [data, setData] = useState({ name: '', email: '', message: '' });
  const [processing, setProcessing] = useState(false);
  const [errors, setErrors] = useState({});
  const [recentlySuccessful, setRecentlySuccessful] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setProcessing(true);
    // TODO: Ganti dengan logika pengiriman form Anda
    setTimeout(() => {
      setProcessing(false);
      setRecentlySuccessful(true);
      setData({ name: '', email: '', message: '' });
      setTimeout(() => setRecentlySuccessful(false), 5000);
    }, 1000);
  };

  return (
    <section id="contact" className="py-24 sm:py-32 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 relative overflow-hidden">
        <FloatingParticles />
        <GridBackground />
        <GlowingOrbs />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-20 animate-fadeIn">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-xl rounded-full mb-6 border border-white/20">
                    <Send className="w-4 h-4 text-white" />
                    <span className="text-white font-bold text-sm">Get In Touch</span>
                </div>
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6">
                    Let's Start Your <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Project</span>
                </h2>
                <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
                    Ready to transform your ideas into reality? Drop us a message and let's create something amazing together!
                </p>
            </div>
            <div className="max-w-4xl mx-auto">
                {recentlySuccessful && (
                    <div className="mb-8 bg-gradient-to-r from-green-500 to-emerald-500 text-white px-8 py-5 rounded-3xl shadow-2xl animate-slideInDown flex items-center gap-4 border border-white/20">
                        <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center flex-shrink-0">
                            <span className="text-green-500 font-bold text-xl">✓</span>
                        </div>
                        <div>
                            <strong className="text-lg">Success!</strong>
                            <span className="block text-green-50">Your message has been sent successfully. We'll get back to you soon!</span>
                        </div>
                    </div>
                )}
                <form onSubmit={handleSubmit} className="bg-white/10 backdrop-blur-2xl rounded-3xl p-10 shadow-2xl border border-white/20 animate-slideInUp">
                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                        <div className="group">
                            <label htmlFor="name" className="block text-sm font-bold text-white mb-3 flex items-center gap-2">
                                <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                                Your Name
                            </label>
                            <input
                                id="name" type="text" value={data.name} onChange={e => setData({...data, name: e.target.value})}
                                className="w-full px-5 py-4 bg-white/10 backdrop-blur-md border-2 border-white/20 rounded-2xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-300 group-hover:border-white/30"
                                placeholder="John Doe" required
                            />
                            {errors.name && <div className="text-pink-300 text-sm mt-2 flex items-center gap-1"><span>⚠</span>{errors.name}</div>}
                        </div>
                        <div className="group">
                            <label htmlFor="email" className="block text-sm font-bold text-white mb-3 flex items-center gap-2">
                                <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                                Email Address
                            </label>
                            <input
                                id="email" type="email" value={data.email} onChange={e => setData({...data, email: e.target.value})}
                                className="w-full px-5 py-4 bg-white/10 backdrop-blur-md border-2 border-white/20 rounded-2xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent transition-all duration-300 group-hover:border-white/30"
                                placeholder="john@example.com" required
                            />
                            {errors.email && <div className="text-pink-300 text-sm mt-2 flex items-center gap-1"><span>⚠</span>{errors.email}</div>}
                        </div>
                    </div>
                    <div className="mb-8 group">
                        <label htmlFor="message" className="block text-sm font-bold text-white mb-3 flex items-center gap-2">
                            <span className="w-2 h-2 bg-pink-400 rounded-full"></span>
                            Your Message
                        </label>
                        <textarea
                            id="message" rows="6" value={data.message} onChange={e => setData({...data, message: e.target.value})}
                            className="w-full px-5 py-4 bg-white/10 backdrop-blur-md border-2 border-white/20 rounded-2xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-transparent transition-all duration-300 resize-none group-hover:border-white/30"
                            placeholder="Tell us about your project and how we can help you..." required
                        ></textarea>
                        {errors.message && <div className="text-pink-300 text-sm mt-2 flex items-center gap-1"><span>⚠</span>{errors.message}</div>}
                    </div>
                    <div className="text-center">
                        <button
                            type="submit" disabled={processing}
                            className="group relative inline-flex items-center gap-3 px-10 py-5 bg-white text-blue-900 rounded-2xl font-black shadow-2xl hover:shadow-white/30 transition-all duration-500 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed overflow-hidden"
                        >
                            <span className="relative z-10 flex items-center gap-3">
                                {processing ? 'Sending...' : 'Send Message'}
                                <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                            </span>
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            {!processing && (
                                <div className="absolute inset-0 animate-shimmer bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
                            )}
                        </button>
                    </div>
                </form>
                <div className="grid md:grid-cols-3 gap-6 mt-12">
                     <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20 text-center hover:bg-white/15 transition-all duration-300 animate-slideInUp" style={{animationDelay: '200ms'}}>
                        <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                            <span className="text-2xl">📧</span>
                        </div>
                        <h4 className="text-white font-bold mb-2">Email Us</h4>
                        <p className="text-blue-200 text-sm">hello@digital.com</p>
                    </div>
                     <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20 text-center hover:bg-white/15 transition-all duration-300 animate-slideInUp" style={{animationDelay: '300ms'}}>
                        <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                            <span className="text-2xl">📞</span>
                        </div>
                        <h4 className="text-white font-bold mb-2">Call Us</h4>
                        <p className="text-blue-200 text-sm">+1 (555) 123-4567</p>
                    </div>
                     <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20 text-center hover:bg-white/15 transition-all duration-300 animate-slideInUp" style={{animationDelay: '400ms'}}>
                        <div className="w-14 h-14 bg-gradient-to-br from-pink-500 to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                            <span className="text-2xl">📍</span>
                        </div>
                        <h4 className="text-white font-bold mb-2">Visit Us</h4>
                        <p className="text-blue-200 text-sm">123 Innovation St</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
};

// =========================================================================
// == PREMIUM FOOTER
// =========================================================================
const Footer = ({ settings }) => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowScrollTop(window.scrollY > 500);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-slate-900 to-gray-900 text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
            <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500 rounded-full filter blur-3xl"></div>
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid md:grid-cols-4 gap-12 mb-12">
                <div className="md:col-span-2">
                    <div className="flex items-center gap-3 mb-4">
                        {settings?.logo && (
                            <img src={`/storage/${settings.logo}`} alt="Logo" className="w-10 h-10 object-contain" />
                        )}
                        <span className="font-black text-xl bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                           {settings?.company_name || 'DIGITAL SOLUTIONS'}
                        </span>
                    </div>
                    <p className="text-gray-400 leading-relaxed mb-6">
                        {settings?.footer_text || 'Transforming ideas into digital reality with innovation and excellence.'}
                    </p>
                    <div className="flex gap-3">
                        {['fb', 'tw', 'in', 'ig'].map((social, i) => (
                            <a key={social} href="#" className="w-10 h-10 bg-white/10 backdrop-blur-md rounded-xl flex items-center justify-center hover:bg-white/20 transition-all duration-300 cursor-pointer hover:scale-110 border border-white/10" style={{animationDelay: `${i * 100}ms`}}>
                                <span className="text-xs font-bold">{social}</span>
                            </a>
                        ))}
                    </div>
                </div>
                <div>
                    <h4 className="font-black text-lg mb-4">Quick Links</h4>
                    <ul className="space-y-3">
                        {['About', 'Services', 'Portfolio', 'Contact'].map(link => (
                            <li key={link}>
                                <a href={`#${link.toLowerCase()}`} className="text-gray-400 hover:text-white transition-colors duration-300 hover:translate-x-1 inline-block">
                                    {link}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
                <div>
                    <h4 className="font-black text-lg mb-4">Contact</h4>
                    <ul className="space-y-3 text-gray-400">
                        <li className="flex items-start gap-2">
                            <span>📧</span>
                            <span className="text-sm">hello@digital.com</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span>📞</span>
                            <span className="text-sm">+1 (555) 123-4567</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span>📍</span>
                            <span className="text-sm">123 Innovation Street</span>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mb-8"></div>
            <div className="text-center">
                <p className="text-gray-400 text-sm">
                    &copy; {new Date().getFullYear()} {settings?.company_name || 'Digital Solutions'}. All rights reserved.
                </p>
                <p className="text-gray-500 text-xs mt-2">
                    Crafted with 💜 by our amazing team
                </p>
            </div>
        </div>
        {showScrollTop && (
            <button
                onClick={scrollToTop}
                className="fixed bottom-8 right-8 w-14 h-14 bg-gradient-to-br from-blue-600 to-purple-600 text-white rounded-2xl shadow-2xl hover:shadow-blue-500/50 transition-all duration-500 hover:scale-110 z-50 flex items-center justify-center animate-fadeIn group border-2 border-white/20"
            >
                <ArrowUp size={24} className="group-hover:-translate-y-1 transition-transform duration-300" />
                <div className="absolute inset-0 rounded-2xl animate-ping-slow opacity-30 bg-white"></div>
            </button>
        )}
    </footer>
  );
};


// =========================================================================
// == MAIN APP COMPONENT
// =========================================================================
export default function Home() {
  // Ambil data langsung dari props yang dikirim oleh Inertia
  const { settings, hero, about, services, portfolios, team } = usePage().props;

  // Cek jika data belum ada (misal saat render pertama kali)
  if (!settings || !hero) {
    return (
        <div className="min-h-screen bg-slate-900 flex justify-center items-center text-white">
            <div className="text-center">
                <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-blue-500 mx-auto"></div>
                <p className="mt-4 text-lg font-semibold">Memuat Data Halaman...</p>
            </div>
        </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <style>{`
        /* ... All animation styles are here ... */
        @keyframes float-complex { 0%, 100% { transform: translate(0, 0) rotate(0deg); opacity: 0.3; } 25% { transform: translate(30px, -30px) rotate(90deg); opacity: 0.6; } 50% { transform: translate(-20px, 20px) rotate(180deg); opacity: 0.4; } 75% { transform: translate(40px, 40px) rotate(270deg); opacity: 0.7; } }
        @keyframes float-slow { 0%, 100% { transform: translate(0, 0) scale(1); } 33% { transform: translate(-30px, -50px) scale(1.1); } 66% { transform: translate(30px, 30px) scale(0.95); } }
        @keyframes pulse-slow { 0%, 100% { opacity: 0.2; transform: scale(1); } 50% { opacity: 0.3; transform: scale(1.05); } }
        @keyframes pulse-glow { 0%, 100% { box-shadow: 0 0 20px rgba(59, 130, 246, 0.5); } 50% { box-shadow: 0 0 40px rgba(147, 51, 234, 0.8); } }
        @keyframes gradient-flow { 0% { background-position: 0% 50%; } 50% { background-position: 100% 50%; } 100% { background-position: 0% 50%; } }
        @keyframes shimmer { 0% { transform: translateX(-100%); } 100% { transform: translateX(100%); } }
        @keyframes gridMove { 0% { transform: translate(0, 0); } 100% { transform: translate(50px, 50px); } }
        @keyframes ping-slow { 0% { transform: scale(1); opacity: 1; } 75%, 100% { transform: scale(1.5); opacity: 0; } }
        @keyframes slideInLeft { from { opacity: 0; transform: translateX(-100px); } to { opacity: 1; transform: translateX(0); } }
        @keyframes slideInRight { from { opacity: 0; transform: translateX(100px); } to { opacity: 1; transform: translateX(0); } }
        @keyframes slideInUp { from { opacity: 0; transform: translateY(100px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes slideInDown { from { opacity: 0; transform: translateY(-50px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes bounce { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-20px); } }
        @keyframes scroll { 0% { transform: translateY(0); opacity: 0; } 50% { opacity: 1; } 100% { transform: translateY(16px); opacity: 0; } }
        .animate-float-complex { animation: float-complex 20s ease-in-out infinite; }
        .animate-float-slow { animation: float-slow 15s ease-in-out infinite; }
        .animate-pulse-slow { animation: pulse-slow 4s ease-in-out infinite; }
        .animate-pulse-glow { animation: pulse-glow 2s ease-in-out infinite; }
        .animate-gradient-flow { animation: gradient-flow 3s linear infinite; }
        .animate-shimmer { animation: shimmer 2s linear infinite; }
        .animate-ping-slow { animation: ping-slow 2s cubic-bezier(0, 0, 0.2, 1) infinite; }
        .animate-slideInLeft { animation: slideInLeft 0.8s ease-out forwards; }
        .animate-slideInRight { animation: slideInRight 0.8s ease-out forwards; }
        .animate-slideInUp { animation: slideInUp 0.8s ease-out forwards; }
        .animate-slideInDown { animation: slideInDown 0.5s ease-out forwards; }
        .animate-fadeIn { animation: fadeIn 0.8s ease-out forwards; }
        .animate-bounce { animation: bounce 2s ease-in-out infinite; }
        .animate-scroll { animation: scroll 2s ease-in-out infinite; }
        .animation-delay-500 { animation-delay: 0.5s; }

        /* FIX: Menambahkan smooth scrolling */
        html {
          scroll-behavior: smooth;
        }

        ::-webkit-scrollbar { width: 10px; }
        ::-webkit-scrollbar-track { background: #f1f1f1; }
        ::-webkit-scrollbar-thumb { background: linear-gradient(180deg, #3b82f6, #8b5cf6); border-radius: 10px; }
        ::-webkit-scrollbar-thumb:hover { background: linear-gradient(180deg, #2563eb, #7c3aed); }
        .prose p { margin-bottom: 1rem; }
        .backdrop-blur-xl { backdrop-filter: blur(20px); }
        .backdrop-blur-2xl { backdrop-filter: blur(40px); }
        .bg-clip-text { -webkit-background-clip: text; background-clip: text; color: transparent; }
        .shadow-3xl { box-shadow: 0 35px 60px -15px rgba(0, 0, 0, 0.3); }
        img[src$=""] {
            background: linear-gradient(135deg, #e0e0e0, #c7c7c7);
            display: flex; align-items: center; justify-content: center;
            color: #888; text-align:center; font-size: 12px;
        }
        img[src$=""]::after { content: 'Gambar tidak tersedia'; }
        *:focus-visible { outline: 2px solid #3b82f6; outline-offset: 2px; }
        ::selection { background-color: #3b82f6; color: white; }
      `}</style>

      <AnimatedNavbar settings={settings} />

      <main>
        <HeroSection hero={hero} />
        <AboutSection about={about} />
        <ServicesSection services={services} />
        <PortfolioSection portfolios={portfolios} />
        <TeamSection team={team} />
        <ContactSection />
      </main>

      <Footer settings={settings} />
    </div>
  );
}

