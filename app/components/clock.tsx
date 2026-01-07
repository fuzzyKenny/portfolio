"use client";

import { useEffect, useState } from "react";

export default function Clock() {
  const [time, setTime] = useState<Date | null>(null);

  useEffect(() => {
    const updateTime = () => setTime(new Date());

    updateTime();

    const intervalId = window.setInterval(updateTime, 60000);

    return () => window.clearInterval(intervalId);
  }, []);

  if (!time) return null;

  const formattedTime = time.toLocaleTimeString(undefined, {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });

  return <span className="text-neutral-500 text-lg">{formattedTime}</span>;
}
