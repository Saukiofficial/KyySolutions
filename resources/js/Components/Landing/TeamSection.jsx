import React, { useState } from 'react';
import { Linkedin, Twitter, Mail, MapPin } from 'lucide-react';

const TeamSection = ({ team }) => {
    const [hoveredId, setHoveredId] = useState(null);

    if (!team || team.length === 0) return null;

    return (
        <section id="team" className="py-12 sm:py-24 bg-gradient-to-br from-blue-50 via-white to-blue-100 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-30">
                <div className="absolute inset-0" style={{
                    backgroundImage: `radial-gradient(circle at 2px 2px, rgba(59,130,246,0.15) 1px, transparent 0)`,
                    backgroundSize: '40px 40px'
                }} />
            </div>

            {/* Geometric Shapes */}
            <div className="absolute top-20 left-10 w-20 h-20 border-2 border-blue-400/30 rotate-45" />
            <div className="absolute bottom-20 right-10 w-32 h-32 border-2 border-blue-500/30 rounded-full" />
            <div className="absolute top-1/2 right-20 w-16 h-16 bg-blue-400/10 rotate-12" />

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Header Section */}
                <div className="max-w-4xl mx-auto text-center mb-12 sm:mb-20">
                    <div className="inline-block mb-4 sm:mb-6">
                        <div className="flex items-center gap-3 px-5 py-2 bg-blue-600 backdrop-blur-sm border border-blue-700 rounded-lg shadow-lg">
                            <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
                            <span className="text-xs sm:text-sm font-medium text-white tracking-wider uppercase">The Team</span>
                        </div>
                    </div>
                    <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
                        Meet Our Expert Team
                    </h2>
                    <p className="text-sm sm:text-lg text-gray-700 leading-relaxed max-w-2xl mx-auto">
                        Talented individuals committed to excellence and innovation
                    </p>
                </div>

                {/* Team Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6 lg:gap-8">
                    {team.map((member, index) => (
                        <div
                            key={member.id}
                            className="group relative"
                            onMouseEnter={() => setHoveredId(member.id)}
                            onMouseLeave={() => setHoveredId(null)}
                            style={{
                                animation: `fadeInUp 0.6s ease-out ${index * 0.1}s backwards`
                            }}
                        >
                            {/* Card Container */}
                            <div className="relative">
                                {/* Background Card */}
                                <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl sm:rounded-3xl transform rotate-3 group-hover:rotate-6 transition-transform duration-500" />

                                {/* Main Card */}
                                <div className="relative bg-white backdrop-blur-sm rounded-2xl sm:rounded-3xl overflow-hidden border border-blue-200 shadow-xl group-hover:shadow-2xl group-hover:shadow-blue-200/50 transition-all duration-500">
                                    {/* Photo Section with Unique Frame */}
                                    <div className="relative p-3 sm:p-6 pb-0">
                                        {/* Decorative Corner Elements */}
                                        <div className="absolute top-3 left-3 sm:top-6 sm:left-6 w-3 h-3 sm:w-4 sm:h-4 border-t-2 border-l-2 border-blue-500" />
                                        <div className="absolute top-3 right-3 sm:top-6 sm:right-6 w-3 h-3 sm:w-4 sm:h-4 border-t-2 border-r-2 border-blue-600" />

                                        {/* Photo Container with Geometric Frame */}
                                        <div className="relative aspect-square mb-3 sm:mb-5">
                                            {/* Outer Frame */}
                                            <div className="absolute -inset-1 bg-gradient-to-br from-blue-400/30 to-blue-600/30 rounded-2xl sm:rounded-3xl blur-sm group-hover:blur-md transition-all duration-500" />

                                            {/* Inner Frame with Clip Path */}
                                            <div className="relative w-full h-full rounded-2xl sm:rounded-3xl overflow-hidden bg-blue-50">
                                                {/* Corner Cuts */}
                                                <div className="absolute top-0 right-0 w-4 h-4 sm:w-6 sm:h-6 bg-white" style={{clipPath: 'polygon(100% 0, 100% 100%, 0 0)'}} />
                                                <div className="absolute bottom-0 left-0 w-4 h-4 sm:w-6 sm:h-6 bg-white" style={{clipPath: 'polygon(0 100%, 100% 100%, 0 0)'}} />

                                                <img
                                                    src={`/storage/${member.photo}`}
                                                    alt={member.name}
                                                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                                                />

                                                {/* Overlay on Hover */}
                                                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/90 via-blue-800/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                                    {/* Social Links */}
                                                    <div className="absolute bottom-2 sm:bottom-4 left-0 right-0 flex justify-center gap-2 sm:gap-3 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                                        {member.linkedin_url && (
                                                            <a
                                                                href={member.linkedin_url}
                                                                target="_blank"
                                                                rel="noopener noreferrer"
                                                                className="w-7 h-7 sm:w-9 sm:h-9 bg-white/90 backdrop-blur-sm rounded-lg flex items-center justify-center border border-blue-200 hover:border-blue-500 hover:bg-white transition-all"
                                                                onClick={(e) => e.stopPropagation()}
                                                            >
                                                                <Linkedin className="w-3 h-3 sm:w-4 sm:h-4 text-blue-600" />
                                                            </a>
                                                        )}
                                                        {member.twitter_url && (
                                                            <a
                                                                href={member.twitter_url}
                                                                target="_blank"
                                                                rel="noopener noreferrer"
                                                                className="w-7 h-7 sm:w-9 sm:h-9 bg-white/90 backdrop-blur-sm rounded-lg flex items-center justify-center border border-blue-200 hover:border-blue-500 hover:bg-white transition-all"
                                                                onClick={(e) => e.stopPropagation()}
                                                            >
                                                                <Twitter className="w-3 h-3 sm:w-4 sm:h-4 text-blue-600" />
                                                            </a>
                                                        )}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Decorative Bottom Corner Elements */}
                                        <div className="absolute bottom-16 sm:bottom-20 left-3 sm:left-6 w-3 h-3 sm:w-4 sm:h-4 border-b-2 border-l-2 border-blue-600" />
                                        <div className="absolute bottom-16 sm:bottom-20 right-3 sm:right-6 w-3 h-3 sm:w-4 sm:h-4 border-b-2 border-r-2 border-blue-500" />
                                    </div>

                                    {/* Info Section */}
                                    <div className="px-3 sm:px-6 pb-4 sm:pb-6">
                                        <h3 className="text-sm sm:text-xl font-bold text-gray-900 mb-1 sm:mb-2 leading-tight">
                                            {member.name}
                                        </h3>
                                        <p className="text-[10px] sm:text-sm text-blue-600 font-medium mb-2 sm:mb-3">
                                            {member.role}
                                        </p>

                                        {/* Skill Bar Indicator */}
                                        <div className="flex gap-1 sm:gap-1.5">
                                            <div className="h-1 sm:h-1.5 flex-1 bg-blue-100 rounded-full overflow-hidden">
                                                <div className="h-full bg-gradient-to-r from-blue-500 to-blue-600 rounded-full" style={{width: '90%'}} />
                                            </div>
                                            <div className="h-1 sm:h-1.5 flex-1 bg-blue-100 rounded-full overflow-hidden">
                                                <div className="h-full bg-gradient-to-r from-blue-600 to-blue-700 rounded-full" style={{width: '85%'}} />
                                            </div>
                                            <div className="h-1 sm:h-1.5 flex-1 bg-blue-100 rounded-full overflow-hidden">
                                                <div className="h-full bg-gradient-to-r from-blue-400 to-blue-500 rounded-full" style={{width: '95%'}} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <style>{`
                @keyframes fadeInUp {
                    from {
                        opacity: 0;
                        transform: translateY(30px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
            `}</style>
        </section>
    );
};

export default TeamSection;
