import { Link } from "wouter";
import { motion } from "framer-motion";
import { CheckCircle, ArrowRight } from "lucide-react";
import { useSeo } from "@/hooks/use-seo";

export default function ThankYou() {
  useSeo({
    title: "Thank You — Classic Fashion",
    description: "Your enquiry has been received by Classic Fashion.",
    path: "/thank-you",
    noindex: true,
  });

  return (
    <div className="min-h-screen bg-brand-gray flex flex-col items-center justify-center px-6 py-32">
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="max-w-lg w-full bg-white rounded-3xl shadow-2xl p-12 text-center"
      >
        <div className="flex justify-center mb-8">
          <img
            src="/images/heroes/homepage_1783290884398.svg"
            alt="Classic Fashion"
            className="h-20 w-auto"
          />
        </div>

        <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="text-green-500" size={44} />
        </div>

        <h1 className="text-3xl font-bold text-brand-navy mb-4">Thank You!</h1>
        <p className="text-gray-600 text-lg leading-relaxed mb-8">
          Your enquiry has been received. A member of our sales team will review
          your requirements and get back to you within{" "}
          <strong>24–48 business hours</strong>.
        </p>

        <div className="bg-brand-sage rounded-xl p-6 mb-8 text-left">
          <h2 className="font-bold text-brand-navy mb-3 text-sm uppercase tracking-wider">
            What happens next?
          </h2>
          <ol className="space-y-2 text-sm text-gray-600">
            <li className="flex gap-3">
              <span className="font-bold text-brand-coral">1.</span>Our team
              reviews your requirements and assigns the right specialist.
            </li>
            <li className="flex gap-3">
              <span className="font-bold text-brand-coral">2.</span>We prepare a
              tailored proposal and pricing estimate.
            </li>
            <li className="flex gap-3">
              <span className="font-bold text-brand-coral">3.</span>We schedule
              a call to discuss your project in detail.
            </li>
            <li className="flex gap-3">
              <span className="font-bold text-brand-coral">4.</span>We begin the
              sampling and production process together.
            </li>
          </ol>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-brand-navy text-white font-bold px-6 py-3 rounded-xl hover:bg-opacity-90 transition-all text-sm uppercase tracking-wider"
          >
            Back to Home <ArrowRight size={16} />
          </Link>
          <Link
            href="/what-we-do"
            className="inline-flex items-center gap-2 border-2 border-brand-coral text-brand-coral font-bold px-6 py-3 rounded-xl hover:bg-brand-coral hover:text-white transition-all text-sm uppercase tracking-wider"
          >
            Explore Capabilities
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
