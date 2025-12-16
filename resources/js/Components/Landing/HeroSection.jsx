import React, { useState, useEffect } from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';

const ProfessionalHero = ({ hero }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 20;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 20;
    setMousePosition({ x, y });
  };

  const handleMouseLeave = () => {
    setMousePosition({ x: 0, y: 0 });
    setIsHovering(false);
  };

  if (!hero) return null;

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* 1. BACKGROUND UTAMA (Full Screen) */}
      <div className="absolute inset-0">
        {hero.background_image ? (
          <>
            <img
              src={`/storage/${hero.background_image}`}
              alt="Hero Background"
              className="w-full h-full object-cover"
            />
            {/* Overlay Biru Transparan agar teks terbaca */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-900/90 via-blue-800/85 to-blue-900/90"></div>
          </>
        ) : (
          // Fallback jika tidak ada gambar background
          <div className="w-full h-full bg-gradient-to-br from-blue-700 via-blue-600 to-blue-800"></div>
        )}

        {/* Hiasan Lengkungan di Bawah */}
        <div className="absolute -bottom-1 left-0 right-0 h-32">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
          </svg>
        </div>
      </div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

            {/* KONTEN KIRI (Teks & Tombol) */}
            <div
              className={`space-y-8 transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
              }`}
            >
              {/* Badge Kecil */}
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-sm font-semibold text-white">Build For Your Business</span>
              </div>

              {/* Headline Utama */}
              <div className="space-y-6">
                <h1 className="text-5xl lg:text-6xl xl:text-7xl font-black tracking-tight leading-[1.1]">
                  <span className="text-white block mb-2">
                    {hero.headline ? hero.headline.split('It Solution')[0] : 'Get Our Business'}
                  </span>
                  <span className="text-white block">
                    This It Solution
                  </span>
                </h1>

                <p className="text-lg lg:text-xl text-blue-50 leading-relaxed max-w-xl">
                  {hero.subheadline || 'Completely integrated digital platform process architecture at scale across streamlines business empowerment for real-time scenarios'}
                </p>
              </div>

              {/* Tombol CTA */}
              <div className="flex flex-wrap items-center gap-4">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-700 text-base font-bold rounded-lg hover:bg-blue-50 transition-all duration-200 shadow-xl hover:shadow-2xl hover:scale-105"
                >
                  <span>{hero.cta_text || 'Explore More'}</span>
                  <ArrowRight className="w-5 h-5" />
                </a>
                <a
                  href="#portfolio"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-md text-white text-base font-bold rounded-lg border-2 border-white/30 hover:bg-white/20 transition-all duration-200"
                >
                  <span>Contact Us</span>
                  <ArrowRight className="w-5 h-5" />
                </a>
              </div>

              {/* Statistik Kecil */}
              <div className="flex flex-wrap items-center gap-8 pt-4">
                <div className="flex items-center gap-3">
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="w-10 h-10 rounded-full border-2 border-blue-700 bg-gradient-to-br from-blue-400 to-blue-600"></div>
                    ))}
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-white">500+</div>
                    <div className="text-sm text-blue-100">Happy Clients</div>
                  </div>
                </div>
              </div>
            </div>

            {/* KONTEN KANAN (Gambar Langsung dengan Animasi Interaktif) */}
            <div
              className={`relative transition-all duration-1000 delay-300 ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
              }`}
            >
              <div className="relative">
                {/* Hiasan Lingkaran Belakang - Animasi Floating */}
                <div className="absolute -top-8 -right-8 w-32 h-32 bg-blue-500 rounded-full opacity-20 animate-pulse"></div>

                {/* GAMBAR KARAKTER LANGSUNG - Full Display Tanpa Kotak */}
                <div
                  className="relative cursor-pointer"
                  onMouseMove={handleMouseMove}
                  onMouseEnter={() => setIsHovering(true)}
                  onMouseLeave={handleMouseLeave}
                  style={{
                    transform: `perspective(1000px) rotateX(${mousePosition.y * 0.3}deg) rotateY(${mousePosition.x * 0.3}deg) scale(${isHovering ? 1.05 : 1})`,
                    transition: 'transform 0.3s ease-out'
                  }}
                >
                  {/* 2. LOGIKA GAMBAR SAMPING (Hero Image) - KARAKTER FULL TANPA BACKGROUND */}
                  {hero.hero_image ? (
                    // Jika Admin upload gambar, tampilkan gambar tersebut dengan efek drop shadow
                    <img
                      src={`/storage/${hero.hero_image}`}
                      alt="Hero Preview"
                      className="w-full h-auto object-contain drop-shadow-2xl"
                      style={{
                        filter: `drop-shadow(0 25px 50px rgba(0, 0, 0, 0.3)) ${isHovering ? 'drop-shadow(0 0 40px rgba(59, 130, 246, 0.5))' : ''}`,
                        transform: `translateY(${isHovering ? -10 : 0}px)`,
                        transition: 'all 0.5s ease-out'
                      }}
                    />
                  ) : (
                    // Jika TIDAK ada gambar upload, tampilkan placeholder karakter
                    <div className="w-full aspect-square flex items-center justify-center">
                      <div className="text-center">
                        <div className="text-8xl mb-4">🤖</div>
                        <span className="text-white/70 text-lg font-medium">Your Character Here</span>
                      </div>
                    </div>
                  )}

                  {/* Efek Glow Mengikuti Mouse */}
                  {isHovering && (
                    <div
                      className="absolute w-96 h-96 bg-blue-400 rounded-full opacity-20 blur-3xl pointer-events-none -z-10"
                      style={{
                        left: `${50 + mousePosition.x * 2}%`,
                        top: `${50 + mousePosition.y * 2}%`,
                        transform: 'translate(-50%, -50%)',
                        transition: 'all 0.3s ease-out'
                      }}
                    />
                  )}
                </div>

                {/* Kartu Melayang - Kiri Bawah - Animasi Bounce */}
                <div
                  className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-5 shadow-2xl max-w-xs hover:scale-110 transition-transform duration-300 cursor-pointer"
                  style={{
                    animation: 'bounce 3s ease-in-out infinite'
                  }}
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-gray-900">6,561+</div>
                      <div className="text-sm text-gray-600">Satisfied Clients</div>
                    </div>
                  </div>
                </div>

                {/* Hiasan Lingkaran Bawah - Animasi Pulse */}
                <div
                  className="absolute -bottom-8 -right-8 w-40 h-40 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full opacity-20 blur-2xl"
                  style={{
                    animation: 'pulse 4s ease-in-out infinite'
                  }}
                />
              </div>
            </div>

          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes bounce {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes pulse {
          0%, 100% {
            opacity: 0.2;
            transform: scale(1);
          }
          50% {
            opacity: 0.3;
            transform: scale(1.1);
          }
        }
      `}</style>
    </section>
  );
};

export default ProfessionalHero;
