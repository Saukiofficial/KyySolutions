import React, { useState, useMemo, useEffect } from 'react';
import { X, Eye, ChevronLeft, ChevronRight, ExternalLink, Zap } from 'lucide-react';

const PortfolioSection = ({ portfolios }) => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [hoveredItem, setHoveredItem] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!portfolios || portfolios.length === 0) return null;

  const filters = ['All', ...new Set(portfolios.map(p => p.category))];

  const filteredPortfolio = useMemo(() => {
    if (activeFilter === 'All') return portfolios;
    return portfolios.filter(item => item.category === activeFilter);
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
    if(e) e.stopPropagation();
    const nextIndex = (currentIndex + 1) % filteredPortfolio.length;
    setCurrentIndex(nextIndex);
    setSelectedImage(filteredPortfolio[nextIndex]);
  };

  const handlePrev = (e) => {
    if(e) e.stopPropagation();
    const prevIndex = (currentIndex - 1 + filteredPortfolio.length) % filteredPortfolio.length;
    setCurrentIndex(prevIndex);
    setSelectedImage(filteredPortfolio[prevIndex]);
  };

  const openModal = (item) => {
    const index = filteredPortfolio.findIndex(p => p.id === item.id);
    setCurrentIndex(index);
    setSelectedImage(item);
  };

  const getProjectUrl = (slug) => {
      try {
          if (typeof route === 'function' && slug) {
              return route('portfolio.show', slug);
          }
      } catch (e) {
          console.error("Route Error:", e);
      }
      return '#';
  };

  return (
    <section id="portfolio" className="py-12 sm:py-24 bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-30">
            <div className="absolute inset-0" style={{
                backgroundImage: `radial-gradient(circle at 2px 2px, rgba(0,0,0,0.08) 1px, transparent 0)`,
                backgroundSize: '40px 40px'
            }} />
        </div>

        {/* Geometric Shapes */}
        <div className="absolute top-40 right-10 w-20 h-20 border-2 border-gray-400/30 rotate-45" />
        <div className="absolute bottom-40 left-10 w-32 h-32 border-2 border-gray-500/30 rounded-full" />
        <div className="absolute top-1/3 left-20 w-16 h-16 bg-gray-400/10 rotate-12" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            {/* Header Section */}
            <div className="max-w-4xl mx-auto text-center mb-12 sm:mb-20">
                <div className="inline-block mb-4 sm:mb-6">
                    <div className="flex items-center gap-3 px-5 py-2 bg-white/80 backdrop-blur-sm border border-gray-300 rounded-lg shadow-sm">
                        <div className="w-2 h-2 bg-gray-700 rounded-full" />
                        <span className="text-xs sm:text-sm font-medium text-gray-700 tracking-wider uppercase">Our Portfolio</span>
                    </div>
                </div>
                <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
                    Featured Projects
                </h2>
                <p className="text-sm sm:text-lg text-gray-700 leading-relaxed max-w-2xl mx-auto">
                    Explore our collection of successful projects and creative solutions
                </p>
            </div>

            {/* Filter Buttons */}
            <div className="flex justify-center flex-wrap gap-2 sm:gap-3 mb-8 sm:mb-16">
                {filters.map((filter) => (
                    <button
                        key={filter}
                        onClick={() => setActiveFilter(filter)}
                        className={`px-4 py-2 sm:px-6 sm:py-3 rounded-lg text-xs sm:text-sm font-semibold transition-all duration-300 ${
                            activeFilter === filter
                                ? 'bg-gray-800 text-white shadow-lg'
                                : 'bg-white text-gray-700 border border-gray-300 hover:border-gray-800 hover:text-gray-900 shadow-sm'
                        }`}
                    >
                        {filter}
                    </button>
                ))}
            </div>

            {/* Portfolio Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-6 lg:gap-8">
                {filteredPortfolio.map((item, idx) => (
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
                        {/* Card Container */}
                        <div className="relative cursor-pointer">
                            {/* Background Card */}
                            <div className="absolute inset-0 bg-gradient-to-br from-gray-300 to-gray-400 rounded-2xl sm:rounded-3xl transform rotate-3 group-hover:rotate-6 transition-transform duration-500" />

                            {/* Main Card */}
                            <div className="relative bg-white backdrop-blur-sm rounded-2xl sm:rounded-3xl overflow-hidden border border-gray-300 shadow-xl group-hover:shadow-2xl transition-all duration-500">
                                {/* Image Section with Frame */}
                                <div className="relative p-3 sm:p-5">
                                    {/* Decorative Corner Elements */}
                                    <div className="absolute top-3 left-3 sm:top-5 sm:left-5 w-3 h-3 sm:w-4 sm:h-4 border-t-2 border-l-2 border-gray-500" />
                                    <div className="absolute top-3 right-3 sm:top-5 sm:right-5 w-3 h-3 sm:w-4 sm:h-4 border-t-2 border-r-2 border-gray-600" />

                                    {/* Image Container */}
                                    <div className="relative aspect-[4/3] rounded-xl sm:rounded-2xl overflow-hidden bg-gray-100 p-3 sm:p-4 flex items-center justify-center">
                                        {/* Corner Cuts */}
                                        <div className="absolute top-0 right-0 w-4 h-4 sm:w-6 sm:h-6 bg-white" style={{clipPath: 'polygon(100% 0, 100% 100%, 0 0)'}} />
                                        <div className="absolute bottom-0 left-0 w-4 h-4 sm:w-6 sm:h-6 bg-white" style={{clipPath: 'polygon(0 100%, 100% 100%, 0 0)'}} />

                                        <img
                                            src={`/storage/${item.image}`}
                                            alt={item.title}
                                            className="w-full h-full object-contain transform group-hover:scale-105 transition-transform duration-700"
                                        />

                                        {/* Hover Overlay */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/95 via-gray-800/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                            <div className="absolute inset-0 flex items-center justify-center">
                                                <div className="w-10 h-10 sm:w-14 sm:h-14 bg-gray-800 rounded-full flex items-center justify-center shadow-2xl transform group-hover:scale-100 scale-50 transition-transform duration-500">
                                                    <Eye className="w-5 h-5 sm:w-7 sm:h-7 text-white" />
                                                </div>
                                            </div>
                                        </div>

                                        {/* Category Badge */}
                                        <div className="absolute top-2 left-2 sm:top-3 sm:left-3 px-2 py-1 sm:px-3 sm:py-1.5 bg-gray-800 backdrop-blur-sm rounded-lg border border-gray-700">
                                            <span className="text-[9px] sm:text-xs font-bold text-white uppercase tracking-wider">{item.category}</span>
                                        </div>
                                    </div>

                                    {/* Decorative Bottom Corner Elements */}
                                    <div className="absolute bottom-20 sm:bottom-24 left-3 sm:left-5 w-3 h-3 sm:w-4 sm:h-4 border-b-2 border-l-2 border-gray-600" />
                                    <div className="absolute bottom-20 sm:bottom-24 right-3 sm:right-5 w-3 h-3 sm:w-4 sm:h-4 border-b-2 border-r-2 border-gray-500" />
                                </div>

                                {/* Info Section */}
                                <div className="px-3 sm:px-5 pb-4 sm:pb-5">
                                    <h3 className="text-sm sm:text-lg font-bold text-gray-900 mb-2 line-clamp-2 leading-tight group-hover:text-gray-700 transition-colors duration-300">
                                        {item.title}
                                    </h3>

                                    {/* Tech Indicator */}
                                    <div className="flex gap-1 sm:gap-1.5">
                                        <div className="h-1 sm:h-1.5 flex-1 bg-gray-200 rounded-full overflow-hidden">
                                            <div className="h-full bg-gradient-to-r from-gray-600 to-gray-700 rounded-full" style={{width: '90%'}} />
                                        </div>
                                        <div className="h-1 sm:h-1.5 flex-1 bg-gray-200 rounded-full overflow-hidden">
                                            <div className="h-full bg-gradient-to-r from-gray-700 to-gray-800 rounded-full" style={{width: '85%'}} />
                                        </div>
                                        <div className="h-1 sm:h-1.5 flex-1 bg-gray-200 rounded-full overflow-hidden">
                                            <div className="h-full bg-gradient-to-r from-gray-500 to-gray-600 rounded-full" style={{width: '95%'}} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>

        {/* Modal */}
        {selectedImage && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 animate-fadeIn">
                <div
                    className="absolute inset-0 bg-gray-900/95 backdrop-blur-2xl"
                    onClick={() => setSelectedImage(null)}
                ></div>

                <div className="relative w-full max-w-6xl bg-white backdrop-blur-xl rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row max-h-[95vh] border border-gray-300">

                    {/* Close Button */}
                    <button
                        onClick={() => setSelectedImage(null)}
                        className="absolute top-3 right-3 sm:top-6 sm:right-6 z-30 p-2 sm:p-3 bg-gray-800 backdrop-blur-xl rounded-full text-white hover:bg-red-500 transition-all border border-gray-700"
                    >
                        <X size={18} className="sm:w-6 sm:h-6" />
                    </button>

                    {/* Image Side */}
                    <div className="w-full md:w-3/5 bg-gray-100 relative flex items-center justify-center p-4 sm:p-10 h-[40vh] md:h-auto">
                        {/* Decorative Corners */}
                        <div className="absolute top-4 left-4 sm:top-8 sm:left-8 w-4 h-4 sm:w-6 sm:h-6 border-t-2 border-l-2 border-gray-500" />
                        <div className="absolute top-4 right-4 sm:top-8 sm:right-8 w-4 h-4 sm:w-6 sm:h-6 border-t-2 border-r-2 border-gray-600" />
                        <div className="absolute bottom-4 left-4 sm:bottom-8 sm:left-8 w-4 h-4 sm:w-6 sm:h-6 border-b-2 border-l-2 border-gray-600" />
                        <div className="absolute bottom-4 right-4 sm:bottom-8 sm:right-8 w-4 h-4 sm:w-6 sm:h-6 border-b-2 border-r-2 border-gray-500" />

                        <img
                            src={`/storage/${selectedImage.image}`}
                            alt={selectedImage.title}
                            className="relative z-10 w-full h-full object-contain rounded-lg sm:rounded-2xl"
                        />

                        {/* Navigation */}
                        <div className="absolute inset-x-0 bottom-4 flex justify-center gap-4 z-20">
                             <button onClick={handlePrev} className="p-2 sm:p-3 bg-gray-800 backdrop-blur-md rounded-lg text-white border border-gray-700 hover:border-gray-600 transition-all">
                                <ChevronLeft size={20} className="sm:w-6 sm:h-6" />
                            </button>
                            <button onClick={handleNext} className="p-2 sm:p-3 bg-gray-800 backdrop-blur-md rounded-lg text-white border border-gray-700 hover:border-gray-600 transition-all">
                                <ChevronRight size={20} className="sm:w-6 sm:h-6" />
                            </button>
                        </div>
                    </div>

                    {/* Content Side */}
                    <div className="w-full md:w-2/5 p-5 sm:p-8 md:p-10 flex flex-col bg-gray-50 backdrop-blur-xl overflow-y-auto custom-scrollbar h-[55vh] md:h-auto">
                        <div className="flex-1">
                            <div className="inline-block px-3 py-1.5 sm:px-4 sm:py-2 bg-gray-800 border border-gray-700 rounded-lg mb-4 sm:mb-6">
                                <span className="text-white text-[10px] sm:text-xs font-bold uppercase tracking-widest">
                                    {selectedImage.category}
                                </span>
                            </div>

                            <h3 className="text-2xl sm:text-4xl font-bold text-gray-900 mb-3 sm:mb-6 leading-tight">
                                {selectedImage.title}
                            </h3>

                            <p className="text-xs sm:text-base leading-relaxed text-gray-700 mb-6 sm:mb-8">
                                {selectedImage.description}
                            </p>

                            {selectedImage.technologies && (
                                <div className="mb-6 sm:mb-8">
                                    <h4 className="text-[10px] sm:text-xs font-bold text-gray-600 uppercase tracking-widest mb-3 flex items-center gap-2">
                                        <Zap className="w-3 h-3 sm:w-4 sm:h-4 text-gray-700" />
                                        Tech Stack
                                    </h4>
                                    <div className="flex flex-wrap gap-1.5 sm:gap-2">
                                        {Array.isArray(selectedImage.technologies)
                                            ? selectedImage.technologies.map((tech, i) => (
                                                <span key={i} className="px-2 py-1 sm:px-3 sm:py-1.5 bg-white border border-gray-300 rounded-lg text-[10px] sm:text-sm font-medium text-gray-700">
                                                    {tech}
                                                </span>
                                            ))
                                            : <span className="text-xs text-gray-500">Not specified</span>
                                        }
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Button */}
                        <div className="pt-4 sm:pt-6 border-t border-gray-300 mt-auto">
                             <a
                                href={selectedImage.slug ? getProjectUrl(selectedImage.slug) : '#'}
                                className="w-full flex items-center justify-center gap-2 px-6 py-3 sm:py-4 bg-gray-900 text-white rounded-xl text-xs sm:text-base font-bold hover:bg-gray-800 transition-all shadow-lg"
                            >
                                <span>Lihat Detail</span>
                                <ExternalLink size={14} className="sm:w-5 sm:h-5" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        )}

        <style>{`
          @keyframes fadeIn {
            from { opacity: 0; transform: scale(0.95); }
            to { opacity: 1; transform: scale(1); }
          }
          @keyframes fadeInUp {
            from { opacity: 0; transform: translateY(30px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fadeIn { animation: fadeIn 0.3s ease-out; }
          .custom-scrollbar::-webkit-scrollbar { width: 4px; }
          .custom-scrollbar::-webkit-scrollbar-track { background: rgba(255,255,255,0.02); }
          .custom-scrollbar::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.2); border-radius: 2px; }
        `}</style>
    </section>
  );
};

export default PortfolioSection;
