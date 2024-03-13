export default function SideDrawer({ open, setOpen, children }) {
  return (
    <div
      onClick={() => setOpen(false)}
      className={`
            fixed w-1/2 flex justify-center items-center transition-all z-30 duration-300 h-screen ease-in-out top-0 bg-black/40 right-0
            ${open ? "opacity-100 translate-x-0" : "translate-x-full opacity-0"}        `}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`bg-base-200 rounded-xl shadow p-6 transition-all duration-300 mx-4 ease-in-out
            ${open ? "translate-x-0" : "translate-x-full"}`}
      >
        {children}
      </div>
    </div>
  );
}
