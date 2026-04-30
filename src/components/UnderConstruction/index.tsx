import Image from "next/image";
import construcao from "../../../public/construcao.svg";

export default function UnderConstruction() {
  return (
    <div
      className={`
        w-full
        min-h-screen
        flex
        justify-center
        items-center
      text-gray-50

      `}
      id="under-construction"
    >
      <span className={`w-full`}>
        <Image src={construcao} alt="" className={`w-6/12 mx-auto animate-pulse`} priority />
      </span>
    </div>
  )
}
