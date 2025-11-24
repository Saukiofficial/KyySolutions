import React from 'react';
import { Sparkles } from 'lucide-react';

const TeamSection = ({ team }) => {
    if (!team || team.length === 0) return null;

    return (
        <section id="team" className="py-24 sm:py-32 bg-gradient-to-br from-gray-50 via-purple-50 to-pink-50 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float-slow" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float-slow" style={{animationDelay: '1.5s'}} />
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-20 animate-fadeIn">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-pink-100 to-purple-100 rounded-full mb-6">
                        <Sparkles className="w-4 h-4 text-pink-600" />
                        <span className="text-pink-600 font-bold text-sm">Our Team</span>
                    </div>
                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 mb-6">
                        Meet The <span className="bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">Experts</span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        Talented professionals dedicated to bringing your vision to life
                    </p>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {team.map((member, index) => (
                        <div
                            key={member.id}
                            className="group text-center animate-slideInUp"
                            style={{ animationDelay: `${index * 100}ms` }}
                        >
                            <div className="relative overflow-hidden rounded-3xl mb-5 shadow-2xl group-hover:shadow-3xl transition-all duration-700">
                                <div className="absolute -inset-2 bg-gradient-to-r from-pink-500 to-purple-500 opacity-0 group-hover:opacity-30 blur-2xl transition-opacity duration-500 -z-10"></div>
                                <img
                                    src={`/storage/${member.photo}`}
                                    alt={member.name}
                                    className="w-full aspect-square object-cover transform group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-purple-600/90 via-purple-600/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center pb-6">
                                    <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                        <div className="flex gap-3">
                                            <a href={member.linkedin_url || '#'} target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30 hover:bg-white/30 transition-colors cursor-pointer">
                                                <span className="text-white text-sm">in</span>
                                            </a>
                                            <a href={member.twitter_url || '#'} target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30 hover:bg-white/30 transition-colors cursor-pointer">
                                                <span className="text-white text-sm">tw</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="absolute inset-0 border-2 border-transparent group-hover:border-white/30 rounded-3xl transition-all duration-500"></div>
                            </div>
                            <h3 className="text-xl font-black text-gray-900 mb-2 group-hover:text-purple-600 transition-colors duration-300">
                                {member.name}
                            </h3>
                            <p className="text-gray-600 font-medium">
                                {member.role}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TeamSection;
