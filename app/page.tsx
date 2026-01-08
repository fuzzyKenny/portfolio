import Banner from "./components/banner";
import Profile from "./components/profile";
import MainPage from "./homepage/IndexPage";

const Page = () => {
  return (
    <main>
      <Banner />
      <MainPage>
        {/* <p>Placeholder.</p> */}
        <Profile />
      </MainPage>
    </main>
  );
};

export default Page;
