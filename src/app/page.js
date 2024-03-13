"use client"
import Image from "next/image";
import Dots from "./components/Dots";
import Tab from "./components/Tab";
import rocky from "../../public/images/rocky.jpg";
import { useState } from "react";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
export default function Home() {
  const [selected, setSelected] = useState()
  return (

    <main
      className="flex flex-row items-center justify-between min-h-screen"
      style={{
        backgroundImage: "url('/images/rocky.jpg')",
        margin: 0,
        padding: 0,
        backgroundSize: "cover",
        backgroundPosition: "100% 20%",
      }}
    >

      <nav className="z-10 ml-16 ">
        <ul>
        <AboutMe />
        <Projects />
        <Skills />
        <Tab title={"Contact"} number={"04"} />
        </ul>
      </nav>
      {/* <Dots /> */}
      {/* <div className="h-screen bg-black/40">over here</div> */}
    </main>
  );
}
