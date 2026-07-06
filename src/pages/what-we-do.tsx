import { motion } from "framer-motion";
import { Link } from "wouter";
import {
  CheckCircle2,
  Globe2,
  ShieldCheck,
  Microscope,
  HeartHandshake,
  ArrowRight,
} from "lucide-react";
import { StatsGrid } from "@/components/StatsGrid";
import { PageHero } from "@/components/PageHero";
import { Breadcrumbs, breadcrumbJsonLd } from "@/components/Breadcrumbs";
import { FaqSection, faqJsonLd, type FaqItem } from "@/components/FaqSection";
import { useSeo } from "@/hooks/use-seo";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const qualityChecklist = [
  "Raw materials sourced from trusted, high-quality suppliers",
  "Multiple quality checks conducted throughout production",
  "Flawed supplied material returned and replaced by suppliers",
  "Final quality check completed before packing",
];

const clientPillars = [
  {
    icon: Globe2,
    title: "Global Distribution",
    desc: "Premium products shipped to leading suppliers and fashion brands across the USA, Europe, and Canada for distribution in global markets.",
  },
  {
    icon: ShieldCheck,
    title: "Quality Compliance",
    desc: "Full compliance with labor welfare requirements, quality demands, and product specifications — without compromise.",
  },
  {
    icon: Microscope,
    title: "Client QC Labs",
    desc: "Client companies operate their own quality checking systems, with accredited labs working directly within our factory premises.",
  },
  {
    icon: HeartHandshake,
    title: "Labor Welfare",
    desc: "Fair wages, safe working environments, and continuous investment in the welfare of our 36,000+ team members.",
  },
];

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

const supportSystem = [
  { name: "UK Export Finance, London", file: "uk-export-finance.png" },
  { name: "HSBC", file: "hsbc.png" },
  { name: "Mashreq Bank, Dubai", file: "mashreq-bank.png" },
  { name: "Commercial Bank of Dubai", file: "commercial-bank-of-dubai.png" },
  { name: "Arab Jordan Investment Bank, Dubai", file: "arab-jordan-investment-bank.png" },
  { name: "Bank Al Etihad, Amman", file: "bank-al-etihad.png" },
];

const faqs: FaqItem[] = [
  {
    q: "What apparel manufacturing capabilities does Classic Fashion offer?",
    a: "Classic Fashion offers fully vertically integrated apparel manufacturing — in-house fabric production, cutting, sewing, printing, embroidery, laundry, and finishing — covering T-shirts, activewear, outerwear, denim, knitwear, and seamless garments at high volume.",
  },
  {
    q: "Which global brands does Classic Fashion work with?",
    a: "Classic Fashion manufactures for leading international fashion and retail brands including Adidas, Under Armour, Fabletics, Victoria's Secret, Walmart, American Eagle, Michael Kors, and Gap, shipping to distribution markets across the USA, Europe, and Canada.",
  },
  {
    q: "Can Classic Fashion handle private label manufacturing?",
    a: "Yes. Classic Fashion is a private label clothing manufacturer for global brands, managing everything from fabric sourcing and tech-pack execution to final branded packaging.",
  },
  {
    q: "What is Classic Fashion's production capacity?",
    a: "Classic Fashion produces 550,000 garments per day across 20 factories, with dedicated lines for printing (150,000/day), laser cutting (100,000/day), embroidery (100,000/day), and seamless garments (10,000/day).",
  },
];

