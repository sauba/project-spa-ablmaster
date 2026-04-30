import Image from "next/image";
import site_em_construcao from "../../../public/site_em_construcao.svg";

export default function UnderConstruction() {
  return (
    <div
      className={`
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

      <p
        className={`
            px-8
            py-10
            2xl:px-8
            text-2xl
            text-center
            tracking-widest
            font-pt-mono
          `}
      >
        ABLM - Associação Brasileira de Longboard Master, uma entidade dedicada à promoção, desenvolvimento e valorização do surfe na modalidade longboard, com foco especial nos atletas da categoria master +35 anos.
      </p>
    </div>
  )
}
