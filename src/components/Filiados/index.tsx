'use client'
import Image from "next/image"
import logo from "../../../public/logoablmaster.png"

export function Filiados() {
  return (
    <div
      className={`
        w-full
        min-h-screen
        flex
        flex-col
        mx-auto
        justify-center
        items-center
      text-gray-50
        font-pt-mono
        bg-blue-900
      `}
      id="filiados"
    >
      <div
        className={`
            flex
            flex-col
            justify-center
            gap-10
          `}
      >
        <Image
          src={logo}
          width={256}
          height={256}
          className={`mx-auto`}
          priority
          alt=""
        />
        <span
          className={`
              flex
              text-center
              text-2xl
              xl:text-6xl
              font-bad-script
              hover:cursor-none
              pb-8
            `}
        >
          Filiados Ano 2026
        </span>
      </div>

      <table className="w-full table-auto text-center">
        <thead className="bg-zinc-300 text-zinc-900">
          <tr>
            <th className="py-1">Nome</th>
            <th className="py-1">Status</th>
            <th className="py-1">Categoria</th>
            <th className="py-1">Tipo de Sócio</th>
            <th className="py-1">Validade</th>
          </tr>
        </thead>
        <tbody className="">
          <tr>
            <td className="py-1">Gui Mesquita</td>
            <td className="py-1">ATLETA</td>
            <td className="py-1">+60</td>
            <td className="py-1">Sócio Pioneiro</td>
            <td className="py-1">12/2026</td>
          </tr>

          <tr>
            <td className="py-1">Djan Madruga</td>
            <td className="py-1">ATLETA</td>
            <td className="py-1">+60</td>
            <td className="py-1">Sócio Benemérito</td>
            <td className="py-1">12/2026</td>
          </tr>

          <tr>
            <td className="py-1">Adolfo Jordão</td>
            <td className="py-1">DIRETOR</td>
            <td className="py-1">--</td>
            <td className="py-1">Sócio Honorário</td>
            <td className="py-1">12/2026</td>
          </tr>

          <tr>
            <td className="py-1">Ricardo Phebo</td>
            <td className="py-1">ATLETA</td>
            <td className="py-1">+65</td>
            <td className="py-1">Sócio Efetivo</td>
            <td className="py-1">12/2026</td>
          </tr>

          <tr>
            <td className="py-1">Mauricio Raul De La Fuente</td>
            <td className="py-1">ATLETA</td>
            <td className="py-1">+60</td>
            <td className="py-1">Sócio Fundador</td>
            <td className="py-1">12/2026</td>
          </tr>

          <tr>
            <td className="py-1">XYWZ XYWZY</td>
            <td className="py-1">PARATLETA</td>
            <td className="py-1">+35</td>
            <td className="py-1">Sócio Adaptado</td>
            <td className="py-1">12/2026</td>
          </tr>
        </tbody>
      </table>

    </div>
  )
}
