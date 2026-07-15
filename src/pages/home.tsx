import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import ScaleMeetsPrecision from "@/components/ScaleMeetsPrecision";
import PetraLineArt from "@/components/PetraLineArt";
import { WorldMap } from "@/components/WorldMap";
import { BlogCard } from "@/components/BlogCard";
import { FaqSection, type FaqItem } from "@/components/FaqSection";
import ShinyText from "@/components/ui/shiny-text";
import { FingerprintMark } from "@/components/ui/fingerprint-mark";
import { Instagram, Facebook, Youtube, Linkedin, Crown } from "lucide-react";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const partners = [
  { name: "Adidas", file: "adidas.png" },
  { name: "Under Armour", file: "under-armour.png" },
  { name: "Fabletics", file: "fabletics.png" },
  { name: "Victoria's Secret", file: "victorias-secret.png" },
  { name: "Walmart", file: "walmart.png" },
  { name: "American Eagle", file: "american-eagle.png" },
  { name: "Michael Kors", file: "michael-kors.png" },
  { name: "Gap", file: "gap.png" },
  { name: "Zaecy", file: "zaecy.png" },
];

const faqs: FaqItem[] = [
  {
    q: "What is Classic Fashion?",
    a: "Classic Fashion Apparel Industry Ltd. Co. is the largest apparel manufacturer in the MENA region, producing 550,000 garments per day with a workforce of 36,000+ people from its headquarters in Jordan.",
  },
  {
    q: "Where is Classic Fashion located?",
    a: "Classic Fashion is headquartered at the Al Hassan Industrial Estate in Ramtha, Irbid, Jordan, operating 12 main factories and 8+ satellite units, with a sourcing and export network spanning the USA, Egypt, China, India, and Bangladesh.",
  },
  {
    q: "What does Classic Fashion manufacture?",
    a: "Classic Fashion manufactures a full range of apparel for global fashion brands — including T-shirts, activewear, outerwear, denim, knitwear, seamless garments, and embroidered items — through a vertically integrated supply chain from fabric to finished garment.",
  },
  {
    q: "How many garments does Classic Fashion produce per day?",
    a: "Classic Fashion produces 550,000 garments per day across its 20 factories, supported by in-house capabilities including printing, laser cutting, embroidery, and laundry finishing.",
  },
  {
    q: "How can global brands request a quote?",
    a: "Global brands can request a quote by completing the RFQ form on our Contact page, or by emailing info@classicfashion.com. Our sales team typically responds within 24–48 business hours.",
  },
  {
    q: "What makes Classic Fashion different from other garment manufacturers?",
    a: "Classic Fashion combines the scale of MENA's largest apparel manufacturer with vertical integration, in-house fabric production, on-site client QC labs, and measurable sustainability commitments — including 130,000 m² of solar installations and multiple GOTS, OEKO-TEX, and ISO certifications.",
  },
];

