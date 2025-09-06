import React from "react";
import { motion } from "framer-motion";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import Image from "next/image";
import Link from "next/link";

const BlogPostFiveSmartWays = () => {
  return (
    <div className="w-full min-h-screen flex flex-col bg-gray-50 text-gray-800">
      <Navbar />
      <main className="w-full flex flex-col items-center overflow-hidden">
        {/* Hero Section */}
        <div className="w-full max-w-[1280px] h-[500px] relative mx-auto">
          <Image
            src="/M1.png"
            alt="Hero Image for 5 Smart Ways"
            width={1280}
            height={500}
            className="w-full h-full object-cover absolute top-0 left-0"
          />
          <div className="w-full h-full absolute top-0 left-0 bg-gradient-to-t from-black/60 to-transparent flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center px-4 sm:px-6 lg:px-8"
            >
              <h1 className="text-white text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
                5 Smart Ways to Kickstart Your Electronics Engineering Career
              </h1>
              <div className="mt-4 text-white text-lg flex justify-center gap-6">
                <span>Joseph @ PCB Mentor</span>
                <span>·</span>
                <span>10 min read</span>
                <span>·</span>
                <span>July 10, 2025</span>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Content Section */}
        <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 flex flex-col gap-12">
          {/* Main Content */}
          <article className="w-full mx-auto p-6 sm:p-8 bg-white rounded-lg shadow-lg">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-gray-700 text-base sm:text-lg leading-relaxed"
            >
              <p className="mb-6">
                Starting a career in electronics engineering can feel
                overwhelming, especially with the vast amount of knowledge and
                skills to acquire. However, with the right approach, you can lay
                a strong foundation and gain momentum early on. Here are five
                smart strategies to kickstart your journey:
              </p>

              <section id="section1" className="mt-10">
                <h2 className="text-2xl sm:text-3xl font-bold text-blue-700 mb-2">
                  1. Master the Basics with Hands-On Projects
                </h2>
                <p className="mb-4">
                  Begin with simple projects like building a blinking LED
                  circuit or a basic amplifier. These projects help you
                  understand components like resistors, capacitors, and
                  transistors while giving you practical experience. Use
                  breadboards to experiment safely, and document your progress
                  to build a portfolio.
                </p>
                <div className="border-t border-gray-200 my-4" />
              </section>

              <section id="section2" className="mt-10">
                <h2 className="text-2xl sm:text-3xl font-bold text-blue-700 mb-2">
                  2. Leverage Free Online Resources
                </h2>
                <p className="mb-4">
                  Take advantage of free tutorials on platforms like YouTube or
                  PCB-Mentors own video library. Focus on structured learning
                  paths that cover circuit theory, PCB design software (e.g.,
                  KiCad), and simulation tools. Combine these with community
                  forums to ask questions and learn from others.
                </p>
                <div className="border-t border-gray-200 my-4" />
              </section>

              <section id="section3" className="mt-10">
                <h2 className="text-2xl sm:text-3xl font-bold text-blue-700 mb-2">
                  3. Join a Mentorship Program
                </h2>
                <p className="mb-4">
                  A mentor can provide personalized guidance, helping you avoid
                  common pitfalls. Programs like PCB-Mentors mentorship offer
                  step-by-step support, connecting you with experienced
                  engineers to accelerate your learning curve and boost your
                  confidence.
                </p>
                <div className="border-t border-gray-200 my-4" />
              </section>

              <section id="section4" className="mt-10">
                <h2 className="text-2xl sm:text-3xl font-bold text-blue-700 mb-2">
                  4. Build a Network of Peers
                </h2>
                <p className="mb-4">
                  Engage with other beginners and professionals through online
                  groups, local meetups, or social media (e.g., LinkedIn,
                  Twitter). Networking opens doors to collaboration, feedback,
                  and job opportunities, giving you a sense of community and
                  support.
                </p>
                <div className="border-t border-gray-200 my-4" />
              </section>

              <section id="section5" className="mt-10">
                <h2 className="text-2xl sm:text-3xl font-bold text-blue-700 mb-2">
                  5. Create and Share Your Work
                </h2>
                <p className="mb-4">
                  Share your projects on platforms like GitHub or a personal
                  blog to showcase your skills. This not only builds your resume
                  but also attracts attention from potential employers or
                  collaborators. Start small, and gradually tackle more complex
                  designs.
                </p>
              </section>

              <div className="mt-10 text-center">
                <Link
                  href="/resources"
                  className="text-blue-600 hover:underline text-lg"
                >
                  Explore More Resources
                </Link>
              </div>
            </motion.div>
          </article>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BlogPostFiveSmartWays;
