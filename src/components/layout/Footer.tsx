import React from 'react';

export const Footer: React.FC = () => {

  const handleScrollToTop = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="section-x py-12 border-t border-zinc-200 dark:border-zinc-900 bg-white dark:bg-[#0A0A0A] transition-colors duration-300">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 sm:flex-row">
        <a href="#top" onClick={handleScrollToTop} className="flex items-center gap-2" aria-label="Infopartnr home">
          <img
            src="/assets/logo/logo-black.png"
            alt="Infopartnr Logo"
            className="h-6 w-auto block dark:hidden"
          />
          <img
            src="/assets/logo/logo-white.png"
            alt="Infopartnr Logo"
            className="h-6 w-auto hidden dark:block"
          />
          <span className="font-display text-base font-medium tracking-tightest text-zinc-900 dark:text-white">
            Infopartnr
          </span>
        </a>
        <p className="text-sm text-zinc-500 dark:text-zinc-400">
          © 2026 Infopartnr. Done-for-you YouTube growth.
        </p>
        <a
          href="https://calendly.com/dusan-infopartnr/45min"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-medium text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white transition-colors"
        >
          Book a Call →
        </a>
      </div>
    </footer>
  );
};
