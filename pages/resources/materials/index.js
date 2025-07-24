import React from "react";
import { motion } from "framer-motion";
import Navbar from "@/pages/components/Navbar";
import Footer from "@/pages/components/Footer";

const MaterialsPage = () => {
  const materials = [
    {
      title: "PCB Design Beginner Guide",
      description:
        "A comprehensive PDF guide for starting your PCB design journey.",
      fileUrl: "#", // Replace with actual PDF URL
      type: "PDF",
    },
    {
      title: "Circuit Simulation Cheat Sheet",
      description:
        "Quick reference guide for circuit simulation tools and techniques.",
      fileUrl: "#", // Replace with actual PDF URL
      type: "PDF",
    },
    {
      title: "Starter Project Templates",
      description:
        "Downloadable templates for your first electronics projects.",
      fileUrl: "#", // Replace with actual file URL
      type: "ZIP",
    },
  ];

  return (
    <div className="w-full min-h-screen flex flex-col">
      <Navbar />
      <main className="w-full flex flex-col justify-start items-center overflow-hidden">
        {/* Hero Section */}
        <div className="w-full h-[393.04px] relative overflow-hidden">
          <img
            className="w-full h-full object-cover absolute top-0 left-0"
            src="/material.jpg"
            alt="Materials Hero"
          />
          <div className="w-full h-full absolute top-0 left-0 bg-black bg-opacity-50 flex justify-center items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="w-[597px] flex flex-col justify-center items-center gap-4"
            >
              <h1 className="text-center text-white text-5xl sm:text-6xl font-extrabold font-[var(--font-sans)] leading-[80.17px]">
                Resource Materials
              </h1>
              <p className="w-full text-center text-white text-base sm:text-lg font-normal font-[var(--font-sans)] leading-[26.96px]">
                Access downloadable resources to support your learning and
                projects in electronics engineering.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Materials Content Section */}
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-12 sm:py-16 flex flex-col justify-start items-center gap-12 sm:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="w-full flex flex-col justify-start items-center gap-5 sm:gap-6"
          >
            <h2 className="w-full text-center text-[var(--color-primary)] text-4xl sm:text-5xl md:text-6xl font-extrabold font-[var(--font-sans)] leading-[70.40px]">
              Downloadable Resources
            </h2>
            <p className="w-full max-w-[530px] text-center text-[var(--color-foreground)] text-base sm:text-lg font-normal font-[var(--font-sans)] leading-normal">
              Find essential guides, templates, and tools to accelerate your
              electronics engineering projects.
            </p>
          </motion.div>
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {materials.map((material, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="w-full p-5 bg-[#f0f0f0] rounded-[13px] flex flex-col justify-start items-start gap-4"
              >
                <h3 className="w-full text-center text-[var(--color-foreground)] text-lg sm:text-xl font-bold font-[var(--font-sans)] leading-relaxed">
                  {material.title}
                </h3>
                <p className="w-full text-center text-[var(--color-text-secondary)] text-sm sm:text-base font-normal font-[var(--font-sans)] leading-tight">
                  {material.description}
                </p>
                <a
                  href={material.fileUrl} // Replace with actual file URL
                  className="w-full inline-flex justify-center items-center px-4 py-2 bg-[var(--color-primary)] text-white text-sm sm:text-base font-medium font-[var(--font-sans)] rounded-[10px] hover:bg-opacity-90 transition-colors"
                >
                  Download {material.type}
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default MaterialsPage;
