import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, Award, Clock, Shield, Sparkles, TrendingUp, Users } from 'lucide-react';

const AboutSection = ({ about }) => {
    const [isVisible, setIsVisible] = useState(false);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [activeCard, setActiveCard] = useState(null);
    const sectionRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            const section = document.getElementById('about');
            if (section) {
                const rect = section.getBoundingClientRect();
                const windowHeight = window.innerHeight;
                if (rect.top < windowHeight * 0.7) {
                    setIsVisible(true);
                }
            }
        };

        handleScroll();
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleMouseMove = (e) => {
        if (sectionRef.current) {
            const rect = sectionRef.current.getBoundingClientRect();
            setMousePosition({
                x: ((e.clientX - rect.left) / rect.width) * 100,
                y: ((e.clientY - rect.top) / rect.height) * 100
            });
        }
    };

    if (!about) return null;

    const features = [
        {
            value: '10+',
            label: 'Years Excellence',
            icon: Award,
            color: 'from-blue-500 to-cyan-500',
            description: 'Industry leadership'
        },
        {
            value: '24/7',
            label: 'Always Available',
            icon: Clock,
            color: 'from-purple-500 to-pink-500',
            description: 'Round-the-clock support'
        },
        {
            value: '100%',
            label: 'Secure Platform',
            icon: Shield,
            color: 'from-orange-500 to-red-500',
            description: 'Bank-level security'
        }
    ];

    return (
        <section
            id="about"
            ref={sectionRef}
            className="relative py-12 md:py-24 lg:py-32 bg-gradient-to-b from-gray-50 via-white to-gray-50 overflow-hidden"
            onMouseMove={handleMouseMove}
        >
            {/* Dynamic gradient background that follows mouse */}
            <div
                className="absolute inset-0 opacity-30 transition-all duration-700 ease-out pointer-events-none"
                style={{
                    background: `radial-gradient(circle 800px at ${mousePosition.x}% ${mousePosition.y}%, rgba(59, 130, 246, 0.1), transparent 70%)`
                }}
            />

            {/* Animated mesh gradient - Hide on mobile */}
            <div className="hidden md:block absolute top-0 left-0 w-full h-full opacity-20">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-blue-400 to-cyan-300 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
                <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-gradient-to-br from-purple-400 to-pink-300 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
                <div className="absolute bottom-1/4 left-1/2 w-96 h-96 bg-gradient-to-br from-orange-300 to-yellow-300 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
            </div>

            {/* Minimalist line accents - Hide on mobile */}
            <div className="hidden lg:block absolute top-20 left-0 w-px h-32 bg-gradient-to-b from-transparent via-gray-300 to-transparent"></div>
            <div className="hidden lg:block absolute bottom-20 right-0 w-px h-32 bg-gradient-to-b from-transparent via-gray-300 to-transparent"></div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
                <div className="grid grid-cols-2 lg:grid-cols-12 gap-4 md:gap-8 lg:gap-20 items-center">
                    {/* Left Content - 7 columns on desktop, 1 column on mobile */}
                    <div className="lg:col-span-7 space-y-3 md:space-y-6 lg:space-y-10">
                        {/* Magnetic badge - Smaller on mobile */}
                        <div
                            className="inline-block"
                            style={{
                                opacity: isVisible ? 1 : 0,
                                transform: isVisible ? 'translateY(0) scale(1)' : 'translateY(-20px) scale(0.9)',
                                transition: 'all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)'
                            }}
                        >
                            <div className="relative group">
                                <div className="hidden md:block absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur-md opacity-50 group-hover:opacity-75 transition-opacity"></div>
                                <div className="relative flex items-center gap-1.5 md:gap-2 px-2 py-1 md:px-5 md:py-2.5 bg-white border border-gray-200 rounded-full">
                                    <div className="relative">
                                        <div className="hidden md:block absolute inset-0 bg-blue-500 rounded-full animate-ping opacity-75"></div>
                                        <Sparkles className="w-3 h-3 md:w-4 md:h-4 text-blue-600 relative z-10" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Title with stagger animation - Responsive text sizes */}
                        <div
                            className="space-y-2 md:space-y-4 lg:space-y-6"
                            style={{
                                opacity: isVisible ? 1 : 0,
                                transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                                transition: 'all 0.9s cubic-bezier(0.16, 1, 0.3, 1) 0.1s'
                            }}
                        >
                            <h2 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-7xl font-bold text-gray-900 leading-[1.05] tracking-tight">
                                {about.title.split(' ').map((word, i) => (
                                    <span
                                        key={i}
                                        className="inline-block"
                                        style={{
                                            opacity: isVisible ? 1 : 0,
                                            transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                                            transition: `all 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${0.1 + i * 0.05}s`
                                        }}
                                    >
                                        {word}&nbsp;
                                    </span>
                                ))}
                            </h2>

                            {/* Accent line - Smaller on mobile */}
                            <div className="flex items-center gap-2 md:gap-4">
                                <div className="h-0.5 md:h-1 w-8 md:w-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></div>
                                <div className="h-px flex-1 bg-gradient-to-r from-gray-300 to-transparent"></div>
                            </div>
                        </div>

                        {/* Description - Line clamp on mobile */}
                        <div
                            className="text-[10px] sm:text-sm md:text-base lg:text-xl text-gray-600 leading-relaxed max-w-2xl line-clamp-3 md:line-clamp-none"
                            style={{
                                opacity: isVisible ? 1 : 0,
                                transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                                transition: 'all 0.9s cubic-bezier(0.16, 1, 0.3, 1) 0.2s'
                            }}
                            dangerouslySetInnerHTML={{ __html: about.description }}
                        />

                        {/* Stats cards - Responsive grid */}
                        <div
                            className="grid grid-cols-3 gap-2 md:gap-4"
                            style={{
                                opacity: isVisible ? 1 : 0,
                                transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                                transition: 'all 0.9s cubic-bezier(0.16, 1, 0.3, 1) 0.3s'
                            }}
                        >
                            {features.map((feature, index) => {
                                const Icon = feature.icon;
                                return (
                                    <div
                                        key={index}
                                        onMouseEnter={() => setActiveCard(index)}
                                        onMouseLeave={() => setActiveCard(null)}
                                        className="group relative bg-white rounded-lg md:rounded-2xl p-2 md:p-4 lg:p-6 border border-gray-200 hover:border-transparent transition-all duration-500 cursor-pointer"
                                        style={{
                                            transform: activeCard === index ? 'translateY(-8px)' : 'translateY(0)',
                                            boxShadow: activeCard === index ? '0 20px 60px -10px rgba(0,0,0,0.15)' : '0 0 0 0 rgba(0,0,0,0)'
                                        }}
                                    >
                                        {/* Gradient overlay on hover */}
                                        <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 rounded-lg md:rounded-2xl transition-opacity duration-500`}></div>

                                        <div className="relative z-10 space-y-1 md:space-y-2 lg:space-y-3">
                                            <div className={`inline-flex p-1.5 md:p-2 lg:p-3 rounded-lg md:rounded-xl bg-gradient-to-br ${feature.color} bg-opacity-10`}>
                                                <Icon className="w-3 h-3 md:w-4 md:h-4 lg:w-6 lg:h-6 text-gray-700" />
                                            </div>
                                            <div className="text-base md:text-xl lg:text-3xl font-bold text-gray-900">{feature.value}</div>
                                            <div className="text-[8px] md:text-xs lg:text-sm font-semibold text-gray-900 leading-tight">{feature.label}</div>
                                            <div className="hidden md:block text-[10px] lg:text-xs text-gray-500">{feature.description}</div>
                                        </div>

                                        {/* Bottom accent line */}
                                        <div className={`absolute bottom-0 left-0 h-0.5 md:h-1 bg-gradient-to-r ${feature.color} w-0 group-hover:w-full transition-all duration-500 rounded-b-lg md:rounded-b-2xl`}></div>
                                    </div>
                                );
                            })}
                        </div>

                        {/* CTA Button - Smaller on mobile */}
                        <div
                            style={{
                                opacity: isVisible ? 1 : 0,
                                transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                                transition: 'all 0.9s cubic-bezier(0.16, 1, 0.3, 1) 0.4s'
                            }}
                        >
                            <button className="group relative inline-flex items-center gap-1.5 md:gap-3 px-4 py-2 md:px-8 md:py-4 bg-gray-900 text-white rounded-full overflow-hidden transition-all duration-300 hover:pr-6 md:hover:pr-10 text-[10px] md:text-base">
                                {/* Animated gradient background */}
                                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                                {/* Shine effect - Hide on mobile */}
                                <div className="hidden md:block absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>

                                <span className="relative z-10 font-semibold">Explore More</span>
                                <ArrowRight className="relative z-10 w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-2 transition-transform duration-300" />
                            </button>
                        </div>
                    </div>

                    {/* Right Image - 5 columns on desktop, 1 column on mobile */}
                    <div className="lg:col-span-5 w-[140%] -mr-6 sm:w-full sm:mr-0">
                        <div
                            className="relative"
                            style={{
                                opacity: isVisible ? 1 : 0,
                                transform: isVisible ? 'translateX(0) scale(1)' : 'translateX(60px) scale(0.95)',
                                transition: 'all 1s cubic-bezier(0.16, 1, 0.3, 1) 0.3s'
                            }}
                        >
                            {/* Main image container */}
                            {about.illustration && (
                                <div className="relative group">
                                    {/* Floating badge - Top Left - Smaller on mobile */}
                                    <div
                                        className="absolute -top-3 -left-3 md:-top-6 md:-left-6 z-20 bg-white rounded-xl md:rounded-2xl shadow-2xl p-2 md:p-3 lg:p-5 border border-gray-100"
                                        style={{
                                            opacity: isVisible ? 1 : 0,
                                            transform: isVisible ? 'translate(0, 0) rotate(0deg)' : 'translate(-20px, -20px) rotate(-5deg)',
                                            transition: 'all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) 0.6s'
                                        }}
                                    >
                                        <div className="flex items-center gap-1.5 md:gap-2 lg:gap-3">
                                            <div className="p-1.5 md:p-2 lg:p-3 bg-gradient-to-br from-green-400 to-emerald-500 rounded-lg md:rounded-xl">
                                                <TrendingUp className="w-3 h-3 md:w-4 md:h-4 lg:w-5 lg:h-5 text-white" />
                                            </div>
                                            <div>
                                                <div className="text-sm md:text-xl lg:text-2xl font-bold text-gray-900">98%</div>
                                                <div className="text-[8px] md:text-[10px] lg:text-xs text-gray-500 font-medium">Success Rate</div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Image with magnetic effect */}
                                    <div className="relative overflow-hidden rounded-2xl md:rounded-3xl">
                                        {/* Gradient border effect - Hide on mobile */}
                                        <div className="hidden md:block absolute -inset-1 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-3xl opacity-20 blur-xl group-hover:opacity-40 transition-opacity duration-700"></div>

                                            <div className="relative">
                                        <img
                                            src={`/storage/${about.illustration}`}
                                            alt="About Us"
                                            className="w-full h-auto object-contain transform group-hover:scale-105 transition-transform duration-700 ease-out"
                                        />
                                    </div>
                                    </div>

                                    {/* Bottom floating element - Smaller on mobile */}
                                    <div
                                        className="absolute -bottom-3 -right-3 md:-bottom-6 md:-right-6 z-20 bg-white rounded-xl md:rounded-2xl shadow-2xl p-2 md:p-3 lg:p-5 border border-gray-100"
                                        style={{
                                            opacity: isVisible ? 1 : 0,
                                            transform: isVisible ? 'translate(0, 0) rotate(0deg)' : 'translate(20px, 20px) rotate(5deg)',
                                            transition: 'all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) 0.7s'
                                        }}
                                    >
                                        <div className="flex items-center gap-1.5 md:gap-2 lg:gap-3">
                                            <div className="p-1.5 md:p-2 lg:p-3 bg-gradient-to-br from-orange-400 to-red-500 rounded-lg md:rounded-xl">
                                                <Users className="w-3 h-3 md:w-4 md:h-4 lg:w-5 lg:h-5 text-white" />
                                            </div>
                                            <div>
                                                <div className="text-sm md:text-xl lg:text-2xl font-bold text-gray-900">50K+</div>
                                                <div className="text-[8px] md:text-[10px] lg:text-xs text-gray-500 font-medium">Happy Clients</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            <style>{`
                @keyframes blob {
                    0%, 100% { transform: translate(0, 0) scale(1); }
                    25% { transform: translate(20px, -50px) scale(1.1); }
                    50% { transform: translate(-20px, 20px) scale(0.9); }
                    75% { transform: translate(50px, 50px) scale(1.05); }
                }
                .animate-blob {
                    animation: blob 20s infinite;
                }
                .animation-delay-2000 {
                    animation-delay: 2s;
                }
                .animation-delay-4000 {
                    animation-delay: 4s;
                }
            `}</style>
        </section>
    );
};

export default AboutSection;
