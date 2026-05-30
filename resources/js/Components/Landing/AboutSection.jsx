import React, { useState, useEffect, useRef } from 'react';
import { Award, BriefcaseBusiness, Code2, Sparkles, Users } from 'lucide-react';

const AboutSection = ({ about }) => {
    const [isVisible, setIsVisible] = useState(false);
    const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });
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
            value: '12+',
            label: 'Tahun Pengalaman',
            icon: Award,
            description: 'Berpengalaman membangun solusi digital'
        },
        {
            value: '250+',
            label: 'Proyek Selesai',
            icon: BriefcaseBusiness,
            description: 'Website, sistem, dan branding digital'
        },
        {
            value: '98%',
            label: 'Kepuasan Klien',
            icon: Users,
            description: 'Fokus pada kualitas dan hasil terbaik'
        }
    ];

    const titleWords = (about.title || '').split(' ');
    const highlightWords = ['inovasi', 'dedikasi', 'digital', 'solusi'];

    return (
        <section
            id="about"
            ref={sectionRef}
            className="relative overflow-hidden bg-[#020817] py-12 text-white md:py-24 lg:py-32"
            onMouseMove={handleMouseMove}
        >
            {/* Deep tech background */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(0,132,255,0.22),transparent_32%),radial-gradient(circle_at_80%_35%,rgba(0,88,255,0.25),transparent_34%),linear-gradient(135deg,#020817_0%,#041126_48%,#020817_100%)]" />

            {/* Mouse glow effect */}
            <div
                className="absolute inset-0 opacity-60 transition-all duration-700 ease-out pointer-events-none"
                style={{
                    background: `radial-gradient(circle 650px at ${mousePosition.x}% ${mousePosition.y}%, rgba(0, 149, 255, 0.20), transparent 62%)`
                }}
            />

            {/* Circuit / grid accents */}
            <div className="absolute inset-0 opacity-[0.16] bg-[linear-gradient(rgba(0,140,255,.45)_1px,transparent_1px),linear-gradient(90deg,rgba(0,140,255,.45)_1px,transparent_1px)] bg-[size:64px_64px]" />

            {/* Top and bottom neon border */}
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-400/70 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-blue-500/60 to-transparent" />

            {/* Dark overlay for text readability */}
            <div className="absolute left-0 top-0 h-full w-1/2 bg-gradient-to-r from-[#020817] via-[#020817]/80 to-transparent" />

            {/* Glow blur objects */}
            <div className="absolute -right-20 top-10 hidden h-96 w-96 rounded-full bg-blue-500/20 blur-3xl md:block" />
            <div className="absolute bottom-0 left-1/4 hidden h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl md:block" />

            <div className="container relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 items-center gap-4 md:gap-8 lg:grid-cols-12 lg:gap-14 xl:gap-20">
                    {/* Left Content */}
                    <div className="space-y-4 md:space-y-7 lg:col-span-6 lg:space-y-9">
                        {/* Badge */}
                        <div
                            className="inline-flex items-center gap-1.5 rounded-full border border-blue-400/50 bg-blue-500/10 px-3 py-1.5 text-[9px] font-bold uppercase tracking-wide text-blue-200 shadow-[0_0_25px_rgba(0,132,255,0.22)] backdrop-blur-md md:gap-2 md:px-4 md:py-2 md:text-xs"
                            style={{
                                opacity: isVisible ? 1 : 0,
                                transform: isVisible ? 'translateY(0) scale(1)' : 'translateY(-20px) scale(0.9)',
                                transition: 'all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)'
                            }}
                        >
                            <Sparkles className="h-3 w-3 text-blue-300 md:h-4 md:w-4" />
                            About Me
                        </div>

                        {/* Title */}
                        <div
                            className="space-y-3 md:space-y-5"
                            style={{
                                opacity: isVisible ? 1 : 0,
                                transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                                transition: 'all 0.9s cubic-bezier(0.16, 1, 0.3, 1) 0.1s'
                            }}
                        >
                            <h2 className="max-w-3xl text-[22px] font-black leading-[1.05] tracking-[-0.045em] text-white sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
                                {titleWords.map((word, i) => {
                                    const cleanWord = word.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');
                                    const isHighlight = highlightWords.includes(cleanWord);

                                    return (
                                        <span
                                            key={i}
                                            className={`inline-block ${
                                                isHighlight
                                                    ? 'bg-gradient-to-r from-cyan-300 via-blue-400 to-blue-600 bg-clip-text text-transparent'
                                                    : ''
                                            }`}
                                            style={{
                                                opacity: isVisible ? 1 : 0,
                                                transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                                                transition: `all 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${0.1 + i * 0.05}s`
                                            }}
                                        >
                                            {word}&nbsp;
                                        </span>
                                    );
                                })}
                            </h2>
                        </div>

                        {/* Description */}
                        <div
                            className="max-w-xl text-[10px] leading-relaxed text-slate-300 sm:text-sm md:text-base lg:text-lg"
                            style={{
                                opacity: isVisible ? 1 : 0,
                                transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                                transition: 'all 0.9s cubic-bezier(0.16, 1, 0.3, 1) 0.2s'
                            }}
                            dangerouslySetInnerHTML={{ __html: about.description }}
                        />

                        {/* Stats cards */}
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
                                const isActive = activeCard === index;

                                return (
                                    <div
                                        key={index}
                                        onMouseEnter={() => setActiveCard(index)}
                                        onMouseLeave={() => setActiveCard(null)}
                                        className="group relative overflow-hidden rounded-xl border border-blue-400/25 bg-white/[0.045] p-2 text-center shadow-[inset_0_1px_0_rgba(255,255,255,.08),0_0_35px_rgba(0,119,255,.08)] backdrop-blur-xl transition-all duration-500 md:rounded-2xl md:p-4 lg:p-5"
                                        style={{
                                            transform: isActive ? 'translateY(-8px)' : 'translateY(0)',
                                            boxShadow: isActive
                                                ? '0 24px 80px -24px rgba(0,132,255,0.7), inset 0 1px 0 rgba(255,255,255,.12)'
                                                : undefined
                                        }}
                                    >
                                        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-transparent to-cyan-400/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                                        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/70 to-transparent" />

                                        <div className="relative z-10 flex flex-col items-center gap-1 md:gap-2">
                                            <div className="grid h-8 w-8 place-items-center rounded-xl border border-blue-300/25 bg-blue-500/10 text-cyan-300 shadow-[0_0_22px_rgba(0,132,255,.34)] md:h-11 md:w-11">
                                                <Icon className="h-4 w-4 md:h-5 md:w-5" />
                                            </div>

                                            <div className="text-lg font-black tracking-tight text-white md:text-3xl lg:text-4xl">
                                                {feature.value}
                                            </div>

                                            <div className="text-[8px] font-medium leading-tight text-slate-300 md:text-xs lg:text-sm">
                                                {feature.label}
                                            </div>

                                            <div className="hidden text-xs leading-relaxed text-slate-400 lg:block">
                                                {feature.description}
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    {/* Right Image */}
                    <div className="w-[140%] -mr-6 sm:mr-0 sm:w-full lg:col-span-6">
                        <div
                            className="relative"
                            style={{
                                opacity: isVisible ? 1 : 0,
                                transform: isVisible ? 'translateX(0) scale(1)' : 'translateX(60px) scale(0.95)',
                                transition: 'all 1s cubic-bezier(0.16, 1, 0.3, 1) 0.3s'
                            }}
                        >
                            {about.illustration && (
                                <div className="group relative">
                                    {/* Image glow */}
                                    <div className="absolute -inset-4 rounded-[2rem] bg-blue-500/20 blur-3xl transition-opacity duration-700 group-hover:opacity-80 md:-inset-8" />

                                    {/* Floating code icon */}
                                    <div className="absolute -right-3 top-4 z-20 hidden rounded-2xl border border-blue-300/25 bg-blue-500/10 p-3 text-cyan-200 shadow-[0_0_35px_rgba(0,132,255,.28)] backdrop-blur-xl md:block lg:-right-6 lg:top-8">
                                        <Code2 className="h-7 w-7 lg:h-10 lg:w-10" />
                                    </div>

                                    {/* Image card */}
                                    <div className="relative overflow-hidden rounded-2xl border border-blue-300/20 bg-[#061427]/60 shadow-[0_0_70px_rgba(0,132,255,.2)] backdrop-blur-md md:rounded-[2rem]">
                                        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,140,255,.22)_1px,transparent_1px),linear-gradient(90deg,rgba(0,140,255,.22)_1px,transparent_1px)] bg-[size:34px_34px] opacity-40" />
                                        <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-blue-500/20 to-transparent" />

                                        <img
                                            src={`/storage/${about.illustration}`}
                                            alt="About Us"
                                            className="relative z-10 h-auto w-full object-contain drop-shadow-[0_0_35px_rgba(0,132,255,.35)] transition-transform duration-700 ease-out group-hover:scale-105"
                                        />
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;