import React, { useState, useMemo } from 'react';
import { Sparkles, MoveRight, X, Eye } from 'lucide-react';

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
    <section id="portfolio" className="py-24 sm:py-32 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(147,51,234,0.03),transparent_50%)]"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-16 animate-fadeIn">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full mb-6 shadow-sm border border-gray-200">
                    <Sparkles className="w-4 h-4 text-purple-600" />
                    <span className="text-purple-600 font-semibold text-sm">Our Work</span>
                </div>
                <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
                    Featured <span className="text-purple-600">Projects</span>
                </h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                    Explore our latest creations and success stories
                </p>
            </div>

            <div className="flex justify-center flex-wrap gap-3 mb-12">
                {filters.map(filter => (
                    <button
                        key={filter}
                        onClick={() => setActiveFilter(filter)}
                        className={`px-6 py-2.5 rounded-xl font-medium transition-all duration-300 ${
                            activeFilter === filter
                                ? 'bg-purple-600 text-white shadow-lg shadow-purple-600/30'
                                : 'bg-white text-gray-700 hover:bg-gray-50 shadow-sm border border-gray-200 hover:border-purple-200'
                        }`}
                    >
                        {filter}
                    </button>
                ))}
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredPortfolio.map((item, index) => (
                    <div
                        key={item.id}
                        className="group relative rounded-2xl overflow-hidden bg-white shadow-md hover:shadow-xl transition-all duration-500 animate-fadeIn border border-gray-200 hover:border-purple-300 cursor-pointer"
                        style={{ animationDelay: `${index * 100}ms` }}
                        onMouseEnter={() => setHoveredItem(item.id)}
                        onMouseLeave={() => setHoveredItem(null)}
                        onClick={() => setSelectedImage(item)}
                    >
                        <div className="relative overflow-hidden aspect-[4/3]">
                            <img
                                src={`/storage/${item.image}`}
                                alt={item.title}
                                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                            {/* View Icon */}
                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                <div className="bg-white/90 backdrop-blur-sm rounded-full p-4 transform scale-75 group-hover:scale-100 transition-transform duration-500">
                                    <Eye className="w-6 h-6 text-purple-600" />
                                </div>
                            </div>
                        </div>

                        <div className="p-5">
                            <div className="inline-flex items-center gap-2 px-3 py-1 bg-purple-50 rounded-lg text-xs font-medium text-purple-600 mb-3 border border-purple-100">
                                {item.category}
                            </div>
                            <h3 className="text-gray-900 text-xl font-bold mb-2 group-hover:text-purple-600 transition-colors duration-300">
                                {item.title}
                            </h3>
                            <div className="flex items-center gap-2 text-purple-600 font-medium text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <span>View Details</span>
                                <MoveRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>

    {/* Modal Lightbox */}
    {selectedImage && (
        <div
            className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fadeIn"
            onClick={() => setSelectedImage(null)}
        >
            <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 bg-white/10 hover:bg-white/20 text-white rounded-full p-3 transition-all duration-300 hover:rotate-90"
            >
                <X className="w-6 h-6" />
            </button>

            <div className="max-w-5xl w-full" onClick={(e) => e.stopPropagation()}>
                <div className="bg-white rounded-2xl overflow-hidden shadow-2xl">
                    <img
                        src={`/storage/${selectedImage.image}`}
                        alt={selectedImage.title}
                        className="w-full h-auto max-h-[70vh] object-contain bg-gray-100"
                    />
                    <div className="p-6 border-t border-gray-200">
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-purple-50 rounded-lg text-xs font-medium text-purple-600 mb-3 border border-purple-100">
                            {selectedImage.category}
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900">
                            {selectedImage.title}
                        </h3>
                    </div>
                </div>
            </div>
        </div>
    )}
    </>
  );
};

export default PortfolioSection;
