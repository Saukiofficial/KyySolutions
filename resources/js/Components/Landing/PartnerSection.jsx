import React from 'react';
import { Shield, Award, TrendingUp, Zap } from 'lucide-react';

const PartnerSection = ({ partners }) => {
    // Jika tidak ada partner, jangan tampilkan section ini
    if (!partners || partners.length === 0) return null;

    return (
        <section className="relative py-12 sm:py-24 bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300 overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-30">
                <div className="absolute inset-0" style={{
                    backgroundImage: `radial-gradient(circle at 2px 2px, rgba(0,0,0,0.08) 1px, transparent 0)`,
                    backgroundSize: '40px 40px'
                }} />
            </div>

            {/* Geometric Shapes */}
            <div className="absolute top-40 right-10 w-20 h-20 border-2 border-gray-400/30 rotate-45" />
            <div className="absolute bottom-40 left-10 w-32 h-32 border-2 border-gray-500/30 rounded-full" />
            <div className="absolute top-1/3 left-20 w-16 h-16 bg-gray-400/10 rotate-12" />

            <div className="container mx-auto px-2 sm:px-6 lg:px-8 relative z-10 max-w-7xl">
                {/* Header Section */}
                <div className="max-w-4xl mx-auto text-center mb-8 sm:mb-20">
                    <div className="inline-block mb-4 sm:mb-6">
                        <div className="flex items-center gap-3 px-5 py-2 bg-white/80 backdrop-blur-sm border border-gray-300 rounded-lg shadow-sm">
                            <div className="w-2 h-2 bg-gray-700 rounded-full" />
                            <span className="text-xs sm:text-sm font-medium text-gray-700 tracking-wider uppercase">Trusted Partners</span>
                        </div>
                    </div>
                    <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
                        Dipercaya Oleh{' '}
                        <span className="text-gray-800">
                            Brand Terkemuka
                        </span>
                    </h2>
                    <p className="text-sm sm:text-lg text-gray-700 leading-relaxed max-w-2xl mx-auto">
                        Bergabung dengan ratusan perusahaan yang telah mempercayai kami
                    </p>
                </div>

                {/* Partners Grid - Premium Card Style */}
                <div className="mb-8 sm:mb-16">
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-6">
                        {partners.map((partner, index) => (
                            <div
                                key={index}
                                className="group relative"
                                style={{
                                    animation: `fadeInUp 0.6s ease-out ${index * 0.1}s backwards`
                                }}
                            >
                                {/* Card Container */}
                                <div className="relative">
                                    {/* Background Card */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-gray-300 to-gray-400 rounded-xl sm:rounded-2xl transform rotate-3 group-hover:rotate-6 transition-transform duration-500" />

                                    {/* Main Card */}
                                    <div className="relative bg-white backdrop-blur-sm rounded-xl sm:rounded-2xl overflow-hidden border border-gray-300 shadow-xl group-hover:shadow-2xl transition-all duration-500">
                                        {/* Logo Section with Frame */}
                                        <div className="relative p-3 sm:p-4">
                                            {/* Decorative Corner Elements */}
                                            <div className="absolute top-2 left-2 sm:top-3 sm:left-3 w-2 h-2 sm:w-3 sm:h-3 border-t-2 border-l-2 border-gray-500" />
                                            <div className="absolute top-2 right-2 sm:top-3 sm:right-3 w-2 h-2 sm:w-3 sm:h-3 border-t-2 border-r-2 border-gray-600" />

                                            {/* Logo Container */}
                                            <div className="relative aspect-[4/3] rounded-lg sm:rounded-xl overflow-hidden bg-gray-100 p-2 sm:p-3 flex items-center justify-center">
                                                {/* Corner Cuts */}
                                                <div className="absolute top-0 right-0 w-3 h-3 sm:w-4 sm:h-4 bg-white" style={{clipPath: 'polygon(100% 0, 100% 100%, 0 0)'}} />
                                                <div className="absolute bottom-0 left-0 w-3 h-3 sm:w-4 sm:h-4 bg-white" style={{clipPath: 'polygon(0 100%, 100% 100%, 0 0)'}} />

                                                <img
                                                    src={`/storage/${partner.logo}`}
                                                    alt={partner.name}
                                                    className="w-full h-full object-contain transform group-hover:scale-110 transition-transform duration-700 grayscale group-hover:grayscale-0 opacity-70 group-hover:opacity-100"
                                                />
                                            </div>

                                            {/* Decorative Bottom Corner Elements */}
                                            <div className="absolute bottom-2 left-2 sm:bottom-3 sm:left-3 w-2 h-2 sm:w-3 sm:h-3 border-b-2 border-l-2 border-gray-600" />
                                            <div className="absolute bottom-2 right-2 sm:bottom-3 sm:right-3 w-2 h-2 sm:w-3 sm:h-3 border-b-2 border-r-2 border-gray-500" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Bottom CTA - Premium Style */}
                <div className="relative">
                    {/* Background Card */}
                    <div className="absolute inset-0 bg-gradient-to-br from-gray-400 to-gray-500 rounded-2xl sm:rounded-3xl transform rotate-2 transition-transform duration-500" />

                    {/* Main CTA Card */}
                    <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl sm:rounded-3xl p-6 sm:p-12 md:p-16 shadow-xl border border-gray-700">
                        {/* Decorative Corner Elements */}
                        <div className="absolute top-4 left-4 sm:top-6 sm:left-6 w-4 h-4 sm:w-6 sm:h-6 border-t-2 border-l-2 border-gray-600" />
                        <div className="absolute top-4 right-4 sm:top-6 sm:right-6 w-4 h-4 sm:w-6 sm:h-6 border-t-2 border-r-2 border-gray-500" />
                        <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 w-4 h-4 sm:w-6 sm:h-6 border-b-2 border-l-2 border-gray-500" />
                        <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 w-4 h-4 sm:w-6 sm:h-6 border-b-2 border-r-2 border-gray-600" />

                        <div className="max-w-2xl mx-auto space-y-3 sm:space-y-6 text-center relative z-10">
                            <h3 className="text-lg sm:text-3xl font-bold text-white leading-tight">
                                Ingin Bergabung dengan Partner Kami?
                            </h3>
                            <p className="text-gray-300 text-xs sm:text-lg">
                                Mari bersama-sama menciptakan solusi digital yang luar biasa
                            </p>
                            <a
                                href="#contact"
                                className="inline-flex items-center gap-2 sm:gap-3 px-4 py-2 sm:px-8 sm:py-4 bg-white text-gray-900 rounded-lg sm:rounded-xl font-bold text-xs sm:text-base hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 group mt-2 sm:mt-0"
                            >
                                Hubungi Kami
                                <svg
                                    className="w-3 h-3 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-300"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </a>
                        </div>
                    </div>
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

export default PartnerSection;
