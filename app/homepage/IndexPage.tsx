"use client";

import Banner from "../components/banner";
import GridLines from "../components/gridLines";

export default function MainPage({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <main className="homepage p-4 max-w-3xl mx-auto">{children}</main>;
}
