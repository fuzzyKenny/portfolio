import React from "react";
import ThemeToggle from "./components/themeToggle";

const Home = () => {
  return (
    <>
      <main className="min-h-screen bg-white text-black dark:bg-zinc-950 dark:text-zinc-50 transition-colors duration-300 p-8 relative">
        <div className="flex justify-end">
          <ThemeToggle />
        </div>
        <section className="min-h-screen max-w-3xl mx-auto"></section>
      </main>
    </>
  );
};

export default Home;
