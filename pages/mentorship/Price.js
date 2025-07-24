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
          Unlock your potential with our tailored PCB Membership packages
        </motion.h2>
        <motion.p
          initial="hidden"
          whileInView="visible"
          variants={cardVariants}
          viewport={{ once: true }}
          className="w-full text-center text-[var(--color-foreground)] text-sm sm:text-base md:text-lg font-normal font-[var(--font-sans)] leading-normal"
        >
          Unlock your potential with a PCB Membership and get the coaching you
          need to thrive.
        </motion.p>
      </div>

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={cardVariants}
          viewport={{ once: true }}
          className="w-full max-w-xl mx-auto text-center p-9 rounded-lg bg-white shadow-lg"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[var(--color-primary)] font-[var(--font-sans)]">
            Beginner Plan
          </h2>
          <div className="w-[140px] mx-auto mt-2 p-1 bg-[var(--color-primary)] rounded-full flex justify-center items-center">
            <p className="text-white text-xs font-bold font-[var(--font-sans)] leading-none">
              Duration - 12 weeks
            </p>
          </div>
          <p className="mt-4 text-base sm:text-lg text-[var(--color-foreground)] font-normal font-[var(--font-sans)] leading-relaxed">
            Our beginner-friendly mentorship program is perfect for individuals
            with little or no experience in PCB design.
          </p>
          <div className="mt-6 flex justify-center items-baseline gap-2">
            <p className="text-4xl sm:text-5xl text-[var(--color-primary)] font-extrabold font-[var(--font-sans)]">
              $69
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
            Buy Beginner Plan
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

        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={cardVariants}
          viewport={{ once: true }}
          className="w-full max-w-xl mx-auto text-center p-6 rounded-[44px] bg-[var(--color-primary)] text-white relative overflow-hidden"
        >
          <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 w-[257px] h-[253px] bg-[#5c94f5] rounded-full clip-path-polygon(0 0, 100% 0, 100% 100%, 0% 100%)" />
          <div className="relative z-10">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-[var(--font-sans)]">
              Intermediate Plan
            </h2>
            <div className="w-[140px] mx-auto mt-2 p-1 bg-white rounded-full flex justify-center items-center">
              <p className="text-[var(--color-primary)] text-xs font-bold font-[var(--font-sans)] leading-none">
                Duration - 12 weeks
              </p>
            </div>
            <p className="mt-4 text-base sm:text-lg font-normal font-[var(--font-sans)] leading-relaxed">
              Our beginner-friendly mentorship program is perfect for
              individuals with little or no experience in PCB design.
            </p>
            <div className="mt-6 flex justify-center items-baseline gap-2">
              <p className="text-4xl sm:text-5xl font-extrabold font-[var(--font-sans)]">
                $99
              </p>
              <p className="text-4xl sm:text-5xl text-[#bfbfbf] font-normal font-[var(--font-sans)] line-through">
                $130
              </p>
            </div>
            <motion.a
              initial="hidden"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-6 w-[200px] mx-auto block p-2.5 rounded-full outline outline-1 outline-white flex justify-center items-center gap-2 text-white text-lg font-bold font-[var(--font-sans)] leading-[25.16px] hover:bg-white hover:text-[var(--color-primary)] transition-colors duration-200"
              href="#"
            >
              Buy Intermediate Plan
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
                  <div className="w-4 h-4 bg-white rounded-full" />
                  <p className="text-xs sm:text-sm font-normal font-[var(--font-sans)] leading-relaxed">
                    {item}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
          <div className="absolute -bottom-12 right-1/2 transform translate-x-1/2 w-[257px] h-[253px] bg-[#5c94f5] rounded-full clip-path-polygon(0 0, 100% 0, 100% 100%, 0% 100%)" />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={cardVariants}
          viewport={{ once: true }}
          className="w-full max-w-xl mx-auto text-center p-6 rounded-lg bg-white shadow-lg"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[var(--color-foreground)] font-[var(--font-sans)]">
            One-on-one Mentorship
          </h2>
          <div className="w-[140px] mx-auto mt-2 p-1 bg-[var(--color-primary)] rounded-full flex justify-center items-center">
            <p className="text-white text-xs font-bold font-[var(--font-sans)] leading-none">
              Duration - 20 weeks
            </p>
          </div>
          <p className="mt-4 text-base sm:text-lg text-[var(--color-foreground)] font-normal font-[var(--font-sans)] leading-relaxed">
            Our beginner-friendly mentorship program is perfect for individuals
            with little or no experience in PCB design.
          </p>
          <div className="mt-6 flex justify-center items-baseline gap-2">
            <p className="text-4xl sm:text-5xl text-[var(--color-primary)] font-extrabold font-[var(--font-sans)]">
              $399
            </p>
            <p className="text-4xl sm:text-5xl text-[#bfbfbf] font-normal font-[var(--font-sans)] line-through">
              $500
            </p>
          </div>
          <motion.a
            initial="hidden"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-6 w-[200px] mx-auto block p-2.5 rounded-full outline outline-1 outline-[var(--color-primary)] flex justify-center items-center gap-2 text-[var(--color-foreground)] text-lg font-bold font-[var(--font-sans)] leading-[25.16px] hover:bg-[var(--color-primary)] hover:text-white transition-colors duration-200"
            href="#"
          >
            Start Personal Mentorship
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
