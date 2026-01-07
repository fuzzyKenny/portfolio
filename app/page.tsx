import React from "react";
import ThemeToggle from "./components/themeToggle";
import Profile from "./components/profile";

const Home = () => {
  return (
    <>
      <div className="grid-bg animate-grid-lines -z-10"></div>
      <div className="flex justify-end max-w-3xl mx-auto mt-24">
        <ThemeToggle />
      </div>
      <main className="max-w-4xl mx-auto p-4">
        <Profile />
      </main>
    </>
  );
};

export default Home;
