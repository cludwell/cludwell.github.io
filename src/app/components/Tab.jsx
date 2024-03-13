import anime from "animejs";
import { gloock, bebas } from "../fonts";
export default function Tab({ title, number }) {
  return (
    <div className=" relative flex flex-col justify-center my-20">
      <div
        className={`${bebas.className} text-[10rem] absolute opacity-40 left-[-3rem] `}
      >
        {number}
      </div>
      <h2 className={`${gloock.className} text-5xl`}>{title}</h2>
    </div>
  );
}
