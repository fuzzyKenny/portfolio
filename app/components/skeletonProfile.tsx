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
      <SkeletonProfile classname="h-32 rounded-lg" />
      <SkeletonProfile classname="h-25 w-25 absolute -bottom-12 left-5 rounded-full" />
    </div>
  );
}
