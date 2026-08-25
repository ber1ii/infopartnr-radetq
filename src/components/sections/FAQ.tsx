import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';

const faqData = [
  { q: "How much does this cost?", a: "Mid four figures a month: a below-market retainer, plus a small percentage of the sales we bring you. That percentage only kicks in above your retainer, so you've already made your money back before we earn extra. If you don't make money, neither do we." },
  { q: "I've tried YouTube before and it flopped. Why would this be different?", a: "Because last time there was no real strategy behind it — random videos, wrong audience, no funnel. We target your actual buyers and engineer every video to move them toward a booked call. It's not 'post and hope,' it's a system." },
  { q: "How long until I see results?", a: "Most clients start booking calls within 30 to 90 days, and it compounds from there. YouTube builds, it doesn't spike overnight. Anyone promising an exact number by an exact date is selling you BS!" },
  { q: "What if it doesn't work? Do you guarantee anything?", a: "We guarantee the work. Record on schedule and we keep going until your funnel is booking calls — even past 90 days, at no extra cost. Our pay's tied to your sales, so we only win when you win." },
  { q: "Why a percentage on top of the retainer?", a: "It keeps us on your team. It only applies to new sales, and only above what you already pay us — so you profit first, then we share the upside. If you don't make money, we don't either." },
  { q: "Isn't this just another editing agency?", a: "No. Editing's the smallest part. Most agencies cut your footage and leave the strategy and selling on you — we handle all of it, from idea to booked call. You get a funnel, not just nicer videos." },
  { q: "Will this work in my niche?", a: "Pretty much any high-ticket niche, B2B or B2C — we're building trust with the right buyers, which doesn't change by industry. We're selective, so if we take you on, we already know we can win for you." },
  { q: "What do I actually have to do?", a: "Show up and record, about an hour or two a week. No experience or fancy gear needed — we script it, send a gear list, and coach you through it. You read, we handle the rest." },
];

export const FAQ: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);
  const { theme } = useTheme();

  const isDark = theme === 'dark';

  return (
    <section id="faq" className={`section-x py-32 transition-colors duration-500 ${isDark ? 'bg-[#0A0A0A] text-white' : 'bg-white text-black'}`}>
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">

        {/* Sticky Left Column */}
        <div className="lg:col-span-4 lg:sticky lg:top-32 h-fit">
          <span className={`eyebrow ${isDark ? 'text-zinc-500' : 'text-zinc-400'}`}>
            FAQ
          </span>
          <h2 className="text-4xl md:text-5xl font-medium tracking-tight mt-3 mb-6 max-w-sm">
            Got questions? We have systems.
          </h2>
          <p className={`text-sm ${isDark ? 'text-zinc-400' : 'text-zinc-600'} leading-relaxed font-normal`}>
            Can’t find what you're looking for? Reach out directly and our growth team will clear it up.
          </p>
        </div>

        {/* Right Accordion Column */}
        <div className="lg:col-span-8 space-y-3">
          {faqData.map((item, i) => {
            const isOpen = activeIndex === i;
            return (
              <motion.div
                key={i}
                initial={false}
                animate={{
                  backgroundColor: isOpen
                    ? (isDark ? 'rgba(24, 24, 27, 0.4)' : 'rgba(244, 244, 245, 0.6)')
                    : 'transparent',
                  borderColor: isOpen
                    ? (isDark ? 'rgba(63, 63, 70, 0.4)' : 'rgba(228, 228, 231, 1)')
                    : (isDark ? 'rgba(39, 39, 42, 0.4)' : 'rgba(244, 244, 245, 1)'),
                }}
                className="border rounded-xl px-6 transition-all duration-300 group"
              >
                <button
                  onClick={() => setActiveIndex(isOpen ? null : i)}
                  className="w-full text-left py-6 flex justify-between items-center gap-4 text-base md:text-lg font-medium"
                >
                  <span className={`${isOpen ? 'text-current' : (isDark ? 'text-zinc-400 group-hover:text-zinc-200' : 'text-zinc-600 group-hover:text-zinc-900')} transition-colors duration-200`}>
                    {item.q}
                  </span>

                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3, ease: [0.25, 1, 0.5, 1] }}
                    className={`flex items-center justify-center w-8 h-8 rounded-full ${isOpen ? (isDark ? 'bg-zinc-800' : 'bg-zinc-100') : ''} group-hover:scale-105 transition-all`}
                  >
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" className={isOpen ? 'text-current' : 'opacity-40'}>
                      <path d="M2.5 4.5L6 8L9.5 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </motion.div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{
                        height: 'auto',
                        opacity: 1,
                        transition: {
                          height: { duration: 0.35, ease: [0.25, 1, 0.5, 1] },
                          opacity: { duration: 0.25, delay: 0.05 }
                        }
                      }}
                      exit={{
                        height: 0,
                        opacity: 0,
                        transition: {
                          height: { duration: 0.3, ease: [0.25, 1, 0.5, 1] },
                          opacity: { duration: 0.15 }
                        }
                      }}
                      className="overflow-hidden"
                    >
                      <p className={`pb-6 text-sm md:text-[15px] leading-relaxed ${isDark ? 'text-zinc-400' : 'text-zinc-600'} max-w-2xl font-normal`}>
                        {item.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
