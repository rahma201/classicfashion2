import { motion } from "framer-motion";
import { BlogCard } from "@/components/BlogCard";
import { PageHero } from "@/components/PageHero";
import { Breadcrumbs, breadcrumbJsonLd } from "@/components/Breadcrumbs";
import { useSeo } from "@/hooks/use-seo";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const posts = [
  {
    date: "July 1, 2026",
    title: "Fabric Roll Planning in the Apparel Industry: Know the Importance",
  },
  {
    date: "May 26, 2026",
    title: "Understanding MOQ in Apparel Manufacturing for Startups",
  },
  {
    date: "April 27, 2026",
    title:
      "A Detailed Look into the Wholesale Women's Apparel Industry for Retailers",
  },
  {
    date: "April 27, 2026",
    title:
      "A Comprehensive Guide to Choosing Perfect Custom Clothing Manufacturers",
  },
  {
    date: "March 20, 2026",
    title: "Garment Costing: How Costs Are Calculated in the Fashion Industry",
  },
  {
    date: "March 19, 2026",
    title: "What to Expect When Partnering with a Clothing Export Company",
  },
  {
    date: "February 23, 2026",
    title:
      "Ethical Fast Fashion: How Designers Can Stand Out with a Unique Niche",
  },
  {
    date: "February 20, 2026",
    title:
      "Sustainable Fabrics and Eco-Friendly Processes in Modern Apparel Production",
  },
];

export default function Blog() {
  useSeo({
    title: "Blog & Insights — Apparel Manufacturing Perspectives | Classic Fashion",
    description:
      "Insights on global apparel manufacturing, garment costing, MOQs, sustainable fabrics, and supply chain innovation from the largest garment manufacturer in the MENA region.",
    path: "/blog",
    jsonLd: breadcrumbJsonLd([{ label: "Blog", href: "/blog" }]),
  });

  return (
    <div className="min-h-screen bg-brand-gray">
      <PageHero
        title="Industry Insights"
        subtitle="Perspectives on global apparel manufacturing, sustainability, and supply chain innovation."
        image="/images/heroes/blog-hero.png"
        overlay="bg-brand-navy/75"
      />
      <Breadcrumbs items={[{ label: "Blog" }]} />

      <div className="container mx-auto px-4 md:px-6 py-24">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {posts.map((post, idx) => (
            <motion.div
              key={idx}
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: (idx % 4) * 0.1 }}
              className="h-full"
            >
              <BlogCard date={post.date} title={post.title} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
