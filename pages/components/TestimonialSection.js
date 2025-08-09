import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import ReactCountryFlag from "react-country-flag";

const testimonials = [
  {
    quote:
      "Joseph's mentorship gave me significant insights into PCB design and truly expedited my learning. Beyond technical skills, I learned how to approach an idea, organize project phases, and move confidently at every step.",
    name: "Ghina Debian",
    country: "Lebanon",
    countryCode: "LB",
    image: "/ghina.jpeg",
  },
  {
    quote:
      "Joseph’s 3-month mentorship took me from the basics to building real hardware fast. Hands-on sessions—design, simulation, and assembly—made concepts stick. I applied what I learned to win an Innovation Challenge in Zimbabwe. Highly recommended.",
    name: "Truswell Munashe Nyamakanga",
    country: "Zimbabwe",
    countryCode: "ZW",
    image: "/truswell.jpeg",
  },
  {
    quote:
      "Joseph's PCB mentorship is excellent. I had no prior knowledge of PCB design, but learning under him has been an honor. His experience is unmatched, and he always has the right answers. I highly recommend his mentorship to anyone starting PCB design.",
    name: "Bernard Joseph",
    country: "Nigeria",
    countryCode: "NG",
    image: "/bernard.jpeg",
  },
  {
    quote:
      "This mentorship gave me a solid foundation in PCB design using KiCad—schematics, layout, routing, placement, and layer usage. The best part is the confidence I gained: I now design my own boards and feel comfortable in tools like Altium and OrCAD as well.",
    name: "Nishant Gupta",
    country: "India",
    countryCode: "IN",
    image: "/nishant.jpeg",
  },
  {
    quote:
      "Before this program, I struggled to navigate component datasheets to build schematics. Now I’m comfortable extracting the right info and creating project schematics with confidence.",
    name: "Praprara Ashaka",
    country: "Nigeria",
    countryCode: "NG",
    image: "/praprara.jpeg",
  },
];

const TestimonialSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const t = testimonials[currentIndex];

  return (
    <section className="w-full px-4 sm:px-6 lg:px-8 py-12 bg-[var(--color-primary)] text-white">
      <div className="flex flex-col items-center gap-8">
        <h2 className="text-2xl sm:text-3xl font-bold font-[var(--font-sans)] uppercase tracking-widest text-center">
          Testimonials
        </h2>

        <div className="relative w-full max-w-3xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5 }}
              className="bg-white/10 backdrop-blur-sm rounded-lg p-6 sm:p-8 flex flex-col items-center gap-6 min-h-[320px]"
            >
              <p className="text-lg sm:text-xl font-normal font-[var(--font-sans)] leading-relaxed text-center text-white">
                {t.quote}
              </p>

              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full overflow-hidden ring-2 ring-white/20">
                  <Image
                    src={t.image}
                    alt={`${t.name} Avatar`}
                    width={64}
                    height={64}
                    className="object-cover w-full h-full"
                    priority
                  />
                </div>

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
                  <span className="text-lg font-semibold font-[var(--font-sans)] text-white">
                    {t.name} • {t.country}
                  </span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <motion.button
            onClick={handlePrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 text-2xl font-bold text-white bg-white/10 rounded-full w-10 h-10 flex items-center justify-center hover:bg-white/20 transition-colors"
            aria-label="Previous Testimonial"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.2 }}
            type="button"
          >
            ‹
          </motion.button>
          <motion.button
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 text-2xl font-bold text-white bg-white/10 rounded-full w-10 h-10 flex items-center justify-center hover:bg-white/20 transition-colors"
            aria-label="Next Testimonial"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.2 }}
            type="button"
          >
            ›
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
