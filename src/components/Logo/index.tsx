import Image from "next/image"
import Link from "next/link"
import logo from "../../../public/ablmaster_01.svg"

export default function Logo() {
  return (
    <span>
      <Link href={"https://ablmaster.com.br"}>
        <Image
          src={logo}
          width={256}
          height={256}
          alt=""
          priority
          className={`w-full`}
        />
      </Link>
    </span>
  )
}
