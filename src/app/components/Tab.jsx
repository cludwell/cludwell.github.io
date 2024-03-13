import anime from "animejs";
import { gloock, bebas } from "../fonts";
export default function Tab({ title, number }) {
  return (
    <li className="relative flex flex-col justify-center my-20 text-white transition-all duration-200 ease-in-out cursor-pointer hover:translate-x-8 hover:text-orange-600 tab" >
      <div
        className={`${bebas.className} text-[10rem] absolute opacity-50 left-[-3rem] `}
      >
        {number}
      </div>
      <h2 className={`${gloock.className} text-5xl`}>{title}</h2>
    </li>
  );
}
