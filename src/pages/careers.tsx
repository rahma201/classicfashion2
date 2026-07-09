import { motion } from "framer-motion";
import { Link } from "wouter";
import { Users, TrendingUp, Heart, Globe } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { Breadcrumbs, breadcrumbJsonLd } from "@/components/Breadcrumbs";
import { useSeo } from "@/hooks/use-seo";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const openings = [
  {
    dept: "Production",
    title: "Production Supervisor",
    location: "Al Hassan, Jordan",
    type: "Full-time",
  },
  {
    dept: "Quality",
    title: "Quality Control Specialist",
    location: "Al Hassan, Jordan",
    type: "Full-time",
  },
  {
    dept: "Design",
    title: "Technical Design Coordinator",
    location: "Amman, Jordan",
    type: "Full-time",
  },
  {
    dept: "Logistics",
    title: "Supply Chain Analyst",
    location: "Al Hassan, Jordan",
    type: "Full-time",
  },
  {
    dept: "HR",
    title: "HR Business Partner",
    location: "Al Hassan, Jordan",
    type: "Full-time",
  },
  {
    dept: "Technology",
    title: "ERP SAP Implementation Specialist",
    location: "Remote / Jordan",
    type: "Full-time",
  },
];

const benefits = [
  {
    icon: Users,
    title: "Inclusive Culture",
    desc: "A workplace built on trust, transparency, and mutual respect across 36,000+ team members.",
  },
  {
    icon: TrendingUp,
    title: "Growth Opportunities",
    desc: "Structured learning programs, mentorship, and clear career paths at every level.",
  },
  {
    icon: Heart,
    title: "Employee Welfare",
    desc: "Comprehensive health coverage, housing support, and an employee farm supplying fresh produce.",
  },
  {
    icon: Globe,
    title: "Global Exposure",
    desc: "Work with the world's leading fashion brands and a truly international supply chain.",
  },
];

export default function Careers() {
  useSeo({
    title: "Careers — Classic Fashion | Join 36,000+ Team Members",
    description:
      "Join Classic Fashion, the largest apparel manufacturer in the MENA region. Explore open roles across production, design, quality, logistics, and technology in Jordan.",
    path: "/careers",
    jsonLd: breadcrumbJsonLd([{ label: "Careers", href: "/careers" }]),
  });

  return (
    <div className="min-h-screen bg-brand-gray">
      <PageHero
        title="Careers"
        subtitle="Join the MENA region's largest apparel manufacturer. Be part of a team that creates fashion the world wears."
        image="/images/heroes/ChatGPT Image Jul 9, 2026, 10_39_18 AM (2).png"
        overlay="bg-brand-navy/72"
        imagePosition="center 20%"
      />
      <Breadcrumbs items={[{ label: "Careers" }]} />

      <div className="container mx-auto px-4 md:px-6 py-24">
        {/* Why Join */}
        <div className="text-center mb-16">
          <motion.h2
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-4xl font-bold text-brand-navy mb-4"
          >
            Why Work with Classic Fashion?
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            At Classic Fashion, our people are our most valuable asset. We
            invest in your growth, welfare, and career — because our success is
            built on yours.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {benefits.map((b, i) => {
            const Icon = b.icon;
            return (
              <motion.div
                key={i}
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
              >
                <Icon className="text-brand-coral mb-4" size={36} />
                <h3 className="font-bold text-brand-navy text-lg mb-2">
                  {b.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {b.desc}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Open Positions */}
        <div className="mb-24">
          <motion.h2
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-3xl font-bold text-brand-navy mb-8"
          >
            Current Openings
          </motion.h2>
          <div className="space-y-4">
            {openings.map((job, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:shadow-md transition-shadow"
              >
                <div>
                  <div className="text-xs font-bold text-brand-coral uppercase tracking-widest mb-1">
                    {job.dept}
                  </div>
                  <h3 className="text-lg font-bold text-brand-navy">
                    {job.title}
                  </h3>
                  <p className="text-sm text-gray-500 mt-1">
                    {job.location} · {job.type}
                  </p>
                </div>
                <a
                  href={`mailto:careers@classicfashion.com?subject=Application: ${job.title}`}
                  className="flex-shrink-0 border-2 border-brand-coral text-brand-coral font-bold px-6 py-2 rounded-lg hover:bg-brand-coral hover:text-white transition-all text-sm uppercase tracking-wider"
                >
                  Apply Now
                </a>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="bg-brand-navy text-white rounded-3xl p-12 text-center"
        >
          <h2 className="text-3xl font-bold mb-4">Don't See Your Role?</h2>
          <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto">
            We're always on the lookout for talented, passionate people. Send us
            your CV and let us know how you'd like to contribute.
          </p>
          <a
            href="mailto:careers@classicfashion.com"
            className="inline-block bg-brand-coral text-white font-bold px-10 py-4 rounded-xl hover:bg-opacity-90 transition-all uppercase tracking-widest text-sm"
          >
            Send Your CV
          </a>
          <p className="text-white/50 text-sm mt-4">
            careers@classicfashion.com
          </p>
        </motion.div>
      </div>
    </div>
  );
}
