import { useState, useEffect, useRef } from "react";
import Tab from "./Tab";
import SideDrawer from "./SideDrawer";
export default function Skills() {
  const [open, setOpen] = useState(false);
  const skillsRef = useRef(null);

  const openDrawer = () => {
    if (open) return;
    setOpen(true);
  };
  useEffect(() => {
    const closeDrawer = (e) => {
      if (
        skillsRef.current &&
        !skillsRef.current.contains(e.target) &&
        !e.target.closest(".skills")
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
        <Tab title={"Skills"} number={"03"} />
      </span>
      <SideDrawer open={open} setOpen={setOpen} ref={skillsRef}>
        <div className=" skills">
          <h2 className="text-4xl text-white"> skills 👨‍💻</h2>
          <p className="my-12">{`At the moment I'm studying C# and also experimenting with frontend frameworks like framer-motion and anime.js`}</p>
          <p href="https://skillicons.dev" align="center">
            <img src="https://skillicons.dev/icons?i=androidstudio,aws,cs,css,docker,eclipse,express,html,flask,git,js,nodejs,nextjs,postgres,postman,prisma,py,react,redux,sqlite,sequelize,tailwind,ts,visualstudio,vscode&perline=8" />
          </p>
        </div>
      </SideDrawer>
    </>
  );
}
