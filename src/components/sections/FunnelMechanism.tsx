import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface FunnelStep {
  phase: string;
  title: string;
  subtitle: string;
  description: string;
  mechanic: string;
  metricBadge: string;
}

export const FunnelMechanism: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(1);
  const isScrollingRef = useRef<boolean>(false);
  const scrollTimeoutRef = useRef<number | null>(null);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);
  const sectionRef = useRef<HTMLElement | null>(null);
  const [showFloatingNav, setShowFloatingNav] = useState<boolean>(false);

  const funnelSteps: FunnelStep[] = [
    {
      phase: "STEP 01 / STRATEGY",
      title: "Strategy & Positioning",
      subtitle: "Learning your exact perspective and positioning",
      description: "We work out which part of your market the channel goes after, and what it has to prove before anyone buys. Most of that comes straight off your sales calls, along with every objection we need to kill.",
      mechanic: "Deep-dive founder interview profiling + voice profiling matrix.",
      metricBadge: "Positioning Clarity"
    },
    {
      phase: "STEP 02 / RESEARCH",
      title: "Research & Ideation",
      subtitle: "Handling high-ticket friction before the sales call",
      description: "We bring you the ideas. Every one gets picked for the same reason: it puts you in front of someone who could actually become a client.",
      mechanic: "CRM raw data parsing + pipeline resistance mapping.",
      metricBadge: "Research Velocity"
    },
    {
      phase: "STEP 03 / SCRIPTING",
      title: "Script & Voice Capture",
      subtitle: "Scaling high-fidelity script logic seamlessly",
      description: "Every script gets written for you, outline or word for word, whatever works for you the best, also in the way you already speak. Built to hold attention and to sell.",
      mechanic: "Custom LLM persona tuning based exclusively on original asset capture.",
      metricBadge: "Script Fidelity"
    },
    {
      phase: "STEP 04 / CONSULTATIONS",
      title: "Consultations & Optimization",
      subtitle: "Engineering high-retention discovery hooks",
      description: "We're basically always reachable. Every two weeks we get on a call to plan what's coming, look at how the last videos did, and work on your delivery.",
      mechanic: "Outlier extraction + algorithmic demand balancing.",
      metricBadge: "Always-On Optimization"
    },
    {
      phase: "STEP 05 / EDITING",
      title: "Editing & Asset Delivery",
      subtitle: "Fulfillment completely removed from your timeline",
      description: "Every edit supplements your message. The cuts, the pacing, the visuals all exist to make the point land and get someone closer to a sale.",
      mechanic: "End-to-end multi-layer asset delivery pipelines.",
      metricBadge: "Editing Velocity"
    },
    {
      phase: "STEP 06 / THUMBNAILS",
      title: "Thumbnails & Variants",
      subtitle: "Transforming casual views into focused schedules",
      description: "Never just one thumbnail. We run variants against each other on every upload and keep the winner.",
      mechanic: "High-ticket linear routing architecture.",
      metricBadge: "Targeted Click-Through"
    },
    {
      phase: "STEP 07 / POSTING",
      title: "Posting & Tracking",
      subtitle: "Predictable calendar fulfillment on absolute autopilot",
      description: "We handle the uploads and the SEO side, and track every call and sale back to the video that caused it.",
      mechanic: "Pre-handled buyer intent frames.",
      metricBadge: "Predictable Calendar Fulfillment"
    }
  ];

  const handleTrackerClick = (stepNumber: number) => {
    if (scrollTimeoutRef.current) {
      window.clearTimeout(scrollTimeoutRef.current);
    }

    isScrollingRef.current = true;
    setActiveStep(stepNumber);

    const targetElement = stepRefs.current[stepNumber - 1];
    if (targetElement) {
      const yOffset = -120;
      const yCoordinate = targetElement.getBoundingClientRect().top + window.scrollY + yOffset;

      window.scrollTo({
        top: yCoordinate,
        behavior: 'smooth'
      });

      scrollTimeoutRef.current = window.setTimeout(() => {
        isScrollingRef.current = false;
      }, 800);
    } else {
      isScrollingRef.current = false;
    }
  };

  const handleStepViewportEnter = (stepNumber: number) => {
    if (isScrollingRef.current) return;
    setActiveStep(stepNumber);
  };

  const goToStep = (stepNumber: number) => {
    const clamped = Math.min(Math.max(stepNumber, 1), funnelSteps.length);
    handleTrackerClick(clamped);
  };

  // Floating nav should only appear while the funnel section itself is
  // on screen — not before it, not once the user has scrolled past it.
  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => setShowFloatingNav(entry.isIntersecting),
      { threshold: 0, rootMargin: '-10% 0px -10% 0px' }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="funnel" ref={sectionRef} className="section-x py-16 md:py-32 bg-white dark:bg-[#0A0A0A] border-t border-zinc-100 dark:border-zinc-900 transition-colors duration-300">
      <div className="mx-auto max-w-5xl">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">

          <div className="lg:col-span-5 lg:sticky lg:top-28 space-y-4 md:space-y-5">
            <span className="eyebrow text-[#4D65FF] block">
              System Roadmap
            </span>

            <h2 className="display-md text-zinc-900 dark:text-white">
              How we build <br className="hidden md:inline" /> your funnel.
            </h2>

            <p className="text-base text-zinc-500 dark:text-zinc-400 leading-relaxed max-w-sm font-normal">
              Here's the exact path from onboarding to booked calls.
            </p>

            {/* NEW: mobile/tablet progress indicator. The dot-tracker below is
               desktop-only (`hidden lg:flex`), which meant anyone on a phone
               had no sense of where they were across all 7 steps. This is a
               compact substitute that stays visible under lg. */}
            <div className="flex lg:hidden items-center gap-3 pt-3">
              <div className="flex-1 h-1 rounded-full bg-zinc-100 dark:bg-zinc-900 overflow-hidden">
                <motion.div
                  className="h-full bg-[#4D65FF] rounded-full"
                  animate={{ width: `${(activeStep / funnelSteps.length) * 100}%` }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                />
              </div>
              <span className="text-xs font-mono text-zinc-400 dark:text-zinc-500 tabular-nums shrink-0">
                {String(activeStep).padStart(2, "0")} / {String(funnelSteps.length).padStart(2, "0")}
              </span>
            </div>

            <div className="hidden lg:flex flex-wrap gap-1.5 pt-4 max-w-xs">
              {funnelSteps.map((_, idx) => {
                const stepNumber = idx + 1;
                const isActive = activeStep === stepNumber;
                return (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => handleTrackerClick(stepNumber)}
                    className="group relative py-3 focus:outline-none"
                    aria-label={`Jump to step ${stepNumber}`}
                  >
                    <div className={`h-1.5 rounded-full transition-all duration-300 ${
                      isActive
                        ? 'w-12 bg-[#4D65FF]'
                        : 'w-4 bg-zinc-100 dark:bg-zinc-800 group-hover:bg-zinc-300 dark:group-hover:bg-zinc-600'
                    }`} />
                  </button>
                );
              })}
            </div>

          </div>

          <div className="lg:col-span-7 relative space-y-6 md:space-y-8">

            {/* PERFECT MOBILE ALIGNMENT FIX:
              p-6 (24px) + w-12/2 (24px) = 48px center on mobile
              p-8 (32px) + w-14/2 (28px) = 60px center on desktop
            */}
            <div className="absolute left-[48px] md:left-[60px] top-4 bottom-4 w-[2px] bg-zinc-100 dark:bg-zinc-900/60 -z-10" />

            {funnelSteps.map((step, index) => {
              const stepNumber = index + 1;
              const isCurrent = activeStep === stepNumber;
              const isDestination = index === funnelSteps.length - 1;

              return (
                <motion.div
                  key={index}
                  ref={(el) => { stepRefs.current[index] = el; }}
                  onViewportEnter={() => handleStepViewportEnter(stepNumber)}
                  viewport={{ margin: "-20% 0px -60% 0px" }}
                  className={`relative flex gap-5 md:gap-10 p-6 md:p-8 rounded-2xl border transition-all duration-500 ease-out transform
                    ${isDestination
                      ? 'bg-gradient-to-br from-[#4D65FF]/5 to-transparent border-[#4D65FF]/30 dark:border-[#4D65FF]/20 shadow-md'
                      : isCurrent
                        ? 'border-zinc-300 dark:border-zinc-700 shadow-sm opacity-100 scale-[1.01]'
                        : 'border-zinc-100 dark:border-zinc-900 opacity-40 scale-100'
                    }
                  `}
                >
                  <div className="shrink-0 z-10">
                    <div className={`h-12 w-12 md:h-14 md:w-14 rounded-xl font-sans font-medium text-base flex items-center justify-center border transition-all duration-300
                      ${isDestination
                        ? 'bg-[#4D65FF] border-[#4D65FF] text-white shadow-md'
                        : isCurrent
                          ? 'bg-zinc-900 border-zinc-900 text-white dark:bg-white dark:border-white dark:text-zinc-950'
                          : 'bg-zinc-50 dark:bg-[#121214] border-zinc-200 dark:border-zinc-800 text-zinc-400'
                      }
                    `}>
                      {isDestination ? (
                        <svg className="h-5 w-5 stroke-white" viewBox="0 0 24 24" fill="none" strokeWidth="2">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      ) : (
                        `0${stepNumber}`
                      )}
                    </div>
                  </div>

                  <div className="flex-1 space-y-2.5 md:space-y-3">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 md:gap-1.5">
                      <span className={`text-[10px] md:text-xs font-mono font-medium tracking-wider uppercase
                        ${isDestination ? 'text-[#4D65FF]' : 'text-zinc-400 dark:text-zinc-500'}
                      `}>
                        {step.phase}
                      </span>
                      <span className={`text-[10px] md:text-xs font-mono px-2.5 py-0.5 rounded-full font-medium border self-start sm:self-auto transition-colors duration-300
                        ${isDestination
                          ? 'bg-[#4D65FF]/10 border-[#4D65FF]/20 text-[#4D65FF] dark:text-blue-400'
                          : isCurrent
                            ? 'bg-zinc-100 dark:bg-zinc-800 border-zinc-200 dark:border-zinc-700 text-zinc-800 dark:text-zinc-200'
                            : 'bg-zinc-50 dark:bg-zinc-900/50 border-zinc-200 dark:border-zinc-800 text-zinc-400'
                        }
                      `}>
                        {step.metricBadge}
                      </span>
                    </div>

                    <h3 className="font-sans text-lg md:text-xl font-medium text-zinc-900 dark:text-white tracking-tight">
                      {step.title}
                    </h3>

                    <p className="text-sm md:text-base text-zinc-500 dark:text-zinc-400 leading-relaxed font-normal">
                      {step.description}
                    </p>

                    <div className="pt-3 border-t border-dashed border-zinc-100 dark:border-zinc-900 flex items-start gap-2 text-xs text-zinc-400 dark:text-zinc-500 font-normal">
                      <svg className="h-4 w-4 text-[#4D65FF]/80 shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                      <span>
                      </span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>

      </div>

      {/* Floating step nav — position:fixed so it stays pinned to the
          viewport and follows the user down the page, instead of
          scrolling away with the content. Only shown while this section
          is actually on screen. */}
      <AnimatePresence>
        {showFloatingNav && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 16 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="fixed bottom-5 left-1/2 -translate-x-1/2 z-50 flex items-center gap-3 rounded-full border border-zinc-200 dark:border-zinc-800 bg-white/90 dark:bg-zinc-950/90 backdrop-blur-md shadow-lg px-3 py-2"
          >
            <button
              type="button"
              onClick={() => goToStep(activeStep - 1)}
              disabled={activeStep === 1}
              aria-label="Previous step"
              className="flex items-center justify-center h-9 w-9 rounded-full border border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-300 disabled:opacity-30 disabled:cursor-not-allowed hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-colors"
            >
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <span className="text-xs font-mono text-zinc-400 dark:text-zinc-500 tabular-nums px-1 min-w-[3.5rem] text-center">
              {String(activeStep).padStart(2, "0")} / {String(funnelSteps.length).padStart(2, "0")}
            </span>

            <button
              type="button"
              onClick={() => goToStep(activeStep + 1)}
              disabled={activeStep === funnelSteps.length}
              aria-label="Next step"
              className="flex items-center justify-center h-9 w-9 rounded-full bg-zinc-900 dark:bg-white text-white dark:text-zinc-950 disabled:opacity-30 disabled:cursor-not-allowed hover:opacity-85 transition-opacity"
            >
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};