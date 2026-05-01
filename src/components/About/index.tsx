import Image from "next/image";
import bgquemsomos from "../../../public/bg_quem_somos.svg";

export default function About() {
  return (
    <div
      className={`        
        w-full
        flex
        justify-center
        items-center
      text-gray-50

      `}
      id="about"
    >
      <div className={`w-full min-h-screen`}>
        <Image src={bgquemsomos} alt="" className={`position:absolute top-0 left-0 w-full min-h-screen`} />

      </div>
    </div>
  )
}
