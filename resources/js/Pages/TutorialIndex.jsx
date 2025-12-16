import React, { useState } from 'react';
import { Head, Link } from '@inertiajs/react';
import { Search, Calendar, ArrowRight, TrendingUp, Clock, User, BookmarkPlus, Share2, PlayCircle, BookOpen } from 'lucide-react';
import AnimatedNavbar from '@/Components/Landing/Navbar';
import Footer from '@/Components/Landing/Footer';

export default function TutorialIndex({ tutorials, settings }) {
    const [searchQuery, setSearchQuery] = useState('');

    const formatDate = (dateString) => {
        return new Date(dateString).toLocaleDateString('id-ID', {
            day: 'numeric', month: 'long', year: 'numeric'
        });
    };

    const tutorialList = tutorials?.data || [];
    const filteredTutorials = tutorialList.filter(item =>
        item.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    // Ambil tutorial terbaru untuk Top Bar
    const latestTutorial = tutorialList.length > 0 ? tutorialList[0] : null;

    return (
        <div className="min-h-screen bg-slate-50 font-sans text-gray-900">
            <Head title="Tutorial & Edukasi" />

            {/* 1. Navbar Utama */}
            <AnimatedNavbar settings={settings} />

            {/* 2. Top Bar (Running Text - Konsisten dengan News) */}
            <div className="bg-gradient-to-r from-indigo-900 via-indigo-800 to-purple-900 text-white py-3 px-4 pt-24">
                <div className="container mx-auto flex justify-between items-center text-sm">
                    <div className="flex items-center gap-4 overflow-hidden w-full md:w-auto">
                        <span className="bg-indigo-500 px-3 py-1 rounded font-bold text-xs flex-shrink-0 animate-pulse">BELAJAR</span>
                        <span className="truncate font-medium">
                            {latestTutorial ? `Tutorial Baru: ${latestTutorial.title}` : 'Tingkatkan skill digital Anda bersama kami.'}
                        </span>
                    </div>
                    <div className="flex items-center gap-2 flex-shrink-0 hidden md:flex text-indigo-200">
                        <Calendar size={14} />
                        <span>{formatDate(new Date().toISOString())}</span>
                    </div>
                </div>
            </div>

            {/* Breadcrumb */}
            <div className="bg-white border-b border-gray-200">
                <div className="container mx-auto px-4 py-4">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Link href="/" className="hover:text-indigo-600 transition-colors">Home</Link>
                        <span>›</span>
                        <span className="text-indigo-600 font-semibold">Pusat Tutorial</span>
                    </div>
                </div>
            </div>

            {/* --- MAIN CONTENT --- */}
            <main className="container mx-auto px-4 py-8 pb-20">
                <div className="grid lg:grid-cols-12 gap-8">

                    {/* LEFT CONTENT (Tutorial Grid) */}
                    <div className="lg:col-span-8">

                        <div className="flex items-center justify-between mb-6 border-b border-gray-200 pb-4">
                            <div className="flex items-center gap-3">
                                <div className="w-1 h-8 bg-indigo-600 rounded-full"></div>
                                <h2 className="text-2xl font-black text-gray-900">
                                    {searchQuery ? `Hasil Pencarian: "${searchQuery}"` : 'Tutorial Terbaru'}
                                </h2>
                            </div>
                            <BookOpen className="text-indigo-600" size={24} />
                        </div>

                        {filteredTutorials.length > 0 ? (
                            <div className="grid md:grid-cols-2 gap-6">
                                {filteredTutorials.map((tutorial) => (
                                    <Link key={tutorial.id} href={route('tutorials.show', tutorial.slug)} className="group h-full">
                                        <article className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group-hover:border-indigo-100 h-full flex flex-col">
                                            {/* Thumbnail */}
                                            <div className="relative h-48 overflow-hidden">
                                                <img
                                                    src={`/storage/${tutorial.thumbnail}`}
                                                    alt={tutorial.title}
                                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                                                />
                                                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors"></div>

                                                {/* Icon Video jika ada */}
                                                {tutorial.video_url && (
                                                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                                                        <div className="bg-black/30 backdrop-blur-sm rounded-full p-2 group-hover:bg-indigo-600/80 transition-colors">
                                                            <PlayCircle className="text-white w-8 h-8" />
                                                        </div>
                                                    </div>
                                                )}

                                                <span className="absolute top-3 left-3 bg-indigo-600 text-white text-xs font-bold px-2 py-1 rounded shadow-lg">
                                                    {tutorial.category}
                                                </span>
                                            </div>

                                            {/* Content */}
                                            <div className="p-5 flex-1 flex flex-col justify-between">
                                                <div>
                                                    <div className="flex items-center gap-2 text-xs text-gray-400 mb-3">
                                                        <Clock size={12} />
                                                        <span>{formatDate(tutorial.created_at)}</span>
                                                    </div>
                                                    <h3 className="text-lg font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-indigo-600 transition-colors leading-snug">
                                                        {tutorial.title}
                                                    </h3>
                                                </div>

                                                <div className="flex items-center justify-between border-t border-gray-50 pt-3 mt-2">
                                                    <span className="text-indigo-600 font-semibold text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                                                        Mulai Belajar <ArrowRight size={14} />
                                                    </span>
                                                    <div className="flex gap-2 text-gray-300">
                                                        <BookmarkPlus size={18} className="hover:text-indigo-600 transition-colors" />
                                                    </div>
                                                </div>
                                            </div>
                                        </article>
                                    </Link>
                                ))}
                            </div>
                        ) : (
                            <div className="text-center py-16 bg-white rounded-xl shadow-sm border border-dashed border-gray-300">
                                <p className="text-gray-500 text-lg mb-2">Tidak ada tutorial yang ditemukan.</p>
                                <button onClick={() => setSearchQuery('')} className="text-indigo-600 font-semibold hover:underline">
                                    Reset Pencarian
                                </button>
                            </div>
                        )}

                        {/* Pagination */}
                        {tutorials?.next_page_url && (
                            <div className="mt-12 flex justify-center">
                                <Link
                                    href={tutorials.next_page_url}
                                    className="px-8 py-3 bg-white border border-gray-200 text-gray-700 font-semibold rounded-full hover:bg-indigo-600 hover:text-white hover:border-indigo-600 transition-all shadow-sm"
                                >
                                    Muat Lebih Banyak
                                </Link>
                            </div>
                        )}
                    </div>

                    {/* RIGHT SIDEBAR (Konsisten dengan NewsIndex) */}
                    <aside className="lg:col-span-4 space-y-8">

                        {/* Search Widget */}
                        <div className="bg-white rounded-xl shadow-md p-6 sticky top-24 z-30 border border-gray-100">
                            <div className="flex items-center gap-2 mb-4">
                                <Search className="text-indigo-600" size={20} />
                                <h3 className="font-bold text-gray-900">Cari Tutorial</h3>
                            </div>
                            <div className="relative">
                                <input
                                    type="text"
                                    placeholder="Ketik topik belajar..."
                                    className="w-full pl-4 pr-10 py-3 rounded-lg border-2 border-gray-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-all outline-none text-sm"
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                />
                                <Search className="absolute right-3 top-3.5 text-gray-400" size={18} />
                            </div>
                        </div>

                        {/* Kategori Populer */}
                        <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
                            <div className="flex items-center gap-2 mb-4 pb-3 border-b-2 border-indigo-100">
                                <div className="w-1 h-6 bg-indigo-600 rounded-full"></div>
                                <h3 className="font-bold text-gray-900 uppercase text-sm tracking-wide">TOPIK BELAJAR</h3>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {['Programming', 'Networking', 'Desain Grafis', 'Digital Marketing'].map((cat, i) => (
                                    <button key={i} onClick={() => setSearchQuery(cat)} className="px-3 py-1 bg-indigo-50 hover:bg-indigo-100 text-gray-600 hover:text-indigo-600 rounded-lg text-xs font-medium transition-colors border border-indigo-100">
                                        {cat}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Banner CTA (Promo Belajar) */}
                        <div className="rounded-xl overflow-hidden shadow-lg relative h-64 group cursor-pointer border border-gray-100 bg-gradient-to-br from-indigo-900 to-purple-900">
                            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                            <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
                                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-4 backdrop-blur-sm">
                                    <BookOpen className="text-white" size={24} />
                                </div>
                                <h3 className="text-white font-bold text-lg mb-2 leading-tight">Ingin Belajar Lebih Dalam?</h3>
                                <p className="text-indigo-200 text-xs mb-4 max-w-[200px]">Konsultasi gratis dengan mentor profesional kami.</p>
                                <Link href="/#contact" className="px-6 py-2 bg-white text-indigo-900 font-bold rounded-full text-sm hover:bg-indigo-50 transition-colors shadow-lg">
                                    Hubungi Mentor
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
