import React, { useEffect, useMemo, useState } from 'react';

const DEFAULT_HERO = {
  headline: 'WUJUDKAN IDE DIGITAL ANDA',
  subheadline:
    'KyySolutions hadir sebagai mitra teknologi yang membantu Anda berinovasi, bertransformasi, dan tumbuh lebih cepat di era digital.',
  cta_text: 'Mulai Proyek Anda',
};

function AnimatedCounter({ target, suffix = '', duration = 1300 }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let frame;
    const start = performance.now();

    const animate = (time) => {
      const progress = Math.min((time - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);

      setCount(Math.round(target * eased));

      if (progress < 1) {
        frame = requestAnimationFrame(animate);
      }
    };

    frame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(frame);
  }, [target, duration]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
}

const FeatureIcon = ({ type }) => {
  const icons = {
    integration: (
      <path d="M12 3v5m0 8v5M3 12h5m8 0h5M5.64 5.64l3.54 3.54m5.64 5.64 3.54 3.54m0-12.72-3.54 3.54m-5.64 5.64-3.54 3.54M12 9.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Z" />
    ),
    tech: (
      <path d="M12 2v4m0 12v4M4.93 4.93l2.83 2.83m8.48 8.48 2.83 2.83M2 12h4m12 0h4M4.93 19.07l2.83-2.83m8.48-8.48 2.83-2.83M9 12a3 3 0 1 0 6 0 3 3 0 0 0-6 0Z" />
    ),
    security: (
      <path d="M12 22s8-3.6 8-10V5.5L12 2 4 5.5V12c0 6.4 8 10 8 10Zm-3.2-10 2.2 2.2 4.6-5" />
    ),
    support: (
      <path d="M4 13v-1a8 8 0 0 1 16 0v1M6 18a3 3 0 0 1-3-3v-1a2 2 0 0 1 2-2h1v6Zm12 0v-6h1a2 2 0 0 1 2 2v1a3 3 0 0 1-3 3Zm0 0c0 1.7-1.3 3-3 3h-2" />
    ),
    clients: (
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm13 10v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
    ),
    check: (
      <path d="M20 6 9 17l-5-5" />
    ),
    rocket: (
      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09ZM12 15l-3-3a22 22 0 0 1 2-4.5A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-5.5 11a22 22 0 0 1-4.5 2Zm-3 0H4v-5m11 5v5h-5" />
    ),
    calendar: (
      <path d="M8 2v4m8-4v4M3 10h18M5 4h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Z" />
    ),
  };

  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="ks-icon-svg"
    >
      {icons[type]}
    </svg>
  );
};

const FeatureCard = ({ icon, title, text, side = 'left', className = '' }) => (
  <div className={`ks-feature-card ${side === 'right' ? 'ks-feature-card-right' : ''} ${className}`}>
    <div className="ks-feature-icon">
      <FeatureIcon type={icon} />
    </div>

    <div className="ks-feature-content">
      <h3>{title}</h3>
      <p>{text}</p>
    </div>

    <span className="ks-feature-arrow">→</span>
  </div>
);

const StatBox = ({ icon, value, suffix, label }) => (
  <div className="ks-stat-box">
    <div className="ks-stat-icon">
      <FeatureIcon type={icon} />
    </div>

    <div className="ks-stat-text">
      <strong>
        <AnimatedCounter target={value} suffix={suffix} />
      </strong>
      <span>{label}</span>
    </div>
  </div>
);

