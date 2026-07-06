import { motion } from "framer-motion";
import { Link } from "wouter";
import {
  Sun,
  Droplets,
  Recycle,
  Zap,
  Leaf,
  Factory,
  Flame,
  Gauge,
  Wrench,
} from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { Breadcrumbs, breadcrumbJsonLd } from "@/components/Breadcrumbs";
import { FaqSection, faqJsonLd, type FaqItem } from "@/components/FaqSection";
import { useSeo } from "@/hooks/use-seo";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const introPillars = [
  {
    icon: Sun,
    title: "Renewable Energy",
    desc: "Solar installations powering production across our factories.",
  },
  {
    icon: Droplets,
    title: "Water Recycling",
    desc: "Two treatment plants closing the water loop every single day.",
  },
  {
    icon: Recycle,
    title: "Waste Reduction",
    desc: "A four-stage programme turning fabric waste into new value.",
  },
];

const solarMilestones = [
  {
    status: "2021",
    title: "5.5 MWh Mafraq Solar Farm",
    desc: "Developed with Yellow Door Energy — winner of the Industrial Solar Project of the Year Award 2021 for the Middle East region.",
  },
  {
    status: "Q4 2023",
    title: "9 MWh Rooftop Solar",
    desc: "Rooftop solar installation across main facilities, targeted for completion by Q4 2023.",
  },
  {
    status: "2024",
    title: "16 MWh GIA Apparels Rooftop Solar",
    desc: "Rooftop solar expansion at GIA Apparels, targeted for completion by 2024.",
  },
  {
    status: "2024",
    title: "14 MWh BIA Textiles Rooftop Solar",
    desc: "Rooftop solar expansion at BIA Textiles, targeted for completion by 2024.",
  },
];

const emissionData = [
  { year: "2022", pct: 19.24, mt: 8.7, barPct: 46 },
  { year: "2023", pct: 28.7, mt: 16.5, barPct: 68 },
  { year: "2024", pct: 39.17, mt: 35.76, barPct: 93 },
  { year: "2025", pct: 42.01, mt: 46.2, barPct: 100 },
];

const waterPlants = [
  {
    abbr: "STP",
    full: "Sewage Treatment Plant",
    saving: "3,500 m³/day",
    use: "Fresh water usage saved. Water from the STP is used for gardening purposes and toilets in team accommodations.",
    abbrClass: "text-brand-teal",
    border: "border-brand-teal",
  },
  {
    abbr: "ETP",
    full: "Effluent Treatment Plant",
    saving: "4,000 m³/day",
    use: "Fresh water usage saved. Water from the ETP is used for laundry, boilers, and chillers — covering 100% of the laundry facility's water requirement.",
    abbrClass: "text-brand-navy",
    border: "border-brand-navy",
  },
];

const wasteStages = [
  {
    stage: "01",
    status: "Completed",
    statusColor: "bg-green-500",
    title: "Cut Waste → Fibre Bales",
    desc: "Converting cut waste and “C” grade garments into fibre bale. All fibre bales are used for making furniture cushions, rugs, and carpets.",
  },
  {
    stage: "02",
    status: "2023",
    statusColor: "bg-brand-teal",
    title: "Fibre Bales → Recycled Yarn",
    desc: "Fabric bales converted to yarns using chemical and mechanical recycling processes.",
  },
  {
    stage: "03",
    status: "2024",
    statusColor: "bg-brand-orange",
    title: "Solid Waste → Fuel Pellets",
    desc: "Converting fabric and other solid wastes — including food, paper, and combustible plastic waste — into fuel pellets.",
  },
  {
    stage: "04",
    status: "2025",
    statusColor: "bg-brand-coral",
    title: "Fibre Bales → Construction Materials",
    desc: "Converting recycled fibre bales into construction materials such as insulators.",
  },
];

const energyItems = [
  {
    icon: Factory,
    title: "Centralised Boilers",
    lead: "Centralisation of boilers reduced the number of boilers from 25 to 18 at the main facility.",
    stats: [
      { label: "Diesel consumption reduced", value: "5% (453 tons CO₂)" },
      { label: "Heavy oil consumption reduced", value: "31% (6,966 tons CO₂)" },
      { label: "Pure water consumption reduced", value: "15%" },
      { label: "Softener consumption reduced", value: "15%" },
    ],
  },
  {
    icon: Zap,
    title: "Inverter Technology",
    lead: "Inverter technology used across all HVAC systems.",
    stats: [
      { label: "Energy savings", value: "Up to 50%" },
      { label: "Temperature stability", value: "Fluctuations eliminated" },
    ],
  },
  {
    icon: Leaf,
    title: "Farm & Plantation",
    lead: "Classic Fashion's own farm and olive plantation in Al-Mafraq, spanning around 1,536 dunam.",
    stats: [
      { label: "Output", value: "Fresh vegetables & fruit" },
      { label: "Used by", value: "Central Kitchen for all employees" },
    ],
  },
  {
    icon: Flame,
    title: "Gas Turbines",
    lead: "Power generation through gas turbines using natural gas, connected with a heat recovery system to generate steam — commissioning by 2025.",
    stats: [{ label: "Carbon emission saving", value: "74,000 tons" }],
  },
];

const bmsSystems = [
  "HVAC & AHU",
  "Water Tanks",
  "Boilers",
  "Lighting DB Control",
  "Conveyors & Lift",
  "RO Water Plant",
  "Electrical System",
  "Fire Fighting System",
];

const performanceIndicators = [
  {
    icon: Gauge,
    label: "Energy Management",
    value: "10%",
    desc: "Improvement in energy consumption",
  },
  {
    icon: Wrench,
    label: "Preventive Maintenance",
    value: "20%",
    desc: "Improvement in product lifecycle",
  },
];

const faqs: FaqItem[] = [
  {
    q: "Does Classic Fashion support sustainable manufacturing?",
    a: "Yes. Classic Fashion operates a growing solar energy programme, recycles 7,500 m³ of water daily, runs a four-stage fabric waste programme, and continuously invests in energy conservation across its factories in Jordan.",
  },
  {
    q: "How much has Classic Fashion reduced its carbon emissions?",
    a: "Classic Fashion reached a 42.01% annual emissions reduction in 2025 (46.2 MT CO₂), up from 19.24% in 2022, through solar power, centralised boilers, gas turbine heat recovery, and inverter HVAC technology.",
  },
  {
    q: "How does Classic Fashion manage water and waste?",
    a: "Classic Fashion operates a Sewage Treatment Plant and an Effluent Treatment Plant that together save 7,500 m³ of fresh water daily, alongside a four-stage fabric waste programme that converts offcuts into yarn, fuel pellets, and construction materials.",
  },
];

