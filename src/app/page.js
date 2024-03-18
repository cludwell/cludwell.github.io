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
  const [aboutMeOpen, setAboutMeOpen] = useState(false);
  const [skillsOpen, setSkillsOpen] = useState(false);
  const [projectsOpen, setProjectsOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);
  return (
    <main
      className="flex flex-row items-center justify-between min-h-screen overflow-hidden"
      style={{
        backgroundImage: "url('/images/redwoods.jpg')",
        margin: 0,
        padding: 0,
        backgroundSize: "cover",
        backgroundPosition: "50% 80%",
      }}
    >
      <nav className="z-10 sm:ml-8 md:ml-16 ">
        <ul>
          <AboutMe aboutMeOpen={aboutMeOpen} setAboutMeOpen={setAboutMeOpen} />
          <Projects
            projectsOpen={projectsOpen}
            setProjectsOpen={setProjectsOpen}
          />
          <Skills skillsOpen={skillsOpen} setSkillsOpen={setSkillsOpen} />
          <Contact contactOpen={contactOpen} setContactOpen={setContactOpen} />
        </ul>
      </nav>
      {/* <Dots /> */}
      <IntroCard
        aboutMeOpen={aboutMeOpen}
        skillsOpen={skillsOpen}
        projectsOpen={projectsOpen}
        contactOpen={contactOpen}
      />
    </main>
  );
}
