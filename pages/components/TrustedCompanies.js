import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const item = {
  hidden: { opacity: 0, y: 12 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: 0.1 * i },
  }),
};

const TrustedCompanies = () => {
  return (
    <section className="w-full bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Title matching Price section branding */}
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="w-full text-center text-[var(--color-primary)] text-2xl sm:text-3xl md:text-4xl font-extrabold font-[var(--font-sans)]"
        >
          Trusted by Industry Leaders
        </motion.h2>

        {/* Logos - closer spacing */}
        <div className="mt-8 flex items-center justify-center gap-10 sm:gap-16">
          {/* CADY */}
          <motion.div
            custom={0}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={item}
            className="opacity-80 hover:opacity-100 transition-opacity"
          >
            <Image
              src="/cady.png"
              alt="Cady logo"
              width={150}
              height={48}
              className="object-contain max-h-12  opacity-60 transition-opacity"
              priority
            />
          </motion.div>

          {/* PCBWay */}
          <motion.div
            custom={1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={item}
            className="opacity-80 transition-opacity"
          >
            <Image
              src="/pcbway.png"
              alt="PCBWay logo"
              width={150}
              height={48}
              className="object-contain max-h-12 "
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TrustedCompanies;
