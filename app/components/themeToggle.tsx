"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { motion, scale } from "motion/react";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <motion.button
      whileTap={{ rotate: 270, scale: 0.9 }}
      onClick={toggleTheme}
      whileHover={{ scale: 1.2 }}
      className="cursor-pointer"
    >
      {theme === "dark" ? (
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        >
          <Sun fill="#fff" stroke="#fff" />
        </motion.div>
      ) : (
        <Moon fill="#000" stroke="#000" />
      )}
    </motion.button>
  );
}
