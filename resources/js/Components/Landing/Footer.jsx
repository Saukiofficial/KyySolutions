import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

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
                            <span className="text-sm">kyysolutions17@gmail.com</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span>📞</span>
                            <span className="text-sm">081232916758</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span>📍</span>
                            <span className="text-sm">Dsn Daleman Desa Poreh Kec. Lenteng Kab. Sumenep </span>
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

export default Footer;
