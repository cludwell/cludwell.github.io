import { useState, useRef, useEffect } from "react";
import Tab from "./Tab";
import SideDrawer from "./SideDrawer";
export default function AboutMe({aboutMeOpen, setAboutMeOpen}) {
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
  }, [aboutMeOpen, setAboutMeOpen,]);

  return (
    <>
      <span onClick={openDrawer}>
        <Tab title={"About Me"} number={"01"} />
      </span>
      <SideDrawer open={aboutMeOpen} setOpen={setAboutMeOpen} ref={aboutMeRef}>
        <div className=" about-me">

        <h2 className="my-12 text-4xl text-white"> about me👋</h2>
        <p>
          {` Hi! I'm Chris! I'm a full stack Software Engineer looking for a
          Junior Developer position. I'm passionate about software that levels
          playing fields and changes the way we live our lives.`}
        </p>
        <br />
        <p>
          {`Before becoming a software engineer I was a Senior Installer doing
          residential solar installations. My role meant quality and safe
          installations, for clients and my team, all within the span of one
          day. It was from this work that I learned I enjoyed creative problem
          solving and wanted a career in which I was always learning and
          constantly being challenged, as well as the sense of completion that
          comes from seeing a project in all aspects from start to finish.`}{" "}
        </p>
        <br />
        <p>
          {` When I am not working I am backpacking in a national forest or
          exploring a part of Mexico I've never been to.`}{" "}
        </p>
        <br />
        <p>
          {`I'm currently located in Portland, OR but looking to relocate given
          the right opportunity! Please feel free to contact me to discuss work
          opportunities or possible collaborations.`}
        </p>
        </div>
      </SideDrawer>
    </>
  );
}
