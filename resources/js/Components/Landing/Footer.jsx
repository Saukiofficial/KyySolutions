import React, { useState, useEffect } from 'react';
import { ArrowUp, Instagram, Github, Facebook } from 'lucide-react';

const Footer = ({ settings }) => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowScrollTop(window.scrollY > 500);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  // Custom TikTok Icon component since it might not be in older Lucide versions
  const TiktokIcon = ({ className }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
    </svg>
  );

  // PETUNJUK PENGEDITAN:
  // Ganti URL '#' di bawah ini dengan link profil sosial media Anda yang sebenarnya.
  // Contoh: url: 'https://instagram.com/nama_user_anda'
  const socialLinks = [
    {
      name: 'Instagram',
      icon: Instagram,
      url: 'https://instagram.com/username_anda', // <-- Ganti ini
      color: 'hover:text-pink-500'
    },
    {
      name: 'TikTok',
      icon: TiktokIcon,
      url: 'https://tiktok.com/@username_anda', // <-- Ganti ini
      color: 'hover:text-cyan-400'
    },
    {
      name: 'GitHub',
      icon: Github,
      url: 'https://github.com/username_anda', // <-- Ganti ini
      color: 'hover:text-gray-400'
    },
    // { name: 'Facebook', icon: Facebook, url: '#', color: 'hover:text-blue-500' }, // Opsional
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-slate-900 to-gray-900 text-white py-8 sm:py-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 pointer-events-none">
            <div className="absolute top-0 left-0 w-48 h-48 sm:w-96 sm:h-96 bg-blue-500 rounded-full filter blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-48 h-48 sm:w-96 sm:h-96 bg-purple-500 rounded-full filter blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            {/* GRID SYSTEM:
               - Mobile: 2 Kolom (Logo span 2, Links span 1, Contact span 1) -> Hasilnya Links & Contact sebelahan
               - Desktop: 4 Kolom standard
            */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-8 sm:gap-12 mb-8 sm:mb-12">

                {/* Brand Section - Full width on mobile (col-span-2) */}
                <div className="col-span-2">
                    <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                        {settings?.logo && (
                            <img src={`/storage/${settings.logo}`} alt="Logo" className="w-8 h-8 sm:w-10 sm:h-10 object-contain" />
                        )}
                        <span className="font-black text-lg sm:text-xl bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                           {settings?.company_name || 'DIGITAL SOLUTIONS'}
                        </span>
                    </div>
                    <p className="text-gray-400 leading-relaxed mb-4 sm:mb-6 text-xs sm:text-base pr-4 sm:pr-0">
                        {settings?.footer_text || 'Transforming ideas into digital reality with innovation and excellence.'}
                    </p>
                    <div className="flex gap-2 sm:gap-3">
                        {socialLinks.map((social, i) => {
                            const Icon = social.icon;
                            return (
                                <a
                                    key={social.name}
                                    href={social.url}
                                    target="_blank" // Membuka link di tab baru
                                    rel="noopener noreferrer" // Keamanan tambahan untuk target="_blank"
                                    className={`w-8 h-8 sm:w-10 sm:h-10 bg-white/10 backdrop-blur-md rounded-lg sm:rounded-xl flex items-center justify-center hover:bg-white/20 transition-all duration-300 cursor-pointer hover:scale-110 border border-white/10 ${social.color}`}
                                    style={{animationDelay: `${i * 100}ms`}}
                                    aria-label={social.name}
                                >
                                    <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                                </a>
                            );
                        })}
                    </div>
                </div>

                {/* Quick Links - Half width on mobile */}
                <div className="col-span-1">
                    <h4 className="font-black text-sm sm:text-lg mb-3 sm:mb-4 text-white">Quick Links</h4>
                    <ul className="space-y-2 sm:space-y-3">
                        {['About', 'Services', 'Portfolio', 'Contact'].map(link => (
                            <li key={link}>
                                <a href={`#${link.toLowerCase()}`} className="text-gray-400 text-xs sm:text-base hover:text-white transition-colors duration-300 hover:translate-x-1 inline-block">
                                    {link}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Contact Info - Half width on mobile */}
                <div className="col-span-1">
                    <h4 className="font-black text-sm sm:text-lg mb-3 sm:mb-4 text-white">Contact</h4>
                    <ul className="space-y-2 sm:space-y-3 text-gray-400">
                        <li className="flex items-start gap-2">
                            <span className="text-xs sm:text-base">📧</span>
                            <span className="text-[10px] sm:text-sm break-all">kyysolutions17@gmail.com</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-xs sm:text-base">📞</span>
                            <span className="text-[10px] sm:text-sm">081232916758</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-xs sm:text-base">📍</span>
                            <span className="text-[10px] sm:text-sm line-clamp-3">Dsn Daleman Desa Poreh Kec. Lenteng Kab. Sumenep </span>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mb-6 sm:mb-8"></div>

            <div className="text-center">
                <p className="text-gray-400 text-[10px] sm:text-sm">
                    &copy; {new Date().getFullYear()} {settings?.company_name || 'Digital Solutions'}. All rights reserved.
                </p>
                <p className="text-gray-500 text-[10px] sm:text-xs mt-1 sm:mt-2">
                    developed by kyysolutions
                </p>
            </div>
        </div>

        {/* Scroll To Top - Smaller on Mobile */}
        {showScrollTop && (
            <button
                onClick={scrollToTop}
                className="fixed bottom-4 right-4 sm:bottom-8 sm:right-8 w-10 h-10 sm:w-14 sm:h-14 bg-gradient-to-br from-blue-600 to-purple-600 text-white rounded-xl sm:rounded-2xl shadow-2xl hover:shadow-blue-500/50 transition-all duration-500 hover:scale-110 z-50 flex items-center justify-center animate-fadeIn group border-2 border-white/20"
            >
                <ArrowUp size={20} className="sm:w-6 sm:h-6 group-hover:-translate-y-1 transition-transform duration-300" />
                <div className="absolute inset-0 rounded-xl sm:rounded-2xl animate-ping-slow opacity-30 bg-white"></div>
            </button>
        )}
    </footer>
  );
};

export default Footer;
