import { motion } from "framer-motion";

interface PageHeroProps {
  title: string;
  subtitle?: string;
  image: string;
  overlay?: string;
  imagePosition?: string;
  height?: string;
  centerLogo?: string;
}

export function PageHero({
  title,
  subtitle,
  image,
  overlay = "bg-gradient-to-b from-brand-navy/35 via-brand-navy/25 to-brand-navy/45",
  imagePosition = "center",
  height = "min-h-[60vh]",
  centerLogo ="/images/heroes/homepage_1783290884398.svg"
,
}: PageHeroProps) {
  const backgroundImageUrl = encodeURI(image);

  return (
    <section
      className={`relative ${height} flex items-center justify-center overflow-hidden`}
      aria-label={`${title} hero`}
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-no-repeat scale-105"
        style={{
          backgroundImage: `url("${backgroundImageUrl}")`,
          backgroundPosition: imagePosition,
        }}
        role="img"
        aria-hidden="true"
      />
      {/* Colour overlay */}
      <div className={`absolute inset-0 ${overlay}`} aria-hidden="true" />
      {/* Subtle grain */}
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto pt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75 }}
        >
          {/* Centered fingerprint/logo - only if provided */}
          {centerLogo && (
            <div className="flex justify-center mb-8">
              <img
                src={centerLogo}
                alt="Classic Fashion"
                className="h-24 md:h-28 w-auto drop-shadow-2xl opacity-95"
              />
            </div>
          )}

          {/* Eyebrow divider */}
          {centerLogo && (
            <div
              className="flex items-center justify-center gap-3 mb-6"
              aria-hidden="true"
            >
              <div className="h-px w-10 bg-brand-coral/70" />
              <div className="w-1.5 h-1.5 rounded-full bg-brand-coral" />
              <div className="h-px w-10 bg-brand-coral/70" />
            </div>
          )}

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight tracking-tight drop-shadow-lg">
            {title}
          </h1>

          {subtitle && (
            <p className="mt-5 text-lg md:text-xl text-white/70 max-w-2xl mx-auto leading-relaxed font-light">
              {subtitle}
            </p>
          )}
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black/20 to-transparent"
        aria-hidden="true"
      />
    </section>
  );
}
