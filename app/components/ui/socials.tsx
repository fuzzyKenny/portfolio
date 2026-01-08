"use client";

import { socials } from "../../data/data";
import { motion } from "motion/react";

export default function SocialLinks() {
  return (
    <div className="flex items-center gap-6">
      {socials.map(({ id, name, link, icon: Icon }) => (
        <motion.a
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          key={id}
          href={link}
          target="_blank"
          rel="noreferrer noopener"
          aria-label={name}
          title={name}
          className="cursor-pointer text-xl"
        >
          <Icon />
        </motion.a>
      ))}
    </div>
  );
}
