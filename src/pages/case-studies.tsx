import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { Breadcrumbs, breadcrumbJsonLd } from "@/components/Breadcrumbs";
import { useSeo } from "@/hooks/use-seo";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const cases = [
  {
    brand: "Global Activewear Brand",
    category: "Activewear",
    headline: "Scaling to 150,000 Units/Month with Zero Quality Compromise",
    summary:
      "A leading US activewear brand needed a manufacturing partner capable of scaling rapidly to meet growing global demand while maintaining ISO-level quality standards. Classic Fashion deployed a dedicated production line, integrated client QC labs on-site, and achieved full production ramp-up within 8 weeks.",
    results: [
      "150,000 units/month at scale",
      "99.8% on-time delivery rate",
      "GOTS-certified production line",
      "Client QC lab embedded on-site",
    ],
    image: "/images/heroes/what-we-do-hero.png",
    accent: "brand-coral",
  },
  {
    brand: "Mass-Market Retail Partner",
    category: "Basics & Essentials",
    headline: "Delivering 10 Million Garments Annually for a Top-5 US Retailer",
    summary:
      "One of the United States' largest retail chains required a single trusted supplier to consolidate their Jordanian supply chain. Classic Fashion's vertically integrated model — covering fabric, cut & sew, printing, and finishing — made it the ideal partner for this complex, high-volume programme.",
    results: [
      "10M+ garments/year",
      "Full vertical integration",
      "Fabric to finished garment",
      "WRAP & SEDEX compliant",
    ],
    image: "/images/heroes/who-we-are-hero.png",
    accent: "brand-teal",
  },
  {
    brand: "European Sportswear Label",
    category: "Performance Sportswear",
    headline: "Seamless & Technical Garment Programme — 10,000 Units/Day",
    summary:
      "A European performance sportswear label sought a partner for seamless knitwear and technical activewear production in the MENA region. Classic Fashion's dedicated seamless facility, using advanced knitting machinery, delivered the quality and technical specification the brand required.",
    results: [
      "10,000 seamless units/day",
      "OEKO-TEX certified fabrics",
      "Advanced knitting technology",
      "Full tech pack execution",
    ],
    image: "/images/heroes/how-we-do-hero.png",
    accent: "brand-orange",
  },
];

const accentMap: Record<string, string> = {
  "brand-coral": "text-brand-coral border-brand-coral",
  "brand-teal": "text-brand-teal border-brand-teal",
  "brand-orange": "text-brand-orange border-brand-orange",
};

export default function CaseStudies() {
  useSeo({
    title: "Case Studies — Classic Fashion | Manufacturing Excellence in Action",
    description:
      "Real-world results from Classic Fashion's B2B apparel manufacturing partnerships — scaling activewear, basics, and seamless garment programmes for global brands.",
    path: "/case-studies",
    jsonLd: breadcrumbJsonLd([{ label: "Case Studies", href: "/case-studies" }]),
  });

  return (
    <div className="min-h-screen bg-white">
      <PageHero
        title="Case Studies"
        subtitle="Real-world partnerships. Measurable results. Fashion brands trust us to deliver."
        image="/images/heroes/what-we-do-hero.png"
        overlay="bg-brand-navy/70"
      />
      <Breadcrumbs items={[{ label: "Case Studies" }]} />

      <div className="container mx-auto px-4 md:px-6 py-24">
        <div className="max-w-3xl mx-auto text-center mb-20">
          <motion.p
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-xl text-gray-600 leading-relaxed"
          >
            The world's most demanding fashion and retail brands choose Classic
            Fashion for our scale, quality, and reliability. Here are some
            examples of how we deliver.
          </motion.p>
        </div>

        <div className="space-y-16 mb-24">
          {cases.map((c, i) => (
            <motion.article
              key={i}
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${i % 2 === 1 ? "lg:[&>*:first-child]:order-last" : ""}`}
            >
              <div className="relative rounded-3xl overflow-hidden aspect-[4/3] shadow-2xl">
                <img
                  src={c.image}
                  alt={c.headline}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/70 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <div
                    className={`inline-block text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full border ${accentMap[c.accent]} bg-white/10 mb-3`}
                  >
                    {c.category}
                  </div>
                  <div className={`text-2xl font-bold text-white`}>
                    {c.brand}
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-brand-navy mb-6 leading-tight">
                  {c.headline}
                </h2>
                <p className="text-gray-600 leading-relaxed mb-8">
                  {c.summary}
                </p>
                <div className="grid grid-cols-2 gap-3">
                  {c.results.map((r, ri) => (
                    <div
                      key={ri}
                      className={`flex items-center gap-2 text-sm font-semibold ${accentMap[c.accent].split(" ")[0]}`}
                    >
                      <span className="text-lg">✓</span> {r}
                    </div>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="bg-brand-navy rounded-3xl p-12 text-white text-center"
        >
          <h2 className="text-3xl font-bold mb-4">
            Ready to Become Our Next Success Story?
          </h2>
          <p className="text-white/80 mb-8 text-lg max-w-xl mx-auto">
            Tell us about your brand's manufacturing needs and let's explore how
            we can partner together.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-brand-coral text-white font-bold px-10 py-4 rounded-xl hover:bg-opacity-90 transition-all uppercase tracking-widest text-sm"
          >
            Start a Conversation <ArrowRight size={16} />
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
