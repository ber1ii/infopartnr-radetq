import React from 'react';

interface BridgeClient {
  id: string;
  name: string;
  role: string;
  quote: string;
  image: string;
}

export const TrustBridge: React.FC = () => {
  const bridgeClients: BridgeClient[] = [
    {
      id: 'client-1',
      name: 'Damaris Trades',
      role: 'Founder, Nexus Scale',
      quote: '"Before implementing this system, our strategy calls felt like an uphill battle. Prospects would show up cold, skeptical, and expecting a cheap pitch. Within weeks, the entire dynamic flipped—they started showing up ready to enroll."',
      image: '/assets/clients/Damaris Trades.jpg'
    },
    {
      id: 'client-2',
      name: 'Nathan Nazareth',
      role: 'Managing Partner, Sovereign B2B',
      quote: '"We replaced our entire multi-step automated email sequence with just one high-intent 15-minute authority asset. The pipeline is leaner, but the close rates are higher than they’ve ever been in our company’s history."',
      image: '/assets/clients/Nathan Nazareth.jpg'
    }
  ];

  return (
    <section className="section-x w-full bg-zinc-50/60 dark:bg-[#09090B] border-y border-zinc-100 dark:border-zinc-900 py-16 transition-colors duration-300">
      <div className="mx-auto max-w-5xl">

        {/* Subtle Section Tag */}
        <div className="mb-10 text-center sm:text-left">
          <span className="eyebrow text-zinc-400 dark:text-zinc-500">
            Validated by Operators
          </span>
        </div>

        {/* Dynamic Split Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
          {bridgeClients.map((client) => (
            <div
              key={client.id}
              // NEW: wrapped in a proper card (border + shadow), matching the
              // heavier, more tactile treatment used for the other proof
              // sections (ClientWins) — previously this was just a bare flex
              // row and read flatter than the trust it's meant to build.
              className="flex flex-col sm:flex-row items-center sm:items-start gap-6 group p-6 sm:p-8 rounded-3xl bg-white dark:bg-zinc-950 border border-zinc-100 dark:border-zinc-900 shadow-lg shadow-zinc-900/5 dark:shadow-black/40"
            >
              {/* PICTURE ELEMENT */}
              <div className="h-20 w-20 sm:h-24 sm:w-24 rounded-2xl overflow-hidden shrink-0 border border-zinc-200 dark:border-zinc-800 shadow-md transition-transform duration-300 group-hover:scale-105">
                <img
                  src={client.image}
                  alt={client.name}
                  className="h-full w-full object-cover filter grayscale hover:grayscale-0 transition-all duration-500 ease-out"
                />
              </div>

              {/* QUOTE ELEMENT */}
              <div className="flex-1 text-center sm:text-left">
                <p className="font-display text-base md:text-md italic text-zinc-600 dark:text-zinc-300 leading-relaxed font-normal">
                  {client.quote}
                </p>
                <div className="mt-3">
                  <h4 className="font-display text-sm font-medium text-zinc-900 dark:text-white">
                    {client.name}
                  </h4>
                  <p className="text-xs font-mono text-zinc-400 dark:text-zinc-500 mt-0.5">
                    {client.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
