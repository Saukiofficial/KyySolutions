import React, { useState, useMemo } from 'react';
import { Sparkles, X, Eye, ArrowUpRight, Zap } from 'lucide-react';

const PortfolioSection = ({ portfolios }) => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [hoveredItem, setHoveredItem] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);

  if (!portfolios || portfolios.length === 0) return null;

  const filters = ['All', ...new Set(portfolios.map(p => p.category))];
  const filteredPortfolio = useMemo(() => {
    if (activeFilter === 'All') return portfolios;
    return portfolios.filter(item => item.category === activeFilter);
  }, [activeFilter, portfolios]);

  return (
    <>
    <section id="portfolio" className="py-24 sm:py-32 bg-gradient-to-br from-blue-50 via-indigo-50 to-blue-100 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-20 right-20 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 left-20 w-96 h-96 bg-indigo-400/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
            <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-purple-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-16">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full mb-6 shadow-lg border border-blue-200 animate-bounce">
                    <Sparkles className="w-4 h-4 text-blue-600 animate-spin" style={{ animationDuration: '3s' }} />
                    <span className="text-blue-600 font-semibold text-sm">Our Work</span>
                </div>
                <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
                    Featured <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent animate-pulse">Projects</span>
                </h2>
                <p className="text-lg text-gray-700 max-w-2xl mx-auto">
                    Explore our latest creations and success stories
                </p>
            </div>

            <div className="flex justify-center flex-wrap gap-3 mb-12">
                {filters.map(filter => (
                    <button
                        key={filter}
                        onClick={() => setActiveFilter(filter)}
                        className={`px-6 py-2.5 rounded-xl font-medium transition-all duration-300 transform hover:scale-105 ${
                            activeFilter === filter
                                ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-500/40 animate-pulse'
                                : 'bg-white/80 backdrop-blur-sm text-gray-700 hover:bg-white shadow-md border border-blue-100 hover:border-blue-300 hover:shadow-xl'
                        }`}
                    >
                        {filter}
                    </button>
                ))}
            </div>

            {/* Grid Portfolio - Ultra Attractive Design */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredPortfolio.map((item) => (
                    <div
                        key={item.id}
                        className="group relative cursor-pointer transform transition-all duration-500 hover:scale-105 hover:-translate-y-2"
                        onMouseEnter={() => setHoveredItem(item.id)}
                        onMouseLeave={() => setHoveredItem(null)}
                        onClick={() => setSelectedImage(item)}
                    >
                        {/* Glowing Border Effect */}
                        <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-2xl opacity-0 group-hover:opacity-100 blur transition-all duration-500 animate-pulse"></div>

                        {/* Main Card */}
                        <div className="relative bg-white rounded-2xl overflow-hidden shadow-xl border-2 border-blue-100 group-hover:border-transparent transition-all duration-500">

                            {/* Animated Corner Accent */}
                            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-blue-500/20 via-indigo-500/10 to-transparent rounded-bl-full transform group-hover:scale-150 transition-transform duration-700"></div>
                            <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-purple-500/20 via-indigo-500/10 to-transparent rounded-tr-full transform group-hover:scale-150 transition-transform duration-700"></div>

                            {/* Floating Badge */}
                            <div className="absolute top-4 left-4 z-20 transform group-hover:-translate-y-1 transition-transform duration-300">
                                <div className="flex items-center gap-1.5 px-3 py-1.5 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full text-xs font-bold text-white shadow-lg backdrop-blur-sm">
                                    <Zap className="w-3 h-3 animate-pulse" />
                                    {item.category}
                                </div>
                            </div>

                            {/* Image Container with Border Animation */}
                            <div className="p-4 relative">
                                <div className="relative overflow-hidden rounded-xl aspect-[4/3] bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 border-2 border-dashed border-blue-200 group-hover:border-blue-400 transition-all duration-500">

                                    {/* Animated Border Lines */}
                                    <div className="absolute inset-0 overflow-hidden rounded-xl">
                                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                                        <div className="absolute bottom-0 right-0 w-full h-1 bg-gradient-to-r from-transparent via-indigo-500 to-transparent transform translate-x-full group-hover:-translate-x-full transition-transform duration-1000"></div>
                                        <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-transparent via-purple-500 to-transparent transform -translate-y-full group-hover:translate-y-full transition-transform duration-1000"></div>
                                        <div className="absolute top-0 right-0 w-1 h-full bg-gradient-to-b from-transparent via-blue-500 to-transparent transform translate-y-full group-hover:-translate-y-full transition-transform duration-1000"></div>
                                    </div>

                                    <img
                                        src={`/storage/${item.image}`}
                                        alt={item.title}
                                        className="w-full h-full object-contain p-3 relative z-10 transform group-hover:scale-105 transition-transform duration-500"
                                    />

                                    {/* Overlay dengan Shimmer Effect */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-blue-900/90 via-indigo-600/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl"></div>

                                    {/* Shimmer Animation */}
                                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                                    </div>

                                    {/* View Icon dengan Ripple Effect */}
                                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 z-20">
                                        <div className="relative">
                                            <div className="absolute inset-0 bg-white/30 rounded-full animate-ping"></div>
                                            <div className="relative bg-white rounded-full p-4 shadow-2xl transform scale-75 group-hover:scale-100 transition-transform duration-500">
                                                <Eye className="w-7 h-7 text-blue-600 animate-pulse" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Info Section dengan Slide Up Animation */}
                            <div className="px-5 pb-5 pt-2 relative overflow-hidden">
                                <div className="transform group-hover:translate-y-0 transition-transform duration-300">
                                    <h3 className="text-gray-900 text-lg font-bold mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-indigo-600 group-hover:bg-clip-text transition-all duration-300 line-clamp-2">
                                        {item.title}
                                    </h3>
                                    <div className="flex items-center gap-2 text-blue-600 font-semibold text-sm opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                                        <span>View Project</span>
                                        <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                                    </div>
                                </div>

                                {/* Bottom Wave Animation */}
                                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>

    {/* Modal Lightbox - Enhanced */}
    {selectedImage && (
        <div
            className="fixed inset-0 bg-gradient-to-br from-blue-950/95 via-indigo-950/95 to-purple-950/95 backdrop-blur-md z-50 flex items-center justify-center p-4 animate-fadeIn"
            onClick={() => setSelectedImage(null)}
        >
            {/* Animated Background Particles */}
            <div className="absolute inset-0">
                <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400 rounded-full animate-ping"></div>
                <div className="absolute top-3/4 right-1/4 w-2 h-2 bg-indigo-400 rounded-full animate-ping" style={{ animationDelay: '1s' }}></div>
                <div className="absolute top-1/2 left-3/4 w-2 h-2 bg-purple-400 rounded-full animate-ping" style={{ animationDelay: '2s' }}></div>
            </div>

            <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 bg-white/10 hover:bg-white/20 text-white rounded-full p-3 transition-all duration-300 hover:rotate-90 hover:scale-110 shadow-xl border border-white/20 z-50"
            >
                <X className="w-6 h-6" />
            </button>

            <div className="max-w-6xl w-full relative z-10" onClick={(e) => e.stopPropagation()}>
                <div className="relative">
                    {/* Glowing Border */}
                    <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-2xl opacity-75 blur-lg animate-pulse"></div>

                    <div className="relative bg-white rounded-2xl overflow-hidden shadow-2xl border-2 border-blue-200">
                        <div className="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 p-8 relative overflow-hidden">
                            {/* Decorative Circles */}
                            <div className="absolute top-0 right-0 w-40 h-40 bg-blue-200/30 rounded-full blur-2xl"></div>
                            <div className="absolute bottom-0 left-0 w-40 h-40 bg-indigo-200/30 rounded-full blur-2xl"></div>

                            <img
                                src={`/storage/${selectedImage.image}`}
                                alt={selectedImage.title}
                                className="w-full h-auto max-h-[70vh] object-contain mx-auto relative z-10 animate-fadeIn"
                            />
                        </div>
                        <div className="p-6 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 relative overflow-hidden">
                            {/* Animated Shine Effect */}
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -translate-x-full animate-shimmer"></div>

                            <div className="relative z-10">
                                <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/20 backdrop-blur-sm rounded-lg text-xs font-bold text-white mb-3 border border-white/30">
                                    <Zap className="w-3 h-3" />
                                    {selectedImage.category}
                                </div>
                                <h3 className="text-2xl font-bold text-white">
                                    {selectedImage.title}
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )}

    <style jsx>{`
      @keyframes shimmer {
        0% { transform: translateX(-100%); }
        100% { transform: translateX(100%); }
      }
      .animate-shimmer {
        animation: shimmer 2s infinite;
      }
      @keyframes fadeIn {
        from { opacity: 0; transform: scale(0.95); }
        to { opacity: 1; transform: scale(1); }
      }
      .animate-fadeIn {
        animation: fadeIn 0.3s ease-out;
      }
    `}</style>
    </>
  );
};

export default PortfolioSection;
