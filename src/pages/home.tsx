import { motion } from "framer-motion";
import { Link } from "wouter";
import { StatsGrid } from "@/components/StatsGrid";
import { WorldMap } from "@/components/WorldMap";
import { BlogCard } from "@/components/BlogCard";
import { FaqSection, faqJsonLd, type FaqItem } from "@/components/FaqSection";
import { useSeo } from "@/hooks/use-seo";
import { SiInstagram, SiFacebook, SiYoutube } from "react-icons/si";
import { Linkedin } from "lucide-react";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

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
  useSeo({
    title: "Classic Fashion — Apparel Manufacturer in Jordan | A Touch Changes Everything",
    description:
      "Classic Fashion is the largest apparel manufacturer in the MENA region — 550,000 garments/day, 36,000+ team members, headquartered in Jordan. Private-label clothing manufacturing for global fashion brands.",
    path: "/",
    jsonLd: faqJsonLd(faqs),
  });

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-brand-navy">
        {/* Background */}
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(/images/heroes/home-hero.png)`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        {/* Bottom gradient for readability */}
        <div className="absolute inset-0 z-0 bg-gradient-to-t from-brand-navy/70 via-transparent to-brand-navy/40" />

        {/* Hero Content */}
        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
          {/* White logo — centered, animated */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="flex justify-center mb-12"
          >
            <img
              src="/images/heroes/subpage_1783290884398.svg"
              alt="Classic Fashion"
              className="h-28 md:h-36 w-auto drop-shadow-2xl"
            />
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.9 }}
            className="font-display text-5xl md:text-7xl lg:text-8xl font-light text-white tracking-tight leading-none"
          >
            <span className="font-bold italic text-brand-coral">a touch</span>
            <br />
            <span className="font-light">changes everything</span>
          </motion.h1>

          {/* Watch Film button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.7 }}
            className="mt-12 flex justify-center"
          >
            <button
              className="group flex items-center gap-4 text-white/80 hover:text-white transition-colors"
              aria-label="Watch film"
            >
              <div className="relative w-16 h-16 flex items-center justify-center flex-shrink-0">
                {/* Rotating dashed ring */}
                <svg
                  viewBox="0 0 64 64"
                  className="absolute inset-0 w-full h-full animate-[spin_12s_linear_infinite]"
                >
                  <circle
                    cx="32"
                    cy="32"
                    r="29"
                    fill="none"
                    stroke="rgba(255,255,255,0.4)"
                    strokeWidth="1"
                    strokeDasharray="5 4"
                  />
                </svg>
                {/* Solid inner circle */}
                <div className="w-11 h-11 rounded-full border border-white/60 group-hover:border-white flex items-center justify-center transition-colors">
                  <svg
                    viewBox="0 0 20 20"
                    className="w-5 h-5 fill-white translate-x-0.5"
                  >
                    <polygon points="6,4 16,10 6,16" />
                  </svg>
                </div>
              </div>
              <span className="text-xs font-bold tracking-[0.2em] uppercase">
                Watch Film
              </span>
            </button>
          </motion.div>
        </div>

        {/* Scroll Down */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center text-white/60 animate-bounce z-10">
          <span className="text-[10px] font-bold tracking-[0.2em] uppercase mb-2">
            Scroll Down
          </span>
          <div className="w-px h-8 bg-white/40" />
        </div>

        {/* Social Icons */}
        <div className="absolute right-6 top-1/2 -translate-y-1/2 flex flex-col gap-6 z-20">
          <a
            href="#"
            aria-label="Instagram"
            className="text-white/50 hover:text-white transition-colors"
          >
            <SiInstagram size={18} />
          </a>
          <a
            href="#"
            aria-label="Facebook"
            className="text-white/50 hover:text-white transition-colors"
          >
            <SiFacebook size={18} />
          </a>
          <a
            href="#"
            aria-label="LinkedIn"
            className="text-white/50 hover:text-white transition-colors"
          >
            <Linkedin size={18} />
          </a>
          <a
            href="#"
            aria-label="YouTube"
            className="text-white/50 hover:text-white transition-colors"
          >
            <SiYoutube size={18} />
          </a>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-brand-navy py-24 border-t-8 border-brand-coral">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="lg:col-span-4"
            >
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
                Scale Meets <br />
                <span className="text-brand-coral">Precision</span>
              </h2>
              <p className="text-white/80 text-lg leading-relaxed mb-8">
                Classic Fashion is a proud global corporation headquartered in
                Jordan. It is the largest apparel manufacturer in the MENA
                region, delivering unparalleled volume without compromising
                quality.
              </p>
              <Link
                href="/who-we-are"
                className="inline-block border-2 border-brand-coral text-brand-coral font-bold px-8 py-3 rounded hover:bg-brand-coral hover:text-white transition-all uppercase tracking-wider text-sm"
              >
                Discover Our Story
              </Link>
            </motion.div>
            <div className="lg:col-span-8">
              <StatsGrid />
            </div>
          </div>
        </div>
      </section>

      {/* World Map Section */}
      <section className="py-24 bg-brand-gray">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-brand-navy mb-4">
              Global Reach. Local Impact.
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Connecting the world's leading brands with sustainable,
              high-capacity manufacturing.
            </p>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <WorldMap />
          </motion.div>

        
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-brand-navy">
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
                src="/images/heroes/who-we-are-hero.png"
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
                src="/images/heroes/what-we-do-hero.png"
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

      {/* Partner Brand Logos */}
      <section className="py-24 bg-brand-navy" aria-label="Our brand partners">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <p className="text-brand-orange text-xs font-bold uppercase tracking-widest mb-3">
              Global Brand Partners
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Trusted by the World's Leading Fashion Brands
            </h2>
          </motion.div>
          <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 gap-4 mb-4">
            {[
              "Adidas",
              "Under Armour",
              "Fabletics",
              "Victoria's Secret",
              "Walmart",
              "American Eagle",
              "Michael Kors",
              "Gap",
              "Zaecy",
            ].map((brand, i) => (
              <motion.div
                key={brand}
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="bg-white/5 border border-white/10 rounded-xl px-4 py-5 text-center hover:bg-white/10 hover:border-white/20 transition-all"
              >
                <span className="text-white font-bold text-sm tracking-wide">
                  {brand}
                </span>
              </motion.div>
            ))}
          </div>

          {/* Divider */}
          <div className="border-t border-white/10 my-16" />

          {/* Banking / Support System */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <p className="text-brand-teal text-xs font-bold uppercase tracking-widest mb-3">
              Financial Support System
            </p>
            <h2 className="text-2xl md:text-3xl font-bold text-white">
              Backed by World-Class Financial Institutions
            </h2>
          </motion.div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mb-10">
            {[
              "UK Export Finance",
              "HSBC",
              "Mashreq Bank",
              "Commercial Bank of Dubai",
              "Arab Jordan Investment Bank",
              "Bank Al Etihad",
            ].map((bank, i) => (
              <motion.div
                key={bank}
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                className="bg-white/5 border border-white/10 rounded-xl px-4 py-5 text-center hover:bg-white/10 hover:border-brand-teal/40 transition-all"
              >
                <span className="text-white/80 font-semibold text-xs tracking-wide leading-snug">
                  {bank}
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
            className="mt-10 border border-brand-orange/30 bg-brand-orange/5 rounded-2xl px-8 py-6 text-center max-w-3xl mx-auto"
          >
            <p className="text-brand-orange text-xs font-bold uppercase tracking-widest mb-2">
              Royal Patronage
            </p>
            <p className="text-white/80 text-sm leading-relaxed">
              Classic Fashion is honoured to operate under the support of{" "}
              <strong className="text-white">HM King Abdullah II</strong> and
              the Royal Court of the Hashemite Kingdom of Jordan — a testament
              to our contribution to the national economy.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Sustainability Teaser */}
      <section className="py-24 bg-brand-sand/20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="relative rounded-3xl overflow-hidden shadow-2xl"
            >
              <img
                src="/images/heroes/sustainability-hero.png"
                alt="Solar Panels"
                className="w-full h-auto object-cover"
              />
            </motion.div>
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-brand-navy mb-6">
                Building a <span className="text-brand-teal">Sustainable</span>{" "}
                Future
              </h2>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
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
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex justify-between items-end mb-12 border-b border-gray-100 pb-8"
          >
            <div>
              <h2 className="text-4xl font-bold text-brand-navy">
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

      {/* B2B CTA */}
      <section className="py-32 bg-brand-navy relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "radial-gradient(circle at 50% 50%, #e55c44 0%, transparent 50%)",
          }}
        ></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">
              Ready to Partner with MENA's Largest Manufacturer?
            </h2>
            <Link
              href="/contact"
              className="inline-block bg-brand-coral text-white font-bold px-12 py-5 rounded-lg hover:bg-white hover:text-brand-coral transition-all uppercase tracking-widest text-lg shadow-[0_0_40px_rgba(229,92,68,0.4)]"
            >
              Request a Quote
            </Link>
          </motion.div>
        </div>
      </section>

      <FaqSection items={faqs} title="Frequently Asked Questions" />

      <style
        dangerouslySetInnerHTML={{
          __html: `
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-100%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `,
        }}
      />
    </div>
  );
}
