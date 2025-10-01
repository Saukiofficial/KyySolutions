import { useState, useEffect } from 'react';
import { Link } from '@inertiajs/react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Code, Linkedin, Instagram, Github } from 'lucide-react';

// Komponen Logo
const Logo = () => (
    <Link href="/" className="text-2xl font-bold tracking-tighter text-white">
        KYYS<span className="text-brand-light">olutions</span>
    </Link>
);

// Komponen Header
const Header = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '#home' },
        { name: 'About', href: '#about' },
        { name: 'Services', href: '#services' },
        { name: 'Portfolio', href: '#portfolio' },
        { name: 'Team', href: '#team' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <motion.header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300`}
            initial={{ backgroundColor: 'transparent', backdropFilter: 'blur(0px)' }}
            animate={{
                backgroundColor: scrolled || mobileMenuOpen ? '#1E3A8A' : 'transparent',
                boxShadow: scrolled || mobileMenuOpen ? '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)' : 'none'
            }}
        >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    <Logo />
                    <nav className="hidden md:flex space-x-6">
                        {navLinks.map((link) => (
                            <a key={link.name} href={link.href} className="text-white hover:text-brand-light transition-colors duration-300 font-medium">
                                {link.name}
                            </a>
                        ))}
                    </nav>
                    <div className="md:hidden">
                        <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-white">
                            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>
                </div>
            </div>
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-brand-blue-dark"
                    >
                        <nav className="flex flex-col items-center space-y-4 py-6">
                            {navLinks.map((link) => (
                                <a key={link.name} href={link.href} onClick={() => setMobileMenuOpen(false)} className="text-white text-lg hover:text-brand-light transition-colors duration-300">
                                    {link.name}
                                </a>
                            ))}
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.header>
    );
};

// Komponen Footer
const Footer = () => {
    return (
        <footer className="bg-brand-blue-dark text-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
                    <div>
                        <h3 className="text-xl font-bold">KYYSolutions</h3>
                        <p className="mt-2 text-gray-300">Transforming Ideas into Reality.</p>
                        <p className="mt-2 text-gray-400">Jl. Teknologi No. 1, Surabaya, Indonesia</p>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold">Quick Links</h3>
                        <ul className="mt-2 space-y-2">
                            <li><a href="#about" className="hover:text-brand-light transition">About Us</a></li>
                            <li><a href="#services" className="hover:text-brand-light transition">Services</a></li>
                            <li><a href="#portfolio" className="hover:text-brand-light transition">Portfolio</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold">Connect With Us</h3>
                        <div className="flex justify-center md:justify-start space-x-4 mt-4">
                            <a href="#" className="hover:text-brand-light transition"><Github /></a>
                            <a href="#" className="hover:text-brand-light transition"><Linkedin /></a>
                            <a href="#" className="hover:text-brand-light transition"><Instagram /></a>
                        </div>
                    </div>
                </div>
                <div className="mt-12 border-t border-gray-700 pt-8 text-center text-gray-400">
                    <p>&copy; {new Date().getFullYear()} KYYSolutions. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
};


// Layout Utama
export default function AppLayout({ children }) {
    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-grow">
                {children}
            </main>
            <Footer />
        </div>
    );
}
