"use client";
import Image from "next/image";
import Dots from "./components/Dots";
import Tab from "./components/Tab";
import rocky from "../../public/images/rocky.jpg";
import { useState } from "react";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import IntroCard from "./components/IntroCard";
export default function Home() {
  const [selected, setSelected] = useState(true);
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
      <nav className="z-10 ml-16 "
      onClick={()=>setSelected(false)}>
        <ul>
          <AboutMe />
          <Projects />
          <Skills />
          <Contact />
        </ul>
      </nav>
      {/* <Dots /> */}
      <IntroCard selected={selected}/>
    </main>
  );
}
