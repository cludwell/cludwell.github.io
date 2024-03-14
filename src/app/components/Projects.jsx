import { useState, useEffect, useRef } from "react";
import Tab from "./Tab";
import SideDrawer from "./SideDrawer";
import Dots from "./Dots";
import IconBrowser from "./Icons/IconBrowser";
import Image from "next/image";
import sidequest from "../../../public/images/sidequest.png";
import fellowship from "../../../public/images/fellowship.png";
import spacey from "../../../public/images/spacey.png";
import IconMiniGithub from "./Icons/IconMiniGithub";
import scarebnb from "../../../public/images/scarebnb.png";

export default function Projects({ projectsOpen, setProjectsOpen }) {
  const projectRef = useRef(null);

  const openDrawer = () => {
    if (projectsOpen) return;
    setProjectsOpen(true);
  };
  useEffect(() => {
    const closeDrawer = (e) => {
      console.log("Event listener triggered");
      if (
        projectRef.current && // Check if ref is defined
        !projectRef.current.contains(e.target) && // Check if clicked element is not within SideDrawer
        !e.target.closest(".projects") // Check if clicked element is not within Tab component
      ) {
        setProjectsOpen(false);
      }
    };

    console.log("Event listener added to document");
    document.addEventListener("click", closeDrawer);

    return () => {
      console.log("Event listener removed from document");
      document.removeEventListener("click", closeDrawer);
    };
  }, [projectsOpen, setProjectsOpen]);

  return (
    <>
      <span onClick={openDrawer}>
        <Tab title={"Projects"} number={"02"} open={projectsOpen} />
      </span>
      <SideDrawer
        open={projectsOpen}
        setOpen={setProjectsOpen}
        ref={projectRef}
      >
        <div className="max-w-screen-md projects">
          <h2 className="mb-12 text-4xl text-white"> Projects 👨‍🏫</h2>
          <h2 className="text-3xl ">SideQuest</h2>
          <span className="image main">
            <a href="https://sidequest-grd2.onrender.com/" target="_blank">
              <Image
                src={sidequest}
                alt="a screenshot of the project"
                className="my-4 rounded-lg"
                height={1000}
                width={1000}
              />
            </a>
          </span>
          <div className="flex flex-row justify-around my-8">
            <a href="https://github.com/cludwell/sidequest" target="_blank">
              <div className="w-10 h-10">
                <IconMiniGithub />
              </div>
            </a>

            <a
              href="https://sidequest-grd2.onrender.com/"
              className="scale-150 "
              target="_blank"
            >
              <IconBrowser />
            </a>
          </div>
          <p>{`My latest project is SideQuest, a full stack app that facilitates playing short sessions of Dungeons and Dragons 5e with the ChatGPT API! It's still a work in progress, but I feel I have a minimally viable product that better represents my abilities as a full stack developer. For this project I used technologies including 📐Prisma, ⚫Next.js, ⚫Next-Auth, ⚛Redux-Toolkit, 🟦TypeScript, 🌫 Tailwind CSS, and 🌼Daisy UI.`}</p>
          <h2 className="mt-12 text-3xl">Fancamp</h2>
          <span className="image main">
            <a href="https://fancamp.onrender.com/" target="_blank">
              <Image
                src={fellowship}
                alt="a screenshot of the fancamp project"
                className="my-4 rounded-lg"
                width={1000}
                height={1000}
              />
            </a>
          </span>
          <div className="flex flex-row justify-around my-8">
            <a
              href="https://github.com/cludwell/capstone-project"
              target="_blank"
            >
              <div className="w-10 h-10 ">
                <IconMiniGithub />
              </div>
            </a>

            <a
              href="https://fancamp.onrender.com/"
              className="scale-150 "
              target="_blank"
            >
              <IconBrowser />
            </a>
          </div>
          <p>
            Fancamp is a Bandcamp clone that I made as my capstone project for
            the App Academy bootcamp with a metal focus. Includes a custom audio
            player component and band page styling by user.
          </p>
          <br />
          <p>
            Technologies used include 🧪Flask, ☕JavaScript, 🐍Python,
            🐘PostgreSQL, ⚛Redux.js/React.js, ⚗SQLAlchemy, and 🌫 Tailwind CSS
          </p>
          <h2 className="mt-12 text-3xl ">Spacey</h2>
          <span className="image main">
            <a href="https://spacey-yscj.onrender.com/" target="_blank">
              <Image
                src={spacey}
                alt="a screenshot of spacey"
                className="my-4 rounded-lg"
                width={1000}
                height={1000}
              />
            </a>
          </span>

          <div className="flex flex-row justify-around my-8">
            <a href="https://github.com/Chris-MacMaster/spacy" target="_blank">
              <div className="w-10 h-10 ">
                <IconMiniGithub />
              </div>
            </a>

            <a
              href="https://spacey-yscj.onrender.com/"
              className="scale-150 "
              target="_blank"
            >
              <IconBrowser />
            </a>
          </div>
          <p>Spacey is a science & science fiction spin on the Etsy app.</p>
          <p>
            Technologies used include 🧪Flask, ☕JavaScript, 🐘PostgreSQL,
            🐍Python, ⚛Redux.js/React.js ⚗SQLAlchemy, and 🌫 Tailwind CSS.
          </p>

          <h2 className="text-3xl ">ScareBnb</h2>
          <span className="image main">
            <a href="https://chris-auth-me-373j.onrender.com/" target="_blank">
              <Image
                src={scarebnb}
                alt={"a screenshot of scarebnb app"}
                className="my-4 rounded-lg"
                width={1000}
                height={1000}
              />
            </a>
          </span>
          <div className="flex flex-row justify-around my-8">
            <a href="https://github.com/cludwell/api-project" target="_blank">
              <div className="w-10 h-10 ">
                <IconMiniGithub />
              </div>
            </a>

            <a
              href="https://chris-auth-me-373j.onrender.com/"
              className="scale-150 "
              target="_blank"
            >
              <IconBrowser />
            </a>
          </div>

          <p>
            {`Scarebnb is a fullstack application made entirely with ☕JavaScript
            and JavaScript based technologies. It's an Airbnb clone with a
            spooky theme, all the spots are allegedly haunted locations.`}
          </p>
          <br />
          <p>
            Technologies used include ☕JavaScript, 🐘PostgreSQL, 💠Sequelize,
            📩Express.js, ⚛Redux.js/React.js
          </p>
        </div>
        {/* <Dots /> */}
      </SideDrawer>
    </>
  );
}
