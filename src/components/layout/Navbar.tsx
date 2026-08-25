import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "../../context/ThemeContext";

const TYPEFORM_URL = "https://calendly.com/dusan-infopartnr/45min";

export const Navbar: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Smooth scroll interceptor to keep URLs clean
  const handleScrollToSection = (
    e: React.MouseEvent<HTMLAnchorElement>,
    targetId: string,
  ) => {
    e.preventDefault();
    const target = document.getElementById(targetId);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
    // Always close mobile menu if it was open during a click
    setMobileMenuOpen(false);
  };

  // Dedicated handler for the logo to scroll to the absolute top
  const handleScrollToTop = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
    setMobileMenuOpen(false);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto mt-3 sm:mt-4 max-w-6xl px-3 sm:px-4">
        <nav className="flex items-center justify-between rounded-full border border-zinc-200 dark:border-zinc-800 bg-white/80 dark:bg-zinc-950/80 px-4 py-2.5 backdrop-blur-md sm:px-5 transition-colors duration-300">
          {/* Logo / Home link */}
          <a
            href="#top"
            onClick={handleScrollToTop}
            className="flex items-center gap-2"
            aria-label="Infopartnr home"
          >
            {/* Light mode rendering */}
            <img
              src="/assets/logo/logo-black.png"
              alt="Infopartnr Logo"
              className="h-7 w-auto block dark:hidden"
            />
            {/* Dark mode rendering */}
            <img
              src="/assets/logo/logo-white.png"
              alt="Infopartnr Logo"
              className="h-7 w-auto hidden dark:block"
            />
            <span className="font-display text-base font-medium tracking-tightest text-zinc-900 dark:text-white">
              Infopartnr
            </span>
          </a>

          {/* Center Links */}
          <div className="hidden items-center gap-8 md:flex">
            <a
              href="#funnel"
              onClick={(e) => handleScrollToSection(e, "funnel")}
              className="text-sm font-medium text-zinc-500 hover:text-[#4D65FF] dark:text-zinc-400 dark:hover:text-[#4D65FF] transition-colors"
            >
              Process
            </a>
            <a
              href="#results"
              onClick={(e) => handleScrollToSection(e, "results")}
              className="text-sm font-medium text-zinc-500 hover:text-[#4D65FF] dark:text-zinc-400 dark:hover:text-[#4D65FF] transition-colors"
            >
              Results
            </a>
            <a
              href="#offer"
              onClick={(e) => handleScrollToSection(e, "offer")}
              className="text-sm font-medium text-zinc-500 hover:text-[#4D65FF] dark:text-zinc-400 dark:hover:text-[#4D65FF] transition-colors"
            >
              Offer
            </a>
            <a
              href="#faq"
              onClick={(e) => handleScrollToSection(e, "faq")}
              className="text-sm font-medium text-zinc-500 hover:text-[#4D65FF] dark:text-zinc-400 dark:hover:text-[#4D65FF] transition-colors"
            >
              FAQ
            </a>
          </div>

          {/* CTA + Light/Dark Controls */}
          <div className="flex items-center gap-3">
            <button
              onClick={toggleTheme}
              className="inline-flex h-9 w-9 cursor-pointer items-center justify-center rounded-full border border-zinc-200 dark:border-zinc-800 text-zinc-500 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-all"
              aria-label="Toggle system color theme"
            >
              {theme === "light" ? (
                <svg
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                  />
                </svg>
              ) : (
                <svg
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707M16.243 17.657l.707.707M6.343 6.343l.707-.707"
                  />
                </svg>
              )}
            </button>

            {/* Desktop Typeform Link */}
            <a
              href={TYPEFORM_URL}
              target="_blank"
              rel="noreferrer"
              className="grad-blue hidden cursor-pointer items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium text-white transition-transform duration-200 hover:-translate-y-0.5 shadow-[0_8px_24px_-8px_rgba(77,101,255,0.55)] md:inline-flex"
            >
              Book a Call
              <svg
                className="h-3.5 w-3.5"
                viewBox="0 0 16 16"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M3 8h10M9 4l4 4-4 4"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-zinc-200 dark:border-zinc-800 text-zinc-900 dark:text-white md:hidden"
              aria-label="Open menu"
              aria-expanded={mobileMenuOpen}
            >
              <svg
                className="h-5 w-5"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M4 7h16M4 12h16M4 17h16"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </div>
        </nav>

        {/* Premium Mobile slide-down interface via framer-motion */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0, scale: 0.95 }}
              animate={{
                opacity: 1,
                height: "auto",
                scale: 1,
                transition: {
                  height: { duration: 0.3, ease: [0.16, 1, 0.3, 1] },
                  opacity: { duration: 0.2 },
                },
              }}
              exit={{
                opacity: 0,
                height: 0,
                scale: 0.95,
                transition: {
                  height: { duration: 0.25, ease: [0.16, 1, 0.3, 1] },
                  opacity: { duration: 0.15 },
                },
              }}
              className="mt-2 overflow-hidden rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 p-2 md:hidden transition-colors duration-300 origin-top"
            >
              <a
                href="#funnel"
                onClick={(e) => handleScrollToSection(e, "funnel")}
                className="block rounded-2xl px-4 py-3 text-sm font-medium text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-900"
              >
                Process
              </a>
              <a
                href="#results"
                onClick={(e) => handleScrollToSection(e, "results")}
                className="block rounded-2xl px-4 py-3 text-sm font-medium text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-900"
              >
                Results
              </a>
              <a
                href="#offer"
                onClick={(e) => handleScrollToSection(e, "offer")}
                className="block rounded-2xl px-4 py-3 text-sm font-medium text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-900"
              >
                Offer
              </a>
              <a
                href="#faq"
                onClick={(e) => handleScrollToSection(e, "faq")}
                className="block rounded-2xl px-4 py-3 text-sm font-medium text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-900"
              >
                FAQ
              </a>

              {/* Mobile Typeform Link */}
              <a
                href={TYPEFORM_URL}
                target="_blank"
                rel="noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="grad-blue mt-1 block rounded-2xl px-4 py-3 text-center text-sm font-medium text-white"
              >
                Book a Call
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};