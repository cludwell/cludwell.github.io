import { useState,useEffect,useRef } from "react";
import Tab from "./Tab";
import SideDrawer from "./SideDrawer";
import Dots from "./Dots";
import IconBrowser from "./Icons/IconBrowser";
import Image from "next/image";
import sidequest from "../../../public/images/sidequest.png";
import fellowship from "../../../public/images/fellowship.png";
export default function Projects() {
  const [open, setOpen] = useState(false);
  const projectRef = useRef(null);

  const openDrawer = () => {
    if (open) return;
    setOpen(true);
  };
  useEffect(() => {
    const closeDrawer = (e) => {
      console.log("Event listener triggered");
      if (
        projectRef.current && // Check if ref is defined
        !projectRef.current.contains(e.target) && // Check if clicked element is not within SideDrawer
        !e.target.closest(".projects") // Check if clicked element is not within Tab component
      ) {
        setOpen(false);
      }
    };

    console.log("Event listener added to document");
    document.addEventListener("click", closeDrawer);

    return () => {
      console.log("Event listener removed from document");
      document.removeEventListener("click", closeDrawer);
    };
  }, [open, setOpen]);

  return (
    <>
      <span onClick={() => setOpen(true)}>
        <Tab title={"Projects"} number={"02"} />
      </span>
      <SideDrawer open={open} setOpen={setOpen} ref={projectRef}>
        <div className=" projects">
          <h2 className="text-4xl text-white"> projects 👨‍🏫</h2>
          <h2 className="major">SideQuest</h2>
          <span className="image main">
            <a href="https://sidequest-grd2.onrender.com/" target="_blank">
              <Image
                src={sidequest}
                alt="a screenshot of the project"
                className="rounded-lg "
                height={1000}
                width={1000}
              />
            </a>
          </span>
          <a href="https://github.com/cludwell/sidequest" target="_blank">
            <span className="label largeicon">GitHub</span>
          </a>

          <a
            href="https://sidequest-grd2.onrender.com/"
            className="browser-icon"
            target="_blank"
          >
            <IconBrowser />
          </a>
          <p>{`I'd like to share my new portfolio project SideQuest, it's a full stack app that facilitates playing short sessions of Dungeons and Dragons 5e with the ChatGPT API! It's still a work in progress, but I feel I have a minimally viable product that better represents my abilities as a full stack developer. For this project I used technologies including 📐Prisma, ⚫Next.js, ⚫Next-Auth, ⚛Redux-Toolkit, 🟦TypeScript, 🌫 Tailwind CSS, and 🌼Daisy UI.`}</p>
          <h2 className="major">Fancamp</h2>
          <span className="image main">
            <a href="https://fancamp.onrender.com/" target="_blank">
              <Image
                src={fellowship}
                alt="a screenshot of the fancamp project"
                className="rounded-lg "
                width={1000}
                height={1000}
              />
            </a>
          </span>
          <a
            href="https://github.com/cludwell/capstone-project"
            target="_blank"
          >
            <span className="label largeicon">GitHub</span>
          </a>

          <a
            href="https://fancamp.onrender.com/"
            className="browser-icon"
            target="_blank"
          >
            <IconBrowser />
          </a>
        </div>
        {/* <Dots /> */}
      </SideDrawer>
    </>
  );
}
