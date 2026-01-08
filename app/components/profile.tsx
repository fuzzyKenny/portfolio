"use client";

import { useState } from "react";
import { motion } from "motion/react";
import Image from "next/image";
import { profile } from "../data/data";

function Skeleton({ className }: { className?: string }) {
  return (
    <div
      className={[
        "animate-pulse bg-neutral-200/70 dark:bg-neutral-800/70",
        className ?? "",
      ].join(" ")}
    />
  );
}

export default function Profile() {
  const [bannerLoaded, setBannerLoaded] = useState(false);
  const [pfpLoaded, setPfpLoaded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, x: -40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className="relative select-none transition-colors duration-300"
    >
      {/* Banner wrapper */}
      <div className="relative">
        {!bannerLoaded && <Skeleton className="h-50 w-full rounded-lg" />}

        <Image
          src={profile.bannerImg}
          width={1500}
          height={500}
          alt="Twitter banner image"
          className={[
            "rounded-lg border border-white dark:border-neutral-200",
            "transition-opacity duration-300",
            bannerLoaded ? "opacity-100" : "opacity-0",
          ].join(" ")}
          placeholder="blur"
          blurDataURL="data:image/png;base64,..."
          onLoad={() => setBannerLoaded(true)}
          priority
        />
      </div>

      <div className="absolute -bottom-12 left-5 sm:left-12">
        {!pfpLoaded && (
          <Skeleton className="h-25 w-25 rounded-full sm:scale-150" />
        )}

        <Image
          src={profile.profilePicture}
          width={100}
          height={100}
          alt="Twitter profile picture"
          className={[
            "border border-white dark:border-neutral-200 rounded-full sm:scale-150",
            "transition-opacity duration-300",
            pfpLoaded ? "opacity-100" : "opacity-0",
          ].join(" ")}
          placeholder="blur"
          blurDataURL="data:image/png;base64,..."
          onLoad={() => setPfpLoaded(true)}
          priority
        />
      </div>
    </motion.div>
  );
}
