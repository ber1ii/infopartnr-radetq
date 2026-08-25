import React from "react";
import { motion } from "framer-motion";

const TYPEFORM_URL = "https://calendly.com/dusan-infopartnr/45min";

export const Hero: React.FC = () => {
  const handleScrollToSection = (
    e: React.MouseEvent<HTMLAnchorElement>,
    targetId: string,
  ) => {
    e.preventDefault();
    const target = document.getElementById(targetId);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="section-x relative overflow-hidden pt-12 pb-20 md:pt-20 md:pb-32 bg-white dark:bg-[#0A0A0A] transition-colors duration-300">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[500px] bg-[radial-gradient(ellipse_at_top,rgba(77,101,255,0.06),transparent_50%)] pointer-events-none" />

      <div className="mx-auto max-w-4xl text-center relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="relative mx-auto mb-8 sm:mb-10 w-full max-w-xs sm:max-w-sm select-none"
          aria-hidden="true"
        >
          <div className="flex items-center justify-between mb-1.5 px-0.5">
            <span className="text-[10px] font-mono text-zinc-400 dark:text-zinc-600 tabular-nums">
              0:00
            </span>
            <span className="text-[10px] font-mono text-zinc-400 dark:text-zinc-600 tabular-nums">
              LIVE
            </span>
          </div>
          <div className="relative h-4">
            <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-px bg-zinc-200 dark:bg-zinc-800" />
            <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-between">
              {Array.from({ length: 9 }).map((_, i) => (
                <span
                  key={i}
                  className={
                    i % 4 === 0
                      ? "h-3 w-px bg-zinc-400 dark:bg-zinc-600"
                      : "h-1.5 w-px bg-zinc-200 dark:bg-zinc-800"
                  }
                />
              ))}
            </div>
            <div className="absolute top-1/2 -translate-y-1/2 h-3 w-3 rounded-full bg-[#4D65FF] shadow-[0_0_0_4px_rgba(77,101,255,0.15)] animate-scrub" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
        >
          <h1 className="display-lg text-zinc-900 dark:text-white">
            Own your industry on YouTube and turn organic views into{" "}
            <br className="hidden sm:inline" />
            <span className="text-blue-400 dark:text-blue-500">
              high-ticket clients
            </span>{" "}
            on autopilot.
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base sm:text-lg text-zinc-500 dark:text-zinc-400 leading-relaxed font-normal">
            Strategy, scripts, editing, packaging - we do all of it. You just
            show up, record and collect cash.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10 flex flex-col items-center gap-5"
        >
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
            <a
              href={TYPEFORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="grad-blue group relative flex items-center justify-center gap-3 rounded-full px-8 py-4 font-sans text-base font-medium text-white shadow-[0_16px_32px_-12px_rgba(77,101,255,0.65)] hover:shadow-[0_16px_32px_-6px_rgba(77,101,255,0.85)] transition-all duration-300 hover:-translate-y-0.5"
            >
              Book a Strategy Call
              <svg
                className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5"
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  d="M3 8h10M9 4l4 4-4 4"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>

            <a
              href="#funnel"
              onClick={(e) => handleScrollToSection(e, "funnel")}
              className="group flex items-center justify-center gap-2 rounded-full border border-zinc-200 dark:border-zinc-800 px-6 py-4 font-sans text-base font-medium text-zinc-600 dark:text-zinc-300 bg-zinc-50/50 dark:bg-zinc-900/30 hover:bg-zinc-100 dark:hover:bg-zinc-900/80 transition-all duration-200"
            >
              See how it works
            </a>
          </div>

          <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/[0.06] px-3 py-1.5 text-xs uppercase tracking-widest font-medium text-emerald-700 dark:text-emerald-400">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
            90-Day Conditional Guarantee
          </span>
        </motion.div>
      </div>
    </section>
  );
};
