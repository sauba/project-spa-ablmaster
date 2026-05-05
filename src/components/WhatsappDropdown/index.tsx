import { WhatsappLogo } from "@phosphor-icons/react"
import Link from "next/link"

export default function WhatsappDropdown() {
  return (
    <div className="origin-bottom-right fixed bottom-8 right-8 rounded-md bg-transparent outline-none border-none">
      <div className={`animate-wiggle`}>
        <span className={`text-green-600`}>
          <Link
            href="https://chat.whatsapp.com/L7rwDbldv9g57nvyyAjpv3"
            target="_blank"
            rel="noopener noreferrer"
          >
            <WhatsappLogo size={48} />
          </Link>
        </span>
      </div>
    </div>
  )
}