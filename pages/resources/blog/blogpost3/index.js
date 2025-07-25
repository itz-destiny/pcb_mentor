import React from "react";
import { motion } from "framer-motion";
import Navbar from "@/pages/components/Navbar";
import Footer from "@/pages/components/Footer";
import Image from "next/image";
import Link from "next/link";

const BlogPostMindsetShift = () => {
  return (
    <div className="w-full min-h-screen flex flex-col bg-gray-50 text-gray-800">
      <Navbar />
      <main className="w-full flex flex-col items-center overflow-hidden">
        {/* Hero Section */}
        <div className="w-full max-w-[1280px] h-[500px] relative mx-auto">
          <Image
            src="/M3.png"
            alt="Hero Image for Mindset Shift"
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
                From Doubt to Confidence: The Engineer’s Mindset Shift
              </h1>
              <div className="mt-4 text-white text-lg flex justify-center gap-6">
                <span>Joseph @ PCB Mentor</span>
                <span>·</span>
                <span>10 min read</span>
                <span>·</span>
                <span>July 25, 2025</span>
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
                Imposter syndrome is a common hurdle for many aspiring
                engineers, casting shadows of self-doubt even as you take your
                first steps into the field. The feeling that you don’t belong or
                aren’t skilled enough can paralyze your progress, but it’s a
                challenge that can be overcome. This article shares the mindset
                shifts that guided me from uncertainty to successfully
                completing my first real project, offering practical strategies
                to build your confidence as an electronics engineer.
              </p>

              <section id="section1" className="mt-10">
                <h2 className="text-2xl sm:text-3xl font-bold text-blue-700 mb-2">
                  1. Embrace Learning as a Journey
                </h2>
                <p className="mb-4">
                  Instead of aiming for perfection, view every mistake as a
                  learning opportunity. When I struggled with my first circuit,
                  I realized that understanding why it failed—due to a miswired
                  component—was more valuable than getting it right immediately.
                  Adopt a growth mindset, celebrating small wins like fixing a
                  bug or completing a solder joint, to gradually build your
                  self-assurance.
                </p>
                <div className="border-t border-gray-200 my-4" />
              </section>

              <section id="section2" className="mt-10">
                <h2 className="text-2xl sm:text-3xl font-bold text-blue-700 mb-2">
                  2. Break Projects into Manageable Steps
                </h2>
                <p className="mb-4">
                  Overwhelm often stems from tackling a project as a whole. I
                  broke my first project—a simple amplifier—into phases:
                  researching components, sketching the schematic, and testing
                  each section. This step-by-step approach made the task less
                  intimidating, allowing me to gain confidence with each
                  completed phase before moving to the next.
                </p>
                <div className="border-t border-gray-200 my-4" />
              </section>

              <section id="section3" className="mt-10">
                <h2 className="text-2xl sm:text-3xl font-bold text-blue-700 mb-2">
                  3. Seek Support and Feedback
                </h2>
                <p className="mb-4">
                  Isolation fuels doubt, but connecting with others can dispel
                  it. I joined online forums and asked for feedback on my
                  designs, which not only improved my work but also showed me
                  that even experienced engineers face challenges. Engaging with
                  a community helped normalize my struggles and reinforced my
                  belief in my potential.
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

export default BlogPostMindsetShift;
