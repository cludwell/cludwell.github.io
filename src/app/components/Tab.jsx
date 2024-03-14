import anime from "animejs";
import { gloock, bebas } from "../fonts";
export default function Tab({ title, number, open }) {
  return (
    <li className={`relative flex flex-col justify-center my-12 sm:my-20 text-white transition-all duration-200 ease-in-out cursor-pointer hover:translate-x-8 hover:text-orange-600 tab scale-[.6] sm:scale-75 md:scale-100 ${
      open ? " text-orange-600 translate-x-8 " : ''
    }`} >
      <div
        className={`${bebas.className} text-[10rem] absolute opacity-50 left-[-3rem] `}
      >
        {number}
      </div>
      <h2 className={`${gloock.className} text-5xl text-shadow`}>{title}</h2>
    </li>
  );
}
