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
            className="group relative"
            style={{
                animation: `fadeInUp 0.6s ease-out ${index * 0.1}s backwards`
            }}
        >
            {/* Card Container */}
            <div className="relative cursor-pointer h-full">
                {/* Background Card */}
                <div className="absolute inset-0 bg-gradient-to-br from-gray-300 to-gray-400 rounded-2xl sm:rounded-3xl transform rotate-3 group-hover:rotate-6 transition-transform duration-500" />

                {/* Main Card */}
                <div className="relative bg-white backdrop-blur-sm rounded-2xl sm:rounded-3xl overflow-hidden border border-gray-300 shadow-xl group-hover:shadow-2xl transition-all duration-500 h-full flex flex-col">
                    {/* Content */}
                    <div className="relative p-4 sm:p-6 flex flex-col flex-grow">
                        {/* Decorative Corner Elements */}
                        <div className="absolute top-3 left-3 sm:top-4 sm:left-4 w-3 h-3 sm:w-4 sm:h-4 border-t-2 border-l-2 border-gray-500" />
                        <div className="absolute top-3 right-3 sm:top-4 sm:right-4 w-3 h-3 sm:w-4 sm:h-4 border-t-2 border-r-2 border-gray-600" />

                        {/* Icon Container */}
                        <div className="relative mb-4 sm:mb-6">
                            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-gray-700 to-gray-900 rounded-xl sm:rounded-2xl flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg">
                                {/* Corner Cuts on Icon */}
                                <div className="absolute top-0 right-0 w-2 h-2 sm:w-3 sm:h-3 bg-white" style={{clipPath: 'polygon(100% 0, 100% 100%, 0 0)'}} />
                                <IconComponent className="w-6 h-6 sm:w-8 sm:h-8 text-white relative z-10" />
                            </div>
                        </div>

                        {/* Title */}
                        <h3 className="text-sm sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3 leading-tight group-hover:text-gray-700 transition-colors duration-300">
                            {title}
                        </h3>

                        {/* Description */}
                        <p className="text-[10px] sm:text-sm text-gray-600 leading-relaxed mb-3 sm:mb-4 line-clamp-3 sm:line-clamp-4 flex-grow">
                            {description}
                        </p>

                        {/* Link Button */}
                        <a
                            href={getServiceUrl(id)}
                            className="mt-auto inline-flex items-center gap-1 sm:gap-2 text-[10px] sm:text-sm font-semibold text-gray-700 group-hover:text-gray-900 transition-colors"
                        >
                            <span>Learn more</span>
                            <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 transform group-hover:translate-x-1 transition-transform duration-300" />
                        </a>

                        {/* Tech Indicator Bars */}
                        <div className="flex gap-1 sm:gap-1.5 mt-3 sm:mt-4">
                            <div className="h-1 sm:h-1.5 flex-1 bg-gray-200 rounded-full overflow-hidden">
                                <div className="h-full bg-gradient-to-r from-gray-600 to-gray-700 rounded-full" style={{width: '90%'}} />
                            </div>
                            <div className="h-1 sm:h-1.5 flex-1 bg-gray-200 rounded-full overflow-hidden">
                                <div className="h-full bg-gradient-to-r from-gray-700 to-gray-800 rounded-full" style={{width: '85%'}} />
                            </div>
                            <div className="h-1 sm:h-1.5 flex-1 bg-gray-200 rounded-full overflow-hidden">
                                <div className="h-full bg-gradient-to-r from-gray-500 to-gray-600 rounded-full" style={{width: '95%'}} />
                            </div>
                        </div>

                        {/* Decorative Bottom Corner Elements */}
                        <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 w-3 h-3 sm:w-4 sm:h-4 border-b-2 border-l-2 border-gray-600" />
                        <div className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 w-3 h-3 sm:w-4 sm:h-4 border-b-2 border-r-2 border-gray-500" />
                    </div>
                </div>
            </div>
        </div>
    );
};

const ServicesSection = ({ services }) => {
    if (!services || services.length === 0) return null;

    return (
        <section id="services" className="py-12 sm:py-24 bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-30">
                <div className="absolute inset-0" style={{
                    backgroundImage: `radial-gradient(circle at 2px 2px, rgba(0,0,0,0.08) 1px, transparent 0)`,
                    backgroundSize: '40px 40px'
                }} />
            </div>

            {/* Geometric Shapes */}
            <div className="absolute top-40 left-10 w-20 h-20 border-2 border-gray-400/30 rotate-45" />
            <div className="absolute bottom-40 right-10 w-32 h-32 border-2 border-gray-500/30 rounded-full" />
            <div className="absolute top-1/3 right-20 w-16 h-16 bg-gray-400/10 rotate-12" />

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Header Section */}
                <div className="max-w-4xl mx-auto text-center mb-12 sm:mb-20">
                    <div className="inline-block mb-4 sm:mb-6">
                        <div className="flex items-center gap-3 px-5 py-2 bg-white/80 backdrop-blur-sm border border-gray-300 rounded-lg shadow-sm">
                            <div className="w-2 h-2 bg-gray-700 rounded-full" />
                            <span className="text-xs sm:text-sm font-medium text-gray-700 tracking-wider uppercase">Our Services</span>
                        </div>
                    </div>
                    <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
                        What We Offer
                    </h2>
                    <p className="text-sm sm:text-lg text-gray-700 leading-relaxed max-w-2xl mx-auto">
                        Comprehensive digital solutions tailored to transform your vision
                    </p>
                </div>

                {/* Services Grid - Forced 2 Columns on Mobile */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6 lg:gap-8">
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
