"use client"

import { useEffect, useState } from "react"
import Image from "next/image"

export default function GoTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setVisible(true)
      } else {
        setVisible(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <div
      id="gotop"
      className={`${visible ? "block" : "hidden"} w-40 rounded-[5px] fixed bottom-12 right-5 p-[5px] cursor-pointer z-50`}
      onClick={scrollToTop}
    >
      <Image
        src="/placeholder.svg?height=60&width=60&query=up arrow"
        alt="置頂按鈕"
        width={60}
        height={60}
        className="block w-full"
      />
    </div>
  )
}
