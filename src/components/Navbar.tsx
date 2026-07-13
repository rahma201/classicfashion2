import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { X } from "lucide-react";
import { TbMenu3 } from "react-icons/tb";
import { AnimatePresence, motion } from "framer-motion";

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

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const scrollToTop = () => window.scrollTo(0, 0);

  const linkClass = `nav-link-bar relative text-sm font-bold tracking-wide transition-colors duration-200 ${
    solidNav
      ? "text-brand-navy hover:text-brand-coral"
      : "text-brand-navy hover:text-brand-coral"
  }`;

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      {/* Desktop logo — fixed to the top-left corner. Kept as a direct header child
          (not inside the blurred bar below) so it stays viewport-anchored: backdrop-filter
          on an ancestor would otherwise turn it into a containing block for this fixed element.
          z-55: must stay above the bar wrapper's z-50, otherwise once both are equal the wrapper
          (later in DOM, and full-width once scrolled) paints over and hides the logo. */}
      <Link
        href="/"
        onClick={scrollToTop}
        className="hidden lg:flex fixed left-6 top-4 z-55 items-center justify-center transition-all duration-300"
      >
        <img
          src="/images/heroes/homepage_1783290884398.svg"
          alt="Classic Fashion"
          className={` w-auto transition-all duration-300 ${solidNav ? "h-14" : "h-24"}`}
        />
      </Link>

      {/* Bar background — blur/tint lives on this inner wrapper, not <header>, for the same reason.
          relative z-50: backdrop-blur forces this element into its own stacking context at an
          implicit z-index:0, which would otherwise sit *below* the z-40 mobile menu overlay and
          hide the toggle button underneath it once scrolled. */}
      <div
        className={`relative z-50 transition-all duration-300 ${
          solidNav ? "bg-white/40 backdrop-blur-lg shadow-sm py-3" : "bg-transparent py-5"
        }`}
      >
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
            className={`lg:hidden relative z-60 p-2 rounded-md transition-colors ${
              isOpen ? "text-brand-beige-50" : "text-brand-navy"
            }`}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            aria-expanded={isOpen}
            aria-controls="mobile-nav"
          >
            {isOpen ? <X size={32} /> : <TbMenu3 size={32} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-nav"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden fixed inset-0 z-40 overflow-y-auto"
          >
            {/* premium navy/gold backdrop */}
            <div
              aria-hidden="true"
              className="absolute inset-0 -z-10 backdrop-blur-lg bg-brand-beige-300/60"
            />
         

            <motion.nav
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={{
                visible: { transition: { staggerChildren: 0.06, delayChildren: 0.2 } },
                hidden: {},
              }}
              className="relative flex min-h-full flex-col justify-center px-8 pb-24 pt-28"
            >
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  variants={{
                    hidden: { opacity: 0, y: 18 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  transition={{ duration: 0.45 }}
                  className="border-b border-brand-beige-50/15"
                >
                  <Link
                    href={link.href}
                    onClick={() => {
                      setIsOpen(false);
                      scrollToTop();
                    }}
                    className="group flex items-center justify-between py-4"
                  >
                    <span className="font-display text-2xl font-bold text-brand-beige-50 transition-colors group-hover:text-brand-orange">
                      {link.name}
                    </span>
                    <span className="font-mono text-xs tracking-widest text-brand-navy/60">
                      0{i + 1}
                    </span>
                  </Link>
                </motion.div>
              ))}

              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 18 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.45 }}
                className="mt-10"
              >
                <Link
                  href="/contact"
                  onClick={() => {
                    setIsOpen(false);
                    scrollToTop();
                  }}
                  className="block w-full rounded-full bg-gradient-to-r from-brand-orange to-brand-coral py-4 text-center text-sm font-bold uppercase tracking-widest text-white shadow-[0_16px_40px_rgba(0,0,0,0.35)]"
                >
                  Request a Quote
                </Link>
              </motion.div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}