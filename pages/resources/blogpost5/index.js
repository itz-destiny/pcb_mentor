import React from "react";
import { motion } from "framer-motion";
import Navbar from "@/pages/components/Navbar";
import Footer from "@/pages/components/Footer";
import Image from "next/image";
import Link from "next/link";

const BlogPostPCBLayoutMistakes = () => {
  return (
    <div className="w-full min-h-screen flex flex-col bg-gray-50 text-gray-800">
      <Navbar />
      <main className="w-full flex flex-col items-center overflow-hidden">
        {/* Hero Section */}
        <div className="w-full max-w-[1280px] h-[500px] relative mx-auto">
          <Image
            src="/M5.png"
            alt="Hero Image for PCB Layout Mistakes"
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
                Avoid These 7 Common PCB Layout Mistakes
              </h1>
              <div className="mt-4 text-white text-lg flex justify-center gap-6">
                <span>Joseph @ PCB Mentor</span>
                <span>·</span>
                <span>13 min read</span>
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
                Creating a PCB layout is a critical step in electronics design,
                but beginners often encounter pitfalls that can compromise
                functionality or manufacturability. Issues like bad traces,
                noisy power lines, and wrong footprints can derail your project.
                This guide outlines seven common PCB layout mistakes and
                provides actionable advice to help you avoid them, ensuring your
                next design is successful and professional.
              </p>

              <section id="section1" className="mt-10">
                <h2 className="text-2xl sm:text-3xl font-bold text-blue-700 mb-2">
                  1. Poor Trace Routing
                </h2>
                <p className="mb-4">
                  Overcrowded or overly long traces can cause signal
                  interference. Keep traces short and direct, avoiding sharp
                  angles. Use a grid system in your design software to maintain
                  consistency and reduce the risk of shorts.
                </p>
                <div className="border-t border-gray-200 my-4" />
              </section>

              <section id="section2" className="mt-10">
                <h2 className="text-2xl sm:text-3xl font-bold text-blue-700 mb-2">
                  2. Inadequate Ground Planes
                </h2>
                <p className="mb-4">
                  A weak ground plane can introduce noise. Ensure a solid ground
                  plane covers unused board areas, connecting all ground points
                  to minimize voltage drops and improve stability.
                </p>
                <div className="border-t border-gray-200 my-4" />
              </section>

              <section id="section3" className="mt-10">
                <h2 className="text-2xl sm:text-3xl font-bold text-blue-700 mb-2">
                  3. Incorrect Footprints
                </h2>
                <p className="mb-4">
                  Using the wrong component footprint can render your PCB
                  unusable. Always verify footprints against datasheets before
                  placing components, adjusting pad sizes and spacing as needed.
                </p>
                <div className="border-t border-gray-200 my-4" />
              </section>

              <section id="section4" className="mt-10">
                <h2 className="text-2xl sm:text-3xl font-bold text-blue-700 mb-2">
                  4. Insufficient Clearance
                </h2>
                <p className="mb-4">
                  Components too close together can cause shorts or heat issues.
                  Maintain a minimum clearance (e.g., 0.2mm) between pads and
                  traces, checking manufacturer guidelines for specific
                  components.
                </p>
                <div className="border-t border-gray-200 my-4" />
              </section>

              <section id="section5" className="mt-10">
                <h2 className="text-2xl sm:text-3xl font-bold text-blue-700 mb-2">
                  5. Noisy Power Lines
                </h2>
                <p className="mb-4">
                  Unregulated power can disrupt your circuit. Add decoupling
                  capacitors near ICs and use wide traces for power lines to
                  reduce resistance and noise, ensuring a stable voltage supply.
                </p>
                <div className="border-t border-gray-200 my-4" />
              </section>

              <section id="section6" className="mt-10">
                <h2 className="text-2xl sm:text-3xl font-bold text-blue-700 mb-2">
                  6. Ignoring Thermal Management
                </h2>
                <p className="mb-4">
                  Overheating components can fail prematurely. Place
                  heat-generating parts with adequate spacing and consider
                  thermal vias or heatsinks if required, especially for
                  high-power designs.
                </p>
                <div className="border-t border-gray-200 my-4" />
              </section>

              <section id="section7" className="mt-10">
                <h2 className="text-2xl sm:text-3xl font-bold text-blue-700 mb-2">
                  7. Skipping Design Rule Checks
                </h2>
                <p className="mb-4">
                  Failing to run a DRC can lead to manufacturing errors. Always
                  perform a thorough Design Rule Check in your software before
                  exporting Gerber files, addressing all warnings to ensure
                  compatibility with fabrication processes.
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

export default BlogPostPCBLayoutMistakes;
