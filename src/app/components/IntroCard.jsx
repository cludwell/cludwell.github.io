import { gloock, bebas, chonburi } from "../fonts";
import Image from "next/image";
import smallselfie2 from "/public/images/smallselfie.jpg";
import Dots from "./Dots";

export default function IntroCard({
  aboutMeOpen,
  skillsOpen,
  projectsOpen,
  contactOpen,
}) {
  return (
    <>
      <div
        className={`relative text-white transition-all duration-300 ease-in-out  self-start h-screen w-1/2 pr-12 md:pr-[8vmin] lg:mr-[20vmin] pt-[10vmin] flex flex-col items-end ${
          !aboutMeOpen && !skillsOpen && !projectsOpen && !contactOpen
            ? "translate-x-0"
            : "translate-x-[110vw]"
        }`}
      >
        <div
          className={`
    fixed w-1/2 flex transition-all z-0 duration-500 h-screen ease-in-out top-0 bg-orange-500/50 right-0 overflow-y-auto overflow-x-hidden`}
        />
        <h2
          className={`${chonburi.className} text-[7vmin] z-10 text-shadow leading-[4rem] relative w-full`}
        >
          Christian Ludwell
        </h2>
        <h2
          className={`${bebas.className} text-[6vmin] z-10 opacity-60 text-shadow relative`}
        >
          Software Engineer
        </h2>

        <Image
          src={smallselfie2}
          alt={"the software developer on a backpacking trip "}
          className="relative z-20 max-w-xl rounded-full w-[40vmin] sm:w-[30vmin]"
        />
      </div>
    </>
  );
}
