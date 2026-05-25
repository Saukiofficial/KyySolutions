import React, { useState, useEffect, useRef } from 'react';

/* ─────────────────────────────────────────────
   Custom hook: Typewriter
   Mengetik satu string, lalu berhenti + blink cursor
───────────────────────────────────────────── */
function useTypewriter(text = '', speed = 55, startDelay = 0) {
  const [displayed, setDisplayed] = useState('');
  const [done, setDone] = useState(false);

  useEffect(() => {
    setDisplayed('');
    setDone(false);

    let i = 0;
    let interval = null;

    const timeout = setTimeout(() => {
      interval = setInterval(() => {
        i++;
        setDisplayed(text.slice(0, i));

        if (i >= text.length) {
          clearInterval(interval);
          setDone(true);
        }
      }, speed);
    }, startDelay);

    return () => {
      clearTimeout(timeout);
      if (interval) clearInterval(interval);
    };
  }, [text, speed, startDelay]);

  return { displayed, done };
}

/* ─────────────────────────────────────────────
   Custom hook: Typewriter multi-line
   Setelah line pertama selesai, mulai line kedua
───────────────────────────────────────────── */
function useSequentialTypewriter(lines = [], speed = 55, startDelay = 0) {
  const [lineIndex, setLineIndex] = useState(0);
  const [displayed, setDisplayed] = useState(Array(lines.length).fill(''));
  const [allDone, setAllDone] = useState(false);

  useEffect(() => {
    setLineIndex(0);
    setDisplayed(Array(lines.length).fill(''));
    setAllDone(false);
  }, [lines.join('|')]);

  useEffect(() => {
    if (lineIndex >= lines.length) {
      setAllDone(true);
      return;
    }

    const text = lines[lineIndex] || '';
    let i = 0;
    let interval = null;
    const delay = lineIndex === 0 ? startDelay : 0;

    const timeout = setTimeout(() => {
      interval = setInterval(() => {
        i++;

        setDisplayed((prev) => {
          const next = [...prev];
          next[lineIndex] = text.slice(0, i);
          return next;
        });

        if (i >= text.length) {
          clearInterval(interval);
          setTimeout(() => setLineIndex((li) => li + 1), 200);
        }
      }, speed);
    }, delay);

    return () => {
      clearTimeout(timeout);
      if (interval) clearInterval(interval);
    };
  }, [lineIndex, lines.join('|')]);

  return { displayed, allDone, currentLine: lineIndex };
}

/* ─────────────────────────────────────────────
   AnimatedCounter — angka naik dari 0
───────────────────────────────────────────── */
function AnimatedCounter({ target, duration = 1500, suffix = '' }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const start = performance.now();

    const tick = (now) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);

      setCount(Math.floor(eased * target));

      if (progress < 1) {
        requestAnimationFrame(tick);
      } else {
        setCount(target);
      }
    };

    const id = requestAnimationFrame(tick);

    return () => cancelAnimationFrame(id);
  }, [target, duration]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
}

/* ─────────────────────────────────────────────
   GridBackground — dot grid animasi
───────────────────────────────────────────── */
const GridBackground = () => (
  <svg
    className="absolute inset-0 w-full h-full pointer-events-none"
    xmlns="http://www.w3.org/2000/svg"
    style={{ opacity: 0.18 }}
  >
    <defs>
      <pattern id="dotGrid" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
        <circle cx="1" cy="1" r="1" fill="#38bdf8" />
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#dotGrid)" />
  </svg>
);

