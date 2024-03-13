import { useState } from "react";
import Tab from "./Tab";
import SideDrawer from "./SideDrawer";
import Dots from "./Dots";
export default function Projects() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <span onClick={() => setOpen(true)}>
        <Tab title={"Projects"} number={"02"} />
      </span>
      <SideDrawer open={open} setOpen={setOpen}>
        <h2 className="text-4xl text-white"> projects 👨‍🏫</h2>
        
        {/* <Dots /> */}
      </SideDrawer>
    </>
  );
}
