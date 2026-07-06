import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "Who we are", href: "/who-we-are" },
  { name: "What we do", href: "/what-we-do" },
  { name: "How we do", href: "/how-we-do" },
  { name: "Where we do", href: "/where-we-do" },
  { name: "Sustainability", href: "/sustainability" },
  { name: "Blog", href: "/blog" },
  { name: "Contact Us", href: "/contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [location] = useLocation();

  /* Transparent at top of EVERY page; solid on scroll */
  const solidNav = isScrolled;

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Close mobile menu on route change */
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const linkClass = `nav-link-bar relative text-sm font-medium tracking-wide transition-colors duration-200 ${
    solidNav
      ? "text-brand-navy hover:text-brand-coral"
      : "text-white/90 hover:text-white drop-shadow"
  }`;

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-400 ${
        solidNav
          ? "bg-white/94 backdrop-blur-md shadow-sm py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-[1160px] mx-auto px-6 flex items-center justify-between">
        {/* ── LEFT: all nav links + CTA (desktop) ── */}
        <div className="hidden lg:flex items-center gap-8">
          <nav className="flex items-center gap-7">
            {navLinks.map((link) => (
              <Link key={link.name} href={link.href} className={linkClass}>
                {link.name}
              </Link>
            ))}
          </nav>
          <Link
            href="/contact"
            className={`text-xs font-bold uppercase tracking-widest px-5 py-2.5 rounded-lg transition-all ${
              solidNav
                ? "bg-brand-coral text-white hover:bg-opacity-90"
                : "bg-white/10 border border-white/40 text-white backdrop-blur-sm hover:bg-white hover:text-brand-navy"
            }`}
          >
            Request a Quote
          </Link>
        </div>

        {/* ── RIGHT: logo (desktop) ── */}
        <Link href="/" className="hidden lg:block flex-shrink-0">
          <img
            src={
              solidNav
                ? "/images/heroes/homepage_1783290884398.svg"
                : "/images/heroes/subpage_1783290884398.svg"
            }
            alt="Classic Fashion"
            className="h-14 w-auto transition-all duration-300"
          />
        </Link>

        {/* ── MOBILE: logo left, hamburger right ── */}
        <Link href="/" className="lg:hidden flex-shrink-0">
          <img
            src={
              solidNav
                ? "/images/heroes/homepage_1783290884398.svg"
                : "/images/heroes/subpage_1783290884398.svg"
            }
            alt="Classic Fashion"
            className="h-10 w-auto"
          />
        </Link>

        <button
          className={`lg:hidden p-2 rounded-md transition-colors ${
            solidNav ? "text-brand-navy" : "text-white"
          }`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
          aria-expanded={isOpen}
          aria-controls="mobile-nav"
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* ── Mobile slide-down menu ── */}
      {isOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white shadow-xl border-t border-gray-100 animate-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col divide-y divide-gray-50 px-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="py-4 text-brand-navy font-medium text-base hover:text-brand-coral transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <div className="py-4">
              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="block w-full text-center bg-brand-coral text-white font-bold py-3 rounded-lg hover:opacity-90 transition-opacity uppercase tracking-wider text-sm"
              >
                Get a Quote
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
