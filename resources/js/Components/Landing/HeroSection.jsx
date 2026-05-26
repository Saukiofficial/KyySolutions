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
  };

  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-8 w-8"
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
  </div>
);

const StatBox = ({ value, suffix, label }) => (
  <div className="ks-stat-box">
    <strong>
      <AnimatedCounter target={value} suffix={suffix} />
    </strong>
    <span>{label}</span>
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
        href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Inter:wght@400;500;600;700;800&family=Rajdhani:wght@600;700&display=swap"
        rel="stylesheet"
      />

      <style>{`
        :root {
          --ks-blue: #00a8ff;
          --ks-cyan: #32d6ff;
          --ks-dark: #020814;
        }

        @keyframes ksPulse {
          0%, 100% {
            opacity: .45;
            transform: scale(1);
          }

          50% {
            opacity: .9;
            transform: scale(1.04);
          }
        }

        @keyframes ksSpin {
          from {
            transform: rotate(0deg);
          }

          to {
            transform: rotate(360deg);
          }
        }

        @keyframes ksFloat {
          0%, 100% {
            transform: translateY(0);
          }

          50% {
            transform: translateY(-12px);
          }
        }

        @keyframes ksScan {
          0% {
            transform: translateY(-120%);
            opacity: 0;
          }

          12%, 88% {
            opacity: .48;
          }

          100% {
            transform: translateY(120%);
            opacity: 0;
          }
        }

        @keyframes ksLineMove {
          0% {
            background-position: 0 0;
          }

          100% {
            background-position: 180px 0;
          }
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
          border: 1px solid rgba(0, 168, 255, .52);
          box-shadow:
            0 0 52px rgba(0, 155, 255, .28),
            inset 0 0 52px rgba(0, 155, 255, .12);
        }

        .ks-rings::before {
          content: '';
          position: absolute;
          inset: 14%;
          border-radius: 999px;
          border: 1px solid rgba(0, 198, 255, .4);
          box-shadow:
            0 0 36px rgba(0, 165, 255, .22),
            inset 0 0 36px rgba(0, 165, 255, .1);
        }

        .ks-rings::after {
          content: '';
          position: absolute;
          inset: 28%;
          border-radius: 999px;
          border: 1px solid rgba(50, 215, 255, .32);
          box-shadow:
            0 0 24px rgba(0, 175, 255, .18),
            inset 0 0 24px rgba(0, 175, 255, .08);
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
          padding: 6.6rem 1.25rem 1.25rem;
          color: #fff;
          isolation: isolate;
          background:
            radial-gradient(circle at 50% 30%, rgba(0, 100, 255, .18), transparent 30%),
            linear-gradient(180deg, #00040e 0%, #010810 48%, #010408 100%);
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

        .ks-beam {
          z-index: -3;
          background:
            radial-gradient(ellipse 18% 85% at 50% 0%, rgba(0, 142, 255, .28) 0%, transparent 70%),
            radial-gradient(ellipse 8% 60% at 50% 0%, rgba(80, 200, 255, .2) 0%, transparent 65%);
        }

        .ks-bg-img {
          z-index: -8;
          width: 100%;
          height: 100%;
          object-fit: cover;
          filter: brightness(.28) saturate(1.2) contrast(1.1);
        }

        .ks-bg-layer {
          z-index: -7;
          background:
            radial-gradient(ellipse 48% 42% at 50% 22%, rgba(0, 120, 255, .44), transparent 100%),
            radial-gradient(circle at 50% 68%, rgba(0, 155, 255, .18), transparent 35%),
            radial-gradient(circle at 10% 42%, rgba(0, 80, 200, .12), transparent 24%),
            radial-gradient(circle at 90% 42%, rgba(0, 80, 200, .12), transparent 24%),
            linear-gradient(90deg, rgba(0,0,0,.92), transparent 22%, transparent 78%, rgba(0,0,0,.92)),
            linear-gradient(180deg, rgba(0,0,0,.45) 0%, transparent 40%, transparent 60%, rgba(0,0,0,.55) 100%);
        }

        .ks-grid {
          z-index: -6;
          opacity: .26;
          background-image:
            linear-gradient(rgba(0, 157, 255, .16) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 157, 255, .16) 1px, transparent 1px);
          background-size: 72px 72px;
          mask-image: radial-gradient(circle at center, #000 0%, transparent 74%);
        }

        .ks-floor {
          z-index: -5;
          top: 43%;
          background:
            linear-gradient(90deg, transparent 0 47%, rgba(40, 190, 255, .65) 49%, transparent 51% 100%),
            repeating-linear-gradient(90deg, transparent 0 84px, rgba(0, 157, 255, .28) 86px, transparent 88px),
            repeating-linear-gradient(0deg, transparent 0 54px, rgba(0, 157, 255, .24) 56px, transparent 58px);
          transform: perspective(760px) rotateX(62deg) translateY(125px) scale(1.45);
          transform-origin: center bottom;
          opacity: .52;
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
          border: 1px solid rgba(0, 179, 255, .6);
          box-shadow: 0 0 38px rgba(0, 155, 255, .32), inset 0 0 38px rgba(0, 155, 255, .14);
        }

        .ks-floor::after {
          width: 36vw;
          height: 36vw;
          max-width: 560px;
          max-height: 560px;
          border: 1px solid rgba(0, 200, 255, .5);
          box-shadow: 0 0 28px rgba(0, 175, 255, .28), inset 0 0 28px rgba(0, 175, 255, .12);
        }

        .ks-scanline {
          z-index: -4;
          background: linear-gradient(180deg, transparent, rgba(68, 190, 255, .18), transparent);
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
          transform: translate(-50%, -50%);
          z-index: -2;
          opacity: .92;
          background:
            conic-gradient(
              from 0deg,
              transparent 0 8%,
              rgba(0, 159, 255, .95) 8% 11%,
              transparent 11% 18%,
              rgba(25, 205, 255, .82) 18% 21%,
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
          filter: drop-shadow(0 0 28px rgba(0, 151, 255, .82));
        }

        .ks-orbit::before {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: 999px;
          border: 1px solid rgba(0, 172, 255, .42);
          box-shadow:
            0 0 45px rgba(0, 151, 255, .3),
            inset 0 0 45px rgba(0, 151, 255, .15);
        }

        .ks-orbit::after {
          content: '';
          position: absolute;
          inset: 13%;
          border: 1px solid rgba(61, 190, 255, .45);
          border-radius: inherit;
          box-shadow:
            inset 0 0 65px rgba(0, 141, 255, .28),
            0 0 52px rgba(0, 141, 255, .24);
        }

        .ks-wrap {
          width: min(100%, 1560px);
          height: 100%;
          position: relative;
          z-index: 2;
        }

        /*
          ROBOT TIDAK DIPOTONG KAKU.
          Robot dibuat besar, lalu bagian bawah disamarkan pakai shadow hitam lembut.
        */
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
          height: 58%;
          transform: translateX(-50%);
          background:
            radial-gradient(ellipse 70% 60% at 50% 100%, rgba(2, 8, 20, 1) 0%, rgba(2, 8, 20, .96) 38%, rgba(2, 8, 20, .78) 60%, rgba(2, 8, 20, .38) 78%, transparent 92%),
            linear-gradient(180deg, transparent 0%, rgba(2, 8, 20, .88) 55%, rgba(2, 8, 20, 1) 100%);
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
          height: 38%;
          transform: translateX(-50%);
          background: radial-gradient(ellipse 65% 80% at 50% 95%, rgba(0, 0, 0, 1) 0%, rgba(2, 8, 20, .98) 30%, rgba(2, 8, 20, .85) 52%, rgba(2, 8, 20, .42) 72%, transparent 86%);
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
          background: radial-gradient(circle, rgba(0, 180, 255, .88), rgba(0, 100, 255, .32) 40%, transparent 68%);
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
            drop-shadow(0 0 36px rgba(0, 168, 255, .88))
            drop-shadow(0 0 72px rgba(0, 120, 255, .45))
            drop-shadow(0 42px 42px rgba(0,0,0,.62));
          mask-image: linear-gradient(to bottom, #000 0%, #000 52%, rgba(0,0,0,.55) 70%, rgba(0,0,0,.18) 82%, transparent 94%);
          -webkit-mask-image: linear-gradient(to bottom, #000 0%, #000 52%, rgba(0,0,0,.55) 70%, rgba(0,0,0,.18) 82%, transparent 94%);
          animation: ksFloat 5.5s ease-in-out infinite;
          transform: rotateX(var(--mx)) rotateY(var(--my));
          transition: transform .25s ease;
        }

        .ks-robot-placeholder {
          position: relative;
          z-index: 4;
          width: min(38vw, 590px);
          max-height: none;
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
          mask-image: linear-gradient(to bottom, #000 0%, #000 52%, rgba(0,0,0,.55) 70%, rgba(0,0,0,.18) 82%, transparent 94%);
          -webkit-mask-image: linear-gradient(to bottom, #000 0%, #000 52%, rgba(0,0,0,.55) 70%, rgba(0,0,0,.18) 82%, transparent 94%);
          animation: ksFloat 5.5s ease-in-out infinite;
        }

        .ks-robot-curtain {
          position: absolute;
          left: 50%;
          top: -8%;
          width: min(72vw, 900px);
          height: 115%;
          transform: translateX(-50%);
          z-index: 2;
          pointer-events: none;
          background:
            radial-gradient(ellipse 75% 80% at 50% 42%,
              transparent 0%,
              transparent 38%,
              rgba(0, 4, 14, .55) 58%,
              rgba(0, 4, 14, .82) 72%,
              rgba(0, 4, 14, .95) 88%,
              rgba(0, 4, 14, 1) 100%),
            radial-gradient(ellipse 100% 100% at 50% 50%,
              transparent 30%,
              rgba(0, 4, 14, .38) 62%,
              rgba(0, 4, 14, .78) 82%,
              rgba(0, 4, 14, .96) 100%);
        }

        .ks-robot-ground {
          position: absolute;
          left: 50%;
          bottom: -5%;
          width: min(55vw, 700px);
          height: 28%;
          transform: translateX(-50%);
          background:
            radial-gradient(ellipse 90% 55% at 50% 100%,
              rgba(0, 130, 255, .22) 0%,
              rgba(0, 80, 200, .12) 40%,
              transparent 72%),
            radial-gradient(ellipse 90% 100% at 50% 100%,
              rgba(2, 8, 22, 1) 0%,
              rgba(2, 8, 22, .96) 35%,
              rgba(2, 8, 22, .82) 56%,
              rgba(2, 8, 22, .38) 74%,
              transparent 90%);
          z-index: 5;
          pointer-events: none;
        }

        .ks-feature-grid {
          position: absolute;
          inset: 0;
          z-index: 5;
          pointer-events: none;
        }

        .ks-feature-card {
          position: absolute;
          width: min(28vw, 318px);
          min-height: 108px;
          display: grid;
          grid-template-columns: 58px 1fr;
          align-items: center;
          gap: .85rem;
          padding: 1rem 1.2rem;
          color: #eaf8ff;
          background: rgba(3, 12, 30, .88);
          border: 1px solid rgba(0, 140, 220, .36);
          border-radius: 10px;
          box-shadow:
            0 8px 40px rgba(0, 0, 0, .58),
            0 0 28px rgba(0, 80, 180, .18),
            inset 0 1px 0 rgba(0, 180, 255, .12);
          backdrop-filter: blur(20px);
          pointer-events: auto;
        }

        .ks-feature-card::before {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: 10px;
          background: linear-gradient(135deg, rgba(0, 140, 255, .06) 0%, transparent 50%);
          pointer-events: none;
        }

        .ks-feature-card::after {
          content: '';
          position: absolute;
          top: 0;
          left: 16px;
          right: 16px;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(0, 190, 255, .45), transparent);
          pointer-events: none;
        }

        .ks-feature-card-right {
          border-radius: 10px;
        }

        .ks-feature-content {
          position: relative;
          z-index: 2;
          min-width: 0;
        }

        .ks-feature-card h3 {
          margin: 0 0 .35rem;
          font-family: 'Inter', sans-serif;
          font-size: clamp(.82rem, .95vw, 1rem);
          line-height: 1.15;
          font-weight: 700;
          color: #ffffff;
          letter-spacing: -.01em;
        }

        .ks-feature-card p {
          margin: 0;
          font-size: clamp(.7rem, .8vw, .82rem);
          line-height: 1.52;
          font-weight: 400;
          color: rgba(180, 220, 255, .78);
        }

        .ks-feature-icon {
          position: relative;
          z-index: 2;
          width: 48px;
          height: 48px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 10px;
          color: #5ecfff;
          background: rgba(0, 80, 180, .38);
          border: 1px solid rgba(0, 160, 255, .38);
          box-shadow:
            inset 0 0 16px rgba(0, 160, 255, .18),
            0 0 18px rgba(0, 100, 220, .28);
          flex-shrink: 0;
        }

        .ks-feature-top-left {
          left: 5.2%;
          top: 21%;
        }

        .ks-feature-bottom-left {
          left: 5.2%;
          top: 41%;
        }

        .ks-feature-top-right {
          right: 5.2%;
          top: 21%;
        }

        .ks-feature-bottom-right {
          right: 5.2%;
          top: 41%;
        }

        .ks-copy {
          position: absolute;
          left: 50%;
          bottom: 3.1%;
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
          font-size: clamp(2.8rem, 5.2vw, 5.6rem);
          line-height: .92;
          font-weight: 400;
          letter-spacing: .04em;
          text-transform: uppercase;
        }

        .ks-title span {
          display: block;
          color: #f0f8ff;
          text-shadow:
            0 4px 0 rgba(0, 20, 60, .3),
            0 10px 28px rgba(0, 0, 0, .5);
        }

        .ks-title strong {
          display: block;
          color: #13b8ff;
          background: linear-gradient(180deg, #5ee0ff 0%, #0a9fff 48%, #025bff 100%);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          text-shadow: none;
          filter:
            drop-shadow(0 6px 0 rgba(0, 20, 90, .22))
            drop-shadow(0 0 28px rgba(0, 160, 255, .5));
        }

        .ks-kicker {
          margin: .65rem auto 0;
          font-size: clamp(1rem, 1.5vw, 1.5rem);
          line-height: 1.2;
          font-weight: 700;
          font-family: 'Inter', sans-serif;
          letter-spacing: -.01em;
          color: #8dd6ff;
          text-shadow: 0 0 18px rgba(0, 155, 255, .28);
        }

        .ks-subtitle {
          width: min(100%, 640px);
          margin: .45rem auto 0;
          color: rgba(200, 230, 255, .72);
          font-family: 'Inter', sans-serif;
          font-size: clamp(.78rem, .88vw, .92rem);
          font-weight: 400;
          line-height: 1.55;
        }

        .ks-bottom-row {
          width: min(100%, 900px);
          margin: .85rem auto 0;
          display: grid;
          grid-template-columns: 1fr auto 1fr;
          align-items: center;
          gap: 1.8rem;
        }

        .ks-stats {
          display: grid;
          grid-template-columns: repeat(2, minmax(120px, 1fr));
          border: 1px solid rgba(0, 165, 255, .52);
          border-radius: 13px;
          background: rgba(2, 14, 31, .7);
          box-shadow:
            inset 0 0 24px rgba(0, 132, 255, .08),
            0 0 28px rgba(0, 112, 255, .14);
          overflow: hidden;
          backdrop-filter: blur(16px);
        }

        .ks-stat-box {
          min-height: 58px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: .5rem .9rem;
          position: relative;
        }

        .ks-stat-box + .ks-stat-box::before {
          content: '';
          position: absolute;
          left: 0;
          top: 25%;
          bottom: 25%;
          width: 1px;
          background: linear-gradient(transparent, rgba(52, 213, 255, .72), transparent);
        }

        .ks-stat-box strong {
          font-size: clamp(1.1rem, 1.35vw, 1.42rem);
          line-height: 1;
          color: #1fb9ff;
          font-family: 'Inter', sans-serif;
          font-weight: 800;
          letter-spacing: -.04em;
          text-shadow: 0 0 18px rgba(0, 169, 255, .45);
        }

        .ks-stat-box span {
          margin-top: .28rem;
          font-size: .68rem;
          font-family: 'Inter', sans-serif;
          line-height: 1.2;
          color: rgba(180, 220, 255, .72);
          font-weight: 500;
          white-space: nowrap;
        }

        .ks-cta {
          min-width: 230px;
          height: 58px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: .8rem;
          padding: 0 1.8rem;
          border-radius: 999px;
          border: 1px solid rgba(83, 219, 255, .86);
          color: #fff;
          text-decoration: none;
          font-weight: 800;
          font-size: .95rem;
          background: linear-gradient(180deg, rgba(35, 197, 255, .92), rgba(0, 76, 220, .94));
          box-shadow:
            inset 0 1px 16px rgba(255,255,255,.2),
            0 0 24px rgba(0, 154, 255, .62),
            0 16px 30px rgba(0, 0, 0, .28);
          transition:
            transform .25s ease,
            box-shadow .25s ease;
        }

        .ks-cta:hover {
          transform: translateY(-3px);
          box-shadow:
            inset 0 1px 16px rgba(255,255,255,.25),
            0 0 34px rgba(0, 191, 255, .82),
            0 20px 34px rgba(0, 0, 0, .32);
        }

        .ks-cta svg {
          width: 18px;
          height: 18px;
          transition: transform .25s ease;
        }

        .ks-cta:hover svg {
          transform: translateX(4px);
        }

        @media (min-width: 981px) and (max-height: 820px) {
          .ks-hero {
            min-height: 620px;
            padding-top: 5.8rem;
            padding-bottom: 1rem;
          }

          .ks-robot-stage {
            top: 4.8%;
            height: 55%;
          }

          .ks-robot-stage::before {
            bottom: -12%;
            height: 38%;
          }

          .ks-robot-stage::after {
            bottom: -7%;
            height: 25%;
          }

          .ks-robot-img {
            width: min(35vw, 540px);
            margin-top: -10px;
          }

          .ks-robot-placeholder {
            width: min(35vw, 540px);
          }

          .ks-feature-card {
            width: min(29vw, 320px);
            min-height: 106px;
            grid-template-columns: 58px 1fr;
            padding: .85rem 1.15rem;
          }

          .ks-feature-icon {
            width: 50px;
            height: 50px;
          }

          .ks-feature-icon svg {
            width: 25px;
            height: 25px;
          }

          .ks-feature-card h3 {
            font-size: .9rem;
            margin-bottom: .28rem;
          }

          .ks-feature-card p {
            font-size: .75rem;
            line-height: 1.42;
          }

          .ks-feature-top-left,
          .ks-feature-top-right {
            top: 20%;
          }

          .ks-feature-bottom-left,
          .ks-feature-bottom-right {
            top: 38%;
          }

          .ks-title {
            font-size: clamp(3rem, 5.2vw, 5.45rem);
          }

          .ks-kicker {
            margin-top: .58rem;
            font-size: clamp(1.05rem, 1.45vw, 1.45rem);
          }

          .ks-subtitle {
            margin-top: .42rem;
            font-size: .84rem;
            line-height: 1.45;
          }

          .ks-bottom-row {
            margin-top: .7rem;
          }

          .ks-stat-box {
            min-height: 52px;
          }

          .ks-cta {
            height: 54px;
            min-width: 215px;
          }
        }

        @media (max-width: 1180px) {
          .ks-feature-card {
            width: min(35vw, 315px);
            min-height: 108px;
            grid-template-columns: 58px 1fr;
            padding: .95rem 1.15rem;
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

          .ks-feature-top-left,
          .ks-feature-top-right {
            top: 19%;
          }

          .ks-feature-bottom-left,
          .ks-feature-bottom-right {
            top: 37%;
          }
        }

        /* ─── TABLET (641px – 980px): robot kecil + feature grid 2-col di bawah ─── */
        @media (max-width: 980px) {
          .ks-hero {
            height: auto;
            min-height: 100vh;
            min-height: 100dvh;
            max-height: none;
            padding: 7rem 1rem 2rem;
            align-items: flex-start;
          }

          .ks-wrap {
            height: auto;
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 0;
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

          .ks-robot-stage::before {
            bottom: -8%;
            width: min(90vw, 580px);
            height: 32%;
          }

          .ks-robot-stage::after {
            bottom: -2%;
            width: min(78vw, 480px);
            height: 20%;
          }

          .ks-robot-img {
            width: min(68vw, 380px);
            margin-top: -5px;
          }

          .ks-robot-placeholder {
            width: min(68vw, 380px);
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
            clip-path: polygon(6% 0, 100% 0, 100% 84%, 94% 100%, 0 100%, 0 16%);
          }

          .ks-copy {
            position: relative;
            left: auto;
            bottom: auto;
            transform: none;
            margin-top: 1.2rem;
            width: 100%;
          }

          .ks-bottom-row {
            grid-template-columns: 1fr;
            gap: .85rem;
            width: min(100%, 480px);
            margin-top: .7rem;
          }

          .ks-bottom-row .ks-stats:first-child {
            order: 2;
          }

          .ks-bottom-row .ks-cta {
            order: 1;
            margin: 0 auto;
          }

          .ks-bottom-row .ks-stats:last-child {
            order: 3;
          }
        }

        /*
         * ════════════════════════════════════════════════════════════
         *  MOBILE (≤ 640px)
         *  Layout IDENTIK dengan desktop — robot tengah, kartu kiri-kanan,
         *  copy di bawah. Semua diskalakan proporsional pakai vw.
         * ════════════════════════════════════════════════════════════
         */
        @media (max-width: 640px) {

          /* Hero: pas tepat satu layar */
          .ks-hero {
            height: 100vh;
            height: 100dvh;
            min-height: 580px;
            max-height: unset;
            padding: 0;
            overflow: hidden;
          }

          /* Wrap: kontainer posisi absolut, sama seperti desktop */
          .ks-wrap {
            width: 100%;
            height: 100%;
            position: relative;
            display: block;     /* bukan flex — biarkan absolute positioning bekerja */
            padding: 0;
          }

          /* Dekorasi orbit & rings menyusut */
          .ks-orbit {
            width: 94vw;
            top: 36%;
          }

          .ks-rings {
            top: 32%;
            width: 90vw;
          }

          /* ── Robot: absolut di tengah, proporsional ── */
          .ks-robot-stage {
            position: absolute;
            left: 50%;
            top: 5%;
            transform: translateX(-50%);
            width: 100%;
            height: 56%;
            align-items: flex-start;
          }

          .ks-robot-stage::before {
            bottom: -10%;
            width: 80vw;
            height: 36%;
          }

          .ks-robot-stage::after {
            bottom: -4%;
            width: 64vw;
            height: 24%;
          }

          .ks-robot-img {
            width: min(52vw, 220px);
            margin-top: -4px;
          }

          .ks-robot-placeholder {
            width: min(52vw, 220px);
            font-size: clamp(5rem, 13vw, 9rem);
          }

          /* ── Feature cards: absolut kiri-kanan, versi desktop yang diskalakan ── */
          .ks-feature-grid {
            position: absolute;
            inset: 0;
            display: block;   /* tampilkan seperti desktop */
            z-index: 5;
            pointer-events: none;
          }

          .ks-feature-card,
          .ks-feature-card-right {
            position: absolute;
            width: min(41vw, 162px);
            min-height: unset;
            padding: .5rem .58rem;
            grid-template-columns: 30px 1fr;
            gap: .42rem;
            pointer-events: auto;
            clip-path: none;
            border-radius: 8px;
          }

          /* Posisi kartu — sama seperti desktop dalam persen */
          .ks-feature-top-left    { left: 1.5%; top: 17%; }
          .ks-feature-bottom-left { left: 1.5%; top: 39%; }
          .ks-feature-top-right   { right: 1.5%; top: 17%; }
          .ks-feature-bottom-right{ right: 1.5%; top: 39%; }

          .ks-feature-icon {
            width: 28px;
            height: 28px;
            border-radius: 6px;
          }

          .ks-feature-icon svg {
            width: 14px;
            height: 14px;
          }

          .ks-feature-card h3 {
            font-size: .64rem;
            margin-bottom: .16rem;
            line-height: 1.2;
          }

          .ks-feature-card p {
            font-size: .57rem;
            line-height: 1.38;
            display: -webkit-box;
            -webkit-line-clamp: 3;
            -webkit-box-orient: vertical;
            overflow: hidden;
          }

          /* ── Mobile feature strip: sembunyikan — pakai kartu asli ── */
          .ks-mobile-features {
            display: none;
          }

          /* ── Copy: absolut di bawah, persis seperti desktop ── */
          .ks-copy {
            position: absolute;
            left: 50%;
            bottom: 1.8%;
            transform: translateX(-50%);
            width: min(100%, 390px);
            text-align: center;
            padding: 0 .75rem;
            box-sizing: border-box;
            margin: 0;
          }

          .ks-title {
            font-size: clamp(2rem, 11.5vw, 3.4rem);
            line-height: .88;
            margin: 0;
          }

          .ks-kicker {
            font-size: clamp(.76rem, 3.3vw, .96rem);
            margin-top: .26rem;
            line-height: 1.2;
          }

          .ks-subtitle {
            font-size: clamp(.67rem, 2.8vw, .8rem);
            margin-top: .2rem;
            line-height: 1.42;
            width: 100%;
            color: rgba(200, 230, 255, .68);
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            overflow: hidden;
          }

          /* ── Bottom row: CTA penuh, dua stats kotak sejajar ── */
          .ks-bottom-row {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: .3rem;
            width: 100%;
            margin-top: .38rem;
          }

          .ks-bottom-row .ks-cta {
            grid-column: 1 / -1;
            order: 0;
            margin: 0;
            width: 100%;
            min-width: 0;
            height: 42px;
            font-size: .84rem;
          }

          .ks-bottom-row .ks-stats:first-child {
            order: 2;
            grid-column: 1;
          }

          .ks-bottom-row .ks-stats:last-child {
            order: 3;
            grid-column: 2;
          }

          .ks-stats {
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .ks-stat-box {
            min-height: 40px;
            padding: .28rem .35rem;
          }

          .ks-stat-box strong {
            font-size: clamp(.8rem, 3.4vw, .98rem);
          }

          .ks-stat-box span {
            font-size: .55rem;
            white-space: normal;
            text-align: center;
            line-height: 1.15;
          }
        }

        /* ─── VERY SMALL PHONES (≤ 390px) ─── */
        @media (max-width: 390px) {
          .ks-feature-card,
          .ks-feature-card-right {
            width: min(42vw, 158px);
            padding: .42rem .5rem;
            grid-template-columns: 26px 1fr;
            gap: .36rem;
          }

          .ks-feature-icon { width: 24px; height: 24px; }
          .ks-feature-icon svg { width: 12px; height: 12px; }
          .ks-feature-card h3 { font-size: .59rem; }
          .ks-feature-card p  { font-size: .52rem; }

          .ks-robot-img { width: min(50vw, 196px); }
          .ks-robot-placeholder { width: min(50vw, 196px); }

          .ks-title { font-size: clamp(1.85rem, 12vw, 3rem); }

          .ks-cta   { height: 38px; font-size: .78rem; }

          .ks-stat-box { min-height: 36px; padding: .22rem .28rem; }
          .ks-stat-box strong { font-size: .76rem; }
          .ks-stat-box span   { font-size: .5rem; }
        }

        /* ─── TALL PHONES (min-height 750px dvh) — lebih lega ─── */
        @media (max-width: 640px) and (min-height: 750px) {
          .ks-robot-img { width: min(54vw, 240px); }

          .ks-feature-card,
          .ks-feature-card-right {
            width: min(43vw, 172px);
            padding: .58rem .68rem;
          }

          .ks-feature-card h3 { font-size: .68rem; }
          .ks-feature-card p  { font-size: .6rem;  }

          .ks-cta       { height: 46px; }
          .ks-stat-box  { min-height: 44px; }
        }

        /* ─── LANDSCAPE PHONE — tinggi terbatas, izinkan scroll ─── */
        @media (max-width: 640px) and (max-height: 500px) {
          .ks-hero {
            height: auto;
            min-height: 520px;
            overflow-y: auto;
          }

          .ks-wrap { height: 520px; }
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
            <div className="ks-robot-curtain" />
            <div className="ks-robot-ground" />

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

            <div className="ks-bottom-row">
              <div className="ks-stats">
                <StatBox value={500} suffix="+" label="Klien Tercapai" />
                <StatBox value={98} suffix="%" label="Kepuasan Klien" />
              </div>

              <a href="#contact" className="ks-cta">
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

              <div className="ks-stats">
                <StatBox value={120} suffix="+" label="Proyek Sukses" />
                <StatBox value={10} suffix="+" label="Tahun Pengalaman" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProfessionalHero;