import { useState } from "react";
import { motion } from "framer-motion";
import { useLocation } from "wouter";
import { MapPin, Phone, Mail, Briefcase } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { Breadcrumbs, breadcrumbJsonLd } from "@/components/Breadcrumbs";
import { FaqSection, faqJsonLd, type FaqItem } from "@/components/FaqSection";
import { useSeo } from "@/hooks/use-seo";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const countries = [
  "United States",
  "United Kingdom",
  "Germany",
  "France",
  "Canada",
  "Australia",
  "UAE",
  "Saudi Arabia",
  "Jordan",
  "Egypt",
  "India",
  "Bangladesh",
  "China",
  "Japan",
  "South Korea",
  "Italy",
  "Spain",
  "Netherlands",
  "Belgium",
  "Sweden",
  "Denmark",
  "Norway",
  "Switzerland",
  "Austria",
  "Poland",
  "Brazil",
  "Mexico",
  "Other",
];

const productCategories = [
  "T-Shirts & Tops",
  "Bottoms (Pants, Shorts, Skirts)",
  "Outerwear & Jackets",
  "Activewear & Sportswear",
  "Seamless Garments",
  "Embroidered Items",
  "Denim",
  "Knitwear",
  "Swimwear",
  "Intimate Apparel",
  "Other",
];

const quantities = [
  "Under 10,000 units",
  "10,000 – 50,000 units",
  "50,000 – 100,000 units",
  "100,000 – 500,000 units",
  "500,000+ units",
  "Discuss with sales team",
];

const targetMarkets = [
  "USA",
  "Europe",
  "Canada",
  "Middle East",
  "Asia Pacific",
  "Global",
  "Other",
];

const faqs: FaqItem[] = [
  {
    q: "How can global brands request a quote from Classic Fashion?",
    a: "Complete the RFQ form on this page with your product category, estimated quantity, and target market, or email info@classicfashion.com. Our sales team typically responds within 24–48 business hours.",
  },
  {
    q: "What is the minimum order quantity (MOQ)?",
    a: "MOQs vary by product category and complexity. Classic Fashion typically serves brands starting from 10,000 units per style, scaling up to 500,000+ units for high-volume programmes.",
  },
  {
    q: "Does Classic Fashion work directly with startups or only large brands?",
    a: "Classic Fashion partners with both emerging labels and the world's largest retailers, tailoring minimum order quantities and support levels to the brand's stage of growth.",
  },
];

