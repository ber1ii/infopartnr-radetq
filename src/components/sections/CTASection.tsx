import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';

const TYPEFORM_URL = "https://calendly.com/dusan-infopartnr/45min";

export const CTASection: React.FC = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <section
      id="cta-section"
      className={`section-x relative overflow-hidden py-32 text-center transition-colors duration-500 ${
        isDark ? "bg-[#0A0A0A] text-white" : "bg-white text-zinc-900"
      }`}
    >
      {/* Echo of the Hero's signature scrubber line, very faint, as a
         full-width background texture rather than a literal control. */}
      <div className={`absolute inset-x-0 top-1/2 -translate-y-1/2 h-px bg-gradient-to-r from-transparent ${
        isDark ? "via-[#4D65FF]/25" : "via-[#4D65FF]/15"
      } to-transparent pointer-events-none`} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[radial-gradient(ellipse_at_center,rgba(77,101,255,0.10),transparent_60%)] pointer-events-none" />

      <div className="relative max-w-4xl mx-auto flex flex-col items-center">

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.215, 0.610, 0.355, 1.000] }}
          className="text-4xl md:text-6xl font-normal tracking-tight leading-[1.15] max-w-3xl mb-8"
        >
          Ready to make YouTube <br /> your <br />
          <span className="text-blue-400 italic font-serif font-medium">#1 source of clients?</span>
        </motion.h2>

        {/* Sub-description */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className={`text-base md:text-lg max-w-2xl mb-10 leading-relaxed ${isDark ? "text-zinc-400" : "text-zinc-600"}`}
        >
          Book a call and we'll look at your offer and your audience, then <br className="hidden md:inline" />
          map out exactly what your channel and funnel could look like. <br className="hidden md:inline" /> You'll 
          know whether it's a fit by the end of the call.
        </motion.p>

        {/* Dynamic Typeform Button */}
        <motion.a
          href={TYPEFORM_URL}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
          className="grad-blue text-white px-8 py-4 rounded-full font-medium inline-flex items-center gap-2 shadow-[0_16px_32px_-12px_rgba(77,101,255,0.65)] transition-shadow hover:shadow-[0_16px_32px_-6px_rgba(77,101,255,0.85)]"
        >
          Book a Call <span className="text-xl">→</span>
        </motion.a>

        {/* Bottom Trust Tags */}
        <p className={`text-xs mt-8 tracking-wide ${isDark ? "text-zinc-600" : "text-zinc-400"}`}>
          90-day guarantee · By application only · Month to month
        </p>

      </div>
    </section>
  );
};
