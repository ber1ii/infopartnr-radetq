import React, { useState, useEffect } from 'react';
import { motion, useSpring, useTransform } from 'framer-motion';

function AnimatedNumber({ value }: { value: number }) {
  const spring = useSpring(value, { mass: 0.8, stiffness: 75, damping: 15 });
  const display = useTransform(spring, (current) =>
    Math.round(current).toLocaleString('en-US')
  );

  useEffect(() => {
    spring.set(value);
  }, [value, spring]);

  return <motion.span>{display}</motion.span>;
}

export const ROICalculator: React.FC = () => {
  const [views, setViews] = useState<number>(50000); // Monthly views
  const [ticketPrice, setTicketPrice] = useState<number>(5000); // $5k default

  // Conversion assumptions: 1.2% opt-in to funnel -> 10% book call -> 20% close rate
  const estimatedBookedCalls = Math.round((views * 0.012) * 0.10);
  const estimatedClients = Math.max(1, Math.round(estimatedBookedCalls * 0.20));
  const monthlyRevenue = estimatedClients * ticketPrice;
  const annualRevenue = monthlyRevenue * 12;

  return (
    <section className="py-20 bg-zinc-50 dark:bg-[#0D0D0E] border-y border-zinc-200 dark:border-zinc-800 transition-colors duration-300">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-mono font-bold tracking-widest uppercase text-[#4D65FF] block mb-3">
            Interactive Forecast
          </span>
          <h2 className="display-md text-zinc-900 dark:text-white">
            Calculate your revenue trajectory.
          </h2>
          <p className="mt-3 text-zinc-500 dark:text-zinc-400">
            Adjust the sliders to estimate prospective returns generated through organic YouTube traffic.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white dark:bg-[#121214] p-8 sm:p-12 rounded-3xl border border-zinc-200 dark:border-zinc-800 shadow-xl">
          
          {/* Sliders Column */}
          <div className="lg:col-span-7 space-y-8">
            {/* Slider 1: Monthly Views */}
            <div className="space-y-3">
              <div className="flex justify-between items-center text-sm">
                <label className="font-medium text-zinc-700 dark:text-zinc-300">
                  Target Monthly Views
                </label>
                <span className="font-mono font-bold text-[#4D65FF] text-base">
                  {views.toLocaleString()} views
                </span>
              </div>
              <input
                type="range"
                min="10000"
                max="500000"
                step="5000"
                value={views}
                onChange={(e) => setViews(Number(e.target.value))}
                className="w-full h-2 bg-zinc-200 dark:bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-[#4D65FF]"
              />
              <div className="flex justify-between text-[11px] text-zinc-400 font-mono">
                <span>10k</span>
                <span>250k</span>
                <span>500k</span>
              </div>
            </div>

            {/* Slider 2: Ticket Price */}
            <div className="space-y-3">
              <div className="flex justify-between items-center text-sm">
                <label className="font-medium text-zinc-700 dark:text-zinc-300">
                  Average Deal Size / LTV
                </label>
                <span className="font-mono font-bold text-emerald-600 dark:text-emerald-400 text-base">
                  ${ticketPrice.toLocaleString()}
                </span>
              </div>
              <input
                type="range"
                min="1000"
                max="25000"
                step="500"
                value={ticketPrice}
                onChange={(e) => setTicketPrice(Number(e.target.value))}
                className="w-full h-2 bg-zinc-200 dark:bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-emerald-500"
              />
              <div className="flex justify-between text-[11px] text-zinc-400 font-mono">
                <span>$1,000</span>
                <span>$12,500</span>
                <span>$25,000</span>
              </div>
            </div>

            {/* Conversion Breakdown Badges */}
            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-zinc-100 dark:border-zinc-800/80">
              <div className="p-3.5 rounded-xl bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-200/60 dark:border-zinc-800">
                <span className="text-xs text-zinc-400 block mb-1">Est. Booked Calls / mo</span>
                <span className="text-xl font-bold font-mono text-zinc-800 dark:text-zinc-200">
                  <AnimatedNumber value={estimatedBookedCalls} />
                </span>
              </div>
              <div className="p-3.5 rounded-xl bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-200/60 dark:border-zinc-800">
                <span className="text-xs text-zinc-400 block mb-1">Est. New Clients / mo</span>
                <span className="text-xl font-bold font-mono text-zinc-800 dark:text-zinc-200">
                  <AnimatedNumber value={estimatedClients} />
                </span>
              </div>
            </div>
          </div>

          {/* Results Display Column */}
          <div className="lg:col-span-5 bg-zinc-900 dark:bg-black p-8 rounded-2xl border border-zinc-800 text-white relative overflow-hidden flex flex-col justify-between h-full">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#4D65FF]/10 blur-3xl pointer-events-none" />

            <div>
              <span className="text-xs uppercase tracking-widest text-zinc-400 font-mono block mb-2">
                Projected Output
              </span>
              <div className="text-3xl sm:text-4xl font-extrabold text-emerald-400 font-mono tracking-tight my-2">
                $<AnimatedNumber value={monthlyRevenue} />
                <span className="text-sm font-normal text-zinc-400 font-sans"> / mo</span>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-zinc-800">
              <span className="text-xs uppercase tracking-widest text-zinc-400 font-mono block mb-1">
                Annualized Impact
              </span>
              <div className="text-2xl font-bold text-white font-mono">
                $<AnimatedNumber value={annualRevenue} />
                <span className="text-xs font-normal text-zinc-500 font-sans"> / yr</span>
              </div>
            </div>

            <p className="mt-6 text-[11px] text-zinc-500 leading-normal">
              *Estimates based on standard pipeline metrics (1.2% opt-in rate, 20% close rate). Actual results depend on sales velocity and content retention.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};