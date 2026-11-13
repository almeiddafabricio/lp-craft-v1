import { LazyMotion, MotionConfig, domAnimation } from "framer-motion";
import { AnnouncementBar } from "./components/AnnouncementBar";
import { Hero } from "./components/Hero";
import { PainSection } from "./components/PainSection";
import { ModelsCarousel } from "./components/ModelsCarousel";
import { Organized } from "./components/Organized";
import { HowItWorks } from "./components/HowItWorks";
import { PerfectFor } from "./components/PerfectFor";
import { Bonus } from "./components/Bonus";
import { Testimonials } from "./components/Testimonials";
import { Pricing } from "./components/Pricing";
import { Guarantee } from "./components/Guarantee";
import { FAQ } from "./components/FAQ";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    // LazyMotion + domAnimation: carrega só os recursos de animação usados (bundle menor)
    // reducedMotion="user": respeita a preferência "reduzir movimento" do sistema
    <LazyMotion features={domAnimation} strict>
      <MotionConfig reducedMotion="user">
        <AnnouncementBar />
        <main className="overflow-x-clip">
          <Hero />
          <PainSection />
          <ModelsCarousel />
          <Organized />
          <HowItWorks />
          <PerfectFor />
          <Bonus />
          <Testimonials />
          <Pricing />
          <Guarantee />
          <FAQ />
        </main>
        <Footer />
      </MotionConfig>
    </LazyMotion>
  );
}
