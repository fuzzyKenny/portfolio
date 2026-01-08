"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { profile } from "../data/data";
import { useState } from "react";
import { ProfileSkeletonLayout } from "./skeletonProfile";

export default function Profile() {
  const [bannerLoaded, setBannerLoaded] = useState(false);
  const [pfpLoaded, setPfpLoaded] = useState(false);

  const allReady = bannerLoaded && pfpLoaded;

  return (
    <motion.div
      initial={{ opacity: 0, x: -40 }}
      animate={{ opacity: 100, x: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className="relative pointer-events-none select-none transition-colors duration-300"
    >
      {!allReady && <ProfileSkeletonLayout />}
      {/* Banner */}
      <div className={allReady ? "opacity-100" : "opacity-0"}>
        <Image
          src={profile.bannerImg}
          width={1500}
          height={500}
          alt="Twitter banner image"
          className="rounded-lg border border-white dark:border-neutral-200"
          placeholder="blur"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAYAAACuyE5IAAAAVElEQVR4ATyKsQ0AIQzErEhUsAODwIzULEFNBSU7MEOGyPMUFD7pZEuM0VJKBjxyzlZrtVKKyTl47wkhICKng703a62LzDkZY+Ccu/IfVaW1Ru+dDwAA//81Z0ULAAAABklEQVQDAClwIM7W8SifAAAAAElFTkSuQmCC"
          priority
          onLoad={() => setBannerLoaded(true)}
        />
        {/* Pfp */}
        <Image
          src={profile.profilePicture}
          width={100}
          height={100}
          alt="Twitter profile picture"
          className="absolute -bottom-12 left-5 border border-white dark:border-neutral-200 rounded-full sm:-bottom-12 sm:left-12 sm:scale-150"
          placeholder="blur"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAgklEQVR4AWSOQQ7DIAwEp41QI0D0lN7S//+MF1AIhbSAEjjEkuWVd7T2HfjVfi1Lm1UbY7quQNkVqq6aAiXVoWAA7Mzzg/e6ssXtCsT4xZgnUkm4jbieEELAOVf6Q047Z3VgmiZyzlhrSSmd/vjBe4+UEqVUSXFXQAjRjHpGa92BPwAAAP//BVRkPgAAAAZJREFUAwDHRDRdhJtGcwAAAABJRU5ErkJggg=="
          priority
          onLoad={() => setPfpLoaded(true)}
        />
      </div>
    </motion.div>
  );
}
