import React, { useState, useRef, useMemo, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';

// Deterministic PRNG
function createPRNG(seed = 42) {
  let s = seed;
  return () => {
    s = (s * 16807) % 2147483647;
    return (s - 1) / 2147483646;
  };
}

interface FunnelStep {
  phase: string;
  title: string;
  subtitle: string;
  description: string;
  mechanic: string;
  metricBadge: string;
}

const funnelSteps: FunnelStep[] = [
  {
    phase: "STEP 01 / ONBOARDING",
    title: "Onboarding & Voice Capture",
    subtitle: "Learning your exact perspective and positioning",
    description: "We learn your tone, personality, and exactly who your ideal client is — so everything sounds like it's genuinely coming from you.",
    mechanic: "Deep-dive founder interview profiling + voice profiling matrix.",
    metricBadge: "Alignment Phase"
  },
  {
    phase: "STEP 02 / INTENT MINING",
    title: "Objection Mining",
    subtitle: "Handling high-ticket friction before the sales call",
    description: "We pull the objections that come up on your sales calls and weave them straight into your videos — so they're handled before the call ever happens.",
    mechanic: "CRM raw data parsing + pipeline resistance mapping.",
    metricBadge: "Objection Neutralization"
  },
  {
    phase: "STEP 03 / SYNTHESIS",
    title: "Your AI Second Brain",
    subtitle: "Scaling high-fidelity script logic seamlessly",
    description: "We build an AI model trained on how you think and speak, so every script and idea sounds like you — genuine, never generic.",
    mechanic: "Custom LLM persona tuning based exclusively on original asset capture.",
    metricBadge: "100% On-Brand Voice"
  },
  {
    phase: "STEP 04 / DEMAND CAPTURE",
    title: "Data-Driven Ideation",
    subtitle: "Engineering high-retention discovery hooks",
    description: "Every video is built on proven demand. We find an outlier that's already pulled unusual attention and build your video around it — so it pulls the right traffic.",
    mechanic: "Outlier extraction + algorithmic demand balancing.",
    metricBadge: "High-Intent Acquisition"
  },
  {
    phase: "STEP 05 / ARCHITECTURE",
    title: "Done-for-You Production",
    subtitle: "Fulfillment completely removed from your timeline",
    description: "We write the full script. You record. Then everything is ours: editing, thumbnails, packaging, titles, SEO, scheduling, and quality control.",
    mechanic: "End-to-end multi-layer asset delivery pipelines.",
    metricBadge: "1-2 Hours/Week Input"
  },
  {
    phase: "STEP 06 / OVERLAY",
    title: "The Funnel Converges",
    subtitle: "Transforming casual views into focused schedules",
    description: "Instead of scattering people across a channel, everything funnels toward one video built specifically to turn a viewer into a booked call.",
    mechanic: "High-ticket linear routing architecture.",
    metricBadge: "Linear Flow Conversion"
  },
  {
    phase: "DESTINATION / ASSET",
    title: "Booked Calls, Pre-Sold",
    subtitle: "Predictable calendar fulfillment on absolute autopilot",
    description: "A YouTube sales funnel that runs almost on its own — booking calls with people who already trust you and understand the offer.",
    mechanic: "Pre-handled buyer intent frames.",
    metricBadge: "Inbound Hyper-Profit"
  }
];

function SeamlessGlitterFunnel({ count = 10000, isDark }: { count?: number; isDark: boolean }) {
  const pointsRef = useRef<THREE.Points>(null!);
  const baseColor = useMemo(() => new THREE.Color("#3B4FCC"), []);
  const cyanColor = useMemo(() => new THREE.Color("#2A93B8"), []);

  const { positions, velocities, phases, initialColors, driftDirections } = useMemo(() => {
    const rand = createPRNG(1337);
    const pos = new Float32Array(count * 3);
    const vel = new Float32Array(count);
    const ph = new Float32Array(count);
    const col = new Float32Array(count * 3);
    const drift = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {
      const y = (rand() - 0.5) * 18; // Spans vertically across canvas
      const normalizedY = (y + 9) / 18; // 0 (bottom apex) to 1 (top brim)

      // Pointy funnel curve: sharp apex near bottom (0.05), flaring to wide mouth at top (6.5)
      const radius = 0.05 + Math.pow(normalizedY, 2.2) * 6.45;
      const angle = rand() * Math.PI * 2;

      pos[i * 3] = Math.cos(angle) * radius;
      pos[i * 3 + 1] = y;
      pos[i * 3 + 2] = Math.sin(angle) * radius;

      vel[i] = 0.015 + rand() * 0.035;
      ph[i] = rand() * Math.PI * 2;

      // Random 3D drift trajectory for particles escaping as top stars
      drift[i * 3] = (rand() - 0.5) * 1.8;
      drift[i * 3 + 1] = 0.5 + rand() * 1.5;
      drift[i * 3 + 2] = (rand() - 0.5) * 1.8;

      // Color distribution (Blue / Cyan blend)
      const mixRatio = rand();
      const pColor = baseColor.clone().lerp(cyanColor, mixRatio);
      col[i * 3] = pColor.r;
      col[i * 3 + 1] = pColor.g;
      col[i * 3 + 2] = pColor.b;
    }

    return {
      positions: pos,
      velocities: vel,
      phases: ph,
      initialColors: col,
      driftDirections: drift
    };
  }, [count, baseColor, cyanColor]);

  useFrame((state) => {
    if (!pointsRef.current) return;

    const geo = pointsRef.current.geometry;
    const posAttr = geo.attributes.position;
    const colAttr = geo.attributes.color;
    const time = state.clock.getElapsedTime();

    // Slow, ambient rotation — a background should drift, not spin
    pointsRef.current.rotation.y = time * 0.045;

    for (let i = 0; i < count; i++) {
      let y = posAttr.getY(i);

      // Downward funnel velocity flow
      y -= velocities[i];

      // Respawn recycled particles at the top starburst zone
      if (y < -9) {
        y = 9;
      }

      const normalizedY = (y + 9) / 18; // 0 (bottom tip) to 1 (top stars)

      let x: number, z: number;

      if (normalizedY > 0.82) {
        // --- TOP STARBURST ZONE ---
        // Particles flare outwards into floating stars flying off in random directions
        const starFactor = (normalizedY - 0.82) / 0.18;
        const baseRadius = 0.05 + Math.pow(0.82, 2.2) * 6.45;
        const angle = phases[i] + time * 0.22;

        const starDriftX = driftDirections[i * 3] * starFactor * 2.5;
        const starDriftZ = driftDirections[i * 3 + 2] * starFactor * 2.5;

        x = Math.cos(angle) * baseRadius + starDriftX;
        z = Math.sin(angle) * baseRadius + starDriftZ;
      } else {
        // --- MAIN FUNNEL BODY ---
        // Tapers seamlessly down to a razor-thin pointy apex at the bottom
        const radius = 0.05 + Math.pow(normalizedY, 2.2) * 6.45;
        const angle = phases[i] + time * 0.3 * (1.0 + (1 - normalizedY) * 1.4);
        const wobble = Math.sin(time * 1.4 + i) * 0.02;

        x = Math.cos(angle) * radius + wobble;
        z = Math.sin(angle) * radius + wobble;
      }

      posAttr.setXYZ(i, x, y, z);

      // --- SMOOTH EDGE ALPHA FADE ---
      // Smoothly dims particles at upper and lower edges so there are zero hard cutoffs
      let fadeFactor = 1.0;
      if (normalizedY < 0.15) {
        fadeFactor = normalizedY / 0.15; // Smooth fade to 0 at pointy bottom tip
      } else if (normalizedY > 0.85) {
        fadeFactor = (1.0 - normalizedY) / 0.15; // Smooth fade to 0 for flying stars
      }

      // --- SPARKLE GLITTER EFFECT (subtler, less frequent) ---
      const sparkle = Math.pow(Math.sin(time * 2.2 + phases[i] * 14), 18);
      let r = initialColors[i * 3];
      let g = initialColors[i * 3 + 1];
      let b = initialColors[i * 3 + 2];

      if (isDark) {
        // DARK MODE — canvas uses AdditiveBlending against a near-black
        // section, so "fading" means dimming color values toward black.
        if (sparkle > 0.75) {
          // Soft specular flash for high-intent "views" — dimmed vs. pure white
          r = r + (1.0 - r) * 0.6;
          g = g + (1.0 - g) * 0.6;
          b = b + (1.0 - b) * 0.6;
        }

        // Overall dim so the field reads as background texture rather than
        // a foreground layer fighting the text
        const bgDim = 0.55;
        colAttr.setXYZ(i, r * fadeFactor * bgDim, g * fadeFactor * bgDim, b * fadeFactor * bgDim);
      } else {
        // LIGHT MODE — canvas uses NormalBlending against a white section.
        // Additive blending (and dimming toward black) would either wash the
        // particles out to white or leave dark flecks that never disappear
        // at the edges. Instead we lerp color toward white as fadeFactor
        // drops, so particles genuinely fade into the page background.
        const fr = r + (1.0 - r) * (1.0 - fadeFactor);
        const fg = g + (1.0 - g) * (1.0 - fadeFactor);
        const fb = b + (1.0 - b) * (1.0 - fadeFactor);
        colAttr.setXYZ(i, fr, fg, fb);
      }
    }

    posAttr.needsUpdate = true;
    colAttr.needsUpdate = true;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        <bufferAttribute attach="attributes-color" args={[initialColors, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.042}
        vertexColors
        transparent
        opacity={isDark ? 0.75 : 0.9}
        blending={isDark ? THREE.AdditiveBlending : THREE.NormalBlending}
        depthWrite={false}
      />
    </points>
  );
}

export const ParticleFunnel: React.FC = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const [activeStep, setActiveStep] = useState<number>(1);
  const isScrollingRef = useRef<boolean>(false);
  const scrollTimeoutRef = useRef<number | null>(null);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);
  const sectionRef = useRef<HTMLElement | null>(null);
  const [showFloatingNav, setShowFloatingNav] = useState<boolean>(false);

  const handleTrackerClick = (stepNumber: number) => {
    if (scrollTimeoutRef.current) {
      window.clearTimeout(scrollTimeoutRef.current);
    }

    isScrollingRef.current = true;
    setActiveStep(stepNumber);

    const targetElement = stepRefs.current[stepNumber - 1];
    if (targetElement) {
      const yOffset = -140;
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
    <section id="funnel" ref={sectionRef} className="relative py-16 md:py-32 bg-white dark:bg-[#0A0A0A] text-zinc-900 dark:text-white border-t border-zinc-200 dark:border-zinc-800/80 overflow-hidden transition-colors duration-300">

      {/* WebGL Canvas — spans the entire section as ambient background.
          The mask-image fades the particle field into the page background
          on every edge, so there's no visible rectangle or "border" to it. */}
      <div
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          WebkitMaskImage: 'radial-gradient(ellipse 85% 90% at 62% 50%, black 35%, transparent 80%)',
          maskImage: 'radial-gradient(ellipse 85% 90% at 62% 50%, black 35%, transparent 80%)',
        }}
      >
        <Canvas camera={{ position: [2.5, 0, 10.5], fov: 45 }} className="w-full h-full">
          <ambientLight intensity={0.5} />
          <SeamlessGlitterFunnel isDark={isDark} />
        </Canvas>
      </div>

      {/* Readability scrim — darkens/lightens the left/text side so copy stays
          crisp while the funnel stays visible flowing through and past it */}
      <div className="absolute inset-0 pointer-events-none z-[1] bg-gradient-to-r from-white via-white/75 dark:from-[#0A0A0A] dark:via-[#0A0A0A]/75 to-transparent md:via-40% md:to-70%" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="max-w-3xl mb-12 md:mb-16 space-y-4 relative z-10">
          <span className="eyebrow text-[#4D65FF] block">
            Interactive Architecture
          </span>
          <h2 className="display-md text-zinc-900 dark:text-white">
            How we build your revenue funnel.
          </h2>
          <p className="text-zinc-500 dark:text-zinc-400 text-lg leading-relaxed">
            It's not random and it's not guessing. Watch how cold organic attention condenses into high-value booked client calls at every step of the process.
          </p>
        </div>

        {/* Steps Container */}
        <div className="relative mt-8">

          {/* Glassmorphism Foreground Steps */}
          <div className="relative z-10 max-w-3xl space-y-6 md:space-y-8">
            <div className="absolute left-[48px] md:left-[60px] top-4 bottom-4 w-[2px] bg-zinc-200 dark:bg-zinc-900 -z-10" />

            {funnelSteps.map((step, index) => {
              const stepNumber = index + 1;
              const isCurrent = activeStep === stepNumber;
              const isDestination = index === funnelSteps.length - 1;

              return (
                <motion.div
                  key={index}
                  ref={(el) => { stepRefs.current[index] = el; }}
                  onViewportEnter={() => handleStepViewportEnter(stepNumber)}
                  viewport={{ margin: "-25% 0px -45% 0px" }}
                  className={`relative flex gap-5 md:gap-8 p-6 md:p-8 rounded-2xl border backdrop-blur-md transition-all duration-500 ease-out transform cursor-pointer
                    ${isDestination
                      ? isCurrent
                        ? 'bg-emerald-50 dark:bg-emerald-950/50 border-emerald-500/60 shadow-[0_0_40px_rgba(16,185,129,0.15)] dark:shadow-[0_0_40px_rgba(16,185,129,0.25)] scale-[1.01]'
                        : 'bg-zinc-50 dark:bg-zinc-950/50 border-emerald-500/20 opacity-60'
                      : isCurrent
                        ? 'bg-white dark:bg-zinc-950/80 border-[#4D65FF]/60 shadow-xl dark:shadow-2xl opacity-100 scale-[1.01]'
                        : 'bg-zinc-50/60 dark:bg-zinc-950/40 border-zinc-200/80 dark:border-zinc-900/80 opacity-50 hover:opacity-85'
                    }
                  `}
                  onClick={() => handleTrackerClick(stepNumber)}
                >
                  <div className="shrink-0 z-10">
                    <div className={`h-12 w-12 md:h-14 md:w-14 rounded-xl font-mono font-medium text-base flex items-center justify-center border transition-all duration-300
                      ${isDestination
                        ? 'bg-emerald-500 border-emerald-400 text-black shadow-md'
                        : isCurrent
                          ? 'bg-[#4D65FF] border-[#4D65FF] text-white shadow-lg shadow-[#4D65FF]/30'
                          : 'bg-zinc-100 dark:bg-zinc-900/80 border-zinc-200 dark:border-zinc-800 text-zinc-400 dark:text-zinc-500'
                      }
                    `}>
                      {isDestination ? (
                        <svg className="h-6 w-6 stroke-black" viewBox="0 0 24 24" fill="none" strokeWidth="2.5">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      ) : (
                        `0${stepNumber}`
                      )}
                    </div>
                  </div>

                  <div className="flex-1 space-y-2">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5">
                      <span className={`text-[10px] md:text-xs font-mono font-medium tracking-wider uppercase
                        ${isDestination ? 'text-emerald-600 dark:text-emerald-400' : 'text-zinc-400 dark:text-zinc-500'}
                      `}>
                        {step.phase}
                      </span>
                      <span className={`text-[10px] md:text-xs font-mono px-2.5 py-0.5 rounded-full font-medium border self-start sm:self-auto transition-colors duration-300
                        ${isDestination
                          ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-600 dark:text-emerald-400'
                          : isCurrent
                            ? 'bg-[#4D65FF]/10 border-[#4D65FF]/30 text-[#4D65FF]'
                            : 'bg-zinc-100 dark:bg-zinc-900/60 border-zinc-200 dark:border-zinc-800/80 text-zinc-400 dark:text-zinc-500'
                        }
                      `}>
                        {step.metricBadge}
                      </span>
                    </div>

                    <h3 className="text-lg md:text-xl font-medium text-zinc-900 dark:text-white tracking-tight">
                      {step.title}
                    </h3>

                    <p className="text-sm md:text-base text-zinc-600 dark:text-zinc-300/90 leading-relaxed font-normal">
                      {step.description}
                    </p>

                    <div className="pt-3 border-t border-dashed border-zinc-200 dark:border-zinc-800/80 flex items-start gap-2 text-xs text-zinc-500 dark:text-zinc-500 font-normal">
                      <svg className={`h-4 w-4 shrink-0 mt-0.5 ${isDestination ? 'text-emerald-500 dark:text-emerald-400' : 'text-[#4D65FF]'}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                      <span>
                        <span className="text-zinc-700 dark:text-zinc-300 font-medium">Under the hood:</span> {step.mechanic}
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
            className="fixed bottom-5 left-1/2 -translate-x-1/2 z-50 flex items-center gap-3 rounded-full border border-zinc-200 dark:border-zinc-800 bg-white/90 dark:bg-zinc-950/90 backdrop-blur-md shadow-lg shadow-black/10 dark:shadow-black/40 px-3 py-2"
          >
            <button
              type="button"
              onClick={() => goToStep(activeStep - 1)}
              disabled={activeStep === 1}
              aria-label="Previous step"
              className="flex items-center justify-center h-9 w-9 rounded-full border border-zinc-200 dark:border-zinc-800 text-zinc-500 dark:text-zinc-300 disabled:opacity-30 disabled:cursor-not-allowed hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors"
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
              className="flex items-center justify-center h-9 w-9 rounded-full bg-[#4D65FF] text-white disabled:opacity-30 disabled:cursor-not-allowed hover:opacity-85 transition-opacity"
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