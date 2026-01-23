import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import Logo from './Logo';

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  const navLinks = [
    { name: 'Work', href: '#work' },
    { name: 'Process', href: '#process' },
    { name: 'Materials', href: '#materials' },
    { name: 'About', href: '#about' },
  ];

  const handleClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);

    if (href === '#') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const element = document.querySelector(href);
      element?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <motion.nav className="fixed left-0 right-0 top-0 z-50 bg-navy-deep shadow-lg transition-shadow duration-300">
        <div className="px-8 py-6 lg:px-16 xl:px-24">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a
              href="#"
              onClick={e => handleClick(e, '#')}
              className="flex items-center gap-3"
            >
              <Logo className="mt-2 h-8 w-auto md:h-10" />
              <span className="font-serif text-xl font-light tracking-tight text-warm-white/70 md:text-2xl">
                NextGen <span className="italic">Wallcovering</span>
              </span>
            </a>

            {/* Desktop Nav */}
            <div className="hidden items-center gap-8 md:flex">
              {navLinks.map(link => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={e => handleClick(e, link.href)}
                  className="text-sm uppercase tracking-wider text-warm-white/80 transition-colors hover:text-gold-rich hover:underline"
                >
                  {link.name}
                </a>
              ))}

              {/* Free Estimate CTA Button */}
              <a
                href="#contact"
                onClick={e => handleClick(e, '#contact')}
                className="ml-4 rounded-sm bg-gold-rich px-6 py-2 text-sm font-medium uppercase tracking-wider text-navy-deep transition-all hover:bg-gold-accent"
              >
                Free Estimate
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              className={`rounded-md p-2 transition-all duration-300 md:hidden ${
                isMobileMenuOpen
                  ? 'bg-gold-rich text-navy-deep'
                  : 'border border-gold-rich/40 bg-transparent text-gold-rich hover:bg-gold-rich/10'
              }`}
              aria-label="Menu"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-navy-deep md:hidden"
          >
            <div className="flex h-full flex-col items-center justify-center gap-8 px-8">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={e => handleClick(e, link.href)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + index * 0.05 }}
                  className="font-serif text-4xl font-light tracking-tight text-gold-rich transition-colors hover:text-warm-white"
                >
                  {link.name}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
