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
      style={{ position: 'absolute', top: 0, left: 0 }}
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
        <div className="mb-16">
          <span className="eyebrow text-[#4D65FF] block mb-4">Proof</span>
          <h2 className="display-md text-zinc-900 dark:text-white">
            Not one or two <br />
            getting lucky.
          </h2>
          <p className="mt-4 text-zinc-500 dark:text-zinc-400">
            Real clients, real interviews. Tap any card to hear it from them.
          </p>
        </div>

        {/* Featured Cards Container */}
        <div className="space-y-8">
          {/* Card 1: Damaris */}
          <div className="grid md:grid-cols-2 gap-0 border border-zinc-200 dark:border-zinc-800 rounded-3xl overflow-hidden bg-white dark:bg-zinc-950 shadow-xl shadow-zinc-900/5 dark:shadow-black/40">
            {/* FIX: this container had no height on its own. ReactPlayer is
               position:absolute inside it, so it contributed zero height to
               the layout. On desktop the grid row was stretched by the text
               column so it was invisible; on mobile, once the grid collapses
               to a single column, this box would render at 0px tall and the
               video would disappear. aspect-video gives it an explicit,
               responsive height at every breakpoint. */}
            <div className="relative aspect-video md:aspect-auto bg-black flex items-center justify-center">
              <VideoPlayer url="https://www.youtube.com/watch?v=GYPC5zLIU_s" />
            </div>
            <div className="p-8 md:p-12">
              <div className="flex items-center gap-3 mb-4">
                <img
                  src="/assets/clients/Damaris Trades.jpg"
                  alt="Damaris"
                  className="h-10 w-10 rounded-full object-cover"
                />
                <span className="text-[10px] font-mono tracking-widest uppercase text-blue-500 bg-blue-500/10 px-2 py-1 rounded">
                  Client win
                </span>
              </div>
              <h3 className="text-2xl font-medium text-zinc-900 dark:text-white">
                Damaris
              </h3>
              <p className="text-zinc-500 mb-6">Started at ~800 subscribers</p>
              <p className="text-zinc-600 dark:text-zinc-300 mb-8 leading-relaxed">
                Before us, she once spent three months on a single video that
                pulled 500 views and zero calls. The very first video we made
                together brought a <b className="text-emerald-600 dark:text-emerald-400">$6K PIF within days</b> — and has since
                generated <b className="text-emerald-600 dark:text-emerald-400">$250K+ cash</b>.
              </p>

              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 border border-zinc-200 dark:border-zinc-800 rounded-2xl">
                  <p className="text-xs text-zinc-400 uppercase">
                    First 60 Days
                  </p>
                  <p className="text-xl font-medium mt-1 text-zinc-900 dark:text-white">
                    $100K
                  </p>
                </div>
                {/* Money/proof accent: this used to be the same blue as
                   every button and link on the page. Recoloring the actual
                   dollar callout to the new "proof" green makes it read as
                   a result, distinct from the blue you use for actions. */}
                <div className="p-4 bg-emerald-600 rounded-2xl text-white">
                  <p className="text-xs text-emerald-100 uppercase">
                    One video, to date
                  </p>
                  <p className="text-xl font-medium mt-1">$250K+</p>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: Nathan */}
          <div className="grid md:grid-cols-2 gap-0 border border-zinc-200 dark:border-zinc-800 rounded-3xl overflow-hidden bg-white dark:bg-zinc-950 shadow-xl shadow-zinc-900/5 dark:shadow-black/40">
            <div className="p-8 md:p-12 order-2 md:order-1">
              <div className="flex items-center gap-3 mb-4">
                <img
                  src="/assets/clients/Nathan Nazareth.jpg"
                  alt="Nathan Nazareth"
                  className="h-10 w-10 rounded-full object-cover"
                />
                <span className="text-[10px] font-mono tracking-widest uppercase text-blue-500 bg-blue-500/10 px-2 py-1 rounded">
                  Client win
                </span>
              </div>
              <h3 className="text-2xl font-medium text-zinc-900 dark:text-white">
                Nathan Nazareth
              </h3>
              <p className="text-zinc-500 mb-6">
                Creator & founder - with us 12+ months
              </p>
              <p className="text-zinc-600 dark:text-zinc-300 mb-8 leading-relaxed">
                Across the year we've worked together, YouTube has generated{" "}
                <b className="text-emerald-600 dark:text-emerald-400">well over $1M</b> for his business — off just four videos a
                month. Ask him which single platform he'd keep, and he picks
                YouTube every time.
              </p>

              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 border border-zinc-200 dark:border-zinc-800 rounded-2xl">
                  <p className="text-xs text-zinc-400 uppercase">Subscribers</p>
                  <p className="text-xl font-medium mt-1 text-zinc-900 dark:text-white">
                    250K → 580K
                  </p>
                </div>
                <div className="p-4 bg-emerald-600 rounded-2xl text-white">
                  <p className="text-xs text-emerald-100 uppercase">
                    From YouTube
                  </p>
                  <p className="text-xl font-medium mt-1">$1M+</p>
                </div>
              </div>
            </div>
            <div className="relative aspect-video md:aspect-auto bg-black order-1 md:order-2 flex items-center justify-center">
              <VideoPlayer url="https://www.youtube.com/watch?v=wEQPJFshSu4" />
            </div>
          </div>
        </div>

        {/* Additional Clients Grid */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Dylan Wilson */}
          <div className="border border-zinc-200 dark:border-zinc-800 rounded-3xl p-6 bg-white dark:bg-zinc-950 shadow-md shadow-zinc-900/5 dark:shadow-black/30">
            <img
              src="/assets/clients/Dylan Wilson.jpg"
              alt="Dylan Wilson"
              className="w-12 h-12 rounded-full mb-4 object-cover"
            />
            <h3 className="text-xl font-medium text-zinc-900 dark:text-white">
              Dylan Wilson
            </h3>
            <p className="text-zinc-500 mt-2 text-sm">Scale from 0 to 10k/mo</p>
          </div>
          {/* Noah Kent */}
          <div className="border border-zinc-200 dark:border-zinc-800 rounded-3xl p-6 bg-white dark:bg-zinc-950 shadow-md shadow-zinc-900/5 dark:shadow-black/30">
            <img
              src="/assets/clients/Noah Kent.jpg"
              alt="Noah Kent"
              className="w-12 h-12 rounded-full mb-4 object-cover"
            />
            <h3 className="text-xl font-medium text-zinc-900 dark:text-white">
              Noah Kent
            </h3>
            <p className="text-zinc-500 mt-2 text-sm">Added 50k MRR</p>
          </div>
          {/* Andres */}
          <div className="border border-zinc-200 dark:border-zinc-800 rounded-3xl p-6 bg-white dark:bg-zinc-950 shadow-md shadow-zinc-900/5 dark:shadow-black/30">
            <img
              src="/assets/clients/Andres Contreras Grassi.jpg"
              alt="Andres"
              className="w-12 h-12 rounded-full mb-4 object-cover"
            />
            <h3 className="text-xl font-medium text-zinc-900 dark:text-white">
              Andres
            </h3>
            <p className="text-zinc-500 mt-2 text-sm">3 clients in 7 days</p>
          </div>
          {/* Tim */}
          <div className="border border-zinc-200 dark:border-zinc-800 rounded-3xl p-6 bg-white dark:bg-zinc-950 shadow-md shadow-zinc-900/5 dark:shadow-black/30">
            <img
              src="/assets/clients/Tim Chanut.png"
              alt="Tim"
              className="w-12 h-12 rounded-full mb-4 object-cover"
            />
            <h3 className="text-xl font-medium text-zinc-900 dark:text-white">
              Tim
            </h3>
            <p className="text-zinc-500 mt-2 text-sm">First 100k month</p>
          </div>
        </div>
      </div>
    </section>
  );
};
