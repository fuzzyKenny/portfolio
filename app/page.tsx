import React from "react";
import ThemeToggle from "./components/themeToggle";

const Home = () => {
  return (
    <>
      <main className="min-h-screen transition-colors duration-300 p-4 grid-bg animate-grid-lines -z-10">
        <div className="max-w-3xl mx-auto flex justify-end">
          <ThemeToggle />
        </div>
        <section className="max-w-3xl mx-auto">
          <p>Lorem</p>
        </section>
      </main>
    </>
  );
};

export default Home;
