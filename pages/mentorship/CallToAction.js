import React from "react";
import { motion } from "framer-motion";

const CallToAction = () => {
  return (
    <div className="w-full max-w-7xl mx-auto px-8 sm:px-12 lg:px-24 py-10 sm:py-12 lg:py-16 bg-gradient-to-b from-white to-white/0 rounded-[45px] flex flex-col justify-start items-center gap-8 sm:gap-10 lg:gap-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="w-full text-center"
      >
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[var(--color-foreground)] font-[var(--font-sans)] leading-tight">
          Start advertising more effectively in the mobile age.
        </h2>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="w-full flex flex-col sm:flex-row justify-center items-start gap-4 sm:gap-6 lg:gap-8"
      >
        <div className="w-full sm:w-auto flex items-center gap-2 sm:gap-4">
          <div className="w-5 h-4 bg-[var(--color-primary)]" />
          <p className="text-base sm:text-lg font-medium text-[var(--color-foreground)] font-[var(--font-sans)] leading-[30px]">
            1-on-1 video calls
          </p>
        </div>
        <div className="w-full sm:w-auto flex items-center gap-2 sm:gap-4">
          <div className="w-5 h-4 bg-[var(--color-primary)]" />
          <p className="text-base sm:text-lg font-medium text-[var(--color-foreground)] font-[var(--font-sans)] leading-[30px]">
            Personalized feedback
          </p>
        </div>
        <div className="w-full sm:w-auto flex items-center gap-2 sm:gap-4">
          <div className="w-5 h-4 bg-[var(--color-primary)]" />
          <p className="text-base sm:text-lg font-medium text-[var(--color-foreground)] font-[var(--font-sans)] leading-[30px]">
            Exclusive resource access
          </p>
        </div>
      </motion.div>
      <motion.a
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        viewport={{ once: true }}
        href="#"
        className="px-6 sm:px-8 py-3 bg-[var(--color-primary)] rounded-[40px] flex justify-center items-center gap-2 text-white text-lg font-medium font-[var(--font-sans)] hover:bg-opacity-90 transition-colors duration-200"
      >
        Apply Now
        <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
          <div className="w-3.5 h-3.5 bg-white" />
        </div>
      </motion.a>
    </div>
  );
};

export default CallToAction;
