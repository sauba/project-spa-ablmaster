import Image from "next/image"
import logo from "../../../public/ablmaster_01.svg"

export default function About() {
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
      id="about"
    >
      <div className="w-full flex">
        {/* <iframe width="320" height="280" className={`mx-auto rounded-3xl lg:w-[748px] lg:h-[420px] border-none outline-none`} src="https://www.youtube.com/embed/e22D0IZ7nkE?si=Qh-KaPvCSXL4P7Gj" title="YouTube video player" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" rel="strict-origin-when-cross-origin" allowFullScreen></iframe> */}

        <div>
          <Image alt="" src={logo} width={256} height={256} className="mx-auto" />

          <p
            className={`
            px-2
            py-10
            2xl:px-8
            xl:text-2xl
            text-center
            tracking-widest
            font-pt-mono
          `}
          >
            ABLM - Associação Brasileira de Longboard Master, uma entidade dedicada à promoção, desenvolvimento e valorização do surfe na modalidade longboard, com foco especial nos atletas da categoria master +35 anos.
          </p>

          <p
            className={`
            px-2
            py-10
            2xl:px-8
            xl:text-2xl
            text-center
            tracking-widest
            font-pt-mono
          `}
          >
            A AssociaçÃo é filiada ao CBEM - Comitê Brasileiro do Esporte Master órgão representativo do esporte master nacional, o qual, por sua vez, está vinculado à entidade internacional , principal WMS - World Masters Sport. a inserção da ABLMaster , consolidando  no cenário esportivo de alcance global. Nosso objetivo é fortalecer o esporte como ferramenta de inclusão social, qualidade de vida, turismo esportivo e valorização cultural; promover eventos, treinamentos e ações sociais, em parceria com o poder público e a iniciativa privada.
          </p>

        </div>

      </div>

    </div>
  )
}
