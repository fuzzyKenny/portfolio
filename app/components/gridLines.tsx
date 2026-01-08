"use client";

import { motion } from "motion/react";

import React from "react";

export default function GridLines() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 100 }}
      transition={{ duration: 1 }}
      className="pointer-events-none fixed inset-0 -z-10 animate-pulse"
    >
      <div className="grid-bg absolute inset-0"></div>
      <div className="grid-bg-inv absolute inset-0"></div>
    </motion.div>
  );
}
