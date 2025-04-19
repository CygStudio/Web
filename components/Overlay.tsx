"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"

export default function Overlay() {
  const overlayRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (overlayRef.current) {
      gsap.to(overlayRef.current, {
        delay: 1,
        top: "-100%",
        duration: 2,
        ease: "expo.inOut",
      })
    }
  }, [])

  return (
    <div
      ref={overlayRef}
      className="overlay absolute w-full h-screen bg-black z-[800] bg-gradient-to-r from-[#c7ab78] via-[#c7ab78] via-50% to-[#c02045] top-0 flex flex-col justify-center items-center"
    />
  )
}
