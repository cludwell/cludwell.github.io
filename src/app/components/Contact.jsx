import { useState, useEffect, useRef } from "react";
import Tab from "./Tab";
import SideDrawer from "./SideDrawer";
import IconGithub from "./Icons/IconGithub";
import IconLinkedIn from "./Icons/IconLinkedIn";
import IconWellfound from "./Icons/IconWellfound";
import IconResume from "./Icons/IconResume";
export default function Contact({contactOpen, setContactOpen}) {
  const contactRef = useRef(null);

  const openDrawer = () => {
    if (contactOpen) return;
    setContactOpen(true);
  };
  useEffect(() => {
    const closeDrawer = (e) => {
      if (
        contactRef.current &&
        !contactRef.current.contains(e.target) &&
        !e.target.closest(".contact")
      ) {
        setContactOpen(false);
      }
    };
    document.addEventListener("click", closeDrawer);
    return () => {
      document.removeEventListener("click", closeDrawer);
    };
  }, [contactOpen, setContactOpen,]);
  return (
    <>
      <span onClick={openDrawer}>
        <Tab title={"Contact"} number={"04"} open={contactOpen}/>
      </span>
      <SideDrawer open={contactOpen} setOpen={setContactOpen} ref={contactRef}>
        <div className="max-w-screen-md contact">
          <h2 className="text-4xl text-white"> Contact 📬</h2>
          <p className="my-12">
            {`Please feel free to email me at `}
            <a href="mailto:cludwell@gmail.com">cludwell@gmail.com</a>.{" "}
            {`Or checkout my resume below by clicking the icon`}
          </p>
          <div className="flex flex-row flex-wrap justify-center gap-20">
            <a href="https://github.com/cludwell" target="_blank">
              <IconGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/christian-ludwell/"
              target="_blank"
            >
              <IconLinkedIn />
            </a>
            <a href="https://wellfound.com/u/chris-ludwell" target="_blank">
              <IconWellfound />
            </a>
            <a href="/christian-ludwell-resume.pdf" target="_blank">
              <IconResume />
            </a>
          </div>
        </div>
      </SideDrawer>
    </>
  );
}
