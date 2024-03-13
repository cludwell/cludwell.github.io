import { baskervville } from "../fonts";
import { useEffect, forwardRef } from "react";
const SideDrawer = forwardRef(({ open, setOpen, children }, ref) => {

  return (
    <div
      className={`
    fixed w-2/3 flex transition-all z-30 duration-500 h-screen ease-in-out top-0 bg-black/50 right-0 overflow-y-auto overflow-x-hidden p-6
    ${open ? "translate-x-0" : "translate-x-[-100vw] "}
    `}
      ref={ref}
    >
      <div
        className={`bg-base-200 rounded-xl transition-all duration-500 mx-4 ease-in-out text-white leading-8 my-auto
         ${baskervville.className}   ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {children}
      </div>
    </div>
  );
});
SideDrawer.displayName = "SideDrawer";
export default SideDrawer;
