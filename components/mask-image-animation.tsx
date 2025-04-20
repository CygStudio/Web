"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export default function MaskImageAnimation() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    // 設置一個短暫的延遲，確保組件已經掛載
    const timer = setTimeout(() => {
      setIsLoaded(true)
    }, 100)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* 使用 CSS mask-image 實現遮罩效果 */}
      <motion.div
        className="absolute inset-0 w-full h-full"
        initial={{ scale: 5 }}
        animate={{
          scale: isLoaded ? 1 : 5,
        }}
        transition={{
          duration: 2.5,
          ease: "easeOut",
        }}
        style={{
          maskImage: `url('/images/mask.png')`,
          maskSize: "cover",
          maskRepeat: "no-repeat",
          maskPosition: "center",
          WebkitMaskImage: `url('/images/mask.png')`,
          WebkitMaskSize: "cover",
          WebkitMaskRepeat: "no-repeat",
          WebkitMaskPosition: "center",
        }}
      >
        <img src="/images/main.jpeg" alt="Main Image" className="w-full h-full object-cover" />
      </motion.div>
    </div>
  )
}

