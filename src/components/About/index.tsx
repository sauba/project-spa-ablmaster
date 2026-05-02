import Image from "next/image";
import logoablmaster from "../../../public/logoablmaster.png";

export default function About() {
  return (
    <div
      className={`
        bg-[url('/bg_quem_somos.svg')]
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
      id="about"
    >
      <Image src={logoablmaster} alt="" className={`position:relative w-4/12 mx-auto z-10`} />

      <p
        className={`
            px-2
            py-10
            2xl:px-8
            xl:text-2xl
            text-center
            tracking-widest
            font-extrabold
            position:relative
            z-10
            text-zinc-100
          `}
      >
        ABLM - Associação Brasileira de Longboard Master, uma entidade dedicada à promoção, desenvolvimento e valorização do surfe na modalidade longboard, com foco especial nos atletas da categoria master +35 anos.
        A AssociaçÃo é filiada ao CBEM - Comitê Brasileiro do Esporte Master órgão representativo do esporte master nacional, o qual, por sua vez, está vinculado à entidade internacional , principal WMS - World Masters Sport. a inserção da ABLMaster , consolidando  no cenário esportivo de alcance global. Nosso objetivo é fortalecer o esporte como ferramenta de inclusão social, qualidade de vida, turismo esportivo e valorização cultural; promover eventos, treinamentos e ações sociais, em parceria com o poder público e a iniciativa privada.
      </p>
    </div>
  )
}
