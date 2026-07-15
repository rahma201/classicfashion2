import { useEffect, useRef, useState } from "react";

/* ---------------- data ---------------- */

const HUB = { x: 320, y: 300, r: 112 };

const NODES = [
  { id: "factories", value: 20, label: "Factories", unit: "", x: 320, y: 78, icon: "factory" },
  { id: "textiles", value: 35, label: "BIA Textiles", unit: "Tons Fabric/Day", x: 508, y: 158, icon: "roll" },
  { id: "seamless", value: 10000, label: "Seamless", unit: "Garments/Day", x: 552, y: 340, icon: "yarn" },
  { id: "embroidery", value: 100000, label: "Embroidery", unit: "Garments/Day", x: 434, y: 498, icon: "hoop" },
  { id: "laundry", value: 85000, label: "Laundry · Wet&Dry", unit: "Garments/Day", x: 206, y: 498, icon: "washer" },
  { id: "print", value: 150000, label: "Printing", unit: "Garments/Day", x: 88, y: 340, icon: "printer" },
  { id: "laser", value: 100000, label: "Laser Cutting", unit: "Garments/Day", x: 132, y: 158, icon: "laser" },
] as const;

type IconName = (typeof NODES)[number]["icon"] | "shirt";

/* ---------------- icons ---------------- */

function Icon({ name }: { name: IconName }) {
  const p = {
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };
  switch (name) {
    case "factory":
      return <svg viewBox="0 0 24 24" {...p}><path d="M2 20h20M4 20V9l6 4V9l6 4V4h4v16" /></svg>;
    case "roll":
      return <svg viewBox="0 0 24 24" {...p}><path d="M3 17V8a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v9" /><circle cx="6" cy="17" r="3" /><path d="M9 17h12" /></svg>;
    case "yarn":
      return <svg viewBox="0 0 24 24" {...p}><circle cx="12" cy="12" r="8" /><path d="M5 8c4 1 10 1 14 0M5 16c4-1 10-1 14 0M12 4c-3 4-3 12 0 16" /></svg>;
    case "hoop":
      return <svg viewBox="0 0 24 24" {...p}><circle cx="12" cy="13" r="7" /><circle cx="12" cy="13" r="4.2" /><path d="M17 7l3-3M18.5 5.5l1.5 1.5" /></svg>;
    case "washer":
      return <svg viewBox="0 0 24 24" {...p}><rect x="4" y="3" width="16" height="18" rx="2.5" /><circle cx="12" cy="13" r="4.5" /><path d="M7.5 6h.01M10.5 6h.01" /></svg>;
    case "printer":
      return <svg viewBox="0 0 24 24" {...p}><path d="M6 9V3h12v6" /><path d="M6 17H4a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-2" /><rect x="6" y="14" width="12" height="7" /></svg>;
    case "laser":
      return <svg viewBox="0 0 24 24" {...p}><circle cx="6" cy="6" r="2.6" /><circle cx="6" cy="18" r="2.6" /><path d="M20 4 8.3 15.7M14.7 14.7 20 20M8.3 8.3 12 12" /></svg>;
    case "shirt":
      return <svg viewBox="0 0 24 24" {...p}><path d="M8 4 3 8l2.5 3L8 9.5V20h8V9.5l2.5 1.5L21 8l-5-4a4 4 0 0 1-8 0Z" /></svg>;
    default:
      return null;
  }
}

/* ---------------- count-up ---------------- */

function useCountUp(target: number, start: boolean, duration = 1800, interval = 5000) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!start) return;
    let raf: number;
    const t0 = performance.now();
    const tick = (t: number) => {
      const elapsed = (t - t0) % interval;
      const p = Math.min(elapsed / duration, 1);
      const e = 1 - Math.pow(1 - p, 4);
      setVal(Math.round(target * e));
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [start, target, duration, interval]);
  return val.toLocaleString("en-US");
}

