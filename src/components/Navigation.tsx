import { motion, useScroll, useTransform } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 100], [0, 1]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Work', href: '#work' },
    { name: 'Process', href: '#process' },
    { name: 'Materials', href: '#materials' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.nav
      style={{ opacity }}
      className={`fixed left-0 right-0 top-0 z-50 transition-colors duration-300 ${
        isScrolled ? 'bg-warm-white/95 backdrop-blur-sm' : 'bg-transparent'
      }`}
    >
      <div className="mx-auto max-w-7xl px-8 py-6 md:px-16 lg:px-24">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            onClick={e => handleClick(e, '#')}
            className="font-serif text-xl font-light tracking-tight text-charcoal transition-colors hover:text-accent"
          >
            NextGen <span className="italic">Wallpaper</span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden items-center gap-8 md:flex">
            {navLinks.map(link => (
              <a
                key={link.name}
                href={link.href}
                onClick={e => handleClick(e, link.href)}
                className="text-sm uppercase tracking-wider text-charcoal/60 transition-colors hover:text-accent"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="text-charcoal md:hidden"
            aria-label="Menu"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </motion.nav>
  );
}
