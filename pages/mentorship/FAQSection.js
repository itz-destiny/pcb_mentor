import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const FAQSection = () => {
  const faqs = [
    {
      question: "Do I need any experience to join the mentorship?",
      answer:
        "No experience is required. The program is beginner-friendly and tailored to meet you at your current level.",
    },
    {
      question: "What will I be able to do after the mentorship?",
      answer:
        "You'll confidently design schematics, layout PCBs, simulate circuits, and understand core electronics concepts.",
    },
    {
      question: "What tools or software will I need?",
      answer:
        "Just a laptop and internet. We’ll use free, beginner-friendly tools like KiCad or EasyEDA to get started.",
    },
    {
      question: "Is there support between sessions?",
      answer:
        "Yes, you’ll have access to a dedicated support channel for questions and guidance between sessions.",
    },
  ];

  return (
    <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col justify-start items-center gap-8">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[var(--color-primary)] font-[var(--font-sans)]">
        Frequently Asked Questions
      </h2>
      <div className="w-full flex flex-col justify-start items-start gap-6">
        {faqs.map((faq, index) => (
          <FAQItem key={index} question={faq.question} answer={faq.answer} />
        ))}
      </div>
    </div>
  );
};

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full px-6 sm:px-8 py-6 bg-white rounded-xl shadow-[0px_5px_15px_0px_rgba(25,33,61,0.06)] border border-[var(--color-text-secondary)]/20 flex flex-col justify-start items-start gap-4">
      <div
        className="w-full flex justify-between items-center cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="flex-1 max-w-[650px] text-[var(--color-foreground)] text-lg sm:text-xl font-semibold font-[var(--font-sans)] leading-[27px]">
          {question}
        </h3>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          className="w-5 h-5 flex justify-center items-center"
        >
          <svg
            className="w-4 h-4 text-[var(--color-primary)]"
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
        </motion.div>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="w-full max-w-[721px] text-[var(--color-text-secondary)] text-base sm:text-lg font-normal font-[var(--font-sans)] leading-relaxed overflow-hidden"
          >
            {answer}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default FAQSection;
