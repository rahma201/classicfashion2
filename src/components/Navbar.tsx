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

  const solidNav = isScrolled;

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const scrollToTop = () => window.scrollTo(0, 0);

  const linkClass = `nav-link-bar relative text-sm font-bold tracking-wide transition-colors duration-200 ${
    solidNav
      ? "text-brand-navy hover:text-brand-coral"
      : "text-brand-navy hover:text-brand-coral"
  }`;

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        solidNav ? "bg-white/95 backdrop-blur-md shadow-sm py-3" : "bg-transparent py-5"
      }`}
    >
      {/* Desktop logo — fixed to the top-left corner */}
      <Link
        href="/"
        onClick={scrollToTop}
        className="hidden lg:flex fixed left-6 top-4 z-50 items-center justify-center transition-all duration-300"
      >
        <img
          src="/images/heroes/homepage_1783290884398.svg"
          alt="Classic Fashion"
          className="h-24 w-auto transition-all duration-300"
        />
      </Link>

      <div className="max-w-[1160px] mx-auto px-6 flex items-center justify-between lg:justify-center">
        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-8 rounded-full px-6 py-3 transition-all duration-300">
          <nav className="flex items-center gap-7">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={scrollToTop}
                className={linkClass}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <Link
            href="/contact"
            onClick={scrollToTop}
            className={`text-xs font-bold uppercase tracking-widest px-5 py-2.5 rounded-lg transition-all ${
              solidNav
                ? "bg-brand-coral text-white hover:bg-opacity-90"
                : "bg-brand-coral text-white hover:bg-brand-navy"
            }`}
          >
            Request a Quote
          </Link>
        </div>

        {/* Mobile logo */}
        <Link
          href="/"
          onClick={scrollToTop}
          className="lg:hidden flex-shrink-0"
        >
          <img
            src="/images/heroes/homepage_1783290884398.svg"
            alt="Classic Fashion"
            className="h-14 w-auto"
          />
        </Link>

        {/* Mobile button */}
        <button
          className={`lg:hidden p-2 rounded-md transition-colors ${
            solidNav
              ? "text-brand-navy"
              : "text-brand-navy bg-white/70 backdrop-blur-md"
          }`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
          aria-expanded={isOpen}
          aria-controls="mobile-nav"
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div
          id="mobile-nav"
          className="lg:hidden absolute top-full left-0 w-full bg-white shadow-xl border-t border-gray-100 animate-in slide-in-from-top-2 duration-200"
        >
          <nav className="flex flex-col divide-y divide-gray-50 px-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => {
                  setIsOpen(false);
                  scrollToTop();
                }}
                className="py-4 text-brand-navy font-medium text-base hover:text-brand-coral transition-colors"
              >
                {link.name}
              </Link>
            ))}

            <div className="py-4">
              <Link
                href="/contact"
                onClick={() => {
                  setIsOpen(false);
                  scrollToTop();
                }}
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