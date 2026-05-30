import React from 'react';
import { Head, Link } from '@inertiajs/react';
import {
    ArrowLeft,
    Mail,
    MapPin,
    Calendar,
    Code2,
    Wrench,
    Sparkles,
    ExternalLink,
    BriefcaseBusiness,
    User,
    Linkedin,
    Instagram,
    Facebook,
    Twitter,
    Github,
    Globe2,
    CheckCircle,
    Layers,
    Cpu,
    Eye
} from 'lucide-react';
import AnimatedNavbar from '@/Components/Landing/Navbar';
import Footer from '@/Components/Landing/Footer';

export default function TeamDetail({ member, settings }) {
    if (!member) return null;

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

    const normalizeUrl = (url) => {
        if (!url) return null;

        const cleanUrl = String(url).trim();

        if (!cleanUrl) return null;

        if (cleanUrl.startsWith('http://') || cleanUrl.startsWith('https://')) {
            return cleanUrl;
        }

        return `https://${cleanUrl}`;
    };

    const photoUrl = getImageUrl(member.photo);
    const socialMedia = member.social_media || {};

    const skills = Array.isArray(member.skills) ? member.skills : [];
    const programmingLanguages = Array.isArray(member.programming_languages)
        ? member.programming_languages
        : [];
    const tools = Array.isArray(member.tools) ? member.tools : [];
    const works = Array.isArray(member.works) ? member.works : [];

    return (
        <div className="min-h-screen bg-[#020817] font-sans text-white">
            <Head title={member.name} />

            <AnimatedNavbar settings={settings} />

            <main className="relative overflow-hidden">
                {/* Global Background */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(0,132,255,0.28),transparent_32%),radial-gradient(circle_at_90%_45%,rgba(0,180,255,0.20),transparent_34%),linear-gradient(135deg,#020817_0%,#031127_48%,#020817_100%)]" />
                <div className="absolute inset-0 opacity-[0.16] bg-[linear-gradient(rgba(0,140,255,.45)_1px,transparent_1px),linear-gradient(90deg,rgba(0,140,255,.45)_1px,transparent_1px)] bg-[size:64px_64px]" />
                <div className="absolute inset-0 bg-[linear-gradient(120deg,transparent_0%,transparent_42%,rgba(0,132,255,.10)_42%,rgba(0,132,255,.10)_44%,transparent_44%,transparent_100%)]" />

                <div className="absolute -right-40 top-24 h-[520px] w-[520px] rounded-full bg-blue-500/20 blur-3xl" />
                <div className="absolute -left-40 bottom-40 h-[420px] w-[420px] rounded-full bg-cyan-400/10 blur-3xl" />

                {/* HERO / POSTER SECTION */}
                <section className="relative z-10 px-4 pb-10 pt-28 sm:px-6 lg:px-8 lg:min-h-screen lg:pb-16 lg:pt-32">
                    <div className="container mx-auto max-w-7xl">
                        <div className="mb-6">
                            <Link
                                href="/#team"
                                className="group inline-flex items-center gap-2 rounded-full border border-blue-400/40 bg-blue-500/10 px-4 py-2 text-xs font-semibold text-blue-100 shadow-[0_0_25px_rgba(0,132,255,0.18)] backdrop-blur-xl transition-all duration-300 hover:border-cyan-300/70 hover:text-white sm:text-sm"
                            >
                                <ArrowLeft className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1" />
                                Kembali ke Team
                            </Link>
                        </div>

                        <div className="relative overflow-hidden rounded-[2rem] border border-blue-400/25 bg-[#020817]/70 shadow-[0_0_90px_rgba(0,132,255,.22)] backdrop-blur-xl lg:min-h-[760px]">
                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_40%,rgba(0,132,255,.28),transparent_32%),radial-gradient(circle_at_28%_20%,rgba(0,180,255,.16),transparent_35%),linear-gradient(135deg,#020817_0%,#06152c_45%,#020817_100%)]" />
                            <div className="absolute inset-0 opacity-[0.18] bg-[linear-gradient(rgba(0,140,255,.5)_1px,transparent_1px),linear-gradient(90deg,rgba(0,140,255,.5)_1px,transparent_1px)] bg-[size:58px_58px]" />

                            <div className="absolute -right-28 top-0 hidden h-full w-[58%] -skew-x-12 bg-gradient-to-br from-blue-600/35 via-cyan-500/18 to-transparent lg:block" />
                            <div className="absolute right-0 top-20 hidden h-[75%] w-[38%] -skew-x-12 border-l border-blue-300/20 bg-blue-500/10 lg:block" />

                            <div className="absolute left-6 top-6 h-px w-32 bg-gradient-to-r from-cyan-300 to-transparent" />
                            <div className="absolute right-6 top-6 h-px w-32 bg-gradient-to-l from-cyan-300 to-transparent" />
                            <div className="absolute left-6 bottom-6 h-px w-32 bg-gradient-to-r from-cyan-300 to-transparent" />
                            <div className="absolute right-6 bottom-6 h-px w-32 bg-gradient-to-l from-cyan-300 to-transparent" />

                            <div className="relative z-10 grid gap-8 p-5 sm:p-8 lg:grid-cols-12 lg:gap-10 lg:p-10">
                                <div className="order-2 lg:order-1 lg:col-span-7">
                                    <div className="mb-8 flex items-center justify-between">
                                        <div>
                                            <div className="text-3xl font-black italic tracking-[-0.08em] text-white sm:text-4xl">
                                                {member.name
                                                    ? member.name
                                                          .split(' ')
                                                          .map((word) => word[0])
                                                          .join('')
                                                          .slice(0, 2)
                                                          .toUpperCase()
                                                    : 'TM'}
                                            </div>
                                            <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.25em] text-slate-400">
                                                Code. Design. Impact.
                                            </p>
                                        </div>

                                        <div className="hidden rounded-2xl border border-blue-400/35 bg-blue-500/10 px-5 py-3 text-right backdrop-blur-xl sm:block">
                                            <p className="text-xs uppercase tracking-[0.3em] text-slate-400">
                                                Building
                                            </p>
                                            <p className="text-sm font-black uppercase text-cyan-300">
                                                Digital Futures
                                            </p>
                                        </div>
                                    </div>

                                    <div className="relative">
                                        <p className="mb-2 inline-flex items-center gap-2 rounded-full border border-blue-400/40 bg-blue-500/10 px-4 py-2 text-[10px] font-bold uppercase tracking-widest text-blue-200 shadow-[0_0_22px_rgba(0,132,255,.20)] backdrop-blur-xl sm:text-xs">
                                            <Sparkles className="h-3.5 w-3.5 text-cyan-300" />
                                            Personal Portfolio
                                        </p>

                                        <h1 className="text-[3.2rem] font-black uppercase italic leading-[0.82] tracking-[-0.09em] text-white drop-shadow-[0_0_24px_rgba(0,132,255,.45)] sm:text-[5.8rem] lg:text-[7.8rem] xl:text-[9rem]">
                                            {member.name?.split(' ')[0] || member.name}
                                        </h1>

                                        {member.name?.split(' ').length > 1 && (
                                            <h2 className="text-[3rem] font-black uppercase italic leading-[0.82] tracking-[-0.08em] text-transparent [-webkit-text-stroke:1px_rgba(255,255,255,.75)] sm:text-[5.6rem] lg:text-[7.4rem] xl:text-[8.6rem]">
                                                {member.name.split(' ').slice(1).join(' ')}
                                            </h2>
                                        )}

                                        <div className="mt-5 inline-flex flex-wrap items-center gap-3">
                                            <span className="text-xl font-black uppercase tracking-tight text-white sm:text-2xl">
                                                {member.role}
                                            </span>
                                            <span className="hidden h-2 w-20 rounded-full bg-gradient-to-r from-cyan-300 to-blue-600 sm:block" />
                                        </div>
                                    </div>

                                    <div className="mt-6 max-w-2xl">
                                        <div className="mb-3 text-5xl font-black leading-none text-cyan-400">
                                            “
                                        </div>

                                        <p className="whitespace-pre-line text-sm leading-relaxed text-slate-300 sm:text-base lg:text-lg">
                                            {member.bio ||
                                                'I build fast, responsive and user-focused digital experiences that make an impact.'}
                                        </p>
                                    </div>

                                    <div className="mt-8 grid gap-3 sm:grid-cols-3">
                                        <StatCard
                                            icon={<Code2 className="h-6 w-6" />}
                                            value={member.experience_years || '5+'}
                                            label="Years Experience"
                                        />

                                        <StatCard
                                            icon={<CheckCircle className="h-6 w-6" />}
                                            value={`${works.length || 0}+`}
                                            label="Projects Completed"
                                        />

                                        <StatCard
                                            icon={<User className="h-6 w-6" />}
                                            value="Client"
                                            label="Focused"
                                        />
                                    </div>
                                </div>

                                <div className="order-1 lg:order-2 lg:col-span-5">
                                    <div className="relative mx-auto max-w-md lg:max-w-none">
                                        <div className="absolute -inset-10 rounded-full bg-blue-500/25 blur-3xl" />

                                        <div className="relative overflow-hidden rounded-[2rem] border border-blue-300/25 bg-[#031024]/60 shadow-[0_0_70px_rgba(0,132,255,.30)] lg:border-none lg:bg-transparent lg:shadow-none">
                                            {photoUrl ? (
                                                <img
                                                    src={photoUrl}
                                                    alt={member.name}
                                                    className="h-[430px] w-full object-cover object-top sm:h-[560px] lg:h-[690px] lg:object-contain lg:object-bottom"
                                                />
                                            ) : (
                                                <div className="flex h-[430px] items-center justify-center text-slate-500 sm:h-[560px] lg:h-[690px]">
                                                    No Photo
                                                </div>
                                            )}

                                            <div className="absolute inset-0 bg-gradient-to-t from-[#020817] via-transparent to-transparent lg:hidden" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="relative z-20 px-5 pb-5 sm:px-8 sm:pb-8 lg:px-10">
                                <div className="mb-3 flex items-center gap-3">
                                    <h3 className="font-mono text-lg font-black uppercase tracking-widest text-cyan-300">
                                        What I Do
                                    </h3>
                                    <div className="h-1 w-24 rounded-full bg-gradient-to-r from-cyan-300 to-blue-600" />
                                </div>

                                <div className="grid gap-4 md:grid-cols-3">
                                    <ServiceMiniCard
                                        icon={<Code2 className="h-8 w-8" />}
                                        title={skills[0] || 'Web Development'}
                                        description="Building responsive, high-performance websites and web applications."
                                    />

                                    <ServiceMiniCard
                                        icon={<Layers className="h-8 w-8" />}
                                        title={skills[1] || 'UI/UX Design'}
                                        description="Designing clean, intuitive and engaging interfaces that users love."
                                    />

                                    <ServiceMiniCard
                                        icon={<Cpu className="h-8 w-8" />}
                                        title={skills[2] || 'Creative Solutions'}
                                        description="Turning ideas into powerful digital solutions with creativity and strategy."
                                    />
                                </div>
                            </div>

                            <div className="relative z-20 border-t border-blue-400/20 bg-[#020817]/80 px-5 py-5 sm:px-8 lg:px-10">
                                <div className="grid gap-5 lg:grid-cols-12 lg:items-center">
                                    <div className="lg:col-span-4">
                                        <div className="flex items-center gap-4 rounded-2xl border border-blue-400/25 bg-blue-500/10 p-4">
                                            <div className="grid h-16 w-16 flex-shrink-0 place-items-center rounded-xl border border-cyan-300/40 bg-cyan-400/10 text-xs font-black text-cyan-300">
                                                QR
                                            </div>
                                            <div>
                                                <p className="text-xs uppercase tracking-widest text-slate-400">
                                                    Let&apos;s Build
                                                </p>
                                                <p className="text-sm font-black uppercase text-cyan-300">
                                                    Something Great
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="space-y-3 lg:col-span-4">
                                        {member.email && (
                                            <a
                                                href={`mailto:${member.email}`}
                                                className="flex items-center gap-3 text-sm text-slate-300 transition hover:text-white"
                                            >
                                                <Mail className="h-4 w-4 text-cyan-300" />
                                                {member.email}
                                            </a>
                                        )}

                                        {member.location && (
                                            <div className="flex items-center gap-3 text-sm text-slate-300">
                                                <MapPin className="h-4 w-4 text-cyan-300" />
                                                {member.location}
                                            </div>
                                        )}

                                        {member.experience_years && (
                                            <div className="flex items-center gap-3 text-sm text-slate-300">
                                                <Calendar className="h-4 w-4 text-cyan-300" />
                                                {member.experience_years} Experience
                                            </div>
                                        )}
                                    </div>

                                    <div className="flex items-center gap-3 lg:col-span-4 lg:justify-end">
                                        {socialMedia.facebook && (
                                            <SocialIcon href={socialMedia.facebook} icon={<Facebook className="h-5 w-5" />} />
                                        )}

                                        {socialMedia.instagram && (
                                            <SocialIcon href={socialMedia.instagram} icon={<Instagram className="h-5 w-5" />} />
                                        )}

                                        {socialMedia.linkedin && (
                                            <SocialIcon href={socialMedia.linkedin} icon={<Linkedin className="h-5 w-5" />} />
                                        )}

                                        {socialMedia['x-twitter'] && (
                                            <SocialIcon href={socialMedia['x-twitter']} icon={<Twitter className="h-5 w-5" />} />
                                        )}

                                        {socialMedia.github && (
                                            <SocialIcon href={socialMedia.github} icon={<Github className="h-5 w-5" />} />
                                        )}

                                        {socialMedia.website && (
                                            <SocialIcon href={socialMedia.website} icon={<Globe2 className="h-5 w-5" />} />
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Skills Section */}
                <section className="relative z-20 px-4 py-16 sm:px-6 lg:px-8">
                    <div className="container mx-auto max-w-7xl">
                        <div className="grid gap-6 lg:grid-cols-3">
                            <InfoCard
                                icon={<User className="h-5 w-5" />}
                                title="Skills"
                                items={skills}
                                empty="Belum ada skill yang ditambahkan."
                            />

                            <InfoCard
                                icon={<Code2 className="h-5 w-5" />}
                                title="Bahasa Pemrograman"
                                items={programmingLanguages}
                                empty="Belum ada bahasa pemrograman yang ditambahkan."
                            />

                            <InfoCard
                                icon={<Wrench className="h-5 w-5" />}
                                title="Tools"
                                items={tools}
                                empty="Belum ada tools yang ditambahkan."
                            />
                        </div>
                    </div>
                </section>

                {/* Works Section */}
                <section className="relative z-20 border-y border-blue-400/15 bg-[#031024]/55 px-4 py-16 backdrop-blur-xl sm:px-6 lg:px-8">
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(0,140,255,.12)_1px,transparent_1px),linear-gradient(90deg,rgba(0,140,255,.12)_1px,transparent_1px)] bg-[size:42px_42px] opacity-30" />

                    <div className="container relative z-10 mx-auto max-w-7xl">
                        <div className="mb-10 text-center">
                            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-400/35 bg-blue-500/10 px-4 py-2 text-[10px] font-bold uppercase tracking-widest text-blue-200">
                                <BriefcaseBusiness className="h-3.5 w-3.5 text-cyan-300" />
                                Personal Works
                            </div>

                            <h2 className="text-3xl font-black tracking-[-0.04em] text-white sm:text-5xl">
                                Karya & Project
                            </h2>

                            <p className="mx-auto mt-3 max-w-2xl text-sm text-slate-400 sm:text-base">
                                Beberapa karya, project, atau pengalaman yang pernah dikerjakan.
                            </p>
                        </div>

                        {works.length > 0 ? (
                            <div className="mx-auto grid max-w-6xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
                                {works.map((work, index) => (
                                    <WorkCard
                                        key={index}
                                        work={work}
                                        index={index}
                                        getImageUrl={getImageUrl}
                                        normalizeUrl={normalizeUrl}
                                    />
                                ))}
                            </div>
                        ) : (
                            <div className="rounded-3xl border border-dashed border-blue-400/25 bg-blue-500/10 p-10 text-center text-slate-500">
                                Belum ada karya atau project yang ditambahkan.
                            </div>
                        )}
                    </div>
                </section>
            </main>

            <Footer settings={settings} />

            <style>{`
                @keyframes fadeInUp {
                    from {
                        opacity: 0;
                        transform: translateY(24px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
            `}</style>
        </div>
    );
}

