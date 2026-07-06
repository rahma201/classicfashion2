import { motion } from "framer-motion";
import { Trophy, Newspaper } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { Breadcrumbs, breadcrumbJsonLd } from "@/components/Breadcrumbs";
import { useSeo } from "@/hooks/use-seo";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const awards = [
  {
    year: "2021",
    title: "Industrial Solar Project of the Year — Middle East",
    org: "Intersolar Middle East Awards",
    desc: "Classic Fashion's 5.5 MWh solar farm in Mafraq, developed with Yellow Door Energy, was recognised as the outstanding industrial solar installation in the Middle East region.",
  },
  {
    year: "2023",
    title: "Most Labour-Friendly Employer — Jordan",
    org: "Jordan Chamber of Industry",
    desc: "Recognised for pioneering employee welfare standards, inclusive hiring practices, and continuous investment in worker development across 36,000+ team members.",
  },
  {
    year: "2024",
    title: "Sustainable Manufacturing Excellence Award",
    org: "MENA Apparel & Textile Summit",
    desc: "Awarded for measurable progress toward net-zero operations, including 42% emission reduction and comprehensive water recycling initiatives across all facilities.",
  },
  {
    year: "2024",
    title: "Top Garment Exporter — Jordan",
    org: "Jordan Exporters & Producers Association",
    desc: "Recognised as Jordan's leading garment exporter, significantly contributing to the national economy and maintaining global export growth year-on-year.",
  },
];

const press = [
  {
    date: "March 2025",
    outlet: "WWD — Women's Wear Daily",
    headline:
      "How Classic Fashion Became the Backbone of MENA Apparel Manufacturing",
    link: "#",
  },
  {
    date: "January 2025",
    outlet: "Just-Style",
    headline:
      "Classic Fashion's Solar Expansion Sets New Benchmark for Sustainable Garment Production",
    link: "#",
  },
  {
    date: "November 2024",
    outlet: "Jordan Times",
    headline:
      "Classic Fashion Expands Capacity with New Satellite Production Units",
    link: "#",
  },
  {
    date: "August 2024",
    outlet: "Apparel Insider",
    headline:
      "Inside Classic Fashion: The 36,000-Strong Team Powering Global Fashion Brands",
    link: "#",
  },
  {
    date: "May 2024",
    outlet: "Sourcing Journal",
    headline:
      "Classic Fashion's Vertical Integration Model — A Blueprint for MENA Manufacturing",
    link: "#",
  },
];

export default function AwardsPress() {
  useSeo({
    title: "Awards & Press — Classic Fashion",
    description:
      "Classic Fashion's industry recognition and media coverage — awards for sustainable manufacturing, labour standards, and export excellence in the MENA region.",
    path: "/awards-press",
    jsonLd: breadcrumbJsonLd([{ label: "Awards & Press", href: "/awards-press" }]),
  });

  return (
    <div className="min-h-screen bg-brand-gray">
      <PageHero
        title="Awards & Press"
        subtitle="Recognised by industry leaders for manufacturing excellence, sustainability, and labour standards."
        image="/images/heroes/awards-press-hero.png"
        overlay="bg-brand-navy/70"
        imagePosition="center 30%"
      />
      <Breadcrumbs items={[{ label: "Awards & Press" }]} />

      <div className="container mx-auto px-4 md:px-6 py-24">
        {/* Awards */}
        <div className="mb-24">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex items-center gap-3 mb-10"
          >
            <Trophy className="text-brand-orange" size={32} />
            <h2 className="text-3xl font-bold text-brand-navy">
              Industry Recognition
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {awards.map((award, i) => (
              <motion.article
                key={i}
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
              >
                <div className="flex items-start justify-between mb-4">
                  <span className="bg-brand-orange/10 text-brand-orange font-bold text-sm px-3 py-1 rounded-full">
                    {award.year}
                  </span>
                  <Trophy size={20} className="text-brand-orange/40" />
                </div>
                <h3 className="text-lg font-bold text-brand-navy mb-1">
                  {award.title}
                </h3>
                <div className="text-xs font-bold uppercase tracking-widest text-brand-coral mb-4">
                  {award.org}
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {award.desc}
                </p>
              </motion.article>
            ))}
          </div>
        </div>

        {/* Press */}
        <div>
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex items-center gap-3 mb-10"
          >
            <Newspaper className="text-brand-coral" size={32} />
            <h2 className="text-3xl font-bold text-brand-navy">
              Media Coverage
            </h2>
          </motion.div>

          <div className="space-y-4">
            {press.map((item, i) => (
              <motion.article
                key={i}
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 flex flex-col sm:flex-row sm:items-center gap-4 hover:shadow-md transition-shadow"
              >
                <div className="flex-grow">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-xs font-bold text-brand-coral uppercase tracking-widest">
                      {item.outlet}
                    </span>
                    <span className="text-xs text-gray-400">·</span>
                    <span className="text-xs text-gray-400">{item.date}</span>
                  </div>
                  <h3 className="font-bold text-brand-navy">{item.headline}</h3>
                </div>
                <a
                  href={item.link}
                  className="flex-shrink-0 text-sm font-bold text-brand-coral hover:underline uppercase tracking-wider"
                >
                  Read →
                </a>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
