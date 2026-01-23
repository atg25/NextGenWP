import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function Materials() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const materials = [
    {
      id: 1,
      name: 'Traditional Paper',
      image: '/wallpapers/1D170195-22DE-4D2B-8B7C-2A44F0A4C0C1_1_105_c.webp',
      description:
        'Classic wallpaper with rich texture and depth. Washable surface for easy maintenance.',
      notes: ['Washable surface', 'Gentle cleaning', 'Beautiful finish'],
      washable: true,
    },
    {
      id: 2,
      name: 'Vinyl & Washable',
      image: '/wallpapers/CD78190C-1261-4CBC-A629-0C96A59A6412_1_102_o.webp',
      description:
        'Durable, moisture-resistant option ideal for high-traffic areas and kitchens.',
      notes: ['Easy to clean', 'Long-lasting', 'Great for families'],
      washable: true,
    },
    {
      id: 3,
      name: 'Textured & Fabric',
      image: '/wallpapers/0A974DC4-D203-4F61-8FB9-AC9DBB889DDE_1_102_o.webp',
      description:
        'Premium materials with tactile depth, adding dimension and sophistication.',
      notes: [
        'Luxury feel',
        'Sound absorption',
        'Professional install required',
      ],
    },
    {
      id: 4,
      name: 'Painting & Wallpaper Combo',
      image: '/wallpapers/528FA067-29DE-4659-8513-718D31D667D4_1_105_c.webp',
      description:
        'Seamless integration of painted surfaces with wallpaper for a cohesive look.',
      notes: ['Durable finish', 'Seamless integration', 'Expert installation'],
    },
  ];

  return (
    <section
      id="materials"
      className="relative min-h-screen bg-warm-white px-8 py-24 md:px-16 lg:px-24"
      ref={ref}
    >
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16"
        >
          <div className="mb-4 inline-block border-l-2 border-gold-rich pl-4 text-sm uppercase tracking-widest text-gold-rich">
            Materials
          </div>
          <h2 className="font-serif text-5xl font-light leading-tight tracking-tight text-charcoal md:text-6xl">
            What We Install
          </h2>
          <p className="mt-6 max-w-2xl text-xl leading-relaxed text-charcoal/70">
            Honest guidance on materials, their characteristics, and what works
            best for your space.
          </p>
        </motion.div>

        {/* Materials Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {materials.map((material, index) => (
            <motion.div
              key={material.id}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.8,
                delay: 0.1 + index * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group relative flex flex-col bg-white"
            >
              {/* Image */}
              <div className="relative aspect-square overflow-hidden">
                <img
                  src={material.image}
                  alt={material.name}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-charcoal/0 transition-colors duration-300 group-hover:bg-charcoal/5" />

                {/* WASHABLE Badge */}
                {material.washable && (
                  <div className="absolute right-4 top-4 flex items-center gap-1.5 bg-gold-rich px-3 py-1.5 text-xs font-medium uppercase tracking-wider text-navy-deep shadow-sm">
                    <svg
                      className="h-3 w-3"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Washable
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="flex flex-1 flex-col border-l-2 border-gold-rich/20 p-6">
                <h3 className="mb-3 font-serif text-xl font-light text-charcoal">
                  {material.name}
                </h3>
                <p className="mb-4 text-sm leading-relaxed text-charcoal/60">
                  {material.description}
                </p>

                {/* Notes */}
                <ul className="mt-auto space-y-1.5 border-t border-charcoal/10 pt-4">
                  {material.notes.map((note, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-xs text-charcoal/50"
                    >
                      <span className="mt-1 h-1 w-1 flex-shrink-0 rounded-full bg-gold-rich/50" />
                      <span>{note}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{
            duration: 0.8,
            delay: 0.5,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mt-16 text-center"
        >
          <p className="mb-6 text-sm text-charcoal/60">
            Not sure which material is right for your project?
          </p>
          <a
            href="#contact"
            onClick={e => {
              e.preventDefault();
              document
                .querySelector('#contact')
                ?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="inline-block text-sm uppercase tracking-wider text-gold-rich transition-colors hover:text-navy-deep"
          >
            Let's Discuss →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
