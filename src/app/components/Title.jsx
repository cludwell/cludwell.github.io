import { baskervville, gloock, bebas } from "../fonts";
export default function Title({ children }) {
  return (
    <div className="relative h-8 mt-12 transition-all duration-200 ease-in-out group w-fit">
      <div
        className={`${baskervville.className} text-white group-hover:text-black text-3xl z-10 transition-all duration-200 ease-in-out absolute `}
      >
        {children}
      </div>
      <div className="absolute bottom-[-10px] z-0 h-1 transition-all duration-200 ease-in-out bg-orange-500 w-inherit group-hover:h-11 w-40"></div>
    </div>
  );
}
