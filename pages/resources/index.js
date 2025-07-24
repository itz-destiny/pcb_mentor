import React from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const ResourcesPage = () => {
  const resources = [
    {
      category: "Articles",
      items: [
        {
          title: "Beginner’s Guide to Electronics Components",
          description:
            "Learn the essentials of electronic components with this detailed guide.",
          link: "#", // Replace with actual URL
        },
        {
          title: "Understanding PCB Fabrication Process",
          description: "A step-by-step overview of how PCBs are fabricated.",
          link: "#", // Replace with actual URL
        },
      ],
    },
    {
      category: "Videos",
      items: [
        {
          title: "Introduction to PCB Design",
          description:
            "A beginner-friendly video tutorial on PCB design basics.",
          link: "#", // Replace with actual video URL
        },
        {
          title: "Circuit Debugging Techniques",
          description: "Expert tips for troubleshooting electronic circuits.",
          link: "#", // Replace with actual video URL
        },
      ],
    },
    {
      category: "Downloads",
      items: [
        {
          title: "PCB Design Checklist",
          description: "A free PDF checklist to ensure error-free PCB designs.",
          link: "#", // Replace with actual PDF URL
          type: "PDF",
        },
        {
          title: "Project Starter Kit",
          description:
            "Downloadable templates and files for beginner projects.",
          link: "#", // Replace with actual ZIP URL
          type: "ZIP",
        },
      ],
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
            src="https://placehold.co/1440x393" // Replace with your hero image URL
            alt="Resources Hero"
          />
          <div className="w-full h-full absolute top-0 left-0 bg-black bg-opacity-50 flex justify-center items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="w-[597px] flex flex-col justify-center items-center gap-4"
            >
              <h1 className="text-center text-white text-5xl sm:text-6xl font-extrabold font-[var(--font-sans)] leading-[80.17px]">
                Resource Center
              </h1>
              <p className="w-full text-center text-white text-base sm:text-lg font-normal font-[var(--font-sans)] leading-[26.96px]">
                Access a wealth of resources to support your growth as an
                electronics engineer.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Resources Content Section */}
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-12 sm:py-16 flex flex-col justify-start items-center gap-12 sm:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="w-full flex flex-col justify-start items-center gap-5 sm:gap-6"
          >
            <h2 className="w-full text-center text-[var(--color-primary)] text-4xl sm:text-5xl md:text-6xl font-extrabold font-[var(--font-sans)] leading-[70.40px]">
              All Resources
            </h2>
            <p className="w-full max-w-[530px] text-center text-[var(--color-foreground)] text-base sm:text-lg font-normal font-[var(--font-sans)] leading-normal">
              Discover articles, videos, and downloadable materials to enhance
              your electronics engineering skills.
            </p>
          </motion.div>
          <div className="w-full flex flex-col gap-8 sm:gap-10">
            {resources.map((resource, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="w-full"
              >
                <h3 className="text-[var(--color-primary)] text-2xl sm:text-3xl font-bold font-[var(--font-sans)] mb-4">
                  {resource.category}
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 sm:gap-8">
                  {resource.items.map((item, itemIndex) => (
                    <motion.div
                      key={itemIndex}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: (index + itemIndex) * 0.1 }}
                      className="w-full p-5 bg-[#f0f0f0] rounded-[13px] flex flex-col justify-between items-start gap-3"
                    >
                      <div>
                        <h4 className="text-[var(--color-foreground)] text-lg sm:text-xl font-bold font-[var(--font-sans)] leading-relaxed">
                          {item.title}
                        </h4>
                        <p className="text-[var(--color-text-secondary)] text-sm sm:text-base font-normal font-[var(--font-sans)] leading-tight">
                          {item.description}
                        </p>
                        {item.type && (
                          <span className="inline-block mt-2 text-xs sm:text-sm text-[#473bf0] font-medium font-[var(--font-sans)]">
                            ({item.type})
                          </span>
                        )}
                      </div>
                      <a
                        href={item.link} // Replace with actual URL
                        className="mt-3 inline-block text-[#473bf0] text-sm sm:text-base font-medium font-[var(--font-sans)] leading-tight hover:underline"
                      >
                        {item.type ? "Download" : "Read More"}
                      </a>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ResourcesPage;
