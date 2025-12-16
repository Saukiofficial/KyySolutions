import React, { useState, useEffect } from 'react';
import { Head, Link } from '@inertiajs/react';
import {
    Calendar, ArrowLeft, Clock, Share2, Tag, User,
    Facebook, Twitter, Linkedin, Mail, Bookmark, ThumbsUp, Eye,
    Search, TrendingUp, BookmarkPlus
} from 'lucide-react';
import AnimatedNavbar from '@/Components/Landing/Navbar';
import Footer from '@/Components/Landing/Footer';

export default function ArticleDetail({ article, relatedArticles, settings }) {
    if (!article) return null;

    const [scrollProgress, setScrollProgress] = useState(0);
    const [searchQuery, setSearchQuery] = useState('');

    // Update Progress Bar saat scroll
    useEffect(() => {
        const handleScroll = () => {
            const totalScroll = document.documentElement.scrollTop;
            const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scroll = `${totalScroll / windowHeight}`;
            setScrollProgress(Number(scroll));
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Format Tanggal
    const formatDate = (dateString) => {
        return new Date(dateString).toLocaleDateString('id-ID', {
            day: 'numeric', month: 'long', year: 'numeric'
        });
    };

    const getRelativeTime = (dateString) => {
        const date = new Date(dateString);
        const now = new Date();
        const diffTime = Math.abs(now - date);
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

        if (diffDays === 0) return 'Hari ini';
        if (diffDays === 1) return 'Kemarin';
        if (diffDays < 7) return `${diffDays} hari lalu`;
        return formatDate(dateString);
    };

    return (
        <div className="min-h-screen bg-slate-50 font-sans text-gray-900">
            <Head title={article.title} />

            {/* 1. Navbar Utama */}
            <AnimatedNavbar settings={settings} />

            {/* Progress Bar */}
            <div className="fixed top-0 left-0 h-1 bg-blue-600 z-[60] transition-all duration-100" style={{ width: `${scrollProgress * 100}%` }}></div>

            {/* 2. Top Bar (Visual Consistency) */}
            <div className="bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900 text-white py-3 px-4 pt-24 hidden md:block">
                <div className="container mx-auto flex justify-between items-center text-sm">
                    <div className="flex items-center gap-4 overflow-hidden w-full md:w-auto">
                        <span className="bg-red-600 px-3 py-1 rounded font-bold text-xs flex-shrink-0 animate-pulse">BACA JUGA</span>
                        <span className="truncate font-medium">
                            {relatedArticles && relatedArticles.length > 0 ? relatedArticles[0].title : 'Temukan wawasan menarik lainnya di sini.'}
                        </span>
                    </div>
                    <div className="flex items-center gap-2 flex-shrink-0 text-blue-200">
                        <Calendar size={14} />
                        <span>{formatDate(new Date().toISOString())}</span>
                    </div>
                </div>
            </div>

            {/* Breadcrumb */}
            <div className="bg-white border-b border-gray-200 sticky top-20 z-40 shadow-sm">
                <div className="container mx-auto px-4 py-3">
                    <div className="flex items-center gap-2 text-sm text-gray-600 overflow-x-auto whitespace-nowrap">
                        <Link href="/" className="hover:text-blue-600 transition-colors">Home</Link>
                        <span>›</span>
                        <Link href={route('news.index')} className="hover:text-blue-600 transition-colors">Berita & Insight</Link>
                        <span>›</span>
                        <span className="text-blue-600 font-semibold truncate max-w-[200px]">{article.title}</span>
                    </div>
                </div>
            </div>

            <main className="container mx-auto px-4 py-8 pb-20">
                <div className="grid lg:grid-cols-12 gap-8">

                    {/* --- LEFT SIDEBAR (Social Share - Desktop Sticky) --- */}
                    <div className="hidden lg:flex lg:col-span-1 flex-col items-center gap-4 sticky top-40 h-fit">
                        <p className="text-xs font-bold text-gray-400 uppercase rotate-180 writing-vertical-lr mb-2">Bagikan</p>
                        <button className="p-3 bg-white rounded-full text-gray-500 hover:text-blue-600 hover:shadow-lg transition-all border border-gray-100" title="Facebook">
                            <Facebook size={18} />
                        </button>
                        <button className="p-3 bg-white rounded-full text-gray-500 hover:text-sky-500 hover:shadow-lg transition-all border border-gray-100" title="Twitter">
                            <Twitter size={18} />
                        </button>
                        <button className="p-3 bg-white rounded-full text-gray-500 hover:text-blue-700 hover:shadow-lg transition-all border border-gray-100" title="LinkedIn">
                            <Linkedin size={18} />
                        </button>
                        <button className="p-3 bg-white rounded-full text-gray-500 hover:text-green-500 hover:shadow-lg transition-all border border-gray-100" title="WhatsApp">
                            <Share2 size={18} />
                        </button>
                    </div>

                    {/* --- MAIN CONTENT (Center) --- */}
                    <div className="lg:col-span-7">
                        <article className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100">

                            {/* Meta Header */}
                            <header className="mb-8">
                                <div className="flex flex-wrap items-center gap-3 text-sm text-gray-500 mb-4">
                                    <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full font-bold text-xs uppercase tracking-wider">
                                        {article.category || 'News'}
                                    </span>
                                    <span className="flex items-center gap-1">
                                        <Clock size={14} /> {getRelativeTime(article.created_at)}
                                    </span>
                                </div>

                                <h1 className="text-3xl md:text-4xl lg:text-5xl font-black leading-tight mb-6 text-gray-900 tracking-tight">
                                    {article.title}
                                </h1>

                                <div className="flex items-center justify-between py-4 border-y border-gray-100">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold shadow-md">
                                            AD
                                        </div>
                                        <div>
                                            <p className="font-bold text-gray-900 text-sm">Admin KyySolutions</p>
                                            <p className="text-xs text-gray-500">Editor Content</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4 text-gray-400 text-sm">
                                        <div className="flex items-center gap-1" title="Views">
                                            <Eye size={16} /> <span>1.2k</span>
                                        </div>
                                    </div>
                                </div>
                            </header>

                            {/* Featured Image */}
                            <figure className="mb-10 rounded-xl overflow-hidden shadow-lg relative group">
                                <img
                                    src={`/storage/${article.thumbnail}`}
                                    alt={article.title}
                                    className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
                                />
                                <figcaption className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 text-white text-xs opacity-0 group-hover:opacity-100 transition-opacity">
                                    {article.title}
                                </figcaption>
                            </figure>

                            {/* Content Body */}
                            <div className="prose prose-lg prose-blue max-w-none text-gray-700 leading-8">
                                <style>{`
                                    .prose p:first-of-type::first-letter {
                                        float: left;
                                        font-size: 3.5rem;
                                        line-height: 0.8;
                                        font-weight: 800;
                                        margin-right: 0.75rem;
                                        margin-top: 0.25rem;
                                        color: #2563eb;
                                    }
                                `}</style>

                                {article.content.split('\n').map((paragraph, idx) => (
                                    paragraph.trim() !== "" && (
                                        <p key={idx} className="mb-6 text-justify">
                                            {paragraph}
                                        </p>
                                    )
                                ))}
                            </div>

                            {/* Tags */}
                            <div className="mt-12 pt-8 border-t border-gray-100">
                                <h4 className="text-sm font-bold text-gray-900 mb-3 flex items-center gap-2">
                                    <Tag size={16} className="text-blue-600" /> Topik Terkait
                                </h4>
                                <div className="flex flex-wrap gap-2">
                                    {['Technology', 'Business', 'Innovation', 'Digital'].map((tag) => (
                                        <span key={tag} className="px-4 py-1.5 bg-gray-50 text-gray-600 border border-gray-200 rounded-lg text-sm hover:border-blue-500 hover:text-blue-600 cursor-pointer transition-colors">
                                            #{tag}
                                        </span>
                                    ))}
                                </div>
                            </div>

                        </article>

                        {/* Newsletter Box */}
                        <div className="mt-8 p-8 bg-gradient-to-r from-blue-900 to-indigo-900 rounded-2xl text-center text-white shadow-xl relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -mr-20 -mt-20"></div>
                            <div className="relative z-10">
                                <h3 className="text-2xl font-bold mb-2">Jangan Ketinggalan Info!</h3>
                                <p className="text-blue-200 mb-6 max-w-md mx-auto text-sm">Dapatkan update artikel teknologi terbaru dan tips bisnis langsung ke email Anda.</p>
                                <div className="flex max-w-sm mx-auto gap-2">
                                    <input type="email" placeholder="Email Anda..." className="flex-1 px-4 py-3 rounded-lg text-gray-900 border-none focus:ring-2 focus:ring-blue-300 text-sm" />
                                    <button className="px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-lg transition-colors text-sm shadow-lg">
                                        Langganan
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* --- RIGHT SIDEBAR (Konsisten dengan NewsIndex) --- */}
                    <aside className="lg:col-span-4 space-y-8">

                        {/* 1. Search Widget */}
                        <div className="bg-white rounded-xl shadow-sm p-6 sticky top-32 z-30 border border-gray-100">
                            <div className="flex items-center gap-2 mb-4">
                                <Search className="text-blue-600" size={20} />
                                <h3 className="font-bold text-gray-900">Cari Artikel Lain</h3>
                            </div>
                            <div className="relative">
                                <input
                                    type="text"
                                    placeholder="Ketik kata kunci..."
                                    className="w-full pl-4 pr-10 py-3 rounded-lg border-2 border-gray-100 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all outline-none text-sm bg-gray-50 focus:bg-white"
                                />
                                <Search className="absolute right-3 top-3.5 text-gray-400" size={18} />
                            </div>
                        </div>

                        {/* 2. Artikel Terkait (Related News) */}
                        {relatedArticles && relatedArticles.length > 0 && (
                            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                                <div className="flex items-center gap-2 mb-6 pb-3 border-b-2 border-blue-50">
                                    <TrendingUp className="text-blue-600" size={20} />
                                    <h3 className="font-bold text-gray-900 uppercase text-sm tracking-wide">BACA JUGA</h3>
                                </div>
                                <div className="space-y-6">
                                    {relatedArticles.map((related) => (
                                        <Link key={related.id} href={route('article.show', related.slug)} className="block group">
                                            <div className="flex gap-4">
                                                <div className="w-24 h-20 flex-shrink-0 rounded-lg overflow-hidden relative shadow-sm">
                                                    <img
                                                        src={`/storage/${related.thumbnail}`}
                                                        alt={related.title}
                                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                                    />
                                                </div>
                                                <div className="flex-1 min-w-0">
                                                    <span className="text-[10px] font-bold text-blue-600 uppercase tracking-wider mb-1 block">
                                                        {related.category || 'News'}
                                                    </span>
                                                    <h4 className="text-sm font-bold text-gray-900 group-hover:text-blue-600 transition-colors leading-snug line-clamp-2 mb-2">
                                                        {related.title}
                                                    </h4>
                                                    <div className="flex items-center gap-2 text-xs text-gray-400">
                                                        <Clock size={10} />
                                                        <span>{getRelativeTime(related.created_at)}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* 3. Promo / Ads (Jika ada data promo di artikel ini, tampilkan) */}
                        {article.promo_image ? (
                            <div className="rounded-xl overflow-hidden shadow-lg relative group cursor-pointer border border-gray-100">
                                <img
                                    src={`/storage/${article.promo_image}`}
                                    alt={article.promo_title || 'Promo'}
                                    className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                {(article.promo_title || article.promo_link) && (
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <div>
                                            <p className="text-yellow-400 font-bold text-xs mb-1 uppercase tracking-widest">SPONSORED</p>
                                            <h3 className="text-white font-bold text-lg mb-3 leading-tight">{article.promo_title}</h3>
                                            {article.promo_link && (
                                                <a href={article.promo_link} className="inline-block bg-white text-blue-900 px-4 py-2 rounded-lg font-bold text-xs hover:bg-blue-50 transition-colors shadow-lg">
                                                    Lihat Penawaran
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                )}
                            </div>
                        ) : (
                            /* Fallback Promo jika tidak ada promo khusus artikel */
                            <div className="rounded-xl overflow-hidden shadow-lg relative h-80 group cursor-pointer border border-gray-100">
                                <img
                                    src="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&auto=format&fit=crop&q=60"
                                    alt="Default Promo"
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/90 to-transparent flex items-end p-6">
                                    <div>
                                        <p className="text-yellow-400 font-bold text-xs mb-1 uppercase tracking-widest">KYY SOLUTIONS</p>
                                        <h3 className="text-white font-bold text-xl mb-3 leading-tight">Butuh Website Profesional?</h3>
                                        <Link href="/#contact" className="inline-block bg-white text-blue-900 px-4 py-2 rounded-lg font-bold text-xs hover:bg-blue-50 transition-colors shadow-lg">
                                            Konsultasi Gratis
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        )}

                    </aside>
                </div>
            </main>

            <Footer settings={settings} />
        </div>
    );
}
