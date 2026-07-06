import { motion } from "framer-motion";
import { Link } from "wouter";
import {
  Calendar,
  Users,
  Factory,
  Shirt,
  Eye,
  Compass,
  Handshake,
  MessageCircle,
  Leaf,
  HeartHandshake,
  ShieldCheck,
  Gem,
  Clock,
  ArrowRight,
} from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { Breadcrumbs, breadcrumbJsonLd } from "@/components/Breadcrumbs";
import { useSeo } from "@/hooks/use-seo";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const stats = [
  { icon: Calendar, value: "2003", label: "Established" },
  { icon: Users, value: "36,000+", label: "Team Members" },
  { icon: Factory, value: "20", label: "Factories" },
  { icon: Shirt, value: "550,000", label: "Garments / Day" },
];

const chairmanParagraphs = [
  "Classic Fashion is on a mission to become one of the world's leading garment manufacturing companies, fostering sustainable economic growth and meaningful opportunities. The company is committed to supporting the global retail landscape as an inclusive and equitable opportunity provider for associates and related sectors.",
  "This mission's success depends on Classic Fashion's most valuable asset: its people. The company is anchored in dedicated teamwork at every level, with a focus on environmental protection, sustainability, employee welfare, national and international compliance, quality standards, transparency, reliability, on-time performance, and trust.",
  "With capable leadership and dedicated employees, Classic Fashion serves as a role model for other organizations, contributing significantly to Jordan's garment exports and maintaining a reputation as one of the most labor-friendly companies in the country.",
  "Classic Fashion's Code of Business Conduct and Ethics was built with the welfare of people in mind, drawing from more than 20 years of experience to guide meaningful contributions to the company's culture and business.",
  "What strengthens the company's culture is not only the ability to distinguish right from wrong, but the commitment to doing the right thing. Every interaction, client relationship, and operational decision must preserve the values of partnership, client service, integrity, and excellence.",
];

const values = [
  {
    icon: Handshake,
    title: "Trust",
    desc: "We build lasting relationships based on trust.",
  },
  {
    icon: MessageCircle,
    title: "Transparency",
    desc: "We believe in open, honest, and clear communication.",
  },
  {
    icon: Leaf,
    title: "Sustainability",
    desc: "We protect the environment and drive sustainable practices.",
  },
  {
    icon: HeartHandshake,
    title: "Employee Welfare",
    desc: "We care for our people and support their well-being and growth.",
  },
  {
    icon: ShieldCheck,
    title: "Compliance",
    desc: "We uphold the highest standards of ethics and compliance.",
  },
  {
    icon: Gem,
    title: "Quality",
    desc: "We are committed to delivering consistent quality in every garment.",
  },
  {
    icon: Clock,
    title: "On-Time Performance",
    desc: "We deliver on our commitments, every time.",
  },
];

