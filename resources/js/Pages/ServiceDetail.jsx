import React from 'react';
import { Head, Link } from '@inertiajs/react';
import { Code, Smartphone, Palette, Gamepad2, ArrowLeft, CheckCircle, Zap } from 'lucide-react';
import AnimatedNavbar from '@/Components/Landing/Navbar';
import Footer from '@/Components/Landing/Footer';

// Helper untuk mapping icon (Sama seperti di ServicesSection)
const iconMap = {
    Code: <Code size={64} className="text-white" />,
    Smartphone: <Smartphone size={64} className="text-white" />,
    Palette: <Palette size={64} className="text-white" />,
    Gamepad2: <Gamepad2 size={64} className="text-white" />,
};

export default function ServiceDetail({ service, settings }) {
    if (!service) return null;

    // Menentukan warna tema berdasarkan icon/kategori (Opsional, untuk variasi visual)
    const getThemeColor = (icon) => {
        switch (icon) {
            case 'Smartphone': return 'from-purple-600 to-pink-600';
            case 'Palette': return 'from-pink-500 to-rose-500';
            case 'Gamepad2': return 'from-indigo-500 to-purple-500';
            default: return 'from-blue-600 to-cyan-500'; // Default Blue (Code)
        }
    };

    const themeGradient = getThemeColor(service.icon);

    return (
        <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
            <Head title={service.title} />

            {/* Navbar */}
            <AnimatedNavbar settings={settings} />

            <main>
                {/* === HERO SECTION === */}
                <div className={`relative pt-32 pb-32 lg:pb-40 overflow-hidden bg-gradient-to-br ${themeGradient}`}>
                    {/* Background Pattern */}
                    <div className="absolute inset-0 opacity-10"
                        style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '30px 30px' }}
                    />

                    <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                        {/* Breadcrumb / Back Button */}
                        <div className="mb-8">
                            <Link
                                href="/"
                                className="inline-flex items-center text-white/80 hover:text-white transition-colors font-medium group bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full"
                            >
                                <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                                Kembali ke Beranda
                            </Link>
                        </div>

                        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
                            {/* Icon Box */}
                            <div className="flex-shrink-0">
                                <div className="w-32 h-32 md:w-40 md:h-40 bg-white/20 backdrop-blur-md rounded-3xl flex items-center justify-center shadow-2xl border border-white/30 transform hover:scale-105 transition-transform duration-500">
                                    {iconMap[service.icon] || <Code size={64} className="text-white" />}
                                </div>
                            </div>

                            {/* Title & Tagline */}
                            <div className="text-center md:text-left text-white">
                                <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/20 backdrop-blur rounded-full text-xs font-bold uppercase tracking-wider mb-4 border border-white/20">
                                    <Zap size={14} className="fill-current" /> Premium Service
                                </div>
                                <h1 className="text-4xl md:text-6xl font-black mb-4 leading-tight">
                                    {service.title}
                                </h1>
                                <p className="text-blue-100 text-lg md:text-xl max-w-2xl font-light">
                                    Solusi profesional kami untuk membantu bisnis Anda tumbuh lebih cepat di era digital.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Decorative Curve Bottom */}
                    <div className="absolute bottom-0 left-0 right-0 h-16 bg-slate-50" style={{ clipPath: 'polygon(0 100%, 100% 100%, 100% 0, 0 100%)' }}></div>
                </div>

                {/* === CONTENT SECTION === */}
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-20 -mt-20">
                    <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-slate-100">
                        <div className="grid lg:grid-cols-3 gap-12">

                            {/* Left: Main Description */}
                            <div className="lg:col-span-2">
                                <h2 className="text-2xl font-bold mb-6 text-slate-900 flex items-center gap-3">
                                    <span className={`w-2 h-8 rounded-full bg-gradient-to-b ${themeGradient}`}></span>
                                    Deskripsi Layanan
                                </h2>
                                <div className="prose prose-lg prose-slate max-w-none text-slate-600 leading-relaxed whitespace-pre-line">
                                    {service.description}
                                </div>

                                {/* Placeholder Content (Bisa dihapus atau diganti data dinamis nanti) */}
                                <div className="mt-10 p-6 bg-slate-50 rounded-2xl border border-slate-200">
                                    <h3 className="font-bold text-lg mb-4 text-slate-800">Mengapa Memilih Layanan Ini?</h3>
                                    <ul className="space-y-3">
                                        {[
                                            'Tim ahli berpengalaman di bidangnya.',
                                            'Proses pengerjaan transparan dan terstruktur.',
                                            'Garansi kepuasan dan support teknis.',
                                            'Harga kompetitif dengan hasil kualitas tinggi.'
                                        ].map((item, idx) => (
                                            <li key={idx} className="flex items-start gap-3">
                                                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                                                <span className="text-slate-600">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            {/* Right: CTA Sidebar */}
                            <div className="lg:col-span-1">
                                <div className="sticky top-28 bg-white rounded-2xl shadow-lg border border-slate-100 p-6">
                                    <h3 className="text-xl font-bold mb-2">Tertarik dengan {service.title}?</h3>
                                    <p className="text-slate-500 mb-6 text-sm">Konsultasikan kebutuhan proyek Anda dengan tim kami sekarang.</p>

                                    <a
                                        href="/#contact"
                                        className={`block w-full py-4 rounded-xl text-white font-bold text-center transition-all hover:scale-105 hover:shadow-lg bg-gradient-to-r ${themeGradient}`}
                                    >
                                        Hubungi Kami
                                    </a>

                                    <div className="mt-6 pt-6 border-t border-slate-100 text-center">
                                        <p className="text-xs text-slate-400 mb-2">Atau hubungi via WhatsApp</p>
                                        <a href="#" className="text-slate-700 font-semibold hover:text-green-600 transition-colors flex items-center justify-center gap-2">
                                            <Smartphone size={18} /> +62 812 3291 6758
                                        </a>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                {/* === RELATED SERVICES (Placeholder) === */}
                <div className="py-20 container mx-auto px-4 text-center">
                    <Link href="/#services" className="inline-flex items-center gap-2 text-slate-500 hover:text-blue-600 font-medium transition-colors">
                        Lihat Layanan Lainnya <ArrowLeft className="rotate-180 w-4 h-4" />
                    </Link>
                </div>

            </main>

            <Footer settings={settings} />
        </div>
    );
}
