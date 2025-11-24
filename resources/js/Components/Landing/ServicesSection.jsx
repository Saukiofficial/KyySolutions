import React from 'react';
import { Link } from '@inertiajs/react'; // 1. Import Link
import { Zap, MoveRight, Code, Smartphone, Palette, Gamepad2 } from 'lucide-react';

// Helper untuk mapping icon string dari database ke komponen Lucide
const iconMap = {
    Code: <Code size={32} className="text-white" />,
    Smartphone: <Smartphone size={32} className="text-white" />,
    Palette: <Palette size={32} className="text-white" />,
    Gamepad2: <Gamepad2 size={32} className="text-white" />,
};

// 2. Tambahkan 'id' di props agar kita tahu service mana yang diklik
const ServiceCard = ({ id, icon, title, description, color, index }) => (
    <div
        className="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-700 overflow-hidden hover:-translate-y-3 border border-gray-100 hover:border-transparent animate-slideInUp h-full flex flex-col"
        style={{animationDelay: `${index * 100}ms`}}
    >
      <div className={`absolute inset-0 bg-gradient-to-br ${color} opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />
      <div className={`absolute -inset-1 bg-gradient-to-br ${color} opacity-0 group-hover:opacity-20 blur-xl transition-all duration-700`} />

      <div className="relative z-10 flex flex-col flex-grow">
        <div className={`w-20 h-20 bg-gradient-to-br ${color} rounded-3xl flex items-center justify-center mb-6 transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-700 shadow-lg`}>
          {iconMap[icon] || <Code size={36} className="text-white" />}
        </div>
        <h3 className="text-2xl font-black text-gray-900 mb-4 group-hover:text-white transition-colors duration-500">
          {title}
        </h3>
        <p className="text-gray-600 leading-relaxed group-hover:text-white/90 transition-colors duration-500 mb-6 line-clamp-3 flex-grow">
          {description}
        </p>

        {/* 3. Ubah div menjadi Link Inertia yang mengarah ke route service.show */}
        <Link
            href={route('service.show', id)}
            className="mt-auto inline-flex items-center gap-2 text-gray-400 group-hover:text-white transition-colors duration-500 font-semibold hover:underline cursor-pointer"
        >
          <span>Learn more</span>
          <MoveRight className="w-5 h-5 transform group-hover:translate-x-2 transition-transform duration-500" />
        </Link>
      </div>

      <div className="absolute top-0 right-0 w-32 h-32 opacity-10 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none">
        <div className={`absolute inset-0 bg-gradient-to-br ${color} transform rotate-45 translate-x-16 -translate-y-16 rounded-2xl`}></div>
      </div>
    </div>
);

const ServicesSection = ({ services }) => {
    if (!services || services.length === 0) return null;
    const serviceColors = [
        'from-blue-500 to-purple-600',
        'from-purple-500 to-pink-600',
        'from-pink-500 to-red-600',
        'from-indigo-500 to-blue-600'
    ];

    return (
        <section id="services" className="py-24 sm:py-32 bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 relative overflow-hidden">
            <div className="absolute top-20 left-20 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float-slow" />
            <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float-slow" style={{animationDelay: '2s'}} />
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-20 animate-fadeIn">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full mb-6">
                        <Zap className="w-4 h-4 text-blue-600" />
                        <span className="text-blue-600 font-bold text-sm">Our Services</span>
                    </div>
                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 mb-6">
                        What We <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Offer</span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        Comprehensive digital solutions tailored to transform your vision into reality
                    </p>
                </div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service, index) => (
                        <ServiceCard
                            key={service.id}
                            id={service.id} // Pastikan prop ID dikirim ke ServiceCard
                            icon={service.icon}
                            title={service.title}
                            description={service.description}
                            color={serviceColors[index % serviceColors.length]}
                            index={index}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;
