import React from 'react';
import { Send, Mail, Phone, MapPin } from 'lucide-react';

const ContactSection = () => {
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [showSuccess, setShowSuccess] = React.useState(false);
  const [errorMessage, setErrorMessage] = React.useState('');

  const getCsrfToken = () => {
    const token = document.querySelector('meta[name="csrf-token"]');

    return token ? token.getAttribute('content') : '';
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsSubmitting(true);
    setShowSuccess(false);
    setErrorMessage('');

    try {
      const response = await fetch('/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'X-CSRF-TOKEN': getCsrfToken(),
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json().catch(() => null);

    if (!response.ok) {
      console.error('Contact submit error:', {
        status: response.status,
        data,
      });

      throw new Error(
        data?.message ||
        data?.error ||
        `Pesan gagal dikirim. Status error: ${response.status}`
      );
    }

      setShowSuccess(true);
      setFormData({
        name: '',
        email: '',
        message: '',
      });

      setTimeout(() => {
        setShowSuccess(false);
      }, 5000);
    } catch (error) {
      console.error(error);
      setErrorMessage(error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  return (
    <section id="contact" className="relative bg-gradient-to-br from-slate-50 via-gray-50 to-slate-100 py-12 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03]">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M 20 0 L 0 0 0 20" fill="none" stroke="currentColor" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" className="text-slate-900" />
        </svg>
      </div>

      <div className="absolute top-0 right-0 w-48 h-48 sm:w-96 sm:h-96 bg-gradient-to-br from-slate-200/30 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-48 h-48 sm:w-96 sm:h-96 bg-gradient-to-tr from-gray-200/30 to-transparent rounded-full blur-3xl"></div>

      <div className="container mx-auto px-2 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-8 sm:mb-16 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 py-1.5 sm:px-4 sm:py-2 bg-slate-900 rounded-full mb-3 sm:mb-6">
            <Send className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
            <span className="text-white font-semibold text-[10px] sm:text-sm tracking-wide">
              GET IN TOUCH
            </span>
          </div>

          <h2 className="text-2xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-2 sm:mb-6 tracking-tight">
            Let's Start Your Project
          </h2>

          <p className="text-xs sm:text-lg text-slate-600 leading-relaxed px-4">
            Ready to transform your ideas into reality? Drop us a message.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-4 sm:gap-8">
            <div className="lg:col-span-2">
              {showSuccess && (
                <div className="mb-4 sm:mb-6 bg-emerald-50 border border-emerald-200 text-emerald-800 px-4 py-3 sm:px-6 sm:py-4 rounded-xl flex items-start gap-2 sm:gap-3">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 bg-emerald-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-xs sm:text-sm font-bold">✓</span>
                  </div>

                  <div>
                    <strong className="font-semibold block mb-0.5 sm:mb-1 text-xs sm:text-base">
                      Message sent successfully!
                    </strong>
                    <span className="text-[10px] sm:text-sm text-emerald-700">
                      We'll get back to you within 24 hours.
                    </span>
                  </div>
                </div>
              )}

              {errorMessage && (
                <div className="mb-4 sm:mb-6 bg-red-50 border border-red-200 text-red-700 px-4 py-3 sm:px-6 sm:py-4 rounded-xl text-xs sm:text-sm font-semibold">
                  {errorMessage}
                </div>
              )}

              <form
                onSubmit={handleSubmit}
                className="bg-white rounded-xl sm:rounded-2xl shadow-lg border border-slate-200 p-5 sm:p-10"
              >
                <div className="space-y-4 sm:space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                    <div>
                      <label htmlFor="name" className="block text-[10px] sm:text-sm font-semibold text-slate-700 mb-1 sm:mb-2">
                        Full Name
                      </label>

                      <input
                        id="name"
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={(e) => handleChange('name', e.target.value)}
                        className="w-full px-3 py-2 sm:px-4 sm:py-3 bg-slate-50 border border-slate-200 rounded-lg text-slate-900 placeholder-slate-400 text-xs sm:text-base focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent transition-all"
                        placeholder="John Doe"
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-[10px] sm:text-sm font-semibold text-slate-700 mb-1 sm:mb-2">
                        Email Address
                      </label>

                      <input
                        id="email"
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={(e) => handleChange('email', e.target.value)}
                        className="w-full px-3 py-2 sm:px-4 sm:py-3 bg-slate-50 border border-slate-200 rounded-lg text-slate-900 placeholder-slate-400 text-xs sm:text-base focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent transition-all"
                        placeholder="john@example.com"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-[10px] sm:text-sm font-semibold text-slate-700 mb-1 sm:mb-2">
                      Your Message
                    </label>

                    <textarea
                      id="message"
                      name="message"
                      rows="4"
                      value={formData.message}
                      onChange={(e) => handleChange('message', e.target.value)}
                      className="w-full px-3 py-2 sm:px-4 sm:py-3 bg-slate-50 border border-slate-200 rounded-lg text-slate-900 placeholder-slate-400 text-xs sm:text-base focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent transition-all resize-none"
                      placeholder="Tell us about your project..."
                      required
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 sm:px-8 sm:py-4 bg-slate-900 text-white rounded-lg font-semibold text-xs sm:text-base hover:bg-slate-800 transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 sm:w-5 sm:h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send size={14} className="sm:w-[18px] sm:h-[18px]" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-1 gap-3 sm:gap-6 mt-4 lg:mt-0">
              <div className="bg-white rounded-xl shadow-sm sm:shadow-md border border-slate-200 p-4 sm:p-6 hover:shadow-lg transition-shadow">
                <div className="w-8 h-8 sm:w-12 sm:h-12 bg-slate-100 rounded-lg flex items-center justify-center mb-2 sm:mb-4">
                  <Mail className="w-4 h-4 sm:w-6 sm:h-6 text-slate-700" />
                </div>
                <h4 className="text-slate-900 font-semibold text-xs sm:text-base mb-1 sm:mb-2">
                  Email Us
                </h4>
                <p className="text-slate-600 text-[10px] sm:text-sm break-all">
                  kyysolutions17@gmail.com
                </p>
              </div>

              <div className="bg-white rounded-xl shadow-sm sm:shadow-md border border-slate-200 p-4 sm:p-6 hover:shadow-lg transition-shadow">
                <div className="w-8 h-8 sm:w-12 sm:h-12 bg-slate-100 rounded-lg flex items-center justify-center mb-2 sm:mb-4">
                  <Phone className="w-4 h-4 sm:w-6 sm:h-6 text-slate-700" />
                </div>
                <h4 className="text-slate-900 font-semibold text-xs sm:text-base mb-1 sm:mb-2">
                  Call Us
                </h4>
                <p className="text-slate-600 text-[10px] sm:text-sm">
                  +62 812-3291-6758
                </p>
              </div>

              <div className="bg-white rounded-xl shadow-sm sm:shadow-md border border-slate-200 p-4 sm:p-6 hover:shadow-lg transition-shadow">
                <div className="w-8 h-8 sm:w-12 sm:h-12 bg-slate-100 rounded-lg flex items-center justify-center mb-2 sm:mb-4">
                  <MapPin className="w-4 h-4 sm:w-6 sm:h-6 text-slate-700" />
                </div>
                <h4 className="text-slate-900 font-semibold text-xs sm:text-base mb-1 sm:mb-2">
                  Visit Us
                </h4>
                <p className="text-slate-600 text-[10px] sm:text-sm leading-relaxed">
                  Sumenep, Jawa Timur
                </p>
              </div>

              <div className="bg-slate-900 rounded-xl shadow-sm sm:shadow-md p-4 sm:p-6 text-white">
                <h4 className="font-semibold text-xs sm:text-base mb-1 sm:mb-2">
                  Business Hours
                </h4>
                <div className="space-y-0.5 sm:space-y-1 text-[10px] sm:text-sm text-slate-300">
                  <p>Mon-Fri: 9-18</p>
                  <p>Sat: 10-16</p>
                  <p>Sun: Closed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;