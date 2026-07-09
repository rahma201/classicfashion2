import type { CSSProperties } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

export interface FaqItem {
  q: string;
  a: string;
}

export function faqJsonLd(items: FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };
}

interface FaqSectionProps {
  items: FaqItem[];
  eyebrow?: string;
  title?: string;
  className?: string;
  style?: CSSProperties;
  titleClassName?: string;
}

export function FaqSection({
  items,
  eyebrow = "FAQ",
  title = "Frequently Asked Questions",
  className = "bg-white",
  style,
  titleClassName = "text-brand-navy",
}: FaqSectionProps) {
  return (
    <section
      className={`py-24 ${className}`}
      style={style}
      aria-labelledby="faq-heading"
    >
      <div className="container relative mx-auto px-4 md:px-6 max-w-3xl">
        <div className="text-center mb-12">
          <p className="text-brand-coral text-xs font-bold uppercase tracking-widest mb-3">
            {eyebrow}
          </p>
          <h2 id="faq-heading" className={`text-4xl font-bold ${titleClassName}`}>
            {title}
          </h2>
        </div>
        <Accordion type="single" collapsible className="w-full">
          {items.map((item, i) => (
            <AccordionItem key={i} value={`item-${i}`} className="border-gray-200">
              <AccordionTrigger className="text-lg font-bold text-brand-navy hover:no-underline py-5 text-left">
                {item.q}
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 text-base leading-relaxed">
                {item.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
