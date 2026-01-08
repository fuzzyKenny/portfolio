import Banner from "./components/banner";
import GridLines from "./components/gridLines";
import ThemeToggle from "./components/themeToggle";
import HomePage from "./homepage/IndexPage";

const Page = () => {
  return (
    <>
      <HomePage>
        <Banner />
      </HomePage>
    </>
  );
};

export default Page;
