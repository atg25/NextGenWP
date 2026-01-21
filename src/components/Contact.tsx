import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';

export default function Contact() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [status, setStatus] = useState<
    'idle' | 'submitting' | 'success' | 'error'
  >('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    // TODO: Replace with actual form submission logic (Formspree, Netlify Forms, etc.)
    // Simulating submission for now
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', phone: '', message: '' });

      // Reset success message after 5 seconds
      setTimeout(() => setStatus('idle'), 5000);
    }, 1000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section
      id="contact"
      className="relative min-h-screen bg-warm-white px-8 py-24 md:px-16 lg:px-24"
      ref={ref}
    >
      <div className="mx-auto max-w-4xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16 text-center"
        >
          <div className="mb-4 inline-block border-l-2 border-accent pl-4 text-sm uppercase tracking-widest text-accent">
            Get in Touch
          </div>
          <h2 className="font-serif text-5xl font-light leading-tight tracking-tight text-charcoal md:text-6xl">
            Let's Discuss <br />
            <span className="italic">Your Project</span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-charcoal/70">
            Share your vision, and we'll provide honest guidance on how to bring
            it to life.
          </p>
        </motion.div>

        {/* Form */}
        <motion.form
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{
            duration: 0.8,
            delay: 0.2,
            ease: [0.22, 1, 0.36, 1],
          }}
          onSubmit={handleSubmit}
          className="space-y-6"
        >
          {/* Name */}
          <div>
            <label
              htmlFor="name"
              className="mb-2 block text-sm uppercase tracking-wider text-charcoal/60"
            >
              Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full border-b-2 border-charcoal/20 bg-transparent px-0 py-3 text-charcoal transition-colors focus:border-accent focus:outline-none"
            />
          </div>

          {/* Email & Phone */}
          <div className="grid gap-6 sm:grid-cols-2">
            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-sm uppercase tracking-wider text-charcoal/60"
              >
                Email *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full border-b-2 border-charcoal/20 bg-transparent px-0 py-3 text-charcoal transition-colors focus:border-accent focus:outline-none"
              />
            </div>
            <div>
              <label
                htmlFor="phone"
                className="mb-2 block text-sm uppercase tracking-wider text-charcoal/60"
              >
                Phone
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full border-b-2 border-charcoal/20 bg-transparent px-0 py-3 text-charcoal transition-colors focus:border-accent focus:outline-none"
              />
            </div>
          </div>

          {/* Message */}
          <div>
            <label
              htmlFor="message"
              className="mb-2 block text-sm uppercase tracking-wider text-charcoal/60"
            >
              Project Details *
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={6}
              value={formData.message}
              onChange={handleChange}
              className="w-full resize-none border-b-2 border-charcoal/20 bg-transparent px-0 py-3 text-charcoal transition-colors focus:border-accent focus:outline-none"
              placeholder="Tell us about your space, design goals, and timeline..."
            />
          </div>

          {/* Submit Button */}
          <div className="pt-6">
            <button
              type="submit"
              disabled={status === 'submitting'}
              className="group relative inline-flex items-center gap-2 overflow-hidden bg-accent px-12 py-4 text-sm font-medium uppercase tracking-wider text-warm-white transition-all duration-300 hover:gap-4 disabled:opacity-50"
            >
              <span>
                {status === 'submitting' ? 'Sending...' : 'Send Message'}
              </span>
              {status === 'idle' && (
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
              )}
            </button>

            {/* Success Message */}
            {status === 'success' && (
              <p className="mt-4 text-sm text-accent">
                Thank you! We'll be in touch soon.
              </p>
            )}

            {/* Error Message */}
            {status === 'error' && (
              <p className="mt-4 text-sm text-red-600">
                Something went wrong. Please try again.
              </p>
            )}
          </div>
        </motion.form>
      </div>

      {/* Footer */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{
          duration: 0.8,
          delay: 0.6,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="mx-auto mt-24 max-w-4xl border-t border-charcoal/10 pt-12 text-center text-sm text-charcoal/50"
      >
        <p>
          © {new Date().getFullYear()} NewGen Wallcovering. Precision
          installation for modern homes.
        </p>
      </motion.div>
    </section>
  );
}
