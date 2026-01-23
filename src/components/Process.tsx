import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function Process() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const steps = [
    {
      number: '01',
      title: 'Preparation',
      description:
        'Surface assessment, precise measurements, and material selection tailored to your space and design goals.',
      details: [
        'Wall condition evaluation',
        'Pattern layout planning',
        'Material compatibility check',
      ],
    },
    {
      number: '02',
      title: 'Installation',
      description:
        'Expert application with attention to alignment, seam placement, and pattern continuity across surfaces.',
      details: [
        'Pattern matching & alignment',
        'Seamless application',
        'Corner and edge finishing',
      ],
    },
    {
      number: '03',
      title: 'Finishing',
      description:
        'Detailed inspection, cleanup, and final touches ensuring a flawless result that lasts.',
      details: [
        'Quality inspection',
        'Surface protection',
        'Complete site cleanup',
      ],
    },
  ];

  return (
    <section
      id="process"
      className="paper-texture relative min-h-screen px-8 py-24 md:px-16 lg:px-24"
      ref={ref}
    >
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mb-20"
        >
          <div className="mb-4 inline-block border-l-2 border-gold-rich pl-4 text-sm uppercase tracking-widest text-gold-rich">
            Our Process
          </div>
          <h2 className="font-serif text-5xl font-light leading-tight tracking-tight text-charcoal md:text-6xl">
            From Start to Finish
          </h2>
          <p className="mt-4 text-lg text-charcoal/70">
            Whether wallcovering or paint, our approach stays the same:
            precision, care, and quality.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="space-y-20 lg:space-y-24">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.8,
                delay: 0.2 + index * 0.15,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="grid gap-8 lg:grid-cols-12 lg:gap-16"
            >
              {/* Number */}
              <div className="lg:col-span-2">
                <div className="font-serif text-6xl font-light text-gold-rich/30 md:text-7xl lg:text-8xl">
                  {step.number}
                </div>
              </div>

              {/* Content */}
              <div className="lg:col-span-10">
                <h3 className="mb-4 font-serif text-3xl font-light text-charcoal md:text-4xl">
                  {step.title}
                </h3>
                <p className="mb-6 max-w-2xl text-lg leading-relaxed text-charcoal/70">
                  {step.description}
                </p>

                {/* Details */}
                <ul className="space-y-2">
                  {step.details.map((detail, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-sm text-charcoal/60"
                    >
                      <span className="mt-1.5 h-1 w-1 rounded-full bg-gold-rich" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Divider line (except for last item) */}
              {index < steps.length - 1 && (
                <div className="col-span-full h-px bg-charcoal/10" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