function NodeCard({ node, start, delay }: { node: (typeof NODES)[number]; start: boolean; delay: number }) {
  const val = useCountUp(node.value, start);
  return (
    <div
      className={`cf-node ${start ? "show" : ""}`}
      style={{
        left: `${(node.x / 640) * 100}%`,
        top: `${(node.y / 600) * 100}%`,
        transitionDelay: `${delay}s`,
      }}
    >
      <span className="cf-node-icon"><Icon name={node.icon} /></span>
      <span className="cf-node-num">{val}</span>
      <span className="cf-node-lbl">{node.label}</span>
      {node.unit && <span className="cf-node-unit">{node.unit}</span>}
    </div>
  );
}

/* ---------------- main component ---------------- */

export default function ScaleMeetsPrecision() {
  const ref = useRef<HTMLElement>(null);
  const [inView, setInView] = useState(false);
  const hubVal = useCountUp(550000, inView, 2200);

  useEffect(() => {
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setInView(true);
          io.disconnect();
        }
      },
      { threshold: 0.25 }
    );
    if (ref.current) io.observe(ref.current);
    return () => io.disconnect();
  }, []);

  return (
    <section className="cf-numbers" ref={ref}>
      <div className="cf-wrap">
        {/* ---------- left : copy ---------- */}
        <div className={`cf-copy ${inView ? "show" : ""}`}>
          <span className="cf-eyebrow">
            <i />
            By the Numbers
          </span>
          <h2>
            Scale Meets <span>Precision</span>
          </h2>
          <p>
            Classic Fashion is a proud global corporation headquartered in
            Jordan. It is the largest apparel manufacturer in the MENA region,
            delivering unparalleled volume without compromising quality.
          </p>
          <a className="cf-cta" href="/who-we-are">
            Discover Our Story
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </a>
        </div>

        {/* ---------- right : glass hub ---------- */}
        <div className="cf-orbit">
          {/* connectors */}
          <svg className="cf-wires" viewBox="0 0 640 600" fill="none" aria-hidden="true">
            <defs>
              <linearGradient id="cf-wire" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0" stopColor="#e8912d" stopOpacity="0.55" />
                <stop offset="1" stopColor="#f3c777" stopOpacity="0.25" />
              </linearGradient>
            </defs>
            {NODES.map((n, i) => {
              const dx = n.x - HUB.x;
              const dy = n.y - HUB.y;
              const len = Math.hypot(dx, dy);
              const sx = HUB.x + (dx / len) * (HUB.r + 4);
              const sy = HUB.y + (dy / len) * (HUB.r + 4);
              const mx = (sx + n.x) / 2 + dy * 0.08;
              const my = (sy + n.y) / 2 - dx * 0.08;
              return (
                <g key={n.id} className={inView ? "cf-wire show" : "cf-wire"} style={{ transitionDelay: `${0.35 + i * 0.1}s` }}>
                  <path d={`M${sx} ${sy} Q${mx} ${my} ${n.x} ${n.y}`} stroke="url(#cf-wire)" strokeWidth="1.5" />
                  <circle cx={mx} cy={my} r="3.2" fill="#e8912d">
                    <animate attributeName="opacity" values="0.9;0.3;0.9" dur="2.4s" begin={`${i * 0.3}s`} repeatCount="indefinite" />
                  </circle>
                </g>
              );
            })}
          </svg>

          {/* central hub */}
          <div
            className={`cf-hub ${inView ? "show" : ""}`}
            style={{ left: `${(HUB.x / 640) * 100}%`, top: `${(HUB.y / 600) * 100}%` }}
          >
            <span className="cf-ring" aria-hidden="true" />
            <span className="cf-hub-icon"><Icon name="shirt" /></span>
            <span className="cf-hub-num">{hubVal}+</span>
            <span className="cf-hub-unit">Garments / Day</span>
          </div>

          {/* stat nodes */}
          {NODES.map((n, i) => (
            <NodeCard key={n.id} node={n} start={inView} delay={0.45 + i * 0.1} />
          ))}
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .cf-numbers {
          --cream-1: #f8efda;
          --cream-2: #f2e2bd;
          --ink: #3a2c18;
          --brown: #6b5433;
          --orange: #e8912d;
          --orange-2: #d97a14;
          position: relative;
          overflow: hidden;
          padding: 100px 24px 120px;
          font-family: inherit;
        }
        .cf-wrap {
          max-width: 1240px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: minmax(320px, 0.9fr) 1.1fr;
          gap: 48px;
          align-items: center;
          position: relative;
          z-index: 1;
        }

        /* ----- copy ----- */
        .cf-copy {
          opacity: 0;
          transform: translateY(24px);
          transition: opacity 0.7s ease, transform 0.7s ease;
        }
        .cf-copy.show {
          opacity: 1;
          transform: none;
        }
        .cf-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.24em;
          text-transform: uppercase;
          color: var(--orange-2);
          margin-bottom: 20px;
        }
        .cf-eyebrow i {
          width: 34px;
          height: 2px;
          background: var(--orange);
          border-radius: 2px;
        }
        .cf-numbers h2 {
          font-family: var(--font-display, inherit);
          font-size: clamp(38px, 4.6vw, 58px);
          line-height: 1.05;
          letter-spacing: -0.02em;
          font-weight: 800;
          color: var(--ink);
          margin: 0 0 20px;
        }
        .cf-numbers h2 span {
          display: inline-block;
          background: linear-gradient(92deg, var(--orange), #f3b25c);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          position: relative;
        }
        .cf-numbers h2 span::after {
          content: "";
          position: absolute;
          left: 2px;
          right: 2px;
          bottom: 4px;
          height: 10px;
          background: rgba(232, 145, 45, 0.22);
          border-radius: 6px;
          z-index: -1;
        }
        .cf-copy p {
          color: var(--brown);
          font-size: 16px;
          line-height: 1.75;
          max-width: 420px;
          margin: 0 0 30px;
        }
        .cf-cta {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          font-size: 14px;
          font-weight: 700;
          letter-spacing: 0.04em;
          color: #fff;
          text-decoration: none;
          background: linear-gradient(135deg, #2e2415, #4a3a20);
          padding: 16px 30px;
          border-radius: 100px;
          box-shadow: 0 10px 24px -8px rgba(58, 44, 24, 0.5);
          transition: transform 0.25s ease, box-shadow 0.25s ease, background 0.25s ease;
        }
        .cf-cta svg {
          width: 16px;
          height: 16px;
          transition: transform 0.25s ease;
        }
        .cf-cta:hover {
          transform: translateY(-2px);
          background: linear-gradient(135deg, var(--orange-2), var(--orange));
          box-shadow: 0 14px 30px -8px rgba(232, 145, 45, 0.55);
        }
        .cf-cta:hover svg {
          transform: translateX(4px);
        }

        /* ----- orbit ----- */
        .cf-orbit {
          position: relative;
          width: 100%;
          aspect-ratio: 640 / 600;
          max-width: 660px;
          justify-self: end;
        }
        .cf-wires {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
        }
        .cf-wires .cf-wire {
          opacity: 0;
          transition: opacity 0.8s ease;
        }
        .cf-wires .cf-wire.show {
          opacity: 1;
        }

        /* ----- hub ----- */
        .cf-hub {
          position: absolute;
          transform: translate(-50%, -50%) scale(0.8);
          width: 232px;
          height: 232px;
          border-radius: 50%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 4px;
          text-align: center;
          background: linear-gradient(160deg, rgba(255, 252, 244, 0.85), rgba(255, 243, 219, 0.55));
          border: 1px solid rgba(255, 255, 255, 0.8);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          box-shadow:
            0 24px 60px -18px rgba(120, 84, 30, 0.35),
            inset 0 1px 0 rgba(255, 255, 255, 0.9);
          opacity: 0;
          transition: opacity 0.7s ease 0.15s, transform 0.7s cubic-bezier(0.22, 0.9, 0.3, 1.3) 0.15s;
          z-index: 3;
        }
        .cf-hub.show {
          opacity: 1;
          transform: translate(-50%, -50%) scale(1);
        }
        .cf-ring {
          position: absolute;
          inset: -14px;
          border-radius: 50%;
          border: 3px solid transparent;
          background:
            linear-gradient(#0000, #0000) padding-box,
            conic-gradient(from 0deg, rgba(232, 145, 45, 0), rgba(243, 178, 92, 0.45), rgba(232, 145, 45, 0.55), rgba(232, 145, 45, 0)) border-box;
          animation: cf-spin 7s linear infinite;
          filter: drop-shadow(0 0 10px rgba(232, 145, 45, 0.3));
        }
        @keyframes cf-spin {
          to {
            transform: rotate(360deg);
          }
        }
        .cf-hub-icon {
          display: grid;
          place-items: center;
          width: 46px;
          height: 46px;
          border-radius: 50%;
          color: var(--orange-2);
          background: rgba(255, 255, 255, 0.7);
          border: 1px solid rgba(232, 145, 45, 0.35);
          margin-bottom: 4px;
        }
        .cf-hub-icon svg {
          width: 22px;
          height: 22px;
        }
        .cf-hub-num {
          font-family: var(--font-display, inherit);
          font-size: 40px;
          font-weight: 800;
          letter-spacing: -0.02em;
          color: var(--ink);
          font-variant-numeric: tabular-nums;
          line-height: 1;
        }
        .cf-hub-unit {
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.26em;
          text-transform: uppercase;
          color: #a07d4a;
        }

        /* ----- nodes ----- */
        .cf-node {
          position: absolute;
          transform: translate(-50%, -50%) scale(0.7);
          width: clamp(92px, 26vw, 128px);
          padding: 14px 10px 12px;
          text-align: center;
          border-radius: 20px;
          background: linear-gradient(160deg, rgba(255, 252, 245, 0.72), rgba(255, 245, 224, 0.38));
          border: 1px solid rgba(255, 255, 255, 0.75);
          box-shadow:
            0 10px 30px -12px rgba(120, 84, 30, 0.25),
            inset 0 1px 0 rgba(255, 255, 255, 0.9);
          backdrop-filter: blur(14px);
          -webkit-backdrop-filter: blur(14px);
          opacity: 0;
          transition: opacity 0.55s ease, transform 0.55s cubic-bezier(0.22, 0.9, 0.3, 1.4);
          z-index: 2;
        }
        .cf-node.show {
          opacity: 1;
          transform: translate(-50%, -50%) scale(1);
        }
        .cf-node:hover {
          transform: translate(-50%, -52%) scale(1.05);
          box-shadow: 0 18px 40px -14px rgba(232, 145, 45, 0.45);
        }
        .cf-node-icon {
          display: inline-grid;
          place-items: center;
          width: 38px;
          height: 38px;
          border-radius: 12px;
          color: #8a5a1e;
          background: rgba(255, 255, 255, 0.65);
          border: 1px solid rgba(232, 145, 45, 0.35);
          margin-bottom: 8px;
        }
        .cf-node-icon svg {
          width: 19px;
          height: 19px;
        }
        .cf-node-num {
          display: block;
          font-family: var(--font-display, inherit);
          font-size: 21px;
          font-weight: 700;
          letter-spacing: -0.01em;
          color: #3a2c18;
          font-variant-numeric: tabular-nums;
        }
        .cf-node-unit {
          display: block;
          font-size: 8.5px;
          font-weight: 600;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: #a07d4a;
          margin-top: 2px;
        }
        .cf-node-lbl {
          display: block;
          font-size: 11.5px;
          font-weight: 600;
          color: #6b5433;
          margin-top: 2px;
        }

        /* ----- responsive ----- */
        @media (max-width: 1080px) {
          .cf-wrap {
            grid-template-columns: 1fr;
            gap: 20px;
          }
          .cf-orbit {
            justify-self: center;
          }
          .cf-copy {
            text-align: center;
          }
          .cf-copy p {
            margin-left: auto;
            margin-right: auto;
          }
        }
        @media (max-width: 560px) {
          .cf-numbers {
            padding: 70px 14px 90px;
          }
          .cf-orbit {
            aspect-ratio: 640 / 640;
          }
          .cf-hub {
            width: 168px;
            height: 168px;
          }
          .cf-hub-num {
            font-size: 28px;
          }
          .cf-node {
            padding: 10px 8px 9px;
          }
          .cf-node-icon {
            width: 32px;
            height: 32px;
            margin-bottom: 6px;
          }
          .cf-node-icon svg {
            width: 16px;
            height: 16px;
          }
          .cf-node-num {
            font-size: 18px;
          }
          .cf-node-lbl {
            font-size: 10.5px;
          }
        }
      `}} />
    </section>
  );
}
