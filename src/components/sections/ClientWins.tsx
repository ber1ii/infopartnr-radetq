import React from "react";
import ReactPlayer from 'react-player';

interface VideoPlayerProps {
  url: string;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ url }) => (
  <div className="relative w-full h-full">
    <ReactPlayer
      src={url}
      width="100%"
      height="100%"
      controls={true}
      style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
      }}
    />
  </div>
);

export const ClientWins: React.FC = () => {
  return (
    <section
      id="results"
      className="section-x py-24 bg-white dark:bg-[#0A0A0A] transition-colors duration-300"
    >
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-12 md:mb-16">
          <span className="eyebrow text-[#4D65FF] block mb-3 md:mb-4 text-[10px] md:text-[11px]">Proof</span>
          <h2 className="display-md text-zinc-900 dark:text-white">
            CLIENT INTERVIEWS
          </h2>
          <p className="mt-3 md:mt-4 text-zinc-500 dark:text-zinc-400 text-base md:text-lg">
            Don't take our word for it. Take theirs.
          </p>
        </div>

        {/* Featured Cards Container */}
        <div className="space-y-6 md:space-y-8">
          {/* Card 1: Damaris */}
          <div className="grid md:grid-cols-2 gap-0 border border-zinc-200 dark:border-zinc-800 rounded-2xl md:rounded-3xl overflow-hidden bg-white dark:bg-zinc-950 shadow-lg md:shadow-xl shadow-zinc-900/5 dark:shadow-black/40">
            <div className="relative w-full aspect-video md:aspect-auto md:h-full">
              <VideoPlayer url="https://www.youtube.com/watch?v=GYPC5zLIU_s" />
            </div>
            <div className="p-6 md:p-8 lg:p-12">
              <div className="flex items-center gap-3 mb-3 md:mb-4">
                <img
                  src="/assets/clients/Damaris Trades.jpg"
                  alt="Damaris"
                  className="h-8 md:h-10 w-8 md:w-10 rounded-full object-cover"
                />
                <span className="text-[9px] md:text-[10px] font-mono tracking-widest uppercase text-blue-500 bg-blue-500/10 px-2 py-1 rounded">
                  Client win
                </span>
              </div>
              <h3 className="text-xl md:text-2xl font-medium text-zinc-900 dark:text-white">
                Damaris
              </h3>
              <p className="text-zinc-500 mb-4 md:mb-6 text-sm md:text-base">Started at ~800 subscribers</p>
              <p className="text-zinc-600 dark:text-zinc-300 mb-6 md:mb-8 leading-relaxed text-sm md:text-base">
                Her last video before us took three months and pulled 500 views.
                Not one call. The first one we did together paid for itself in
                days with a{" "}
                <b className="text-emerald-600 dark:text-emerald-400">
                  $6K PIF
                </b>{" "}
                — and it's brought in{" "}
                <b className="text-emerald-600 dark:text-emerald-400">
                  $250K+ since
                </b>
                .
              </p>

              <div className="grid grid-cols-2 gap-3 md:gap-4">
                <div className="p-3 md:p-4 border border-zinc-200 dark:border-zinc-800 rounded-xl md:rounded-2xl">
                  <p className="text-[10px] md:text-xs text-zinc-400 uppercase">
                    First 60 Days
                  </p>
                  <p className="text-lg md:text-xl font-medium mt-1 text-zinc-900 dark:text-white">
                    $100K
                  </p>
                </div>
                <div className="p-3 md:p-4 bg-emerald-600 rounded-xl md:rounded-2xl text-white">
                  <p className="text-[10px] md:text-xs text-emerald-100 uppercase">
                    One video, to date
                  </p>
                  <p className="text-lg md:text-xl font-medium mt-1">$250K+</p>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: Nathan */}
          <div className="grid md:grid-cols-2 gap-0 border border-zinc-200 dark:border-zinc-800 rounded-2xl md:rounded-3xl overflow-hidden bg-white dark:bg-zinc-950 shadow-lg md:shadow-xl shadow-zinc-900/5 dark:shadow-black/40">
            <div className="p-6 md:p-8 lg:p-12 order-2 md:order-1">
              <div className="flex items-center gap-3 mb-3 md:mb-4">
                <img
                  src="/assets/clients/Nathan Nazareth.jpg"
                  alt="Nathan Nazareth"
                  className="h-8 md:h-10 w-8 md:w-10 rounded-full object-cover"
                />
                <span className="text-[9px] md:text-[10px] font-mono tracking-widest uppercase text-blue-500 bg-blue-500/10 px-2 py-1 rounded">
                  Client win
                </span>
              </div>
              <h3 className="text-xl md:text-2xl font-medium text-zinc-900 dark:text-white">
                Nathan Nazareth
              </h3>
              <p className="text-zinc-500 mb-4 md:mb-6 text-sm md:text-base">
                Creator & founder - with us 12+ months
              </p>
              <p className="text-zinc-600 dark:text-zinc-300 mb-6 md:mb-8 leading-relaxed text-sm md:text-base">
                A year in, YouTube has brought his business over{" "}
                <b className="text-emerald-600 dark:text-emerald-400">$1M</b>{" "}
                .That's off four videos a month. Ask him which platform he'd
                keep if he could only have one, and it's YouTube every time.
              </p>

              <div className="grid grid-cols-2 gap-3 md:gap-4">
                <div className="p-3 md:p-4 border border-zinc-200 dark:border-zinc-800 rounded-xl md:rounded-2xl">
                  <p className="text-[10px] md:text-xs text-zinc-400 uppercase">Subscribers</p>
                  <p className="text-lg md:text-xl font-medium mt-1 text-zinc-900 dark:text-white">
                    250K → 580K
                  </p>
                </div>
                <div className="p-3 md:p-4 bg-emerald-600 rounded-xl md:rounded-2xl text-white">
                  <p className="text-[10px] md:text-xs text-emerald-100 uppercase">
                    From YouTube
                  </p>
                  <p className="text-lg md:text-xl font-medium mt-1">$1M+</p>
                </div>
              </div>
            </div>
            <div className="relative w-full aspect-video md:aspect-auto md:h-full">
              <VideoPlayer url="https://www.youtube.com/watch?v=wEQPJFshSu4" />
            </div>
          </div>

          {/* Card 3: Andres */}
          <div className="grid md:grid-cols-2 gap-0 border border-zinc-200 dark:border-zinc-800 rounded-2xl md:rounded-3xl overflow-hidden bg-white dark:bg-zinc-950 shadow-lg md:shadow-xl shadow-zinc-900/5 dark:shadow-black/40">
            <div className="relative w-full aspect-video md:aspect-auto md:h-full">
              <VideoPlayer url="https://www.youtube.com/watch?v=Ew4RK-oDr-M&t=4s" />
            </div>
            <div className="p-6 md:p-8 lg:p-12">
              <div className="flex items-center gap-3 mb-3 md:mb-4">
                <img
                  src="/assets/clients/Andres Contreras Grassi.jpg"
                  alt="Andres"
                  className="h-8 md:h-10 w-8 md:w-10 rounded-full object-cover"
                />
                <span className="text-[9px] md:text-[10px] font-mono tracking-widest uppercase text-blue-500 bg-blue-500/10 px-2 py-1 rounded">
                  Client win
                </span>
              </div>
              <h3 className="text-xl md:text-2xl font-medium text-zinc-900 dark:text-white">
                Andres Contreras Grassi
              </h3>
              <p className="text-zinc-500 mb-4 md:mb-6 text-sm md:text-base">Sales expert</p>
              <p className="text-zinc-600 dark:text-zinc-300 mb-6 md:mb-8 leading-relaxed text-sm md:text-base">
                We took Andres's channel from $0 to{" "}
                <b className="text-emerald-600 dark:text-emerald-400">$8K a month in profit in 25 days</b>.
                He's gone on to become one of the biggest names in sales.
              </p>

              <div className="grid grid-cols-2 gap-3 md:gap-4">
                <div className="p-3 md:p-4 border border-zinc-200 dark:border-zinc-800 rounded-xl md:rounded-2xl">
                  <p className="text-[10px] md:text-xs text-zinc-400 uppercase">
                    Timeframe
                  </p>
                  <p className="text-lg md:text-xl font-medium mt-1 text-zinc-900 dark:text-white">
                    25 days
                  </p>
                </div>
                <div className="p-3 md:p-4 bg-emerald-600 rounded-xl md:rounded-2xl text-white">
                  <p className="text-[10px] md:text-xs text-emerald-100 uppercase">
                    Monthly Profit
                  </p>
                  <p className="text-lg md:text-xl font-medium mt-1">$8K</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
