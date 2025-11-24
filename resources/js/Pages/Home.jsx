import React from 'react';
import { usePage, Head } from '@inertiajs/react';

// Import Komponen Modular
import AnimatedNavbar from '@/Components/Landing/Navbar';
import HeroSection from '@/Components/Landing/HeroSection';
import PartnerSection from '@/Components/Landing/PartnerSection';
import AboutSection from '@/Components/Landing/AboutSection';
import ServicesSection from '@/Components/Landing/ServicesSection';
import PortfolioSection from '@/Components/Landing/PortfolioSection';
import TeamSection from '@/Components/Landing/TeamSection';
import ContactSection from '@/Components/Landing/ContactSection';
import Footer from '@/Components/Landing/Footer';
import TawkWidget from '@/Components/Landing/TawkWidget'; // Import TawkWidget

export default function Home() {
  // Ambil props dari Inertia
  const { settings, hero, partners, about, services, portfolios, team } = usePage().props;

  // Loading state
  if (!settings || !hero) {
    return (
        <div className="min-h-screen bg-slate-900 flex justify-center items-center text-white">
            <div className="text-center">
                <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-blue-500 mx-auto"></div>
                <p className="mt-4 text-lg font-semibold">Memuat Data...</p>
            </div>
        </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Head title="Home" />

      {/* Global Styles & Animations */}
      <style>{`
        @keyframes float-complex { 0%, 100% { transform: translate(0, 0) rotate(0deg); opacity: 0.3; } 25% { transform: translate(30px, -30px) rotate(90deg); opacity: 0.6; } 50% { transform: translate(-20px, 20px) rotate(180deg); opacity: 0.4; } 75% { transform: translate(40px, 40px) rotate(270deg); opacity: 0.7; } }
        @keyframes float-slow { 0%, 100% { transform: translate(0, 0) scale(1); } 33% { transform: translate(-30px, -50px) scale(1.1); } 66% { transform: translate(30px, 30px) scale(0.95); } }
        @keyframes pulse-slow { 0%, 100% { opacity: 0.2; transform: scale(1); } 50% { opacity: 0.3; transform: scale(1.05); } }
        @keyframes pulse-glow { 0%, 100% { box-shadow: 0 0 20px rgba(59, 130, 246, 0.5); } 50% { box-shadow: 0 0 40px rgba(147, 51, 234, 0.8); } }
        @keyframes gradient-flow { 0% { background-position: 0% 50%; } 50% { background-position: 100% 50%; } 100% { background-position: 0% 50%; } }
        @keyframes shimmer { 0% { transform: translateX(-100%); } 100% { transform: translateX(100%); } }
        @keyframes gridMove { 0% { transform: translate(0, 0); } 100% { transform: translate(50px, 50px); } }
        @keyframes ping-slow { 0% { transform: scale(1); opacity: 1; } 75%, 100% { transform: scale(1.5); opacity: 0; } }
        @keyframes slideInLeft { from { opacity: 0; transform: translateX(-100px); } to { opacity: 1; transform: translateX(0); } }
        @keyframes slideInRight { from { opacity: 0; transform: translateY(100px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes slideInUp { from { opacity: 0; transform: translateY(100px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes slideInDown { from { opacity: 0; transform: translateY(-50px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes bounce { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-20px); } }
        @keyframes scroll { 0% { transform: translateY(0); opacity: 0; } 50% { opacity: 1; } 100% { transform: translateY(16px); opacity: 0; } }
        @keyframes expand-width { from { width: 0%; } to { width: 100%; } }

        .animate-float-complex { animation: float-complex 20s ease-in-out infinite; }
        .animate-float-slow { animation: float-slow 15s ease-in-out infinite; }
        .animate-pulse-slow { animation: pulse-slow 4s ease-in-out infinite; }
        .animate-pulse-glow { animation: pulse-glow 2s ease-in-out infinite; }
        .animate-gradient-flow { animation: gradient-flow 3s linear infinite; }
        .animate-shimmer { animation: shimmer 2s linear infinite; }
        .animate-ping-slow { animation: ping-slow 2s cubic-bezier(0, 0, 0.2, 1) infinite; }
        .animate-slideInLeft { animation: slideInLeft 0.8s ease-out forwards; }
        .animate-slideInRight { animation: slideInRight 0.8s ease-out forwards; }
        .animate-slideInUp { animation: slideInUp 0.8s ease-out forwards; }
        .animate-slideInDown { animation: slideInDown 0.5s ease-out forwards; }
        .animate-fadeIn { animation: fadeIn 0.8s ease-out forwards; }
        .animate-bounce { animation: bounce 2s ease-in-out infinite; }
        .animate-scroll { animation: scroll 2s ease-in-out infinite; }
        .animate-expand-width { animation: expand-width 1s ease-out forwards; }
        .animation-delay-500 { animation-delay: 0.5s; }

        html { scroll-behavior: smooth; }
        ::-webkit-scrollbar { width: 10px; }
        ::-webkit-scrollbar-track { background: #f1f1f1; }
        ::-webkit-scrollbar-thumb { background: linear-gradient(180deg, #3b82f6, #8b5cf6); border-radius: 10px; }
        ::-webkit-scrollbar-thumb:hover { background: linear-gradient(180deg, #2563eb, #7c3aed); }
        .prose p { margin-bottom: 1rem; }
        .backdrop-blur-xl { backdrop-filter: blur(20px); }
        .backdrop-blur-2xl { backdrop-filter: blur(40px); }
        .bg-clip-text { -webkit-background-clip: text; background-clip: text; color: transparent; }
        img[src$=""] { background: linear-gradient(135deg, #e0e0e0, #c7c7c7); display: flex; align-items: center; justify-content: center; color: #888; text-align:center; font-size: 12px; }
        img[src$=""]::after { content: 'Gambar tidak tersedia'; }
      `}</style>

      {/* === Sections === */}
      <AnimatedNavbar settings={settings} />

      <main>
        <HeroSection hero={hero} />

        {/* Partner Section */}
        <PartnerSection partners={partners} />

        {about && <AboutSection about={about} />}
        {services && <ServicesSection services={services} />}
        {portfolios && <PortfolioSection portfolios={portfolios} />}
        {team && <TeamSection team={team} />}
        <ContactSection />
      </main>

      <Footer settings={settings} />

      {/* Tawk.to Widget akan otomatis muncul jika ID sudah diisi di Admin Panel -> Settings */}
      <TawkWidget settings={settings} />
    </div>
  );
}
