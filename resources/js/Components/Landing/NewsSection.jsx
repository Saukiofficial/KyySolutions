import React from 'react';
import { Link } from '@inertiajs/react';
import { Calendar, ArrowRight, Newspaper } from 'lucide-react';

const NewsSection = ({ articles = [] }) => {
    const publishedArticles = articles.filter((article) => article?.is_published !== false);

    if (!publishedArticles.length) return null;

    const stripHtml = (html = '') => {
        return html
            .replace(/<[^>]*>?/gm, '')
            .replace(/&nbsp;/g, ' ')
            .replace(/\s+/g, ' ')
            .trim();
    };

    const formatDate = (date) => {
        if (!date) return '-';

        return new Date(date).toLocaleDateString('id-ID', {
            day: '2-digit',
            month: 'short',
            year: 'numeric',
        });
    };

    const getThumbnailUrl = (thumbnail) => {
        if (!thumbnail) {
            return 'https://placehold.co/800x500/e0f2fe/2563eb?text=News';
        }

        if (thumbnail.startsWith('http://') || thumbnail.startsWith('https://')) {
            return thumbnail;
        }

        return `/storage/${thumbnail}`;
    };

    return (
        <section id="news" className="py-12 sm:py-24 bg-gray-50 relative">
            <div className="container mx-auto px-2 sm:px-6 lg:px-8">

                {/* Header - Scaled Down for Mobile */}
                <div className="text-center mb-8 sm:mb-16">
                    <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 py-1.5 sm:px-4 sm:py-2 bg-blue-100 rounded-full mb-3 sm:mb-6">
                        <Newspaper className="w-3 h-3 sm:w-4 sm:h-4 text-blue-600" />
                        <span className="text-blue-600 font-bold text-[10px] sm:text-sm">Latest Updates</span>
                    </div>

                    <h2 className="text-2xl sm:text-4xl font-black text-gray-900 mb-2 sm:mb-4">
                        Insight & <span className="text-blue-600">News</span>
                    </h2>

                    <p className="text-gray-600 text-[10px] sm:text-base max-w-2xl mx-auto px-4">
                        Ikuti perkembangan terbaru teknologi dan tips bisnis dari tim kami.
                    </p>
                </div>

                {/* Grid Artikel */}
                <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-8">
                    {publishedArticles.map((article) => {
                        const excerpt = stripHtml(article.content).substring(0, 100);

                        return (
                            <div
                                key={article.id}
                                className="bg-white rounded-xl sm:rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col h-full border border-gray-100"
                            >
                                {/* Thumbnail */}
                                <div className="relative h-24 sm:h-48 overflow-hidden bg-blue-50">
                                    <img
                                        src={getThumbnailUrl(article.thumbnail)}
                                        alt={article.title || 'Article thumbnail'}
                                        loading="lazy"
                                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                                    />

                                    <div className="absolute top-2 left-2 sm:top-4 sm:left-4 bg-blue-600 text-white text-[8px] sm:text-xs font-bold px-2 py-0.5 sm:px-3 sm:py-1 rounded-full shadow-sm">
                                        {article.category || 'News'}
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-3 sm:p-6 flex flex-col flex-1">
                                    {/* Date Row */}
                                    <div className="flex items-center gap-2 sm:gap-4 text-gray-400 text-[8px] sm:text-xs mb-1 sm:mb-3">
                                        <div className="flex items-center gap-1">
                                            <Calendar className="w-3 h-3 sm:w-3 sm:h-3" />
                                            <span>{formatDate(article.created_at)}</span>
                                        </div>
                                    </div>

                                    {/* Title */}
                                    <h3 className="text-xs sm:text-xl font-bold text-gray-900 mb-1 sm:mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors leading-tight">
                                        {article.title}
                                    </h3>

                                    {/* Excerpt */}
                                    <p className="text-gray-500 text-[10px] sm:text-sm mb-2 sm:mb-4 line-clamp-2 sm:line-clamp-3 leading-relaxed flex-1">
                                        {excerpt ? `${excerpt}...` : 'Belum ada ringkasan artikel.'}
                                    </p>

                                    {/* Read More */}
                                    <Link
                                        href={route('article.show', article.slug)}
                                        className="inline-flex items-center text-blue-600 font-semibold text-[10px] sm:text-sm hover:translate-x-2 transition-transform mt-auto"
                                    >
                                        Baca <span className="hidden sm:inline ml-1">Selengkapnya</span>
                                        <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 ml-1" />
                                    </Link>
                                </div>
                            </div>
                        );
                    })}
                </div>

            </div>
        </section>
    );
};

export default NewsSection;