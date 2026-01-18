import { motion } from 'framer-motion';

export default function Hero() {
  const wallpaperImages = [
    '/wallpapers/sample-1.jpg',
    '/wallpapers/sample-2.jpg',
    '/wallpapers/sample-3.jpg',
    '/wallpapers/sample-4.jpg',
  ];

  return (
    <section className="relative flex min-h-screen w-full flex-col overflow-hidden bg-warm-white lg:flex-row">
      {/* Left Content Section */}
      <div className="relative z-10 flex w-full flex-col justify-center px-8 py-20 lg:w-1/2 lg:px-16 xl:px-24">
        {/* Background for left side */}
        <div className="paper-texture absolute inset-0" />

        <div className="relative z-10 max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="mb-6 inline-block border-l-2 border-accent pl-4 text-sm uppercase tracking-widest text-accent"
          >
            Next Gen Wallpaper
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="font-serif text-6xl font-light leading-[1.1] tracking-tight text-charcoal md:text-7xl lg:text-7xl xl:text-8xl"
          >
            Precision Installed
            <br />
            <span className="italic">Wallpaper</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="mt-8 max-w-xl text-xl leading-relaxed text-charcoal/70"
          >
            Modern wallpaper installation for homes that value craft, material
            quality, and lasting design.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="mt-12 flex items-center gap-6"
          >
            <a
              href="#contact"
              className="group relative inline-flex items-center gap-2 overflow-hidden bg-accent px-10 py-4 text-sm font-medium uppercase tracking-wider text-warm-white transition-all duration-300 hover:gap-4"
            >
              <span>Request Quote</span>
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
              className="text-sm uppercase tracking-wider text-charcoal/60 transition-colors hover:text-accent"
            >
              View Work
            </a>
          </motion.div>
        </div>

        {/* Scroll Indicator - Only on mobile/left side */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="absolute bottom-12 left-8 flex items-center gap-3 lg:hidden"
        >
          <div className="h-16 w-[1px] bg-charcoal/20" />
          <span className="text-xs uppercase tracking-wider text-charcoal/40">
            Scroll
          </span>
        </motion.div>
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
