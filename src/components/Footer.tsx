import { Link } from "wouter";
import {
  Instagram,
  Facebook,
  Youtube,
  Linkedin,
  ArrowRight,
  MapPin,
  Phone,
  Mail,
} from "lucide-react";

const quickLinks = [
  { name: "Who We Are", href: "/who-we-are" },
  { name: "What We Do", href: "/what-we-do" },
  { name: "How We Do", href: "/how-we-do" },
  { name: "Where We Do", href: "/where-we-do" },
  { name: "Sustainability", href: "/sustainability" },
  { name: "Blog", href: "/blog" },
  { name: "Contact Us", href: "/contact" },
];

const moreLinks = [
  { name: "Careers", href: "/careers" },
  { name: "Certifications", href: "/certifications" },
  { name: "Case Studies", href: "/case-studies" },
  { name: "Awards & Press", href: "/awards-press" },
  { name: "Get a Quote", href: "/contact" },
];

export function Footer() {
  return (
    <footer
      className="text-white"
      style={{
        background: 'linear-gradient(150deg, #382a17 0%, #4a3620 45%, #2f2213 100%)',
      }}
    >
      {/* CTA band */}
      <div className="border-b border-white/10 py-16">
        <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <p className="text-brand-orange text-xs font-bold uppercase tracking-widest mb-2">
              Ready to Partner?
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
              Let's build the world's next <br className="hidden md:block" />
              <span className="text-brand-coral">iconic garment together.</span>
            </h2>
          </div>
          <Link
            href="/contact"
            className="flex-shrink-0 inline-flex items-center gap-3 bg-brand-coral text-white font-bold px-8 py-4 rounded-xl hover:bg-opacity-90 transition-all uppercase tracking-widest text-sm shadow-xl"
          >
            Start a Conversation <ArrowRight size={16} />
          </Link>
        </div>
      </div>

      {/* Main footer grid */}
      <div className="container mx-auto px-4 md:px-6 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-14">
          {/* Brand */}
          <div className="lg:col-span-2">
            <img
              src="/images/heroes/subpage_1783290884398.svg"
              alt="Classic Fashion"
              className="h-20 w-auto mb-6 opacity-90"
            />
            <p className="text-white/70 text-sm leading-relaxed max-w-sm">
              The largest apparel manufacturer in the MENA region. 550,000
              garments per day. 36,000 team members. Headquartered in Jordan,
              trusted by the world.
            </p>
            <p className="mt-4 text-brand-sand italic text-sm">
              "a touch changes everything"
            </p>

            {/* Social */}
            <div className="flex gap-3 mt-6">
              {[
                { icon: Instagram, label: "Instagram" },
                { icon: Facebook, label: "Facebook" },
                { icon: Linkedin, label: "LinkedIn" },
                { icon: Youtube, label: "YouTube" },
              ].map(({ icon: Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-coral transition-colors"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-sm uppercase tracking-widest mb-5 text-white/50">
              Company
            </h3>
            <ul className="flex flex-col gap-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-white/75 hover:text-brand-coral transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* More */}
          <div>
            <h3 className="font-bold text-sm uppercase tracking-widest mb-5 text-white/50">
              More
            </h3>
            <ul className="flex flex-col gap-3">
              {moreLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-white/75 hover:text-brand-coral transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-sm uppercase tracking-widest mb-5 text-white/50">
              Contact
            </h3>
            <address className="not-italic flex flex-col gap-4 text-white/75 text-sm">
              <div className="flex gap-3">
                <MapPin size={18} className="flex-shrink-0 mt-0.5 text-brand-coral" />
                <div>
                  <div className="font-semibold text-white mb-1">
                    Headquarters
                  </div>
                  Al Hassan Industrial Estate
                  <br />
                  P.O. Box 54, Ramtha
                  <br />
                  Irbid, Jordan — 21467
                </div>
              </div>
              <div className="flex gap-3">
                <Phone size={18} className="flex-shrink-0 mt-0.5 text-brand-coral" />
                <div>
                  <div className="font-semibold text-white mb-1">Phone</div>
                  <a
                    href="tel:+96227391369"
                    className="hover:text-brand-coral transition-colors"
                  >
                    +962 273 91369
                  </a>
                  <br />
                  <a
                    href="tel:+96227391368"
                    className="hover:text-brand-coral transition-colors"
                  >
                    +962 273 91368
                  </a>
                </div>
              </div>
              <div className="flex gap-3">
                <Mail size={18} className="flex-shrink-0 mt-0.5 text-brand-coral" />
                <div>
                  <div className="font-semibold text-white mb-1">Email</div>
                  <a
                    href="mailto:info@classicfashion.com"
                    className="hover:text-brand-coral transition-colors block"
                  >
                    info@classicfashion.com
                  </a>
                  <a
                    href="mailto:careers@classicfashion.com"
                    className="hover:text-brand-coral transition-colors block mt-1"
                  >
                    careers@classicfashion.com
                  </a>
                </div>
              </div>
            </address>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-white/40 text-xs">
          <p>
            © 2026 Classic Fashion Apparel Industry Ltd. Co. All Rights
            Reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
