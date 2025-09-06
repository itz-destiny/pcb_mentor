import React from "react";
import { motion } from "framer-motion";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Script from "next/script";
import { FaYoutube } from "react-icons/fa"; // YouTube icon

const VideosPage = () => {
  const videoContent = [
    {
      title: "Introduction to PCB Design for Beginners",
      description:
        "Get started with PCB design with this beginner-friendly tutorial. Covers basics, tools, and first steps.",
      videoId: "MsdJgEinb34",
    },
    {
      title: "Mastering Circuit Simulation with Free Tools",
      description:
        "Learn how to simulate circuits using free software. Perfect for testing designs before prototyping.",
      videoId: "V-E_VtQbx80",
    },
    {
      title: "Advanced PCB Layout Techniques",
      description:
        "Take your PCB skills to the next level with advanced layout tips and best practices.",
      videoId: "V-E_VtQbx80",
    },
  ];

  return (
    <div className="w-full min-h-screen flex flex-col">
      {/* YouTube Subscribe script */}
      <Script
        src="https://apis.google.com/js/platform.js"
        strategy="lazyOnload"
      />

      <Navbar />
      <main className="w-full flex flex-col justify-start items-center overflow-hidden">
        {/* Hero Section */}
        <div className="w-full py-20 flex flex-col items-center justify-center bg-black text-center">
          <FaYoutube className="text-red-600 w-20 h-20 sm:w-28 sm:h-28 mb-6" />
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="px-4"
          >
            <h1 className="text-white text-4xl sm:text-5xl md:text-6xl font-extrabold font-[var(--font-sans)] leading-tight">
              Video Tutorials
            </h1>
            <p className="mt-2 text-white text-base sm:text-lg font-normal font-[var(--font-sans)] max-w-[600px] mx-auto">
              Watch tutorials and walkthroughs directly on our site.
            </p>
          </motion.div>
        </div>

        {/* Video Content Section */}
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-12 sm:py-16 flex flex-col justify-start items-center gap-12 sm:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="w-full flex flex-col justify-start items-center gap-5 sm:gap-6"
          >
            <h2 className="w-full text-center text-[var(--color-primary)] text-3xl sm:text-4xl md:text-5xl font-extrabold font-[var(--font-sans)]">
              Explore Our Video Collection
            </h2>
            <p className="w-full max-w-[530px] text-center text-[var(--color-foreground)] text-base sm:text-lg font-normal font-[var(--font-sans)] leading-normal">
              Dive into curated videos to enhance your skills in electronics
              engineering.
            </p>
          </motion.div>

          {/* Video Grid */}
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {videoContent.map((video, index) => (
              <motion.div
                key={video.videoId}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="w-full bg-white rounded-[15px] shadow-md overflow-hidden flex flex-col justify-start items-center p-4 hover:shadow-lg transition-shadow"
              >
                {/* Square Video Embed */}
                <div className="w-full aspect-square rounded-[10px] overflow-hidden">
                  <iframe
                    src={`https://www.youtube.com/embed/${video.videoId}`}
                    title={video.title}
                    className="w-full h-full"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>

                {/* Title + Description */}
                <h3 className="mt-4 text-center text-[var(--color-foreground)] text-lg sm:text-xl font-bold font-[var(--font-sans)] leading-relaxed border-b border-gray-300 pb-2 w-full">
                  {video.title}
                </h3>
                <p className="mt-3 text-center text-[var(--color-text-secondary)] text-sm sm:text-base font-normal font-[var(--font-sans)] leading-tight">
                  {video.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Channel Subscribe CTA */}
          <div className="w-full max-w-7xl mx-auto pt-2">
            <div className="rounded-[15px] bg-white shadow-md p-6 flex flex-col md:flex-row items-center justify-between gap-4">
              <div>
                <h3 className="text-[var(--color-foreground)] text-xl font-bold font-[var(--font-sans)]">
                  Follow Joseph on YouTube
                </h3>
                <p className="text-[var(--color-text-secondary)] text-sm sm:text-base mt-1">
                  Get new PCB videos as they drop. Tutorials, walkthroughs, and
                  practical builds.
                </p>
              </div>

              {/* YouTube Subscribe Button */}
              <div className="flex items-center gap-4">
                <a
                  href="https://www.youtube.com/@josephogbonna860"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-red-600 hover:bg-red-700 transition"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="white"
                    className="w-8 h-8 sm:w-10 sm:h-10"
                  >
                    <path d="M23.498 6.186a2.974 2.974 0 0 0-2.093-2.106C19.383 3.5 12 3.5 12 3.5s-7.383 0-9.405.58a2.974 2.974 0 0 0-2.093 2.106C0 8.21 0 12 0 12s0 3.79.502 5.814a2.974 2.974 0 0 0 2.093 2.106C4.617 20.5 12 20.5 12 20.5s7.383 0 9.405-.58a2.974 2.974 0 0 0 2.093-2.106C24 15.79 24 12 24 12s0-3.79-.502-5.814zM9.75 15.02v-6.04L15.5 12l-5.75 3.02z" />
                  </svg>
                </a>

                <a
                  href="https://www.youtube.com/@josephogbonna860/videos"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 rounded-full bg-[#ff0000] text-white font-semibold hover:opacity-90"
                >
                  View All Videos
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default VideosPage;
