import React from 'react';

export const ClientStrip: React.FC = () => {
  // Hard-shuffled array to prevent Hydration mismatches while looking randomized
  const clientPhotos = [
    'Noah Kent.jpg', 'Andres Contreras Grassi.jpg', 'Gavin Herman.jpg',
    'Damaris Trades.jpg', 'Jonny Miller.jpg', 'Sajjaad Khader.jpg',
    'Dan Bolton.jpg', 'Jayden Adamson.jpg', 'Tech with Soleyman.jpg',
    'Dylan Wilson.jpg', 'Nathan Nazareth.jpg', 'Tim Chanut.png'
  ];

  // Quadruple the list so it covers extremely wide resolutions without leaving empty trailing space
  const marqueeItems = [...clientPhotos, ...clientPhotos, ...clientPhotos, ...clientPhotos];

  return (
    <section className="py-12 overflow-hidden bg-zinc-50 dark:bg-[#09090B] border-y border-zinc-100 dark:border-zinc-900 transition-colors duration-300">
      <div className="mb-6 text-center">
        <span className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-emerald-500 dark:text-emerald-400">
          Trusted by:
        </span>
      </div>

      <div className="relative flex overflow-x-hidden group">
        <div className="absolute inset-y-0 left-0 w-24 sm:w-32 bg-gradient-to-r from-zinc-50 dark:from-[#09090B] to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-24 sm:w-32 bg-gradient-to-l from-zinc-50 dark:from-[#09090B] to-transparent z-10 pointer-events-none" />

        {/* Inline animationDuration slows the scroll down to 60s */}
        <div 
          className="animate-marquee-ltr flex w-max items-center gap-12 md:gap-20 hover:[animation-play-state:paused]"
          style={{ animationDuration: '60s' }}
        >
          {marqueeItems.map((photo, idx) => (
            <div
              key={idx}
              className="h-24 w-24 md:h-32 md:w-32 shrink-0 rounded-full overflow-hidden border-2 border-zinc-200 dark:border-zinc-800 shadow-md grayscale hover:grayscale-0 transition-all duration-300"
            >
              <img
                src={`/assets/clients/${photo}`}
                alt="Client"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};