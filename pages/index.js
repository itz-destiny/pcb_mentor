import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Manrope } from "next/font/google";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Mission from "./components/Mission";
import LearningHub from "./components/LearningHub";
import MentorshipSection from "./components/MentorshipSection";
import CommunitySection from "./components/CommunitySection";
import TestimonialSection from "./components/TestimonialSection";
import CallToActionSection from "./components/CallToActionSection";
import Footer from "./components/Footer";
import TrustedCompanies from "./components/TrustedCompanies";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "700", "800"],
});

// Animation variants for sections
const sectionVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1 },
  }),
};

const AnimatedSection = ({ children, index, isNavbar = false }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={sectionVariants}
      custom={index}
      className={isNavbar ? "w-full" : "w-full flex flex-col items-center"}
    >
      {children}
    </motion.div>
  );
};

export default function Home() {
  return (
    <div className={`w-full ${manrope.variable}`}>
      <AnimatedSection index={0} isNavbar={true}>
        <Navbar />
      </AnimatedSection>
      <AnimatedSection index={1}>
        <Hero />
      </AnimatedSection>
      <AnimatedSection index={2}>
        <Mission />
        <AnimatedSection index={3}>
          <TrustedCompanies />
        </AnimatedSection>
      </AnimatedSection>
      <AnimatedSection index={4}>
        <LearningHub />
      </AnimatedSection>
      <AnimatedSection index={5}>
        <MentorshipSection />
      </AnimatedSection>
      <AnimatedSection index={6}>
        <CommunitySection />
      </AnimatedSection>
      <AnimatedSection index={7}>
        <TestimonialSection />
      </AnimatedSection>
      <AnimatedSection index={8}>
        <CallToActionSection />
      </AnimatedSection>
      <AnimatedSection index={9}>
        <Footer />
      </AnimatedSection>
    </div>
  );
}
