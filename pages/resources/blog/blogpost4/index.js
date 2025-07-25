import React from "react";
import { motion } from "framer-motion";
import Navbar from "@/pages/components/Navbar";
import Footer from "@/pages/components/Footer";
import Image from "next/image";
import Link from "next/link";

const BlogPostBlinkingLED = () => {
  return (
    <div className="w-full min-h-screen flex flex-col bg-gray-50 text-gray-800">
      <Navbar />
      <main className="w-full flex flex-col items-center overflow-hidden">
        {/* Hero Section */}
        <div className="w-full max-w-[1280px] h-[500px] relative mx-auto">
          <Image
            src="/M4.png"
            alt="Hero Image for Blinking LED Project"
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
                Build Your First Circuit: Blinking LED with a 555 Timer
              </h1>
              <div className="mt-4 text-white text-lg flex justify-center gap-6">
                <span>Joseph @ PCB Mentor</span>
                <span>·</span>
                <span>11 min read</span>
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
                Building your first circuit is a thrilling milestone in your
                electronics journey, and a blinking LED using a 555 timer is the
                perfect starting point. This beginner-friendly project
                introduces you to timers, breadboards, and hands-on learning,
                delivering visible results that boost your confidence. This
                guide walks you through the process, from gathering materials to
                troubleshooting, ensuring you gain practical skills for future
                projects.
              </p>

              <section id="section1" className="mt-10">
                <h2 className="text-2xl sm:text-3xl font-bold text-blue-700 mb-2">
                  1. Understanding the 555 Timer
                </h2>
                <p className="mb-4">
                  The 555 timer is a versatile integrated circuit used to
                  generate pulses or oscillations, making it ideal for a
                  blinking LED. Learn its basic modes—astable for continuous
                  blinking—and how it controls the LED’s on/off cycle.
                  Familiarize yourself with its pin configuration (e.g.,
                  trigger, threshold, discharge) to set the foundation for this
                  project.
                </p>
                <div className="border-t border-gray-200 my-4" />
              </section>

              <section id="section2" className="mt-10">
                <h2 className="text-2xl sm:text-3xl font-bold text-blue-700 mb-2">
                  2. Gathering Materials and Setting Up
                </h2>
                <p className="mb-4">
                  You’ll need a 555 timer IC, an LED, resistors (e.g., 220Ω and
                  10kΩ), a capacitor (e.g., 10µF), a breadboard, and a 9V
                  battery with a clip. Insert the 555 timer into the breadboard,
                  connect the LED and resistors according to an astable circuit
                  diagram, and attach the power supply. Double-check connections
                  to avoid short circuits before powering on.
                </p>
                <div className="border-t border-gray-200 my-4" />
              </section>

              <section id="section3" className="mt-10">
                <h2 className="text-2xl sm:text-3xl font-bold text-blue-700 mb-2">
                  3. Testing and Troubleshooting
                </h2>
                <p className="mb-4">
                  Turn on the circuit and observe the LED blinking. If it
                  doesn’t work, check for loose connections, incorrect resistor
                  values, or a misaligned 555 timer. Adjust the capacitor or
                  resistor values to change the blinking speed, experimenting to
                  see how components affect the outcome. This hands-on debugging
                  builds your problem-solving skills.
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

export default BlogPostBlinkingLED;
