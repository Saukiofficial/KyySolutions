import React from 'react';
import { Shield, Award, TrendingUp, Zap } from 'lucide-react';

const PartnerSection = ({ partners }) => {
    // Jika tidak ada partner, jangan tampilkan section ini
    if (!partners || partners.length === 0) return null;

    return (
        <section className="relative py-24 bg-gradient-to-b from-slate-50 via-white to-slate-50 overflow-hidden">
            {/* Subtle Background Pattern */}
            <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] bg-[size:20px_20px] opacity-30"></div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-7xl">
                {/* Header Section */}
                <div className="text-center mb-20 space-y-6">
                    <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-50 border border-blue-100 rounded-full">
                        <Shield className="w-4 h-4 text-blue-600" />
                        <span className="text-sm font-semibold text-blue-700 uppercase tracking-wider">
                            Trusted Partners
                        </span>
                    </div>
                    <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight">
                        Dipercaya Oleh{' '}
                        <span className="bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-600 bg-clip-text text-transparent">
                            Brand Terkemuka
                        </span>
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
                        Bergabung dengan ratusan perusahaan yang telah mempercayai kami untuk menghadirkan solusi digital terbaik
                    </p>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-20 max-w-5xl mx-auto">
                    <div className="group bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100 hover:border-blue-200 hover:shadow-md transition-all duration-300">
                        <div className="w-14 h-14 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                            <Award className="w-7 h-7 text-blue-600" />
                        </div>
                        <div className="text-4xl font-bold bg-gradient-to-br from-gray-900 to-gray-700 bg-clip-text text-transparent mb-2">
                            {partners.length}+
                        </div>
                        <div className="text-sm text-gray-600 font-medium">Partners</div>
                    </div>

                    <div className="group bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100 hover:border-green-200 hover:shadow-md transition-all duration-300">
                        <div className="w-14 h-14 bg-gradient-to-br from-green-50 to-green-100 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                            <TrendingUp className="w-7 h-7 text-green-600" />
                        </div>
                        <div className="text-4xl font-bold bg-gradient-to-br from-gray-900 to-gray-700 bg-clip-text text-transparent mb-2">
                            100%
                        </div>
                        <div className="text-sm text-gray-600 font-medium">Satisfaction</div>
                    </div>

                    <div className="group bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100 hover:border-purple-200 hover:shadow-md transition-all duration-300">
                        <div className="w-14 h-14 bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                            <Zap className="w-7 h-7 text-purple-600" />
                        </div>
                        <div className="text-4xl font-bold bg-gradient-to-br from-gray-900 to-gray-700 bg-clip-text text-transparent mb-2">
                            24/7
                        </div>
                        <div className="text-sm text-gray-600 font-medium">Support</div>
                    </div>

                    <div className="group bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100 hover:border-orange-200 hover:shadow-md transition-all duration-300">
                        <div className="w-14 h-14 bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                            <Shield className="w-7 h-7 text-orange-600" />
                        </div>
                        <div className="text-4xl font-bold bg-gradient-to-br from-gray-900 to-gray-700 bg-clip-text text-transparent mb-2">
                            10+
                        </div>
                        <div className="text-sm text-gray-600 font-medium">Years</div>
                    </div>
                </div>

                {/* Partners Grid - Logo Only, No Box, Smaller Size */}
                <div className="mb-20">
                    <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 lg:gap-16">
                        {partners.map((partner, index) => (
                            <div
                                key={index}
                                className="group relative flex items-center justify-center transition-all duration-300 hover:scale-110"
                                style={{
                                    animationDelay: `${index * 50}ms`
                                }}
                            >
                                {/* Logo Only - Smaller Size */}
                                <img
                                    src={`/storage/${partner.logo}`}
                                    alt={partner.name}
                                    className="h-12 w-auto object-contain opacity-90 hover:opacity-100 transition-all duration-300"
                                />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Bottom CTA */}
                <div className="text-center bg-gradient-to-br from-blue-600 to-indigo-700 rounded-3xl p-12 md:p-16 shadow-xl">
                    <div className="max-w-2xl mx-auto space-y-6">
                        <h3 className="text-2xl md:text-3xl font-bold text-white">
                            Ingin Bergabung dengan Partner Kami?
                        </h3>
                        <p className="text-blue-100 text-lg">
                            Mari bersama-sama menciptakan solusi digital yang luar biasa untuk bisnis Anda
                        </p>
                        <a
                            href="#contact"
                            className="inline-flex items-center gap-3 px-8 py-4 bg-white text-blue-600 rounded-xl font-bold hover:bg-gray-50 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 group"
                        >
                            Hubungi Kami
                            <svg
                                className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"
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
        </section>
    );
};

export default PartnerSection;
