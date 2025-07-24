import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [showPopup, setShowPopup] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setShowPopup(true);
      setEmail("");
      setTimeout(() => setShowPopup(false), 3000);
    }
  };

  return (
    <footer className="w-full bg-[#0e2650] py-12 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 flex flex-col lg:flex-row justify-between items-start gap-8 sm:gap-12 lg:gap-16">
        <div className="flex flex-col items-start gap-4 sm:gap-6">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[var(--color-primary)] text-2xl sm:text-3xl md:text-4xl font-extrabold font-[var(--font-sans)]"
          >
            PCB-MENTOR
          </motion.h3>
          <p className="text-[#a6a6a6] text-base sm:text-lg font-medium font-[var(--font-sans)] leading-[30px]">
            Subscribe to our Newsletter to always get new updates
          </p>
          <div className="w-full max-w-xs">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email here"
              className="w-full h-12 sm:h-14 rounded-[70px] border-2 border-[#a6a6a6] bg-transparent text-[#a6a6a6] text-base sm:text-lg font-medium font-[var(--font-sans)] px-4 focus:outline-none focus:border-[var(--color-primary)]"
            />
          </div>
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={handleSubscribe}
            className="w-12 h-12 sm:w-14 sm:h-14 bg-[var(--color-primary)] rounded-full flex items-center justify-center mt-2"
          >
            <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white">
              <path
                d="M3.5 12h13m0 0l-6-6m6 6l-6 6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
              />
            </svg>
          </motion.button>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-white text-base sm:text-lg font-medium font-[var(--font-sans)] leading-[30px]"
          >
            © 2025 PCB Mentor. All rights reserved.
          </motion.p>
        </div>

        <div className="flex flex-col sm:flex-row justify-between w-full lg:w-auto gap-8 sm:gap-12 lg:gap-16">
          <div className="flex flex-col gap-2">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-white text-base sm:text-lg font-medium font-[var(--font-sans)]"
            >
              About
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-[#a6a6a6] text-base sm:text-lg font-medium font-[var(--font-sans)]"
            >
              About PCB Mentor
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-[#a6a6a6] text-base sm:text-lg font-medium font-[var(--font-sans)]"
            >
              Joseph’s Story
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-[#a6a6a6] text-base sm:text-lg font-medium font-[var(--font-sans)]"
            >
              Our Mission
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-[#a6a6a6] text-base sm:text-lg font-medium font-[var(--font-sans)]"
            >
              Vision & Values
            </motion.p>
          </div>

          <div className="flex flex-col gap-2">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-white text-base sm:text-lg font-medium font-[var(--font-sans)]"
            >
              Learn
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-[#a6a6a6] text-base sm:text-lg font-medium font-[var(--font-sans)]"
            >
              Blog / Learning Hub
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-[#a6a6a6] text-base sm:text-lg font-medium font-[var(--font-sans)]"
            >
              Beginner Projects
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-[#a6a6a6] text-base sm:text-lg font-medium font-[var(--font-sans)]"
            >
              PCB Design Tips
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-[#a6a6a6] text-base sm:text-lg font-medium font-[var(--font-sans)]"
            >
              Career Advice
            </motion.p>
          </div>

          <div className="flex flex-col gap-2">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-white text-base sm:text-lg font-medium font-[var(--font-sans)]"
            >
              Mentorship
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-[#a6a6a6] text-base sm:text-lg font-medium font-[var(--font-sans)]"
            >
              Mentorship Program
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-[#a6a6a6] text-base sm:text-lg font-medium font-[var(--font-sans)]"
            >
              How It Works
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-[#a6a6a6] text-base sm:text-lg font-medium font-[var(--font-sans)]"
            >
              Apply Now
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-[#a6a6a6] text-base sm:text-lg font-medium font-[var(--font-sans)]"
            >
              Testimonials
            </motion.p>
          </div>
        </div>

        <div className="flex flex-col items-start gap-2 mt-8 lg:mt-0">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-2"
          >
            <p className="text-white text-base sm:text-lg font-medium font-[var(--font-sans)] leading-[30px]">
              Terms and Conditions
            </p>
            <div className="w-1 h-1 bg-[#a6a6a6] rounded-full" />
            <p className="text-white text-base sm:text-lg font-medium font-[var(--font-sans)] leading-[30px]">
              Privacy Policy
            </p>
          </motion.div>
        </div>
      </div>

      <AnimatePresence>
        {showPopup && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="fixed bottom-4 right-4 bg-green-500 text-white p-4 rounded-lg shadow-lg z-50"
          >
            Successfully subscribed to our newsletter!
          </motion.div>
        )}
      </AnimatePresence>
    </footer>
  );
};

export default Footer;