const ProfessionalHero = ({ hero }) => {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  const data = {
    ...DEFAULT_HERO,
    ...(hero || {}),
  };

  const titleLines = useMemo(() => {
    const raw = (data.headline || DEFAULT_HERO.headline).replace(/\s+/g, ' ').trim();
    const normalized = raw.toLowerCase();

    if (raw.includes('|')) {
      const [top, bottom] = raw.split('|');
      return [top.trim(), bottom.trim()];
    }

    if (normalized.includes('digital anda')) {
      return [raw.replace(/digital anda/i, '').trim() || 'WUJUDKAN IDE', 'DIGITAL ANDA'];
    }

    return ['WUJUDKAN IDE', 'DIGITAL ANDA'];
  }, [data.headline]);

  const backgroundUrl = data.background_image ? `/storage/${data.background_image}` : null;
  const robotUrl = data.hero_image ? `/storage/${data.hero_image}` : null;

  const handleMouseMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();

    setMouse({
      x: ((event.clientX - rect.left) / rect.width - 0.5) * 10,
      y: ((event.clientY - rect.top) / rect.height - 0.5) * -10,
    });
  };

  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link
        href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Inter:wght@400;500;600;700;800;900&family=Rajdhani:wght@600;700&display=swap"
        rel="stylesheet"
      />

      <style>{`
        :root {
          --ks-blue: #009dff;
          --ks-blue-2: #005dff;
          --ks-cyan: #39d9ff;
          --ks-dark: #020814;
          --ks-black: #00040d;
        }

        @keyframes ksPulse {
          0%, 100% {
            opacity: .48;
            transform: scale(1);
          }

          50% {
            opacity: .9;
            transform: scale(1.04);
          }
        }

        @keyframes ksSpin {
          from {
            transform: translate(-50%, -50%) rotate(0deg);
          }

          to {
            transform: translate(-50%, -50%) rotate(360deg);
          }
        }

        @keyframes ksFloat {
          0%, 100% {
            transform: translateY(0) rotateX(var(--mx)) rotateY(var(--my));
          }

          50% {
            transform: translateY(-12px) rotateX(var(--mx)) rotateY(var(--my));
          }
        }

        @keyframes ksScan {
          0% {
            transform: translateY(-120%);
            opacity: 0;
          }

          12%, 88% {
            opacity: .42;
          }

          100% {
            transform: translateY(120%);
            opacity: 0;
          }
        }

        .ks-hero {
          position: relative;
          height: 100vh;
          height: 100dvh;
          min-height: 680px;
          max-height: 980px;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 6.4rem 1.25rem 1.25rem;
          color: #ffffff;
          isolation: isolate;
          background:
            radial-gradient(circle at 50% 28%, rgba(0, 113, 255, .2), transparent 30%),
            linear-gradient(180deg, #00040d 0%, #020915 48%, #00040b 100%);
          font-family: 'Inter', 'Rajdhani', sans-serif;
        }

        .ks-bg-img,
        .ks-bg-layer,
        .ks-grid,
        .ks-floor,
        .ks-scanline,
        .ks-beam {
          position: absolute;
          inset: 0;
          pointer-events: none;
        }

        .ks-bg-img {
          z-index: -9;
          width: 100%;
          height: 100%;
          object-fit: cover;
          filter: brightness(.36) saturate(1.2) contrast(1.08);
        }

        .ks-bg-layer {
          z-index: -8;
          background:
            radial-gradient(ellipse 46% 42% at 50% 22%, rgba(0, 126, 255, .4), transparent 100%),
            radial-gradient(circle at 50% 68%, rgba(0, 169, 255, .18), transparent 34%),
            linear-gradient(90deg, rgba(0,0,0,.9), transparent 24%, transparent 76%, rgba(0,0,0,.9)),
            linear-gradient(180deg, rgba(0,0,0,.35), transparent 43%, rgba(0,0,0,.55));
        }

        .ks-beam {
          z-index: -7;
          background:
            radial-gradient(ellipse 18% 90% at 50% 0%, rgba(0, 142, 255, .25), transparent 70%),
            radial-gradient(ellipse 8% 65% at 50% 0%, rgba(80, 200, 255, .18), transparent 65%);
        }

        .ks-grid {
          z-index: -6;
          opacity: .22;
          background-image:
            linear-gradient(rgba(0, 157, 255, .14) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 157, 255, .14) 1px, transparent 1px);
          background-size: 72px 72px;
          mask-image: radial-gradient(circle at center, #000 0%, transparent 75%);
        }

        .ks-floor {
          z-index: -5;
          top: 43%;
          background:
            linear-gradient(90deg, transparent 0 47%, rgba(40, 190, 255, .5) 49%, transparent 51% 100%),
            repeating-linear-gradient(90deg, transparent 0 84px, rgba(0, 157, 255, .24) 86px, transparent 88px),
            repeating-linear-gradient(0deg, transparent 0 54px, rgba(0, 157, 255, .2) 56px, transparent 58px);
          transform: perspective(760px) rotateX(62deg) translateY(125px) scale(1.45);
          transform-origin: center bottom;
          opacity: .48;
        }

        .ks-floor::before,
        .ks-floor::after {
          content: '';
          position: absolute;
          left: 50%;
          top: 51%;
          border-radius: 999px;
          transform: translate(-50%, -50%);
        }

        .ks-floor::before {
          width: 62vw;
          height: 62vw;
          max-width: 980px;
          max-height: 980px;
          border: 1px solid rgba(0, 179, 255, .5);
          box-shadow: 0 0 38px rgba(0, 155, 255, .24), inset 0 0 38px rgba(0, 155, 255, .1);
        }

        .ks-floor::after {
          width: 36vw;
          height: 36vw;
          max-width: 560px;
          max-height: 560px;
          border: 1px solid rgba(0, 200, 255, .45);
          box-shadow: 0 0 28px rgba(0, 175, 255, .22), inset 0 0 28px rgba(0, 175, 255, .1);
        }

        .ks-scanline {
          z-index: -4;
          background: linear-gradient(180deg, transparent, rgba(68, 190, 255, .16), transparent);
          height: 45%;
          animation: ksScan 5.5s linear infinite;
        }

        .ks-orbit {
          position: absolute;
          left: 50%;
          top: 37%;
          width: min(56vw, 720px);
          aspect-ratio: 1;
          border-radius: 999px;
          z-index: -2;
          opacity: .9;
          background:
            conic-gradient(
              from 0deg,
              transparent 0 8%,
              rgba(0, 159, 255, .9) 8% 11%,
              transparent 11% 18%,
              rgba(25, 205, 255, .78) 18% 21%,
              transparent 21% 100%
            );
          mask:
            radial-gradient(
              circle,
              transparent 0 48%,
              #000 49% 50%,
              transparent 51% 57%,
              #000 58% 59%,
              transparent 60%
            );
          animation: ksSpin 24s linear infinite;
          filter: drop-shadow(0 0 28px rgba(0, 151, 255, .68));
        }

        .ks-rings {
          position: absolute;
          left: 50%;
          top: 36%;
          width: min(62vw, 800px);
          aspect-ratio: 1;
          transform: translate(-50%, -50%);
          z-index: -1;
          pointer-events: none;
          border-radius: 999px;
          border: 1px solid rgba(0, 168, 255, .42);
          box-shadow:
            0 0 52px rgba(0, 155, 255, .24),
            inset 0 0 52px rgba(0, 155, 255, .1);
        }

        .ks-rings::before {
          content: '';
          position: absolute;
          inset: 14%;
          border-radius: 999px;
          border: 1px solid rgba(0, 198, 255, .32);
          box-shadow:
            0 0 36px rgba(0, 165, 255, .18),
            inset 0 0 36px rgba(0, 165, 255, .08);
        }

        .ks-rings::after {
          content: '';
          position: absolute;
          inset: 28%;
          border-radius: 999px;
          border: 1px solid rgba(50, 215, 255, .26);
          box-shadow:
            0 0 24px rgba(0, 175, 255, .14),
            inset 0 0 24px rgba(0, 175, 255, .06);
        }

        .ks-wrap {
          width: min(100%, 1560px);
          height: 100%;
          position: relative;
          z-index: 2;
        }

        .ks-robot-stage {
          position: absolute;
          left: 50%;
          top: 4.8%;
          width: 100%;
          height: 58%;
          transform: translateX(-50%);
          display: flex;
          align-items: flex-start;
          justify-content: center;
          perspective: 1100px;
          z-index: 3;
          overflow: visible;
          pointer-events: auto;
        }

        .ks-robot-stage::before {
          content: '';
          position: absolute;
          left: 50%;
          bottom: -14%;
          width: min(80vw, 1020px);
          height: 54%;
          transform: translateX(-50%);
          background:
            radial-gradient(ellipse 70% 60% at 50% 100%, rgba(2, 8, 20, 1) 0%, rgba(2, 8, 20, .94) 38%, rgba(2, 8, 20, .68) 60%, rgba(2, 8, 20, .28) 78%, transparent 92%),
            linear-gradient(180deg, transparent 0%, rgba(2, 8, 20, .78) 58%, rgba(2, 8, 20, 1) 100%);
          filter: blur(6px);
          z-index: 6;
          pointer-events: none;
        }

        .ks-robot-stage::after {
          content: '';
          position: absolute;
          left: 50%;
          bottom: -6%;
          width: min(64vw, 820px);
          height: 34%;
          transform: translateX(-50%);
          background: radial-gradient(ellipse 65% 80% at 50% 95%, rgba(0, 0, 0, .96) 0%, rgba(2, 8, 20, .9) 32%, rgba(2, 8, 20, .68) 54%, rgba(2, 8, 20, .28) 72%, transparent 86%);
          filter: blur(12px);
          z-index: 7;
          pointer-events: none;
        }

        .ks-robot-glow {
          position: absolute;
          width: min(48vw, 650px);
          aspect-ratio: 1;
          top: -12%;
          border-radius: 999px;
          background: radial-gradient(circle, rgba(0, 180, 255, .78), rgba(0, 100, 255, .26) 40%, transparent 68%);
          filter: blur(22px);
          animation: ksPulse 3.2s ease-in-out infinite;
          z-index: -1;
        }

        .ks-robot-img {
          position: relative;
          z-index: 4;
          width: min(38vw, 590px);
          max-height: none;
          height: auto;
          object-fit: contain;
          object-position: center top;
          margin-top: -8px;
          filter:
            drop-shadow(0 0 36px rgba(0, 168, 255, .82))
            drop-shadow(0 0 72px rgba(0, 120, 255, .4))
            drop-shadow(0 42px 42px rgba(0,0,0,.62));
          mask-image: linear-gradient(to bottom, #000 0%, #000 52%, rgba(0,0,0,.58) 70%, rgba(0,0,0,.22) 82%, transparent 94%);
          -webkit-mask-image: linear-gradient(to bottom, #000 0%, #000 52%, rgba(0,0,0,.58) 70%, rgba(0,0,0,.22) 82%, transparent 94%);
          animation: ksFloat 5.5s ease-in-out infinite;
          transition: transform .25s ease;
        }

        .ks-robot-placeholder {
          position: relative;
          z-index: 4;
          width: min(38vw, 590px);
          aspect-ratio: .72;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 999px 999px 44px 44px;
          border: 1px solid rgba(44, 190, 255, .55);
          background:
            radial-gradient(ellipse at 50% 30%, rgba(0, 160, 255, .32), transparent 62%),
            linear-gradient(180deg, rgba(14, 145, 255, .22), rgba(1, 16, 35, .88));
          box-shadow:
            inset 0 0 80px rgba(25, 168, 255, .28),
            0 0 80px rgba(0, 128, 255, .38);
          font-size: clamp(8rem, 16vw, 14rem);
          mask-image: linear-gradient(to bottom, #000 0%, #000 52%, rgba(0,0,0,.58) 70%, rgba(0,0,0,.22) 82%, transparent 94%);
          -webkit-mask-image: linear-gradient(to bottom, #000 0%, #000 52%, rgba(0,0,0,.58) 70%, rgba(0,0,0,.22) 82%, transparent 94%);
          animation: ksFloat 5.5s ease-in-out infinite;
        }

        .ks-feature-grid {
          position: absolute;
          inset: 0;
          z-index: 5;
          pointer-events: none;
        }

        .ks-feature-card {
          position: absolute;
          width: min(28vw, 350px);
          min-height: 126px;
          display: grid;
          grid-template-columns: 70px 1fr 22px;
          align-items: center;
          gap: 1rem;
          padding: 1.1rem 1.3rem;
          color: #eaf8ff;
          background:
            linear-gradient(135deg, rgba(4, 20, 45, .86), rgba(5, 28, 58, .72)),
            radial-gradient(circle at 15% 50%, rgba(31, 169, 255, .22), transparent 42%);
          border: 1px solid rgba(0, 155, 255, .48);
          border-radius: 18px;
          box-shadow:
            0 12px 50px rgba(0, 0, 0, .42),
            0 0 28px rgba(0, 119, 255, .18),
            inset 0 1px 0 rgba(105, 218, 255, .18);
          backdrop-filter: blur(20px);
          pointer-events: auto;
          overflow: hidden;
        }

        .ks-feature-card::before {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: inherit;
          background:
            linear-gradient(90deg, transparent, rgba(55, 207, 255, .22), transparent) top / 100% 1px no-repeat,
            linear-gradient(135deg, rgba(0, 170, 255, .08), transparent 52%);
          pointer-events: none;
        }

        .ks-feature-card::after {
          content: '';
          position: absolute;
          top: 0;
          left: 22px;
          right: 22px;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(0, 222, 255, .7), transparent);
        }

        .ks-feature-content {
          position: relative;
          z-index: 2;
          min-width: 0;
        }

        .ks-feature-card h3 {
          margin: 0 0 .45rem;
          font-family: 'Inter', sans-serif;
          font-size: clamp(.88rem, 1vw, 1.05rem);
          line-height: 1.16;
          font-weight: 800;
          color: #ffffff;
          letter-spacing: -.025em;
        }

        .ks-feature-card p {
          margin: 0;
          font-size: clamp(.72rem, .82vw, .86rem);
          line-height: 1.52;
          font-weight: 400;
          color: rgba(204, 232, 255, .76);
        }

        .ks-feature-icon {
          position: relative;
          z-index: 2;
          width: 58px;
          height: 58px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 999px;
          color: #78ddff;
          background: radial-gradient(circle at 38% 32%, rgba(94, 224, 255, .34), rgba(0, 92, 220, .36));
          border: 1px solid rgba(80, 209, 255, .42);
          box-shadow:
            inset 0 0 18px rgba(74, 201, 255, .2),
            0 0 24px rgba(0, 117, 255, .3);
          flex-shrink: 0;
        }

        .ks-feature-arrow {
          position: relative;
          z-index: 2;
          color: #78ddff;
          font-size: 1.6rem;
          line-height: 1;
          opacity: .9;
        }

        .ks-icon-svg {
          width: 30px;
          height: 30px;
        }

        .ks-feature-top-left {
          left: 4.2%;
          top: 21.5%;
        }

        .ks-feature-bottom-left {
          left: 4.2%;
          top: 43%;
        }

        .ks-feature-top-right {
          right: 4.2%;
          top: 21.5%;
        }

        .ks-feature-bottom-right {
          right: 4.2%;
          top: 43%;
        }

        .ks-copy {
          position: absolute;
          left: 50%;
          bottom: 12.8%;
          transform: translateX(-50%);
          z-index: 9;
          text-align: center;
          width: min(100%, 980px);
          max-width: 980px;
          margin: 0 auto;
        }

        .ks-title {
          margin: 0;
          font-family: 'Bebas Neue', 'Rajdhani', sans-serif;
          font-size: clamp(3.2rem, 5.3vw, 5.8rem);
          line-height: .9;
          font-weight: 400;
          letter-spacing: .045em;
          text-transform: uppercase;
        }

        .ks-title span {
          display: block;
          color: #f4fbff;
          text-shadow:
            0 4px 0 rgba(0, 20, 60, .32),
            0 10px 28px rgba(0, 0, 0, .5);
        }

        .ks-title strong {
          display: block;
          color: #13b8ff;
          background: linear-gradient(180deg, #5ee0ff 0%, #0a9fff 48%, #025bff 100%);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          filter:
            drop-shadow(0 6px 0 rgba(0, 20, 90, .2))
            drop-shadow(0 0 28px rgba(0, 160, 255, .5));
        }

        .ks-kicker {
          margin: .65rem auto 0;
          font-size: clamp(1rem, 1.5vw, 1.55rem);
          line-height: 1.2;
          font-weight: 800;
          font-family: 'Inter', sans-serif;
          letter-spacing: -.02em;
          color: #96dcff;
          text-shadow: 0 0 18px rgba(0, 155, 255, .28);
        }

        .ks-subtitle {
          width: min(100%, 640px);
          margin: .45rem auto 0;
          color: rgba(220, 238, 255, .76);
          font-family: 'Inter', sans-serif;
          font-size: clamp(.8rem, .9vw, .94rem);
          font-weight: 400;
          line-height: 1.55;
        }

        .ks-cta {
          min-width: 245px;
          height: 58px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: .8rem;
          padding: 0 1.85rem;
          border-radius: 999px;
          border: 1px solid rgba(104, 227, 255, .9);
          color: #ffffff;
          text-decoration: none;
          font-weight: 800;
          font-size: .96rem;
          background:
            linear-gradient(180deg, #42dcff 0%, #119bff 48%, #064ee2 100%);
          box-shadow:
            inset 0 1px 16px rgba(255,255,255,.25),
            inset 0 -8px 18px rgba(0, 34, 138, .28),
            0 0 24px rgba(0, 167, 255, .68),
            0 16px 30px rgba(0, 0, 0, .32);
          transition:
            transform .25s ease,
            box-shadow .25s ease;
        }

        .ks-cta:hover {
          transform: translateY(-3px);
          box-shadow:
            inset 0 1px 16px rgba(255,255,255,.28),
            inset 0 -8px 18px rgba(0, 34, 138, .25),
            0 0 36px rgba(0, 191, 255, .9),
            0 20px 34px rgba(0, 0, 0, .34);
        }

        .ks-cta svg {
          width: 18px;
          height: 18px;
          transition: transform .25s ease;
        }

        .ks-cta:hover svg {
          transform: translateX(4px);
        }

        .ks-main-cta {
          margin-top: 1rem;
        }

        .ks-bottom-stats {
          position: absolute;
          left: 50%;
          bottom: 2.4%;
          transform: translateX(-50%);
          z-index: 9;
          width: min(68vw, 1040px);
          min-height: 88px;
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          align-items: center;
          border: 1px solid rgba(0, 162, 255, .62);
          border-radius: 16px;
          background:
            linear-gradient(180deg, rgba(5, 25, 55, .82) 0%, rgba(2, 14, 34, .92) 52%, rgba(1, 8, 22, .96) 100%),
            radial-gradient(circle at 50% 0%, rgba(0, 193, 255, .22), rgba(0, 102, 255, .08) 42%, transparent 68%);
          box-shadow:
            0 0 30px rgba(0, 145, 255, .25),
            0 16px 42px rgba(0, 0, 0, .34),
            inset 0 1px 0 rgba(124, 233, 255, .24),
            inset 0 -1px 0 rgba(0, 112, 255, .2);
          backdrop-filter: blur(20px);
          overflow: hidden;
        }

        .ks-bottom-stats::before {
          content: '';
          position: absolute;
          inset: 0;
          background:
            linear-gradient(90deg, transparent, rgba(62, 218, 255, .36), transparent) top / 100% 1px no-repeat,
            linear-gradient(180deg, rgba(80, 220, 255, .08), transparent 42%),
            linear-gradient(90deg, transparent 0%, rgba(0, 128, 255, .08) 50%, transparent 100%);
          pointer-events: none;
        }

        .ks-bottom-stats::after {
          content: '';
          position: absolute;
          left: 50%;
          top: -1px;
          width: 76%;
          height: 2px;
          transform: translateX(-50%);
          background: linear-gradient(90deg, transparent, #26d8ff 18%, #91f2ff 50%, #26d8ff 82%, transparent);
          box-shadow: 0 0 18px rgba(38, 216, 255, .9);
          pointer-events: none;
        }

        .ks-stat-box {
          position: relative;
          display: grid;
          grid-template-columns: 58px 1fr;
          align-items: center;
          justify-content: center;
          gap: .95rem;
          padding: .82rem 1.18rem;
        }

        .ks-stat-box + .ks-stat-box::before {
          content: '';
          position: absolute;
          left: 0;
          top: 24%;
          bottom: 24%;
          width: 1px;
          background: linear-gradient(
            transparent,
            rgba(63, 219, 255, .58),
            transparent
          );
        }

        .ks-stat-icon {
          width: 54px;
          height: 54px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 999px;
          flex-shrink: 0;
          color: #8deaff;
          background:
            radial-gradient(circle at 38% 30%, rgba(128, 244, 255, .42) 0%, rgba(44, 179, 255, .28) 34%, rgba(0, 72, 196, .42) 72%),
            linear-gradient(180deg, rgba(0, 162, 255, .28), rgba(0, 37, 110, .42));
          border: 1px solid rgba(92, 222, 255, .5);
          box-shadow:
            inset 0 0 18px rgba(83, 212, 255, .22),
            0 0 20px rgba(0, 149, 255, .34),
            0 8px 24px rgba(0, 0, 0, .28);
        }

        .ks-stat-icon .ks-icon-svg {
          width: 27px;
          height: 27px;
        }

        .ks-stat-text {
          min-width: 0;
        }

        .ks-stat-box strong {
          display: block;
          font-size: clamp(1.35rem, 1.78vw, 1.78rem);
          line-height: 1;
          color: #29c4ff;
          font-family: 'Inter', sans-serif;
          font-weight: 900;
          letter-spacing: -.045em;
          text-shadow:
            0 0 16px rgba(0, 180, 255, .55),
            0 2px 12px rgba(0, 0, 0, .35);
        }

        .ks-stat-box span {
          display: block;
          margin-top: .26rem;
          font-size: .76rem;
          font-family: 'Inter', sans-serif;
          line-height: 1.25;
          color: rgba(218, 239, 255, .82);
          font-weight: 600;
          white-space: nowrap;
        }

        @media (min-width: 981px) and (max-height: 820px) {
          .ks-hero {
            min-height: 620px;
            padding-top: 5.6rem;
          }

          .ks-robot-stage {
            top: 4%;
            height: 56%;
          }

          .ks-robot-img {
            width: min(36vw, 540px);
          }

          .ks-feature-card {
            width: min(29vw, 320px);
            min-height: 106px;
            grid-template-columns: 58px 1fr 18px;
            padding: .85rem 1.05rem;
            border-radius: 14px;
          }

          .ks-feature-icon {
            width: 50px;
            height: 50px;
          }

          .ks-icon-svg {
            width: 25px;
            height: 25px;
          }

          .ks-feature-card h3 {
            font-size: .9rem;
            margin-bottom: .28rem;
          }

          .ks-feature-card p {
            font-size: .74rem;
            line-height: 1.42;
          }

          .ks-feature-top-left,
          .ks-feature-top-right {
            top: 20.5%;
          }

          .ks-feature-bottom-left,
          .ks-feature-bottom-right {
            top: 39%;
          }

          .ks-copy {
            bottom: 11.8%;
          }

          .ks-title {
            font-size: clamp(3rem, 5.05vw, 5.35rem);
          }

          .ks-kicker {
            margin-top: .5rem;
            font-size: clamp(1rem, 1.35vw, 1.35rem);
          }

          .ks-subtitle {
            margin-top: .35rem;
            font-size: .82rem;
            line-height: 1.45;
          }

          .ks-main-cta {
            margin-top: .72rem;
          }

          .ks-cta {
            height: 52px;
            min-width: 218px;
          }

          .ks-bottom-stats {
            width: min(70vw, 980px);
            min-height: 74px;
            bottom: 2%;
          }

          .ks-stat-box {
            grid-template-columns: 48px 1fr;
            gap: .75rem;
            padding: .6rem .9rem;
          }

          .ks-stat-icon {
            width: 46px;
            height: 46px;
          }

          .ks-stat-icon .ks-icon-svg {
            width: 23px;
            height: 23px;
          }

          .ks-stat-box strong {
            font-size: 1.35rem;
          }

          .ks-stat-box span {
            font-size: .68rem;
          }
        }

        @media (max-width: 1180px) {
          .ks-feature-card {
            width: min(35vw, 315px);
            min-height: 108px;
            grid-template-columns: 58px 1fr 18px;
            padding: .95rem 1.1rem;
          }

          .ks-feature-icon {
            width: 50px;
            height: 50px;
          }

          .ks-feature-top-left,
          .ks-feature-bottom-left {
            left: 2%;
          }

          .ks-feature-top-right,
          .ks-feature-bottom-right {
            right: 2%;
          }
        }

        @media (max-width: 980px) {
          .ks-hero {
            height: auto;
            min-height: 100vh;
            max-height: none;
            padding: 7rem 1rem 2.25rem;
            align-items: flex-start;
          }

          .ks-wrap {
            height: auto;
            display: flex;
            flex-direction: column;
            align-items: center;
          }

          .ks-orbit {
            width: min(88vw, 600px);
            top: 22rem;
          }

          .ks-rings {
            top: 30%;
            width: min(72vw, 560px);
          }

          .ks-robot-stage {
            position: relative;
            left: auto;
            top: auto;
            width: 100%;
            height: 360px;
            transform: none;
            align-items: flex-start;
            flex-shrink: 0;
          }

          .ks-robot-img {
            width: min(68vw, 380px);
            margin-top: -5px;
          }

          .ks-feature-grid {
            position: relative;
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: .75rem;
            margin-top: .5rem;
            width: 100%;
            inset: auto;
          }

          .ks-feature-card,
          .ks-feature-card-right {
            position: relative;
            inset: auto;
            width: 100%;
            min-height: 110px;
          }

          .ks-copy {
            position: relative;
            left: auto;
            bottom: auto;
            transform: none;
            margin-top: 1.2rem;
            width: 100%;
          }

          .ks-bottom-stats {
            position: relative;
            left: auto;
            bottom: auto;
            transform: none;
            width: min(100%, 620px);
            grid-template-columns: repeat(2, minmax(0, 1fr));
            margin-top: 1rem;
          }

          .ks-stat-box:nth-child(3)::before {
            display: none;
          }
        }

        @media (max-width: 640px) {
          .ks-hero {
            height: auto;
            min-height: 58svh;
            max-height: none;
            padding: 5.1rem .9rem 1.45rem;
            overflow: hidden;
            align-items: flex-start;
            background:
              radial-gradient(circle at 50% 18%, rgba(0, 130, 255, .28), transparent 34%),
              linear-gradient(180deg, #00040d 0%, #020914 58%, #01040b 100%);
          }

          .ks-bg-img {
            height: 100%;
            object-fit: cover;
            object-position: center top;
            filter: brightness(.46) saturate(1.18) contrast(1.05);
          }

          .ks-bg-layer {
            background:
              radial-gradient(ellipse 70% 42% at 50% 18%, rgba(0, 126, 255, .38), transparent 100%),
              linear-gradient(90deg, rgba(0,0,0,.68), transparent 26%, transparent 74%, rgba(0,0,0,.68)),
              linear-gradient(180deg, rgba(0,0,0,.2), transparent 42%, rgba(0,0,0,.72));
          }

          .ks-grid {
            opacity: .16;
            background-size: 46px 46px;
          }

          .ks-floor {
            top: 48%;
            opacity: .26;
            transform: perspective(560px) rotateX(62deg) translateY(80px) scale(1.28);
          }

          .ks-orbit {
            width: 92vw;
            top: 27%;
            opacity: .78;
          }

          .ks-rings {
            width: 90vw;
            top: 27%;
            opacity: .74;
          }

          .ks-wrap {
            width: 100%;
            height: auto;
            min-height: 0;
            display: flex;
            flex-direction: column;
            align-items: center;
            position: relative;
          }

          .ks-robot-stage {
            position: relative;
            left: auto;
            top: auto;
            transform: none;
            width: 100%;
            height: clamp(185px, 32svh, 290px);
            display: flex;
            align-items: flex-start;
            justify-content: center;
            overflow: visible;
            flex-shrink: 0;
          }

          .ks-robot-stage::before {
            bottom: -17%;
            width: 86vw;
            height: 48%;
            opacity: .72;
            filter: blur(8px);
          }

          .ks-robot-stage::after {
            bottom: -9%;
            width: 70vw;
            height: 34%;
            opacity: .68;
            filter: blur(12px);
          }

          .ks-robot-glow {
            width: min(90vw, 390px);
            top: -22%;
            filter: blur(18px);
          }

          .ks-robot-img {
            width: min(68vw, 285px);
            margin-top: -4px;
            mask-image: linear-gradient(to bottom, #000 0%, #000 58%, rgba(0,0,0,.58) 75%, rgba(0,0,0,.18) 88%, transparent 98%);
            -webkit-mask-image: linear-gradient(to bottom, #000 0%, #000 58%, rgba(0,0,0,.58) 75%, rgba(0,0,0,.18) 88%, transparent 98%);
          }

          .ks-robot-placeholder {
            width: min(68vw, 285px);
            font-size: clamp(5rem, 18vw, 8rem);
          }

          .ks-feature-grid {
            display: none;
          }

          .ks-copy {
            position: relative;
            left: auto;
            bottom: auto;
            transform: none;
            width: min(100%, 390px);
            text-align: center;
            padding: 0 .2rem;
            margin-top: -.35rem;
            z-index: 10;
          }

          .ks-title {
            font-size: clamp(2.6rem, 13.2vw, 4.15rem);
            line-height: .88;
            letter-spacing: .025em;
          }

          .ks-kicker {
            font-size: clamp(.95rem, 4vw, 1.12rem);
            margin-top: .38rem;
            line-height: 1.2;
          }

          .ks-subtitle {
            width: min(100%, 340px);
            font-size: clamp(.72rem, 3vw, .84rem);
            margin-top: .38rem;
            line-height: 1.48;
            color: rgba(220, 238, 255, .78);
            display: -webkit-box;
            -webkit-line-clamp: 3;
            -webkit-box-orient: vertical;
            overflow: hidden;
          }

          .ks-main-cta {
            margin-top: .85rem;
          }

          .ks-cta {
            width: min(100%, 250px);
            min-width: 0;
            height: 48px;
            font-size: .9rem;
            padding: 0 1.25rem;
          }

          .ks-bottom-stats {
            display: none;
          }
        }

        @media (max-width: 390px) {
          .ks-hero {
            min-height: 60svh;
            padding-top: 4.85rem;
          }

          .ks-robot-stage {
            height: clamp(170px, 31svh, 255px);
          }

          .ks-robot-img {
            width: min(66vw, 245px);
          }

          .ks-title {
            font-size: clamp(2.28rem, 12.6vw, 3.6rem);
          }

          .ks-subtitle {
            -webkit-line-clamp: 2;
          }

          .ks-cta {
            height: 44px;
            font-size: .84rem;
          }
        }

        @media (max-width: 640px) and (min-height: 780px) {
          .ks-hero {
            min-height: 56svh;
          }

          .ks-robot-stage {
            height: clamp(210px, 31svh, 300px);
          }

          .ks-robot-img {
            width: min(70vw, 305px);
          }
        }

        @media (max-width: 640px) and (max-height: 620px) {
          .ks-hero {
            min-height: 66svh;
          }

          .ks-robot-stage {
            height: 170px;
          }

          .ks-robot-img {
            width: min(58vw, 225px);
          }

          .ks-title {
            font-size: clamp(2rem, 10.5vw, 3rem);
          }

          .ks-kicker {
            font-size: .82rem;
          }

          .ks-subtitle {
            display: none;
          }

          .ks-main-cta {
            margin-top: .6rem;
          }
        }
      `}</style>

      <section
        id="home"
        className="ks-hero"
        style={{ '--mx': `${mouse.y}deg`, '--my': `${mouse.x}deg` }}
      >
        {backgroundUrl && <img src={backgroundUrl} alt="Hero Background" className="ks-bg-img" />}

        <div className="ks-bg-layer" />
        <div className="ks-beam" />
        <div className="ks-grid" />
        <div className="ks-floor" />
        <div className="ks-scanline" />
        <div className="ks-orbit" />
        <div className="ks-rings" />

        <div className="ks-wrap">
          <div
            className="ks-robot-stage"
            onMouseMove={handleMouseMove}
            onMouseLeave={() => setMouse({ x: 0, y: 0 })}
          >
            <div className="ks-robot-glow" />

            {robotUrl ? (
              <img src={robotUrl} alt="KyySolutions Robot" className="ks-robot-img" />
            ) : (
              <div className="ks-robot-placeholder" aria-label="Robot placeholder">
                🤖
              </div>
            )}
          </div>

          <div className="ks-feature-grid" aria-label="KyySolutions Advantages">
            <FeatureCard
              icon="integration"
              title="Solusi Terintegrasi"
              text="Kami menghadirkan solusi IT terpadu yang selaras dengan kebutuhan bisnis Anda."
              className="ks-feature-top-left"
            />

            <FeatureCard
              icon="tech"
              title="Teknologi Terkini"
              text="Memanfaatkan teknologi modern untuk mendorong efisiensi dan pertumbuhan bisnis."
              className="ks-feature-bottom-left"
            />

            <FeatureCard
              icon="security"
              title="Keamanan Terjamin"
              text="Sistem aman berstandar tinggi untuk melindungi data dan aset digital Anda."
              side="right"
              className="ks-feature-top-right"
            />

            <FeatureCard
              icon="support"
              title="Dukungan Profesional"
              text="Tim ahli kami siap memberikan dukungan terbaik di setiap tahap proyek Anda."
              side="right"
              className="ks-feature-bottom-right"
            />
          </div>

          <div className="ks-copy">
            <h1 className="ks-title">
              <span>{titleLines[0]}</span>
              <strong>{titleLines[1]}</strong>
            </h1>

            <p className="ks-kicker">Solusi IT modern untuk bisnis inovatif</p>
            <p className="ks-subtitle">{data.subheadline || DEFAULT_HERO.subheadline}</p>

            <a href="#contact" className="ks-cta ks-main-cta">
              {data.cta_text || DEFAULT_HERO.cta_text}
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14" />
                <path d="m13 6 6 6-6 6" />
              </svg>
            </a>
          </div>

          <div className="ks-bottom-stats">
            <StatBox icon="clients" value={500} suffix="+" label="Klien Terpercaya" />
            <StatBox icon="check" value={98} suffix="%" label="Kepuasan Klien" />
            <StatBox icon="rocket" value={120} suffix="+" label="Proyek Sukses" />
            <StatBox icon="calendar" value={10} suffix="+" label="Tahun Pengalaman" />
          </div>
        </div>
      </section>
    </>
  );
};

export default ProfessionalHero;