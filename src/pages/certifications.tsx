import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { Breadcrumbs, breadcrumbJsonLd } from "@/components/Breadcrumbs";
import { useSeo } from "@/hooks/use-seo";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const certs = [
  {
    name: "GOTS",
    full: "Global Organic Textile Standard",
    category: "Sustainability",
    color: "text-brand-teal",
    bg: "bg-brand-teal/10",
    border: "border-brand-teal/30",
    desc: "Certifies the organic status of textiles, from the harvesting of raw materials through environmentally and socially responsible manufacturing.",
  },
  {
    name: "OEKO-TEX®",
    full: "OEKO-TEX Standard 100",
    category: "Product Safety",
    color: "text-brand-navy",
    bg: "bg-brand-navy/5",
    border: "border-brand-navy/20",
    desc: "Every component of the article has been tested for harmful substances and is therefore harmless in terms of human ecology.",
  },
  {
    name: "ISO 9001",
    full: "Quality Management System",
    category: "Quality",
    color: "text-brand-coral",
    bg: "bg-brand-coral/10",
    border: "border-brand-coral/30",
    desc: "Internationally recognised standard for quality management systems, ensuring consistent delivery of products and services that meet customer and regulatory requirements.",
  },
  {
    name: "WRAP",
    full: "Worldwide Responsible Accredited Production",
    category: "Labour & Compliance",
    color: "text-brand-orange",
    bg: "bg-brand-orange/10",
    border: "border-brand-orange/30",
    desc: "An independent, objective, non-profit team of global social compliance experts dedicated to promoting safe, lawful, humane, and ethical manufacturing worldwide.",
  },
  {
    name: "SEDEX",
    full: "Supplier Ethical Data Exchange",
    category: "Ethics & Transparency",
    color: "text-brand-teal",
    bg: "bg-brand-teal/10",
    border: "border-brand-teal/30",
    desc: "World's largest collaborative platform for sharing responsible sourcing data, enabling businesses to improve working conditions in global supply chains.",
  },
  {
    name: "BCI",
    full: "Better Cotton Initiative",
    category: "Sustainability",
    color: "text-green-700",
    bg: "bg-green-50",
    border: "border-green-200",
    desc: "The world's largest cotton sustainability programme, making global cotton production better for the people who produce it, better for the environment, and better for the sector's future.",
  },
];

export default function Certifications() {
  useSeo({
    title: "Certifications & Standards — GOTS, OEKO-TEX, ISO | Classic Fashion",
    description:
      "Classic Fashion holds GOTS, OEKO-TEX, ISO 9001, WRAP, SEDEX, and BCI certifications — internationally recognised standards for quality, ethics, and sustainable apparel manufacturing.",
    path: "/certifications",
    jsonLd: breadcrumbJsonLd([{ label: "Certifications", href: "/certifications" }]),
  });

  return (
    <div className="min-h-screen bg-brand-gray">
      <PageHero
        title="Certifications"
        subtitle="Internationally recognised standards that validate our commitment to quality, ethics, and sustainability."
        image="/images/heroes/ChatGPT Image Jul 9, 2026, 10_39_19 AM (3).png"
        overlay="bg-brand-navy/70"
      />
      <Breadcrumbs items={[{ label: "Certifications" }]} />

      <div className="container mx-auto px-4 md:px-6 py-24">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.p
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-xl text-gray-600 leading-relaxed"
          >
            Classic Fashion holds multiple globally recognised certifications
            across quality management, sustainability, product safety, and
            ethical labour practices. These standards are not just badges — they
            are commitments embedded in every garment we produce.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {certs.map((cert, i) => (
            <motion.article
              key={i}
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className={`bg-white rounded-2xl p-8 shadow-sm border ${cert.border} hover:shadow-md transition-shadow`}
            >
              <div
                className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-4 ${cert.bg} ${cert.color}`}
              >
                <ShieldCheck size={14} />
                {cert.category}
              </div>
              <div className={`text-3xl font-bold mb-1 ${cert.color}`}>
                {cert.name}
              </div>
              <div className="text-sm font-semibold text-gray-500 mb-4">
                {cert.full}
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                {cert.desc}
              </p>
            </motion.article>
          ))}
        </div>

        {/* Compliance statement */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="bg-brand-navy text-white rounded-3xl p-12 text-center"
        >
          <h2 className="text-3xl font-bold mb-4">Our Compliance Commitment</h2>
          <p className="text-white/80 text-lg max-w-3xl mx-auto leading-relaxed">
            All certifications are maintained through ongoing third-party
            audits. Our quality, sustainability, and labour compliance standards
            are monitored continuously — not just at annual review points.
            Client quality checking systems operate within our facilities,
            supported by accredited on-site laboratories.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
