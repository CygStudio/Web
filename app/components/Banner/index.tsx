"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import { gsap } from "gsap"

export default function Banner() {
  const backgrRef = useRef<HTMLDivElement>(null)
  const cygRef = useRef<HTMLDivElement>(null)
  const wangRef = useRef<HTMLDivElement>(null)
  const memeRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (backgrRef.current) {
      gsap.from(backgrRef.current, {
        delay: 3,
        opacity: 0,
        x: -100,
        duration: 1,
        ease: "expo.inOut",
      })
    }

    if (cygRef.current) {
      gsap.from(cygRef.current, {
        delay: 3.5,
        opacity: 0,
        x: -50,
        duration: 1,
        ease: "expo.inOut",
      })
    }

    if (wangRef.current) {
      gsap.from(wangRef.current, {
        delay: 4,
        opacity: 0,
        x: 100,
        duration: 1,
        ease: "expo.inOut",
      })
    }
  }, [])

  return (
    <section id="banner" className="z-[700] bg-[#332323] relative flex flex-col justify-center items-center h-screen">
      <div ref={backgrRef} className="backgr absolute w-full">
        <Image src="/placeholder.svg?key=xl73m" alt="" width={1920} height={1080} className="w-full h-screen block" />
      </div>
      <div ref={wangRef} className="wang absolute opacity-90 w-2/5 right-0">
        <Image src="/cygnus-text-logo.png" alt="" width={600} height={800} className="block w-full" />
      </div>
      <div ref={cygRef} className="cyg relative h-full w-full">
        <Image
          src="/celestial-guardian.png"
          alt=""
          width={800}
          height={900}
          className="absolute top-[53.5%] left-[33%] -translate-x-1/2 -translate-y-1/2 h-[93%] w-[65%] block"
        />
      </div>
      <div ref={memeRef} className="meme absolute z-[900] top-1/4 w-[4.2%]">
        <Image src="/placeholder.svg?key=aruer" alt="" width={100} height={100} className="block w-full" />
      </div>
    </section>
  )
}
