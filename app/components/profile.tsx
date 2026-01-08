"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { profile } from "../data/data";

export default function Profile() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -40 }}
      animate={{ opacity: 100, x: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className="relative pointer-events-none select-none transition-colors duration-300"
    >
      <Image
        src={profile.profilePicture}
        width={100}
        height={100}
        alt="Twitter profile picture"
        className="absolute -bottom-12 left-5 border border-white dark:border-neutral-200 rounded-full sm:-bottom-12 sm:left-12 sm:scale-150"
      />
      <Image
        src={profile.bannerImg}
        width={1500}
        height={500}
        alt="Twitter banner image"
        className="rounded-lg border border-white dark:border-neutral-200"
      />
    </motion.div>
  );
}
