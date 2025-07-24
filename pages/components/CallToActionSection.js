const CallToActionSection = () => {
  const actions = [
    {
      title: "Explore the Blog",
      link: "#",
      buttonText: "Start Now",
    },
    {
      title: "Watch on YouTube",
      link: "#",
      buttonText: "Start Now",
    },
    {
      title: "Apply for Mentorship",
      link: "#",
      buttonText: "Start Now",
    },
    {
      title: "Download Free Beginner Guide",
      link: "#",
      buttonText: "Download Now",
    },
  ];

  return (
    <section className="w-full max-w-4xl mx-auto flex flex-col items-center gap-8 px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="flex flex-col items-center gap-4 max-w-2xl">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-[var(--color-primary)] text-center">
          Begin Your Journey Today
        </h2>
        <p className="text-base font-normal text-[var(--color-text-secondary)] leading-relaxed text-center">
          Learn real-world PCB design skills, get hands-on projects, and build a
          portfolio that gets you hired or ready to launch your own hardware
          products.
        </p>
      </div>

      {/* Action Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
        {actions.map((action, index) => (
          <div
            key={index}
            className="flex flex-col items-center gap-4 p-5 rounded-[20px] border border-[var(--color-primary)]"
          >
            <div className="w-12 h-12 bg-[var(--color-primary)] rounded-lg" />
            <h3 className="text-2xl font-extrabold text-[var(--color-foreground)] text-center">
              {action.title}
            </h3>
            <a
              href={action.link}
              className="inline-flex items-center gap-2.5 rounded-[40px] bg-[var(--color-primary)] px-6 py-4 text-xl font-bold text-white hover:bg-[#2a4b8c]"
            >
              {action.buttonText}
              <div className="h-6 w-6 rounded-full bg-white" />
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CallToActionSection;
