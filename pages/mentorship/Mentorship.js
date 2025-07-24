import React from "react";

const Mentorship = () => {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col md:flex-row items-center gap-8 md:gap-16">
      <div className="w-full md:w-1/2 flex flex-col justify-start items-start gap-6">
        <div className="flex flex-col justify-start items-start gap-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[var(--color-primary)] font-[var(--font-sans)]">
            What You’ll Get from this Mentorship Program
          </h2>
          <p className="text-base sm:text-lg font-normal text-[var(--color-foreground)] font-[var(--font-sans)] leading-relaxed">
            Explore curated content across critical areas like:
          </p>
        </div>
        <div className="flex flex-col justify-start items-start gap-4">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-[var(--color-primary)] rounded-full"></span>
            <p className="text-base sm:text-lg font-medium text-[var(--color-foreground)] font-[var(--font-sans)] leading-relaxed">
              1-on-1 video calls
            </p>
          </div>
          <p className="text-base sm:text-lg font-medium text-[var(--color-foreground)] font-[var(--font-sans)] leading-relaxed">
            Personalized feedback
          </p>
          <p className="text-base sm:text-lg font-medium text-[var(--color-foreground)] font-[var(--font-sans)] leading-relaxed">
            Exclusive resource access
          </p>
        </div>
      </div>
      <div className="w-full md:w-1/2 relative">
        <img
          src="/laptop.png"
          height={653}
          width={556}
          alt="Mentorship benefits illustration"
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
    </div>
  );
};

export default Mentorship;
