"use client";
import { socials } from "../../../data/data";
import { motion } from "motion/react";
import ThemeToggle from "./theme-toggle";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
  return (
    <nav className="h-16 max-w-full md:max-w-3/5 mx-auto flex items-center justify-end gap-4 px-8 rounded-full text-2xl">
      {socials.map((link) => (
        <motion.a
          key={link.name}
          href={link.href}
          target="_blank"
          rel="noopenner noreferrer"
          className="p-2 rounded-full"
          initial={{ scale: 1 }}
          whileHover={{
            scale: 1.1,
          }}
          whileTap={{
            scale: 0.9,
          }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 20,
            mass: 0.5,
          }}
        >
          <link.icon />
        </motion.a>
      ))}
      <ThemeToggle />
    </nav>
  );
}