const StatCard = ({ icon, value, label }) => {
    return (
        <div className="relative overflow-hidden rounded-2xl border border-blue-400/25 bg-[#020817]/70 p-4 shadow-[0_0_30px_rgba(0,132,255,.16)] backdrop-blur-xl">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/14 to-transparent" />

            <div className="relative z-10 flex items-center gap-4">
                <div className="grid h-12 w-12 place-items-center rounded-xl border border-blue-300/30 bg-blue-500/15 text-cyan-300">
                    {icon}
                </div>

                <div>
                    <p className="text-3xl font-black uppercase leading-none text-white">
                        {value}
                    </p>
                    <p className="mt-1 text-xs font-bold uppercase leading-tight text-slate-400">
                        {label}
                    </p>
                </div>
            </div>
        </div>
    );
};

const ServiceMiniCard = ({ icon, title, description }) => {
    return (
        <div className="relative overflow-hidden rounded-2xl border border-blue-400/25 bg-[#020817]/75 p-5 shadow-[0_0_35px_rgba(0,132,255,.16)] backdrop-blur-xl">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/14 via-transparent to-cyan-400/8" />

            <div className="relative z-10 flex gap-4">
                <div className="grid h-14 w-14 flex-shrink-0 place-items-center rounded-2xl border border-blue-300/30 bg-blue-500/15 text-cyan-300">
                    {icon}
                </div>

                <div>
                    <h4 className="text-lg font-black uppercase leading-tight text-white">
                        {title}
                    </h4>
                    <p className="mt-2 text-sm leading-relaxed text-slate-400">
                        {description}
                    </p>
                </div>
            </div>
        </div>
    );
};

