"use client"

import Link from "next/link"
import Image from "next/image"

export default function Header() {
  return (
    <header className="z-[9999] block relative">
      <nav
        id="home"
        className="fixed top-0 left-0 flex w-full items-center px-[70px] py-[30px] bg-gradient-to-t from-transparent to-black"
      >
        <div className="w-[5%] h-[5%]">
          <Link href="/">
            <Image src="/abstract-cygnus.png" alt="cygnus" width={50} height={50} />
          </Link>
        </div>
        <ul className="menu flex list-none items-center basis-2/5 m-[1%] mt-2.5">
          <li className="flex-1">
            <Link
              className="btn-1-2 block text-center text-[1.3vw] text-white no-underline border-l-2 border-white first:border-l-0 hover:bg-red-600 hover:text-white"
              href="/"
            >
              Home
            </Link>
          </li>
          <li className="flex-1">
            <Link
              className="btn-1-2 block text-center text-[1.3vw] text-white no-underline border-l-2 border-white first:border-l-0 hover:bg-red-600 hover:text-white"
              href="/message"
            >
              Message
            </Link>
          </li>
          <li className="flex-1">
            <Link
              className="btn-1-2 block text-center text-[1.3vw] text-white no-underline border-l-2 border-white first:border-l-0 hover:bg-red-600 hover:text-white"
              href="/film"
            >
              Film
            </Link>
          </li>
          <li className="flex-1">
            <Link
              className="btn-1-2 block text-center text-[1.3vw] text-white no-underline border-l-2 border-white first:border-l-0 hover:bg-red-600 hover:text-white"
              href="/studio-activities"
            >
              工作室活動
            </Link>
          </li>
          <li className="flex-1">
            <Link
              className="btn-1-2 block text-center text-[1.3vw] text-white no-underline border-l-2 border-white first:border-l-0 hover:bg-red-600 hover:text-white"
              href="/post-credits-scenes"
            >
              幕後花絮
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
