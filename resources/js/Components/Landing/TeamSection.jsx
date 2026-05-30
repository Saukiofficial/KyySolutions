import React, { useState } from 'react';
import { Link } from '@inertiajs/react';
import { Linkedin, Twitter, Sparkles, ArrowRight, Facebook, Instagram } from 'lucide-react';

const TeamSection = ({ team }) => {
    const [hoveredId, setHoveredId] = useState(null);

    if (!team || team.length === 0) return null;

    const getImageUrl = (photo) => {
        if (!photo) return null;

        if (photo.startsWith('http://') || photo.startsWith('https://')) {
            return photo;
        }

        if (photo.startsWith('/storage/')) {
            return photo;
        }

        return `/storage/${photo}`;
    };

    const getTeamUrl = (slug) => {
        try {
            if (typeof route === 'function' && slug) {
                return route('team.show', slug);
            }
        } catch (e) {
            console.error('Route Error:', e);
        }

        return slug ? `/team/${slug}` : '#';
    };

    const getSocialMedia = (member) => {
        const social = member.social_media || {};

        return {
            facebook: social.facebook || member.facebook_url || null,
            instagram: social.instagram || member.instagram_url || null,
            linkedin: social.linkedin || member.linkedin_url || null,
            twitter: social['x-twitter'] || social.twitter || member.twitter_url || null,
        };
    };

    return (
        <section
            id="team"
            className="relative overflow-hidden bg-[#020817] py-12 text-white sm:py-24"
        >
            {/* Main Background */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(0,132,255,0.22),transparent_35%),radial-gradient(circle_at_12%_45%,rgba(0,88,255,0.16),transparent_32%),radial-gradient(circle_at_88%_55%,rgba(0,180,255,0.16),transparent_30%),linear-gradient(135deg,#020817_0%,#041126_48%,#020817_100%)]" />

            {/* Grid / Circuit Background */}
            <div className="absolute inset-0 opacity-[0.18] bg-[linear-gradient(rgba(0,140,255,.45)_1px,transparent_1px),linear-gradient(90deg,rgba(0,140,255,.45)_1px,transparent_1px)] bg-[size:64px_64px]" />

            {/* Neon Lines */}
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-400/70 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-blue-500/60 to-transparent" />

            <div className="absolute left-10 top-16 hidden h-px w-64 bg-gradient-to-r from-transparent via-cyan-400/70 to-transparent md:block" />
            <div className="absolute right-10 top-16 hidden h-px w-64 bg-gradient-to-r from-transparent via-cyan-400/70 to-transparent md:block" />

            {/* Glow Objects */}
            <div className="absolute -left-28 top-32 h-80 w-80 rounded-full bg-blue-500/15 blur-3xl" />
            <div className="absolute -right-28 bottom-32 h-96 w-96 rounded-full bg-cyan-400/10 blur-3xl" />

            {/* Futuristic top frame */}
            <div className="absolute left-1/2 top-8 hidden h-28 w-[420px] -translate-x-1/2 rounded-[2rem] border border-blue-400/25 md:block" />

            <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header Section */}
                <div className="mx-auto mb-12 max-w-4xl text-center sm:mb-20">
                    <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-400/50 bg-blue-500/10 px-5 py-2 text-[10px] font-bold uppercase tracking-widest text-blue-200 shadow-[0_0_25px_rgba(0,132,255,0.22)] backdrop-blur-md sm:text-xs">
                        <Sparkles className="h-3.5 w-3.5 text-cyan-300" />
                        Tim Kami
                    </div>

                    <h2 className="mb-4 text-4xl font-black leading-none tracking-[-0.055em] text-white drop-shadow-[0_0_20px_rgba(0,132,255,.35)] sm:text-6xl lg:text-7xl xl:text-8xl">
                        Meet Our Expert Team
                    </h2>

                    <p className="mx-auto max-w-2xl text-sm leading-relaxed text-slate-300 sm:text-lg">
                        Talented individuals committed to excellence and innovation
                    </p>
                </div>

                {/* Team Grid */}
                <div className="grid grid-cols-2 gap-3 sm:gap-6 md:grid-cols-4 lg:gap-8">
                    {team.map((member, index) => {
                        const photoUrl = getImageUrl(member.photo);
                        const isHovered = hoveredId === member.id;
                        const socialMedia = getSocialMedia(member);
                        const detailUrl = getTeamUrl(member.slug);

                        return (
                            <div
                                key={member.id}
                                className="group relative"
                                onMouseEnter={() => setHoveredId(member.id)}
                                onMouseLeave={() => setHoveredId(null)}
                                style={{
                                    animation: `fadeInUp 0.6s ease-out ${index * 0.1}s backwards`
                                }}
                            >
                                <div className="relative">
                                    {/* Neon Border Glow */}
                                    <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-blue-400/80 via-cyan-400/25 to-blue-700/80 opacity-70 blur-[1px] transition-all duration-500 group-hover:opacity-100 sm:rounded-3xl" />

                                    {/* Bottom Glow */}
                                    <div className="absolute inset-x-8 -bottom-3 h-6 rounded-full bg-blue-500/45 blur-xl opacity-60 transition-all duration-500 group-hover:opacity-100" />

                                    {/* Main Card */}
                                    <div
                                        className="relative overflow-hidden rounded-2xl border border-blue-400/35 bg-[#031024]/80 shadow-[0_0_35px_rgba(0,132,255,0.22)] backdrop-blur-xl transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-[0_0_65px_rgba(0,132,255,0.45)] sm:rounded-3xl"
                                        style={{
                                            transform: isHovered ? 'translateY(-8px)' : undefined
                                        }}
                                    >
                                        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/12 via-transparent to-cyan-400/10 opacity-70" />
                                        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,140,255,.18)_1px,transparent_1px),linear-gradient(90deg,rgba(0,140,255,.18)_1px,transparent_1px)] bg-[size:34px_34px] opacity-30" />

                                        {/* Photo Section */}
                                        <div className="relative z-10 p-3 pb-0 sm:p-5 sm:pb-0">
                                            {/* Decorative Corners */}
                                            <div className="absolute left-3 top-3 h-4 w-4 border-l-2 border-t-2 border-blue-200/80 sm:left-5 sm:top-5" />
                                            <div className="absolute right-3 top-3 h-4 w-4 border-r-2 border-t-2 border-blue-200/80 sm:right-5 sm:top-5" />

                                            <div className="relative mb-3 aspect-square sm:mb-5">
                                                {/* Image Glow Frame */}
                                                <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-blue-400/35 to-cyan-400/15 blur-md transition-all duration-500 group-hover:blur-lg sm:rounded-3xl" />

                                                <div className="relative h-full w-full overflow-hidden rounded-2xl border border-blue-300/35 bg-[#020817]/80 shadow-[inset_0_0_28px_rgba(0,132,255,.18)] sm:rounded-3xl">
                                                    <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#020817]/55 via-transparent to-transparent" />

                                                    {/* Inner Corners */}
                                                    <div className="absolute left-3 top-3 z-20 h-5 w-5 border-l-2 border-t-2 border-blue-100/85" />
                                                    <div className="absolute right-3 top-3 z-20 h-5 w-5 border-r-2 border-t-2 border-blue-100/85" />
                                                    <div className="absolute bottom-3 left-3 z-20 h-5 w-5 border-b-2 border-l-2 border-blue-100/65" />
                                                    <div className="absolute bottom-3 right-3 z-20 h-5 w-5 border-b-2 border-r-2 border-blue-100/65" />

                                                    {photoUrl ? (
                                                        <img
                                                            src={photoUrl}
                                                            alt={member.name}
                                                            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                                                        />
                                                    ) : (
                                                        <div className="flex h-full w-full items-center justify-center text-xs font-semibold text-slate-500">
                                                            No Photo
                                                        </div>
                                                    )}

                                                    {/* Hover Overlay */}
                                                    <div className="absolute inset-0 z-30 bg-gradient-to-t from-[#020817]/95 via-[#020817]/50 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                                                        <div className="absolute bottom-4 left-0 right-0 flex translate-y-4 justify-center gap-2 transition-transform duration-500 group-hover:translate-y-0 sm:gap-3">
                                                            {socialMedia.facebook && (
                                                                <a
                                                                    href={socialMedia.facebook}
                                                                    target="_blank"
                                                                    rel="noopener noreferrer"
                                                                    className="grid h-8 w-8 place-items-center rounded-xl border border-blue-300/35 bg-blue-500/15 text-cyan-100 shadow-[0_0_22px_rgba(0,132,255,.28)] backdrop-blur-xl transition-all duration-300 hover:border-cyan-300/70 hover:text-white sm:h-10 sm:w-10"
                                                                    onClick={(e) => e.stopPropagation()}
                                                                >
                                                                    <Facebook className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                                                                </a>
                                                            )}

                                                            {socialMedia.instagram && (
                                                                <a
                                                                    href={socialMedia.instagram}
                                                                    target="_blank"
                                                                    rel="noopener noreferrer"
                                                                    className="grid h-8 w-8 place-items-center rounded-xl border border-blue-300/35 bg-blue-500/15 text-cyan-100 shadow-[0_0_22px_rgba(0,132,255,.28)] backdrop-blur-xl transition-all duration-300 hover:border-cyan-300/70 hover:text-white sm:h-10 sm:w-10"
                                                                    onClick={(e) => e.stopPropagation()}
                                                                >
                                                                    <Instagram className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                                                                </a>
                                                            )}

                                                            {socialMedia.linkedin && (
                                                                <a
                                                                    href={socialMedia.linkedin}
                                                                    target="_blank"
                                                                    rel="noopener noreferrer"
                                                                    className="grid h-8 w-8 place-items-center rounded-xl border border-blue-300/35 bg-blue-500/15 text-cyan-100 shadow-[0_0_22px_rgba(0,132,255,.28)] backdrop-blur-xl transition-all duration-300 hover:border-cyan-300/70 hover:text-white sm:h-10 sm:w-10"
                                                                    onClick={(e) => e.stopPropagation()}
                                                                >
                                                                    <Linkedin className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                                                                </a>
                                                            )}

                                                            {socialMedia.twitter && (
                                                                <a
                                                                    href={socialMedia.twitter}
                                                                    target="_blank"
                                                                    rel="noopener noreferrer"
                                                                    className="grid h-8 w-8 place-items-center rounded-xl border border-blue-300/35 bg-blue-500/15 text-cyan-100 shadow-[0_0_22px_rgba(0,132,255,.28)] backdrop-blur-xl transition-all duration-300 hover:border-cyan-300/70 hover:text-white sm:h-10 sm:w-10"
                                                                    onClick={(e) => e.stopPropagation()}
                                                                >
                                                                    <Twitter className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                                                                </a>
                                                            )}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Bottom Decorative Corners */}
                                            <div className="absolute bottom-14 left-3 h-4 w-4 border-b-2 border-l-2 border-blue-200/60 sm:bottom-16 sm:left-5" />
                                            <div className="absolute bottom-14 right-3 h-4 w-4 border-b-2 border-r-2 border-blue-200/60 sm:bottom-16 sm:right-5" />
                                        </div>

                                        {/* Info Section */}
                                        <div className="relative z-10 px-3 pb-4 text-center sm:px-5 sm:pb-6">
                                            <h3 className="mb-1 line-clamp-1 text-sm font-black uppercase leading-tight tracking-[-0.035em] text-white transition-colors duration-300 group-hover:text-cyan-100 sm:mb-2 sm:text-xl lg:text-2xl">
                                                {member.name}
                                            </h3>

                                            <p className="mb-3 line-clamp-1 text-[10px] font-semibold text-cyan-300 sm:mb-4 sm:text-sm">
                                                {member.role}
                                            </p>

                                            {/* Detail Button */}
                                            <Link
                                                href={detailUrl}
                                                className={`mb-4 inline-flex items-center justify-center gap-1.5 rounded-full border px-3 py-2 text-[9px] font-bold text-cyan-100 shadow-[0_0_18px_rgba(0,132,255,.18)] backdrop-blur-xl transition-all duration-300 sm:px-4 sm:text-xs ${
                                                    member.slug
                                                        ? 'border-blue-400/35 bg-blue-500/10 hover:border-cyan-300/70 hover:bg-blue-500/20 hover:text-white'
                                                        : 'pointer-events-none border-slate-700/50 bg-slate-800/40 text-slate-500'
                                                }`}
                                            >
                                                Lihat Detail
                                                <ArrowRight className="h-3 w-3 transition-transform duration-300 group-hover:translate-x-1" />
                                            </Link>

                                            {/* Tech Indicator */}
                                            <div className="mx-auto flex max-w-[170px] gap-2">
                                                <div className="h-1 flex-1 overflow-hidden rounded-full bg-white/15">
                                                    <div className="h-full w-[72%] rounded-full bg-gradient-to-r from-cyan-300 to-blue-500 shadow-[0_0_12px_rgba(0,170,255,.9)]" />
                                                </div>

                                                <div className="h-1 flex-1 overflow-hidden rounded-full bg-white/15">
                                                    <div className="h-full w-[55%] rounded-full bg-blue-300/45" />
                                                </div>

                                                <div className="h-1 flex-1 overflow-hidden rounded-full bg-white/15">
                                                    <div className="h-full w-[78%] rounded-full bg-blue-300/35" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
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