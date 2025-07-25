import React from "react";
import { motion } from "framer-motion";
import Navbar from "@/pages/components/Navbar";
import Footer from "@/pages/components/Footer";
import Image from "next/image";
import Link from "next/link";

const BlogPostTopThreePCBTools = () => {
  return (
    <div className="w-full min-h-screen flex flex-col bg-gray-50 text-gray-800">
      <Navbar />
      <main className="w-full flex flex-col items-center overflow-hidden">
        {/* Hero Section */}
        <div className="w-full max-w-[1280px] h-[500px] relative mx-auto">
          <Image
            src="/M2.png"
            alt="Hero Image for Top 3 PCB Design Tools"
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
                Top 3 Free PCB Design Tools for Beginners (And How to Use Them)
              </h1>
              <div className="mt-4 text-white text-lg flex justify-center gap-6">
                <span>Joseph @ PCB Mentor</span>
                <span>·</span>
                <span>12 min read</span>
                <span>·</span>
                <span>July 9, 2025</span>
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
                Diving into PCB (Printed Circuit Board) design can be an
                exciting yet challenging endeavor for beginners, given the
                technical expertise and tools required. Fortunately, there are
                excellent free software options that make this process
                accessible, allowing you to design and prototype circuits
                without upfront costs. This guide introduces the top three free
                PCB design tools—KiCad, EasyEDA, and Fritzing—offering detailed
                insights into their setup, usage, and features to help you start
                creating your own boards confidently.
              </p>

              <section id="section1" className="mt-10">
                <h2 className="text-2xl sm:text-3xl font-bold text-blue-700 mb-2">
                  1. Mastering KiCad for Scalable Designs
                </h2>
                <p className="mb-4">
                  KiCad is an open-source, cross-platform tool favored by both
                  beginners and professionals for its robustness and
                  scalability. It’s perfect for those who want to start with
                  simple designs and progress to complex multi-layer PCBs. To
                  begin, download KiCad from its official website, compatible
                  with Windows, macOS, and Linux. After installation, create a
                  new project via “File - New - Project” and organize your files
                  in a dedicated folder. Use the Eeschema tool to draw your
                  schematic by placing symbols and connecting them with wires,
                  then switch to Pcbnew to layout your board, routing traces
                  with the interactive router. Explore its 3D viewer for a
                  realistic preview and export Gerber files for manufacturing,
                  making it a comprehensive learning tool.
                </p>
                <div className="border-t border-gray-200 my-4" />
              </section>

              <section id="section2" className="mt-10">
                <h2 className="text-2xl sm:text-3xl font-bold text-blue-700 mb-2">
                  2. Simplifying with EasyEDA’s Web-Based Approach
                </h2>
                <p className="mb-4">
                  EasyEDA offers a web-based solution that eliminates the need
                  for heavy software installations, ideal for beginners or those
                  on multiple devices. Sign up for a free account on the EasyEDA
                  website, and start a new project directly in your browser.
                  Begin with the schematic editor, dragging components from the
                  extensive online library and connecting them to design your
                  circuit. Convert this to a PCB layout with a single click,
                  arranging components and using the auto-router or manual
                  routing for traces. Its real-time Design Rule Check (DRC) and
                  3D preview help catch errors early, while the integration with
                  JLCPCB allows you to order boards seamlessly, enhancing your
                  learning experience.
                </p>
                <div className="border-t border-gray-200 my-4" />
              </section>

              <section id="section3" className="mt-10">
                <h2 className="text-2xl sm:text-3xl font-bold text-blue-700 mb-2">
                  3. Learning Fundamentals with Fritzing
                </h2>
                <p className="mb-4">
                  Fritzing is tailored for beginners and educators, offering an
                  intuitive interface that mirrors physical breadboarding.
                  Download it from the official website for your operating
                  system, then launch it to create a new sketch. Start in the
                  breadboard view to simulate your circuit by dragging
                  components and connecting wires, transitioning to the
                  schematic view for a professional diagram, and finally the PCB
                  view to route traces. This step-by-step approach helps you
                  understand circuit behavior before committing to a design. Use
                  its educational resources and community sharing features to
                  enhance your skills and share your progress with others.
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

export default BlogPostTopThreePCBTools;
