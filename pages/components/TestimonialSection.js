import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import ReactCountryFlag from "react-country-flag";

const testimonials = [
  {
    quote:
      "Joseph's mentorship gave me significant insights into PCB design and truly accelerated my learning. Beyond tools and workflows, I learned how to approach an idea, organize project phases, and move confidently at every step.",
    name: "Ghina Debian",
    country: "Lebanon",
    countryCode: "LB",
    image: "/ghina.jpeg",
    linkedin: "https://www.linkedin.com/in/ghina-debian-959692225/",
  },
  {
    quote:
      "This mentorship gave me a solid foundation in PCB design using KiCad—schematics, layout, routing, placement, and proper layer usage. The biggest win is confidence: I now design my own boards and feel comfortable in Altium and OrCAD too.",
    name: "Nishant Gupta",
    country: "India",
    countryCode: "IN",
    image: "/nishant.jpeg",
    linkedin: "https://www.linkedin.com/in/nishant-gupta-247a94192",
  },
  {
    quote:
      "Joseph's PCB mentorship is excellent. I started with zero knowledge, but his clear explanations and depth of experience made everything click. I strongly recommend it to anyone starting PCB design.",
    name: "Bernard Joseph",
    country: "Nigeria",
    countryCode: "NG",
    image: "/bernard.jpeg",
    linkedin: "https://www.linkedin.com/in/bernard-joseph-902b02137/",
  },
  {
    quote:
      "Before this program, datasheets felt overwhelming. Now I can extract the right info and create clean, workable schematics with confidence.",
    name: "Prapara Ashaka",
    country: "Nigeria",
    countryCode: "NG",
    image: "/praprara.jpeg",
    linkedin:
      "https://www.linkedin.com/in/praprara-owodeha-ashaka?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  },
  {
    quote:
      "The 3‑month mentorship was transformative—hands-on from design and simulation to real builds like a mini power bank. I applied these skills to win an Innovation Challenge in Zimbabwe. It didn’t just teach PCB design; it built independent, practical problem‑solving.",
    name: "Truswell Munashe Nyamakanga",
    country: "Zimbabwe",
    countryCode: "ZW",
    image: "/truswell.jpeg",
    linkedin: "http://linkedin.com/in/truswellnyamakanga",
  },
];

const TestimonialSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // auto-advance
  useEffect(() => {
    const id = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 6500);
    return () => clearInterval(id);
  }, []);

  const handlePrev = () =>
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  const handleNext = () =>
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);

  const t = testimonials[currentIndex];

  return (
    <section className="w-full px-4 sm:px-6 lg:px-8 py-12 bg-[var(--color-primary)] text-white">
      <div className="flex flex-col items-center gap-8">
        <h2 className="text-2xl sm:text-3xl font-bold font-[var(--font-sans)] uppercase tracking-widest text-center">
          Testimonials
        </h2>

        <div className="relative w-full max-w-3xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.article
              key={currentIndex}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.35 }}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 sm:p-8 flex flex-col items-center gap-6"
              aria-live="polite"
            >
              {/* Avatar */}
              <div className="w-20 h-20 rounded-full overflow-hidden ring-2 ring-white/30">
                <Image
                  src={t.image}
                  alt={`${t.name} avatar`}
                  width={80}
                  height={80}
                  className="object-cover w-full h-full"
                  priority
                />
              </div>

              {/* Quote */}
              <blockquote className="text-base sm:text-lg md:text-xl font-normal font-[var(--font-sans)] leading-relaxed text-center text-white">
                “{t.quote}”
              </blockquote>

              {/* Profile block (stacked: name, country+flag, LinkedIn) */}
              <div className="w-full max-w-sm mx-auto flex flex-col items-center gap-2">
                {/* Name */}
                <div className="text-lg sm:text-xl font-semibold font-[var(--font-sans)] text-white text-center">
                  {t.name}
                </div>

                {/* Country + flag (not same line with name; grouped together) */}
                <div className="flex items-center gap-2">
                  <ReactCountryFlag
                    countryCode={t.countryCode}
                    svg
                    style={{
                      width: "20px",
                      height: "14px",
                      borderRadius: "2px",
                    }}
                    title={t.country}
                  />
                  <span className="text-sm sm:text-base text-white/90">
                    {t.country}
                  </span>
                </div>

                {/* LinkedIn */}
                <a
                  href={t.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 hover:bg-white/20 transition-colors text-sm"
                  aria-label={`Open ${t.name}'s LinkedIn profile`}
                >
                  {/* Simple LinkedIn icon */}
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="opacity-90"
                    aria-hidden="true"
                  >
                    <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8h4V24h-4V8zm7 0h3.83v2.18h.05c.53-1 1.83-2.18 3.77-2.18 4.03 0 4.78 2.65 4.78 6.09V24h-4v-7.08c0-1.69-.03-3.87-2.36-3.87-2.36 0-2.72 1.84-2.72 3.74V24h-4V8z" />
                  </svg>
                  <span>View LinkedIn</span>
                </a>
              </div>
            </motion.article>
          </AnimatePresence>

          {/* Prev / Next */}
          <motion.button
            onClick={handlePrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 text-2xl font-bold text-white bg-white/10 rounded-full w-10 h-10 flex items-center justify-center hover:bg-white/20 transition-colors"
            aria-label="Previous testimonial"
            whileHover={{ scale: 1.08 }}
            type="button"
          >
            ‹
          </motion.button>
          <motion.button
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 text-2xl font-bold text-white bg-white/10 rounded-full w-10 h-10 flex items-center justify-center hover:bg-white/20 transition-colors"
            aria-label="Next testimonial"
            whileHover={{ scale: 1.08 }}
            type="button"
          >
            ›
          </motion.button>

          {/* Dots */}
          <div className="mt-6 flex items-center justify-center gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                aria-label={`Go to testimonial ${i + 1}`}
                className={`h-2 rounded-full transition-all ${
                  i === currentIndex
                    ? "w-6 bg-white"
                    : "w-2 bg-white/40 hover:bg-white/60"
                }`}
                type="button"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
