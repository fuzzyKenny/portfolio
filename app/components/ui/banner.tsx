"use client";

import LocalTime from "../../utils/LocalTime";
import ThemeToggle from "../themeToggle";
import SocialLinks from "./socials";
import { motion } from "motion/react";

export default function Banner() {
  return (
    <nav>
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{
          duration: 0.4,
          type: "spring",
          stiffness: 100,
          damping: 15,
        }}
        className="flex items-center max-w-full sm:max-w-2xl md:max-w-3xl lg:max-w-4xl mx-auto justify-end py-4 sm:py-6 gap-3 sm:gap-6"
      >
        <SocialLinks />
        <LocalTime />
        <ThemeToggle />
      </motion.div>
    </nav>
  );
}
