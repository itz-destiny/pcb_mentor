import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const curriculum = [
  {
    title: "Advanced Schematic Design",
    points: [
      "Complex circuit schematics",
      "Hierarchical design and organization",
    ],
  },
  {
    title: "Multilayer PCB Design",
    points: [
      "Principles of multilayer PCB design",
      "Stack‑up planning and layer management",
    ],
  },
  {
    title: "Signal Integrity",
    points: [
      "Understanding signal integrity issues",
      "Techniques to mitigate SI problems",
    ],
  },
  {
    title: "Power Integrity",
    points: [
      "Ensuring stable power delivery",
      "Power distribution network (PDN) design",
    ],
  },
  {
    title: "PCB Impedance Matching",
    points: [
      "Basics of impedance and its importance",
      "Techniques for impedance matching in PCB design",
    ],
  },
  {
    title: "Design for Manufacturability (DFM)",
    points: [
      "Guidelines to ensure manufacturability",
      "Avoiding common design pitfalls",
    ],
  },
  {
    title: "Thermal Management",
    points: [
      "Techniques for managing heat in PCB design",
      "Thermal vias, heatsinks, and cooling solutions",
    ],
  },
  {
    title: "High‑Speed PCB Design",
    points: [
      "Designing for high‑speed signals",
      "Minimizing electromagnetic interference (EMI)",
    ],
  },
  {
    title: "Project‑Based Learning",
    points: [
      "Hands‑on projects to apply design principles",
      "Real‑world scenarios and problem‑solving",
    ],
  },
  {
    title: "Career Growth & Industry Insights",
    points: [
      "Career advancement opportunities in PCB design",
      "Building a portfolio & interview prep",
    ],
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.35 } },
};

export default function CourseOutline() {
  const [open, setOpen] = useState(0);

  return (
    <section className="w-full bg-[var(--color-background,#f8fafc)]">
      {/* Header */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.6 }}
          variants={fadeUp}
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[var(--color-primary)] font-[var(--font-sans)]"
        >
          Course Outline
        </motion.h2>
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.6 }}
          variants={fadeUp}
          className="mt-3 text-sm sm:text-base md:text-lg text-[var(--color-foreground,#334155)]/90 max-w-2xl mx-auto"
        >
          A practical, industry‑ready PCB design curriculum — from multilayer
          fundamentals to high‑speed, SI/PI and DFM best practices.
        </motion.p>
      </div>

      {/* Outline */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-6">
        <ul className="grid md:grid-cols-2 gap-4 md:gap-6">
          {curriculum.map((item, idx) => (
            <li key={idx} className="group">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.4 }}
                variants={fadeUp}
                className={`relative rounded-2xl bg-white ring-1 ring-black/5 shadow-sm overflow-hidden`}
              >
                <button
                  onClick={() => setOpen(open === idx ? -1 : idx)}
                  className="w-full text-left p-5 sm:p-6 flex items-start gap-4"
                  aria-expanded={open === idx}
                  aria-controls={`panel-${idx}`}
                >
                  <span className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-[var(--color-primary)]/10 text-[var(--color-primary)] font-bold">
                    {idx + 1}
                  </span>
                  <div className="flex-1">
                    <h3 className="text-lg sm:text-xl font-extrabold text-[var(--color-foreground,#0f172a)] font-[var(--font-sans)]">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-[var(--color-foreground,#334155)]/70 text-sm">
                      Tap to view topics
                    </p>
                  </div>
                  <svg
                    className={`w-5 h-5 mt-1 transition-transform ${
                      open === idx ? "rotate-180" : "rotate-0"
                    }`}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                  >
                    <path
                      d="M6 9l6 6 6-6"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>

                <AnimatePresence initial={false}>
                  {open === idx && (
                    <motion.div
                      id={`panel-${idx}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="px-5 sm:px-6 pb-5 sm:pb-6"
                    >
                      <ul className="mt-2 grid gap-2">
                        {item.points.map((p, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <svg
                              className="w-4 h-4 mt-1 text-[var(--color-primary)] flex-none"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                            >
                              <path
                                d="M5 13l4 4L19 7"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                            <span className="text-sm text-[var(--color-foreground,#334155)]">
                              {p}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </li>
          ))}
        </ul>
      </div>

      {/* Platform + Enrollment */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="rounded-3xl bg-white ring-1 ring-black/5 shadow-sm p-6 sm:p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-[var(--color-primary)]/10 text-[var(--color-primary)] grid place-items-center">
              {/* Teams Icon */}
              <svg
                viewBox="0 0 48 48"
                className="w-7 h-7"
                fill="currentColor"
                aria-hidden
              >
                <path d="M29 6a6 6 0 110 12 6 6 0 010-12zM41 10a4 4 0 110 8 4 4 0 010-8z" />
                <rect
                  x="8"
                  y="18"
                  width="24"
                  height="20"
                  rx="6"
                  ry="6"
                  opacity=".3"
                />
                <path d="M22 24h-4v11h-3V24H11v-3h11v3z" />
              </svg>
            </div>
            <div>
              <h4 className="text-lg sm:text-xl font-extrabold text-[var(--color-foreground,#0f172a)] font-[var(--font-sans)]">
                All classes & resources on Microsoft Teams
              </h4>
              <p className="mt-1 text-sm text-[var(--color-foreground,#334155)]/80">
                Access is granted once payment is confirmed. You’ll receive your
                Teams invite and course workspace within 24 hours of enrollment.
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href="https://t.me/+tz9vGRtlt_czMDdk"
              className="inline-flex justify-center items-center rounded-full px-5 py-3 text-sm font-bold text-white bg-[var(--color-primary)] shadow hover:shadow-md"
            >
              Enroll Now
              <svg
                className="w-5 h-5 ml-2"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <path
                  d="M9 5l7 7-7 7"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
