import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';

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
    // PERUBAHAN UTAMA DI SINI:
    // 1. h-auto: Tinggi otomatis mengikuti konten di HP.
    // 2. lg:min-h-screen: Tetap full screen di Desktop/Laptop.
    // 3. pt-24 pb-12: Padding atas/bawah khusus HP agar tidak terlalu mepet header/bawah.
    <section id="home" className="relative h-auto lg:min-h-screen flex items-center overflow-hidden pt-24 pb-12 lg:pt-20 lg:pb-0">
      {/* 1. BACKGROUND UTAMA (Full Screen) */}
      <div className="absolute inset-0 z-0">
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
        <div className="absolute -bottom-1 left-0 right-0 h-16 lg:h-32">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
          </svg>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-4 lg:py-20">
        <div className="max-w-7xl mx-auto">

          {/* PERUBAHAN EKSTREM UNTUK HP:
             - grid-cols-2 (Wajib 2 kolom)
             - gap-2 (Jarak sangat rapat di HP agar muat)
             - items-center (Tengah secara vertikal)
          */}
          <div className="grid grid-cols-2 gap-2 md:gap-8 lg:gap-16 items-center">

            {/* KONTEN KIRI (Teks & Tombol) */}
            <div
              className={`space-y-3 md:space-y-6 lg:space-y-8 transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
              }`}
            >
              {/* Badge Kecil */}
              <div className="inline-flex items-center gap-1.5 px-2 py-1 lg:px-4 lg:py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full">
                <div className="w-1.5 h-1.5 lg:w-2 lg:h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-[10px] md:text-sm font-semibold text-white truncate">Build For Business</span>
              </div>

              {/* Headline Utama - Ukuran font sangat responsif */}
              <div className="space-y-2 md:space-y-6">
                <h1 className="text-xl sm:text-4xl lg:text-6xl xl:text-7xl font-black tracking-tight leading-[1.1]">
                  <span className="text-white block mb-0.5 lg:mb-2">
                    {hero.headline ? hero.headline.split('It Solution')[0] : 'Get Our Business'}
                  </span>
                  <span className="text-white block">
                    This It Solution
                  </span>
                </h1>

                {/* Paragraf - Line clamp agar tidak terlalu panjang di HP */}
                <p className="text-[10px] sm:text-base lg:text-xl text-blue-50 leading-relaxed max-w-xl line-clamp-3 md:line-clamp-none">
                  {hero.subheadline || 'Completely integrated digital platform process architecture at scale across streamlines business empowerment.'}
                </p>
              </div>

              {/* Tombol CTA - Lebih kecil & Flex Column di HP sangat kecil */}
              <div className="flex flex-col sm:flex-row flex-wrap items-start sm:items-center gap-2 md:gap-4">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center gap-1 px-3 py-2 md:px-8 md:py-4 bg-white text-blue-700 text-[10px] md:text-base font-bold rounded-lg hover:bg-blue-50 transition-all duration-200 shadow-xl w-full sm:w-auto"
                >
                  <span>{hero.cta_text || 'Explore'}</span>
                  <ArrowRight className="w-3 h-3 md:w-5 md:h-5" />
                </a>
                <a
                  href="#portfolio"
                  className="inline-flex items-center justify-center gap-1 px-3 py-2 md:px-8 md:py-4 bg-white/10 backdrop-blur-md text-white text-[10px] md:text-base font-bold rounded-lg border border-white/30 hover:bg-white/20 transition-all duration-200 w-full sm:w-auto"
                >
                  <span>Contact</span>
                  <ArrowRight className="w-3 h-3 md:w-5 md:h-5" />
                </a>
              </div>

              {/* Statistik - Disembunyikan total di HP agar layout bersih */}
              <div className="hidden md:flex flex-wrap items-center gap-8 pt-4">
                <div className="flex items-center gap-3">
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="w-8 h-8 lg:w-10 lg:h-10 rounded-full border-2 border-blue-700 bg-gradient-to-br from-blue-400 to-blue-600"></div>
                    ))}
                  </div>
                  <div>
                    <div className="text-lg lg:text-2xl font-bold text-white">500+</div>
                    <div className="text-sm text-blue-100">Happy Clients</div>
                  </div>
                </div>
              </div>
            </div>

            {/* KONTEN KANAN (Gambar) */}
            <div
              className={`relative transition-all duration-1000 delay-300 z-10 ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
              }`}
            >
              <div className="relative w-full flex justify-end">

                {/* GAMBAR KARAKTER
                    - w-[140%]: Diperbesar lebih dari container aslinya di HP
                    - -mr-6: Digeser ke kanan keluar layar sedikit agar terlihat "immersive"
                */}
                <div
                  className="relative cursor-pointer w-[140%] sm:w-full -mr-6 sm:mr-0"
                  onMouseMove={handleMouseMove}
                  onMouseEnter={() => setIsHovering(true)}
                  onMouseLeave={handleMouseLeave}
                  style={{
                    transform: `perspective(1000px) rotateX(${mousePosition.y * 0.3}deg) rotateY(${mousePosition.x * 0.3}deg) scale(${isHovering ? 1.05 : 1})`,
                    transition: 'transform 0.3s ease-out'
                  }}
                >
                  {hero.hero_image ? (
                    <img
                      src={`/storage/${hero.hero_image}`}
                      alt="Hero Preview"
                      className="w-full h-auto object-contain drop-shadow-2xl"
                      style={{
                        filter: `drop-shadow(0 5px 10px rgba(0, 0, 0, 0.3)) ${isHovering ? 'drop-shadow(0 0 40px rgba(59, 130, 246, 0.5))' : ''}`,
                        transform: `translateY(${isHovering ? -10 : 0}px)`,
                        transition: 'all 0.5s ease-out'
                      }}
                    />
                  ) : (
                    <div className="w-full aspect-square flex items-center justify-center bg-white/5 rounded-full backdrop-blur-sm">
                      <div className="text-center">
                        <div className="text-4xl lg:text-8xl mb-2 lg:mb-4">🤖</div>
                        <span className="text-white/70 text-xs lg:text-lg font-medium">Hero Image</span>
                      </div>
                    </div>
                  )}
                </div>

                {/* Hiasan Lingkaran Bawah */}
                <div
                  className="absolute -bottom-4 -right-4 lg:-bottom-8 lg:-right-8 w-16 h-16 lg:w-40 lg:h-40 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full opacity-20 blur-2xl pointer-events-none"
                />
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfessionalHero;
