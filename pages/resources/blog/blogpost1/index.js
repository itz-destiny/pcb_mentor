import React from "react";
import { motion } from "framer-motion"; // Corrected import
import Navbar from "@/pages/components/Navbar";
import Footer from "@/pages/components/Footer";

const BlogPostFiveSmartWays = () => {
  return (
    <div className="w-full min-h-screen flex flex-col">
      <Navbar />
      <main className="w-full flex flex-col justify-start items-center overflow-hidden">
        {/* Header Section */}
        <div className="w-full max-w-[1128px] h-[749.84px] relative bg-[#1b1b1f] rounded-2xl overflow-hidden mx-auto">
          <img
            className="w-full h-[642.72px] left-0 top-[55.18px] absolute object-cover"
            src="https://placehold.co/1128x643"
            alt="Blog Header Background 1"
          />
          <img
            className="w-full h-[642.72px] left-0 top-0 absolute object-cover"
            src="https://placehold.co/1128x643"
            alt="Blog Header Background 2"
          />
          <img
            className="w-[1209.85px] h-[659.92px] left-[-40.87px] top-0 absolute rounded-[47.26px] object-cover"
            src="https://placehold.co/1210x660"
            alt="Blog Header Overlay"
          />
          <div className="w-full h-[269.42px] left-0 top-[480.41px] absolute overflow-hidden">
            <div className="w-full h-full absolute bg-black/10 backdrop-blur-[28.40px]" />
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="left-[32.46px] top-[32.46px] absolute inline-flex flex-col justify-start items-start gap-[16.23px]"
            >
              <div className="p-[8.12px] bg-[#f1ecff] rounded-[32.46px] flex flex-col justify-start items-start gap-[12.98px]">
                <div className="inline-flex justify-start items-center gap-[16.23px]">
                  <div className="w-[25.97px] h-[25.97px] bg-[#4373c7] rounded-full" />
                  <div className="w-[211px] justify-start text-[#4373c7] text-[22.72px] font-normal font-['Raleway']">
                    Career Advice
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-start items-start gap-[16.23px]">
                <div className="w-[1064.70px] justify-start text-white text-[43.82px] font-bold font-['Raleway']">
                  5 Smart Ways to Kickstart Your Electronics Engineering Career
                </div>
                <div className="inline-flex justify-start items-start gap-4">
                  <div className="justify-start text-white text-[22.72px] font-normal font-['Raleway']">
                    Joseph @ PCB Mentor
                  </div>
                  <div className="justify-start text-white text-[22.72px] font-normal font-['Raleway']">
                    10 min read
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Blog Content Section */}
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-12 sm:py-16 flex flex-col justify-start items-center gap-8 sm:gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="w-full max-w-3xl text-[var(--color-foreground)] text-base sm:text-lg font-normal font-[var(--font-sans)] leading-relaxed"
          >
            <p className="mb-6">
              Starting a career in electronics engineering can feel
              overwhelming, especially with the vast amount of knowledge and
              skills to acquire. However, with the right approach, you can lay a
              strong foundation and gain momentum early on. Here are five smart
              strategies to kickstart your journey:
            </p>

            <h2 className="text-2xl sm:text-3xl font-bold text-[var(--color-primary)] mt-8 mb-4">
              1. Master the Basics with Hands-On Projects
            </h2>
            <p className="mb-6">
              Begin with simple projects like building a blinking LED circuit or
              a basic amplifier. These projects help you understand components
              like resistors, capacitors, and transistors while giving you
              practical experience. Use breadboards to experiment safely, and
              document your progress to build a portfolio.
            </p>

            <h2 className="text-2xl sm:text-3xl font-bold text-[var(--color-primary)] mt-8 mb-4">
              2. Leverage Free Online Resources
            </h2>
            <p className="mb-6">
              Take advantage of free tutorials on platforms like YouTube or
              PCB-Mentor's own video library. Focus on structured learning paths
              that cover circuit theory, PCB design software (e.g., KiCad), and
              simulation tools. Combine these with community forums to ask
              questions and learn from others.
            </p>

            <h2 className="text-2xl sm:text-3xl font-bold text-[var(--color-primary)] mt-8 mb-4">
              3. Join a Mentorship Program
            </h2>
            <p className="mb-6">
              A mentor can provide personalized guidance, helping you avoid
              common pitfalls. Programs like PCB-Mentor's mentorship offer
              step-by-step support, connecting you with experienced engineers to
              accelerate your learning curve and boost your confidence.
            </p>

            <h2 className="text-2xl sm:text-3xl font-bold text-[var(--color-primary)] mt-8 mb-4">
              4. Build a Network of Peers
            </h2>
            <p className="mb-6">
              Engage with other beginners and professionals through online
              groups, local meetups, or social media (e.g., LinkedIn, Twitter).
              Networking opens doors to collaboration, feedback, and job
              opportunities, giving you a sense of community and support.
            </p>

            <h2 className="text-2xl sm:text-3xl font-bold text-[var(--color-primary)] mt-8 mb-4">
              5. Create and Share Your Work
            </h2>
            <p className="mb-6">
              Share your projects on platforms like GitHub or a personal blog to
              showcase your skills. This not only builds your resume but also
              attracts attention from potential employers or collaborators.
              Start small, and gradually tackle more complex designs.
            </p>

            <p className="mt-6 text-center">
              Ready to take the next step? Explore more resources on our{" "}
              <a href="/resources" className="text-[#473bf0] hover:underline">
                Resources page
              </a>{" "}
              or apply for mentorship to get started today!
            </p>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BlogPostFiveSmartWays;
