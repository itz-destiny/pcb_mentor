import React from "react";
import Navbar from "../components/Navbar";
import { motion } from "framer-motion";
import Link from "next/link";

const sectionVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const Hero = () => {
  return (
    <div className="w-full flex flex-col items-center">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={sectionVariants}
        className="w-full"
      >
        <Navbar />
      </motion.div>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={sectionVariants}
        className="w-full px-4 sm:px-6 lg:px-8 py-12 md:py-16 flex flex-col items-center justify-center gap-6 h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px]"
        style={{
          backgroundImage: "url(/about_frame.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="w-full max-w-2xl flex flex-col justify-center items-center gap-6 text-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white font-[var(--font-sans)] leading-tight">
            Hands-On PCB Mentorship to Accelerate Your Growth
          </h1>
          <p className="text-sm sm:text-base font-normal text-white font-[var(--font-sans)] leading-normal">
            Learn faster and grow smarter with personalized, step-by-step
            guidance designed to help you master PCB design and become a
            confident electronics engineer — no guesswork, no overwhelm.
          </p>
          <Link
            href="/contact"
            className="px-6 py-3 bg-[var(--color-primary)] rounded-[40px] flex justify-center items-center gap-2.5 hover:bg-[#2a4b8c] transition-colors duration-200"
          >
            <span className="text-sm sm:text-base font-medium text-[#f8f8fa] font-[var(--font-sans)]">
              Apply Now
            </span>
            <svg
              className="w-5 h-5 sm:w-6 sm:h-6 text-[#f8f8fa]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
