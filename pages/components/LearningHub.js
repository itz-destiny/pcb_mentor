import Image from "next/image";
import React from "react";

const LearningHub = () => {
  const topics = [
    "Career growth for engineers",
    "Mindset & motivation",
    "Skill-building roadmaps",
    "Engineering thinking",
    "PCB and electronics foundations",
  ];

  return (
    <section className="mx-auto flex w-full max-w-4xl flex-col items-center gap-6 px-4 py-8">
      {/* Header Section */}
      <div className="flex w-full flex-col items-center gap-2">
        <h1 className="text-center text-3xl font-extrabold text-[var(--color-primary)] sm:text-4xl font-[var(--font-sans)]">
          Build Skills. Build Confidence. Build a Career.
        </h1>
        <p className="text-center text-base sm:text-lg font-normal text-[var(--color-text-secondary)] font-[var(--font-sans)]">
          Explore curated content across critical areas like:
        </p>
      </div>

      {/* Topics Section */}
      <div className="flex w-full flex-col items-center gap-4">
        <h2 className="text-center text-base sm:text-lg font-bold text-[var(--color-primary)] font-[var(--font-sans)]">
          What to expect in the course
        </h2>
        <div className="flex w-full flex-col sm:flex-row flex-wrap justify-center gap-4">
          {topics.map((topic, index) => (
            <div
              key={index}
              className="flex items-center gap-2 rounded-[20px] bg-white p-2.5 shadow-sm hover:scale-105 hover:shadow-md hover:bg-gray-50 transition-all duration-200"
            >
              <Image src="/tick.svg" width={24} height={24} alt="Tick Icon" />
              <span className="text-center text-base font-bold text-[var(--color-text-secondary)] hover:text-[#2a4b8c] font-[var(--font-sans)]">
                {topic}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <a
        href="#"
        className="inline-flex items-center gap-2.5 rounded-[40px] bg-[var(--color-primary)] px-4 py-3 sm:px-6 sm:py-4 hover:bg-[#2a4b8c] transition-colors duration-200"
      >
        <span className="text-base sm:text-lg font-medium text-white font-[var(--font-sans)]">
          Browse the Learning Hub
        </span>
        <svg
          className="h-5 w-5 sm:h-6 sm:w-6 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 5l7 7-7 7"
          />
        </svg>
      </a>
    </section>
  );
};

export default LearningHub;
