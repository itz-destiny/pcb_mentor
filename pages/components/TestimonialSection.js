import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    quote:
      "PCB Mentor has been a game-changer for me. The practical advice and mentorship helped me finally understand PCB design, but more importantly, it gave me the confidence to start building real projects. Joseph makes learning electronics feel doable and exciting.",
    name: "Adebayo O",
    title: "Aspiring Electronics Engineer",
  },
  {
    quote:
      "The mentorship program provided clear, actionable guidance that accelerated my learning. I went from struggling with schematics to designing my first PCB in weeks. The community support is incredible!",
    name: "Chinwe A",
    title: "Electronics Enthusiast",
  },
  {
    quote:
      "Joseph's teaching style is engaging and practical. The one-on-one sessions helped me refine my skills and land my first engineering role. PCB Mentor is a must for anyone serious about electronics.",
    name: "Emeka N",
    title: "Junior PCB Designer",
  },
];

const TestimonialSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000); // Switch every 5 seconds
    return () => clearInterval(interval);
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

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
              className="bg-white/10 backdrop-blur-sm rounded-lg p-6 sm:p-8 flex flex-col items-center gap-6 min-h-[300px]"
            >
              <p className="text-lg sm:text-xl font-normal font-[var(--font-sans)] leading-relaxed text-center text-white">
                "{testimonials[currentIndex].quote}"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full overflow-hidden">
                  <Image
                    src="/frame.png"
                    alt={`${testimonials[currentIndex].name} Avatar`}
                    width={64}
                    height={64}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="text-lg font-semibold font-[var(--font-sans)] text-white">
                    {testimonials[currentIndex].name}
                  </span>
                  <span className="text-sm font-normal font-[var(--font-sans)] text-[var(--color-text-secondary)]">
                    {testimonials[currentIndex].title}
                  </span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
          <motion.button
            onClick={handlePrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 text-2xl font-bold font-[var(--font-sans)] text-white bg-white/10 rounded-full w-10 h-10 flex items-center justify-center hover:bg-white/20 transition-colors"
            aria-label="Previous Testimonial"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.2 }}
          >
            &lt;
          </motion.button>
          <motion.button
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 text-2xl font-bold font-[var(--font-sans)] text-white bg-white/10 rounded-full w-10 h-10 flex items-center justify-center hover:bg-white/20 transition-colors"
            aria-label="Next Testimonial"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.2 }}
          >
            &gt;
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
