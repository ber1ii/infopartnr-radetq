import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const MetricsAndProof: React.FC = () => {
  const [expandedImage, setExpandedImage] = useState<string | null>(null);
  const mainMetrics = [1, 2, 3].map(num => `/assets/metrics/metric${num}.png`);
  const satisfactionProofs = Array.from({ length: 15 }, (_, i) => `/assets/metrics/metric${i + 4}.png`);
  const allImages = [...mainMetrics, ...satisfactionProofs];


  return (
    <section id="proof" className="section-x py-16 md:py-24 overflow-hidden bg-white dark:bg-[#0A0A0A] transition-colors duration-300">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* MAIN CONTENT */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <span className="text-lg md:text-xl font-bold uppercase tracking-widest text-emerald-600 dark:text-emerald-400 block mb-3">
              Client Results
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-zinc-900 dark:text-white">
              Micro-brand channels and big creators.
            </h2>
            <p className="mt-4 text-base md:text-lg text-zinc-500 dark:text-zinc-400">
              Both doing 5 to 6 figures per month with YouTube.
            </p>
          </motion.div>

          {/* IMAGE GRID - Masonry layout */}
          <div className="columns-1 sm:columns-2 md:columns-3 gap-4 md:gap-6">
            {allImages.map((src, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="mb-4 md:mb-6 break-inside-avoid rounded-2xl overflow-hidden border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 shadow-lg cursor-pointer"
                onClick={() => setExpandedImage(src)}
              >
                <img
                  src={src}
                  alt={`Result ${index + 1}`}
                  className="w-full h-auto"
                  loading="lazy"
                  onError={(e) => { (e.target as HTMLImageElement).src = '/image_690dfa.png'; }}
                />
              </motion.div>
            ))}
          </div>
        </div>

        {/* IMAGE MODAL - unchanged */}
        <AnimatePresence>
          {expandedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 p-4"
              onClick={() => setExpandedImage(null)}
            >
              <motion.div
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.9 }}
                className="relative max-w-full max-h-full"
                onClick={e => e.stopPropagation()}
              >
                <img
                  src={expandedImage}
                  alt="Expanded view"
                  className="max-w-[90vw] max-h-[90vh] object-contain"
                />
                <button
                  onClick={() => setExpandedImage(null)}
                  className="absolute -top-12 right-0 text-white text-3xl hover:text-gray-300 transition-colors"
                >
                  ×
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};