import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion"; // Import AnimatePresence
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    message: "",
  });

  const [showSuccessPopup, setShowSuccessPopup] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "service") {
      e.target.style.color = value ? "var(--color-foreground)" : "#b2b2b2";
    }
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowSuccessPopup(true);
    setFormData({ name: "", email: "", service: "", message: "" });
    const serviceSelect = document.querySelector('select[name="service"]');
    if (serviceSelect) serviceSelect.style.color = "#b2b2b2";
  };

  return (
    <div className="w-full min-h-screen flex flex-col">
      <Navbar />
      <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 pt-12 pb-24 sm:pt-16 bg-white flex flex-col justify-center items-center gap-16 overflow-hidden">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="w-full text-center max-w-3xl"
        >
          <h2 className="text-[var(--color-primary)] text-3xl sm:text-4xl md:text-5xl font-extrabold font-[var(--font-sans)] leading-[52.80px]">
            Let’s Talk
          </h2>
          <p className="mt-4 text-[var(--color-foreground)] text-base sm:text-lg font-normal font-[var(--font-sans)] leading-relaxed">
            Have a big idea or brand to develop and need help? Reach out—we’d
            love to hear about your project and provide the support you need.
          </p>
        </motion.div>

        {/* Main Content Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="w-full flex flex-col md:flex-row justify-center items-start gap-12 sm:gap-16"
        >
          {/* --- RESTORED: Contact Info & Socials Section --- */}
          <div className="flex-1 flex flex-col justify-start items-start gap-8 sm:gap-10">
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
                href="mailto:josephogbonna860@gmail.com"
                className="text-[var(--color-foreground)] text-base sm:text-lg font-normal font-[var(--font-sans)] hover:text-[var(--color-primary)] transition-colors"
              >
                josephogbonna860@gmail.com
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
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-6 sm:gap-8"
            >
              <div className="flex flex-col gap-3 sm:gap-4">
                <label className="text-[var(--color-foreground)] text-xs sm:text-sm font-normal font-[var(--font-sans)]">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full h-11 sm:h-12 bg-[#f7f7f7] rounded-[10px] px-4 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
                  required
                />
              </div>
              <div className="flex flex-col gap-3 sm:gap-4">
                <label className="text-[var(--color-foreground)] text-xs sm:text-sm font-normal font-[var(--font-sans)]">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full h-11 sm:h-12 bg-[#f7f7f7] rounded-[10px] px-4 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
                  required
                />
              </div>
              <div className="flex flex-col gap-3 sm:gap-4">
                <label className="text-[var(--color-foreground)] text-xs sm:text-sm font-normal font-[var(--font-sans)]">
                  What service are you interested in?
                </label>
                <div className="relative w-full">
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full h-12 bg-[#f7f7f7] rounded-[10px] px-4 text-base focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] appearance-none"
                    style={{
                      color: formData.service
                        ? "var(--color-foreground)"
                        : "#b2b2b2",
                    }}
                    required
                  >
                    <option value="" disabled>
                      Select project type
                    </option>
                    <option value="Mentorship">Mentorship</option>
                    <option value="PCB Design">PCB Design</option>
                    <option value="Project Guidance">Project Guidance</option>
                  </select>
                  <svg
                    className="w-6 h-6 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400"
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
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full h-[165px] bg-[#f7f7f7] rounded-[10px] px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] resize-none"
                  required
                />
              </div>
              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto px-8 py-3 bg-[#0e2650] rounded-[22px] flex justify-center items-center gap-2"
              >
                <span className="text-white text-lg sm:text-xl font-medium font-[var(--font-sans)]">
                  Submit
                </span>
              </motion.button>
            </form>
          </div>
        </motion.div>
      </main>
      <Footer />

      {/* Success Popup */}
      <AnimatePresence>
        {showSuccessPopup && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60"
            onClick={() => setShowSuccessPopup(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="bg-white rounded-xl shadow-2xl p-8 max-w-sm w-full text-center"
              onClick={(e) => e.stopPropagation()}
            >
              <h3 className="text-2xl font-bold text-[var(--color-primary)]">
                Success!
              </h3>
              <p className="mt-4 text-lg text-[var(--color-foreground)]">
                Your message has been sent successfully.
              </p>
              <button
                onClick={() => setShowSuccessPopup(false)}
                className="mt-6 w-full rounded-[15px] bg-[var(--color-primary)] px-4 py-2.5 font-medium text-white hover:bg-[#2a4b8c] transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[var(--color-primary)]"
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ContactPage;
