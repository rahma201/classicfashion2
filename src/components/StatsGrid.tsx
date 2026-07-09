import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Factory, Droplets, Printer, Shirt, Scissors, PenTool, Activity } from 'lucide-react';

const stats = [
  { icon: Factory, label: '20 Factories', value: 550000, unit: 'Garments/Day', hero: true },
  { icon: Activity, label: 'BIA Textiles', value: 35, unit: 'Tons Fabric/Day' },
  { icon: Printer, label: 'Printing', value: 150000, unit: 'Garments/Day' },
  { icon: Droplets, label: 'Laundry', value: 85000, unit: 'Garments/Day (Wet & Dry)' },
  { icon: Scissors, label: 'Laser Cutting', value: 100000, unit: 'Garments/Day' },
  { icon: PenTool, label: 'Embroidery', value: 100000, unit: 'Garments/Day' },
  { icon: Shirt, label: 'Seamless Garments', value: 10000, unit: 'Garments/Day' },
];

const accents = [
  { badge: 'from-brand-coral/15 to-brand-coral/5 text-brand-coral ring-brand-coral/20', glow: 'rgba(163,61,35,0.14)' },
  { badge: 'from-brand-teal/15 to-brand-teal/5 text-brand-teal ring-brand-teal/20', glow: 'rgba(44,158,143,0.14)' },
  { badge: 'from-brand-orange/15 to-brand-orange/5 text-brand-orange ring-brand-orange/25', glow: 'rgba(245,172,27,0.16)' },
];

function useCountUp(target: number, active: boolean, duration = 1400) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!active) return;
    let raf: number;
    const start = performance.now();

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(target * eased));
      if (progress < 1) raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [active, target, duration]);

  return value;
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24, scale: 0.96 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.55, ease: 'easeOut' as const } },
};

function HeroTile({ stat, active }: { stat: (typeof stats)[number]; active: boolean }) {
  const count = useCountUp(stat.value, active, 1800);
  const Icon = stat.icon;

  return (
    <motion.div
      variants={itemVariants}
      whileHover={{ y: -6 }}
      className="group relative col-span-2 row-span-2 overflow-hidden rounded-3xl p-9 md:p-12 flex flex-col justify-between shadow-[0_30px_80px_rgba(56,42,23,0.35)] ring-1 ring-brand-orange/20"
      style={{
        background: 'linear-gradient(150deg, #382a17 0%, #4a3620 45%, #a33d23 130%)',
      }}
    >
      <Icon
        aria-hidden="true"
        size={280}
        strokeWidth={1}
        className="pointer-events-none absolute -right-12 -bottom-12 text-white/[0.07] transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6"
      />
      <div
        className="pointer-events-none absolute -left-16 -top-16 h-64 w-64 rounded-full opacity-70 blur-3xl"
        style={{ background: 'radial-gradient(circle, rgba(245,172,27,0.3), transparent 70%)' }}
      />
      <div
        className="pointer-events-none absolute -right-10 top-1/3 h-40 w-40 rounded-full opacity-40 blur-3xl"
        style={{ background: 'radial-gradient(circle, rgba(44,158,143,0.35), transparent 70%)' }}
      />

      <div className="relative z-10 flex items-center justify-between">
        <span className="text-[11px] md:text-xs font-bold uppercase tracking-[0.3em] text-white/60">
          {stat.label}
        </span>
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-orange/25 to-brand-orange/5 ring-1 ring-brand-orange/30">
          <Icon size={24} className="text-brand-orange" />
        </div>
      </div>

      <div className="relative z-10">
        <div className="font-display text-6xl md:text-8xl font-black leading-none text-white tabular-nums">
          {count.toLocaleString()}
          <span className="text-brand-orange">+</span>
        </div>
        <div className="mt-4 flex items-center gap-2">
          <span className="h-px w-8 bg-brand-orange/60" />
          <span className="text-sm md:text-base font-semibold uppercase tracking-widest text-white/70">
            {stat.unit}
          </span>
        </div>
      </div>
    </motion.div>
  );
}

function StatTile({
  stat,
  active,
  accent,
}: {
  stat: (typeof stats)[number];
  active: boolean;
  accent: (typeof accents)[number];
}) {
  const count = useCountUp(stat.value, active);
  const Icon = stat.icon;

  return (
    <motion.div
      variants={itemVariants}
      whileHover={{ y: -4 }}
      className="group relative overflow-hidden rounded-2xl border border-brand-beige-300/50 bg-white/70 p-5 backdrop-blur-sm shadow-[0_10px_30px_rgba(56,42,23,0.06)] transition-all hover:shadow-[0_18px_40px_rgba(56,42,23,0.14)]"
    >
      <div
        className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{ background: `radial-gradient(circle, ${accent.glow}, transparent 70%)` }}
      />
      <div className={`relative z-10 inline-flex rounded-xl bg-gradient-to-br p-2.5 ring-1 ${accent.badge}`}>
        <Icon size={20} />
      </div>
      <div className="relative z-10 mt-4 font-display text-2xl font-black tabular-nums text-brand-beige-900">
        {count.toLocaleString()}
      </div>
      <div className="relative z-10 text-[11px] font-bold uppercase tracking-widest text-brand-beige-600 mt-0.5">
        {stat.unit}
      </div>
      <div className="relative z-10 text-xs font-semibold text-brand-beige-600/80 mt-2">{stat.label}</div>
    </motion.div>
  );
}

export function StatsGrid() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  const [hero, ...rest] = stats;
  let accentIdx = 0;

  return (
    <motion.div
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      className="grid grid-cols-2 sm:grid-cols-4 gap-4"
    >
      <HeroTile stat={hero} active={inView} />
      {rest.map((stat, idx) => {
        const accent = accents[accentIdx % accents.length];
        accentIdx += 1;
        return <StatTile key={idx} stat={stat} active={inView} accent={accent} />;
      })}
    </motion.div>
  );
}
