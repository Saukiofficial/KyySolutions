import React, { useState, useMemo, useEffect } from 'react';
import { Head, Link } from '@inertiajs/react';
import {
    ArrowLeft,
    CheckCircle,
    User,
    Calendar,
    Layers,
    Code2,
    ArrowRight,
    X,
    Sparkles,
    ExternalLink,
    Eye,
    Zap,
    ChevronLeft,
    ChevronRight
} from 'lucide-react';
import AnimatedNavbar from '@/Components/Landing/Navbar';
import Footer from '@/Components/Landing/Footer';

export default function PortfolioDetail({ portfolio, relatedPortfolios, settings }) {
    if (!portfolio) return null;

    const [selectedImage, setSelectedImage] = useState(null);
    const [selectedImageIndex, setSelectedImageIndex] = useState(0);

    const formatDate = (dateString) => {
        if (!dateString) return '-';

        return new Date(dateString).toLocaleDateString('id-ID', {
            year: 'numeric',
            month: 'long'
        });
    };

    const getImageUrl = (image) => {
        if (!image) return null;

        if (image.startsWith('http://') || image.startsWith('https://')) {
            return image;
        }

        if (image.startsWith('/storage/')) {
            return image;
        }

        return `/storage/${image}`;
    };

    const galleryImages = useMemo(() => {
        const images = [];

        if (portfolio.image) {
            images.push(portfolio.image);
        }

        if (portfolio.gallery && Array.isArray(portfolio.gallery)) {
            portfolio.gallery.forEach((img) => {
                if (img && !images.includes(img)) {
                    images.push(img);
                }
            });
        }

        return images;
    }, [portfolio]);

    const mainImage = getImageUrl(portfolio.image);

    const openLightbox = (image) => {
        const index = galleryImages.findIndex((img) => img === image);

        setSelectedImage(image);
        setSelectedImageIndex(index >= 0 ? index : 0);
    };

    const closeLightbox = () => {
        setSelectedImage(null);
    };

    const handleNextImage = (e) => {
        if (e) e.stopPropagation();

        if (!galleryImages.length) return;

        const nextIndex = (selectedImageIndex + 1) % galleryImages.length;

        setSelectedImageIndex(nextIndex);
        setSelectedImage(galleryImages[nextIndex]);
    };

    const handlePrevImage = (e) => {
        if (e) e.stopPropagation();

        if (!galleryImages.length) return;

        const prevIndex =
            (selectedImageIndex - 1 + galleryImages.length) % galleryImages.length;

        setSelectedImageIndex(prevIndex);
        setSelectedImage(galleryImages[prevIndex]);
    };

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (!selectedImage) return;

            if (e.key === 'Escape') {
                closeLightbox();
            }

            if (e.key === 'ArrowRight') {
                handleNextImage(e);
            }

            if (e.key === 'ArrowLeft') {
                handlePrevImage(e);
            }
        };

        window.addEventListener('keydown', handleKeyDown);

        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [selectedImage, selectedImageIndex, galleryImages]);

    return (
        <div className="min-h-screen bg-[#020817] font-sans text-white">
            <Head title={portfolio.title} />

            <AnimatedNavbar settings={settings} />

            {/* Lightbox Modal */}
            {selectedImage && (
                <div
                    className="fixed inset-0 z-[100] flex cursor-zoom-out items-center justify-center bg-[#020817]/95 p-4 backdrop-blur-2xl animate-fadeIn"
                    onClick={closeLightbox}
                >
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,132,255,0.18),transparent_45%),linear-gradient(135deg,#020817_0%,#041126_48%,#020817_100%)]" />

                    <div className="absolute inset-0 opacity-[0.14] bg-[linear-gradient(rgba(0,140,255,.45)_1px,transparent_1px),linear-gradient(90deg,rgba(0,140,255,.45)_1px,transparent_1px)] bg-[size:64px_64px]" />

                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            closeLightbox();
                        }}
                        className="absolute right-5 top-5 z-30 rounded-full border border-blue-300/35 bg-blue-500/15 p-3 text-cyan-100 shadow-[0_0_30px_rgba(0,132,255,.28)] backdrop-blur-xl transition-all duration-300 hover:border-red-400/70 hover:bg-red-500/30 hover:text-white sm:right-8 sm:top-8"
                    >
                        <X size={28} />
                    </button>

                    {galleryImages.length > 1 && (
                        <>
                            <button
                                onClick={handlePrevImage}
                                className="absolute left-4 top-1/2 z-30 -translate-y-1/2 rounded-full border border-blue-300/35 bg-blue-500/15 p-3 text-cyan-100 shadow-[0_0_30px_rgba(0,132,255,.28)] backdrop-blur-xl transition-all duration-300 hover:border-cyan-300/70 hover:bg-blue-500/25 hover:text-white sm:left-8 sm:p-4"
                            >
                                <ChevronLeft size={28} />
                            </button>

                            <button
                                onClick={handleNextImage}
                                className="absolute right-4 top-1/2 z-30 -translate-y-1/2 rounded-full border border-blue-300/35 bg-blue-500/15 p-3 text-cyan-100 shadow-[0_0_30px_rgba(0,132,255,.28)] backdrop-blur-xl transition-all duration-300 hover:border-cyan-300/70 hover:bg-blue-500/25 hover:text-white sm:right-8 sm:p-4"
                            >
                                <ChevronRight size={28} />
                            </button>
                        </>
                    )}

                    <div
                        className="relative z-10 max-h-[90vh] max-w-6xl overflow-hidden rounded-3xl border border-blue-400/30 bg-[#031024]/80 p-3 shadow-[0_0_90px_rgba(0,132,255,.35)] backdrop-blur-xl"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <img
                            src={getImageUrl(selectedImage)}
                            alt="Full Preview"
                            className="max-h-[84vh] max-w-full rounded-2xl object-contain"
                        />

                        {galleryImages.length > 1 && (
                            <div className="absolute bottom-5 left-1/2 z-20 -translate-x-1/2 rounded-full border border-blue-300/35 bg-[#020817]/70 px-4 py-2 text-xs font-semibold text-cyan-100 shadow-[0_0_24px_rgba(0,132,255,.28)] backdrop-blur-xl">
                                {selectedImageIndex + 1} / {galleryImages.length}
                            </div>
                        )}
                    </div>
                </div>
            )}

            <main className="relative overflow-hidden">
                {/* Global Background */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(0,132,255,0.22),transparent_32%),radial-gradient(circle_at_85%_25%,rgba(0,180,255,0.18),transparent_34%),linear-gradient(135deg,#020817_0%,#041126_48%,#020817_100%)]" />

                <div className="absolute inset-0 opacity-[0.16] bg-[linear-gradient(rgba(0,140,255,.45)_1px,transparent_1px),linear-gradient(90deg,rgba(0,140,255,.45)_1px,transparent_1px)] bg-[size:64px_64px]" />

                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-400/70 to-transparent" />

                <div className="absolute -right-28 top-20 h-96 w-96 rounded-full bg-blue-500/20 blur-3xl" />
                <div className="absolute -left-28 top-96 h-80 w-80 rounded-full bg-cyan-400/10 blur-3xl" />

                {/* Hero Section */}
                <section className="relative z-10 flex min-h-[76vh] items-center justify-center overflow-hidden px-4 pb-28 pt-32 sm:px-6 lg:px-8 lg:pt-36">
                    {mainImage && (
                        <div className="absolute inset-0 z-0">
                            <img
                                src={mainImage}
                                alt={portfolio.title}
                                className="h-full w-full scale-105 object-cover opacity-20 blur-sm"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#020817] via-[#020817]/80 to-[#020817]/65" />
                        </div>
                    )}

                    <div className="absolute left-10 top-28 hidden h-px w-72 bg-gradient-to-r from-transparent via-cyan-400/70 to-transparent md:block" />
                    <div className="absolute right-10 top-28 hidden h-px w-72 bg-gradient-to-r from-transparent via-cyan-400/70 to-transparent md:block" />

                    <div className="container relative z-10 mx-auto max-w-7xl text-center">
                        <div className="mb-8 flex justify-center">
                            <Link
                                href="/#portfolio"
                                className="group inline-flex items-center gap-2 rounded-full border border-blue-400/40 bg-blue-500/10 px-4 py-2 text-xs font-semibold text-blue-100 shadow-[0_0_25px_rgba(0,132,255,0.18)] backdrop-blur-xl transition-all duration-300 hover:border-cyan-300/70 hover:bg-blue-400/15 hover:text-white sm:text-sm"
                            >
                                <ArrowLeft className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1" />
                                Kembali ke Portfolio
                            </Link>
                        </div>

                        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-400/50 bg-blue-500/10 px-5 py-2 text-[10px] font-bold uppercase tracking-widest text-blue-200 shadow-[0_0_25px_rgba(0,132,255,0.22)] backdrop-blur-md sm:text-xs">
                            <Layers size={14} className="text-cyan-300" />
                            {portfolio.category}
                        </div>

                        <h1 className="mx-auto mb-6 max-w-5xl text-4xl font-black leading-[1.02] tracking-[-0.055em] text-white drop-shadow-[0_0_24px_rgba(0,132,255,.32)] sm:text-6xl lg:text-7xl xl:text-8xl">
                            {portfolio.title}
                        </h1>

                        <p className="mx-auto max-w-3xl text-sm leading-relaxed text-slate-300 sm:text-lg lg:text-xl">
                            {portfolio.description}
                        </p>

                        <div className="mt-8 flex flex-wrap justify-center gap-3 text-sm">
                            {portfolio.client_name && (
                                <div className="inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-500/10 px-4 py-2 text-slate-300 shadow-[0_0_18px_rgba(0,132,255,.10)] backdrop-blur-xl">
                                    <User size={16} className="text-cyan-300" />
                                    <span>
                                        Client:{' '}
                                        <span className="font-semibold text-white">
                                            {portfolio.client_name}
                                        </span>
                                    </span>
                                </div>
                            )}

                            <div className="inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-500/10 px-4 py-2 text-slate-300 shadow-[0_0_18px_rgba(0,132,255,.10)] backdrop-blur-xl">
                                <Calendar size={16} className="text-cyan-300" />
                                <span>
                                    Date:{' '}
                                    <span className="font-semibold text-white">
                                        {formatDate(portfolio.created_at)}
                                    </span>
                                </span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Gallery Section */}
                <section className="relative z-20 -mt-24 px-4 pb-20 sm:px-6 lg:px-8">
                    <div className="container mx-auto max-w-7xl">
                        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
                            {/* Main Image */}
                            <div
                                className="group relative cursor-zoom-in overflow-hidden rounded-3xl border border-blue-400/30 bg-[#031024]/80 shadow-[0_0_60px_rgba(0,132,255,.22)] backdrop-blur-xl md:col-span-2 lg:col-span-2 lg:row-span-2"
                                onClick={() => openLightbox(portfolio.image)}
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/12 via-transparent to-cyan-400/10" />

                                <div className="absolute inset-0 bg-[linear-gradient(rgba(0,140,255,.16)_1px,transparent_1px),linear-gradient(90deg,rgba(0,140,255,.16)_1px,transparent_1px)] bg-[size:42px_42px] opacity-25" />

                                <div className="absolute left-4 top-4 z-20 h-6 w-6 border-l-2 border-t-2 border-blue-200/80" />
                                <div className="absolute right-4 top-4 z-20 h-6 w-6 border-r-2 border-t-2 border-blue-200/80" />
                                <div className="absolute bottom-4 left-4 z-20 h-6 w-6 border-b-2 border-l-2 border-blue-200/60" />
                                <div className="absolute bottom-4 right-4 z-20 h-6 w-6 border-b-2 border-r-2 border-blue-200/60" />

                                {mainImage ? (
                                    <img
                                        src={mainImage}
                                        alt="Main Preview"
                                        className="relative z-10 h-full min-h-[320px] w-full object-cover transition-transform duration-700 group-hover:scale-105 md:min-h-[520px]"
                                    />
                                ) : (
                                    <div className="relative z-10 flex min-h-[320px] items-center justify-center text-slate-400 md:min-h-[520px]">
                                        No Image
                                    </div>
                                )}

                                <div className="absolute inset-0 z-30 flex items-center justify-center bg-[#020817]/0 opacity-0 transition-all duration-300 group-hover:bg-[#020817]/45 group-hover:opacity-100">
                                    <span className="inline-flex items-center gap-2 rounded-full border border-cyan-300/40 bg-blue-500/15 px-5 py-3 text-sm font-semibold text-cyan-100 shadow-[0_0_28px_rgba(0,132,255,.35)] backdrop-blur-xl">
                                        <Eye size={18} />
                                        Lihat Fullscreen
                                    </span>
                                </div>
                            </div>

                            {/* Gallery Images */}
                            {portfolio.gallery &&
                                portfolio.gallery.map((img, idx) => (
                                    <div
                                        key={idx}
                                        className="group relative h-64 cursor-zoom-in overflow-hidden rounded-3xl border border-blue-400/30 bg-[#031024]/80 shadow-[0_0_35px_rgba(0,132,255,.18)] backdrop-blur-xl md:h-auto"
                                        onClick={() => openLightbox(img)}
                                    >
                                        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/12 via-transparent to-cyan-400/10" />

                                        <img
                                            src={getImageUrl(img)}
                                            alt={`Gallery ${idx + 1}`}
                                            className="relative z-10 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                                        />

                                        <div className="absolute inset-0 z-20 flex items-center justify-center bg-[#020817]/0 opacity-0 transition-all duration-300 group-hover:bg-[#020817]/45 group-hover:opacity-100">
                                            <span className="inline-flex items-center gap-2 rounded-full border border-cyan-300/40 bg-blue-500/15 px-4 py-2 text-xs font-semibold text-cyan-100 shadow-[0_0_24px_rgba(0,132,255,.28)] backdrop-blur-xl">
                                                <Eye size={14} />
                                                View
                                            </span>
                                        </div>
                                    </div>
                                ))}
                        </div>
                    </div>
                </section>

                {/* Info Project */}
                <section className="relative z-20 border-y border-blue-400/15 bg-[#031024]/55 px-4 py-20 backdrop-blur-xl sm:px-6 lg:px-8">
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(0,140,255,.12)_1px,transparent_1px),linear-gradient(90deg,rgba(0,140,255,.12)_1px,transparent_1px)] bg-[size:42px_42px] opacity-30" />

                    <div className="container relative z-10 mx-auto max-w-6xl">
                        <div className="grid gap-10 md:grid-cols-2 lg:gap-16">
                            {/* Features */}
                            <div className="rounded-3xl border border-blue-400/25 bg-white/[0.045] p-6 shadow-[0_0_45px_rgba(0,132,255,.15)] backdrop-blur-xl sm:p-8">
                                <div className="mb-6 flex items-center gap-3">
                                    <span className="grid h-11 w-11 place-items-center rounded-xl border border-blue-300/25 bg-blue-500/10 text-cyan-300 shadow-[0_0_22px_rgba(0,132,255,.34)]">
                                        <CheckCircle className="h-5 w-5" />
                                    </span>

                                    <h3 className="text-2xl font-black tracking-[-0.035em] text-white">
                                        Fitur & Fungsionalitas
                                    </h3>
                                </div>

                                {portfolio.features && portfolio.features.length > 0 ? (
                                    <ul className="space-y-4">
                                        {portfolio.features.map((feature, idx) => (
                                            <li
                                                key={idx}
                                                className="group flex items-start gap-4 rounded-2xl border border-blue-400/20 bg-blue-500/10 p-4 transition-all duration-300 hover:border-cyan-300/45 hover:bg-blue-500/15"
                                            >
                                                <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-cyan-300 drop-shadow-[0_0_10px_rgba(0,180,255,1)]" />
                                                <span className="text-sm leading-relaxed text-slate-300 sm:text-base">
                                                    {feature}
                                                </span>
                                            </li>
                                        ))}
                                    </ul>
                                ) : (
                                    <div className="rounded-2xl border border-dashed border-blue-400/25 bg-blue-500/10 p-6 text-center">
                                        <p className="text-sm italic text-slate-500">
                                            Tidak ada detail fitur spesifik.
                                        </p>
                                    </div>
                                )}
                            </div>

                            {/* Technologies */}
                            <div className="rounded-3xl border border-blue-400/25 bg-white/[0.045] p-6 shadow-[0_0_45px_rgba(0,132,255,.15)] backdrop-blur-xl sm:p-8">
                                <div className="mb-6 flex items-center gap-3">
                                    <span className="grid h-11 w-11 place-items-center rounded-xl border border-blue-300/25 bg-blue-500/10 text-cyan-300 shadow-[0_0_22px_rgba(0,132,255,.34)]">
                                        <Code2 className="h-5 w-5" />
                                    </span>

                                    <h3 className="text-2xl font-black tracking-[-0.035em] text-white">
                                        Teknologi Digunakan
                                    </h3>
                                </div>

                                {portfolio.technologies && portfolio.technologies.length > 0 ? (
                                    <div className="flex flex-wrap gap-3">
                                        {portfolio.technologies.map((tech, i) => (
                                            <span
                                                key={i}
                                                className="rounded-xl border border-blue-400/25 bg-blue-500/10 px-4 py-2 text-sm font-medium text-cyan-100 shadow-[0_0_18px_rgba(0,132,255,.10)] backdrop-blur-xl transition-all duration-300 hover:border-cyan-300/50 hover:text-white"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                ) : (
                                    <p className="text-sm italic text-slate-500">
                                        Teknologi tidak dispesifikasikan.
                                    </p>
                                )}

                                {/* CTA Box */}
                                <div className="relative mt-10 overflow-hidden rounded-3xl border border-blue-400/25 bg-[#020817]/75 p-7 text-center shadow-[0_0_45px_rgba(0,132,255,.16)]">
                                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/18 via-transparent to-cyan-400/10" />
                                    <div className="absolute -right-16 -top-16 h-36 w-36 rounded-full bg-blue-500/20 blur-3xl" />

                                    <div className="relative z-10">
                                        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-400/35 bg-blue-500/10 px-4 py-2 text-[10px] font-bold uppercase tracking-widest text-blue-200">
                                            <Zap className="h-3.5 w-3.5 text-cyan-300" />
                                            Start Project
                                        </div>

                                        <h4 className="mb-3 text-xl font-black tracking-[-0.035em] text-white">
                                            Ingin Punya Website/Aplikasi Seperti Ini?
                                        </h4>

                                        <p className="mb-6 text-sm leading-relaxed text-slate-400">
                                            Kami siap membantu mewujudkan ide digital Anda.
                                        </p>

                                        <a
                                            href="/#contact"
                                            className="group inline-flex items-center justify-center gap-2 rounded-2xl border border-cyan-300/35 bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 px-7 py-3 text-sm font-bold text-white shadow-[0_0_30px_rgba(0,132,255,.35)] transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_0_48px_rgba(0,180,255,.55)]"
                                        >
                                            Mulai Proyek
                                            <ExternalLink className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Related Projects */}
                {relatedPortfolios && relatedPortfolios.length > 0 && (
                    <section className="relative z-20 px-4 py-20 sm:px-6 lg:px-8">
                        <div className="container mx-auto max-w-7xl">
                            <div className="mb-10 flex flex-col gap-5 border-b border-blue-400/20 pb-6 sm:flex-row sm:items-end sm:justify-between">
                                <div>
                                    <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-blue-400/35 bg-blue-500/10 px-4 py-2 text-[10px] font-bold uppercase tracking-widest text-blue-200">
                                        <Sparkles className="h-3.5 w-3.5 text-cyan-300" />
                                        More Works
                                    </div>

                                    <h2 className="text-3xl font-black tracking-[-0.04em] text-white sm:text-4xl">
                                        Karya Lainnya
                                    </h2>

                                    <p className="mt-2 text-sm text-slate-400 sm:text-base">
                                        Jelajahi portofolio kami yang lain.
                                    </p>
                                </div>

                                <Link
                                    href="/#portfolio"
                                    className="group inline-flex items-center gap-2 text-sm font-semibold text-cyan-300 transition-colors duration-300 hover:text-white"
                                >
                                    Lihat Semua
                                    <ArrowRight
                                        size={16}
                                        className="transition-transform duration-300 group-hover:translate-x-1"
                                    />
                                </Link>
                            </div>

                            <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-3 lg:gap-8">
                                {relatedPortfolios.map((item) => {
                                    const relatedImage = getImageUrl(item.image);

                                    return (
                                        <Link
                                            key={item.id}
                                            href={route('portfolio.show', item.slug)}
                                            className="group block"
                                        >
                                            <div className="relative mb-4 aspect-[4/3] overflow-hidden rounded-3xl border border-blue-400/30 bg-[#031024]/80 shadow-[0_0_35px_rgba(0,132,255,.18)] backdrop-blur-xl transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-[0_0_65px_rgba(0,132,255,0.35)]">
                                                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/12 via-transparent to-cyan-400/10" />

                                                {relatedImage ? (
                                                    <img
                                                        src={relatedImage}
                                                        alt={item.title}
                                                        className="relative z-10 h-full w-full object-cover opacity-80 transition-all duration-700 group-hover:scale-110 group-hover:opacity-100"
                                                    />
                                                ) : (
                                                    <div className="relative z-10 flex h-full w-full items-center justify-center text-slate-500">
                                                        No Image
                                                    </div>
                                                )}

                                                <div className="absolute inset-0 z-20 flex items-end bg-gradient-to-t from-[#020817]/90 via-transparent to-transparent p-5 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                                                    <span className="inline-flex items-center gap-2 text-sm font-semibold text-white">
                                                        Lihat Detail
                                                        <ArrowRight size={14} />
                                                    </span>
                                                </div>
                                            </div>

                                            <h3 className="truncate text-lg font-bold text-white transition-colors duration-300 group-hover:text-cyan-300">
                                                {item.title}
                                            </h3>

                                            <p className="text-sm text-slate-500">
                                                {item.category}
                                            </p>
                                        </Link>
                                    );
                                })}
                            </div>
                        </div>
                    </section>
                )}
            </main>

            <Footer settings={settings} />

            <style>{`
                @keyframes fadeIn {
                    from {
                        opacity: 0;
                        transform: scale(0.96);
                    }
                    to {
                        opacity: 1;
                        transform: scale(1);
                    }
                }

                .animate-fadeIn {
                    animation: fadeIn 0.25s ease-out;
                }
            `}</style>
        </div>
    );
}