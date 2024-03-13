import Image from "next/image";
import Dots from "./components/Dots";
import Tab from "./components/Tab";
import rocky from "../../public/images/rocky.jpg";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-row items-center ">
      <Image
        src={rocky}
        alt="a sunset scene with a fawn in the mid ground"
        className=" absolute object-top object-contain"
        height={3000}
        width={3000}
      />
      {/* <Dots /> */}
      <div className=" z-10 ml-24">
        <Tab title={"About Me"} number={"01"} />
        <Tab title={"Projects"} number={"02"} />
        <Tab title={"Skills"} number={"03"} />
        <Tab title={"Contact"} number={"04"} />
      </div>
    </main>
  );
}
