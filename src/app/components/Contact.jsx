import { useState, useEffect, useRef } from "react";
import Tab from "./Tab";
import SideDrawer from "./SideDrawer";
import IconGithub from "./Icons/IconGithub";
import IconLinkedIn from "./Icons/IconLinkedIn";
import IconWellfound from "./Icons/IconWellfound";
import IconResume from "./Icons/IconResume";
export default function Contact() {
  const [open, setOpen] = useState(false);
  const contactRef = useRef(null);

  const openDrawer = () => {
    if (open) return;
    setOpen(true);
  };
  useEffect(() => {
    const closeDrawer = (e) => {
      if (
        contactRef.current &&
        !contactRef.current.contains(e.target) &&
        !e.target.closest(".contact")
      ) {
        setOpen(false);
      }
    };
    document.addEventListener("click", closeDrawer);
    return () => {
      document.removeEventListener("click", closeDrawer);
    };
  }, [open, setOpen]);
  return (
    <>
      <span onClick={() => setOpen(true)}>
        <Tab title={"Contact"} number={"04"} />
      </span>
      <SideDrawer open={open} setOpen={setOpen} ref={contactRef}>
        <div className=" contact">
          <h2 className="text-4xl text-white"> contact 📬</h2>
          <p className="my-12">
            {`Please checkout my resume and feel free to email me at `}
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
