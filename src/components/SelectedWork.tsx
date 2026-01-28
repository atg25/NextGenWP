import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function SelectedWork() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const projects = [
    {
      id: 1,
      title: 'Modern Geometric Pattern',
      image: '/wallpapers/mosaic.webp',
      description:
        'Precise pattern matching across floor-to-ceiling installation',
    },
    {
      id: 2,
      title: 'Textured Linen',
      image: '/wallpapers/sittingroom.webp',
      description: 'Clean seams on high-texture material',
    },
    {
      id: 3,
      title: 'Classic Damask',
      image: '/wallpapers/octopus.webp',
      description: 'Traditional pattern with modern precision',
    },
    {
      id: 4,
      title: 'Contemporary Abstract',
      image: '/wallpapers/abstract.webp',
      description: 'Complex alignment requiring expert installation',
    },
  ];

  return (
    <section
      id="work"
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
            Selected Work
          </div>
          <h2 className="font-serif text-5xl font-light leading-tight tracking-tight text-charcoal md:text-6xl">
            Pattern Precision
          </h2>
          <p className="mt-6 max-w-2xl text-xl leading-relaxed text-charcoal/70">
            Every installation demonstrates our commitment to alignment, detail,
            and material quality.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.8,
                delay: 0.2 + index * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group relative overflow-hidden bg-white"
            >
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />
                {/* Subtle overlay */}
                <div className="absolute inset-0 bg-charcoal/0 transition-colors duration-300 group-hover:bg-charcoal/5" />
              </div>

              {/* Content */}
              <div className="border-l-2 border-gold-rich/20 p-6 transition-colors duration-300 group-hover:border-gold-rich">
                <h3 className="mb-2 font-serif text-2xl font-light text-charcoal">
                  {project.title}
                </h3>
                <p className="text-sm leading-relaxed text-charcoal/60">
                  {project.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Optional: View More Link */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{
            duration: 0.8,
            delay: 0.6,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mt-16 text-center"
        >
          <a
            href="#contact"
            onClick={e => {
              e.preventDefault();
              document
                .querySelector('#contact')
                ?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="inline-block text-sm uppercase tracking-wider text-charcoal/60 transition-colors hover:text-gold-rich"
          >
            Discuss Your Project →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
