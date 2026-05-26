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
        href="https://fonts.googleapis.com/css2?family=Orbitron:wght@700;800;900&family=Rajdhani:wght@600;700&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap"
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
            radial-gradient(circle at 50% 30%, rgba(0, 126, 255, .32), transparent 31%),
            linear-gradient(180deg, #020816 0%, #030b17 48%, #020611 100%);
          font-family: 'Plus Jakarta Sans', sans-serif;
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
          filter: brightness(.42) saturate(1.35) contrast(1.12);
        }

        .ks-bg-layer {
          z-index: -7;
          background:
            radial-gradient(ellipse 55% 48% at 50% 22%, rgba(0, 140, 255, .62), transparent 100%),
            radial-gradient(circle at 50% 65%, rgba(0, 174, 255, .28), transparent 38%),
            radial-gradient(circle at 10% 42%, rgba(0, 120, 255, .18), transparent 26%),
            radial-gradient(circle at 90% 42%, rgba(0, 120, 255, .18), transparent 26%),
            linear-gradient(90deg, rgba(0,0,0,.78), transparent 28%, transparent 72%, rgba(0,0,0,.78));
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
          width: min(30vw, 340px);
          min-height: 118px;
          display: grid;
          grid-template-columns: 66px 1fr;
          align-items: center;
          gap: 1rem;
          padding: 1.05rem 1.45rem;
          color: #eaf8ff;
          background:
            linear-gradient(135deg, rgba(4, 22, 48, .96), rgba(4, 44, 82, .84)),
            radial-gradient(circle at 14% 50%, rgba(50, 214, 255, .22), transparent 42%);
          border: 1px solid rgba(0, 174, 255, .82);
          box-shadow:
            inset 0 0 32px rgba(0, 168, 255, .18),
            0 0 42px rgba(0, 102, 210, .26),
            0 4px 24px rgba(0, 0, 0, .36);
          clip-path: polygon(8% 0, 100% 0, 100% 76%, 91% 100%, 0 100%, 0 18%);
          backdrop-filter: blur(18px);
          pointer-events: auto;
        }

        .ks-feature-card::before {
          content: '';
          position: absolute;
          inset: 0;
          background:
            linear-gradient(90deg, rgba(37, 190, 255, .75), transparent 24%, transparent 76%, rgba(37, 190, 255, .75)) top / 100% 1px no-repeat,
            linear-gradient(90deg, transparent, rgba(61, 213, 255, .16), transparent);
          background-size: 100% 1px, 180px 100%;
          animation: ksLineMove 4s linear infinite;
          pointer-events: none;
        }

        .ks-feature-card::after {
          content: '';
          position: absolute;
          inset: 8px 10px;
          border-top: 1px solid rgba(96, 220, 255, .18);
          border-bottom: 1px solid rgba(96, 220, 255, .14);
          clip-path: polygon(
            0 0,
            24% 0,
            24% 1px,
            0 1px,
            0 100%,
            100% 100%,
            100% calc(100% - 1px),
            78% calc(100% - 1px),
            78% 100%,
            0 100%
          );
          pointer-events: none;
        }

        .ks-feature-card-right {
          clip-path: polygon(0 0, 92% 0, 100% 18%, 100% 100%, 9% 100%, 0 76%);
        }

        .ks-feature-content {
          position: relative;
          z-index: 2;
          min-width: 0;
        }

        .ks-feature-card h3 {
          margin: 0 0 .4rem;
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: clamp(.88rem, 1vw, 1.04rem);
          line-height: 1.12;
          font-weight: 800;
          color: #ffffff;
          letter-spacing: -.025em;
          text-shadow:
            0 0 14px rgba(109, 223, 255, .34),
            0 2px 10px rgba(0, 0, 0, .35);
        }

        .ks-feature-card p {
          margin: 0;
          font-size: clamp(.72rem, .86vw, .86rem);
          line-height: 1.48;
          font-weight: 600;
          color: rgba(224, 244, 255, .84);
          text-shadow: 0 1px 10px rgba(0, 0, 0, .28);
        }

        .ks-feature-icon {
          position: relative;
          z-index: 2;
          width: 54px;
          height: 54px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 999px;
          color: #82eaff;
          background: radial-gradient(circle at 40% 35%, rgba(88, 218, 255, .42), rgba(0, 89, 220, .48));
          border: 1px solid rgba(80, 209, 255, .55);
          box-shadow:
            inset 0 0 22px rgba(74, 201, 255, .28),
            0 0 32px rgba(0, 117, 255, .42);
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
          font-family: 'Orbitron', 'Rajdhani', 'Plus Jakarta Sans', sans-serif;
          font-size: clamp(3.2rem, 5.8vw, 6.1rem);
          line-height: .86;
          font-weight: 900;
          letter-spacing: .018em;
          text-transform: uppercase;
        }

        .ks-title span {
          display: block;
          color: #f5fbff;
          text-shadow:
            0 7px 0 rgba(0, 38, 87, .26),
            0 14px 26px rgba(0, 0, 0, .42),
            0 0 24px rgba(196, 238, 255, .34);
        }

        .ks-title strong {
          display: block;
          color: #13b8ff;
          background: linear-gradient(180deg, #39dbff 0%, #078dff 56%, #035cff 100%);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          text-shadow: none;
          filter:
            drop-shadow(0 8px 0 rgba(0, 23, 103, .18))
            drop-shadow(0 0 26px rgba(0, 166, 255, .55));
        }

        .ks-kicker {
          margin: .78rem auto 0;
          font-size: clamp(1.18rem, 1.7vw, 1.72rem);
          line-height: 1.2;
          font-weight: 700;
          letter-spacing: -.02em;
          color: #a7e9ff;
          text-shadow: 0 0 18px rgba(0, 165, 255, .3);
        }

        .ks-subtitle {
          width: min(100%, 690px);
          margin: .55rem auto 0;
          color: rgba(239, 249, 255, .88);
          font-size: clamp(.82rem, .92vw, .98rem);
          font-weight: 500;
          line-height: 1.5;
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
          font-size: clamp(1.18rem, 1.45vw, 1.5rem);
          line-height: 1;
          color: #1fb9ff;
          font-weight: 900;
          letter-spacing: -.04em;
          text-shadow: 0 0 18px rgba(0, 169, 255, .45);
        }

        .ks-stat-box span {
          margin-top: .32rem;
          font-size: .72rem;
          line-height: 1.2;
          color: rgba(218, 241, 255, .78);
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

        @media (max-width: 980px) {
          .ks-hero {
            height: auto;
            min-height: 100vh;
            max-height: none;
            padding: 7.5rem 1rem 2.5rem;
          }

          .ks-wrap {
            height: auto;
          }

          .ks-orbit {
            width: min(88vw, 650px);
            top: 25rem;
          }

          .ks-robot-stage {
            position: relative;
            left: auto;
            top: auto;
            width: 100%;
            height: 520px;
            transform: none;
            align-items: flex-start;
          }

          .ks-robot-stage::before {
            bottom: -8%;
            width: min(90vw, 640px);
            height: 32%;
          }

          .ks-robot-stage::after {
            bottom: -2%;
            width: min(78vw, 540px);
            height: 20%;
          }

          .ks-robot-img {
            width: min(86vw, 500px);
            margin-top: -5px;
          }

          .ks-robot-placeholder {
            width: min(86vw, 500px);
          }

          .ks-feature-grid {
            position: relative;
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: .9rem;
            margin-top: 1rem;
          }

          .ks-feature-card,
          .ks-feature-card-right {
            position: relative;
            inset: auto;
            width: 100%;
            min-height: 126px;
            clip-path: polygon(7% 0, 100% 0, 100% 82%, 93% 100%, 0 100%, 0 18%);
          }

          .ks-copy {
            position: relative;
            left: auto;
            bottom: auto;
            transform: none;
            margin-top: 1.4rem;
          }

          .ks-bottom-row {
            grid-template-columns: 1fr;
            gap: 1rem;
            width: min(100%, 520px);
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

        @media (max-width: 640px) {
          .ks-hero {
            min-height: auto;
            padding: 6.5rem 1rem 2.5rem;
          }

          .ks-robot-stage {
            height: 400px;
          }

          .ks-robot-stage::before {
            bottom: -9%;
            height: 34%;
          }

          .ks-robot-stage::after {
            bottom: -4%;
            height: 22%;
          }

          .ks-robot-img {
            width: min(105vw, 390px);
          }

          .ks-robot-placeholder {
            width: min(105vw, 390px);
          }

          .ks-feature-grid {
            grid-template-columns: 1fr;
          }

          .ks-feature-card {
            grid-template-columns: 58px 1fr;
            min-height: 108px;
            padding: 1rem;
          }

          .ks-feature-icon {
            width: 50px;
            height: 50px;
          }

          .ks-feature-icon svg {
            width: 25px;
            height: 25px;
          }

          .ks-title {
            font-size: clamp(2.45rem, 13vw, 4rem);
          }

          .ks-kicker {
            font-size: 1.22rem;
          }

          .ks-subtitle {
            font-size: .88rem;
          }

          .ks-stats {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .ks-stat-box {
            min-height: 68px;
            padding: .55rem .7rem;
          }

          .ks-stat-box span {
            font-size: .68rem;
            white-space: normal;
            text-align: center;
          }

          .ks-cta {
            width: 100%;
            min-width: 0;
            height: 60px;
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