import React from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Image from "next/image"; // Import Next.js Image component

const AboutPage = () => {
  return (
    <div className="w-full min-h-screen flex flex-col">
      <Navbar />
      <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 flex flex-col justify-start items-center gap-12 sm:gap-16 flex-grow">
        {/* Founder Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="w-full flex flex-col justify-start items-center gap-6 sm:gap-8"
        >
          <div className="w-[264px] h-[223.60px] relative">
            <Image
              className="w-[223.60px] h-[223.60px] rounded-[194.63px] object-cover"
              src="/founder.png"
              alt="Joseph Ogbonna"
              width={223.6}
              height={223.6}
            />
            <div className="w-[163px] h-11 absolute left-1/2 transform -translate-x-1/2 top-[145px] bg-white rounded-md shadow-[0px_1.0723683834075928px_5.200986385345459px_0px_rgba(0,0,0,0.25)] flex items-center justify-between px-3">
              <div>
                <p className="text-[var(--color-foreground)] text-[8.58px] sm:text-xs font-medium font-[var(--font-sans)]">
                  Joseph Ogbonna
                </p>
                <p className="text-[#a6a6a6] text-[6.43px] sm:text-xs font-medium font-[var(--font-sans)]">
                  CEO/Founder of PCBMentor
                </p>
              </div>
              <div className="w-[21.45px] h-[21.45px] bg-[var(--color-primary)] rounded-full flex items-center justify-center">
                <div className="w-[17.16px] h-[17.16px] bg-white rounded-full" />
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center gap-4">
            <h2 className="w-full max-w-[693px] text-center text-[var(--color-primary)] text-3xl sm:text-4xl md:text-5xl font-extrabold font-[var(--font-sans)] leading-[52.80px]">
              I&apos;m Joseph. I Created PCB Mentor to Be What I Wish I Had
            </h2>
            <p className="w-full max-w-[468px] text-center text-[var(--color-foreground)] text-base sm:text-lg font-normal font-[var(--font-sans)] leading-normal">
              Explore practical content to help you grow as an engineer — from
              beginner basics to career strategies.
            </p>
          </div>
        </motion.div>

        {/* Personal Journey Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="px-6 sm:px-8 py-5 rounded-[30px] flex flex-col justify-start items-center gap-4 sm:gap-6"
        >
          <div className="w-full flex flex-col justify-start items-center gap-3 sm:gap-4">
            <h2 className="w-full text-center text-[var(--color-primary)] text-3xl sm:text-4xl md:text-5xl font-extrabold font-[var(--font-sans)]">
              Personal Journey
            </h2>
            <p className="w-full max-w-[660px] text-center text-[var(--color-text-secondary)] text-base sm:text-lg font-normal font-[var(--font-sans)] leading-normal">
              My journey began at 13, when I couldn’t resist the urge to open up
              every electronic gadget in my house — not to fix them, just to see
              what was inside. I didn’t know what those tiny components did, but
              I knew I was fascinated. Things got serious when I attended Niger
              Delta Science School, where Electronics was taught as a subject.
              That’s when I started building small projects like power banks,
              chargers, and FM transmitters. At 17, I got into University of
              Port Harcourt to study Electronics Engineering. But instead of
              hands-on learning, I got a lot of theory and frustration —
              something many students still face today. So I took matters into
              my own hands. I started learning practical electronics and PCB
              design on my own. With little guidance and too many online
              distractions, it took me nearly two years to figure out what I
              could’ve learned in six months — but it shaped me. The biggest
              lesson? I needed a mentor, and I didn’t have one. That’s why I
              created PCB Mentor — to help students avoid the confusion I went
              through. PCB Mentor exists to guide, support, and simplify your
              learning journey so you can focus on what really matters. You're
              not alone. Let’s build your future — together.
            </p>
          </div>
        </motion.div>

        {/* Mission Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="w-full flex flex-col justify-center items-center gap-2 sm:gap-3"
        >
          <h2 className="text-center text-[var(--color-primary)] text-3xl sm:text-4xl md:text-5xl font-extrabold font-[var(--font-sans)]">
            Mission
          </h2>
          <p className="w-full max-w-[660px] text-center text-[var(--color-text-secondary)] text-base sm:text-lg font-normal font-[var(--font-sans)] leading-normal">
            To guide and empower aspiring electronics and PCB design engineers
            through hands-on, mentorship-driven learning that builds real-world
            skills and confidence.
          </p>
        </motion.div>

        {/* Vision Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="w-full flex flex-col justify-center items-center gap-2 sm:gap-3"
        >
          <h2 className="text-center text-[var(--color-primary)] text-3xl sm:text-4xl md:text-5xl font-extrabold font-[var(--font-sans)]">
            Vision
          </h2>
          <p className="w-full max-w-[660px] text-center text-[var(--color-text-secondary)] text-base sm:text-lg font-normal font-[var(--font-sans)] leading-normal">
            To be the go-to platform for practical electronics and PCB design
            education, shaping the next generation of tech innovators
          </p>
        </motion.div>
      </main>
      <div className="mt-12 sm:mt-16 lg:mt-20">
        {" "}
        {/* Increased spacing before Footer */}
        <Footer />
      </div>
    </div>
  );
};

export default AboutPage;
