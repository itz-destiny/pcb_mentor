import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <motion.section
      className="flex flex-col md:flex-row bg-[var(--color-background)] w-full items-center justify-center px-4 sm:px-6 lg:px-8 py-8"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
      }}
    >
      <motion.div
        className="w-full max-w-[565px] flex flex-col justify-start items-start gap-6"
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <motion.div
          className="w-full flex flex-col justify-start items-start gap-5"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1 },
          }}
        >
          <motion.div
            className="self-stretch"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <span className="text-[var(--color-foreground)] text-4xl sm:text-5xl md:text-6xl font-bold font-[var(--font-sans)] leading-tight">
              Helping You Become the{" "}
            </span>
            <span className="text-[var(--color-primary)] text-4xl sm:text-5xl md:text-6xl font-bold font-[var(--font-sans)] leading-tight">
              Engineer
            </span>
            <span className="text-[var(--color-foreground)] text-4xl sm:text-5xl md:text-6xl font-bold font-[var(--font-sans)] leading-tight">
              {" "}
              You are Meant to Be
            </span>
          </motion.div>
          <motion.div
            variants={{
              hidden: { opacity: 0, x: -20 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <Image
              src="/line.svg"
              width={479}
              height={26}
              alt="Decorative underline"
              className="w-full max-w-[479px] h-auto"
            />
          </motion.div>
        </motion.div>
        <motion.div
          className="p-2.5 flex justify-start items-start"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="w-full max-w-[461px] text-[var(--color-text-secondary)] text-base sm:text-lg font-medium font-[var(--font-sans)] leading-[30px]">
            Practical advice, mindset guidance, and expert PCB mentorship to
            help you grow from beginner to confident electronics engineer.
          </div>
        </motion.div>
        <motion.div
          className="flex flex-col sm:flex-row justify-start items-center gap-4"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1 },
          }}
        >
          <motion.div
            variants={{
              hidden: { opacity: 0, scale: 0.9 },
              visible: { opacity: 1, scale: 1 },
            }}
          >
            <Link
              href="/mentorship"
              className="px-4 py-3 sm:px-6 sm:py-4 bg-[var(--color-primary)] rounded-[40px] flex justify-center items-center gap-2.5 hover:bg-[#2a4b8c] transition-colors duration-200"
            >
              <span className="text-white text-base sm:text-lg font-medium font-[var(--font-sans)]">
                Start Learning
              </span>
              <Image
                src="/arrow-down.svg"
                width={24}
                height={24}
                alt="Arrow icon"
                className="w-6 h-6 sm:w-8 sm:h-8"
              />
            </Link>
          </motion.div>
          <motion.div
            variants={{
              hidden: { opacity: 0, scale: 0.9 },
              visible: { opacity: 1, scale: 1 },
            }}
          >
            <Link
              href="/mentorship"
              className="flex justify-start items-center gap-3.5 hover:underline"
            >
              <Image
                src="/play.svg"
                width={40}
                height={40}
                alt="Play icon"
                className="w-8 h-8 sm:w-10 sm:h-10"
              />
              <span className="text-[#191a15] text-base sm:text-lg font-medium font-[var(--font-sans)]">
                Join a Mentorship Program
              </span>
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>
      <motion.div
        className="w-full max-w-[400px] sm:max-w-[500px] md:max-w-[600px] mt-6 md:mt-0"
        variants={{
          hidden: { opacity: 0, x: 50 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        <Image
          src="/side-frame.png"
          width={600}
          height={600}
          alt="Hero illustration"
          className="w-full h-auto"
        />
      </motion.div>
    </motion.section>
  );
};

export default Hero;