export default function Contact() {
  useSeo({
    title: "Contact & RFQ — Classic Fashion | MENA's Largest Apparel Manufacturer",
    description:
      "Request a quote from Classic Fashion, the largest apparel manufacturer in the MENA region. Reach our sales team in Jordan or submit an RFQ — response within 24–48 hours.",
    path: "/contact",
    jsonLd: [
      breadcrumbJsonLd([{ label: "Contact", href: "/contact" }]),
      faqJsonLd(faqs),
    ],
  });

  const [, navigate] = useLocation();
  const [consent, setConsent] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    /* Run HTML5 constraint validation explicitly — guards against programmatic submits */
    if (!e.currentTarget.checkValidity()) {
      e.currentTarget.reportValidity();
      return;
    }
    if (!consent) return;
    navigate("/thank-you");
  };

  return (
    <div className="min-h-screen bg-brand-gray">
      <PageHero
        title="Contact Us"
        subtitle="Partner with the MENA region's largest garment manufacturer. Let's build something great together."
        image="/images/heroes/contact-us-hero.png"
        overlay="bg-brand-navy/72"
        imagePosition="center 60%"
      />
      <Breadcrumbs items={[{ label: "Contact" }]} />

      <div className="container mx-auto px-4 md:px-6 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left — Contact Info */}
          <motion.aside
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-1 space-y-8"
          >
            <div>
              <h2 className="text-2xl font-bold text-brand-navy mb-6">
                Get in Touch
              </h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-11 h-11 bg-brand-coral rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin size={20} className="text-white" />
                  </div>
                  <div>
                    <div className="font-bold text-brand-navy text-sm uppercase tracking-wider mb-1">
                      Headquarters
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Al Hassan Industrial Estate
                      <br />
                      P.O. Box 54, Ramtha
                      <br />
                      Irbid, Jordan — 21467
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-11 h-11 bg-brand-teal rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone size={20} className="text-white" />
                  </div>
                  <div>
                    <div className="font-bold text-brand-navy text-sm uppercase tracking-wider mb-1">
                      Phone
                    </div>
                    <p className="text-gray-600 text-sm">+962 273 91369</p>
                    <p className="text-gray-600 text-sm">+962 273 91368</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-11 h-11 bg-brand-orange rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail size={20} className="text-white" />
                  </div>
                  <div>
                    <div className="font-bold text-brand-navy text-sm uppercase tracking-wider mb-1">
                      Email
                    </div>
                    <a
                      href="mailto:info@classicfashion.com"
                      className="text-brand-coral text-sm hover:underline"
                    >
                      info@classicfashion.com
                    </a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-11 h-11 bg-brand-navy rounded-full flex items-center justify-center flex-shrink-0">
                    <Briefcase size={20} className="text-white" />
                  </div>
                  <div>
                    <div className="font-bold text-brand-navy text-sm uppercase tracking-wider mb-1">
                      Careers
                    </div>
                    <a
                      href="mailto:careers@classicfashion.com"
                      className="text-brand-coral text-sm hover:underline"
                    >
                      careers@classicfashion.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Why partner */}
            <div className="bg-brand-navy text-white rounded-2xl p-8">
              <h3 className="text-lg font-bold mb-4">Why Classic Fashion?</h3>
              <ul className="space-y-3 text-sm text-white/80">
                {[
                  "550,000 garments produced daily",
                  "36,000+ skilled team members",
                  "20 state-of-the-art factories",
                  "GOTS, OEKO-TEX & ISO certified",
                  "UN SDG committed manufacturer",
                  "Royal Court & HSBC backed",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-brand-coral mt-0.5">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </motion.aside>

          {/* Right — Full RFQ Form */}
          <motion.section
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-2 bg-white rounded-3xl shadow-lg border border-gray-100 p-8 md:p-12"
            aria-label="Request for Quote Form"
          >
            <h2 className="text-2xl font-bold text-brand-navy mb-2">
              Request for Quote
            </h2>
            <p className="text-gray-500 text-sm mb-8">
              Fill in the form below and our sales team will respond within
              24–48 hours.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Row 1 */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="fullName"
                    className="block text-sm font-bold text-brand-navy mb-2"
                  >
                    Full Name *
                  </label>
                  <input
                    id="fullName"
                    required
                    type="text"
                    placeholder="Jane Smith"
                    className="w-full bg-brand-gray border border-gray-200 rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-brand-coral outline-none"
                  />
                </div>
                <div>
                  <label
                    htmlFor="company"
                    className="block text-sm font-bold text-brand-navy mb-2"
                  >
                    Company Name *
                  </label>
                  <input
                    id="company"
                    required
                    type="text"
                    placeholder="Acme Apparel Inc."
                    className="w-full bg-brand-gray border border-gray-200 rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-brand-coral outline-none"
                  />
                </div>
              </div>

              {/* Row 2 */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-bold text-brand-navy mb-2"
                  >
                    Work Email *
                  </label>
                  <input
                    id="email"
                    required
                    type="email"
                    placeholder="jane@company.com"
                    className="w-full bg-brand-gray border border-gray-200 rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-brand-coral outline-none"
                  />
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-bold text-brand-navy mb-2"
                  >
                    Phone Number
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    placeholder="+1 (555) 000-0000"
                    className="w-full bg-brand-gray border border-gray-200 rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-brand-coral outline-none"
                  />
                </div>
              </div>

              {/* Row 3 */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="country"
                    className="block text-sm font-bold text-brand-navy mb-2"
                  >
                    Country *
                  </label>
                  <select
                    id="country"
                    required
                    className="w-full bg-brand-gray border border-gray-200 rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-brand-coral outline-none appearance-none"
                  >
                    <option value="">Select country…</option>
                    {countries.map((c) => (
                      <option key={c} value={c}>
                        {c}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label
                    htmlFor="productCategory"
                    className="block text-sm font-bold text-brand-navy mb-2"
                  >
                    Product Category *
                  </label>
                  <select
                    id="productCategory"
                    required
                    className="w-full bg-brand-gray border border-gray-200 rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-brand-coral outline-none appearance-none"
                  >
                    <option value="">Select category…</option>
                    {productCategories.map((c) => (
                      <option key={c} value={c}>
                        {c}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Row 4 */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="quantity"
                    className="block text-sm font-bold text-brand-navy mb-2"
                  >
                    Estimated Quantity *
                  </label>
                  <select
                    id="quantity"
                    required
                    className="w-full bg-brand-gray border border-gray-200 rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-brand-coral outline-none appearance-none"
                  >
                    <option value="">Select range…</option>
                    {quantities.map((q) => (
                      <option key={q} value={q}>
                        {q}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label
                    htmlFor="targetMarket"
                    className="block text-sm font-bold text-brand-navy mb-2"
                  >
                    Target Market *
                  </label>
                  <select
                    id="targetMarket"
                    required
                    className="w-full bg-brand-gray border border-gray-200 rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-brand-coral outline-none appearance-none"
                  >
                    <option value="">Select market…</option>
                    {targetMarkets.map((m) => (
                      <option key={m} value={m}>
                        {m}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Row 5 — Message */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-bold text-brand-navy mb-2"
                >
                  Project Details & Requirements *
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  placeholder="Please describe your garment specifications, fabric preferences, branding requirements, delivery timelines, or any other relevant details…"
                  className="w-full bg-brand-gray border border-gray-200 rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-brand-coral outline-none resize-none"
                />
              </div>

              {/* Row 6 — File upload */}
              <div>
                <label
                  htmlFor="techPack"
                  className="block text-sm font-bold text-brand-navy mb-2"
                >
                  Tech Pack / Reference Files (optional)
                </label>
                <input
                  id="techPack"
                  type="file"
                  multiple
                  accept=".pdf,.doc,.docx,.jpg,.jpeg,.png,.zip"
                  className="w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-bold file:bg-brand-sage file:text-brand-navy hover:file:bg-brand-teal/20 cursor-pointer"
                />
                <p className="text-xs text-gray-400 mt-1">
                  Accepted: PDF, Word, JPG, PNG, ZIP — max 10 MB each
                </p>
              </div>

              {/* Consent */}
              <div className="flex items-start gap-3 bg-brand-sage rounded-xl px-5 py-4">
                <input
                  id="consent"
                  type="checkbox"
                  checked={consent}
                  onChange={(e) => setConsent(e.target.checked)}
                  required
                  className="mt-1 w-4 h-4 accent-brand-coral flex-shrink-0"
                />
                <label
                  htmlFor="consent"
                  className="text-sm text-gray-600 leading-relaxed cursor-pointer"
                >
                  I agree to Classic Fashion's{" "}
                  <a href="#" className="text-brand-coral hover:underline">
                    Privacy Policy
                  </a>{" "}
                  and consent to being contacted regarding my enquiry. My data
                  will not be shared with third parties.
                </label>
              </div>

              <button
                type="submit"
                disabled={!consent}
                className="w-full bg-brand-coral text-white font-bold py-4 rounded-xl hover:bg-opacity-90 transition-all uppercase tracking-widest text-sm disabled:opacity-40 disabled:cursor-not-allowed shadow-lg"
              >
                Submit Request for Quote
              </button>

              <p className="text-xs text-center text-gray-400">
                Our sales team typically responds within 24–48 business hours.
              </p>
            </form>
          </motion.section>
        </div>
      </div>

      <FaqSection items={faqs} title="Quote & Ordering FAQs" />
    </div>
  );
}
