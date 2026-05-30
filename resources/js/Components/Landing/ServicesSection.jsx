import React from 'react';
import { Code, Smartphone, Palette, Gamepad2, ArrowRight } from 'lucide-react';

// Helper untuk mapping icon string dari database ke komponen Lucide
const iconMap = {
    Code: Code,
    Smartphone: Smartphone,
    Palette: Palette,
    Gamepad2: Gamepad2,
};

// Helper agar tidak error di preview (pengganti route() Laravel)
const getServiceUrl = (id) => {
    try {
        if (typeof route === 'function') {
            return route('service.show', id);
        }
    } catch (e) {}
    return '#';
};

const ServiceCard = ({ id, icon, title, description, index }) => {
    const IconComponent = iconMap[icon] || Code;

    return (
        <div
            className="group relative h-full"
            style={{
                animation: `fadeInUp 0.6s ease-out ${index * 0.1}s backwards`
            }}
        >
            <div className="relative h-full cursor-pointer">
                {/* Glow belakang card */}
                <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-br from-blue-400/70 via-cyan-400/20 to-blue-700/70 opacity-60 blur-[2px] transition-all duration-500 group-hover:opacity-100 group-hover:blur-[4px] sm:rounded-3xl" />

                {/* Main Card */}
                <div className="relative flex h-full flex-col overflow-hidden rounded-2xl border border-blue-400/40 bg-[#031124]/80 shadow-[0_0_35px_rgba(0,132,255,.22)] backdrop-blur-xl transition-all duration-500 group-hover:-translate-y-2 group-hover:border-cyan-300/70 group-hover:shadow-[0_0_55px_rgba(0,132,255,.45)] sm:rounded-3xl">
                    {/* Grid background */}
                    <div className="absolute inset-0 opacity-20 bg-[linear-gradient(rgba(0,140,255,.45)_1px,transparent_1px),linear-gradient(90deg,rgba(0,140,255,.45)_1px,transparent_1px)] bg-[size:36px_36px]" />

                    {/* Neon overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/15 via-transparent to-cyan-400/10 opacity-70" />

                    {/* Content */}
                    <div className="relative z-10 flex flex-grow flex-col p-4 sm:p-6 lg:p-7">
                        {/* Decorative Corner Elements */}
                        <div className="absolute left-3 top-3 h-4 w-4 border-l-2 border-t-2 border-blue-200/80 sm:left-4 sm:top-4 sm:h-5 sm:w-5" />
                        <div className="absolute right-3 top-3 h-4 w-4 border-r-2 border-t-2 border-blue-200/80 sm:right-4 sm:top-4 sm:h-5 sm:w-5" />

                        {/* Icon Container */}
                        <div className="mb-4 sm:mb-6">
                            <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl border border-blue-400/50 bg-blue-500/10 shadow-[inset_0_1px_0_rgba(255,255,255,.12),0_0_28px_rgba(0,132,255,.45)] transition-all duration-500 group-hover:scale-110 group-hover:shadow-[0_0_40px_rgba(0,174,255,.65)] sm:h-20 sm:w-20">
                                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/20 to-cyan-400/10" />
                                <IconComponent className="relative z-10 h-7 w-7 text-cyan-200 drop-shadow-[0_0_12px_rgba(0,174,255,.9)] sm:h-10 sm:w-10" />
                            </div>
                        </div>

                        {/* Title */}
                        <h3 className="mb-2 text-sm font-black leading-tight tracking-tight text-white transition-colors duration-300 group-hover:text-cyan-100 sm:mb-4 sm:text-2xl">
                            {title}
                        </h3>

                        {/* Description */}
                        <p className="mb-4 line-clamp-4 flex-grow text-[10px] leading-relaxed text-slate-300 sm:text-base">
                            {description}
                        </p>

                        {/* Link Button */}
                        <a
                            href={getServiceUrl(id)}
                            className="mt-auto inline-flex items-center gap-2 text-[10px] font-bold text-cyan-300 transition-all duration-300 group-hover:text-white sm:text-base"
                        >
                            <span>Learn more</span>
                            <ArrowRight className="h-3 w-3 transition-transform duration-300 group-hover:translate-x-2 sm:h-5 sm:w-5" />
                        </a>

                        {/* Tech Indicator Bars */}
                        <div className="mt-4 flex gap-2 sm:mt-6">
                            <div className="h-1 flex-1 overflow-hidden rounded-full bg-slate-700/70">
                                <div className="h-full w-[90%] rounded-full bg-gradient-to-r from-cyan-300 to-blue-500 shadow-[0_0_12px_rgba(0,174,255,.9)]" />
                            </div>
                            <div className="h-1 flex-1 overflow-hidden rounded-full bg-slate-700/70">
                                <div className="h-full w-[65%] rounded-full bg-gradient-to-r from-blue-400 to-cyan-300" />
                            </div>
                            <div className="h-1 flex-1 overflow-hidden rounded-full bg-slate-700/70">
                                <div className="h-full w-[80%] rounded-full bg-gradient-to-r from-blue-500 to-cyan-400" />
                            </div>
                        </div>

                        {/* Decorative Bottom Corner Elements */}
                        <div className="absolute bottom-3 left-3 h-4 w-4 border-b-2 border-l-2 border-blue-200/80 sm:bottom-4 sm:left-4 sm:h-5 sm:w-5" />
                        <div className="absolute bottom-3 right-3 h-4 w-4 border-b-2 border-r-2 border-blue-200/80 sm:bottom-4 sm:right-4 sm:h-5 sm:w-5" />
                    </div>
                </div>
            </div>
        </div>
    );
};

