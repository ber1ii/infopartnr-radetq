import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface ProblemItem {
  id: string;
  number: string;
  title: string;
  problemText: string;
  solutionTitle: string;
  solutionText: string;
}

export const Problem: React.FC = () => {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const problemData: ProblemItem[] = [
    {
      id: "traffic",
      number: "01",
      title: "Not enough traffic",
      problemText: "You're not pulling in enough of the right people to begin with — so the pipeline starts empty.",
      solutionTitle: "Our Asset Fix: Data-driven outlier mining",
      solutionText: "Instead of guessing what to talk about or screaming into the algorithmic void, we systematically reverse-engineer industry outliers that have already validated intent. We write scripts built entirely on high-intent search data, ensuring your pipeline fills with qualified buyers, not random scrollers.",
    },
    {
      id: "trust",
      number: "02",
      title: "Not enough trust",
      problemText: "You get attention, but there isn't enough trust for someone to comfortably hand you a few thousand dollars.",
      solutionTitle: "Our Asset Fix: 15-Minute deep authority logic",
      solutionText: "High-ticket buyers will never purchase from a 15-second loop. We construct 10–15 minute asset scripts that map your unique system architecture. By giving prospects space to interact deeply with how you think, trust is completely manufactured before the calendar link is ever clicked.",
    },
    {
      id: "close-rates",
      number: "03",
      title: "Soft show & close rates",
      problemText: "You get on calls, but show-up and close rates are soft because those leads barely know you yet.",
      solutionTitle: "Our Asset Fix: Pre-sold pre-handling",
      solutionText: "We unearth the top operational objections hidden within your sales loop and systematically handle them straight inside your videos. Leads arrive to your Zoom room already warm, pre-handled, and treating your strategy call like an enrollment, not a pitch.",
    },
  ];

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="process" className="section-x py-16 md:py-32 bg-white dark:bg-[#0A0A0A] border-t border-zinc-100 dark:border-zinc-900 transition-colors duration-300">
      <div className="mx-auto max-w-5xl">
        <div className="max-w-3xl mb-12 md:mb-16">
          <span className="eyebrow text-red-500 dark:text-red-400 block mb-4">
            01 / The Real Problem
          </span>
          <h2 className="font-display display-md text-zinc-900 dark:text-white">
            Nobody buys high-ticket from someone <br className="hidden sm:inline" />
            they don't <span className="text-zinc-400 dark:text-zinc-500">trust.</span>
          </h2>
          <p className="mt-4 md:mt-6 text-base sm:text-lg text-zinc-500 dark:text-zinc-400 leading-relaxed">
            When high-ticket sales stall, it almost always traces back to one of
            three things — and all three come down to trust you can't
            manufacture in a few seconds.
          </p>
        </div>

        <div className="space-y-4">
          {problemData.map((item) => {
            const isExpanded = expandedId === item.id;

            return (
              <div
                key={item.id}
                className={`group rounded-2xl border transition-all duration-300 overflow-hidden cursor-pointer
                  ${isExpanded
                      ? "border-zinc-300 dark:border-zinc-700 bg-zinc-50/60 dark:bg-zinc-900/20"
                      : "border-zinc-200 dark:border-zinc-800 bg-white dark:bg-[#0A0A0A] hover:border-red-500/40 hover:bg-red-500/[0.01] dark:hover:bg-red-500/[0.015]"
                  }
                `}
                onClick={() => toggleExpand(item.id)}
              >
                <div className="p-5 md:p-8 flex items-start gap-4 md:gap-6 justify-between select-none">
                  <div className="flex gap-4 md:gap-6 items-start">
                    {/* Kept bold here because numbers act as visual structural anchors */}
                    <span className={`font-display text-2xl md:text-3xl font-medium tracking-tightest transition-colors duration-300
                      ${isExpanded ? "text-[#4D65FF]" : "text-zinc-300 dark:text-zinc-700 group-hover:text-red-400"}
                    `}>
                      {item.number}
                    </span>

                    <div>
                      <h3 className={`font-display font-medium text-lg md:text-xl transition-colors duration-300
                        ${isExpanded ? "text-zinc-900 dark:text-white" : "text-zinc-900 dark:text-zinc-200 group-hover:text-red-500 dark:group-hover:text-red-400"}
                      `}>
                        {item.title}
                      </h3>
                      <p className="mt-2 text-sm md:text-base text-zinc-500 dark:text-zinc-400 leading-relaxed max-w-2xl pr-4 md:pr-0">
                        {item.problemText}
                      </p>
                    </div>
                  </div>

                  <div className="mt-1 shrink-0">
                    <motion.div
                      animate={{ rotate: isExpanded ? 180 : 0 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                      className={`h-7 w-7 md:h-8 md:w-8 rounded-full flex items-center justify-center border transition-colors duration-300
                        ${isExpanded ? "bg-[#4D65FF]/10 border-[#4D65FF]/30 text-[#4D65FF]" : "border-zinc-200 dark:border-zinc-800 text-zinc-400"}
                      `}
                    >
                      <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none">
                        <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </motion.div>
                  </div>
                </div>

                <AnimatePresence initial={false}>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <div className="px-5 pb-5 md:px-8 md:pb-8 ml-0 md:ml-[4.5rem] border-t border-dashed border-zinc-200 dark:border-zinc-800 pt-5 md:pt-6">
                        <div className="rounded-xl border-2 border-[#4D65FF]/20 bg-[#4D65FF]/[0.02] p-4 md:p-6 shadow-[0_12px_24px_-10px_rgba(77,101,255,0.06)]">
                          <div className="flex gap-3 items-start">
                            <div className="h-5 w-5 rounded-full bg-[#4D65FF] flex items-center justify-center text-white shrink-0 mt-0.5 hidden sm:flex">
                              <svg className="h-3 w-3" viewBox="0 0 12 12" fill="none">
                                <path d="M2 6l3 3 5-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                              </svg>
                            </div>
                            <div>
                              <h4 className="font-display font-medium text-sm md:text-base text-[#4D65FF] uppercase tracking-wider">
                                {item.solutionTitle}
                              </h4>
                              <p className="mt-2 text-sm sm:text-base text-zinc-700 dark:text-zinc-300 leading-relaxed font-normal">
                                {item.solutionText}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        <div className="mt-8 md:mt-10 rounded-2xl bg-zinc-50 dark:bg-zinc-950 p-6 md:p-8 border border-zinc-200 dark:border-zinc-800 text-center md:text-left shadow-lg transition-colors duration-300">
          <p className="font-display text-[1.1rem] md:text-xl font-normal leading-relaxed text-zinc-800 dark:text-zinc-200">
            Trust comes from someone genuinely spending time with how you think
            — exactly what happens when they watch you break a topic down for
            10–15 minutes.{" "}
            <span className="text-[#4D65FF] font-medium block sm:inline mt-2 sm:mt-0">
              They show up to the call already believing you can help them.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};
