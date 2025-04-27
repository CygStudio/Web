'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useMobileViewport } from '@/hooks/use-mobile-viewport'

export default function GoTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const threshold = window.innerHeight * 2
      if (window.scrollY > threshold) {
        setVisible(true)
      } else {
        setVisible(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  const { isMobile } = useMobileViewport()
  const size = isMobile ? 90 : 120

  return (
    <motion.div
      id="gotop"
      className="fixed bottom-12 right-5 cursor-pointer z-[999] w-fit"
      onClick={scrollToTop}
      initial={{ opacity: 0 }}
      animate={{ opacity: visible ? 1 : 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ rotate: -45, transition: { duration: 0.3 } }}>
      <Image
        src="/images/gotop.webp"
        alt="置頂按鈕"
        width={size}
        height={size}
        className="block"
      />
    </motion.div>
  )
}
