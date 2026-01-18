import Image from "next/image";

export default function Banner() {
  return (
    <>
      <div className="relative">
        <Image
          src="/XBanner.jpeg"
          alt="Banner Image"
          width={1000}
          height={1000}
          className="rounded-b-2xl md:rounded-4xl"
        />
        <Image
          src="/Xpfp.jpg"
          alt="Profile Image"
          width={300}
          height={300}
          className="h-25 w-25 sm:h-40 sm:w-40 md:h-45 md:w-45 rounded-full absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 md:translate-y-8"
        />
      </div>
    </>
  );
}
