import { gloock, bebas,chonburi } from "../fonts";
export default function Tab({ title, number, open }) {
  return (
    <li className={`relative flex flex-col justify-center py-6 sm:my-4 md:my-8 text-white transition-all duration-200 ease-in-out cursor-pointer hover:translate-x-8 hover:text-orange-600 tab scale-[.6] sm:scale-75 md:scale-100  ${
      open ? " text-orange-600 translate-x-8 " : ''
    }`} >
      <div
        className={`${bebas.className} text-[10rem] absolute opacity-50 left-[-3rem] `}
      >
        {number}
      </div>
      <h2 className={`${chonburi.className} text-5xl text-shadow`}>{title}</h2>
    </li>
  );
}
