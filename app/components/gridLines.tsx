import React from "react";

export default function GridLines() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10">
      <div className="grid-bg absolute inset-0"></div>
      <div className="grid-bg-inv absolute inset-0"></div>
    </div>
  );
}