/* ─────────────────────────────────────────────
   MAIN COMPONENT
───────────────────────────────────────────── */
const ProfessionalHero = ({ hero }) => {
  const [mounted, setMounted] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 100);
    return () => clearTimeout(t);
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

  /* ── Parsing headline ── */
  const rawHeadline = hero?.headline || 'Get Our Business It Solution';

  const headlineLines = rawHeadline.includes('It Solution')
    ? [rawHeadline.split('It Solution')[0].trim(), 'for Innovative IT Solutions']
    : [rawHeadline, 'for Innovative IT Solutions'];

  const subtext =
    hero?.subheadline ||
    'Completely integrated digital platform process architecture at scale across streamlines business empowerment.';

  /* ── Typing animations ── */
  const headline = useSequentialTypewriter(headlineLines, 48, 500);
  const sub = useTypewriter(subtext, 18, headline.allDone ? 300 : 99999);

  if (!hero) return null;

  return (
    <>
      {/* FONTS */}
      <link
        href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:wght@700;800;900&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap"
        rel="stylesheet"
      />

      <style>{`
        /* ── Cursor blink ── */
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }

        .cursor {
          display: inline-block;
          width: 2px;
          height: 1em;
          background: currentColor;
          vertical-align: text-bottom;
          animation: blink 0.9s step-end infinite;
          margin-left: 2px;
        }

        .cursor-wide {
          display: inline-block;
          width: 0.55em;
          height: 1.05em;
          background: #38bdf8;
          vertical-align: text-bottom;
          animation: blink 0.9s step-end infinite;
          margin-left: 3px;
          border-radius: 2px;
          opacity: 0.9;
        }

        /* ── Floating image ── */
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-14px); }
        }

        @keyframes haloSpin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(24px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes glowPulse {
          0%, 100% { opacity: .25; }
          50% { opacity: .55; }
        }

        @keyframes scanline {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100vh); }
        }

        .float-img {
          animation: float 4s ease-in-out infinite;
        }

        .halo-ring {
          animation: haloSpin 18s linear infinite;
        }

        .glow-blob {
          animation: glowPulse 3s ease-in-out infinite;
        }

        .fade-up {
          animation: fadeUp 0.7s ease both;
        }

        /* ── Scanline overlay ── */
        .scanline-wrap {
          pointer-events: none;
          overflow: hidden;
        }

        .scanline-wrap::after {
          content: '';
          position: absolute;
          inset: 0;
          background: repeating-linear-gradient(
            0deg,
            transparent,
            transparent 2px,
            rgba(0,0,0,0.03) 2px,
            rgba(0,0,0,0.03) 4px
          );
          z-index: 1;
        }

        /* ── Stat card ── */
        .stat-card {
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(56,189,248,0.2);
          backdrop-filter: blur(8px);
          transition: border-color 0.3s, background 0.3s;
        }

        .stat-card:hover {
          border-color: rgba(56,189,248,0.5);
          background: rgba(56,189,248,0.06);
        }
      `}</style>

      <section
        id="home"
        className="scanline-wrap relative h-auto lg:min-h-screen flex items-center overflow-hidden pt-24 pb-12 lg:pt-20 lg:pb-0"
        style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
      >
        {/* ── 1. BACKGROUND ── */}
        <div className="absolute inset-0 z-0">
          {hero.background_image ? (
            <img
              src={`/storage/${hero.background_image}`}
              alt="Hero Background"
              className="w-full h-full object-cover"
              style={{ filter: 'brightness(0.25) saturate(1.3)' }}
            />
          ) : (
            <div
              className="w-full h-full"
              style={{
                background:
                  'linear-gradient(135deg, #020c1b 0%, #031628 40%, #020f23 70%, #010a17 100%)',
              }}
            />
          )}

          {/* Dot grid */}
          <GridBackground />

          {/* Radial glow kiri */}
          <div
            className="absolute glow-blob"
            style={{
              width: '55vw',
              height: '55vw',
              top: '-15%',
              left: '-10%',
              background: 'radial-gradient(circle, rgba(56,189,248,0.13) 0%, transparent 70%)',
              filter: 'blur(30px)',
            }}
          />

          {/* Radial glow kanan */}
          <div
            className="absolute glow-blob"
            style={{
              width: '40vw',
              height: '40vw',
              bottom: '5%',
              right: '-5%',
              background: 'radial-gradient(circle, rgba(99,102,241,0.12) 0%, transparent 70%)',
              filter: 'blur(40px)',
              animationDelay: '1.5s',
            }}
          />

          {/* Wave bawah */}
          <div className="absolute -bottom-1 left-0 right-0 h-16 lg:h-32" style={{ zIndex: 2 }}>
            <svg
              viewBox="0 0 1440 120"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-full"
            >
              <path
                d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
                fill="white"
              />
            </svg>
          </div>
        </div>

        {/* ── 2. CONTENT ── */}
        <div
          className="container mx-auto px-4 sm:px-6 lg:px-8 relative py-4 lg:py-20"
          style={{ zIndex: 3 }}
        >
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 gap-2 md:gap-8 lg:gap-16 items-center">

              {/* ── LEFT: TEXT ── */}
              <div className="space-y-4 md:space-y-6 lg:space-y-8">

                {/* Headline dengan typing sekuensial */}
                <div className="space-y-1 md:space-y-2 lg:space-y-3 min-h-[3.5rem] md:min-h-[6rem] lg:min-h-[9rem]">
                  {headlineLines.map((line, idx) => {
                    const isActive = headline.currentLine === idx;
                    const showCursor = isActive && !headline.allDone;

                    return (
                      <h1
                        key={idx}
                        className="leading-[1.0] tracking-tight"
                        style={{
                          fontFamily: "'Bricolage Grotesque', sans-serif",
                          fontWeight: 900,
                          fontSize: 'clamp(1.25rem, 4.5vw, 4.5rem)',
                          color: idx === 0 ? '#ffffff' : '#38bdf8',
                          textShadow:
                            idx === 1
                              ? '0 0 40px rgba(56,189,248,0.45), 0 0 80px rgba(56,189,248,0.2)'
                              : 'none',
                          minHeight: '1.1em',
                        }}
                      >
                        {headline.displayed[idx] || ''}

                        {showCursor && (
                          <span
                            className="cursor-wide"
                            style={{ height: '0.85em', verticalAlign: 'middle' }}
                          />
                        )}

                        {idx === headlineLines.length - 1 && headline.allDone && (
                          <span
                            className="cursor-wide"
                            style={{ height: '0.85em', verticalAlign: 'middle' }}
                          />
                        )}
                      </h1>
                    );
                  })}
                </div>

                {/* Subheadline — muncul setelah headline selesai */}
                <p
                  className="text-[10px] sm:text-sm lg:text-lg leading-relaxed max-w-xl min-h-[2.5rem] md:min-h-[3.5rem]"
                  style={{
                    color: 'rgba(186,230,253,0.8)',
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    fontSize: 'clamp(0.6rem, 1.5vw, 1.05rem)',
                    fontWeight: 400,
                  }}
                >
                  {sub.displayed}
                  {headline.allDone && !sub.done && (
                    <span
                      className="cursor"
                      style={{ background: '#7dd3fc', height: '0.85em' }}
                    />
                  )}
                </p>

                {/* Stats */}
                <div
                  className="hidden md:flex flex-wrap items-center gap-4 pt-2 fade-up"
                  style={{
                    animationDelay: '0.5s',
                    opacity: headline.allDone ? 1 : 0,
                    transition: 'opacity 0.8s 0.4s',
                  }}
                >
                  {[
                    { value: 500, suffix: '+', label: 'Happy Clients' },
                    { value: 98, suffix: '%', label: 'Satisfaction Rate' },
                    { value: 12, suffix: 'y', label: 'Experience' },
                  ].map((s, i) => (
                    <div
                      key={i}
                      className="stat-card px-4 py-3 rounded-xl flex flex-col items-center min-w-[90px]"
                    >
                      <span
                        className="text-xl lg:text-2xl font-black text-cyan-300"
                        style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
                      >
                        {headline.allDone ? (
                          <AnimatedCounter target={s.value} suffix={s.suffix} duration={1200} />
                        ) : (
                          `0${s.suffix}`
                        )}
                      </span>

                      <span className="text-[10px] lg:text-xs text-blue-300 mt-0.5 whitespace-nowrap">
                        {s.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* ── RIGHT: IMAGE ── */}
              <div className="relative flex justify-end items-center">
                {/* Halo ring dekoratif */}
                <div
                  className="halo-ring absolute"
                  style={{
                    width: '90%',
                    height: '90%',
                    border: '1px dashed rgba(56,189,248,0.18)',
                    borderRadius: '50%',
                    top: '5%',
                    left: '5%',
                  }}
                />

                <div
                  className="halo-ring absolute"
                  style={{
                    width: '70%',
                    height: '70%',
                    border: '1px solid rgba(99,102,241,0.15)',
                    borderRadius: '50%',
                    top: '15%',
                    left: '15%',
                    animationDirection: 'reverse',
                    animationDuration: '12s',
                  }}
                />

                {/* Image wrapper */}
                <div
                  className="float-img relative cursor-pointer w-[140%] sm:w-full -mr-6 sm:mr-0"
                  onMouseMove={handleMouseMove}
                  onMouseEnter={() => setIsHovering(true)}
                  onMouseLeave={handleMouseLeave}
                  style={{ zIndex: 2 }}
                >
                  {hero.hero_image ? (
                    <img
                      src={`/storage/${hero.hero_image}`}
                      alt="Hero Preview"
                      className="w-full h-auto object-contain drop-shadow-2xl"
                      style={{
                        filter: `drop-shadow(0 8px 24px rgba(0,0,0,0.5)) ${
                          isHovering
                            ? 'drop-shadow(0 0 50px rgba(56,189,248,0.6))'
                            : 'drop-shadow(0 0 24px rgba(56,189,248,0.25))'
                        }`,
                        transform: `perspective(1000px) rotateX(${mousePosition.y * 0.3}deg) rotateY(${mousePosition.x * 0.3}deg) scale(${isHovering ? 1.04 : 1}) translateY(${isHovering ? -8 : 0}px)`,
                        transition: 'all 0.5s ease-out',
                      }}
                    />
                  ) : (
                    <div
                      className="w-full aspect-square flex items-center justify-center rounded-full"
                      style={{
                        background: 'rgba(56,189,248,0.05)',
                        border: '1px solid rgba(56,189,248,0.15)',
                      }}
                    >
                      <div className="text-center">
                        <div className="text-4xl lg:text-8xl mb-2 lg:mb-4">🤖</div>
                        <span
                          className="text-blue-300 text-xs lg:text-lg font-medium"
                          style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                        >
                          hero_image.png
                        </span>
                      </div>
                    </div>
                  )}
                </div>

                {/* Glow blobs */}
                <div
                  className="glow-blob absolute -bottom-4 -right-4 lg:-bottom-8 lg:-right-8 rounded-full pointer-events-none"
                  style={{
                    width: 'clamp(4rem,10vw,10rem)',
                    height: 'clamp(4rem,10vw,10rem)',
                    background: 'radial-gradient(circle, rgba(56,189,248,0.5), rgba(99,102,241,0.3))',
                    filter: 'blur(24px)',
                  }}
                />

                <div
                  className="glow-blob absolute top-0 -left-4 lg:-left-10 rounded-full pointer-events-none"
                  style={{
                    width: 'clamp(2rem,5vw,5rem)',
                    height: 'clamp(2rem,5vw,5rem)',
                    background: 'radial-gradient(circle, rgba(34,211,238,0.5), transparent)',
                    filter: 'blur(16px)',
                    animationDelay: '1s',
                  }}
                />
              </div>

            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProfessionalHero;