import React from "react";

export function SkeletonProfile({ classname }: { classname: string }) {
  return (
    <div
      className={`animate-pulse bg-neutral-200/70 dark:bg-neutral-800/70 ${classname}`}
    />
  );
}

export function ProfileSkeletonLayout() {
  return (
    <div className="relative">
      <SkeletonProfile classname="h-32 sm:h-62 rounded-lg" />
      <SkeletonProfile classname="h-25 w-25 sm:h-40 sm:w-40 absolute sm:-bottom-20 -bottom-12 left-5 rounded-full" />
    </div>
  );
}
