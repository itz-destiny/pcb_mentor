import React from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Image from "next/image";

const ResourcesPage = () => {
  const resources = [
    {
      category: "Articles",
      items: [
        {
          title:
            "5 Smart Ways to Kickstart Your Electronics Engineering Career",
          description:
            "Feeling stuck or unsure where to begin? These five practical tips will help you build direction, confidence, and traction as a beginner engineer.",
          link: "/resources/blog/blogpost1",
        },
        {
          title:
            "Top 3 Free PCB Design Tools for Beginners (And How to Use Them)",
          description:
            "Start designing today with these beginner-friendly tools. This guide walks you through setup, workflow, and key features to try.",
          link: "/resources/blog/blogpost2",
        },
        {
          title: "From Doubt to Confidence: The Engineer’s Mindset Shift",
          description:
            "Imposter syndrome is real — but beatable. Learn the mindset shifts that helped me go from self-doubt to building my first real project.",
          link: "/resources/blog/blogpost3",
        },
        {
          title: "Build Your First Circuit: Blinking LED with a 555 Timer",
          description:
            "An easy, beginner-friendly project that introduces you to timers, breadboards, and fun hands-on learning with real results.",
          link: "/resources/blog/blogpost4",
        },
        {
          title: "Avoid These 7 Common PCB Layout Mistakes",
          description:
            "Bad traces, noisy power lines, wrong footprints — learn how to avoid rookie errors in your next PCB layout with this checklist.",
          link: "/resources/blog/blogpost5",
        },
      ],
    },
    {
      category: "Videos",
      items: [
        {
          title: "Introduction to PCB Design for Beginners",
          description:
            "Get started with PCB design with this beginner-friendly tutorial. Covers basics, tools, and first steps.",
          link: "https://youtu.be/MsdJgEinb34?si=spBI0iPjomtyCr5a",
        },
        {
          title: "Mastering Circuit Simulation with Free Tools",
          description:
            "Learn how to simulate circuits using free software. Perfect for testing designs before prototyping.",
          link: "https://youtu.be/V-E_VtQbx80",
        },
        {
          title: "Advanced PCB Layout Techniques",
          description:
            "Take your PCB skills to the next level with advanced layout tips and best practices.",
          link: "https://www.youtube.com/watch?v=V-E_VtQbx80",
        },
      ],
    },
    {
      category: "Downloads",
      items: [
        {
          title: "PCB Design Checklist",
          description: "A free PDF checklist to ensure error-free PCB designs.",
          link: "/guide/pcb-checklist.pdf",
          type: "PDF",
        },
        {
          title: "Project Starter Kit",
          description:
            "Downloadable templates and files for beginner projects.",
          link: "/guide/starter-kit.zip",
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
          <Image
            src="/video.jpeg" // Replace with your hero image URL
            alt="Resources Hero"
            width={1440}
            height={393}
            className="w-full h-full object-cover absolute top-0 left-0"
          />
          <div className="w-full h-full absolute top-0 left-0 bg-gradient-to-r from-black/70 to-transparent flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="px-4 sm:px-6 lg:px-8 text-center"
            >
              <h1 className="text-white text-5xl sm:text-6xl font-extrabold font-[var(--font-sans)] leading-[80.17px]">
                Resource Center
              </h1>
              <p className="mt-2 text-white text-base sm:text-lg font-normal font-[var(--font-sans)] max-w-[600px]">
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
                        href={item.link}
                        target={item.type ? "_blank" : "_self"}
                        rel={item.type ? "noopener noreferrer" : ""}
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
