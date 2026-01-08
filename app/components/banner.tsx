"use client";

import LocalTime from "../utils/LocalTime";
import ThemeToggle from "./themeToggle";
import SocialLinks from "./socials";
import { motion } from "motion/react";

export default function Banner() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -40 }}
      animate={{ opacity: 100, x: 0 }}
      transition={{ duration: 0.5 }}
      className=" flex items-center max-w-3xl mx-auto mt-8 justify-end p-4 gap-6"
    >
      <SocialLinks />
      <LocalTime />
      <ThemeToggle />
    </motion.div>
  );
}
