"use client";

import { useState } from "react";
import { motion } from "motion/react";
import Image from "next/image";
import { profile } from "../data/data";

function Skeleton({ className }: { className: string }) {
  return (
    <div
      className={[
        "animate-pulse bg-neutral-200/70 dark:bg-neutral-800/70",
        className,
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
      {/* Banner */}
      <div className="relative">
        {!bannerLoaded && <Skeleton className="h-[200px] w-full rounded-lg" />}

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
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAYAAACuyE5IAAAAVElEQVR4ATyKsQ0AIQzErEhUsAODwIzULEFNBSU7MEOGyPMUFD7pZEuM0VJKBjxyzlZrtVKKyTl47wkhICKng703a62LzDkZY+Ccu/IfVaW1Ru+dDwAA//81Z0ULAAAABklEQVQDAClwIM7W8SifAAAAAElFTkSuQmCC"
          onLoad={() => setBannerLoaded(true)}
          priority
        />
      </div>

      {/* Profile picture (skeleton + image share the exact same absolute wrapper) */}
      <div className="absolute -bottom-12 left-5 sm:-bottom-12 sm:left-12">
        {!pfpLoaded && (
          <Skeleton className="h-[100px] w-[100px] rounded-full sm:scale-150" />
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
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAgklEQVR4AWSOQQ7DIAwEp41QI0D0lN7S//+MF1AIhbSAEjjEkuWVd7T2HfjVfi1Lm1UbY7quQNkVqq6aAiXVoWAA7Mzzg/e6ssXtCsT4xZgnUkm4jbieEELAOVf6Q047Z3VgmiZyzlhrSSmd/vjBe4+UEqVUSXFXQAjRjHpGa92BPwAAAP//BVRkPgAAAAZJREFUAwDHRDRdhJtGcwAAAABJRU5ErkJggg=="
          onLoad={() => setPfpLoaded(true)}
          priority
        />
      </div>
    </motion.div>
  );
}
