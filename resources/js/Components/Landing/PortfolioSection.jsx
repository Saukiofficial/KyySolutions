import React, { useState, useMemo, useEffect } from 'react';
import {
    X,
    Eye,
    ChevronLeft,
    ChevronRight,
    ExternalLink,
    Zap,
    Sparkles,
    ArrowRight
} from 'lucide-react';

const PortfolioSection = ({ portfolios }) => {
    const [activeFilter, setActiveFilter] = useState('All');
    const [hoveredItem, setHoveredItem] = useState(null);
    const [selectedImage, setSelectedImage] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(0);

    if (!portfolios || portfolios.length === 0) return null;

    const filters = ['All', ...new Set(portfolios.map((p) => p.category))];

    const filteredPortfolio = useMemo(() => {
        if (activeFilter === 'All') return portfolios;
        return portfolios.filter((item) => item.category === activeFilter);
    }, [activeFilter, portfolios]);

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (!selectedImage) return;

            if (e.key === 'Escape') setSelectedImage(null);
            if (e.key === 'ArrowRight') handleNext(e);
            if (e.key === 'ArrowLeft') handlePrev(e);
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [selectedImage, currentIndex, filteredPortfolio]);

    const handleNext = (e) => {
        if (e) e.stopPropagation();

        const nextIndex = (currentIndex + 1) % filteredPortfolio.length;
        setCurrentIndex(nextIndex);
        setSelectedImage(filteredPortfolio[nextIndex]);
    };

    const handlePrev = (e) => {
        if (e) e.stopPropagation();

        const prevIndex = (currentIndex - 1 + filteredPortfolio.length) % filteredPortfolio.length;
        setCurrentIndex(prevIndex);
        setSelectedImage(filteredPortfolio[prevIndex]);
    };

    const openModal = (item) => {
        const index = filteredPortfolio.findIndex((p) => p.id === item.id);
        setCurrentIndex(index);
        setSelectedImage(item);
    };

    const getProjectUrl = (slug) => {
        try {
            if (typeof route === 'function' && slug) {
                return route('portfolio.show', slug);
            }
        } catch (e) {
            console.error('Route Error:', e);
        }

        return '#';
    };

    const getImageUrl = (image) => {
        if (!image) return null;

        if (image.startsWith('http://') || image.startsWith('https://')) {
            return image;
        }

        if (image.startsWith('/storage/')) {
            return image;
        }

        return `/storage/${image}`;
    };

    return (
        <section
            id="portfolio"
            className="relative overflow-hidden bg-[#020817] py-12 text-white sm:py-24"
        >
            {/* Main Background */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(0,132,255,0.22),transparent_35%),radial-gradient(circle_at_12%_45%,rgba(0,88,255,0.16),transparent_32%),radial-gradient(circle_at_88%_55%,rgba(0,180,255,0.16),transparent_30%),linear-gradient(135deg,#020817_0%,#041126_48%,#020817_100%)]" />

            {/* Grid / Circuit Background */}
            <div className="absolute inset-0 opacity-[0.18] bg-[linear-gradient(rgba(0,140,255,.45)_1px,transparent_1px),linear-gradient(90deg,rgba(0,140,255,.45)_1px,transparent_1px)] bg-[size:64px_64px]" />

            {/* Neon Lines */}
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-400/70 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-blue-500/60 to-transparent" />

            <div className="absolute left-10 top-16 hidden h-px w-64 bg-gradient-to-r from-transparent via-cyan-400/70 to-transparent md:block" />
            <div className="absolute right-10 top-16 hidden h-px w-64 bg-gradient-to-r from-transparent via-cyan-400/70 to-transparent md:block" />

            {/* Glow Objects */}
            <div className="absolute -left-28 top-32 h-80 w-80 rounded-full bg-blue-500/15 blur-3xl" />
            <div className="absolute -right-28 bottom-32 h-96 w-96 rounded-full bg-cyan-400/10 blur-3xl" />

            <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="mx-auto mb-12 max-w-4xl text-center sm:mb-16">
                    <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-400/50 bg-blue-500/10 px-5 py-2 text-[10px] font-bold uppercase tracking-widest text-blue-200 shadow-[0_0_25px_rgba(0,132,255,0.22)] backdrop-blur-md sm:text-xs">
                        <Sparkles className="h-3.5 w-3.5 text-cyan-300" />
                        Our Portfolio
                    </div>

                    <h2 className="mb-4 text-4xl font-black leading-none tracking-[-0.055em] text-white drop-shadow-[0_0_20px_rgba(0,132,255,.35)] sm:text-6xl lg:text-7xl xl:text-8xl">
                        Featured Projects
                    </h2>

                    <p className="mx-auto max-w-2xl text-sm leading-relaxed text-slate-300 sm:text-lg">
                        Explore our collection of successful projects and creative digital solutions.
                    </p>
                </div>

                {/* Filter Buttons */}
                <div className="mb-8 flex flex-wrap justify-center gap-2 sm:mb-14 sm:gap-3">
                    {filters.map((filter) => (
                        <button
                            key={filter}
                            onClick={() => setActiveFilter(filter)}
                            className={`rounded-full border px-4 py-2 text-xs font-semibold backdrop-blur-xl transition-all duration-300 sm:px-6 sm:py-3 sm:text-sm ${
                                activeFilter === filter
                                    ? 'border-cyan-300/60 bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 text-white shadow-[0_0_30px_rgba(0,132,255,.45)]'
                                    : 'border-blue-400/30 bg-blue-500/10 text-slate-300 shadow-[0_0_18px_rgba(0,132,255,.10)] hover:border-cyan-300/60 hover:text-white'
                            }`}
                        >
                            {filter}
                        </button>
                    ))}
                </div>

                {/* Portfolio Grid */}
                <div className="grid grid-cols-2 gap-3 sm:gap-6 md:grid-cols-3 lg:gap-8">
                    {filteredPortfolio.map((item, idx) => {
                        const imageUrl = getImageUrl(item.image);

                        return (
                            <div
                                key={item.id}
                                className="group relative"
                                onMouseEnter={() => setHoveredItem(item.id)}
                                onMouseLeave={() => setHoveredItem(null)}
                                onClick={() => openModal(item)}
                                style={{
                                    animation: `fadeInUp 0.6s ease-out ${idx * 0.1}s backwards`
                                }}
                            >
                                <div className="relative cursor-pointer">
                                    {/* Neon Border Glow */}
                                    <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-blue-400/70 via-cyan-400/20 to-blue-700/70 opacity-70 blur-[1px] transition-all duration-500 group-hover:opacity-100 sm:rounded-3xl" />

                                    {/* Main Card */}
                                    <div className="relative overflow-hidden rounded-2xl border border-blue-400/35 bg-[#031024]/80 shadow-[0_0_35px_rgba(0,132,255,0.22)] backdrop-blur-xl transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-[0_0_65px_rgba(0,132,255,0.45)] sm:rounded-3xl">
                                        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/12 via-transparent to-cyan-400/10 opacity-70" />
                                        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,140,255,.18)_1px,transparent_1px),linear-gradient(90deg,rgba(0,140,255,.18)_1px,transparent_1px)] bg-[size:34px_34px] opacity-30" />

                                        {/* Image Frame */}
                                        <div className="relative z-10 p-3 sm:p-5">
                                            <div className="absolute left-3 top-3 h-4 w-4 border-l-2 border-t-2 border-blue-200/80 sm:left-5 sm:top-5" />
                                            <div className="absolute right-3 top-3 h-4 w-4 border-r-2 border-t-2 border-blue-200/80 sm:right-5 sm:top-5" />

                                            <div className="relative flex aspect-[4/3] items-center justify-center overflow-hidden rounded-xl border border-blue-300/20 bg-[#020817]/70 p-3 shadow-inner sm:rounded-2xl sm:p-4">
                                                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/12 via-transparent to-cyan-400/10" />

                                                {imageUrl ? (
                                                    <img
                                                        src={imageUrl}
                                                        alt={item.title}
                                                        className="relative z-10 h-full w-full object-contain transition-transform duration-700 group-hover:scale-105"
                                                    />
                                                ) : (
                                                    <div className="relative z-10 flex h-full w-full items-center justify-center rounded-xl border border-blue-400/25 bg-blue-500/10 text-xs font-semibold text-slate-400">
                                                        No Image
                                                    </div>
                                                )}

                                                {/* Hover Overlay */}
                                                <div className="absolute inset-0 z-20 bg-gradient-to-t from-[#020817]/95 via-[#020817]/50 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                                                    <div className="absolute inset-0 flex items-center justify-center">
                                                        <div className="grid h-11 w-11 scale-50 place-items-center rounded-full border border-cyan-300/50 bg-blue-500/20 text-cyan-100 shadow-[0_0_35px_rgba(0,132,255,.55)] backdrop-blur-xl transition-transform duration-500 group-hover:scale-100 sm:h-14 sm:w-14">
                                                            <Eye className="h-5 w-5 sm:h-7 sm:w-7" />
                                                        </div>
                                                    </div>
                                                </div>

                                                {/* Category Badge */}
                                                <div className="absolute left-2 top-2 z-30 rounded-full border border-blue-300/35 bg-blue-500/15 px-2 py-1 text-[8px] font-bold uppercase tracking-wider text-cyan-100 shadow-[0_0_18px_rgba(0,132,255,.25)] backdrop-blur-xl sm:left-3 sm:top-3 sm:px-3 sm:py-1.5 sm:text-xs">
                                                    {item.category}
                                                </div>
                                            </div>

                                            <div className="absolute bottom-20 left-3 h-4 w-4 border-b-2 border-l-2 border-blue-200/60 sm:bottom-24 sm:left-5" />
                                            <div className="absolute bottom-20 right-3 h-4 w-4 border-b-2 border-r-2 border-blue-200/60 sm:bottom-24 sm:right-5" />
                                        </div>

                                        {/* Info */}
                                        <div className="relative z-10 px-3 pb-4 sm:px-5 sm:pb-5">
                                            <h3 className="mb-3 line-clamp-2 text-sm font-black leading-tight tracking-[-0.035em] text-white transition-colors duration-300 group-hover:text-cyan-100 sm:text-lg lg:text-xl">
                                                {item.title}
                                            </h3>

                                            <div className="flex gap-2">
                                                <div className="h-1 flex-1 overflow-hidden rounded-full bg-white/15">
                                                    <div className="h-full w-[72%] rounded-full bg-gradient-to-r from-cyan-300 to-blue-500 shadow-[0_0_12px_rgba(0,170,255,.9)]" />
                                                </div>

                                                <div className="h-1 flex-1 overflow-hidden rounded-full bg-white/15">
                                                    <div className="h-full w-[55%] rounded-full bg-blue-300/45" />
                                                </div>

                                                <div className="h-1 flex-1 overflow-hidden rounded-full bg-white/15">
                                                    <div className="h-full w-[78%] rounded-full bg-blue-300/35" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* Modal */}
            {selectedImage && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-2 animate-fadeIn sm:p-4">
                    <div
                        className="absolute inset-0 bg-[#020817]/95 backdrop-blur-2xl"
                        onClick={() => setSelectedImage(null)}
                    />

                    <div className="relative flex max-h-[95vh] w-full max-w-6xl flex-col overflow-hidden rounded-2xl border border-blue-400/30 bg-[#031024]/95 shadow-[0_0_80px_rgba(0,132,255,0.32)] backdrop-blur-xl sm:rounded-3xl md:flex-row">
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/12 via-transparent to-cyan-400/10" />
                        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,140,255,.16)_1px,transparent_1px),linear-gradient(90deg,rgba(0,140,255,.16)_1px,transparent_1px)] bg-[size:42px_42px] opacity-30" />

                        {/* Close Button */}
                        <button
                            onClick={() => setSelectedImage(null)}
                            className="absolute right-3 top-3 z-30 rounded-full border border-blue-300/35 bg-blue-500/15 p-2 text-cyan-100 shadow-[0_0_25px_rgba(0,132,255,.25)] backdrop-blur-xl transition-all duration-300 hover:border-red-400/70 hover:bg-red-500/30 hover:text-white sm:right-6 sm:top-6 sm:p-3"
                        >
                            <X size={18} className="sm:h-6 sm:w-6" />
                        </button>

                        {/* Image Side */}
                        <div className="relative flex h-[40vh] w-full items-center justify-center bg-[#020817]/60 p-4 sm:p-10 md:h-auto md:w-3/5">
                            <div className="absolute left-4 top-4 h-5 w-5 border-l-2 border-t-2 border-blue-200/80 sm:left-8 sm:top-8 sm:h-6 sm:w-6" />
                            <div className="absolute right-4 top-4 h-5 w-5 border-r-2 border-t-2 border-blue-200/80 sm:right-8 sm:top-8 sm:h-6 sm:w-6" />
                            <div className="absolute bottom-4 left-4 h-5 w-5 border-b-2 border-l-2 border-blue-200/60 sm:bottom-8 sm:left-8 sm:h-6 sm:w-6" />
                            <div className="absolute bottom-4 right-4 h-5 w-5 border-b-2 border-r-2 border-blue-200/60 sm:bottom-8 sm:right-8 sm:h-6 sm:w-6" />

                            {getImageUrl(selectedImage.image) ? (
                                <img
                                    src={getImageUrl(selectedImage.image)}
                                    alt={selectedImage.title}
                                    className="relative z-10 h-full w-full rounded-lg object-contain drop-shadow-[0_0_35px_rgba(0,132,255,.28)] sm:rounded-2xl"
                                />
                            ) : (
                                <div className="relative z-10 flex h-full w-full items-center justify-center rounded-2xl border border-blue-400/25 bg-blue-500/10 text-slate-400">
                                    No Image
                                </div>
                            )}

                            {/* Navigation */}
                            <div className="absolute inset-x-0 bottom-4 z-20 flex justify-center gap-4">
                                <button
                                    onClick={handlePrev}
                                    className="rounded-xl border border-blue-300/35 bg-blue-500/15 p-2 text-cyan-100 shadow-[0_0_25px_rgba(0,132,255,.25)] backdrop-blur-xl transition-all duration-300 hover:border-cyan-300/70 hover:text-white sm:p-3"
                                >
                                    <ChevronLeft size={20} className="sm:h-6 sm:w-6" />
                                </button>

                                <button
                                    onClick={handleNext}
                                    className="rounded-xl border border-blue-300/35 bg-blue-500/15 p-2 text-cyan-100 shadow-[0_0_25px_rgba(0,132,255,.25)] backdrop-blur-xl transition-all duration-300 hover:border-cyan-300/70 hover:text-white sm:p-3"
                                >
                                    <ChevronRight size={20} className="sm:h-6 sm:w-6" />
                                </button>
                            </div>
                        </div>

                        {/* Content Side */}
                        <div className="relative z-10 flex h-[55vh] w-full flex-col overflow-y-auto bg-[#031024]/75 p-5 backdrop-blur-xl custom-scrollbar sm:p-8 md:h-auto md:w-2/5 md:p-10">
                            <div className="flex-1">
                                <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-300/35 bg-blue-500/15 px-4 py-2 text-[10px] font-bold uppercase tracking-widest text-cyan-100 shadow-[0_0_18px_rgba(0,132,255,.18)] backdrop-blur-xl sm:mb-6 sm:text-xs">
                                    <Sparkles className="h-3.5 w-3.5" />
                                    {selectedImage.category}
                                </div>

                                <h3 className="mb-3 text-2xl font-black leading-tight tracking-[-0.04em] text-white sm:mb-6 sm:text-4xl">
                                    {selectedImage.title}
                                </h3>

                                <p className="mb-6 text-xs leading-relaxed text-slate-300 sm:mb-8 sm:text-base">
                                    {selectedImage.description}
                                </p>

                                {selectedImage.technologies && (
                                    <div className="mb-6 sm:mb-8">
                                        <h4 className="mb-3 flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-slate-400 sm:text-xs">
                                            <Zap className="h-3 w-3 text-cyan-300 sm:h-4 sm:w-4" />
                                            Tech Stack
                                        </h4>

                                        <div className="flex flex-wrap gap-1.5 sm:gap-2">
                                            {Array.isArray(selectedImage.technologies) ? (
                                                selectedImage.technologies.map((tech, i) => (
                                                    <span
                                                        key={i}
                                                        className="rounded-lg border border-blue-400/25 bg-blue-500/10 px-2 py-1 text-[10px] font-medium text-cyan-100 backdrop-blur-xl sm:px-3 sm:py-1.5 sm:text-sm"
                                                    >
                                                        {tech}
                                                    </span>
                                                ))
                                            ) : (
                                                <span className="text-xs text-slate-500">
                                                    Not specified
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                )}
                            </div>

                            {/* Button */}
                            <div className="mt-auto border-t border-blue-400/20 pt-4 sm:pt-6">
                                <a
                                    href={selectedImage.slug ? getProjectUrl(selectedImage.slug) : '#'}
                                    className="group flex w-full items-center justify-center gap-2 rounded-2xl border border-cyan-300/35 bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 px-6 py-3 text-xs font-bold text-white shadow-[0_0_30px_rgba(0,132,255,.35)] transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_48px_rgba(0,180,255,.55)] sm:py-4 sm:text-base"
                                >
                                    <span>Lihat Detail</span>
                                    <ExternalLink
                                        size={14}
                                        className="transition-transform duration-300 group-hover:translate-x-1 sm:h-5 sm:w-5"
                                    />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            <style>{`
                @keyframes fadeIn {
                    from {
                        opacity: 0;
                        transform: scale(0.95);
                    }
                    to {
                        opacity: 1;
                        transform: scale(1);
                    }
                }

                @keyframes fadeInUp {
                    from {
                        opacity: 0;
                        transform: translateY(30px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                .animate-fadeIn {
                    animation: fadeIn 0.3s ease-out;
                }

                .custom-scrollbar::-webkit-scrollbar {
                    width: 4px;
                }

                .custom-scrollbar::-webkit-scrollbar-track {
                    background: rgba(255,255,255,0.03);
                }

                .custom-scrollbar::-webkit-scrollbar-thumb {
                    background: rgba(56,189,248,0.35);
                    border-radius: 999px;
                }

                .custom-scrollbar::-webkit-scrollbar-thumb:hover {
                    background: rgba(56,189,248,0.55);
                }
            `}</style>
        </section>
    );
};

export default PortfolioSection;