const InfoCard = ({ icon, title, items, empty }) => {
    return (
        <div className="relative overflow-hidden rounded-3xl border border-blue-400/25 bg-white/[0.045] p-6 shadow-[0_0_45px_rgba(0,132,255,.15)] backdrop-blur-xl">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/12 via-transparent to-cyan-400/10" />

            <div className="relative z-10">
                <div className="mb-5 flex items-center gap-3">
                    <span className="grid h-11 w-11 place-items-center rounded-xl border border-blue-300/25 bg-blue-500/10 text-cyan-300 shadow-[0_0_22px_rgba(0,132,255,.34)]">
                        {icon}
                    </span>

                    <h3 className="text-xl font-black tracking-[-0.035em] text-white">
                        {title}
                    </h3>
                </div>

                {items && items.length > 0 ? (
                    <div className="flex flex-wrap gap-2">
                        {items.map((item, index) => (
                            <span
                                key={index}
                                className="rounded-xl border border-blue-400/25 bg-blue-500/10 px-4 py-2 text-sm font-medium text-cyan-100 shadow-[0_0_18px_rgba(0,132,255,.10)] backdrop-blur-xl"
                            >
                                {item}
                            </span>
                        ))}
                    </div>
                ) : (
                    <p className="text-sm italic text-slate-500">
                        {empty}
                    </p>
                )}
            </div>
        </div>
    );
};

