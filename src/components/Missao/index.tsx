import Image from "next/image"
import missaoBanner from "../../../public/missao.png"

export default function Missao() {
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
      id="missao"
    >
      <div className="w-full flex">
        {/* <iframe width="320" height="280" className={`mx-auto rounded-3xl lg:w-[748px] lg:h-[420px] border-none outline-none`} src="https://www.youtube.com/embed/e22D0IZ7nkE?si=Qh-KaPvCSXL4P7Gj" title="YouTube video player" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" rel="strict-origin-when-cross-origin" allowFullScreen></iframe> */}
        <div>
          <Image alt="" src={missaoBanner} width={256} height={256} className="w-full min-h-screen" priority />
        </div>

      </div>

    </div>
  )
}