export default function WhatWeDo() {
  useSeo({
    title: "What We Do — Apparel Manufacturing Capabilities | Classic Fashion",
    description:
      "Explore Classic Fashion's vertically integrated apparel manufacturing capabilities, from textile production and printing to laundry, laser cutting, embroidery, seamless garments, and high-volume garment production for global brands.",
    path: "/what-we-do",
    jsonLd: [
      breadcrumbJsonLd([{ label: "What We Do", href: "/what-we-do" }]),
      faqJsonLd(faqs),
    ],
  });

  return (
    <div className="min-h-screen bg-brand-gray">
      <PageHero
        title="What We Do"
        subtitle="Vertically integrated apparel manufacturing at scale — from raw materials to finished garments."
        image="/images/heroes/what-we-do-hero.png"
        imagePosition="center center"
      />
      <Breadcrumbs items={[{ label: "What We Do" }]} />

      {/* ── PRODUCTS ── */}
      <section className="py-24 bg-white" aria-labelledby="products-heading">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <div className="text-brand-coral text-xs font-bold uppercase tracking-widest mb-3">
                Quality by Design
              </div>
              <h2
                id="products-heading"
                className="text-4xl font-bold text-brand-navy mb-6"
              >
                Products
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Perfection, precision, and punctuality are what make Classic
                Fashion products stand out. Raw materials for cloth and
                accessories are sourced from trusted suppliers of
                high-quality materials and subjected to multiple quality
                checks — any flaw in supplied material is returned and
                replaced by the supplier. Products undergo quality checks
                during production and again before packing.
              </p>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="bg-brand-navy rounded-3xl p-8 md:p-10 shadow-xl"
            >
              <div className="text-brand-orange text-xs font-bold uppercase tracking-widest mb-6">
                Quality Assurance Checklist
              </div>
              <ul className="space-y-5">
                {qualityChecklist.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2
                      className="text-brand-teal flex-shrink-0 mt-0.5"
                      size={22}
                    />
                    <span className="text-white/85 leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── CAPABILITIES ── */}
      <section className="py-24 bg-brand-gray" aria-labelledby="capabilities-heading">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-12 max-w-2xl mx-auto"
          >
            <div className="text-brand-coral text-xs font-bold uppercase tracking-widest mb-2">
              Capabilities
            </div>
            <h2
              id="capabilities-heading"
              className="text-4xl font-bold text-brand-navy mb-4"
            >
              Integrated Capabilities at Industrial Scale
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              From textile production to finishing, Classic Fashion supports
              high-volume apparel manufacturing through vertically integrated
              capabilities.
            </p>
          </motion.div>
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-brand-navy rounded-3xl p-8 md:p-12"
          >
            <StatsGrid />
          </motion.div>
        </div>
      </section>

      {/* ── CLIENTS ── */}
      <section className="py-24 bg-white" aria-labelledby="clients-heading">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center mb-16"
          >
            <div className="text-brand-coral text-xs font-bold uppercase tracking-widest mb-2">
              Global Partners
            </div>
            <h2
              id="clients-heading"
              className="text-4xl font-bold text-brand-navy mb-6"
            >
              Clients
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              The premium products of Classic Fashion are shipped to leading
              international suppliers and fashion brands in the USA, Europe,
              and Canada for distribution across global markets. Classic
              Fashion complies with labor welfare requirements, quality
              demands, and product specifications without compromise.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
            {clientPillars.map((pillar, i) => {
              const Icon = pillar.icon;
              return (
                <motion.div
                  key={i}
                  variants={fadeInUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-brand-gray rounded-2xl p-7 border border-gray-100 hover:shadow-md hover:-translate-y-1 transition-all"
                >
                  <Icon className="text-brand-coral mb-4" size={30} />
                  <h3 className="font-bold text-brand-navy text-lg mb-2">
                    {pillar.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {pillar.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-brand-coral text-white font-bold px-8 py-3.5 rounded-xl hover:bg-opacity-90 transition-all uppercase tracking-wider text-sm shadow-lg"
            >
              Start an RFQ <ArrowRight size={16} />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 border-2 border-brand-navy text-brand-navy font-bold px-8 py-3.5 rounded-xl hover:bg-brand-navy hover:text-white transition-all uppercase tracking-wider text-sm"
            >
              Contact Our Team
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── OUR PARTNERS ── */}
      <section className="py-24 bg-brand-gray" aria-labelledby="partners-heading">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-14 max-w-2xl mx-auto"
          >
            <div className="text-brand-coral text-xs font-bold uppercase tracking-widest mb-2">
              Trusted Worldwide
            </div>
            <h2
              id="partners-heading"
              className="text-4xl font-bold text-brand-navy mb-4"
            >
              Our Partners
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Classic Fashion produces premium apparel for leading
              international fashion and retail brands across global markets.
            </p>
          </motion.div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5">
            {partners.map((partner, i) => (
              <motion.div
                key={partner.name}
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="bg-white rounded-xl border border-gray-100 shadow-sm p-6 flex items-center justify-center h-24 hover:shadow-md hover:-translate-y-1 transition-all"
              >
                <img
                  src={`/images/partners/${partner.file}`}
                  alt={`${partner.name} partner logo`}
                  className="max-h-10 w-auto object-contain"
                  loading="lazy"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── OUR SUPPORT SYSTEM ── */}
      <section className="py-24 bg-white" aria-labelledby="support-heading">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-14 max-w-3xl mx-auto"
          >
            <div className="text-brand-teal text-xs font-bold uppercase tracking-widest mb-2">
              Institutional Backing
            </div>
            <h2
              id="support-heading"
              className="text-4xl font-bold text-brand-navy mb-6"
            >
              Our Support System
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Along with our banking partners, Classic Fashion is
              indefinitely grateful to the country we thrive in. The support
              from the Royal Court led by His Majesty King Abdullah II, King
              of the Hashemite Kingdom of Jordan, and all the ministers of the
              country has been a pillar of our success and smooth operations.
            </p>
          </motion.div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-5">
            {supportSystem.map((inst, i) => (
              <motion.div
                key={inst.name}
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                className="bg-brand-sage rounded-xl border border-gray-100 shadow-sm p-5 flex items-center justify-center h-20 hover:shadow-md hover:-translate-y-1 transition-all"
              >
                <img
                  src={`/images/support/${inst.file}`}
                  alt={`${inst.name} support partner logo`}
                  className="max-h-9 w-auto object-contain"
                  loading="lazy"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="py-32 bg-brand-navy relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "radial-gradient(circle at 50% 50%, #e55c44 0%, transparent 50%)",
          }}
        />
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Ready to manufacture with scale, precision, and trust?
            </h2>
            <p className="text-white/70 text-lg max-w-2xl mx-auto mb-10">
              Partner with Classic Fashion for high-volume apparel
              manufacturing, integrated capabilities, and global quality
              standards.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-block bg-brand-coral text-white font-bold px-10 py-4 rounded-lg hover:bg-white hover:text-brand-coral transition-all uppercase tracking-widest text-sm shadow-[0_0_40px_rgba(229,92,68,0.4)]"
              >
                Request a Quote
              </Link>
              <Link
                href="/sustainability"
                className="inline-block border-2 border-white/40 text-white font-bold px-10 py-4 rounded-lg hover:bg-white hover:text-brand-navy transition-all uppercase tracking-widest text-sm"
              >
                Explore Sustainability
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <FaqSection items={faqs} className="bg-brand-gray" />
    </div>
  );
}
