import Banner from "./components/banner";
import Profile from "./components/profile";
import { ProfileSkeletonLayout } from "./components/skeletonProfile";
import MainPage from "./homepage/IndexPage";

const Page = () => {
  return (
    <main>
      <Banner />
      <MainPage>
        <Profile />
      </MainPage>
    </main>
  );
};

export default Page;
