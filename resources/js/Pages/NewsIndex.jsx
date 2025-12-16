import React, { useState } from 'react';
import { Head, Link } from '@inertiajs/react';
import { Search, Calendar, ArrowRight, TrendingUp, Clock, User, BookmarkPlus, Share2 } from 'lucide-react';
import AnimatedNavbar from '@/Components/Landing/Navbar';
import Footer from '@/Components/Landing/Footer';

export default function NewsIndex({ articles, featuredArticles, settings }) {
    const [searchQuery, setSearchQuery] = useState('');

    // --- HELPER FUNCTIONS ---
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

    // Filter artikel berdasarkan pencarian client-side
    // Menggunakan articles.data karena pagination dari Laravel
    const articleList = articles.data || [];
    const filteredArticles = articleList.filter(article =>
        article.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    // Ambil berita terbaru untuk "Running Text" di Top Bar
    const latestNews = featuredArticles.length > 0 ? featuredArticles[0] : null;

    return (
        <div className="min-h-screen bg-slate-50 font-sans text-gray-900">
            <Head title="Berita & Artikel" />

            {/* 1. Navbar Utama */}
            <AnimatedNavbar settings={settings} />

            {/* 2. Top Bar (Running Text) */}
            <div className="bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900 text-white py-3 px-4 pt-24">
                <div className="container mx-auto flex justify-between items-center text-sm">
                    <div className="flex items-center gap-4 overflow-hidden w-full md:w-auto">
                        <span className="bg-red-600 px-3 py-1 rounded font-bold text-xs flex-shrink-0 animate-pulse">TERKINI</span>
                        <span className="truncate font-medium">
                            {latestNews ? latestNews.title : 'Belum ada berita terbaru.'}
                        </span>
                    </div>
                    <div className="flex items-center gap-2 flex-shrink-0 hidden md:flex text-blue-200">
                        <Calendar size={14} />
                        <span>{formatDate(new Date().toISOString())}</span>
                    </div>
                </div>
            </div>

            {/* Breadcrumb */}
            <div className="bg-white border-b border-gray-200">
                <div className="container mx-auto px-4 py-4">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Link href="/" className="hover:text-blue-600 transition-colors">Home</Link>
                        <span>›</span>
                        <span className="text-blue-600 font-semibold">Portal Berita</span>
                    </div>
                </div>
            </div>

            {/* --- MAIN CONTENT --- */}
            <main className="container mx-auto px-4 py-8 pb-20">
                <div className="grid lg:grid-cols-12 gap-8">

                    {/* LEFT CONTENT (Articles) */}
                    <div className="lg:col-span-8">

                        {/* 1. FEATURED ARTICLE (Laporan Utama - Besar) */}
                        {featuredArticles.length > 0 && !searchQuery && (
                            <Link href={route('article.show', featuredArticles[0].slug)} className="block mb-8 group">
                                <article className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 relative h-[400px] md:h-[500px]">
                                    {/* Badge */}
                                    <span className="absolute top-4 left-4 z-10 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                                        LAPORAN UTAMA
                                    </span>

                                    {/* Image */}
                                    <div className="absolute inset-0">
                                        <img
                                            src={`/storage/${featuredArticles[0].thumbnail}`}
                                            alt={featuredArticles[0].title}
                                            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
                                    </div>

                                    {/* Content Overlay */}
                                    <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 text-white">
                                        <div className="flex items-center gap-4 mb-3 text-sm">
                                            <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
                                                <User size={14} />
                                                <span>Admin</span>
                                            </div>
                                            <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
                                                <Clock size={14} />
                                                <span>{getRelativeTime(featuredArticles[0].created_at)}</span>
                                            </div>
                                        </div>

                                        {/* JUDUL (Tanpa Deskripsi Konten) */}
                                        <h2 className="text-2xl md:text-4xl font-black mb-4 leading-tight group-hover:text-blue-300 transition-colors line-clamp-3">
                                            {featuredArticles[0].title}
                                        </h2>

                                        {/* Tombol Aksi */}
                                        <div className="flex gap-3 mt-2">
                                            <button className="flex items-center gap-2 bg-white/20 backdrop-blur-sm hover:bg-white/30 px-4 py-2 rounded-full transition-colors">
                                                <BookmarkPlus size={16} />
                                                <span className="text-sm font-semibold">Simpan</span>
                                            </button>
                                            <button className="flex items-center gap-2 bg-white/20 backdrop-blur-sm hover:bg-white/30 px-4 py-2 rounded-full transition-colors">
                                                <Share2 size={16} />
                                                <span className="text-sm font-semibold">Bagikan</span>
                                            </button>
                                        </div>
                                    </div>
                                </article>
                            </Link>
                        )}

                        {/* 2. SECONDARY FEATURED (2 Grid Kecil) */}
                        {featuredArticles.length > 1 && !searchQuery && (
                            <div className="grid md:grid-cols-2 gap-6 mb-12">
                                {featuredArticles.slice(1, 3).map((article) => (
                                    <Link key={article.id} href={route('article.show', article.slug)} className="block group">
                                        <article className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 h-full flex flex-col border border-gray-100">
                                            <div className="relative h-48 overflow-hidden">
                                                <img
                                                    src={`/storage/${article.thumbnail}`}
                                                    alt={article.title}
                                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                                                />
                                                <span className="absolute top-3 right-3 bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded">
                                                    {article.category || 'News'}
                                                </span>
                                            </div>
                                            <div className="p-5 flex flex-col flex-grow">
                                                <div className="flex items-center gap-3 mb-3 text-xs text-gray-500">
                                                    <span className="flex items-center gap-1"><Clock size={12} /> {getRelativeTime(article.created_at)}</span>
                                                </div>
                                                <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors">
                                                    {article.title}
                                                </h3>
                                                <p className="text-gray-600 text-sm line-clamp-2 mb-4 flex-grow">
                                                    {article.content}
                                                </p>
                                                <div className="text-blue-600 font-semibold text-sm flex items-center gap-1 group-hover:gap-2 transition-all mt-auto">
                                                    Baca Selengkapnya <ArrowRight size={14} />
                                                </div>
                                            </div>
                                        </article>
                                    </Link>
                                ))}
                            </div>
                        )}

                        {/* 3. LATEST ARTICLES LIST (Daftar Berita Terbaru) */}
                        <div className="mb-8">
                            <div className="flex items-center justify-between mb-6 border-b border-gray-200 pb-4">
                                <div className="flex items-center gap-3">
                                    <div className="w-1 h-8 bg-blue-600 rounded-full"></div>
                                    <h2 className="text-2xl font-black text-gray-900">
                                        {searchQuery ? `Hasil Pencarian: "${searchQuery}"` : 'Berita Terbaru'}
                                    </h2>
                                </div>
                                <TrendingUp className="text-blue-600" size={24} />
                            </div>

                            {filteredArticles.length > 0 ? (
                                <div className="space-y-6">
                                    {filteredArticles.map((article) => (
                                        <Link key={article.id} href={route('article.show', article.slug)} className="block group">
                                            <article className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 group-hover:border-blue-100">
                                                <div className="flex flex-col sm:flex-row gap-0 sm:gap-5">
                                                    <div className="relative w-full sm:w-64 h-48 sm:h-auto flex-shrink-0 overflow-hidden">
                                                        <img
                                                            src={`/storage/${article.thumbnail}`}
                                                            alt={article.title}
                                                            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                                                        />
                                                        <span className="absolute top-2 left-2 bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded shadow-lg sm:hidden">
                                                            {article.category || 'News'}
                                                        </span>
                                                    </div>
                                                    <div className="p-5 flex-1 flex flex-col justify-between">
                                                        <div>
                                                            <div className="flex items-center justify-between mb-2">
                                                                <span className="hidden sm:inline-block text-xs font-bold text-blue-600 bg-blue-50 px-2 py-1 rounded">
                                                                    {article.category || 'News'}
                                                                </span>
                                                                <div className="flex items-center gap-2 text-xs text-gray-500">
                                                                    <Clock size={12} />
                                                                    <span>{getRelativeTime(article.created_at)}</span>
                                                                </div>
                                                            </div>
                                                            <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors leading-tight">
                                                                {article.title}
                                                            </h3>
                                                            <p className="text-gray-600 text-sm line-clamp-2 mb-4">
                                                                {article.content}
                                                            </p>
                                                        </div>
                                                        <div className="flex items-center justify-between border-t border-gray-100 pt-3">
                                                            <span className="text-blue-600 font-semibold text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                                                                Baca Artikel <ArrowRight size={14} />
                                                            </span>
                                                            <div className="flex gap-3 text-gray-400">
                                                                <BookmarkPlus size={18} className="hover:text-blue-600 transition-colors" />
                                                                <Share2 size={18} className="hover:text-blue-600 transition-colors" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </article>
                                        </Link>
                                    ))}
                                </div>
                            ) : (
                                <div className="text-center py-16 bg-white rounded-xl shadow-sm border border-dashed border-gray-300">
                                    <div className="text-gray-400 mb-4">
                                        <Search size={48} className="mx-auto" />
                                    </div>
                                    <p className="text-gray-600 text-lg mb-2">Tidak ada artikel yang ditemukan</p>
                                    <button
                                        onClick={() => setSearchQuery('')}
                                        className="text-blue-600 font-semibold hover:underline"
                                    >
                                        Reset Pencarian
                                    </button>
                                </div>
                            )}

                            {/* Pagination */}
                            {articles.next_page_url && (
                                <div className="mt-10 flex justify-center">
                                    <Link
                                        href={articles.next_page_url}
                                        className="px-8 py-3 bg-white border border-gray-200 text-gray-700 font-semibold rounded-full hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all shadow-sm"
                                    >
                                        Muat Lebih Banyak
                                    </Link>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* RIGHT SIDEBAR */}
                    <aside className="lg:col-span-4 space-y-8">

                        {/* Search Widget */}
                        <div className="bg-white rounded-xl shadow-md p-6 sticky top-24 z-30 border border-gray-100">
                            <div className="flex items-center gap-2 mb-4">
                                <Search className="text-blue-600" size={20} />
                                <h3 className="font-bold text-gray-900">Cari Berita</h3>
                            </div>
                            <div className="relative">
                                <input
                                    type="text"
                                    placeholder="Ketik kata kunci..."
                                    className="w-full pl-4 pr-10 py-3 rounded-lg border-2 border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none"
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                />
                                <Search className="absolute right-3 top-3.5 text-gray-400" size={18} />
                            </div>
                        </div>

                        {/* Kategori Populer */}
                        <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
                            <div className="flex items-center gap-2 mb-4 pb-3 border-b-2 border-blue-100">
                                <div className="w-1 h-6 bg-blue-600 rounded-full"></div>
                                <h3 className="font-bold text-gray-900 uppercase text-sm tracking-wide">KATEGORI</h3>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {['Technology', 'Business', 'Tips & Trick', 'Company News'].map((cat, i) => (
                                    <button key={i} onClick={() => setSearchQuery(cat)} className="px-3 py-1 bg-gray-50 hover:bg-blue-50 text-gray-600 hover:text-blue-600 rounded-lg text-xs font-medium transition-colors border border-gray-200 hover:border-blue-200">
                                        {cat}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Popular Articles (Rekomendasi) */}
                        <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
                            <div className="flex items-center gap-2 mb-4 pb-3 border-b-2 border-blue-100">
                                <TrendingUp className="text-blue-600" size={20} />
                                <h3 className="font-bold text-gray-900 uppercase text-sm tracking-wide">REKOMENDASI</h3>
                            </div>
                            <div className="space-y-5">
                                {featuredArticles.slice(0, 4).map((item, i) => (
                                    <Link key={i} href={route('article.show', item.slug)} className="block group">
                                        <div className="flex gap-4">
                                            <div className="w-20 h-16 flex-shrink-0 rounded-lg overflow-hidden relative shadow-sm">
                                                <img src={`/storage/${item.thumbnail}`} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                                            </div>
                                            <div>
                                                <span className="text-[10px] font-bold text-blue-600 uppercase tracking-wider mb-1 block">
                                                    {item.category || 'News'}
                                                </span>
                                                <h4 className="text-sm font-bold text-gray-900 group-hover:text-blue-600 transition-colors leading-tight line-clamp-2">
                                                    {item.title}
                                                </h4>
                                            </div>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>

                        {/* Banner Promosi (Dinamis dari Admin jika ada) */}
                        <div className="rounded-xl overflow-hidden shadow-lg relative h-64 group cursor-pointer border border-gray-100">
                            <img
                                src="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&auto=format&fit=crop&q=60"
                                alt="Ads"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            {/* FIX: Hanya menampilkan Judul di tengah bawah dengan gradient */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-6">
                                <Link href="/#contact" className="w-full text-center">
                                    <h3 className="text-white font-bold text-lg leading-tight drop-shadow-md group-hover:text-blue-200 transition-colors">
                                        Buat Website Bisnis Mulai 1 Jutaan!
                                    </h3>
                                </Link>
                            </div>
                        </div>

                    </aside>
                </div>
            </main>

            <Footer settings={settings} />
        </div>
    );
}
