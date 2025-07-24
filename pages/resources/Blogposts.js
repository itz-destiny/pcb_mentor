import React from "react";
import { motion } from "framer-motion";
import Navbar from "./Navbar"; // Import the existing Navbar component
import Footer from "./Footer"; // Import the existing Footer component

const BlogPage = () => {
  const blogPosts = [
    {
      title: "5 Smart Ways to Kickstart Your Electronics Engineering Career",
      excerpt: "Feeling stuck or unsure where to begin? These five practical tips will help you build direction, confidence, and traction as a beginner engineer.",
      image: "https://placehold.co/467x221",
    },
    {
      title: "Top 3 Free PCB Design Tools for Beginners (And How to Use Them)",
      excerpt: "Start designing today with these beginner-friendly tools. This guide walks you through setup, workflow, and key features to try.",
      image: "https://placehold.co/467x221",
    },
    {
      title: "From Doubt to Confidence: The Engineer’s Mindset Shift",
      excerpt: "Imposter syndrome is real — but beatable. Learn the mindset shifts that helped me go from self-doubt to building my first real project.",
      image: "https://placehold.co/467x221",
    },
    {
      title: "Build Your First Circuit: Blinking LED with a 555 Timer",
      excerpt: "An easy, beginner-friendly project that introduces you to timers, breadboards, and fun hands-on learning with real results.",
      image: "https://placehold.co/467x221",
    },
    {
      title: "Avoid These 7 Common PCB Layout Mistakes",
      excerpt: "Bad traces, noisy power lines, wrong footprints — learn how to avoid rookie errors in your next PCB layout with this checklist.",
      image: "https://placehold.co/467x221",
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
            alt="Blog Hero"
          />
          <div className="w-full h-full absolute top-0 left-0 bg-black bg-opacity-50 flex justify-center items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="w-[597px] flex flex-col justify-center items-center gap-4"
            >
              <h1 className="text-center text-white text-5xl sm:text-6xl font-extrabold font-[var(--font-sans)] leading-[80.17px]">
                Learning Hub
              </h1>
              <p className="w-full text-center text-white text-base sm:text-lg font-normal font-[var(--font-sans)] leading-[26.96px]">
                Explore practical content to help you grow as an engineer — from beginner basics to career strategies.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Blog Posts Section */}
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-12 sm:py-16 flex flex-col justify-start items-center gap-12 sm:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="w-full flex flex-col justify-start items-center gap-5 sm:gap-6"
          >
            <h2 className="w-full text-center text-[var(--color-primary)] text-4xl sm:text-5xl md:text-6xl font-extrabold font-[var(--font-sans)] leading-[70.40px]">
              Blog Posts
            </h2>
            <p className="w-full max-w-[530px] text-center text-[var(--color-foreground)] text-base sm:text-lg font-normal font-[var(--font-sans)] leading-normal">
              Explore practical content to help you grow as an engineer from beginner basics to career strategies.
            </p>
          </motion.div>
          <div className="w-full flex flex-col justify-start items-start gap-6 sm:gap-8">
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {blogPosts.slice(0, 3).map((post, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="w-full flex-1 p-5 bg-[#f0f0f0] rounded-[13px] flex flex-col justify-start items-start gap-5"
                >
                  <div className="w-full h-[215px] overflow-hidden rounded-[17px]">
                    <img
                      className="w-full h-full object-cover rounded-[17px]"
                      src={post.image}
                      alt={post.title}
                    />
                  </div>
                  <h3 className="w-full text-center text-[var(--color-foreground)] text-lg sm:text-xl font-bold font-[var(--font-sans)] leading-relaxed">
                    {post.title}
                  </h3>
                  <p className="w-full text-center text-[var(--color-foreground)] text-sm sm:text-base font-normal font-[var(--font-sans)] leading-tight">
                    {post.excerpt}
                  </p>
                  <div className="w-full inline-flex justify-start items-center gap-4 sm:gap-6">
                    <a
                      href="#"
                      className="text-[#473bf0] text-xs sm:text-sm font-normal font-[var(--font-sans)] leading-tight hover:underline"
                    >
                      Read More
                    </a>
                    <div className="flex items-center gap-1">
                      <div className="w-1 h-2 sm:w-1.5 sm:h-3 outline outline-1 outline-[#473bf0] outline-offset-[-0.5px]" />
                      <div className="w-2 sm:w-3 h-0.5 outline outline-1 outline-[#473bf0] outline-offset-[-0.5px]" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
              {blogPosts.slice(3).map((post, index) => (
                <motion.div
                  key={index + 3}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: (index + 3) * 0.1 }}
                  className="w-full flex-1 p-5 bg-[#f0f0f0] rounded-[13px] flex flex-col justify-start items-start gap-5"
                >
                  <div className="w-full h-[215px] overflow-hidden rounded-[17px]">
                    <img
                      className="w-full h-full object-cover rounded-[17px]"
                      src={post.image}
                      alt={post.title}
                    />
                  </div>
                  <h3 className="w-[331px] text-center text-[var(--color-foreground)] text-lg sm:text-xl font-bold font-[var(--font-sans)] leading-relaxed">
                    {post.title}
                  </h3>
                  <p className="w-full text-center text-[var(--color-foreground)] text-sm sm:text-base font-normal font-[var(--font-sans)] leading-tight">
                    {post.excerpt}
                  </p>
                  <div className="w-full inline-flex justify-start items-center gap-4 sm:gap-6">
                    <a
                      href="#"
                      className="text-[#473bf0] text-xs sm:text-sm font-normal font-[var(--font-sans)] leading-tight hover:underline"
                    >
                      Read More
                    </a>
                    <div className="flex items-center gap-1">
                      <div className="w-1 h-2 sm:w-1.5 sm:h-3 outline outline-1 outline-[#473bf0] outline-offset-[-0.5px]" />
                      <div className="w-2 sm:w-3 h-0.5 outline outline-1 outline-[#473bf0] outline-offset-[-0.5px]" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BlogPage;