import BgPattern from "./components/backgroundPatten";
import ThemeToggle from "./components/themeToggle";
import Clock from "./components/time";

const Home = () => {
  return (
    <>
      <div>
        <BgPattern />
      </div>
      <main className="min-h-screen p-8">
        <div className="max-w-4xl mx-auto flex items-center justify-end">
          <Clock />
          <ThemeToggle />
        </div>
      </main>
    </>
  );
};

export default Home;