export default function Sustainability() {
  useSeo({
    title: "Sustainability — Responsible Apparel Manufacturing | Classic Fashion",
    description:
      "Explore Classic Fashion's sustainability initiatives across solar energy, water recycling, waste management, energy conservation, and responsible apparel manufacturing in Jordan.",
    path: "/sustainability",
    jsonLd: [
      breadcrumbJsonLd([{ label: "Sustainability", href: "/sustainability" }]),
      faqJsonLd(faqs),
    ],
  });

  return (
    <div className="min-h-screen bg-white">
      <PageHero
        title="Sustainability"
        subtitle="Driving responsible apparel manufacturing through renewable energy, water recycling, waste reduction, and operational efficiency."
        image="/images/heroes/sustainability-hero.png"
        height="min-h-[65vh]"
      />
      <Breadcrumbs items={[{ label: "Sustainability" }]} />

      {/* ── INTRO ── */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center mb-16"
          >
            <p className="text-brand-teal text-xs font-bold uppercase tracking-widest mb-4">
              Our Commitment
            </p>
            <h2 className="text-4xl font-bold text-brand-navy mb-6">
              Sustainability, woven into how we manufacture
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Classic Fashion integrates sustainability into its manufacturing
              ecosystem through renewable energy, efficient resource use,
              responsible waste management, and long-term operational
              improvements.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {introPillars.map((pillar, i) => {
              const Icon = pillar.icon;
              return (
                <motion.div
                  key={pillar.title}
                  variants={fadeInUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-brand-sage rounded-2xl p-7 text-center border border-gray-100"
                >
                  <Icon className="text-brand-teal mx-auto mb-3" size={30} />
                  <h3 className="font-bold text-brand-navy mb-1">
                    {pillar.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {pillar.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── SOLAR PROJECT ── */}
      <section className="py-24 bg-brand-sage" aria-labelledby="solar-heading">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-14 max-w-3xl mx-auto"
          >
            <Sun className="text-brand-orange mx-auto mb-4" size={40} />
            <p className="text-brand-orange text-xs font-bold uppercase tracking-widest mb-3">
              Sustainability Initiatives
            </p>
            <h2 id="solar-heading" className="text-4xl font-bold text-brand-navy mb-6">
              Solar Project
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              In light of the current global situation, Classic Fashion is
              proactively shifting towards renewable sources of energy. It has
              already accomplished much in this area and is making consistent,
              rapid progress in the changeover.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Visual + headline stat */}
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-brand-orange/15 to-white border border-brand-orange/20 aspect-[4/3] flex items-center justify-center p-10 mb-6">
                <img
                  src="/images/sustainability/solar.png"
                  alt="Solar panel installation representing Classic Fashion's renewable energy programme"
                  className="max-h-full max-w-full object-contain drop-shadow-xl"
                  loading="lazy"
                />
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <p className="text-gray-700 leading-relaxed">
                  Classic Fashion, with{" "}
                  <strong className="text-brand-navy">Yellow Door Energy</strong>,
                  established a 5.5 MWh solar farm in Mafraq, crowned winner of
                  the{" "}
                  <strong className="text-brand-navy">
                    Industrial Solar Project of the Year Award
                  </strong>{" "}
                  in 2021 for the Middle East region.
                </p>
              </div>
            </motion.div>

            {/* Milestones */}
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-brand-navy mb-6">
                Solar Milestones
              </h3>
              <div className="space-y-4">
                {solarMilestones.map((m, i) => (
                  <div
                    key={i}
                    className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 flex gap-4 items-start"
                  >
                    <span className="flex-shrink-0 bg-brand-orange/10 text-brand-orange font-bold text-xs uppercase tracking-widest px-3 py-1.5 rounded-full">
                      {m.status}
                    </span>
                    <div>
                      <h4 className="font-bold text-brand-navy mb-1">
                        {m.title}
                      </h4>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        {m.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Annual emission results */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-16"
          >
            <h3 className="text-2xl font-bold text-brand-navy mb-8 text-center">
              Annual CO₂ Emission Reduction
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
              {emissionData.map((row) => (
                <div
                  key={row.year}
                  className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100"
                >
                  <div className="flex justify-between items-end mb-3">
                    <span className="font-bold text-brand-navy">{row.year}</span>
                    <span className="text-2xl font-bold text-brand-coral">
                      {row.pct}%
                    </span>
                  </div>
                  <div className="h-3 bg-gray-200 rounded-full overflow-hidden mb-2">
                    <motion.div
                      className="h-full bg-gradient-to-r from-brand-teal to-brand-orange rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${row.barPct}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.2 }}
                    />
                  </div>
                  <div className="text-sm text-gray-500">
                    {row.mt} MT CO₂ reduced
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── WATER RECYCLING ── */}
      <section className="py-24 bg-white" aria-labelledby="water-heading">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-14 max-w-3xl mx-auto"
          >
            <Droplets className="text-brand-teal mx-auto mb-4" size={40} />
            <p className="text-brand-teal text-xs font-bold uppercase tracking-widest mb-3">
              Sustainability Initiatives
            </p>
            <h2 id="water-heading" className="text-4xl font-bold text-brand-navy">
              Water Recycling
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-brand-teal/15 to-white border border-brand-teal/20 aspect-[4/3] flex items-center justify-center p-10"
            >
              <img
                src="/images/sustainability/water-recycling.png"
                alt="Illustration of Classic Fashion's closed-loop water recycling system"
                className="max-h-full max-w-full object-contain drop-shadow-xl"
                loading="lazy"
              />
            </motion.div>

            <div className="space-y-6">
              {waterPlants.map((plant, i) => (
                <motion.div
                  key={i}
                  variants={fadeInUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                  className={`bg-brand-sage border-2 ${plant.border} rounded-3xl p-8`}
                >
                  <div className={`text-3xl font-bold ${plant.abbrClass} mb-1`}>
                    {plant.abbr}
                  </div>
                  <div className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">
                    {plant.full}
                  </div>
                  <div className="text-4xl font-bold text-brand-navy mb-2">
                    {plant.saving}
                  </div>
                  <div className="text-brand-teal font-bold text-xs uppercase tracking-widest mb-3">
                    Fresh Water Saved Daily
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {plant.use}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── WASTE MANAGEMENT ── */}
      <section className="py-24 bg-brand-sage" aria-labelledby="waste-heading">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-14 max-w-3xl mx-auto"
          >
            <Recycle className="text-brand-coral mx-auto mb-4" size={40} />
            <p className="text-brand-coral text-xs font-bold uppercase tracking-widest mb-3">
              Sustainability Initiatives
            </p>
            <h2 id="waste-heading" className="text-4xl font-bold text-brand-navy">
              Waste Management
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-16">
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-brand-coral/15 to-white border border-brand-coral/20 aspect-[4/3] flex items-center justify-center p-10 mb-6">
                <img
                  src="/images/sustainability/waste-recycling.png"
                  alt="Recycling icon representing Classic Fashion's fabric waste recovery programme"
                  className="max-h-full max-w-full object-contain drop-shadow-xl"
                  loading="lazy"
                />
              </div>
              <h3 className="text-2xl font-bold text-brand-navy mb-4">
                Fabric Waste Management
              </h3>
              <p className="text-gray-600 leading-relaxed">
                We operate a four-stage waste recovery programme that
                progressively captures more value from fabric offcuts and
                solid waste, moving towards a true zero-waste manufacturing
                model.
              </p>
            </motion.div>

            <div className="space-y-5">
              {wasteStages.map((stage, i) => (
                <motion.div
                  key={i}
                  variants={fadeInUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white rounded-2xl p-6 shadow-sm border border-white flex gap-5 items-start"
                >
                  <div className="flex-shrink-0 text-3xl font-bold text-brand-coral/30 leading-none">
                    {stage.stage}
                  </div>
                  <div className="flex-grow">
                    <div className="flex items-center gap-2 mb-2">
                      <span
                        className={`inline-block w-2 h-2 rounded-full ${stage.statusColor}`}
                      />
                      <span className="text-xs font-bold uppercase tracking-widest text-gray-500">
                        Stage {stage.stage} — {stage.status}
                      </span>
                    </div>
                    <h4 className="font-bold text-brand-navy mb-1">
                      {stage.title}
                    </h4>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {stage.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Food waste */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-white rounded-2xl border border-gray-100 p-8 flex flex-col md:flex-row gap-6 items-center shadow-sm max-w-4xl mx-auto"
          >
            <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center flex-shrink-0 text-3xl">
              🌱
            </div>
            <div>
              <h3 className="font-bold text-brand-navy text-lg mb-1">
                Food Waste Management
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Using the compost-making machine, food waste is collected and
                converted into compost for our farm, with a capacity of{" "}
                <strong>500 kg/day</strong>. By 2023 we expect to recycle{" "}
                <strong>100%</strong> of food waste.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── ENERGY CONSERVATION ── */}
      <section className="py-24 bg-white" aria-labelledby="energy-heading">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-14 max-w-3xl mx-auto"
          >
            <Zap className="text-brand-orange mx-auto mb-4" size={40} />
            <h2 id="energy-heading" className="text-4xl font-bold text-brand-navy">
              Energy Conservation
            </h2>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-brand-navy/5 to-white border border-brand-navy/10 mb-14 flex items-center justify-center p-10 max-w-md mx-auto aspect-[4/3]"
          >
            <img
              src="/images/sustainability/energy-conservation.png"
              alt="Illustration representing Classic Fashion's energy conservation programme"
              className="max-h-full max-w-full object-contain drop-shadow-xl"
              loading="lazy"
            />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {energyItems.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.article
                  key={i}
                  variants={fadeInUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-brand-sage rounded-2xl p-8 border border-gray-100"
                >
                  <Icon className="text-brand-coral mb-4" size={32} />
                  <h3 className="text-xl font-bold text-brand-navy mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-5">
                    {item.lead}
                  </p>
                  <div className="grid grid-cols-2 gap-3">
                    {item.stats.map((s, si) => (
                      <div key={si} className="bg-white rounded-xl p-4">
                        <div className="text-base font-bold text-brand-teal">
                          {s.value}
                        </div>
                        <div className="text-xs text-gray-500 font-semibold uppercase tracking-wider mt-0.5">
                          {s.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.article>
              );
            })}
          </div>

          {/* BMS */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-brand-navy text-white rounded-3xl p-10 md:p-14 mb-12"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
              <div>
                <p className="text-brand-orange text-xs font-bold uppercase tracking-widest mb-3">
                  Building Management System
                </p>
                <h3 className="text-3xl font-bold mb-4">
                  Intelligent Control Across All Facilities
                </h3>
                <p className="text-white/75 leading-relaxed">
                  Equipment controlled by our Building Management System
                  spans every major energy system across all sites — ensuring
                  peak efficiency 24/7.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {bmsSystems.map((sys, i) => (
                  <div
                    key={i}
                    className="bg-white/10 border border-white/10 rounded-lg px-3 py-2 text-sm text-white/80 font-medium text-center"
                  >
                    {sys}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Performance indicators */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-3xl mx-auto"
          >
            {performanceIndicators.map((ind) => {
              const Icon = ind.icon;
              return (
                <div
                  key={ind.label}
                  className="bg-brand-sage rounded-2xl p-8 text-center border border-gray-100"
                >
                  <Icon className="text-brand-teal mx-auto mb-3" size={30} />
                  <div className="text-3xl font-bold text-brand-coral mb-1">
                    {ind.value}
                  </div>
                  <div className="text-sm font-bold text-brand-navy uppercase tracking-wider mb-1">
                    {ind.label}
                  </div>
                  <p className="text-gray-600 text-sm">{ind.desc}</p>
                </div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ── CERTIFICATIONS ── */}
      <section className="py-24 bg-brand-navy">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <p className="text-brand-orange text-xs font-bold uppercase tracking-widest mb-4">
              Internationally Recognised
            </p>
            <h2 className="text-4xl font-bold text-white mb-8">
              Our Certifications
            </h2>
            <div className="flex flex-wrap justify-center gap-4 mb-10">
              {["GOTS", "OEKO-TEX®", "ISO 9001", "WRAP", "SEDEX", "BCI"].map(
                (cert, i) => (
                  <div
                    key={i}
                    className="bg-white/10 border border-white/20 rounded-xl px-8 py-4 text-white font-bold text-lg tracking-wider"
                  >
                    {cert}
                  </div>
                ),
              )}
            </div>
            <Link
              href="/certifications"
              className="inline-block border-2 border-brand-teal text-brand-teal font-bold px-8 py-3 rounded-xl hover:bg-brand-teal hover:text-white transition-all uppercase tracking-wider text-sm"
            >
              View All Certifications
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="py-32 bg-brand-teal relative overflow-hidden">
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Responsible apparel manufacturing, built for the future.
            </h2>
            <p className="text-white/80 text-lg max-w-2xl mx-auto mb-10">
              Classic Fashion continues to invest in renewable energy,
              circular resource use, and operational efficiency to support
              responsible manufacturing for global fashion brands.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-block bg-white text-brand-teal font-bold px-10 py-4 rounded-lg hover:bg-brand-navy hover:text-white transition-all uppercase tracking-widest text-sm shadow-xl"
              >
                Contact Us
              </Link>
              <Link
                href="/what-we-do"
                className="inline-block border-2 border-white/60 text-white font-bold px-10 py-4 rounded-lg hover:bg-white hover:text-brand-teal transition-all uppercase tracking-widest text-sm"
              >
                Explore What We Do
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <FaqSection items={faqs} className="bg-brand-gray" />
    </div>
  );
}
