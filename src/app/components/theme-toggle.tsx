"use client";

import { Sun, Moon, Contrast } from "lucide-react";
import { useTheme } from "next-themes";
import { motion } from "motion/react";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  function handleTheme() {
    setTheme(
      theme === "light" ? "dark" : theme === "dark" ? "system" : "light",
    );
  }
  return (
    <motion.button
      onClick={handleTheme}
      whileTap={{ scale: 0.9, rotate: -180 }}
    >
      {theme === "light" && <Sun />}
      {theme === "dark" && <Moon />}
      {theme === "system" && <Contrast />}
    </motion.button>
  );
}
