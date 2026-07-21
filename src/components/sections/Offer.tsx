import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';

export const OfferSection: React.FC = () => {
  const { theme } = useTheme();

  const isDark = theme === 'dark';
  const themeClasses = isDark ? "bg-[#0A0A0A] text-white" : "bg-white text-black";
  const cardClasses = isDark ? "bg-zinc-900 border-zinc-800" : "bg-zinc-50 border-zinc-200";

  const offers = [
    { title: "Performance only on new sales", desc: "The percentage applies only to new sales you weren't making before — money coming in directly from our work." },
    { title: "It clears your retainer first", desc: "Attributed sales have to clear what you're already paying us. By the time we earn on top, you're already in profit for the month." },
    { title: "Month to month", desc: "No long lock-in. Most clients stay 12–16 months anyway. The 90-day goal: a funnel that runs almost on its own and brings in more than today." },
  ];

  const scrollToCTA = () => {
    const target = document.getElementById('cta-section');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="offer" className={`section-x py-24 transition-colors duration-500 ${themeClasses}`}>
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* Left Column */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          {/* Now font-mono to match every other eyebrow on the page (Problem,
             Funnel, TrustBridge, FAQ) — this one was the odd one out. */}
          <h3 className="eyebrow opacity-60 mb-4">How it works to work together</h3>
          <h2 className="text-4xl sm:text-5xl font-medium tracking-tight mb-6">Built so we only win when you win.</h2>
          <p className="text-lg opacity-85 mb-8 max-w-md font-normal leading-relaxed">
            A flat retainer below what most agencies in this space charge — plus a percentage of the new sales we actually generate through YouTube. Structured to protect you.
          </p>

          <button
            onClick={scrollToCTA}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-medium transition-transform hover:scale-102"
          >
            See if you're a fit! →
          </button>
        </motion.div>

        {/* Right Column */}
        <div className="space-y-6">
          {offers.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className={`p-6 rounded-2xl border ${cardClasses}`}
            >
              <div className="flex gap-4">
                <span className="text-blue-500 font-normal">→</span>
                <div>
                  <h4 className="font-medium text-xl mb-2">{item.title}</h4>
                  <p className="opacity-70 leading-relaxed font-normal text-sm">{item.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
