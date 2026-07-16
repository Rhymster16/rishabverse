"use client";

import { motion } from "framer-motion";

export default function HeroIdentity() {
  return (
    <>
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-7xl md:text-8xl font-black tracking-wide"
      >
        HELLO.
      </motion.h1>

      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          delay: 1,
          duration: 0.8,
        }}
        className="mt-10 text-2xl uppercase tracking-[0.5em] text-gray-500"
      >
        I'M
      </motion.h2>

      <motion.h3
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          delay: 2,
          duration: 1,
        }}
        className="mt-4 text-6xl md:text-8xl font-black"
      >
        RISHAB VERMA
      </motion.h3>
    </>
  );
}