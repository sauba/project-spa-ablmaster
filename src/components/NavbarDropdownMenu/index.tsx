import { Menu, Transition } from "@headlessui/react"
import { ListBullets } from "@phosphor-icons/react"
import { Fragment } from "react"

export default function NavbarDropdownMenu() {
  return (
    <div className="flex justify-start items-start border-none outline-none">
      <Menu as="div" className="relative">
        {({ open }) => (
          <Fragment>
            <Menu.Button className="inline-flex justify-items-start rounded-md text-red-50 border-none outline-none">
              <ListBullets
                size={72}
                weight="fill"
                color="white"
                className={`py-4`}
              />
            </Menu.Button>

            {/* Menu Items */}
            <Transition
              show={open}
              enter="transform transition duration-100 ease-in"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="transform transition duration-75 ease-out"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Menu.Items className="origin-top-left absolute left-0 w-72 rounded-md bg-transparent">
                <div className="flex-col justify-start items-start">
                  <Menu.Item>
                    {({ active }) => (
                      <div
                        className={`
                          flex
                          justify-center
                          items-center
                          my-2                             
                          ${active
                            ? "bg-zinc-50 text-zinc-950 text-2xl font-bold"
                            : "bg-zinc-50 text-zinc-950 font-bold"
                          }
                        `}
                      >
                        <a
                          href="#about"
                          className={`
                            flex
                            items-center
                            px-4
                            py-2
                            text-sm
                            hover:text-lg
                          `}
                        >
                          Quem Somos
                        </a>
                      </div>
                    )}
                  </Menu.Item>

                  <Menu.Item>
                    {({ active }) => (
                      <div
                        className={`
                          flex
                          justify-center
                          items-center
                          my-2                             
                          ${active
                            ? "bg-zinc-50 text-zinc-950 text-2xl font-bold"
                            : "bg-zinc-50 text-zinc-950 font-bold"
                          }
                        `}
                      >
                        <a
                          href="#missao"
                          className={`
                            flex
                            items-center
                            px-4
                            py-2
                            text-sm
                            hover:text-lg
                          `}
                        >
                          Missão
                        </a>
                      </div>
                    )}
                  </Menu.Item>

                  <Menu.Item>
                    {({ active }) => (
                      <div
                        className={`
                          flex
                          justify-center
                          items-center
                          my-2                             
                          ${active
                            ? "bg-zinc-50 text-zinc-950 text-2xl font-bold"
                            : "bg-zinc-50 text-zinc-950 font-bold"
                          }
                        `}
                      >
                        <a
                          href="#circuito2026"
                          className={`
                            flex
                            items-center
                            px-4
                            py-2
                            text-sm
                            hover:text-lg
                          `}
                        >
                          Circuito 2026
                        </a>
                      </div>
                    )}
                  </Menu.Item>

                  <Menu.Item>
                    {({ active }) => (
                      <div
                        className={`
                          flex
                          justify-center
                          items-center
                          my-2                             
                          ${active
                            ? "bg-zinc-50 text-zinc-950 text-2xl font-bold"
                            : "bg-zinc-50 text-zinc-950 font-bold"
                          }
                        `}
                      >
                        <a
                          href="#wmgrio2026"
                          className={`
                            flex
                            items-center
                            px-4
                            py-2
                            text-sm
                            hover:text-lg
                          `}
                        >
                          WMG RIO 2026
                        </a>
                      </div>
                    )}
                  </Menu.Item>

                  <Menu.Item>
                    {({ active }) => (
                      <div
                        className={`
                          flex
                          justify-center
                          items-center
                          my-2                             
                          ${active
                            ? "bg-zinc-50 text-zinc-950 text-2xl font-bold"
                            : "bg-zinc-50 text-zinc-950 font-bold"
                          }
                        `}
                      >
                        <a
                          href="https://ablmaster.com.br/filiados"
                          className={`
                            flex
                            items-center
                            px-4
                            py-2
                            text-sm
                            hover:text-lg
                          `}
                        >
                          Filie-se
                        </a>
                      </div>
                    )}
                  </Menu.Item>

                  <Menu.Item>
                    {({ active }) => (
                      <div
                        className={`
                          flex
                          my-2
                          justify-center
                          items-center
                          ${active
                            ? "bg-zinc-50 text-zinc-950 text-2xl font-bold"
                            : "bg-zinc-50 text-zinc-950 font-bold"
                          }
                        `}
                      >
                        <a
                          href="#contato"
                          className={`
                            flex
                            items-center
                            px-4
                            py-2
                            text-sm
                            gap-3
                            hover:font-bold
                            hover:text-lg
                          `}
                        >
                          Contato
                        </a>
                      </div>
                    )}
                  </Menu.Item>
                </div>
              </Menu.Items>
            </Transition>
          </Fragment>
        )}
      </Menu>
    </div>
  )
}