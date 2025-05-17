'use client'

import HeroAnimation from '@/components/HeroAnimation'
import { useEffect, useState } from 'react'

export default function Banner() {
  return (
    <section
      id="banner"
      className="bg-[#332323] relative flex flex-col justify-center items-center h-screen sticky top-0 -z-10">
      <HeroAnimation />
    </section>
  )
}
