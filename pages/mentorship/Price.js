import React from "react";
import { motion } from "framer-motion";

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const Price = () => {
  return (
    <div className="w-full">
      <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col justify-start items-center gap-6">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          variants={cardVariants}
          viewport={{ once: true }}
          className="w-full text-center text-[var(--color-primary)] text-3xl sm:text-4xl md:text-5xl font-extrabold font-[var(--font-sans)]"
        >
          Unlock your potential with our tailored PCB Mentorship
        </motion.h2>
        <motion.p
          initial="hidden"
          whileInView="visible"
          variants={cardVariants}
          viewport={{ once: true }}
          className="w-full text-center text-[var(--color-foreground)] text-sm sm:text-base md:text-lg font-normal font-[var(--font-sans)] leading-normal"
        >
          Join our mentorship program and get the coaching you need to thrive in
          PCB design.
        </motion.p>
      </div>

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col items-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={cardVariants}
          viewport={{ once: true }}
          className="w-full max-w-xl mx-auto text-center p-9 rounded-lg bg-white shadow-lg"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[var(--color-primary)] font-[var(--font-sans)]">
            Our Plan
          </h2>
          <div className="w-[140px] mx-auto mt-2 p-1 bg-[var(--color-primary)] rounded-full flex justify-center items-center">
            <p className="text-white text-xs font-bold font-[var(--font-sans)] leading-none">
              Duration - 8 weeks
            </p>
          </div>
          <p className="mt-4 text-base sm:text-lg text-[var(--color-foreground)] font-normal font-[var(--font-sans)] leading-relaxed">
            Our mentorship program is perfect for individuals who want to master
            PCB design through a guided, hands-on approach.
          </p>
          <div className="mt-6 flex justify-center items-baseline gap-2">
            <p className="text-4xl sm:text-5xl text-[var(--color-primary)] font-extrabold font-[var(--font-sans)]">
              $50
            </p>
            <p className="text-4xl sm:text-5xl text-[#bfbfbf] font-normal font-[var(--font-sans)] line-through">
              $100
            </p>
          </div>
          <motion.a
            initial="hidden"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-6 w-[200px] mx-auto block p-2.5 rounded-full outline outline-1 outline-[var(--color-primary)] flex justify-center items-center gap-2 text-[var(--color-foreground)] text-lg font-bold font-[var(--font-sans)] leading-[25.16px] hover:bg-[var(--color-primary)] hover:text-white transition-colors duration-200"
            href="#"
          >
            Join Now
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </motion.a>
          <div className="mt-6 flex flex-col gap-2">
            {[
              "Software Proficiency",
              "Feedback and Critique Checkpoints",
              "Hands-On Experience",
              "Personalized Advice from Experts",
              "Certificate of Completion",
              "Group Learning",
            ].map((item, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                variants={cardVariants}
                viewport={{ once: true, amount: 0.5 }}
                className="flex items-center gap-2"
              >
                <div className="w-4 h-4 bg-[var(--color-primary)] rounded-full" />
                <p className="text-xs sm:text-sm text-[var(--color-foreground)] font-normal font-[var(--font-sans)] leading-relaxed">
                  {item}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Price;
