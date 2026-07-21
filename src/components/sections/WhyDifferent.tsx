import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';

const features = [
  { title: "Strategy & ideation", desc: "We come up with what to make and why." },
  { title: "Scripting in your voice", desc: "Full scripts, written to sound like you." },
  { title: "Editing, packaging & SEO", desc: "Thumbnails, titles, optimization, scheduling." },
  { title: "All under one roof", desc: "No stitching together five freelancers. No managing anyone." },
];

export const WhyDifferent: React.FC = () => {
  const { theme } = useTheme();

  const themeClasses = theme === 'dark'
    ? "bg-white text-black"
    : "bg-black text-white";

  return (
    <section className={`section-x py-20 transition-colors duration-500 ${themeClasses}`}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mb-16 max-w-3xl"
        >
          {/* NEW: this section had no eyebrow while every other section does
             — added one (no number, since this isn't a step in a sequence,
             just a positioning statement) to keep the type system consistent. */}
          <span className="eyebrow opacity-60 block mb-4">Positioning</span>
          <h2 className="text-4xl md:text-6xl font-medium tracking-tight mb-8">Why we're different</h2>
          <p className="text-lg md:text-xl opacity-80 mb-6 font-normal">
            Most agencies take your footage, cut it together, send it back — and that's the end of their involvement. The strategy, the ideas, the packaging, the actual work of turning content into revenue still sits on your shoulders.
          </p>
          <p className="text-lg md:text-xl font-medium text-blue-500 dark:text-blue-400">
            We own the entire outcome — from the idea all the way through to the booked call and the sale. Editing is the smallest part of it.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="border-t border-current pt-6"
            >
              <h3 className="font-medium text-lg mb-2">{item.title}</h3>
              <p className="text-sm opacity-70 font-normal leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
