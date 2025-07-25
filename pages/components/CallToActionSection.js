import React from "react";
import Link from "next/link";

const CallToActionSection = () => {
  const actions = [
    {
      title: "Explore the Blog",
      link: "/resources",
      buttonText: "Start Now",
      svg: (
        <svg
          className="w-12 h-12 text-[var(--color-primary)]"
          fill="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M4 6h16v12H4V6zm2-2v14h12V4H6zm2 2h8v10H8V6zm2 2v6h4V8h-4z" />
        </svg>
      ),
    },
    {
      title: "Watch on YouTube",
      link: "/youtube",
      buttonText: "Start Now",
      svg: (
        <svg
          className="w-12 h-12 text-[var(--color-primary)]"
          fill="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14V8l6 4-6 4z" />
        </svg>
      ),
    },
    {
      title: "Apply for Mentorship",
      link: "/mentorship",
      buttonText: "Start Now",
      svg: (
        <svg
          className="w-12 h-12 text-[var(--color-primary)]"
          fill="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2v-6zm0 8h2v2h-2v-2z" />
        </svg>
      ),
    },
    {
      title: "Download Free Beginner Guide",
      link: "/guide",
      buttonText: "Download Now",
      svg: (
        <svg
          className="w-12 h-12 text-[var(--color-primary)]"
          fill="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M5 20h14v-2H5v2zM12 2L4 10h16L12 2zm0 14h2v-6h-2v6z" />
        </svg>
      ),
    },
  ];

  return (
    <section className="w-full max-w-4xl mx-auto flex flex-col items-center gap-10 px-4 sm:px-6 lg:px-8 py-10 bg-[var(--background-light)]">
      {/* Header */}
      <div className="flex flex-col items-center gap-6 max-w-2xl text-center">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-[var(--color-primary)]">
          Begin Your Journey Today
        </h2>
        <p className="text-base sm:text-lg font-normal text-[var(--color-text-secondary)] leading-relaxed">
          Learn real-world PCB design skills, get hands-on projects, and build a
          portfolio that gets you hired or ready to launch your own hardware
          products.
        </p>
      </div>

      {/* Action Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full">
        {actions.map((action, index) => (
          <div
            key={index}
            className="flex flex-col items-center gap-6 p-6 rounded-[20px] border border-[var(--color-primary)] bg-white shadow-md hover:shadow-lg transition-shadow"
          >
            {action.svg}
            <h3 className="text-2xl font-extrabold text-[var(--color-foreground)] text-center">
              {action.title}
            </h3>
            <Link
              href={action.link}
              className="inline-flex items-center gap-3 rounded-[40px] bg-[var(--color-primary)] px-6 py-3 text-xl font-bold text-white hover:bg-[#2a4b8c] transition-colors"
            >
              {action.buttonText}
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M5 12l7 7 7-7H5z" />
              </svg>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CallToActionSection;
