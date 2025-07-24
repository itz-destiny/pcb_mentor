import React from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const AboutPage = () => {
  return (
    <div className="w-full min-h-screen flex flex-col">
      <Navbar />
      <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 flex flex-col justify-start items-center gap-12 sm:gap-16 flex-grow">
        {/* Founder Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="w-full flex flex-col justify-start items-center gap-6 sm:gap-8"
        >
          <div className="w-[264px] h-[223.60px] relative">
            <img
              className="w-[223.60px] h-[223.60px] rounded-[194.63px] object-cover"
              src="/founder.png"
              alt="Joseph Ogbonna"
            />
            <div className="w-[163px] h-11 absolute left-1/2 transform -translate-x-1/2 top-[145px] bg-white rounded-md shadow-[0px_1.0723683834075928px_5.200986385345459px_0px_rgba(0,0,0,0.25)] flex items-center justify-between px-3">
              <div>
                <p className="text-[var(--color-foreground)] text-[8.58px] sm:text-xs font-medium font-[var(--font-sans)]">
                  Joseph Ogbonna
                </p>
                <p className="text-[#a6a6a6] text-[6.43px] sm:text-xs font-medium font-[var(--font-sans)]">
                  CEO/Founder of PCBMentor
                </p>
              </div>
              <div className="w-[21.45px] h-[21.45px] bg-[var(--color-primary)] rounded-full flex items-center justify-center">
                <div className="w-[17.16px] h-[17.16px] bg-white rounded-full" />
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center gap-4">
            <h2 className="w-full max-w-[693px] text-center text-[var(--color-primary)] text-3xl sm:text-4xl md:text-5xl font-extrabold font-[var(--font-sans)] leading-[52.80px]">
              I’m Joseph. I Created PCB Mentor to Be What I Wish I Had
            </h2>
            <p className="w-full max-w-[468px] text-center text-[var(--color-foreground)] text-base sm:text-lg font-normal font-[var(--font-sans)] leading-normal">
              Explore practical content to help you grow as an engineer — from
              beginner basics to career strategies.
            </p>
          </div>
        </motion.div>
        {/* Personal Journey Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="px-6 sm:px-8 py-5 rounded-[30px] flex flex-col justify-start items-center gap-4 sm:gap-6"
        >
          <div className="w-full flex flex-col justify-start items-center gap-3 sm:gap-4">
            <h2 className="w-full text-center text-[var(--color-primary)] text-3xl sm:text-4xl md:text-5xl font-extrabold font-[var(--font-sans)]">
              Personal Journey
            </h2>
            <p className="w-full max-w-[660px] text-center text-[var(--color-text-secondary)] text-base sm:text-lg font-normal font-[var(--font-sans)] leading-normal">
              PCB Mentor is a platform created to guide and empower electronics
              engineers, especially beginners and intermediates. Whether you're
              starting your journey or looking to level up, we provide practical
              content and expert mentorship to help you thrive.
            </p>
          </div>
        </motion.div>

        {/* Mission Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="w-full flex flex-col justify-center items-center gap-2 sm:gap-3"
        >
          <h2 className="text-center text-[var(--color-primary)] text-3xl sm:text-4xl md:text-5xl font-extrabold font-[var(--font-sans)]">
            Mission
          </h2>
          <p className="w-full max-w-[660px] text-center text-[var(--color-text-secondary)] text-base sm:text-lg font-normal font-[var(--font-sans)] leading-normal">
            Helping engineers grow without overwhelm
          </p>
        </motion.div>

        {/* Vision Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="w-full flex flex-col justify-center items-center gap-2 sm:gap-3"
        >
          <h2 className="text-center text-[var(--color-primary)] text-3xl sm:text-4xl md:text-5xl font-extrabold font-[var(--font-sans)]">
            Vision
          </h2>
          <p className="w-full max-w-[660px] text-center text-[var(--color-text-secondary)] text-base sm:text-lg font-normal font-[var(--font-sans)] leading-normal">
            Better, more human-centered electronics education
          </p>
        </motion.div>
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;