export default function WhoWeAre() {
  useSeo({
    title: "Who We Are — Classic Fashion Apparel Manufacturer in Jordan",
    description:
      "Learn about Classic Fashion, a Jordan-based apparel manufacturer established in 2003, with 36,000+ team members, 20 factories, and production capacity of 550,000 garments per day.",
    path: "/who-we-are",
    jsonLd: breadcrumbJsonLd([{ label: "Who We Are", href: "/who-we-are" }]),
  });

  return (
    <div className="min-h-screen bg-white">
      <PageHero
        title="Who We Are"
        subtitle="Rooted in Jordan. Leading apparel manufacturing in the MENA region through innovation, scale, and sustainability."
        image="/images/heroes/who-we-are-hero.png"
        imagePosition="center top"
      />
      <Breadcrumbs items={[{ label: "Who We Are" }]} />

      {/* ── ABOUT US INTRO ── */}
      <section className="relative overflow-hidden bg-white py-24">
        {/* Soft fabric-wave background accents */}
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-brand-teal/10 rounded-full blur-3xl" aria-hidden="true" />
        <div className="absolute bottom-0 -left-24 w-80 h-80 bg-brand-coral/10 rounded-full blur-3xl" aria-hidden="true" />

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <div className="text-brand-coral text-xs font-bold uppercase tracking-widest mb-4">
                About Us
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-brand-navy leading-tight">
                Built on ambition.
                <br />
                Driven by people.
              </h2>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="space-y-6"
            >
              <p className="text-xl text-gray-700 leading-relaxed">
                Rooted in Jordan, Classic Fashion has grown into one of the
                leading apparel manufacturers in the MENA region. Established
                in 2003 with a small workforce and ambitious vision, the
                company now operates at global scale through advanced
                manufacturing capabilities, strong client relationships, and a
                people-first culture.
              </p>
              <p className="text-xl text-gray-700 leading-relaxed">
                Today, Classic Fashion brings together{" "}
                <strong className="text-brand-navy">
                  36,000+ team members
                </strong>{" "}
                across{" "}
                <strong className="text-brand-navy">
                  20 state-of-the-art factories
                </strong>{" "}
                in Jordan, producing up to{" "}
                <strong className="text-brand-navy">
                  550,000 garments per day
                </strong>{" "}
                for international fashion and retail brands.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── KEY STATS ── */}
      <section className="relative bg-brand-navy py-20 overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 20%, #a33d23 0%, transparent 40%), radial-gradient(circle at 80% 80%, #2C9E8F 0%, transparent 40%)",
          }}
          aria-hidden="true"
        />
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, idx) => {
              const Icon = stat.icon;
              const accents = ["text-brand-coral", "text-brand-teal", "text-brand-orange", "text-brand-coral"];
              return (
                <motion.div
                  key={stat.label}
                  variants={fadeInUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-white/5 border border-white/10 rounded-2xl p-8 text-center hover:bg-white/10 hover:-translate-y-1 transition-all"
                >
                  <Icon className={`mx-auto mb-4 ${accents[idx]}`} size={28} />
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                    {stat.value}
                  </div>
                  <div className="text-xs font-semibold text-white/60 uppercase tracking-widest">
                    {stat.label}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── VISION & MISSION ── */}
      <section className="py-24 bg-brand-gray">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="relative overflow-hidden rounded-3xl p-10 md:p-12 bg-gradient-to-br from-brand-teal to-brand-teal/80 text-white"
            >
              <div className="absolute top-0 right-0 w-56 h-56 bg-white/10 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3" aria-hidden="true" />
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-brand-sage/20 rounded-full blur-2xl -translate-x-1/3 translate-y-1/3" aria-hidden="true" />
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-white/15 flex items-center justify-center mb-6">
                  <Eye size={26} />
                </div>
                <div className="text-white/70 text-xs font-bold uppercase tracking-widest mb-3">
                  Our Vision
                </div>
                <h3 className="text-2xl md:text-3xl font-bold leading-snug">
                  Inspire our teams to create innovative products using
                  sustainable processes.
                </h3>
              </div>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="relative overflow-hidden rounded-3xl p-10 md:p-12 bg-gradient-to-br from-brand-coral to-brand-coral/80 text-white"
            >
              <div className="absolute top-0 right-0 w-56 h-56 bg-white/10 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3" aria-hidden="true" />
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-brand-sand/25 rounded-full blur-2xl -translate-x-1/3 translate-y-1/3" aria-hidden="true" />
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-white/15 flex items-center justify-center mb-6">
                  <Compass size={26} />
                </div>
                <div className="text-white/70 text-xs font-bold uppercase tracking-widest mb-3">
                  Our Mission
                </div>
                <h3 className="text-2xl md:text-3xl font-bold leading-snug mb-4">
                  A workplace built on trust and transparency.
                </h3>
                <p className="text-white/85 leading-relaxed">
                  Classic Fashion's mission is to create a workplace where
                  teamwork begins by building trust and transparency, while
                  striving for environmental protection and social
                  responsibility that helps better the lives of all team
                  members.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── CHAIRMAN MESSAGE ── */}
      <section className="relative overflow-hidden bg-white py-24">
        <div className="absolute top-1/3 -right-32 w-96 h-96 bg-brand-orange/10 rounded-full blur-3xl" aria-hidden="true" />

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto mb-16"
          >
            <div className="text-brand-coral text-xs font-bold uppercase tracking-widest mb-3">
              Leadership
            </div>
            <h2 className="text-4xl font-bold text-brand-navy">
              A Message from Our Chairman
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
            {/* Portrait placeholder */}
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="lg:col-span-2 lg:sticky lg:top-28"
            >
              <div className="relative rounded-3xl overflow-hidden aspect-[4/5] bg-gradient-to-br from-brand-navy via-brand-navy to-brand-teal/60 flex items-center justify-center shadow-xl">
                <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "radial-gradient(circle at 30% 20%, #F5AC1B 0%, transparent 45%)" }} aria-hidden="true" />
                <span className="relative z-10 font-display text-7xl font-bold text-white/90 tracking-tight">
                  KSK
                </span>
                <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/40 to-transparent" aria-hidden="true" />
              </div>
              <div className="mt-5 text-center">
                <div className="font-bold text-brand-navy text-lg">
                  K S Sanal Kumar
                </div>
                <div className="text-brand-coral text-sm font-semibold uppercase tracking-wider mt-1">
                  Chairman &amp; Managing Director
                </div>
              </div>
            </motion.div>

            {/* Text */}
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="lg:col-span-3 space-y-5"
            >
              {chairmanParagraphs.slice(0, 2).map((p, i) => (
                <p key={i} className="text-gray-700 text-lg leading-relaxed">
                  {p}
                </p>
              ))}

              <div className="bg-brand-sage border-l-4 border-brand-coral rounded-r-2xl px-8 py-7 my-8">
                <p className="text-xl text-brand-navy italic font-light leading-relaxed">
                  "Doing the right thing, preserving our values, and caring
                  for our people will always guide our decisions."
                </p>
              </div>

              {chairmanParagraphs.slice(2).map((p, i) => (
                <p key={i} className="text-gray-700 text-lg leading-relaxed">
                  {p}
                </p>
              ))}

              <div className="pt-6 border-t border-gray-100 mt-8">
                <div className="font-display text-2xl italic text-brand-navy">
                  K S Sanal Kumar
                </div>
                <div className="text-gray-500 text-sm font-semibold uppercase tracking-wider mt-1">
                  Chairman &amp; Managing Director
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── VALUES ── */}
      <section className="py-24 bg-brand-gray">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto mb-14"
          >
            <div className="text-brand-coral text-xs font-bold uppercase tracking-widest mb-3">
              Our Values
            </div>
            <h2 className="text-4xl font-bold text-brand-navy">
              Principles that guide everything we do
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, i) => {
              const Icon = value.icon;
              const accents = [
                "text-brand-coral bg-brand-coral/10",
                "text-brand-teal bg-brand-teal/10",
                "text-brand-orange bg-brand-orange/10",
                "text-brand-navy bg-brand-navy/10",
              ];
              const accent = accents[i % accents.length];
              return (
                <motion.div
                  key={value.title}
                  variants={fadeInUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06 }}
                  className="bg-white rounded-2xl p-7 shadow-sm border border-gray-100 hover:shadow-md hover:-translate-y-1 transition-all"
                >
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 ${accent}`}>
                    <Icon size={22} />
                  </div>
                  <h3 className="font-bold text-brand-navy text-lg mb-2">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {value.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── FINAL BRAND STATEMENT ── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-brand-navy to-brand-teal/90 py-28">
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
          }}
          aria-hidden="true"
        />
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <div className="w-16 h-1 bg-brand-coral rounded-full mx-auto mb-8" aria-hidden="true" />
            <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-8">
              Classic Fashion stands as a role model in the region, shaping
              the future of responsible apparel manufacturing.
            </h2>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 mb-12 text-white/80 font-semibold uppercase tracking-widest text-sm">
              <span>Relentless in quality.</span>
              <span className="hidden sm:inline text-brand-coral">•</span>
              <span>Responsible by choice.</span>
              <span className="hidden sm:inline text-brand-coral">•</span>
              <span>Respected worldwide.</span>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/what-we-do"
                className="inline-flex items-center gap-2 bg-brand-coral text-white font-bold px-9 py-4 rounded-xl hover:bg-white hover:text-brand-navy transition-all uppercase tracking-widest text-sm shadow-xl"
              >
                Explore What We Do <ArrowRight size={16} />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 border-2 border-white/40 text-white font-bold px-9 py-4 rounded-xl hover:bg-white hover:text-brand-navy transition-all uppercase tracking-widest text-sm"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
