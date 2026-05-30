import React from 'react';
import { Head, Link } from '@inertiajs/react';
import {
    Code,
    Smartphone,
    Palette,
    Gamepad2,
    ArrowLeft,
    CheckCircle,
    Zap,
    Sparkles,
    ArrowRight,
    ShieldCheck,
    MessagesSquare
} from 'lucide-react';
import AnimatedNavbar from '@/Components/Landing/Navbar';
import Footer from '@/Components/Landing/Footer';

const iconMap = {
    Code: <Code size={64} className="text-blue-100 drop-shadow-[0_0_18px_rgba(0,153,255,1)]" />,
    Smartphone: <Smartphone size={64} className="text-blue-100 drop-shadow-[0_0_18px_rgba(0,153,255,1)]" />,
    Palette: <Palette size={64} className="text-blue-100 drop-shadow-[0_0_18px_rgba(0,153,255,1)]" />,
    Gamepad2: <Gamepad2 size={64} className="text-blue-100 drop-shadow-[0_0_18px_rgba(0,153,255,1)]" />,
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

export default function ServiceDetail({ service, settings }) {
    if (!service) return null;

    const serviceImage = getImageUrl(service.image);

    const benefits = [
        'Tim ahli berpengalaman di bidang digital dan teknologi.',
        'Proses pengerjaan transparan, rapi, dan terstruktur.',
        'Desain modern, responsif, dan menyesuaikan kebutuhan brand.',
        'Support teknis dan konsultasi untuk pengembangan lanjutan.'
    ];

    return (
        <div className="min-h-screen bg-[#020817] font-sans text-white">
            <Head title={service.title} />

            <AnimatedNavbar settings={settings} />

            <main className="relative overflow-hidden">
                {/* Global Background */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(0,132,255,0.22),transparent_32%),radial-gradient(circle_at_85%_25%,rgba(0,180,255,0.18),transparent_34%),linear-gradient(135deg,#020817_0%,#041126_48%,#020817_100%)]" />

                <div className="absolute inset-0 opacity-[0.16] bg-[linear-gradient(rgba(0,140,255,.45)_1px,transparent_1px),linear-gradient(90deg,rgba(0,140,255,.45)_1px,transparent_1px)] bg-[size:64px_64px]" />

                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-400/70 to-transparent" />

                <div className="absolute -right-28 top-20 h-96 w-96 rounded-full bg-blue-500/20 blur-3xl" />
                <div className="absolute -left-28 top-96 h-80 w-80 rounded-full bg-cyan-400/10 blur-3xl" />

                {/* Hero Section */}
                <section className="relative z-10 overflow-hidden px-4 pb-20 pt-32 sm:px-6 lg:px-8 lg:pb-28 lg:pt-36">
                    <div className="absolute left-10 top-28 hidden h-px w-72 bg-gradient-to-r from-transparent via-cyan-400/70 to-transparent md:block" />
                    <div className="absolute right-10 top-28 hidden h-px w-72 bg-gradient-to-r from-transparent via-cyan-400/70 to-transparent md:block" />

                    <div className="container mx-auto max-w-7xl">
                        <div className="mb-8">
                            <Link
                                href="/"
                                className="group inline-flex items-center gap-2 rounded-full border border-blue-400/40 bg-blue-500/10 px-4 py-2 text-xs font-semibold text-blue-100 shadow-[0_0_25px_rgba(0,132,255,0.18)] backdrop-blur-xl transition-all duration-300 hover:border-cyan-300/70 hover:bg-blue-400/15 hover:text-white sm:text-sm"
                            >
                                <ArrowLeft className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1" />
                                Kembali ke Beranda
                            </Link>
                        </div>

                        <div className="grid items-center gap-8 lg:grid-cols-12 lg:gap-14">
                            {/* Image / Icon Box */}
                            <div className="lg:col-span-5">
                                <div className="group relative mx-auto w-full max-w-md lg:mx-0 lg:max-w-none">
                                    <div className="absolute -inset-6 rounded-[2rem] bg-blue-500/25 blur-3xl transition-opacity duration-700 group-hover:opacity-90" />

                                    <div className="relative overflow-hidden rounded-[2rem] border border-blue-300/30 bg-[#031024]/80 shadow-[0_0_70px_rgba(0,132,255,.28)] backdrop-blur-xl transition-all duration-500 group-hover:scale-[1.02]">
                                        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/22 via-transparent to-cyan-400/10" />

                                        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,140,255,.22)_1px,transparent_1px),linear-gradient(90deg,rgba(0,140,255,.22)_1px,transparent_1px)] bg-[size:34px_34px] opacity-35" />

                                        <div className="absolute left-4 top-4 z-20 h-6 w-6 border-l-2 border-t-2 border-blue-200/80" />
                                        <div className="absolute right-4 top-4 z-20 h-6 w-6 border-r-2 border-t-2 border-blue-200/80" />
                                        <div className="absolute bottom-4 left-4 z-20 h-6 w-6 border-b-2 border-l-2 border-blue-200/60" />
                                        <div className="absolute bottom-4 right-4 z-20 h-6 w-6 border-b-2 border-r-2 border-blue-200/60" />

                                        {serviceImage ? (
                                            <div className="relative z-10 h-[280px] w-full overflow-hidden sm:h-[360px] lg:h-[430px]">
                                                <img
                                                    src={serviceImage}
                                                    alt={service.title}
                                                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                                                />

                                                <div className="absolute inset-0 bg-gradient-to-t from-[#020817]/50 via-transparent to-transparent" />
                                            </div>
                                        ) : (
                                            <div className="relative z-10 grid h-[280px] w-full place-items-center sm:h-[360px] lg:h-[430px]">
                                                <div className="grid h-28 w-28 place-items-center rounded-3xl border border-blue-300/35 bg-blue-500/10 shadow-[0_0_42px_rgba(0,132,255,.55)] lg:h-36 lg:w-36">
                                                    {iconMap[service.icon] || (
                                                        <Code
                                                            size={64}
                                                            className="text-blue-100 drop-shadow-[0_0_18px_rgba(0,153,255,1)]"
                                                        />
                                                    )}
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>

                            {/* Title Content */}
                            <div className="text-center lg:col-span-7 lg:text-left">
                                <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-400/50 bg-blue-500/10 px-5 py-2 text-[10px] font-bold uppercase tracking-widest text-blue-200 shadow-[0_0_25px_rgba(0,132,255,0.22)] backdrop-blur-md sm:text-xs">
                                    <Zap size={14} className="fill-current text-cyan-300" />
                                    Premium Service
                                </div>

                                <h1 className="mb-5 text-4xl font-black leading-[1.02] tracking-[-0.055em] text-white drop-shadow-[0_0_24px_rgba(0,132,255,.32)] sm:text-6xl lg:text-7xl xl:text-8xl">
                                    {service.title}
                                </h1>

                                <p className="mx-auto max-w-3xl text-sm leading-relaxed text-slate-300 sm:text-lg lg:mx-0 lg:text-xl">
                                    {service.tagline ||
                                        'Solusi profesional berbasis teknologi modern untuk membantu bisnis, instansi, dan brand berkembang lebih cepat di era digital.'}
                                </p>

                                <div className="mt-8 flex flex-wrap justify-center gap-3 lg:justify-start">
                                    <a
                                        href="/#contact"
                                        className="group inline-flex items-center justify-center gap-2 rounded-full border border-cyan-300/35 bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 px-6 py-3 text-sm font-bold text-white shadow-[0_0_30px_rgba(0,132,255,.35)] transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_0_48px_rgba(0,180,255,.55)]"
                                    >
                                        Konsultasi Sekarang
                                        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                                    </a>

                                    <Link
                                        href="/#services"
                                        className="inline-flex items-center justify-center rounded-full border border-blue-400/35 bg-blue-500/10 px-6 py-3 text-sm font-semibold text-blue-100 backdrop-blur-xl transition-all duration-300 hover:border-cyan-300/60 hover:text-white"
                                    >
                                        Layanan Lainnya
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Content Section */}
                <section className="relative z-20 px-4 pb-16 sm:px-6 lg:px-8">
                    <div className="container mx-auto max-w-7xl">
                        <div className="relative overflow-hidden rounded-[2rem] border border-blue-400/25 bg-white/[0.045] shadow-[0_0_70px_rgba(0,132,255,.18)] backdrop-blur-xl">
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/12 via-transparent to-cyan-400/10" />

                            <div className="absolute inset-0 bg-[linear-gradient(rgba(0,140,255,.16)_1px,transparent_1px),linear-gradient(90deg,rgba(0,140,255,.16)_1px,transparent_1px)] bg-[size:42px_42px] opacity-30" />

                            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/70 to-transparent" />

                            <div className="relative z-10 grid gap-10 p-5 sm:p-8 md:p-10 lg:grid-cols-3 lg:p-12">
                                {/* Main Description */}
                                <div className="lg:col-span-2">
                                    <div className="mb-6 inline-flex items-center gap-3">
                                        <span className="grid h-10 w-10 place-items-center rounded-xl border border-blue-300/25 bg-blue-500/10 text-cyan-300 shadow-[0_0_22px_rgba(0,132,255,.34)]">
                                            <Sparkles className="h-5 w-5" />
                                        </span>

                                        <h2 className="text-2xl font-black tracking-[-0.035em] text-white sm:text-3xl">
                                            Deskripsi Layanan
                                        </h2>
                                    </div>

                                    <div className="max-w-none whitespace-pre-line text-sm leading-relaxed text-slate-300 sm:text-base lg:text-lg">
                                        {service.description}
                                    </div>

                                    {/* Features from database */}
                                    {service.features && service.features.length > 0 && (
                                        <div className="mt-10 rounded-3xl border border-blue-400/25 bg-[#031024]/70 p-5 shadow-[0_0_35px_rgba(0,132,255,0.12)] backdrop-blur-xl sm:p-7">
                                            <div className="mb-5 flex items-center gap-3">
                                                <span className="grid h-10 w-10 place-items-center rounded-xl border border-blue-300/25 bg-blue-500/10 text-cyan-300">
                                                    <CheckCircle className="h-5 w-5" />
                                                </span>

                                                <h3 className="text-lg font-bold text-white sm:text-xl">
                                                    Fitur Layanan
                                                </h3>
                                            </div>

                                            <ul className="grid gap-4 sm:grid-cols-2">
                                                {service.features.map((item, idx) => (
                                                    <li key={idx} className="flex items-start gap-3">
                                                        <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-cyan-300 drop-shadow-[0_0_10px_rgba(0,180,255,1)]" />
                                                        <span className="text-sm leading-relaxed text-slate-300 sm:text-base">
                                                            {item}
                                                        </span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}

                                    {/* Benefits */}
                                    <div className="mt-10 rounded-3xl border border-blue-400/25 bg-[#031024]/70 p-5 shadow-[0_0_35px_rgba(0,132,255,0.12)] backdrop-blur-xl sm:p-7">
                                        <div className="mb-5 flex items-center gap-3">
                                            <span className="grid h-10 w-10 place-items-center rounded-xl border border-blue-300/25 bg-blue-500/10 text-cyan-300">
                                                <ShieldCheck className="h-5 w-5" />
                                            </span>

                                            <h3 className="text-lg font-bold text-white sm:text-xl">
                                                Mengapa Memilih Layanan Ini?
                                            </h3>
                                        </div>

                                        <ul className="space-y-4">
                                            {service.benefits && service.benefits.length > 0 ? (
                                                service.benefits.map((item, idx) => (
                                                    <li key={idx} className="flex items-start gap-3">
                                                        <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-cyan-300 drop-shadow-[0_0_10px_rgba(0,180,255,1)]" />

                                                        <span className="text-sm leading-relaxed text-slate-300 sm:text-base">
                                                            {typeof item === 'string'
                                                                ? item
                                                                : `${item.title || ''}${item.desc ? ` - ${item.desc}` : ''}`}
                                                        </span>
                                                    </li>
                                                ))
                                            ) : (
                                                benefits.map((item, idx) => (
                                                    <li key={idx} className="flex items-start gap-3">
                                                        <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-cyan-300 drop-shadow-[0_0_10px_rgba(0,180,255,1)]" />

                                                        <span className="text-sm leading-relaxed text-slate-300 sm:text-base">
                                                            {item}
                                                        </span>
                                                    </li>
                                                ))
                                            )}
                                        </ul>
                                    </div>
                                </div>

                                {/* CTA Sidebar */}
                                <aside className="lg:col-span-1">
                                    <div className="sticky top-28 overflow-hidden rounded-3xl border border-blue-400/25 bg-[#031024]/80 p-6 shadow-[0_0_50px_rgba(0,132,255,0.20)] backdrop-blur-xl">
                                        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/14 via-transparent to-cyan-400/8" />

                                        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/70 to-transparent" />

                                        <div className="relative z-10">
                                            {serviceImage ? (
                                                <div className="mb-5 overflow-hidden rounded-2xl border border-blue-300/25 bg-blue-500/10 shadow-[0_0_28px_rgba(0,132,255,.25)]">
                                                    <img
                                                        src={serviceImage}
                                                        alt={service.title}
                                                        className="h-40 w-full object-cover"
                                                    />
                                                </div>
                                            ) : (
                                                <div className="mb-5 grid h-14 w-14 place-items-center rounded-2xl border border-blue-300/30 bg-blue-500/10 text-cyan-300 shadow-[0_0_28px_rgba(0,132,255,.35)]">
                                                    <MessagesSquare className="h-7 w-7" />
                                                </div>
                                            )}

                                            <h3 className="mb-3 text-2xl font-black leading-tight tracking-[-0.04em] text-white">
                                                Tertarik dengan {service.title}?
                                            </h3>

                                            <p className="mb-7 text-sm leading-relaxed text-slate-400">
                                                Konsultasikan kebutuhan proyek Anda dengan tim kami sekarang.
                                            </p>

                                            <a
                                                href="/#contact"
                                                className="group flex w-full items-center justify-center gap-2 rounded-2xl border border-cyan-300/35 bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 px-5 py-4 text-center text-sm font-bold text-white shadow-[0_0_30px_rgba(0,132,255,.35)] transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_0_48px_rgba(0,180,255,.55)]"
                                            >
                                                Hubungi Kami
                                                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                                            </a>

                                            <div className="mt-6 border-t border-blue-400/20 pt-6 text-center">
                                                <p className="mb-3 text-xs text-slate-500">
                                                    Atau hubungi via WhatsApp
                                                </p>

                                                <a
                                                    href="https://wa.me/6281232916758"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="inline-flex items-center justify-center gap-2 text-sm font-semibold text-cyan-300 transition-colors duration-300 hover:text-white"
                                                >
                                                    <Smartphone size={18} />
                                                    +62 812 3291 6758
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </aside>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Related Services */}
                <section className="relative z-20 px-4 pb-20 text-center sm:px-6 lg:px-8">
                    <Link
                        href="/#services"
                        className="group inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-500/10 px-5 py-3 text-sm font-semibold text-slate-300 shadow-[0_0_25px_rgba(0,132,255,0.12)] backdrop-blur-xl transition-all duration-300 hover:border-cyan-300/60 hover:text-white"
                    >
                        Lihat Layanan Lainnya
                        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                </section>
            </main>

            <Footer settings={settings} />
        </div>
    );
}