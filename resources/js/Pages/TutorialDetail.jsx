import React, { useState, useEffect } from 'react';
import { Head, Link } from '@inertiajs/react';
import {
    Calendar, ArrowLeft, Clock, Share2, Tag, PlayCircle,
    CheckCircle, BookOpen, User, Youtube, Bookmark, Eye,
    Facebook, Twitter, Linkedin, ChevronRight
} from 'lucide-react';
import AnimatedNavbar from '@/Components/Landing/Navbar';
import Footer from '@/Components/Landing/Footer';

export default function TutorialDetail({ tutorial, relatedTutorials, settings }) {
    if (!tutorial) return null;

    const [scrollProgress, setScrollProgress] = useState(0);

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

    // Helper: Format Tanggal
    const formatDate = (dateString) => {
        return new Date(dateString).toLocaleDateString('id-ID', {
            day: 'numeric', month: 'long', year: 'numeric'
        });
    };

    // Helper: Konversi Link YouTube ke Embed URL
    const getYoutubeEmbedUrl = (url) => {
        if (!url) return null;
        // Regex untuk menangkap ID video YouTube dari berbagai format link
        const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
        const match = url.match(regExp);
        return (match && match[2].length === 11) ? `https://www.youtube.com/embed/${match[2]}` : null;
    };

    const videoEmbedUrl = getYoutubeEmbedUrl(tutorial.video_url);

    return (
        <div className="min-h-screen bg-slate-50 font-sans text-gray-900">
            <Head title={tutorial.title} />

            {/* 1. Navbar Utama */}
            <AnimatedNavbar settings={settings} />

            {/* Progress Bar (Garis Biru di Atas) */}
            <div className="fixed top-0 left-0 h-1 bg-indigo-600 z-[60] transition-all duration-100" style={{ width: `${scrollProgress * 100}%` }}></div>

            {/* Breadcrumb Sticky */}
            {/* FIX: Mengganti pt-20 lg:pt-0 menjadi mt-24 agar tidak tertutup Navbar Fixed */}
            <div className="bg-white border-b border-gray-200 sticky top-20 z-40 shadow-sm mt-24">
                <div className="container mx-auto px-4 py-3">
                    <div className="flex items-center gap-2 text-sm text-gray-600 overflow-x-auto whitespace-nowrap">
                        <Link href="/" className="hover:text-indigo-600 transition-colors">Home</Link>
                        <span>›</span>
                        <Link href={route('tutorials.index')} className="hover:text-indigo-600 transition-colors">Tutorial</Link>
                        <span>›</span>
                        <span className="text-indigo-600 font-semibold truncate max-w-[200px]">{tutorial.title}</span>
                    </div>
                </div>
            </div>

            <main className="container mx-auto px-4 py-8 pb-20">
                <div className="grid lg:grid-cols-12 gap-8">

                    {/* --- LEFT SIDEBAR (Social Share - Desktop Sticky) --- */}
                    <div className="hidden lg:flex lg:col-span-1 flex-col items-center gap-4 sticky top-40 h-fit">
                        <p className="text-xs font-bold text-gray-400 uppercase rotate-180 writing-vertical-lr mb-2">Bagikan</p>
                        <button className="p-3 bg-white rounded-full text-gray-500 hover:text-blue-600 hover:shadow-lg transition-all border border-gray-100" title="Facebook"><Facebook size={18} /></button>
                        <button className="p-3 bg-white rounded-full text-gray-500 hover:text-sky-500 hover:shadow-lg transition-all border border-gray-100" title="Twitter"><Twitter size={18} /></button>
                        <button className="p-3 bg-white rounded-full text-gray-500 hover:text-blue-700 hover:shadow-lg transition-all border border-gray-100" title="LinkedIn"><Linkedin size={18} /></button>
                        <button className="p-3 bg-white rounded-full text-gray-500 hover:text-green-500 hover:shadow-lg transition-all border border-gray-100" title="WhatsApp"><Share2 size={18} /></button>
                    </div>

                    {/* --- MAIN CONTENT (Center) --- */}
                    <div className="lg:col-span-7">
                        <article className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100">

                            {/* 1. HEADER ARTIKEL */}
                            <header className="mb-6">
                                <div className="flex flex-wrap items-center gap-3 text-sm text-gray-500 mb-4">
                                    <span className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full font-bold text-xs uppercase tracking-wider">
                                        {tutorial.category}
                                    </span>
                                    <span className="flex items-center gap-1">
                                        <Calendar size={14} /> {formatDate(tutorial.created_at)}
                                    </span>
                                    <span className="flex items-center gap-1">
                                        <Eye size={14} /> 2.1k views
                                    </span>
                                    {tutorial.video_url && (
                                        <span className="flex items-center gap-1 text-red-500 font-bold bg-red-50 px-2 py-0.5 rounded-full border border-red-100">
                                            <Youtube size={14} /> Video Tersedia
                                        </span>
                                    )}
                                </div>

                                <h1 className="text-3xl md:text-4xl font-black leading-tight mb-6 text-gray-900 tracking-tight">
                                    {tutorial.title}
                                </h1>

                                {/* Author Info */}
                                <div className="flex items-center gap-3 border-b border-gray-100 pb-6 mb-6">
                                    <div className="w-10 h-10 rounded-full bg-indigo-600 flex items-center justify-center text-white font-bold text-sm shadow-md">
                                        TR
                                    </div>
                                    <div>
                                        <p className="font-bold text-gray-900 text-sm">Tim Edukasi KyySolutions</p>
                                        <p className="text-xs text-gray-500">Official Tutor</p>
                                    </div>
                                </div>
                            </header>

                            {/* 2. MEDIA PLAYER (Video Youtube atau Gambar) */}
                            <div className="w-full bg-black aspect-video relative group rounded-xl overflow-hidden mb-8 shadow-lg border border-gray-200">
                                {videoEmbedUrl ? (
                                    <iframe
                                        src={videoEmbedUrl}
                                        title={tutorial.title}
                                        className="w-full h-full"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                    ></iframe>
                                ) : (
                                    <>
                                        <img
                                            src={`/storage/${tutorial.thumbnail}`}
                                            alt={tutorial.title}
                                            className="w-full h-full object-cover opacity-90"
                                        />
                                        <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                                            <span className="bg-black/60 text-white px-5 py-2.5 rounded-full text-sm font-medium backdrop-blur-sm flex items-center gap-2 border border-white/20">
                                                <BookOpen size={18} /> Panduan Teks
                                            </span>
                                        </div>
                                    </>
                                )}
                            </div>

                            {/* 3. ISI KONTEN (RENDER HTML DARI CKEDITOR) */}
                            {/* className 'prose' dari Tailwind Typography akan mempercantik tampilan HTML otomatis */}
                            <div
                                className="prose prose-lg prose-indigo max-w-none text-gray-700 leading-relaxed"
                                dangerouslySetInnerHTML={{ __html: tutorial.content }}
                            >
                            </div>

                            {/* 4. TAGS & FOOTER */}
                            <div className="mt-12 pt-8 border-t border-gray-100">
                                <h4 className="text-sm font-bold text-gray-900 mb-3 flex items-center gap-2">
                                    <Tag size={16} className="text-indigo-600" /> Topik Terkait
                                </h4>
                                <div className="flex flex-wrap gap-2">
                                    {['Learning', 'Guide', 'Step-by-step', 'Tips', tutorial.category].map((tag, i) => (
                                        <span key={i} className="px-4 py-1.5 bg-gray-50 text-gray-600 border border-gray-200 rounded-lg text-sm hover:border-indigo-500 hover:text-indigo-600 cursor-pointer transition-colors">
                                            #{tag}
                                        </span>
                                    ))}
                                </div>
                            </div>

                        </article>

                        {/* NAVIGASI KEMBALI */}
                        <div className="mt-8 flex justify-between items-center bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                            <div className="text-left">
                                <p className="text-xs text-gray-400 mb-1">Selesai membaca?</p>
                                <Link href={route('tutorials.index')} className="text-indigo-600 font-bold hover:underline flex items-center gap-2">
                                    <ArrowLeft size={18} /> Kembali ke Daftar Tutorial
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* --- RIGHT SIDEBAR --- */}
                    <aside className="lg:col-span-4 space-y-8">

                        {/* 1. Tutorial Terkait (Card Kecil) */}
                        {relatedTutorials && relatedTutorials.length > 0 && (
                            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                                <h3 className="font-bold text-gray-900 mb-6 flex items-center gap-2 border-b border-gray-100 pb-3">
                                    <PlayCircle className="text-indigo-600" size={20} />
                                    Tutorial Terkait
                                </h3>
                                <div className="space-y-5">
                                    {relatedTutorials.map((item) => (
                                        <Link key={item.id} href={route('tutorials.show', item.slug)} className="group flex gap-4 items-start">
                                            <div className="w-24 h-16 flex-shrink-0 rounded-lg overflow-hidden relative shadow-sm border border-gray-100">
                                                <img
                                                    src={`/storage/${item.thumbnail}`}
                                                    alt={item.title}
                                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                                />
                                                {item.video_url && (
                                                    <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                                                        <PlayCircle size={20} className="text-white drop-shadow-md opacity-90" />
                                                    </div>
                                                )}
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <h4 className="text-sm font-bold text-gray-900 group-hover:text-indigo-600 transition-colors leading-snug line-clamp-2 mb-1">
                                                    {item.title}
                                                </h4>
                                                <span className="text-[10px] text-gray-500 flex items-center gap-1">
                                                    <Clock size={10} /> {formatDate(item.created_at)}
                                                </span>
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* 2. Banner CTA (Promo Kursus) */}
                        <div className="rounded-xl overflow-hidden shadow-lg relative h-72 group cursor-pointer border border-gray-100 bg-gradient-to-br from-indigo-900 to-purple-900">
                            <div className="absolute inset-0">
                                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                            </div>
                            <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
                                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-4 backdrop-blur-sm group-hover:scale-110 transition-transform">
                                    <CheckCircle className="text-green-400" size={32} />
                                </div>
                                <h3 className="text-white font-black text-xl mb-3 leading-tight">Butuh Bimbingan Langsung?</h3>
                                <p className="text-indigo-200 text-sm mb-6 max-w-xs">Konsultasi gratis dengan mentor profesional untuk memaksimalkan pembelajaran Anda</p>
                                <Link
                                    href="/#contact"
                                    className="px-6 py-3 bg-white text-indigo-900 font-bold rounded-full text-sm hover:bg-indigo-50 transition-all shadow-xl group-hover:scale-105 inline-flex items-center gap-2"
                                >
                                    Hubungi Mentor <ChevronRight size={16} />
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
