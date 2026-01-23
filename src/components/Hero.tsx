import { motion } from 'framer-motion';

export default function Hero() {
  const wallpaperImages = [
    '/wallpapers/0A974DC4-D203-4F61-8FB9-AC9DBB889DDE_1_102_o.webp',
    '/wallpapers/3961CB94-3CDC-452E-9E8F-E1E9608E8481_1_102_o.webp',
    '/wallpapers/5250FD5B-A2B3-449D-88DD-09ABEA0CCF64_1_102_o.webp',
    '/wallpapers/C8BD5D6A-9575-4066-B893-0AD0D3EEE5A3_1_102_o.webp',
  ];

  return (
    <section className="relative flex min-h-screen w-full flex-col overflow-hidden bg-warm-white lg:flex-row">
      {/* Left Content Section */}
      <div className="relative z-10 flex w-full flex-col justify-center px-8 py-32 pt-28 lg:w-1/2 lg:px-16 lg:py-20 xl:px-24">
        {/* Background for left side */}
        <div className="paper-texture absolute inset-0" />

        <div className="relative z-10 max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="mb-6 inline-block border-l-2 border-gold-rich pl-4 text-sm uppercase tracking-widest text-gold-rich"
          >
            NextGen Wallcovering
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="font-serif text-6xl font-light leading-[1.1] tracking-tight text-charcoal md:text-7xl lg:text-7xl xl:text-8xl"
          >
            Precision
            <br />
            <span className="italic">Wallcovering & Painting</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="mt-8 max-w-xl text-xl leading-relaxed text-charcoal/70"
          >
            Modern wallcovering installation for homes that value craft,
            material quality, and lasting design.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="mt-12 flex items-center gap-6"
          >
            <a
              href="#contact"
              onClick={e => {
                e.preventDefault();
                document
                  .querySelector('#contact')
                  ?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="group relative inline-flex items-center gap-2 overflow-hidden bg-gold-rich px-10 py-4 text-sm font-medium uppercase tracking-wider text-navy-deep transition-all duration-300 hover:gap-4 hover:bg-gold-accent"
            >
              <span>Get Your Free Estimate</span>
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
              onClick={e => {
                e.preventDefault();
                document
                  .querySelector('#work')
                  ?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="text-sm uppercase tracking-wider text-charcoal/70 transition-colors hover:text-gold-rich hover:underline"
            >
              View Work
            </a>
          </motion.div>
        </div>
      </div>

      {/* Right Image Grid Section */}
      <div className="relative grid h-[50vh] w-full grid-cols-2 grid-rows-2 lg:h-screen lg:w-1/2">
        {wallpaperImages.map((image, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.2 + index * 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="group relative overflow-hidden"
          >
            <img
              src={image}
              alt={`Wallpaper texture ${index + 1}`}
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            {/* Overlay on hover */}
            <div className="absolute inset-0 bg-charcoal/0 transition-colors duration-300 group-hover:bg-charcoal/10" />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
