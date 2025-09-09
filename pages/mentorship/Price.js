import React from "react";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const featuresGroup = [
  "Structured 12-week syllabus",
  "Live group sessions & replays",
  "Software proficiency checkpoints",
  "Hands-on mini projects",
  "Peer learning community",
  "Certificate of completion",
];

const featuresOneOnOne = [
  "20-week personalized roadmap",
  "Weekly 1:1 coaching calls",
  "Code, schematic & layout reviews",
  "Career guidance & portfolio polish",
  "Priority chat support",
  "Certificate of completion",
];

const Check = ({ className = "" }) => (
  <svg
    className={"w-5 h-5 flex-none " + className}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden
  >
    <path
      d="M5 13l4 4L19 7"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default function Price() {
  return (
    <div className="w-full bg-[var(--color-background,#f9fafb)]">
      {/* Header */}
      <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-14 text-center">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.6 }}
          variants={fadeUp}
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[var(--color-primary)] font-[var(--font-sans)]"
        >
          Level up your PCB skills with mentorship that fits you
        </motion.h2>
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.6 }}
          variants={fadeUp}
          className="mt-4 text-sm sm:text-base md:text-lg text-[var(--color-foreground,#374151)]/90 max-w-2xl mx-auto"
        >
          Choose a plan that matches your learning style—collaborative group
          coaching or intensive one-on-one guidance.
        </motion.p>
      </div>

      {/* Cards */}
      <div className="relative">
        {/* subtle gradient accent */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 -top-20 h-40 bg-gradient-to-b from-[var(--color-primary,#2563eb)]/10 to-transparent"
        />

        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 grid lg:grid-cols-2 gap-6 lg:gap-8">
          {/* Group Mentorship */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={fadeUp}
            className="relative bg-white rounded-3xl shadow-sm ring-1 ring-black/5 p-6 sm:p-8 md:p-10 flex flex-col"
          >
            <div className="flex items-center justify-between gap-4">
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[var(--color-primary)] font-[var(--font-sans)]">
                Group Mentorship
              </h3>
              <span className="inline-flex items-center rounded-full bg-[var(--color-primary)]/10 text-[var(--color-primary)] px-3 py-1 text-xs font-semibold">
                Popular
              </span>
            </div>

            <p className="mt-3 text-[var(--color-foreground,#374151)]/90">
              Collaborative learning with accountability and expert feedback.
            </p>

            <div className="mt-6 flex items-baseline gap-2 flex-wrap">
              <span className="text-4xl sm:text-5xl font-extrabold text-[var(--color-primary)]">
                $50
              </span>
              <span className="text-xl sm:text-2xl text-[#bfbfbf] line-through">
                $100
              </span>
              <span className="text-sm text-[var(--color-foreground,#374151)]/60">
                one-time
              </span>
            </div>

            <div className="mt-6 grid gap-3">
              {featuresGroup.map((f, i) => (
                <div key={i} className="flex items-start gap-3">
                  <Check className="text-[var(--color-primary)]" />
                  <p className="text-sm sm:text-base text-[var(--color-foreground,#374151)]">
                    {f}
                  </p>
                </div>
              ))}
            </div>

            <motion.a
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href="https://selar.com/u42071"
              className="mt-8 w-full inline-flex justify-center items-center rounded-full px-4 py-3 text-sm sm:text-base font-bold font-[var(--font-sans)] text-white bg-[var(--color-primary)] shadow hover:shadow-md transition-shadow"
            >
              Join Group Mentorship
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
            </motion.a>
          </motion.div>

          {/* One-on-One Mentorship */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={fadeUp}
            className="relative bg-[var(--color-primary)] text-white rounded-3xl shadow-xl p-6 sm:p-8 md:p-10 flex flex-col overflow-hidden"
          >
            {/* decorative blobs */}
            <div
              aria-hidden
              className="absolute -top-16 -right-10 w-48 h-48 rounded-full bg-white/10 blur-2xl"
            />
            <div
              aria-hidden
              className="absolute -bottom-20 -left-10 w-56 h-56 rounded-full bg-white/10 blur-3xl"
            />

            <div className="flex items-center justify-between gap-4 relative z-10">
              <h3 className="text-2xl sm:text-3xl font-extrabold font-[var(--font-sans)]">
                One-on-One Mentorship
              </h3>
              <span className="inline-flex items-center rounded-full bg-white/15 text-white px-3 py-1 text-xs font-semibold backdrop-blur">
                Pro
              </span>
            </div>

            <p className="mt-3 text-white/90 relative z-10">
              Intensive, personalized coaching tailored to your goals and pace.
            </p>

            <div className="mt-6 flex items-baseline gap-2 flex-wrap relative z-10">
              <span className="text-4xl sm:text-5xl font-extrabold">$399</span>
              <span className="text-xl sm:text-2xl text-white/70 line-through">
                $500
              </span>
              <span className="text-sm text-white/80">one-time</span>
            </div>

            <div className="mt-6 grid gap-3 relative z-10">
              {featuresOneOnOne.map((f, i) => (
                <div key={i} className="flex items-start gap-3">
                  <Check className="text-white" />
                  <p className="text-sm sm:text-base text-white/95">{f}</p>
                </div>
              ))}
            </div>

            <motion.a
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href="/contact"
              className="mt-8 w-full inline-flex justify-center items-center rounded-full px-4 py-3 text-sm sm:text-base font-bold font-[var(--font-sans)] text-[var(--color-primary)] bg-white shadow hover:shadow-md transition-shadow"
            >
              Start One-on-One Mentorship
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
            </motion.a>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
