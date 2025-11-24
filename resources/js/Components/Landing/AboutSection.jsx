import React, { useState, useEffect } from 'react';
import { Sparkles, Zap } from 'lucide-react';

const AboutSection = ({ about }) => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        const handleMouseMove = (e) => {
            if (isHovered) {
                const imageContainer = document.getElementById('about-image-container');
                if (imageContainer) {
                    const rect = imageContainer.getBoundingClientRect();
                    setMousePosition({
                        x: ((e.clientX - rect.left) / rect.width - 0.5) * 20,
                        y: ((e.clientY - rect.top) / rect.height - 0.5) * 20
                    });
                }
            }
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, [isHovered]);

    if (!about) return null;

    return (
        <section id="about" className="py-24 sm:py-32 bg-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-blue-50 to-transparent opacity-50"></div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div className="space-y-8 animate-slideInLeft">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full">
                            <Sparkles className="w-4 h-4 text-blue-600" />
                            <span className="text-blue-600 font-bold text-sm">About Us</span>
                        </div>

                        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 leading-tight relative inline-block pb-4">
                            {about.title}
                            <div className="absolute bottom-0 left-0 h-1.5 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-full animate-expand-width"></div>
                        </h2>

                        <div
                            className="text-lg text-gray-600 leading-relaxed space-y-4 prose prose-lg"
                            dangerouslySetInnerHTML={{ __html: about.description }}
                        />

                        <div className="grid grid-cols-2 gap-4 pt-4">
                            <div className="group p-6 bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl border border-blue-100 transition-all duration-500 hover:shadow-xl hover:-translate-y-2 hover:border-blue-300 cursor-pointer">
                                <div className="text-4xl font-black bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">10+</div>
                                <div className="text-sm text-gray-600 font-semibold">Years Experience</div>
                                <div className="mt-2 h-1 w-0 group-hover:w-full bg-gradient-to-r from-blue-600 to-purple-600 rounded-full transition-all duration-500"></div>
                            </div>
                            <div className="group p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl border border-purple-100 transition-all duration-500 hover:shadow-xl hover:-translate-y-2 hover:border-purple-300 cursor-pointer">
                                <div className="text-4xl font-black bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">24/7</div>
                                <div className="text-sm text-gray-600 font-semibold">Support Available</div>
                                <div className="mt-2 h-1 w-0 group-hover:w-full bg-gradient-to-r from-purple-600 to-pink-600 rounded-full transition-all duration-500"></div>
                            </div>
                        </div>
                    </div>

                    <div
                        id="about-image-container"
                        className="relative animate-slideInRight"
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                    >
                        <div className="relative group">
                            <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-3xl blur-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>

                            {/* FIX: Mengganti about.image menjadi about.illustration sesuai database */}
                            {about.illustration && (
                                <div
                                    className="relative transform transition-all duration-300 ease-out"
                                    style={{
                                        transform: isHovered
                                            ? `perspective(1000px) rotateY(${mousePosition.x}deg) rotateX(${-mousePosition.y}deg) scale(1.05)`
                                            : 'perspective(1000px) rotateY(0deg) rotateX(0deg) scale(1)'
                                    }}
                                >
                                    <img
                                        src={`/storage/${about.illustration}`}
                                        alt="About Us Illustration"
                                        className="relative rounded-3xl shadow-2xl w-full border-4 border-white"
                                    />
                                </div>
                            )}

                            {/* Floating Info Cards */}
                            <div className="absolute -top-8 -right-8 bg-white/90 backdrop-blur-xl rounded-2xl p-4 shadow-2xl border border-gray-200 animate-float-slow hover:scale-110 transition-transform duration-300 cursor-pointer">
                                <div className="flex items-center gap-3">
                                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                                        <Zap className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <div className="text-gray-900 font-bold text-sm">Fast Delivery</div>
                                        <div className="text-gray-600 text-xs">Quick turnaround</div>
                                    </div>
                                </div>
                            </div>

                            <div className="absolute -bottom-8 -left-8 bg-white/90 backdrop-blur-xl rounded-2xl p-4 shadow-2xl border border-gray-200 animate-float-slow hover:scale-110 transition-transform duration-300 cursor-pointer" style={{animationDelay: '1s'}}>
                                <div className="flex items-center gap-3">
                                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center flex-shrink-0">
                                        <Sparkles className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <div className="text-gray-900 font-bold text-sm">Top Quality</div>
                                        <div className="text-gray-600 text-xs">Premium results</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
