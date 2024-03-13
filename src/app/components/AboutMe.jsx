import { useState } from "react";
import Tab from "./Tab";
import SideDrawer from "./SideDrawer";
export default function AboutMe() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <span onClick={() => setOpen(true)}>
        <Tab title={"About Me"} number={"01"} />
      </span>
      <SideDrawer open={open} setOpen={setOpen}>
        <h2 className="text-white text-9xl"> about me</h2>
      </SideDrawer>
    </>
  );
}
