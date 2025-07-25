import Image from "next/image";

const MentorshipSection = () => {
  return (
    <section className="w-full max-w-4xl mx-auto flex flex-col md:flex-row justify-center items-center gap-8 px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      {/* Text Content */}
      <div className="flex flex-col items-start gap-6 w-full md:w-1/2">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[var(--color-primary)] font-[var(--font-sans)]">
          Work With Me One-on-One
        </h2>
        <p className="text-base sm:text-lg font-normal text-[var(--color-text-secondary)] leading-relaxed max-w-md font-[var(--font-sans)]">
          Join a beginner or intermediate mentorship program and get tailored
          guidance in:
        </p>
        <ul className="list-disc list-inside flex flex-col gap-3 sm:gap-4">
          <li className="text-xl font-medium text-[var(--color-foreground)] leading-relaxed font-[var(--font-sans)]">
            PCB design (schematics, layout, simulation)
          </li>
          <li className="text-xl font-medium text-[var(--color-foreground)] leading-relaxed font-[var(--font-sans)]">
            Project reviews & feedback
          </li>
          <li className="text-xl font-medium text-[var(--color-foreground)] leading-relaxed font-[var(--font-sans)]">
            Career planning and technical skill development
          </li>
        </ul>
        <a
          href="#"
          className="inline-flex items-center gap-2.5 rounded-[40px] bg-[var(--color-primary)] px-6 py-4 text-lg font-medium text-white hover:bg-[#2a4b8c] font-[var(--font-sans)] transition-colors duration-200"
        >
          Apply for Mentorship
          <Image
            src="/ArrowDownRight.svg"
            width={24}
            height={24}
            alt="Arrow icon"
          />
        </a>
      </div>

      {/* Image and Card */}
      <div className="w-full md:w-1/2 flex justify-center">
        <Image src="/joseph.png" width={397} height={458} alt="Joseph" />
      </div>
    </section>
  );
};

export default MentorshipSection;