const WorkCard = ({ work, index, getImageUrl, normalizeUrl }) => {
    const workImage = getImageUrl(work.image);
    const projectUrl = normalizeUrl(work.url);

    const CardContent = (
        <div
            className="group relative h-full overflow-hidden rounded-2xl border border-blue-400/25 bg-[#06152c]/70 shadow-[0_0_28px_rgba(0,132,255,.13)] backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:border-cyan-300/50 hover:shadow-[0_0_45px_rgba(0,132,255,.25)]"
            style={{
                animation: `fadeInUp 0.5s ease-out ${index * 0.08}s backwards`
            }}
        >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-cyan-400/8" />
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/60 to-transparent" />

            {workImage ? (
                <div className="relative z-10 h-36 overflow-hidden border-b border-blue-400/20 bg-[#020817]/70 sm:h-40 lg:h-36">
                    <img
                        src={workImage}
                        alt={work.title || 'Project Image'}
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-[#020817]/70 via-transparent to-transparent" />

                    {projectUrl && (
                        <div className="absolute inset-0 flex items-center justify-center bg-[#020817]/0 opacity-0 transition-all duration-300 group-hover:bg-[#020817]/45 group-hover:opacity-100">
                            <span className="inline-flex items-center gap-2 rounded-full border border-cyan-300/40 bg-blue-500/15 px-4 py-2 text-xs font-semibold text-cyan-100 shadow-[0_0_24px_rgba(0,132,255,.28)] backdrop-blur-xl">
                                <Eye size={14} />
                                Lihat Project
                            </span>
                        </div>
                    )}
                </div>
            ) : (
                <div className="relative z-10 flex h-36 items-center justify-center border-b border-blue-400/20 bg-blue-500/10 text-slate-500 sm:h-40 lg:h-36">
                    <BriefcaseBusiness className="h-10 w-10 text-cyan-300/50" />
                </div>
            )}

            <div className="relative z-10 p-4 sm:p-5">
                <div className="mb-3 flex items-center justify-between gap-3">
                    <div className="grid h-9 w-9 flex-shrink-0 place-items-center rounded-xl border border-blue-300/25 bg-blue-500/10 text-cyan-300 shadow-[0_0_18px_rgba(0,132,255,.25)]">
                        <BriefcaseBusiness className="h-4 w-4" />
                    </div>

                    <span className="rounded-full border border-blue-400/25 bg-blue-500/10 px-2.5 py-1 text-[9px] font-bold uppercase tracking-widest text-slate-400">
                        Project
                    </span>
                </div>

                <h3 className="mb-2 line-clamp-2 text-base font-black leading-tight text-white sm:text-lg">
                    {work.title || 'Untitled Project'}
                </h3>

                <p className="mb-4 line-clamp-2 text-xs leading-relaxed text-slate-400 sm:text-sm">
                    {work.description || 'Belum ada deskripsi project.'}
                </p>

                {projectUrl ? (
                    <span className="inline-flex items-center gap-2 text-xs font-bold text-cyan-300 transition group-hover:text-white sm:text-sm">
                        Lihat Project
                        <ExternalLink className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                    </span>
                ) : (
                    <span className="inline-flex items-center gap-2 text-xs font-semibold text-slate-500">
                        Link belum ditambahkan
                    </span>
                )}
            </div>
        </div>
    );

    if (projectUrl) {
        return (
            <a
                href={projectUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block h-full"
            >
                {CardContent}
            </a>
        );
    }

    return <div className="h-full">{CardContent}</div>;
};

const SocialIcon = ({ href, icon }) => {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="grid h-11 w-11 place-items-center rounded-xl border border-blue-300/35 bg-blue-500/15 text-cyan-100 shadow-[0_0_22px_rgba(0,132,255,.20)] backdrop-blur-xl transition hover:border-cyan-300/70 hover:text-white"
        >
            {icon}
        </a>
    );
};