import { ThemeProvider } from "./context/ThemeContext";
import { Navbar } from "./components/layout/Navbar";
import { Footer } from "./components/layout/Footer";
import { Hero } from "./components/sections/Hero";
import { ClientStrip } from "./components/sections/ClientStrip";
import { FunnelMechanism } from "./components/sections/FunnelMechanism";
import { MetricsAndProof } from "./components/sections/MetricsAndProof";
import { ClientWins } from "./components/sections/ClientWins";
import { OfferSection } from "./components/sections/Offer";
import { FAQ } from "./components/sections/FAQ";
import { CTASection } from "./components/sections/CTASection";
import { ROICalculator } from "./components/sections/ROICalculator";
import { Analytics } from "@vercel/analytics/react"


function App() {

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-[#0A0A0A] text-zinc-900 dark:text-white transition-colors duration-300 selection:bg-[#4D65FF] selection:text-white">
        <Navbar />

        <main id="top" className="pt-24">
          <Hero />
          <ClientStrip />
          <MetricsAndProof />
          <FunnelMechanism />
          <ClientWins />
          <ROICalculator />
          <OfferSection />
          <FAQ />
          <CTASection />
        </main>

        <Footer />
      </div>
      <Analytics />
    </ThemeProvider>
  );
}

export default App;
