'use client'

import HeroAnimation from '@/components/HeroAnimation'
import { useEffect, useState } from 'react'

export default function Banner() {
  return (
    <section
      id="banner"
      className="bg-[#332323] flex flex-col justify-center items-center h-screen top-0">
      <HeroAnimation />
    </section>
  )
}
