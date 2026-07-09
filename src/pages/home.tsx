import { motion } from "framer-motion";
import { Link } from "wouter";
import { StatsGrid } from "@/components/StatsGrid";
import { WorldMap } from "@/components/WorldMap";
import { BlogCard } from "@/components/BlogCard";
import { FaqSection, type FaqItem } from "@/components/FaqSection";
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

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(/images/heroes/home-hero.png)`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        />

        {/* Hero Content */}
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <div className="relative rounded-3xl bg-black/20 backdrop-blur-sm px-6 py-12 md:px-16 md:py-16 overflow-hidden">
            {/* animated gradient border glow */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 rounded-3xl opacity-60"
              style={{
                background:
                  'linear-gradient(120deg, transparent 40%, rgba(245,172,27,0.5) 50%, transparent 60%)',
                backgroundSize: '200% 200%',
                animation: 'heroSheen 6s ease-in-out infinite',
              }}
            />
            <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-white/15" />

            {/* giant decorative quote mark */}
            <span
              aria-hidden="true"
              className="pointer-events-none absolute -top-6 left-1/2 -translate-x-1/2 font-display text-[9rem] md:text-[12rem] leading-none text-brand-orange/10 select-none"
            >
              "
            </span>

            <motion.p
              initial={{ opacity: 0, y: -14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="relative font-display italic text-2xl md:text-4xl font-light tracking-wide bg-gradient-to-r from-brand-orange via-white to-brand-orange bg-clip-text text-transparent mb-6"
            >
              "A touch changes everything"
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.15 }}
              className="relative font-display text-2xl md:text-4xl lg:text-5xl font-black text-white leading-tight mb-8 [text-wrap:balance]"
            >
              Classic Fashion is an integrated giant textile company that
              produces for the{" "}
              <span className="bg-gradient-to-r from-brand-orange to-brand-coral bg-clip-text text-transparent">
                world's leading brands
              </span>
              .
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.7, delay: 0.35 }}
              className="relative flex items-center justify-center gap-4 mb-6"
            >
              <span className="h-px w-12 bg-gradient-to-r from-transparent to-brand-orange" />
              <span className="h-1.5 w-1.5 rounded-full bg-brand-orange" />
              <span className="h-px w-12 bg-gradient-to-l from-transparent to-brand-orange" />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.45 }}
              className="relative text-white/85 text-base md:text-lg leading-relaxed max-w-2xl mx-auto"
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

      {/* World Map Section */}
      <WorldMap />

      {/* Warm beige flow — one continuous background spanning Stats → Partners → Gallery → Sustainability → Blog, so section boundaries blend instead of cutting */}
      <div className="relative isolate overflow-hidden">
        <div
          className="absolute inset-0 -z-20"
          style={{
            background:
              'linear-gradient(180deg, #fbf7ef 0%, #f4ead4 10%, #ecdcb4 22%, #f4ead4 34%, #fbf7ef 46%, #f4ead4 58%, #ecdcb4 70%, #f4ead4 84%, #fbf7ef 100%)',
          }}
        />
        <div
          className="pointer-events-none absolute left-[-8%] top-[4%] -z-10 h-[460px] w-[460px] rounded-full opacity-50 blur-3xl"
          style={{ background: 'radial-gradient(circle, rgba(163,61,35,0.18), transparent 70%)' }}
        />
        <div
          className="pointer-events-none absolute right-[-10%] top-[32%] -z-10 h-[420px] w-[420px] rounded-full opacity-50 blur-3xl"
          style={{ background: 'radial-gradient(circle, rgba(44,158,143,0.16), transparent 70%)' }}
        />
        <div
          className="pointer-events-none absolute left-[-6%] top-[64%] -z-10 h-[420px] w-[420px] rounded-full opacity-45 blur-3xl"
          style={{ background: 'radial-gradient(circle, rgba(245,172,27,0.2), transparent 70%)' }}
        />
        <div
          className="pointer-events-none absolute right-[-8%] top-[88%] -z-10 h-[380px] w-[380px] rounded-full opacity-40 blur-3xl"
          style={{ background: 'radial-gradient(circle, rgba(163,61,35,0.14), transparent 70%)' }}
        />

      {/* Stats Section */}
      <section className="relative py-28">
        {/* Giant watermark logo mark — sits behind the "Scale Meets Precision" copy */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 left-0 -z-10 hidden w-[42%] items-center justify-center select-none overflow-hidden lg:flex"
        >
          <img
            src="/images/heroes/logo-mark.svg"
            alt=""
            className="h-[60vh] w-auto opacity-[0.07]"
          />
        </div>
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10 flex items-center justify-center select-none overflow-hidden lg:hidden"
        >
          <img
            src="/images/heroes/logo-mark.svg"
            alt=""
            className="h-[40vh] w-auto opacity-[0.07]"
          />
        </div>
        {/* Diagonal accent divider */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 left-[30%] -z-10 hidden w-px bg-gradient-to-b from-transparent via-brand-beige-900/10 to-transparent lg:block"
        />

        <div className="container relative mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="lg:col-span-4"
            >
              <div className="mb-5 flex items-center gap-3">
                <span className="h-px w-10 bg-brand-coral" />
                <p className="text-brand-coral text-xs font-bold uppercase tracking-[0.25em]">
                  By The Numbers
                </p>
              </div>
              <h2 className="font-display text-4xl md:text-6xl font-black text-brand-beige-900 mb-6 leading-[0.95] tracking-tight">
                Scale Meets{" "}
                <span className="relative inline-block">
                  <span className="relative z-10 bg-gradient-to-br from-brand-coral via-[#c2542f] to-brand-orange bg-clip-text text-transparent">
                    Precision
                  </span>
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 200 12"
                    className="absolute -bottom-2 left-0 w-full text-brand-orange/60"
                  >
                    <path
                      d="M2 8 C 50 2, 150 2, 198 8"
                      stroke="currentColor"
                      strokeWidth="4"
                      fill="none"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
              </h2>
              <p className="text-brand-beige-600 text-lg leading-relaxed mb-8 max-w-md">
                Classic Fashion is a proud global corporation headquartered in
                Jordan. It is the largest apparel manufacturer in the MENA
                region, delivering unparalleled volume without compromising
                quality.
              </p>
              <Link
                href="/who-we-are"
                className="group inline-flex items-center gap-2 bg-brand-beige-900 text-brand-beige-50 font-bold px-8 py-4 rounded-full hover:bg-brand-coral transition-all uppercase tracking-wider text-sm shadow-[0_14px_34px_rgba(56,42,23,0.25)]"
              >
                Discover Our Story
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </Link>
            </motion.div>

            <div className="lg:col-span-8">
              <StatsGrid />
            </div>
          </div>
        </div>
      </section>

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
            <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-brand-beige-100 to-transparent sm:w-28" />
            <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-brand-beige-100 to-transparent sm:w-28" />

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

          {/* Divider */}
          <div className="border-t border-brand-beige-300/60 my-16 max-w-3xl mx-auto" />

          {/* Banking / Support System */}
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
              { name: "UK Export Finance", file: "uk-export-finance.png" },
              { name: "HSBC", file: "hsbc.png" },
              { name: "Mashreq Bank", file: "mashreq-bank.png" },
              { name: "Commercial Bank of Dubai", file: "commercial-bank-of-dubai.png" },
              { name: "Arab Jordan Investment Bank", file: "arab-jordan-investment-bank.png" },
              { name: "Bank Al Etihad", file: "bank-al-etihad.png" },
            ].map((bank, i) => (
              <motion.div
                key={bank.name}
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                className="flex flex-col items-center gap-3 px-4 py-5 text-center transition-all"
              >
                <img
                  src={`/images/support/${bank.file}`}
                  alt={`${bank.name} logo`}
                  className="h-32 w-auto max-w-full object-contain"
                  loading="lazy"
                />
                <span className="text-brand-beige-900 font-semibold text-xs tracking-wide leading-snug">
                  {bank.name}
                </span>
              </motion.div>
            ))}
          </div>

          {/* Royal Patronage */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative mt-10 overflow-hidden rounded-3xl px-8 py-16 md:py-20 text-center shadow-[0_30px_80px_rgba(56,42,23,0.25)]"
            style={{
              background:
                'radial-gradient(ellipse 80% 80% at 50% 0%, rgba(245,172,27,0.35), transparent 60%), radial-gradient(ellipse 70% 70% at 15% 100%, rgba(163,61,35,0.3), transparent 60%), radial-gradient(ellipse 70% 70% at 85% 100%, rgba(44,158,143,0.2), transparent 60%), linear-gradient(150deg, #2f2213 0%, #4a3620 45%, #382a17 80%, #241a0d 100%)',
            }}
          >
            {/* gold border frame */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-3 rounded-2xl border border-brand-orange/30"
            />
            {/* watermark logo */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden opacity-[0.06]"
            >
              <img
                src="/images/heroes/logo-mark.svg"
                alt=""
                className="h-[130%] w-auto"
              />
            </div>

            <div className="relative">
              <div className="mb-6 flex items-center justify-center gap-4">
                <span className="h-px w-14 bg-gradient-to-r from-transparent to-brand-orange" />
                <Crown className="text-brand-orange" size={30} strokeWidth={1.6} />
                <span className="h-px w-14 bg-gradient-to-l from-transparent to-brand-orange" />
              </div>

              <p className="text-brand-orange text-xs md:text-sm font-bold uppercase tracking-[0.35em] mb-4">
                Royal Patronage
              </p>

              <p className="max-w-3xl mx-auto text-white text-xl md:text-3xl font-display font-medium leading-snug">
                Classic Fashion is honoured to operate under the support of{" "}
                <span className="font-black bg-gradient-to-r from-brand-orange via-brand-beige-100 to-brand-orange bg-clip-text text-transparent">
                  HM King Abdullah II
                </span>{" "}
                and the Royal Court of the Hashemite Kingdom of Jordan — a
                testament to our contribution to the national economy.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="relative py-24">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-brand-beige-900">
              Our People & Craft
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="relative aspect-[4/3] rounded-2xl overflow-hidden group"
            >
              <img
                src="/images/heroes/ChatGPT Image Jul 9, 2026, 10_39_18 AM (2).png"
                alt="Factory Workers"
                className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/80 to-transparent flex items-end p-8">
                <h3 className="text-white text-2xl font-bold">
                  Empowering 36,000+ Team Members
                </h3>
              </div>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="relative aspect-[4/3] rounded-2xl overflow-hidden group"
            >
              <img
                src="/images/heroes/ChatGPT Image Jul 9, 2026, 10_07_17 AM.png"
                alt="Embroidery Machine"
                className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/80 to-transparent flex items-end p-8">
                <h3 className="text-white text-2xl font-bold">
                  Precision at Industrial Scale
                </h3>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Sustainability Teaser */}
      <section className="relative py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="relative"
            >
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -inset-6 -z-10 opacity-70 blur-3xl"
                style={{
                  background:
                    'radial-gradient(ellipse 70% 70% at 30% 20%, rgba(245,172,27,0.45), transparent 65%), radial-gradient(ellipse 70% 70% at 80% 80%, rgba(44,158,143,0.4), transparent 65%)',
                }}
              />
              <div className="absolute -inset-2 -z-[5] bg-gradient-to-br from-brand-orange via-brand-coral to-brand-teal opacity-80" />
              <img
                src="/images/heroes/sustainability-hero.png"
                alt="Solar Panels"
                className="relative w-full h-auto object-cover shadow-[0_30px_70px_rgba(56,42,23,0.35)]"
              />
            </motion.div>

            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-brand-beige-900 mb-6">
                Building a <span className="text-brand-teal">Sustainable</span>{" "}
                Future
              </h2>
              <p className="text-lg text-brand-beige-600 mb-8 leading-relaxed">
                At Classic Fashion, sustainability isn't just a corporate
                initiative — it's woven into our daily operations. From our
                extensive solar energy installations to our commitment to UN
                Sustainable Development Goals, we are building a greener supply
                chain for the world's top brands.
              </p>
              <Link
                href="/sustainability"
                className="inline-block bg-brand-teal text-white font-bold px-8 py-4 rounded hover:bg-opacity-90 transition-all uppercase tracking-wider text-sm shadow-lg"
              >
                Learn More
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

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
                Industry Insights
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
      </div>
      {/* end warm beige flow wrapper */}

      {/* B2B CTA */}
      <section
        className="relative isolate overflow-hidden py-28"
        style={{
          background: 'linear-gradient(115deg, #fbf7ef 0%, #f4ead4 32%, #ecdcb4 55%, #e2cd9e 78%, #d9bf8f 100%)',
        }}
      >
        {/* angular coral/orange accent slab */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-1/4 top-0 -z-0 h-full w-[70%] opacity-80"
          style={{
            background: 'linear-gradient(115deg, transparent 42%, rgba(163,61,35,0.28) 55%, rgba(231,112,81,0.3) 70%, rgba(245,172,27,0.32) 100%)',
          }}
        />

        {/* giant decorative quote mark */}
        <span
          aria-hidden="true"
          className="pointer-events-none absolute -left-6 top-4 font-display text-[16rem] md:text-[22rem] leading-none text-brand-beige-900/[0.06] select-none"
        >
          "
        </span>

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

      <FaqSection
        items={faqs}
        title="Frequently Asked Questions"
        className="relative isolate overflow-hidden"
        style={{
          background:
            'radial-gradient(ellipse 70% 60% at 10% 10%, rgba(217,191,143,0.55), transparent 55%), radial-gradient(ellipse 70% 60% at 95% 20%, rgba(44,158,143,0.16), transparent 55%), radial-gradient(ellipse 80% 70% at 50% 100%, rgba(163,61,35,0.14), transparent 55%), linear-gradient(160deg, #f4ead4 0%, #ecdcb4 45%, #f4ead4 100%)',
        }}
      />

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
