"use client";

import { useState, useEffect } from "react";

export default function LocalTime() {
  const [time, setTime] = useState<Date | null>(null);

  useEffect(() => {
    setTime(new Date());

    const timer = setInterval(() => setTime(new Date()), 1000);

    return () => clearInterval(timer);
  }, []);

  if (!time) return <div>--:--</div>;

  return (
    <div className="text-md pointer-events-none">
      {time.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
    </div>
  );
}
