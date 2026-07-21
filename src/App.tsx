import React, { useState, useEffect } from "react";
import { ThemeProvider } from "./context/ThemeContext";
import { Navbar } from "./components/layout/Navbar";
import { Footer } from "./components/layout/Footer";
import { Hero } from "./components/sections/Hero";
import { ClientStrip } from "./components/sections/ClientStrip";
import { FunnelMechanism } from "./components/sections/FunnelMechanism";
import { MetricsAndProof } from "./components/sections/MetricsAndProof";
import { ClientWins } from "./components/sections/ClientWins";
import { WhyDifferent } from "./components/sections/WhyDifferent";
import { OfferSection } from "./components/sections/Offer";
import { TrustBridge } from "./components/sections/TrustBridge";
import { FAQ } from "./components/sections/FAQ";
import { CTASection } from "./components/sections/CTASection";
import { ParticleFunnel } from "./components/sections/ParticleFunnel";
import { ROICalculator } from "./components/sections/ROICalculator";

// Tracks whether the viewport is at/above the md breakpoint (768px), so we
// can mount ParticleFunnel (WebGL) only on desktop and FunnelMechanism
// (plain DOM/CSS) only on mobile — rather than mounting both and hiding
// one with CSS, which would still pay the cost of an idle WebGL canvas
// on phones.
function useIsDesktop(breakpoint = 768) {
  const [isDesktop, setIsDesktop] = useState<boolean>(
    () => typeof window !== "undefined" && window.innerWidth >= breakpoint,
  );

  useEffect(() => {
    const mql = window.matchMedia(`(min-width: ${breakpoint}px)`);
    const handleChange = () => setIsDesktop(mql.matches);

    handleChange();
    mql.addEventListener("change", handleChange);
    return () => mql.removeEventListener("change", handleChange);
  }, [breakpoint]);

  return isDesktop;
}

function App() {
  const isDesktop = useIsDesktop();

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-[#0A0A0A] text-zinc-900 dark:text-white transition-colors duration-300 selection:bg-[#4D65FF] selection:text-white">
        <Navbar />

        <main id="top" className="pt-24">
          <Hero />
          <ClientStrip />
          <MetricsAndProof />
          {isDesktop ? <ParticleFunnel /> : <FunnelMechanism />}
          <ClientWins />
          <WhyDifferent />
          <ROICalculator />
          <OfferSection />
          <TrustBridge />
          <FAQ />
          <CTASection />
        </main>

        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
