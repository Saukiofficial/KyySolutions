import React, { useState } from 'react';
import { Head, Link } from '@inertiajs/react';
import { ArrowLeft, CheckCircle, User, Calendar, Layers, Code2, ArrowRight, X } from 'lucide-react';
import AnimatedNavbar from '@/Components/Landing/Navbar';
import Footer from '@/Components/Landing/Footer';

export default function PortfolioDetail({ portfolio, relatedPortfolios, settings }) {
    if (!portfolio) return null;

    // State untuk Lightbox (Pop-up Gambar Fullscreen)
    const [selectedImage, setSelectedImage] = useState(null);

    const formatDate = (dateString) => {
        return new Date(dateString).toLocaleDateString('id-ID', { year: 'numeric', month: 'long' });
    };

    return (
        <div className="min-h-screen bg-neutral-950 font-sans text-white">
            <Head title={portfolio.title} />
            <AnimatedNavbar settings={settings} />

            {/* === LIGHTBOX MODAL (ZOOM GAMBAR) === */}
            {selectedImage && (
                <div
                    className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 animate-fadeIn cursor-zoom-out"
                    onClick={() => setSelectedImage(null)}
                >
                    <button className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors bg-white/10 rounded-full p-2">
                        <X size={32} />
                    </button>
                    <img
                        src={`/storage/${selectedImage}`}
                        alt="Full Preview"
                        className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
                    />
                </div>
            )}

            <main>
                {/* 1. HERO SECTION (Header Visual) */}
                <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
                    <div className="absolute inset-0 z-0">
                         {/* Background Image Blurry */}
                        <img src={`/storage/${portfolio.image}`} alt={portfolio.title} className="w-full h-full object-cover opacity-20 blur-sm scale-105"/>
                        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/60 to-neutral-900/60"></div>
                    </div>

                    <div className="container mx-auto px-4 relative z-10 text-center mt-10">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-600/20 border border-blue-500/30 text-blue-400 text-xs font-bold uppercase tracking-widest mb-6 backdrop-blur-md">
                            <Layers size={14} /> {portfolio.category}
                        </div>
                        <h1 className="text-4xl md:text-7xl font-black mb-6 leading-tight tracking-tight text-white drop-shadow-2xl">
                            {portfolio.title}
                        </h1>
                        <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto font-light leading-relaxed">
                            {portfolio.description}
                        </p>

                        {/* Meta Data */}
                        <div className="flex flex-wrap justify-center gap-6 mt-8 text-sm text-gray-400">
                             {portfolio.client_name && (
                                <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-lg border border-white/10">
                                    <User size={16} className="text-blue-500" />
                                    <span>Client: <span className="text-white font-medium">{portfolio.client_name}</span></span>
                                </div>
                             )}
                             <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-lg border border-white/10">
                                <Calendar size={16} className="text-purple-500" />
                                <span>Date: <span className="text-white font-medium">{formatDate(portfolio.created_at)}</span></span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 2. GALLERY GRID (Showcase Utama) */}
                <section className="relative z-20 -mt-32 pb-20">
                    <div className="container mx-auto px-4">

                        {/* Grid Layout untuk Gambar */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">

                            {/* Gambar Utama (Besar) */}
                            <div
                                className="md:col-span-2 lg:col-span-2 row-span-2 rounded-2xl overflow-hidden shadow-2xl border border-white/10 group cursor-zoom-in relative bg-neutral-900"
                                onClick={() => setSelectedImage(portfolio.image)}
                            >
                                <img
                                    src={`/storage/${portfolio.image}`}
                                    alt="Main Preview"
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                                    <span className="bg-black/60 text-white px-4 py-2 rounded-full backdrop-blur-md text-sm font-medium border border-white/20">Lihat Fullscreen</span>
                                </div>
                            </div>

                            {/* Gambar Tambahan (Looping dari Galeri) */}
                            {portfolio.gallery && portfolio.gallery.map((img, idx) => (
                                <div
                                    key={idx}
                                    className="rounded-2xl overflow-hidden shadow-xl border border-white/10 group cursor-zoom-in relative h-64 md:h-auto bg-neutral-900"
                                    onClick={() => setSelectedImage(img)}
                                >
                                    <img
                                        src={`/storage/${img}`}
                                        alt={`Gallery ${idx}`}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                     <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                                        <span className="bg-black/60 text-white px-3 py-1.5 rounded-full backdrop-blur-md text-xs border border-white/20">View</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* 3. INFO PROYEK (Fitur & Teknologi) */}
                <section className="py-20 bg-neutral-900 border-t border-white/5">
                    <div className="container mx-auto px-4 max-w-5xl">
                        <div className="grid md:grid-cols-2 gap-16">

                            {/* Fitur Utama */}
                            <div>
                                <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                                    <CheckCircle className="text-green-500" /> Fitur & Fungsionalitas
                                </h3>
                                {portfolio.features && portfolio.features.length > 0 ? (
                                    <ul className="space-y-3">
                                        {portfolio.features.map((feature, idx) => (
                                            <li key={idx} className="flex items-start gap-4 p-4 bg-white/5 rounded-xl border border-white/5 hover:border-green-500/30 transition-colors group">
                                                <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2.5 group-hover:scale-150 transition-transform"></div>
                                                <span className="text-gray-300 leading-relaxed">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                ) : (
                                    <div className="p-6 bg-white/5 rounded-xl border border-dashed border-white/10 text-center">
                                        <p className="text-gray-500 italic">Tidak ada detail fitur spesifik.</p>
                                    </div>
                                )}
                            </div>

                            {/* Teknologi Stack */}
                            <div>
                                <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                                    <Code2 className="text-purple-500" /> Teknologi Digunakan
                                </h3>
                                {portfolio.technologies && portfolio.technologies.length > 0 ? (
                                    <div className="flex flex-wrap gap-3">
                                        {portfolio.technologies.map((tech, i) => (
                                            <span key={i} className="px-4 py-2 bg-neutral-800 border border-neutral-700 text-gray-300 rounded-lg text-sm font-medium hover:text-white hover:border-purple-500/50 hover:bg-purple-900/20 transition-all cursor-default shadow-sm">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                ) : (
                                    <p className="text-gray-500 italic">Teknologi tidak dispesifikasikan.</p>
                                )}

                                {/* CTA Box */}
                                <div className="mt-10 p-8 bg-gradient-to-br from-blue-900/40 to-indigo-900/40 rounded-2xl border border-blue-500/20 text-center relative overflow-hidden">
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl -mr-16 -mt-16 pointer-events-none"></div>
                                    <h4 className="text-lg font-bold text-white mb-2 relative z-10">Ingin Punya Website/Aplikasi Seperti Ini?</h4>
                                    <p className="text-blue-200 text-sm mb-6 relative z-10">Kami siap membantu mewujudkan ide digital Anda.</p>
                                    <a href="/#contact" className="inline-block px-8 py-3 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl transition-all shadow-lg hover:shadow-blue-500/25 transform hover:-translate-y-1 relative z-10">
                                        Mulai Proyek
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 4. PROYEK LAINNYA */}
                {relatedPortfolios && relatedPortfolios.length > 0 && (
                    <section className="py-20 bg-neutral-950">
                        <div className="container mx-auto px-4 max-w-7xl">
                            <div className="flex justify-between items-end mb-10 border-b border-white/10 pb-6">
                                <div>
                                    <h2 className="text-3xl font-bold text-white mb-2">Karya Lainnya</h2>
                                    <p className="text-gray-400">Jelajahi portofolio kami yang lain</p>
                                </div>
                                <Link href="/#portfolio" className="text-blue-400 hover:text-blue-300 flex items-center gap-2 font-medium group">
                                    Lihat Semua <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </div>

                            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
                                {relatedPortfolios.map((item) => (
                                    <Link key={item.id} href={route('portfolio.show', item.slug)} className="group block">
                                        <div className="rounded-xl overflow-hidden mb-4 relative aspect-[4/3] bg-gray-900 border border-white/5 shadow-lg">
                                            <img
                                                src={`/storage/${item.image}`}
                                                alt={item.title}
                                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5">
                                                <span className="text-white text-sm font-medium flex items-center gap-2">
                                                    Lihat Detail <ArrowRight size={14} />
                                                </span>
                                            </div>
                                        </div>
                                        <h3 className="font-bold text-lg text-white group-hover:text-blue-400 transition-colors truncate">
                                            {item.title}
                                        </h3>
                                        <p className="text-sm text-gray-500">{item.category}</p>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </section>
                )}
            </main>

            <Footer settings={settings} />
        </div>
    );
}
