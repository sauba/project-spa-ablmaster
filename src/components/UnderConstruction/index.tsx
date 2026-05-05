import Image from "next/image";
import site_em_construcao from "../../../public/site_em_construcao.svg";

export default function UnderConstruction() {
  return (
    <div
      className={`
        bg-bg-abertura-filiados
        bg-cover
        bg-center
        w-full
        min-h-screen
        flex
        flex-col
        justify-center
        items-center
      text-gray-50

      `}
      id="under-construction"
    >
      <Image src={site_em_construcao} alt="" className={`w-6/12 lg:w-2/12 mx-auto`} priority />
    </div>
  )
}
