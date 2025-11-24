import React from 'react';
import { useForm, usePage } from '@inertiajs/react';
import { Send } from 'lucide-react';
import { FloatingParticles, GridBackground, GlowingOrbs } from './DesignComponents';

const ContactSection = () => {
  // 1. Ambil Flash Message dari Global Props (dikirim dari HomeController)
  const { flash } = usePage().props;

  // 2. Gunakan useForm dari Inertia untuk menangani state form & submit
  const { data, setData, post, processing, errors, reset, recentlySuccessful } = useForm({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    // 3. Kirim data ke route Laravel 'contact.store'
    // Pastikan Ziggy (@routes di blade) sudah aktif agar fungsi route() berjalan
    post(route('contact.store'), {
        preserveScroll: true, // Agar halaman tidak scroll ke atas setelah submit
        onSuccess: () => reset(), // Reset form jika sukses
    });
  };

  return (
    <section id="contact" className="py-24 sm:py-32 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 relative overflow-hidden">
        <FloatingParticles />
        <GridBackground />
        <GlowingOrbs />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-20 animate-fadeIn">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-xl rounded-full mb-6 border border-white/20">
                    <Send className="w-4 h-4 text-white" />
                    <span className="text-white font-bold text-sm">Get In Touch</span>
                </div>
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6">
                    Let's Start Your <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Project</span>
                </h2>
                <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
                    Ready to transform your ideas into reality? Drop us a message and let's create something amazing together!
                </p>
            </div>

            <div className="max-w-4xl mx-auto">
                {/* Notifikasi Sukses (Muncul jika recentlySuccessful true) */}
                {recentlySuccessful && (
                    <div className="mb-8 bg-gradient-to-r from-green-500 to-emerald-500 text-white px-8 py-5 rounded-3xl shadow-2xl animate-slideInDown flex items-center gap-4 border border-white/20">
                        <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center flex-shrink-0">
                            <span className="text-green-500 font-bold text-xl">✓</span>
                        </div>
                        <div>
                            <strong className="text-lg">Success!</strong>
                            <span className="block text-green-50">
                                {flash?.success || "Your message has been sent successfully. We'll get back to you soon!"}
                            </span>
                        </div>
                    </div>
                )}

                <form onSubmit={handleSubmit} className="bg-white/10 backdrop-blur-2xl rounded-3xl p-10 shadow-2xl border border-white/20 animate-slideInUp">
                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                        <div className="group">
                            <label htmlFor="name" className="text-sm font-bold text-white mb-3 flex items-center gap-2">
                                <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                                Your Name
                            </label>
                            <input
                                id="name"
                                type="text"
                                value={data.name}
                                // Menggunakan setData dari Inertia
                                onChange={e => setData('name', e.target.value)}
                                className="w-full px-5 py-4 bg-white/10 backdrop-blur-md border-2 border-white/20 rounded-2xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-300 group-hover:border-white/30"
                                placeholder="John Doe"
                                required
                            />
                            {errors.name && <div className="text-pink-300 text-sm mt-2 flex items-center gap-1"><span>⚠</span>{errors.name}</div>}
                        </div>
                        <div className="group">
                            <label htmlFor="email" className="text-sm font-bold text-white mb-3 flex items-center gap-2">
                                <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                                Email Address
                            </label>
                            <input
                                id="email"
                                type="email"
                                value={data.email}
                                onChange={e => setData('email', e.target.value)}
                                className="w-full px-5 py-4 bg-white/10 backdrop-blur-md border-2 border-white/20 rounded-2xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent transition-all duration-300 group-hover:border-white/30"
                                placeholder="john@example.com"
                                required
                            />
                            {errors.email && <div className="text-pink-300 text-sm mt-2 flex items-center gap-1"><span>⚠</span>{errors.email}</div>}
                        </div>
                    </div>
                    <div className="mb-8 group">
                        <label htmlFor="message" className="text-sm font-bold text-white mb-3 flex items-center gap-2">
                            <span className="w-2 h-2 bg-pink-400 rounded-full"></span>
                            Your Message
                        </label>
                        <textarea
                            id="message"
                            rows="6"
                            value={data.message}
                            onChange={e => setData('message', e.target.value)}
                            className="w-full px-5 py-4 bg-white/10 backdrop-blur-md border-2 border-white/20 rounded-2xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-transparent transition-all duration-300 resize-none group-hover:border-white/30"
                            placeholder="Tell us about your project and how we can help you..."
                            required
                        ></textarea>
                        {errors.message && <div className="text-pink-300 text-sm mt-2 flex items-center gap-1"><span>⚠</span>{errors.message}</div>}
                    </div>
                    <div className="text-center">
                        <button
                            type="submit"
                            disabled={processing} // Disable tombol saat loading
                            className="group relative inline-flex items-center gap-3 px-10 py-5 bg-white text-blue-900 rounded-2xl font-black shadow-2xl hover:shadow-white/30 transition-all duration-500 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed overflow-hidden"
                        >
                            <span className="relative z-10 flex items-center gap-3">
                                {processing ? 'Sending...' : 'Send Message'}
                                <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                            </span>
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            {!processing && (
                                <div className="absolute inset-0 animate-shimmer bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
                            )}
                        </button>
                    </div>
                </form>
                <div className="grid md:grid-cols-3 gap-6 mt-12">
                     <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20 text-center hover:bg-white/15 transition-all duration-300 animate-slideInUp" style={{animationDelay: '200ms'}}>
                        <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                            <span className="text-2xl">📧</span>
                        </div>
                        <h4 className="text-white font-bold mb-2">Email Us</h4>
                        <p className="text-blue-200 text-sm">kyysolutions17@gmail.com</p>
                    </div>
                     <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20 text-center hover:bg-white/15 transition-all duration-300 animate-slideInUp" style={{animationDelay: '300ms'}}>
                        <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                            <span className="text-2xl">📞</span>
                        </div>
                        <h4 className="text-white font-bold mb-2">Call Us</h4>
                        <p className="text-blue-200 text-sm">081232916758</p>
                    </div>
                     <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20 text-center hover:bg-white/15 transition-all duration-300 animate-slideInUp" style={{animationDelay: '400ms'}}>
                        <div className="w-14 h-14 bg-gradient-to-br from-pink-500 to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                            <span className="text-2xl">📍</span>
                        </div>
                        <h4 className="text-white font-bold mb-2">Visit Us</h4>
                        <p className="text-blue-200 text-sm">
Dsn Daleman Desa Poreh Kec. Lenteng Kab. Sumenep</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
};

export default ContactSection;
