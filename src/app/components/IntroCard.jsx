import { gloock } from "../fonts";
import Image from "next/image";
import smallselfie2 from "/public/images/smallselfie.jpg";

export default function IntroCard({ selected }) {
  return (
    <>
      <div
        className={`relative w-1/2 text-white transition-all duration-300 ease-in-out ${
          selected ? "translate-x-0" : "translate-x-[110vw]"
        }`}
      >
        <h2
          className={`${gloock.className} text-7xl absolute top-[-9rem] z-10 left-[-9rem]`}
        >
          Christian Ludwell
        </h2>
        <h2
          className={`${gloock.className} text-6xl absolute top-[-5rem] z-10 left-[-4rem]`}
        >
          Software Engineer
        </h2>
        <Image
          src={smallselfie2}
          alt={"the software developer on a backpacking trip"}
          className="absolute z-10 scale-75"
          width={500}
          height={500}
        />
        <div className="z-10 bg-black/40 w-96 h-96"></div>
      </div>
      <div
        className={`absolute top-0 right-0 z-0 flex w-1/4 h-screen p-6 transition-all duration-500 ease-in-out bg-black/20 ${
            selected ? "translate-x-0" : "translate-x-[110vw]"
          }`}
      />
    </>
  );
}