export default function Home() {
  const partnerSlides = [...partners, ...partners];
  const heroVideoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (heroVideoRef.current) {
      heroVideoRef.current.playbackRate = 0.5;
    }
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        <video
          ref={heroVideoRef}
          className="absolute inset-0 z-0 h-full w-full object-cover"
          src="https://ik.imagekit.io/oq92dh6zib/classicfashion-hero-video.mp4"
          poster="/images/heroes/home-hero.png"
          autoPlay
          loop
          muted
          playsInline
        />

        {/* Gradient overlay — dark at top for text contrast, fading down into the beige tone that opens the World Map section below */}
        <div
          aria-hidden="true"
          className="absolute inset-0 z-1 backdrop-blur-sm"
          style={{
            background:
              'linear-gradient(180deg, rgba(14,48,60,0.32) 32%, rgba(14,48,60,0.18) 52%, rgba(251,247,239,0.5) 80%, #fbf7ef 100%)', // matches CTA palette base
          }}
        />

        {/* Hero Content */}
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <motion.div
            aria-hidden="true"
            className="pointer-events-none select-none mx-auto h-32 w-auto text-brand-beige-50 md:h-32"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: [0, -16, 0], rotate: [0, 2, 0, -2, 0] }}
            transition={{
              opacity: { duration: 0.8 },
              y: { duration: 5, repeat: Infinity, ease: "easeInOut" },
              rotate: { duration: 8, repeat: Infinity, ease: "easeInOut" },
            }}
          >
            <FingerprintMark className="mx-auto h-full w-auto drop-shadow-[0_12px_26px_rgba(14,48,60,0.45)]" />
          </motion.div>

          <div className="relative px-6 py-12 md:px-16 md:py-4 overflow-hidden">

            <div className="pointer-events-none absolute inset-0 " />

            {/* giant decorative quote mark */}
            <span
              aria-hidden="true"
              className="pointer-events-none absolute -top-6 left-1/2 -translate-x-1/2 font-display text-[9rem] md:text-[12rem] leading-none text-brand-orange/10 select-none"
            >
              
            </span>

            <motion.p
              initial={{ opacity: 0, y: -14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="relative mb-6"
            >
              <ShinyText
                text={'"A touch changes everything"'}
                color="#fbf7ef"
                colors={["#F5AC1B", "#E77051", "#2C9E8F"]}
                speed={2}
                spread={110}
                startDelay={0}
                delay={7.5}
                className="font-display italic text-2xl md:text-4xl font-light tracking-wide align-baseline"
              />
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.15 }}
              className="relative mb-8 flex flex-col items-center"
            >
              <ShinyText
                text="Classic Fashion is an integrated giant"
                color="#fbf7ef"
                colors={["#F5AC1B", "#E77051", "#2C9E8F"]}
                speed={2.5}
                spread={110}
                startDelay={2}
                delay={7}
                className="block text-2xl md:text-4xl lg:text-5xl font-display font-black leading-tight"
              />
              <ShinyText
                text="textile company that produces"
                color="#fbf7ef"
                colors={["#F5AC1B", "#E77051", "#2C9E8F"]}
                speed={2.5}
                spread={110}
                startDelay={4.5}
                delay={7}
                className="block text-2xl md:text-4xl lg:text-5xl font-display font-black leading-tight"
              />
              <ShinyText
                text="for the world's leading brands."
                color="#fbf7ef"
                colors={["#F5AC1B", "#E77051", "#2C9E8F"]}
                speed={2.5}
                spread={110}
                startDelay={7}
                delay={7}
                className="block text-2xl md:text-4xl lg:text-5xl font-display font-black leading-tight"
              />
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.7, delay: 0.35 }}
              className="relative flex items-center justify-center gap-4 mb-6"
            >
              <span className="h-px w-12 bg-gradient-to-r from-transparent to-brand-navy" />
              <span className="h-1.5 w-1.5 rounded-full bg-brand-coral" />
              <span className="h-px w-12 bg-gradient-to-l from-transparent to-brand-navy" />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.45 }}
              className="relative text-brand-navy/90 text-sm md:text-lg leading-relaxed max-w-2xl mx-auto"
            >
              We stand out with our industry leadership and reliability, taking
              pride in delivering superior quality products to customers
              worldwide.
            </motion.p>
          </div>
        </div>

        {/* Social Icons */}
        <div className="absolute right-6 top-1/2 -translate-y-1/2 hidden flex-col gap-6 z-20 sm:flex">
          <a
            href="#"
            aria-label="Instagram"
            className="text-white/90 hover:text-brand-orange transition-colors"
          >
            <Instagram size={18} />
          </a>

          <a
            href="#"
            aria-label="Facebook"
            className="text-white/90 hover:text-brand-orange transition-colors"
          >
            <Facebook size={18} />
          </a>

          <a
            href="#"
            aria-label="LinkedIn"
            className="text-white/90 hover:text-brand-orange transition-colors"
          >
            <Linkedin size={18} />
          </a>

          <a
            href="#"
            aria-label="YouTube"
            className="text-white/90 hover:text-brand-orange transition-colors"
          >
            <Youtube size={18} />
          </a>
        </div>
      </section>

      {/* Warm beige flow — one continuous background spanning World Map → Stats → Partners → Blog → CTA → FAQ, so section boundaries blend instead of cutting */}
      <div className="relative isolate overflow-hidden">
        <div
          className="absolute inset-0 -z-20"
          style={{
            background:
              'linear-gradient(180deg, #fbf7ef 0%, #f6eedd 25%, #f0e4c8 50%, #e8d7ae 75%, #d9bf8f 100%)',
          }}
        />

        {/* World Map Section */}
        <WorldMap />
        <div
          className="pointer-events-none absolute left-[-8%] top-[4%] -z-10 h-[460px] w-[460px] rounded-full opacity-25 blur-3xl"
          style={{ background: 'radial-gradient(circle, rgba(245,172,27,0.16), transparent 70%)' }}
        />
        <div
          className="pointer-events-none absolute right-[-8%] top-[88%] -z-10 h-[380px] w-[380px] rounded-full opacity-25 blur-3xl"
          style={{ background: 'radial-gradient(circle, rgba(245,172,27,0.14), transparent 70%)' }}
        />

      {/* Our Partners */}
      <section className="relative py-24" aria-labelledby="home-partners-heading">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-14 max-w-2xl mx-auto"
          >
            <div className="mb-4 flex items-center justify-center gap-3">
              <span className="h-px w-10 bg-brand-coral" />
              <p className="text-brand-coral text-xs font-bold uppercase tracking-[0.25em]">
                Trusted Worldwide
              </p>
              <span className="h-px w-10 bg-brand-coral" />
            </div>
            <h2
              id="home-partners-heading"
              className="font-display text-4xl font-black text-brand-beige-900 mb-4"
            >
              Our Partners
            </h2>
            <p className="text-brand-beige-600 text-lg leading-relaxed">
              Classic Fashion produces premium apparel for leading
              international fashion and retail brands across global markets.
            </p>
          </motion.div>

          <div className="partner-slider relative overflow-hidden">
            <div className="partner-slider-track">
              {partnerSlides.map((partner, i) => (
                <div key={`${partner.name}-${i}`} className="partner-logo-card">
                  <img
                    src={`/images/partners/${partner.file}`}
                    alt={`${partner.name} partner logo`}
                    className="max-h-14 w-auto object-contain sm:max-h-16"
                    loading={i < partners.length ? "eager" : "lazy"}
                  />
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* Stats Section */}
      <ScaleMeetsPrecision />

      {/* Blog Highlights */}
      <section className="relative py-24">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex justify-between items-end mb-12 border-b border-brand-beige-300/60 pb-8"
          >
            <div>
              <h2 className="text-4xl font-bold text-brand-beige-900">
                Blog Posts
              </h2>
            </div>

            <Link
              href="/blog"
              className="hidden md:inline-flex text-brand-coral font-bold uppercase tracking-wider text-sm hover:underline"
            >
              View All Posts
            </Link>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="h-full"
            >
              <BlogCard
                date="July 1, 2026"
                title="Fabric Roll Planning in the Apparel Industry: Know the Importance"
              />
            </motion.div>

            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="h-full"
            >
              <BlogCard
                date="May 26, 2026"
                title="Understanding MOQ in Apparel Manufacturing for Startups"
              />
            </motion.div>

            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="h-full"
            >
              <BlogCard
                date="April 27, 2026"
                title="Wholesale Women's Apparel Industry for Retailers"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* B2B CTA */}
      <section className="relative isolate overflow-hidden py-28">
        {/* angular coral/orange accent slab */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-1/4 top-0 -z-0 h-full w-[70%] opacity-80"
          style={{
            background: 'linear-gradient(115deg, transparent 42%, rgba(163,61,35,0.28) 55%, rgba(231,112,81,0.3) 70%, rgba(245,172,27,0.32) 100%)',
            maskImage: 'linear-gradient(180deg, transparent 0%, black 15%, black 85%, transparent 100%)',
            WebkitMaskImage: 'linear-gradient(180deg, transparent 0%, black 15%, black 85%, transparent 100%)',
          }}
        />

        <div className="container relative z-10 mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="lg:col-span-8"
            >
              <div className="mb-6 flex items-center gap-3">
                <span className="h-px w-12 bg-brand-coral" />
                <p className="text-brand-coral text-xs font-bold uppercase tracking-[0.3em]">
                  Let's Build Together
                </p>
              </div>
              <h2 className="font-display text-4xl md:text-6xl font-black text-brand-beige-900 leading-[1.05] mb-6 [text-wrap:balance]">
                Ready to partner with{" "}
                <span className="relative inline-block">
                  MENA's largest
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 300 14"
                    className="absolute -bottom-2 left-0 w-full text-brand-orange"
                  >
                    <path
                      d="M2 9 C 80 2, 220 2, 298 9"
                      stroke="currentColor"
                      strokeWidth="5"
                      fill="none"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>{" "}
                manufacturer?
              </h2>
              <p className="text-brand-beige-600 text-lg max-w-xl leading-relaxed">
                550,000 garments a day. 36,000+ people. One partner your brand
                can rely on, from first sample to full-scale production.
              </p>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="lg:col-span-4 flex flex-col items-start lg:items-end gap-4"
            >
              <Link
                href="/contact"
                className="group inline-flex items-center gap-3 bg-brand-beige-900 text-brand-beige-50 font-bold px-10 py-5 rounded-full transition-all uppercase tracking-widest text-sm shadow-[0_20px_50px_rgba(56,42,23,0.28)] hover:bg-brand-coral hover:text-white"
              >
                Request a Quote
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </Link>
              <Link
                href="/who-we-are"
                className="text-brand-beige-600 hover:text-brand-coral text-sm font-semibold underline underline-offset-4 decoration-brand-beige-300"
              >
                Learn about our story
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Banking / Support System + Royal Patronage */}
      <section className="relative py-24">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <p className="text-brand-teal text-xs font-bold uppercase tracking-widest mb-3">
              Financial Support System
            </p>
            <h3 className="text-2xl md:text-3xl font-bold text-brand-beige-900">
              Backed by World-Class Financial Institutions
            </h3>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mb-10">
            {[
              {
                name: "UK Export Finance",
                file: "uk-export-finance.png",
                summary: "The UK's export credit agency, backing trade finance so Classic Fashion can scale production for international buyers with confidence.",
              },
              {
                name: "HSBC",
                file: "hsbc.png",
                summary: "One of the world's largest banking groups, supporting our global trade operations and cross-border payments across every export market.",
              },
              {
                name: "Mashreq Bank",
                file: "mashreq-bank.png",
                summary: "A leading regional bank in the Gulf, providing trade finance and treasury solutions that keep our supply chain moving smoothly.",
              },
              {
                name: "Commercial Bank of Dubai",
                file: "commercial-bank-of-dubai.png",
                summary: "A trusted UAE financial institution supporting working capital and corporate banking needs across our regional operations.",
              },
              {
                name: "Arab Jordan Investment Bank",
                file: "arab-jordan-investment-bank.png",
                summary: "A leading Jordanian bank providing local financing and corporate banking support that underpins our headquarters operations.",
              },
              {
                name: "Bank Al Etihad",
                file: "bank-al-etihad.png",
                summary: "A major Jordanian bank supporting our day-to-day financial operations, payroll, and local supplier relationships.",
              },
            ].map((bank, i) => (
              <motion.div
                key={bank.name}
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                className="group perspective-distant"
              >
                <div className="relative h-44 w-full transform-3d transition-transform duration-500 group-hover:transform-[rotateY(180deg)]">
                  {/* Front */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 rounded-2xl border border-brand-beige-300/60 bg-white/70 px-4 py-5 text-center backface-hidden">
                    <img
                      src={`/images/support/${bank.file}`}
                      alt={`${bank.name} logo`}
                      className="h-16 w-auto max-w-full object-contain"
                      loading="lazy"
                    />
                    <span className="text-brand-beige-900 font-semibold text-xs tracking-wide leading-snug">
                      {bank.name}
                    </span>
                  </div>

                  {/* Back */}
                  <div className="absolute inset-0 flex items-center justify-center rounded-2xl border border-brand-teal/30 bg-brand-teal/10 px-4 py-5 text-center backface-hidden transform-[rotateY(180deg)]">
                    <p className="text-brand-beige-900 text-[11px] leading-relaxed">
                      {bank.summary}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Royal Patronage */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative mt-10 overflow-hidden rounded-3xl bg-[#f2e4c8] shadow-[0_30px_80px_rgba(56,42,23,0.12)]"
          >
            {/* faint fingerprint watermark, kept subtle behind everything */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden opacity-[0.035]"
            >
              <img
                src="/images/heroes/logo-mark.svg"
                alt=""
                className="h-[140%] w-auto"
              />
            </div>

            {/* faceted star accent, top right */}
            <svg
              aria-hidden="true"
              viewBox="0 0 300 260"
              className="pointer-events-none absolute -right-6 -top-6 h-56 w-56 text-brand-orange/40 sm:h-64 sm:w-64"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.2"
            >
              <path d="M150 6 L172 96 L262 60 L188 120 L268 168 L176 156 L192 250 L146 168 L84 232 L108 148 L14 152 L96 106 L38 34 L128 78 Z" />
            </svg>

            <div className="relative grid grid-cols-1 gap-8 px-8 pt-16 pb-48 sm:grid-cols-[180px_1px_1fr] sm:items-start sm:gap-10 sm:px-14 sm:pt-20 sm:pb-64">
              <div className="flex flex-col items-start gap-3">
                <Crown className="text-brand-orange" size={26} strokeWidth={1.1} />
                <p className="text-brand-orange text-xs font-semibold uppercase tracking-[0.3em]">
                  Royal Patronage
                </p>
              </div>

              <span className="hidden h-full w-px bg-brand-orange/40 sm:block" />

              <p className="relative max-w-2xl text-brand-beige-900 text-lg md:text-2xl font-normal leading-relaxed">
                Classic Fashion is honoured to operate under the support of{" "}
                <span className="text-brand-coral">HM King Abdullah II</span> and
                the Royal Court of the Hashemite Kingdom of Jordan — a testament
                to our contribution to the national economy.
              </p>
            </div>

            {/* Al-Khazneh (Petra Treasury) line art, bottom edge */}
            <PetraLineArt
              className="pointer-events-none absolute inset-x-0 bottom-0"
              color="#C8754F"
              strokeWidth={1.3}
              opacity={0.7}
              style={{ height: "clamp(130px, 18vw, 260px)" }}
            />
          </motion.div>
        </div>
      </section>

      <FaqSection
        items={faqs}
        title="Frequently Asked Questions"
        className="relative isolate overflow-hidden"
        style={{
          background:
            'radial-gradient(ellipse 70% 60% at 10% 10%, rgba(217,191,143,0.55), transparent 55%), radial-gradient(ellipse 70% 60% at 95% 20%, rgba(44,158,143,0.16), transparent 55%), radial-gradient(ellipse 80% 70% at 50% 100%, rgba(163,61,35,0.14), transparent 55%)',
        }}
      />
      </div>
      {/* end warm beige flow wrapper */}

      <style
        dangerouslySetInnerHTML={{
          __html: `
            @keyframes heroSheen {
              0%, 100% { background-position: 0% 0%; }
              50% { background-position: 100% 100%; }
            }

            @keyframes partnerMarquee {
              from { transform: translateX(0); }
              to { transform: translateX(-50%); }
            }

            .partner-slider-track {
              display: flex;
              width: max-content;
              gap: clamp(0.9rem, 1.6vw, 1.25rem);
              animation: partnerMarquee 34s linear infinite;
              will-change: transform;
            }

            .partner-slider:hover .partner-slider-track {
              animation-play-state: paused;
            }

            .partner-logo-card {
              flex: 0 0 auto;
              width: clamp(180px, 18vw, 255px);
              height: 86px;
              display: flex;
              align-items: center;
              justify-content: center;
            }

            @media (max-width: 640px) {
              .partner-slider-track {
                animation-duration: 26s;
              }

              .partner-logo-card {
                width: 160px;
                height: 76px;
              }
            }

            @media (prefers-reduced-motion: reduce) {
              .partner-slider-track {
                animation: none;
              }
            }
          `,
        }}
      />
    </div>
  );
}
