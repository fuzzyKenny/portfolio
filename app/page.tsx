import Banner from "./components/ui/banner";
import Profile from "./components/ui/profile";
import MainPage from "./homepage/IndexPage";

const Page = () => {
  return (
    <main>
      <MainPage>
        <div>
          <Banner />
          <Profile />
        </div>
      </MainPage>
    </main>
  );
};

export default Page;
