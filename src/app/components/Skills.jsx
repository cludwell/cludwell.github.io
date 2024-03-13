import { useEffect, useRef } from "react";
import Tab from "./Tab";
import SideDrawer from "./SideDrawer";

export default function Skills({ skillsOpen, setSkillsOpen }) {
  const skillsRef = useRef(null);

  const openDrawer = () => {
    if (skillsOpen) return;
    setSkillsOpen(true);
  };
  useEffect(() => {
    const closeDrawer = (e) => {
      if (
        skillsRef.current &&
        !skillsRef.current.contains(e.target) &&
        !e.target.closest(".skills")
      ) {
        setSkillsOpen(false);
      }
    };
    document.addEventListener("click", closeDrawer);
    return () => {
      document.removeEventListener("click", closeDrawer);
    };
  }, [skillsOpen, setSkillsOpen]);
  return (
    <>
      <span onClick={openDrawer}>
        <Tab title={"Skills"} number={"03"} open={skillsOpen} />
      </span>
      <SideDrawer open={skillsOpen} setOpen={setSkillsOpen} ref={skillsRef}>
        <div className="max-w-screen-md skills">
          <h2 className="text-4xl text-white"> Skills 👨‍💻</h2>
          <p className="my-12">{`At the moment I'm studying C# and also experimenting with frontend frameworks like framer-motion and anime.js`}</p>
          <p href="https://skillicons.dev" align="center">
            <img
              src="https://skillicons.dev/icons?i=androidstudio,aws,cs,css,docker,eclipse,express,html,flask,git,js,nodejs,nextjs,postgres,postman,prisma,py,react,redux,sqlite,sequelize,tailwind,ts,visualstudio,vscode&perline=8"
              alt="a series of technologies that i have used and studied"
            />
          </p>
        </div>
      </SideDrawer>
    </>
  );
}
