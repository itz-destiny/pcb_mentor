import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const groupCurriculum = [
  {
    title: "Introduction to Electronics & PCB Design",
    points: [
      "Basics of electronic components (resistors, capacitors, diodes, ICs).",
      "Understanding what a PCB is and why it’s used.",
    ],
  },
  {
    title: "From Idea to Concept",
    points: [
      "Turning an idea into a functional circuit.",
      "Block diagrams and planning the circuit flow.",
    ],
  },
  {
    title: "Schematic Design Fundamentals",
    points: [
      "Using schematic capture tools (e.g., KiCAD).",
      "Best practices for clean and readable schematics.",
    ],
  },
  {
    title: "Component Selection",
    points: [
      "How to choose the right components.",
      "Reading datasheets, checking availability, cost, and footprint.",
    ],
  },
  {
    title: "Footprints & Libraries",
    points: [
      "Understanding PCB footprints.",
      "Creating and managing component libraries.",
    ],
  },
  {
    title: "PCB Layout Basics",
    points: [
      "Translating schematic to PCB.",
      "Placement rules: signal flow, decoupling capacitors near ICs, grounding.",
    ],
  },
  {
    title: "Routing Techniques",
    points: [
      "Single-layer vs multi-layer routing.",
      "Power, signal, and ground trace considerations.",
      "Introduction to differential pairs and impedance control (basic overview).",
    ],
  },
  {
    title: "Design Rule Check (DRC) & Electrical Rule Check (ERC)",
    points: [
      "Setting up rules (clearance, trace width, via size).",
      "Debugging DRC/ERC errors.",
    ],
  },
  {
    title: "Generating Manufacturing Files",
    points: [
      "Gerber files, drill files, BOM, Pick & Place files.",
      "Preparing files for PCB manufacturer.",
    ],
  },
  {
    title: "DFM (Design for Manufacturing) & Assembly Considerations",
    points: [
      "Designing with manufacturability in mind.",
      "Avoiding common mistakes (e.g., small vias, wrong footprints, tight spacing).",
      "Basic assembly guidelines for soldering and production.",
    ],
  },
];

const oneOnOneTracks = [
  {
    title: "Option A: Beginner Track (From Scratch)",
    points: [
      "Covers the entire beginner curriculum (like group, but more intensive).",
      "Hands-on project: student designs a complete PCB from idea → fabrication.",
      "Extra guidance on troubleshooting mistakes & personal project discussions.",
    ],
  },
  {
    title: "Option B: Skill Upgrade Track (Intermediate to Advanced)",
    points: [
      "Advanced routing (impedance control, length matching, differential pairs).",
      "High-speed design considerations.",
      "Power supply design best practices.",
      "DFM & DFA (Design for Assembly).",
    ],
  },
  {
    title: "Option C: Specialized/Custom Track",
    points: [
      "Tailored to the learner’s personal goals.",
      "Examples: IoT device PCB design, automotive/industrial PCB design, compact SMD design, product development.",
    ],
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.35 } },
};

export default function CourseOutline() {
  const [activeTab, setActiveTab] = useState("group");
  const [open, setOpen] = useState(0);

  const curriculum = activeTab === "group" ? groupCurriculum : oneOnOneTracks;

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
          Explore structured outlines for both group and one-on-one mentorship
          tracks.
        </motion.p>

        {/* Tabs */}
        <div className="mt-6 flex justify-center gap-4">
          <button
            onClick={() => {
              setActiveTab("group");
              setOpen(0);
            }}
            className={`px-5 py-2 rounded-full font-bold ${
              activeTab === "group"
                ? "bg-[var(--color-primary)] text-white"
                : "bg-gray-200 text-gray-700"
            }`}
          >
            Group Mentorship
          </button>
          <button
            onClick={() => {
              setActiveTab("oneOnOne");
              setOpen(0);
            }}
            className={`px-5 py-2 rounded-full font-bold ${
              activeTab === "oneOnOne"
                ? "bg-[var(--color-primary)] text-white"
                : "bg-gray-200 text-gray-700"
            }`}
          >
            One-on-One Mentorship
          </button>
        </div>
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
    </section>
  );
}
