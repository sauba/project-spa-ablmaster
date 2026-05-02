import About from "@/components/About"
import { Filiados } from "@/components/Filiados"
import Footer from "@/components/Footer"
import Header from "@/components/Header"
import Missao from "@/components/Missao"
import UnderConstruction from "@/components/UnderConstruction"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "ABLMASTER",
  description: "Site Institucional da Associação Brasileira de Longboard Master by Thiago J. de Queiroz",
}

export default function Home() {
  return (
    <main
      className={`
      flex
      flex-col
      w-full
      min-h-screen
      items-center
      justify-center
      `}
    >
      <Header />
      <UnderConstruction />
      <About />
      <Footer />
    </main>
  )
}
