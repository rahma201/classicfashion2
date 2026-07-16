import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import ScaleMeetsPrecision from "@/components/ScaleMeetsPrecision";
import { WorldMap } from "@/components/WorldMap";
import { BlogCard } from "@/components/BlogCard";
import { FaqSection, type FaqItem } from "@/components/FaqSection";
import ShinyText from "@/components/ui/shiny-text";
import { Instagram, Facebook, Youtube, Linkedin, Crown } from "lucide-react";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const partners = [
  { name: "Adidas", file: "adidas.png" },
  { name: "Fabletics", file: "fabletics.png" },
  { name: "Walmart", file: "walmart.png" },
  { name: "American Eagle", file: "american-eagle.png" },
  { name: "Michael Kors", file: "michael-kors.png" },
  { name: "Gap", file: "gap.png" },
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
  const [flippedBank, setFlippedBank] = useState<string | null>(null);

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
              <span className="block text-lg md:text-2xl lg:text-3xl font-display font-black leading-tight text-brand-beige-50">
                Integrated textile giant, manufacturing at scale
              </span>
              <ShinyText
                text="trusted by the world's most iconic brands."
                color="#fbf7ef"
                colors={["#F5AC1B", "#E77051", "#2C9E8F"]}
                speed={5}
                spread={110}
                startDelay={0.5}
                delay={4}
                className="block text-lg md:text-2xl lg:text-3xl font-display font-black leading-tight"
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

      {/* Champagne-beige flow — one continuous luxury gradient canvas spanning World Map → Stats → Partners → Blog → CTA → FAQ, applied once on this shared wrapper so no section carries its own background */}
      <div className="relative isolate overflow-hidden">
        <div
          className="pointer-events-none absolute inset-0 -z-20"
          style={{
            background:
              'radial-gradient(ellipse 55% 32% at 78% 18%, rgba(194,126,78,0.10) 0%, rgba(194,126,78,0.04) 40%, transparent 72%), radial-gradient(ellipse 60% 38% at 18% 52%, rgba(214,177,109,0.14) 0%, rgba(214,177,109,0.05) 45%, transparent 75%), radial-gradient(ellipse 45% 25% at 72% 75%, rgba(180,58,34,0.055) 0%, transparent 72%), linear-gradient(180deg, #F8EFD9 0%, #F2E2BE 28%, #EBD4A8 52%, #F3E3C3 76%, #FAF3E5 100%)',
          }}
        />

        {/* World Map Section */}
        <WorldMap />

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
                    className="max-h-24 w-auto object-contain sm:max-h-28"
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
            ].map((bank, i) => {
              const isFlipped = flippedBank === bank.name;
              return (
              <motion.div
                key={bank.name}
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                className="group perspective-distant cursor-pointer"
                role="button"
                tabIndex={0}
                aria-pressed={isFlipped}
                aria-label={`${bank.name} — show details`}
                onClick={() =>
                  setFlippedBank((prev) => (prev === bank.name ? null : bank.name))
                }
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setFlippedBank((prev) => (prev === bank.name ? null : bank.name));
                  }
                }}
              >
                <div
                  className={`relative h-44 w-full transform-3d transition-transform duration-500 group-hover:transform-[rotateY(180deg)] ${
                    isFlipped ? "transform-[rotateY(180deg)]" : ""
                  }`}
                >
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
              );
            })}
          </div>

          {/* Royal Patronage */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-3xl bg-[#fbeedd] shadow-[0_30px_80px_rgba(56,42,23,0.12)]"
          >
            <div className="relative grid grid-cols-1 items-center gap-10 px-6 py-12 sm:px-10 sm:py-14 lg:grid-cols-2 lg:gap-16 lg:px-16 lg:py-16">
              {/* Petra artwork */}
              <div className="mx-auto w-full max-w-sm lg:max-w-none">
                <img
                  src="/images/petra-royal-patronage.png"
                  alt="Line illustration of Al-Khazneh in Petra, Jordan"
                  className="h-auto max-h-64 w-full object-contain sm:max-h-none"
                  style={{ aspectRatio: "471 / 560" }}
                  width={471}
                  height={560}
                  loading="lazy"
                />
              </div>

              {/* Content */}
              <div className="flex flex-col items-start gap-5 text-left">
                <div className="flex items-center gap-3">
                  <Crown className="text-brand-orange" size={24} strokeWidth={1.1} aria-hidden="true" />
                  <p className="text-brand-orange text-xs font-semibold uppercase tracking-[0.3em]">
                    Royal Patronage
                  </p>
                </div>

                <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-brand-beige-900 leading-tight">
                  Proudly Supported by the Royal Court
                </h2>

                <span aria-hidden="true" className="h-px w-16 bg-brand-orange/40" />

                <p className="max-w-xl text-brand-beige-900 text-base md:text-lg leading-relaxed">
                  Classic Fashion is honoured to operate under the support of{" "}
                  <span className="text-brand-coral">HM King Abdullah II</span> and
                  the Royal Court of the Hashemite Kingdom of Jordan — a testament
                  to our contribution to Jordan's national economy.
                </p>

                <p className="mt-2 w-full border-t border-brand-orange/20 pt-5 text-brand-beige-600 text-xs font-bold uppercase tracking-[0.25em]">
                  The Hashemite Kingdom of Jordan
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <FaqSection
        items={faqs}
        title="Frequently Asked Questions"
        className="relative isolate overflow-hidden"
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
              width: clamp(200px, 20vw, 290px);
              height: 130px;
              display: flex;
              align-items: center;
              justify-content: center;
            }

            @media (max-width: 640px) {
              .partner-slider-track {
                animation-duration: 26s;
              }

              .partner-logo-card {
                width: 170px;
                height: 100px;
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
