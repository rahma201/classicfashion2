import { motion } from "framer-motion";
import { Link } from "wouter";
import { MapPin, ArrowRight, Factory } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { Breadcrumbs, breadcrumbJsonLd } from "@/components/Breadcrumbs";
import { FaqSection, faqJsonLd, type FaqItem } from "@/components/FaqSection";
import { WorldMap } from "@/components/WorldMap";
import { useSeo } from "@/hooks/use-seo";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};


const faqs: FaqItem[] = [
  {
    q: "Where is Classic Fashion located?",
    a: "Classic Fashion is headquartered in the Al Hassan Industrial Estate, Ramtha, Irbid, Jordan, with 12 main factories and 8+ satellite production units across the country.",
  },
  {
    q: "Does Classic Fashion export outside the Middle East?",
    a: "Yes. Classic Fashion exports globally, with the United States as its largest market, alongside partners across Europe, Canada, and Asia Pacific.",
  },
  {
    q: "Where does Classic Fashion source raw materials?",
    a: "Raw materials and fabrics are sourced through a global network spanning China, India, and Bangladesh, complementing in-house fabric production from BIA Textiles in Jordan.",
  },
];

export default function WhereWeDo() {
  useSeo({
    title: "Where We Do — Global Manufacturing Footprint | Classic Fashion",
    description:
      "Classic Fashion operates 12 main factories and 8+ satellite units in Jordan, with a global sourcing and export network spanning the USA, Egypt, China, India, and Bangladesh.",
    path: "/where-we-do",
    jsonLd: [
      breadcrumbJsonLd([{ label: "Where We Do", href: "/where-we-do" }]),
      faqJsonLd(faqs),
    ],
  });

  return (
    <div className="min-h-screen bg-brand-gray">
      <PageHero
        title="Where We Do"
        subtitle="Operating across six strategic global hubs to ensure supply chain resilience and excellence."
        image="/images/heroes/ChatGPT Image Jul 9, 2026, 10_39_19 AM (3).png"
        overlay="bg-brand-navy/70"
        imagePosition="center 40%"
      />
      <Breadcrumbs items={[{ label: "Where We Do" }]} />

      <div className="container mx-auto px-4 md:px-6 py-24">
        {/* Intro */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <motion.h2
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-brand-navy mb-6"
          >
            The Largest Manufacturer in the MENA Region
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-xl text-gray-600 leading-relaxed"
          >
            Headquartered in Jordan, Classic Fashion is the beating heart of
            garment manufacturing in the Middle East. With 12 main factories and
            8+ satellite units across the country, we drive industrial growth
            while maintaining a global footprint for sourcing and export.
          </motion.p>
        </div>

        {/* Map */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-16"
        >
          <WorldMap />
        </motion.div>

        {/* Jordan HQ spotlight */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center bg-white rounded-3xl shadow-sm border border-gray-100 p-8 md:p-12 mb-24"
        >
          <div>
            <div className="inline-flex items-center gap-2 text-brand-coral text-xs font-bold uppercase tracking-widest mb-4">
              <MapPin size={16} /> Headquarters
            </div>
            <h3 className="text-3xl font-bold text-brand-navy mb-4">
              Al Hassan Industrial Estate, Jordan
            </h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              Our home base sits at the crossroads of the Levant — giving
              global brands preferential US trade access via the Jordan–US
              Free Trade Agreement, alongside proximity to European and Gulf
              markets. 20 factories operate here under one roof of shared
              quality, compliance, and logistics infrastructure.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-brand-sage rounded-xl p-5">
                <div className="text-2xl font-bold text-brand-coral">12</div>
                <div className="text-xs font-bold text-gray-500 uppercase tracking-wider">
                  Main Factories
                </div>
              </div>
              <div className="bg-brand-sage rounded-xl p-5">
                <div className="text-2xl font-bold text-brand-teal">8+</div>
                <div className="text-xs font-bold text-gray-500 uppercase tracking-wider">
                  Satellite Units
                </div>
              </div>
            </div>
          </div>
          <div className="relative rounded-2xl overflow-hidden aspect-square bg-brand-navy flex items-center justify-center">
            <img
              src="/images/heroes/ChatGPT Image Jul 9, 2026, 10_39_19 AM (3).png"
              alt="Map outline of Jordan, home to Classic Fashion's headquarters and primary manufacturing base"
              className="w-2/3 h-2/3 object-contain drop-shadow-2xl"
              loading="lazy"
            />
          </div>
        </motion.div>

        {/* Global hubs grid */}
        <div className="mb-4">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 text-brand-coral text-xs font-bold uppercase tracking-widest mb-3">
              <Factory size={16} /> Global Footprint
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-brand-navy">
              Six Strategic Hubs, One Supply Chain
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          </div>
        </div>
      </div>

      {/* CTA */}
      <section className="py-24 bg-brand-navy">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">
              Sourcing from Jordan or Beyond? Let's Talk Logistics.
            </h2>
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 bg-brand-coral text-white font-bold px-10 py-4 rounded-lg hover:bg-white hover:text-brand-coral transition-all uppercase tracking-widest text-sm shadow-xl"
            >
              Contact Our Team <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </section>

      <FaqSection items={faqs} title="Location & Logistics FAQs" />
    </div>
  );
}
