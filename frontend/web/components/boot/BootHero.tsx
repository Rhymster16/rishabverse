"use client";

import { motion } from "framer-motion";
import HeroIdentity from "./HeroIdentity";
import HeroRoles from "./HeroRoles";

export default function BootHero() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="flex min-h-screen items-center justify-center bg-black px-6 text-white"
    >
      <div className="text-center">

        <HeroIdentity />

        <HeroRoles />

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: 4,
            duration: 1,
          }}
          className="mx-auto mt-12 max-w-3xl text-lg leading-8 text-gray-400"
        >
          The person you're looking for
          <br />
          is virtually present here.
        </motion.p>

      </div>
    </motion.section>
  );
}