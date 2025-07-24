import React from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const ContactPage = () => {
  return (
    <div className="w-full min-h-screen flex flex-col">
      <Navbar />
      <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 pt-12 sm:pt-16 bg-white flex flex-col justify-start items-center gap-12 sm:gap-16 overflow-hidden">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="w-full text-center"
        >
          <h2 className="text-[var(--color-primary)] text-3xl sm:text-4xl md:text-5xl font-extrabold font-[var(--font-sans)] leading-[52.80px]">
            Let’s Talk
          </h2>
          <p className="mt-4 max-w-2xl text-[var(--color-foreground)] text-base sm:text-lg font-normal font-[var(--font-sans)] leading-relaxed">
            Have a big idea or brand to develop and need help? Reach out—we’d
            love to hear about your project and provide the support you need.
          </p>
        </motion.div>

        {/* Main Content Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="w-full flex flex-col md:flex-row justify-center items-start gap-8 sm:gap-12 lg:gap-16"
        >
          {/* Contact Info */}
          <div className="flex-1 flex flex-col justify-start items-start gap-6 sm:gap-8">
            <div className="flex flex-col gap-4 sm:gap-5">
              <h3 className="text-[var(--color-primary)] text-2xl sm:text-3xl font-extrabold font-[var(--font-sans)]">
                Contact Details
              </h3>
              <p className="text-[var(--color-foreground)] text-base sm:text-lg font-normal font-[var(--font-sans)]">
                Get in touch with us directly or follow us on social media.
              </p>
            </div>
            <div className="flex flex-col gap-4 sm:gap-5">
              <h4 className="text-[var(--color-primary)] text-xl sm:text-2xl font-bold font-[var(--font-sans)]">
                Email
              </h4>
              <a
                href="mailto:pcbmentor@gmail.com"
                className="text-[var(--color-foreground)] text-base sm:text-lg font-normal font-[var(--font-sans)] hover:text-[var(--color-primary)] transition-colors"
              >
                pcbmentor@gmail.com
              </a>
            </div>
            <div className="flex flex-col gap-4 sm:gap-5">
              <h4 className="text-[var(--color-primary)] text-xl sm:text-2xl font-bold font-[var(--font-sans)]">
                Socials
              </h4>
              <a
                href="#"
                className="text-[var(--color-foreground)] text-base sm:text-lg font-normal font-[var(--font-sans)] hover:text-[var(--color-primary)] transition-colors"
              >
                Instagram
              </a>
              <a
                href="#"
                className="text-[var(--color-foreground)] text-base sm:text-lg font-normal font-[var(--font-sans)] hover:text-[var(--color-primary)] transition-colors"
              >
                Twitter
              </a>
              <a
                href="#"
                className="text-[var(--color-foreground)] text-base sm:text-lg font-normal font-[var(--font-sans)] hover:text-[var(--color-primary)] transition-colors"
              >
                Facebook
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="flex-1 w-full max-w-md">
            <div className="flex flex-col gap-6 sm:gap-7">
              <div className="flex flex-col gap-3 sm:gap-4">
                <label className="text-[var(--color-foreground)] text-xs sm:text-sm font-normal font-[var(--font-sans)]">
                  Name
                </label>
                <input
                  type="text"
                  className="w-full h-11 sm:h-12 bg-[#f7f7f7] rounded-[10px] px-4 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
                />
              </div>
              <div className="flex flex-col gap-3 sm:gap-4">
                <label className="text-[var(--color-foreground)] text-xs sm:text-sm font-normal font-[var(--font-sans)]">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full h-11 sm:h-12 bg-[#f7f7f7] rounded-[10px] px-4 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
                />
              </div>
              <div className="flex flex-col gap-3 sm:gap-4">
                <label className="text-[var(--color-foreground)] text-xs sm:text-sm font-normal font-[var(--font-sans)]">
                  What service are you interested in?
                </label>
                <div className="w-full px-4 py-2.5 bg-[#f7f7f7] rounded-[10px] inline-flex justify-between items-center">
                  <span className="text-[#b2b2b2] text-xs sm:text-sm font-light font-[var(--font-sans)]">
                    Select project type
                  </span>
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </div>
              <div className="flex flex-col gap-3 sm:gap-4">
                <label className="text-[var(--color-foreground)] text-xs sm:text-sm font-normal font-[var(--font-sans)]">
                  Message
                </label>
                <textarea className="w-full h-[165px] bg-[#f7f7f7] rounded-[10px] px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] resize-none" />
              </div>
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                viewport={{ once: true }}
                className="w-full sm:w-auto px-8 py-3 bg-[#0e2650] rounded-[22px] flex justify-center items-center gap-2"
              >
                <span className="text-white text-lg sm:text-xl font-medium font-[var(--font-sans)]">
                  Submit
                </span>
              </motion.button>
            </div>
          </div>
        </motion.div>
      </main>
      <Footer />
    </div>
  );
};

export default ContactPage;
