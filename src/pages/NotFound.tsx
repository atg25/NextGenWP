import { motion } from 'framer-motion';

export default function NotFound() {
  return (
    <section className="flex min-h-screen w-full items-center justify-center bg-warm-white px-8 py-24">
      <div className="text-center">
        {/* 404 Number */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mb-6"
        >
          <span className="font-serif text-9xl font-light text-charcoal">404</span>
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="mb-4 font-serif text-4xl font-light text-charcoal md:text-5xl"
        >
          Page Not Found
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="mb-12 max-w-md text-lg text-charcoal/70 md:text-xl"
        >
          We couldn't find the page you're looking for. It may have been moved or
          no longer exists.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <a
            href="/"
            className="group relative inline-flex items-center gap-2 overflow-hidden bg-accent px-10 py-4 text-sm font-medium uppercase tracking-wider text-warm-white transition-all duration-300 hover:gap-4"
          >
            <span>Back to Home</span>
            <svg
              className="h-4 w-4 transition-transform group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>

          <a
            href="#work"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#work')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="text-sm uppercase tracking-wider text-charcoal/60 transition-colors hover:text-accent"
          >
            View Our Work
          </a>
        </motion.div>

        {/* Decorative Element */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.3 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-16 h-1 w-16 bg-accent"
          style={{ margin: '4rem auto 0' }}
        />
      </div>
    </section>
  );
}
