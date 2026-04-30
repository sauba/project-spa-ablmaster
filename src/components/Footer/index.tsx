import {
  InstagramLogo,
  TrademarkRegistered,
  WhatsappLogo
} from "@phosphor-icons/react"
import Link from "next/link"
import Logo from "../Logo"

export default function Footer() {
  return (
    <footer
      className={`w-full bg-contato justify-center items-center text-center min-h-screen`}
      id="contato"
    >
      <div
        className={`flex w-full justify-center items-center text-center text-red-50 min-h-screen gap-10`}
      >
        <div className={`flex flex-col mt-4 font-pt-mono hover:cursor-none`}>
          <span className={`w-6/12 mx-auto`}>
            <Logo />
          </span>

          <span
            className={`pt-8 pb-4 text-md text-zinc-50 tracking-widest flex-wrap`}
          >
            Redes Sociais:
          </span>

          <div className={`flex justify-center items-center gap-6`}>
            {/* <div className={`hover:animate-wiggle`}>
              <span className={`text-red-600`}>
                <Link
                  href="http://www.youtube.com/@thiagosauba"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <YoutubeLogo size={48} />
                </Link>
              </span>
            </div> */}

            <div className={`hover:animate-wiggle`}>
              <span className={`text-rose-400`}>
                <Link
                  href="https://www.instagram.com/ablmaster.oficial/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <InstagramLogo size={48} />
                </Link>
              </span>
            </div>

            <div className={`animate-wiggle`}>
              <span className={`text-green-600`}>
                <Link
                  href="https://wa.me/5581985998673"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <WhatsappLogo size={48} />
                </Link>
              </span>
            </div>
          </div>
        </div>
      </div>

      <div
        className={`flex-col justify-center items-center text-center text-[8px] text-sky-800 mb-1`}
      >
        <span className={`flex justify-center tracking-widest text-zinc-50`}>
          Developed by Thiago J. de Queiroz.
          <TrademarkRegistered size={10} />
          2026 Todos os direitos reservados.
        </span>
      </div>
    </footer>
  )
}
