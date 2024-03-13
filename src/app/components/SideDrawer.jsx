export default function SideDrawer({ open, setOpen, children }) {
    return (
      <div
        onClick={() => setOpen(false)}
        className={`
            fixed inset-0 flex justify-center items-center transition-colors z-30 duration-300 max-h-screen
            ${open ? " translate-x-1/2 bg-black/40" : "invisible"}
        `}
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className={`bg-base-200 rounded-xl shadow p-6 transition-all duration-300 mx-4
            ${open ? "scale-100 opacity-100" : "scale-125 opacity-0"}`}
        >
          {children}
        </div>
      </div>
    );
  }
