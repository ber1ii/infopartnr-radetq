import React from 'react';
import { motion } from 'framer-motion';

export const MetricsAndProof: React.FC = () => {
  const mainMetrics = [1, 2, 3].map(num => `/assets/metrics/metric${num}.png`);
  const satisfactionProofs = Array.from({ length: 15 }, (_, i) => `/assets/metrics/metric${i + 4}.png`);

  return (
    <section id="proof" className="section-x py-24 overflow-hidden bg-white dark:bg-[#0A0A0A] transition-colors duration-300">
      <div className="mx-auto max-w-6xl">

        {/* MAIN METRICS */}
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-xl md:text-2xl font-bold uppercase tracking-widest text-emerald-600 dark:text-emerald-400 block mb-4">
              Hard Numbers
            </span>
            <h2 className="display-md text-zinc-900 dark:text-white">
              The numbers <span className="text-emerald-600 dark:text-emerald-400">don't lie.</span>
            </h2>
            <p className="mt-4 text-zinc-500 dark:text-zinc-400">
              Hard data from the funnels we've built and scaled.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {mainMetrics.map((src, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="rounded-3xl overflow-hidden border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 shadow-xl"
              >
                <img
                  src={src}
                  alt={`Metric ${index + 1}`}
                  className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
                  onError={(e) => { (e.target as HTMLImageElement).src = '/image_690dfa.png'; }}
                />
              </motion.div>
            ))}
          </div>
        </div>

        {/* SATISFACTION PROOFS */}
        <div>
          <div className="text-center mb-10">
            <h3 className="text-2xl font-medium text-zinc-900 dark:text-white">
              What they say behind closed doors.
            </h3>
          </div>

          <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
            {satisfactionProofs.map((src, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                className="break-inside-avoid rounded-2xl overflow-hidden border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 shadow-md"
              >
                <img
                  src={src}
                  alt={`Client Satisfaction ${index + 4}`}
                  className="w-full h-auto"
                  loading="lazy"
                  onError={(e) => { (e.target as HTMLImageElement).src = '/image_690dfa.png'; }}
                />
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
