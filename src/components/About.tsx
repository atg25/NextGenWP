import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section
      id="about"
      className="paper-texture relative min-h-screen px-8 py-24 md:px-16 lg:px-24"
      ref={ref}
    >
      <div className="mx-auto max-w-4xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mb-12"
        >
          <div className="mb-4 inline-block border-l-2 border-gold-rich pl-4 text-sm uppercase tracking-widest text-gold-rich">
            About
          </div>
          <h2 className="font-serif text-5xl font-light leading-tight tracking-tight text-charcoal md:text-6xl">
            NextGen Wallcovering
          </h2>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{
            duration: 0.8,
            delay: 0.2,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="space-y-8 text-lg leading-relaxed text-charcoal/80"
        >
          <p>
            NextGen Wallcovering began with a simple belief: that wallpaper
            installation is a craft requiring precision, patience, and respect
            for materials.
          </p>

          <p>
            We specialize in modern wallpaper installation for homeowners who
            value quality over speed. Every project receives the same level of
            attention — careful surface preparation, exact pattern matching, and
            meticulous finishing. We also offer professional paint services for
            those seeking a complementary or simpler refresh.
          </p>

          <p>
            What sets us apart isn't flashy marketing or inflated promises. It's
            our commitment to doing the work correctly, using proper techniques,
            and treating your home with the care it deserves. Clean installs.
            Honest communication. No shortcuts.
          </p>

          <p className="border-l-2 border-gold-rich pl-6 font-serif text-xl italic text-charcoal/90">
            We let the quality of our installations speak for itself.
          </p>
        </motion.div>

        {/* Optional: Simple stats or credentials */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{
            duration: 0.8,
            delay: 0.4,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mt-16 grid gap-8 border-t border-charcoal/10 pt-12 sm:grid-cols-3"
        >
          <div>
            <div className="mb-2 font-serif text-3xl font-light text-accent">
              5+
            </div>
            <div className="text-sm uppercase tracking-wider text-charcoal/50">
              Years Experience
            </div>
          </div>
          <div>
            <div className="mb-2 font-serif text-3xl font-light text-accent">
              50+
            </div>
            <div className="text-sm uppercase tracking-wider text-charcoal/50">
              Projects Completed
            </div>
          </div>
          <div>
            <div className="mb-2 font-serif text-3xl font-light text-accent">
              100%
            </div>
            <div className="text-sm uppercase tracking-wider text-charcoal/50">
              Quality Focused
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
