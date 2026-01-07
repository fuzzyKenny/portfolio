"use client";
import { motion } from "motion/react";
import { Sun, Moon } from "lucide-react";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true));

  if (!mounted) return null;

  const current = theme === "system" ? resolvedTheme : theme;

  const isDark = resolvedTheme === "dark";

  return (
    <motion.button
      whileTap={{
        rotate: 180,
      }}
      className="p-3 transition-colors text-zinc-500"
      onClick={() => setTheme(current === "dark" ? "light" : "dark")}
    >
      {isDark ? (
        <Sun fill="#fff" color="#fff" />
      ) : (
        <Moon fill="#000" stroke="1" color="#fff" />
      )}
    </motion.button>
  );
}
