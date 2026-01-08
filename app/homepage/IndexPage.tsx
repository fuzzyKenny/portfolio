"use client";

import Banner from "../components/banner";
import GridLines from "../components/gridLines";

export default function HomePage({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <main className="homepage p-4">{children}</main>;
}
