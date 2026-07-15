import { Link } from "wouter";
import { Clock, ArrowRight } from "lucide-react";
import { useSeo } from "@/hooks/use-seo";

interface ComingSoonProps {
  title: string;
  path: string;
}

export function ComingSoon({ title, path }: ComingSoonProps) {
  useSeo({
    title: `${title} — Classic Fashion`,
    description: `The ${title} page is coming soon.`,
    path,
    noindex: true,
  });

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-brand-gray px-6 py-32">
      <div className="w-full max-w-lg text-center">
        <div className="w-16 h-16 rounded-full bg-brand-coral/10 flex items-center justify-center mx-auto mb-8">
          <Clock className="text-brand-coral" size={32} />
        </div>
        <div className="text-brand-coral text-sm font-bold uppercase tracking-widest mb-3">
          Coming Soon
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4">
          {title}
        </h1>
        <p className="text-gray-600 text-lg leading-relaxed mb-10">
          We're working on this page. Please check back soon.
        </p>

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
