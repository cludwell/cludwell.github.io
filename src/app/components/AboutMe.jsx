import { useState, useRef, useEffect } from "react";
import Tab from "./Tab";
import SideDrawer from "./SideDrawer";
import Dots from "./Dots";
import { gloock } from "../fonts";
export default function AboutMe({ aboutMeOpen, setAboutMeOpen }) {
  const aboutMeRef = useRef(null);

  const openDrawer = () => {
    if (aboutMeOpen) return;
    setAboutMeOpen(true);
  };
  useEffect(() => {
    const closeDrawer = (e) => {
      if (
        aboutMeRef.current &&
        !aboutMeRef.current.contains(e.target) &&
        !e.target.closest(".about-me")
      ) {
        setAboutMeOpen(false);
      }
    };

    document.addEventListener("click", closeDrawer);
    return () => {
      document.removeEventListener("click", closeDrawer);
    };
  }, [aboutMeOpen, setAboutMeOpen]);

  return (
    <>
      <span onClick={openDrawer}>
        <Tab title={"About Me"} number={"01"} open={aboutMeOpen} />
      </span>
      <SideDrawer open={aboutMeOpen} setOpen={setAboutMeOpen} ref={aboutMeRef}>
        <div className="max-w-screen-md py-12 about-me">
          <h2 className={` my-12 text-4xl text-white`}> About Me👋</h2>

          <Dots />
          <p>
            {` Hi! I'm Chris! I'm a full stack Software Engineer looking for new work opportunities. I'm interested in ed-tech, ecommerce, and tech that levels playing fields.`}
          </p>
          <br />
          <p>
            {`I am an alumni of the App Academy Full Stack Software Engineering bootcamp, a six month full-time intensive program. Prior to transitioning into software engineering, I worked as a Senior Solar Panel Installer, specializing in residential solar installations. This role required a keen attention to detail and the ability to find creative solutions within tight time frames. It was during this time that I discovered my passion for creative problem-solving and my desire for a career that constantly challenges me to learn and grow.  While I may be a career transitioner and not the traditional Computer Science graduate, I bring soft skills and experiences a graduate might lack, such as mission impact, quick turnaround, and building experiences clients love.`}
          </p>

          <br />
          <p>
            {`I'm currently located in Portland, OR but hoping to relocate given
          the right opportunity! Please feel free to contact me to discuss work
          opportunities or possible collaborations.`}
          </p>
        </div>
      </SideDrawer>
    </>
  );
}
