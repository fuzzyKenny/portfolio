"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { profile } from "../../data/data";

import { Doto } from "next/font/google";

const doto = Doto({
  subsets: ["latin"],
  weight: "800",
});

export default function Profile() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -60 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{
        duration: 0.5,
        type: "spring",
        stiffness: 100,
        damping: 15,
        delay: 0.2,
      }}
      className="relative pointer-events-none select-none transition-colors duration-300 flex items-center justify-center"
    >
      {/* Banner */}
      <Image
        src={profile.bannerImg}
        width={1500}
        height={500}
        alt="Twitter banner image"
        className="rounded-2xl"
        placeholder="blur"
        blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAYAAACuyE5IAAAAVElEQVR4ATyKsQ0AIQzErEhUsAODwIzULEFNBSU7MEOGyPMUFD7pZEuM0VJKBjxyzlZrtVKKyTl47wkhICKng703a62LzDkZY+Ccu/IfVaW1Ru+dDwAA//81Z0ULAAAABklEQVQDAClwIM7W8SifAAAAAElFTkSuQmCC"
        priority
      />
      {/* Pfp */}
      <Image
        src={profile.profilePicture}
        width={200}
        height={200}
        alt="Twitter profile picture"
        className="absolute rounded-full outline outline-white transition-colors duration-300"
        placeholder="blur"
        blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAgklEQVR4AWSOQQ7DIAwEp41QI0D0lN7S//+MF1AIhbSAEjjEkuWVd7T2HfjVfi1Lm1UbY7quQNkVqq6aAiXVoWAA7Mzzg/e6ssXtCsT4xZgnUkm4jbieEELAOVf6Q047Z3VgmiZyzlhrSSmd/vjBe4+UEqVUSXFXQAjRjHpGa92BPwAAAP//BVRkPgAAAAZJREFUAwDHRDRdhJtGcwAAAABJRU5ErkJggg=="
        priority
      />
      <p
        className={`${doto.className} text-lg text-neutral-400 absolute bottom-0 select-text pointer-events-auto cursor-pointer hover:bg-neutral-50 transition-colors duration-300 hover:text-black px-1`}
      >
        Kritiraj
      </p>
    </motion.div>
  );
}