const ServicesSection = ({ services }) => {
    if (!services || services.length === 0) return null;

    return (
        <section
            id="services"
            className="relative overflow-hidden bg-[#020817] py-12 text-white sm:py-24"
        >
            {/* Main Background */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(0,132,255,0.25),transparent_35%),radial-gradient(circle_at_20%_60%,rgba(0,174,255,0.12),transparent_28%),linear-gradient(135deg,#020817_0%,#041126_48%,#020817_100%)]" />

            {/* Grid / circuit pattern */}
            <div className="absolute inset-0 opacity-[0.14] bg-[linear-gradient(rgba(0,140,255,.45)_1px,transparent_1px),linear-gradient(90deg,rgba(0,140,255,.45)_1px,transparent_1px)] bg-[size:64px_64px]" />

            {/* Neon lines */}
            <div className="absolute left-0 top-28 h-px w-1/4 bg-gradient-to-r from-transparent via-cyan-400 to-transparent shadow-[0_0_20px_rgba(0,174,255,.9)]" />
            <div className="absolute right-0 top-28 h-px w-1/4 bg-gradient-to-r from-transparent via-cyan-400 to-transparent shadow-[0_0_20px_rgba(0,174,255,.9)]" />

            {/* Glow objects */}
            <div className="absolute -left-24 top-1/3 h-80 w-80 rounded-full bg-blue-500/10 blur-3xl" />
            <div className="absolute -right-24 bottom-1/4 h-96 w-96 rounded-full bg-cyan-400/10 blur-3xl" />

            <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header Section */}
                <div className="mx-auto mb-12 max-w-4xl text-center sm:mb-20">
                    <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-400/50 bg-blue-500/10 px-5 py-2 text-xs font-bold uppercase tracking-widest text-blue-200 shadow-[0_0_25px_rgba(0,132,255,0.25)] backdrop-blur-md sm:mb-6">
                        <span className="h-1.5 w-1.5 rounded-full bg-cyan-300 shadow-[0_0_12px_rgba(0,174,255,.9)]" />
                        Layanan Kami
                    </div>

                    <h2 className="mb-4 text-4xl font-black leading-tight tracking-[-0.05em] text-white drop-shadow-[0_0_22px_rgba(0,132,255,.22)] sm:mb-6 sm:text-6xl lg:text-7xl">
                        Our Services
                    </h2>

                    <p className="mx-auto max-w-2xl text-sm leading-relaxed text-slate-300 sm:text-lg">
                        Solusi IT modern dan inovatif untuk membantu bisnis, instansi, dan brand
                        tumbuh lebih cepat di era digital.
                    </p>
                </div>

                {/* Services Grid - tetap 2 kolom di mobile, 4 kolom di desktop */}
                <div className="grid grid-cols-2 gap-3 sm:gap-6 lg:grid-cols-4 lg:gap-8">
                    {services.map((service, index) => (
                        <ServiceCard
                            key={service.id}
                            id={service.id}
                            icon={service.icon}
                            title={service.title}
                            description={service.description}
                            index={index}
                        />
                    ))}
                </div>
            </div>

            <style>{`
                @keyframes fadeInUp {
                    from {
                        opacity: 0;
                        transform: translateY(30px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
            `}</style>
        </section>
    );
};

export default ServicesSection;