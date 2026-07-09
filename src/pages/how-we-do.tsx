import { motion } from "framer-motion";
import { Users, Cpu, Leaf } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { Breadcrumbs, breadcrumbJsonLd } from "@/components/Breadcrumbs";
import { useSeo } from "@/hooks/use-seo";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const sections = [
  {
    icon: Users,
    title: "With People",
    tagline: "Human Capital at the Core",
    body: `Our 36,000+ strong workforce is our greatest asset. We maintain strict labor welfare standards, ensuring fair wages, safe working environments, and continuous training.\n\nQuality control is embedded at every step. We even host client labs on-site, so brand partners can witness production standards firsthand and collaborate directly with our teams.`,
    image: "/images/heroes/ChatGPT Image Jul 9, 2026, 10_39_18 AM (2).png",
    accentIconClass: "text-brand-coral",
    accentGradientClass: "bg-gradient-to-tr from-brand-coral/30 to-transparent",
    accentTextClass: "text-brand-coral",
    isGreen: false,
  },
  {
    icon: Cpu,
    title: "With Technology",
    tagline: "Precision at Industrial Scale",
    body: `From digital printing to laser cutting, our investment in technology ensures we never sacrifice quality for volume. Our BIA Textiles subsidiary produces 35 tons of fabric daily using advanced weaving machinery.\n\nOur ERP and production management systems provide complete traceability across the supply chain — from raw materials to finished garments.`,
    image: "/images/heroes/sustainability-hero.png",
    accentIconClass: "text-brand-teal",
    accentGradientClass: "bg-gradient-to-tr from-brand-teal/30 to-transparent",
    accentTextClass: "text-brand-teal",
    isGreen: false,
  },
  {
    icon: Leaf,
    title: "With Sustainability",
    tagline: "Building a Responsible Future",
    body: `Sustainability is not a checkbox — it is embedded in every decision we make. Our 130,000 m² solar installation provides clean energy across our factories, reducing our carbon footprint significantly.\n\nWe are committed to the UN Sustainable Development Goals and hold multiple global sustainability certifications, including GOTS and OEKO-TEX standards.`,
    image: null,
    accentIconClass: "text-brand-orange",
    accentGradientClass: "",
    accentTextClass: "text-brand-teal",
    isGreen: true,
  },
];

export default function HowWeDo() {
  useSeo({
    title: "How We Do — People, Technology & Sustainability | Classic Fashion",
    description:
      "How Classic Fashion manufactures at scale: a 36,000-strong workforce, advanced production technology, and a 130,000 m² solar-powered sustainability programme.",
    path: "/how-we-do",
    jsonLd: breadcrumbJsonLd([{ label: "How We Do", href: "/how-we-do" }]),
  });

  return (
    <div className="min-h-screen bg-white">
      <PageHero
        title="How We Do"
        subtitle="People, technology, and sustainability — the three pillars of everything we make."
        image="/images/heroes/sustainability-hero.png"
        overlay="bg-brand-navy/68"
        imagePosition="center 30%"
      />
      <Breadcrumbs items={[{ label: "How We Do" }]} />

      {sections.map((section, idx) => {
        const Icon = section.icon;
        const isEven = idx % 2 === 0;

        return (
          <section
            key={idx}
            className={`py-24 border-b border-gray-100 ${section.isGreen ? "bg-brand-sage" : "bg-white"}`}
          >
            <div className="container mx-auto px-4 md:px-6">
              <div
                className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${isEven ? "" : "lg:[&>*:first-child]:order-last"}`}
              >
                {/* Text */}
                <motion.div
                  variants={fadeInUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  <div
                    className={`inline-flex items-center gap-3 mb-6 ${section.accentIconClass}`}
                  >
                    <Icon size={32} />
                    <div className="text-xs font-bold uppercase tracking-widest">
                      {section.tagline}
                    </div>
                  </div>
                  <h2 className="text-4xl md:text-5xl font-bold text-brand-navy mb-6">
                    {section.title}
                  </h2>
                  {section.body.split("\n\n").map((para, i) => (
                    <p
                      key={i}
                      className="text-gray-600 text-lg leading-relaxed mb-4"
                    >
                      {para}
                    </p>
                  ))}
                </motion.div>

                {/* Visual */}
                <motion.div
                  variants={fadeInUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ delay: 0.15 }}
                >
                  {section.image ? (
                    <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3]">
                      <img
                        src={section.image}
                        alt={section.title}
                        className="w-full h-full object-cover"
                      />
                      <div
                        className={`absolute inset-0 ${section.accentGradientClass}`}
                      />
                    </div>
                  ) : (
                    <div className="grid grid-cols-2 gap-4">
                      {[
                        { n: "130,000 m²", l: "Solar Installation" },
                        { n: "SDG", l: "Committed" },
                        { n: "GOTS", l: "Certified" },
                        { n: "OEKO-TEX", l: "Certified" },
                      ].map((item, i) => (
                        <div
                          key={i}
                          className="bg-white rounded-2xl p-6 text-center shadow-sm border border-white"
                        >
                          <div className="text-2xl font-bold text-brand-teal mb-1">
                            {item.n}
                          </div>
                          <div className="text-xs font-bold uppercase tracking-widest text-gray-500">
                            {item.l}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </motion.div>
              </div>
            </div>
          </section>
        );
      })}
    </div>
  );
}
