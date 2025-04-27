'use client'

import HeroAnimation from '@/components/HeroAnimation'
import { useEffect, useState } from 'react'

export default function Banner() {
  return (
    <section
      id="banner"
      className="z-[700] bg-[#332323] relative flex flex-col justify-center items-center h-screen">
      <HeroAnimation />
    </section>
  )
}
