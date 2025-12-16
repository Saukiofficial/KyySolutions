import React from 'react';
import { Link } from '@inertiajs/react';
import { Calendar, User, ArrowRight, Newspaper } from 'lucide-react';

const NewsSection = ({ articles }) => {
    if (!articles || articles.length === 0) return null;

    return (
        <section id="news" className="py-24 bg-gray-50 relative">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 rounded-full mb-6">
                        <Newspaper className="w-4 h-4 text-blue-600" />
                        <span className="text-blue-600 font-bold text-sm">Latest Updates</span>
                    </div>
                    <h2 className="text-4xl font-black text-gray-900 mb-4">
                        Insight & <span className="text-blue-600">News</span>
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Ikuti perkembangan terbaru teknologi dan tips bisnis dari tim kami.
                    </p>
                </div>

                {/* Grid Artikel */}
                <div className="grid md:grid-cols-3 gap-8">
                    {articles.map((article, index) => (
                        <div key={article.id} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group">
                            {/* Thumbnail */}
                            <div className="relative h-48 overflow-hidden">
                                <img
                                    src={`/storage/${article.thumbnail}`}
                                    alt={article.title}
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute top-4 left-4 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                                    {article.category}
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-6">
                                <div className="flex items-center gap-4 text-gray-400 text-xs mb-3">
                                    <div className="flex items-center gap-1">
                                        <Calendar size={12} />
                                        <span>{new Date(article.created_at).toLocaleDateString()}</span>
                                    </div>
                                </div>

                                <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors">
                                    {article.title}
                                </h3>

                                <p className="text-gray-500 text-sm mb-4 line-clamp-3">
                                    {article.content.substring(0, 100)}...
                                </p>

                                <Link
                                    href={route('article.show', article.slug)}
                                    className="inline-flex items-center text-blue-600 font-semibold text-sm hover:translate-x-2 transition-transform"
                                >
                                    Baca Selengkapnya <ArrowRight size={16} className="ml-1" />
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default NewsSection;
