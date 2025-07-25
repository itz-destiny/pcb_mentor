import React from "react";
import { motion } from "framer-motion";
import Navbar from "@/pages/components/Navbar";
import Footer from "@/pages/components/Footer";
import Image from "next/image";

const VideosPage = () => {
  const videoContent = [
    {
      title: "Introduction to PCB Design for Beginners",
      description:
        "Get started with PCB design with this beginner-friendly tutorial. Covers basics, tools, and first steps.",
      thumbnail: "/video1.png",
      videoId: "https://youtu.be/MsdJgEinb34?si=spBI0iPjomtyCr5a",
    },
    {
      title: "Mastering Circuit Simulation with Free Tools",
      description:
        "Learn how to simulate circuits using free software. Perfect for testing designs before prototyping.",
      thumbnail: "/video2.png",
      videoId: "https://youtu.be/V-E_VtQbx80",
    },
    {
      title: "Advanced PCB Layout Techniques",
      description:
        "Take your PCB skills to the next level with advanced layout tips and best practices.",
      thumbnail: "/video3.png",
      videoId: "https://www.youtube.com/watch?v=V-E_VtQbx80",
    },
  ];

  return (
    <div className="w-full min-h-screen flex flex-col">
      <Navbar />
      <main className="w-full flex flex-col justify-start items-center overflow-hidden">
        {/* Hero Section */}
        <div className="w-full h-[600px] relative overflow-hidden">
          <Image
            src="/video.jpeg"
            alt="Materials Hero"
            width={1440}
            height={600}
            className="w-full h-full object-cover absolute top-0 left-0"
          />
          <div className="w-full h-full absolute top-0 left-0 bg-gradient-to-r from-black/70 to-transparent flex items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="pl-8 sm:pl-12 lg:pl-16 text-left"
            >
              <h1 className="text-white text-4xl sm:text-5xl md:text-6xl font-extrabold font-[var(--font-sans)] leading-tight">
                Video Tutorials
              </h1>
              <p className="mt-2 text-white text-base sm:text-lg font-normal font-[var(--font-sans)] max-w-[600px]">
                Have access to videos to aid your learning process
              </p>
            </motion.div>
          </div>
        </div>

        {/* Video Content Section */}
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-12 sm:py-16 flex flex-col justify-start items-center gap-8 sm:gap-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="w-full text-center"
          >
            <h2 className="text-[var(--color-primary)] text-3xl sm:text-4xl md:text-5xl font-extrabold font-[var(--font-sans)]">
              Explore Our Video Collection
            </h2>
            <p className="mt-2 text-[var(--color-foreground)] text-base sm:text-lg font-normal font-[var(--font-sans)] max-w-[530px] mx-auto">
              Dive into a curated selection of videos to enhance your skills and
              stay updated with the latest in electronics engineering.
            </p>
          </motion.div>
          <div className="w-full flex flex-col gap-6 sm:gap-8">
            {videoContent.map((video, index) => (
              <motion.div
                key={video.videoId}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="w-full bg-white rounded-[15px] shadow-md overflow-hidden flex flex-col sm:flex-row items-start gap-4 sm:gap-6 p-4 sm:p-6 hover:shadow-lg transition-shadow"
              >
                <div className="w-full sm:w-[300px] h-[180px] overflow-hidden rounded-[10px]">
                  <img
                    className="w-full h-full object-cover rounded-[10px]"
                    src={video.thumbnail}
                    alt={video.title}
                  />
                </div>
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-[var(--color-foreground)] text-lg sm:text-xl font-bold font-[var(--font-sans)] leading-relaxed">
                      {video.title}
                    </h3>
                    <p className="mt-2 text-[var(--color-text-secondary)] text-sm sm:text-base font-normal font-[var(--font-sans)] leading-tight">
                      {video.description}
                    </p>
                  </div>
                  <a
                    href={video.videoId}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-block text-[#473bf0] text-sm sm:text-base font-medium font-[var(--font-sans)] leading-tight hover:underline"
                  >
                    Watch Now
                  </a>
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

export default VideosPage;
