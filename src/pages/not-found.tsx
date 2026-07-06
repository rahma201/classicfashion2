import { Link } from "wouter";
import { Compass, ArrowRight } from "lucide-react";
import { useSeo } from "@/hooks/use-seo";

const helpfulLinks = [
  { name: "Who We Are", href: "/who-we-are" },
  { name: "What We Do", href: "/what-we-do" },
  { name: "Sustainability", href: "/sustainability" },
  { name: "Contact Us", href: "/contact" },
];

export default function NotFound() {
  useSeo({
    title: "Page Not Found — Classic Fashion",
    description: "The page you're looking for doesn't exist.",
    path: "/404",
    noindex: true,
  });

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-brand-gray px-6 py-32">
      <div className="w-full max-w-lg text-center">
        <div className="w-16 h-16 rounded-full bg-brand-coral/10 flex items-center justify-center mx-auto mb-8">
          <Compass className="text-brand-coral" size={32} />
        </div>
        <div className="text-brand-coral text-sm font-bold uppercase tracking-widest mb-3">
          404
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4">
          We couldn't find that page
        </h1>
        <p className="text-gray-600 text-lg leading-relaxed mb-10">
          The page you're looking for may have moved or no longer exists.
          Here are a few places to pick back up.
        </p>

        <div className="grid grid-cols-2 gap-3 mb-10">
          {helpfulLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="bg-white border border-gray-100 rounded-xl px-4 py-3 text-sm font-bold text-brand-navy hover:border-brand-coral hover:text-brand-coral transition-colors shadow-sm"
            >
              {link.name}
            </Link>
          ))}
        </div>

        <Link
          href="/"
          className="inline-flex items-center gap-2 bg-brand-navy text-white font-bold px-8 py-4 rounded-xl hover:bg-opacity-90 transition-all uppercase tracking-widest text-sm"
        >
          Back to Home <ArrowRight size={16} />
        </Link>
      </div>
    </div>
  );
}
