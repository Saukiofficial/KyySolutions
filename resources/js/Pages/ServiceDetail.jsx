import React from 'react';
import { Head, Link } from '@inertiajs/react';
import { Code, Smartphone, Palette, Gamepad2, ArrowLeft, Zap, CheckCircle, Layers, Globe } from 'lucide-react';
import AnimatedNavbar from '@/Components/Landing/Navbar';
import Footer from '@/Components/Landing/Footer';

const iconMap = {
    Code: <Code size={64} className="text-white" />,
    Smartphone: <Smartphone size={64} className="text-white" />,
    Palette: <Palette size={64} className="text-white" />,
    Gamepad2: <Gamepad2 size={64} className="text-white" />,
};

const GridBackground = () => (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-5">
      <div className="absolute inset-0" style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px)`,
        backgroundSize: '50px 50px',
      }} />
    </div>
);

export default function ServiceDetail({ service, settings }) {
    if (!service) return null;

    // Data dari Database (dengan Fallback Default jika kosong)
    const colorTheme = service.color || "from-blue-600 to-purple-600";
    const features = service.features || [];
    const benefits = service.benefits || [];
    const tagline = service.tagline || "Solusi Terbaik untuk Anda";

    return (
        <div className="min-h-screen bg-white">
            <Head title={service.title} />
            <AnimatedNavbar settings={settings} />

            <main className="pt-32 pb-20 relative overflow-hidden">
                <GridBackground />

                <div className={`absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l ${colorTheme} to-transparent opacity-10 -z-10`}></div>

                <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                    <div className="mb-8 animate-fadeIn">
                        <Link href="/" className="inline-flex items-center text-gray-500 hover:text-blue-600 transition-colors font-medium group">
                            <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                            Kembali ke Beranda
                        </Link>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-16 items-start">

                        <div className="relative animate-slideInLeft">
                            <div className={`aspect-square rounded-3xl bg-gradient-to-br ${colorTheme} flex items-center justify-center shadow-2xl relative overflow-hidden p-10`}>
                                <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-16 -mt-16"></div>
                                <div className="absolute bottom-0 left-0 w-48 h-48 bg-black/10 rounded-full blur-2xl -ml-10 -mb-10"></div>

                                <div className="relative z-10 transform hover:scale-110 transition-transform duration-500">
                                    {iconMap[service.icon] || <Code size={80} className="text-white" />}
                                </div>
                            </div>

                            <div className="absolute -bottom-6 -right-6 bg-white p-5 rounded-2xl shadow-xl border border-gray-100 items-center gap-4 animate-bounce hidden md:flex">
                                <div className={`bg-gradient-to-r ${colorTheme} p-3 rounded-xl text-white`}>
                                    <Zap className="w-6 h-6" />
                                </div>
                                <div>
                                    <p className="text-xs text-gray-500 font-semibold uppercase tracking-wider">Highlight</p>
                                    <p className="text-sm font-bold text-gray-800">{tagline}</p>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-8 animate-slideInRight">
                            <div>
                                <div className={`inline-block px-4 py-1.5 bg-gradient-to-r ${colorTheme} text-white rounded-full text-xs font-bold mb-4 tracking-wide uppercase shadow-md`}>
                                    Layanan Unggulan
                                </div>
                                <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-4 leading-tight">
                                    {service.title}
                                </h1>
                                <p className="text-xl text-gray-500 font-light leading-relaxed">
                                    {service.description}
                                </p>
                            </div>

                            {/* Fitur Spesifik (Loop dari Database) */}
                            {features.length > 0 && (
                                <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                                    <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                                        <Layers className="w-5 h-5 text-blue-600" />
                                        Fitur Utama
                                    </h3>
                                    <ul className="grid gap-3">
                                        {features.map((feature, i) => (
                                            <li key={i} className="flex items-start gap-3">
                                                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                                                <span className="text-gray-700 font-medium">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}

                            {/* Benefits Spesifik (Loop dari Database) */}
                            {benefits.length > 0 && (
                                <div>
                                    <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                                        <Globe className="w-5 h-5 text-blue-600" />
                                        Manfaat untuk Bisnis Anda
                                    </h3>
                                    <div className="space-y-4">
                                        {benefits.map((benefit, i) => (
                                            <div key={i} className="flex gap-4">
                                                <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${colorTheme} flex items-center justify-center text-white font-bold shadow-lg flex-shrink-0`}>
                                                    {i + 1}
                                                </div>
                                                <div>
                                                    <h4 className="font-bold text-gray-900">{benefit.title}</h4>
                                                    <p className="text-sm text-gray-600 leading-relaxed">{benefit.desc}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            <div className="pt-6 border-t border-gray-100">
                                <Link
                                    href="/#contact"
                                    className={`inline-flex w-full md:w-auto items-center justify-center px-8 py-4 bg-gradient-to-r ${colorTheme} text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group`}
                                >
                                    Mulai Proyek {service.title}
                                    <ArrowLeft className="w-5 h-5 ml-2 rotate-180 group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <Footer settings={settings} />
        </div>
    );
}
