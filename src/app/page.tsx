import Banner from "./components/Banner";

export default function Home() {
  return (
    <>
      <div className="h-screen max-w-full border-white/20 border mx-auto md:max-w-200 md:p-4">
        <Banner />
        <p className="mt-30 text-2xl">Hi There, I am Kritiraj, aka Kenny</p>
      </div>
    </>
  );
}
