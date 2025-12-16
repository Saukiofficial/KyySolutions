import React, { useState, useEffect } from 'react';
import { ArrowRight, Award, Clock, Shield } from 'lucide-react';

const AboutSection = ({ about }) => {
    const [isVisible, setIsVisible] = useState(false);
    const [scrollProgress, setScrollProgress] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const section = document.getElementById('about');
            if (section) {
                const rect = section.getBoundingClientRect();
                const windowHeight = window.innerHeight;

                if (rect.top < windowHeight * 0.75) {
                    setIsVisible(true);
                }

                const progress = Math.max(0, Math.min(1, 1 - (rect.top / windowHeight)));
                setScrollProgress(progress);
            }
        };

        handleScroll();
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    if (!about) return null;

    const stats = [
        { value: '10+', label: 'Years Experience', icon: Award },
        { value: '24/7', label: 'Support Available', icon: Clock },
        { value: '100%', label: 'Secure & Trusted', icon: Shield }
    ];

    return (
        <section id="about" className="py-32 bg-white relative overflow-hidden">
            {/* Grid Pattern Background */}
            <div className="absolute inset-0 opacity-[0.03]">
                <div className="absolute inset-0" style={{
                    backgroundImage: `
                        linear-gradient(to right, #000 1px, transparent 1px),
                        linear-gradient(to bottom, #000 1px, transparent 1px)
                    `,
                    backgroundSize: '80px 80px'
                }}></div>
            </div>

            {/* Dot Pattern Overlay */}
            <div className="absolute inset-0 opacity-[0.02]">
                <div className="absolute inset-0" style={{
                    backgroundImage: 'radial-gradient(circle, #000 1px, transparent 1px)',
                    backgroundSize: '40px 40px'
                }}></div>
            </div>

            {/* Gradient Orbs */}
            <div className="absolute top-20 right-20 w-[500px] h-[500px] bg-blue-600 rounded-full blur-[120px] opacity-[0.08]"></div>
            <div className="absolute bottom-20 left-20 w-[500px] h-[500px] bg-purple-600 rounded-full blur-[120px] opacity-[0.08]"></div>

            {/* Geometric Shapes */}
            <div className="absolute top-40 left-10 w-32 h-32 border border-gray-200 rotate-45 opacity-20"></div>
            <div className="absolute bottom-40 right-10 w-24 h-24 border-2 border-gray-200 rounded-full opacity-20"></div>
            <div className="absolute top-1/2 left-1/4 w-16 h-16 border border-gray-200 opacity-10"></div>

            {/* Animated Lines */}
            <svg className="absolute inset-0 w-full h-full opacity-[0.03]" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <pattern id="grid-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                        <path d="M 100 0 L 0 0 0 100" fill="none" stroke="#000" strokeWidth="1"/>
                    </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid-pattern)" />
            </svg>

            <div className="container mx-auto px-6 lg:px-12 max-w-7xl relative z-10">
                <div className="grid lg:grid-cols-2 gap-20 items-center">
                    {/* Left Content */}
                    <div
                        className="space-y-8"
                        style={{
                            opacity: isVisible ? 1 : 0,
                            transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                            transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1)'
                        }}
                    >
                        {/* Label */}
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-900 text-white rounded-full text-sm font-medium tracking-wide">
                            <span className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"></span>
                            ABOUT US
                        </div>

                        {/* Title with line accent */}
                        <div className="relative">
                            <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-[1.1] tracking-tight">
                                {about.title}
                            </h2>
                            <div className="absolute -left-8 top-0 w-1 h-full bg-gradient-to-b from-blue-600 to-purple-600 rounded-full"></div>
                        </div>

                        {/* Description */}
                        <div
                            className="text-lg text-gray-600 leading-relaxed space-y-4"
                            dangerouslySetInnerHTML={{ __html: about.description }}
                        />

                        {/* Stats Grid */}
                        <div className="grid grid-cols-3 gap-6 pt-8">
                            {stats.map((stat, index) => {
                                const Icon = stat.icon;
                                return (
                                    <div
                                        key={index}
                                        className="group relative"
                                        style={{
                                            opacity: isVisible ? 1 : 0,
                                            transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                                            transition: `all 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${0.2 + index * 0.1}s`
                                        }}
                                    >
                                        {/* Background grid on hover */}
                                        <div className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-300" style={{
                                            backgroundImage: `
                                                linear-gradient(to right, #000 1px, transparent 1px),
                                                linear-gradient(to bottom, #000 1px, transparent 1px)
                                            `,
                                            backgroundSize: '10px 10px'
                                        }}></div>

                                        <div className="flex flex-col gap-2 relative">
                                            <Icon className="w-5 h-5 text-gray-400 group-hover:text-blue-600 transition-colors duration-300" />
                                            <div className="text-3xl font-bold text-gray-900">{stat.value}</div>
                                            <div className="text-sm text-gray-500 leading-tight">{stat.label}</div>
                                        </div>
                                        <div className="mt-3 h-px w-0 group-hover:w-full bg-gray-900 transition-all duration-500"></div>
                                    </div>
                                );
                            })}
                        </div>

                        {/* CTA */}
                        <div className="pt-4">
                            <button className="group inline-flex items-center gap-3 px-8 py-4 bg-gray-900 text-white rounded-full hover:bg-gray-800 transition-all duration-300 hover:gap-4 relative overflow-hidden">
                                {/* Button pattern overlay */}
                                <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300" style={{
                                    backgroundImage: `
                                        linear-gradient(45deg, transparent 45%, #fff 45%, #fff 55%, transparent 55%)
                                    `,
                                    backgroundSize: '20px 20px'
                                }}></div>
                                <span className="font-medium relative z-10">Learn More</span>
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300 relative z-10" />
                            </button>
                        </div>
                    </div>

                    {/* Right Image */}
                    <div
                        className="relative"
                        style={{
                            opacity: isVisible ? 1 : 0,
                            transform: isVisible ? 'translateX(0)' : 'translateX(30px)',
                            transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.2s'
                        }}
                    >
                        <div className="relative group">
                            {/* Decorative grid border */}
                            <div className="absolute -inset-4 opacity-20">
                                <div className="absolute inset-0 rounded-3xl" style={{
                                    backgroundImage: `
                                        linear-gradient(to right, #3b82f6 2px, transparent 2px),
                                        linear-gradient(to bottom, #3b82f6 2px, transparent 2px)
                                    `,
                                    backgroundSize: '30px 30px',
                                    maskImage: 'linear-gradient(to bottom right, transparent, black 20%, black 80%, transparent)',
                                    WebkitMaskImage: 'linear-gradient(to bottom right, transparent, black 20%, black 80%, transparent)'
                                }}></div>
                            </div>

                            {/* Image container with subtle parallax */}
                            {about.illustration && (
                                <div
                                    className="relative overflow-hidden rounded-2xl"
                                    style={{
                                        transform: `translateY(${scrollProgress * -20}px)`
                                    }}
                                >
                                    {/* Corner decorations */}
                                    <div className="absolute top-0 left-0 w-20 h-20 border-l-2 border-t-2 border-gray-900 z-20 opacity-20"></div>
                                    <div className="absolute bottom-0 right-0 w-20 h-20 border-r-2 border-b-2 border-gray-900 z-20 opacity-20"></div>

                                    {/* Border gradient overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-purple-500/10 rounded-2xl z-10 pointer-events-none"></div>

                                    <img
                                        src={`/storage/${about.illustration}`}
                                        alt="About Us"
                                        className="w-full h-auto object-cover rounded-2xl shadow-2xl transform group-hover:scale-[1.02] transition-transform duration-700 ease-out relative"
                                    />

                                    {/* Subtle shadow overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent rounded-2xl pointer-events-none"></div>
                                </div>
                            )}

                            {/* Decorative element with grid */}
                            <div
                                className="absolute -right-8 -bottom-8 w-64 h-64 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl -z-10 opacity-10 blur-2xl"
                                style={{
                                    transform: `scale(${1 + scrollProgress * 0.2})`
                                }}
                            ></div>

                            {/* Small grid accent */}
                            <div className="absolute -right-4 top-1/4 w-24 h-24 opacity-10" style={{
                                backgroundImage: `
                                    linear-gradient(to right, #000 1px, transparent 1px),
                                    linear-gradient(to bottom, #000 1px, transparent 1px)
                                `,
                                backgroundSize: '12px 12px'
                            }}></div>
                        </div>

                        {/* Floating badge with grid background */}
                        <div
                            className="absolute -top-6 -left-6 bg-white rounded-2xl shadow-xl p-6 border border-gray-100 relative overflow-hidden"
                            style={{
                                opacity: isVisible ? 1 : 0,
                                transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                                transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.6s'
                            }}
                        >
                            {/* Subtle grid in badge */}
                            <div className="absolute inset-0 opacity-[0.03]" style={{
                                backgroundImage: `
                                    linear-gradient(to right, #000 1px, transparent 1px),
                                    linear-gradient(to bottom, #000 1px, transparent 1px)
                                `,
                                backgroundSize: '10px 10px'
                            }}></div>

                            <div className="flex items-center gap-3 relative z-10">
                                <div className="w-12 h-12 bg-gray-900 rounded-xl flex items-center justify-center">
                                    <Award className="w-6 h-6 text-white" />
                                </div>
                                <div>
                                    <div className="text-2xl font-bold text-gray-900">A+</div>
                                    <div className="text-xs text-gray-500">Rated Service</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
