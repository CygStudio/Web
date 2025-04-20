"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

export default function ImageAnimation() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [showBirdAnimation, setShowBirdAnimation] = useState(false)

  useEffect(() => {
    // 設置一個短暫的延遲，確保組件已經掛載
    const timer = setTimeout(() => {
      setIsLoaded(true)
    }, 100)

    return () => clearTimeout(timer)
  }, [])

  // 直接設定鳥動畫延遲 3 秒開始
  useEffect(() => {
    if (isLoaded) {
      const timer = setTimeout(() => {
        setShowBirdAnimation(true)
      }, 2000) // 與第一個動畫的持續時間相同

      return () => clearTimeout(timer)
    }
  }, [isLoaded])

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* 容器 - 控制整體縮放 */}
      <motion.div
        className="absolute inset-0 w-full h-full flex items-center justify-center"
        initial={{ scale: 7 }}
        animate={{
          scale: isLoaded ? 1 : 5,
        }}
        transition={{
          duration: 3,
          ease: "easeOut",
        }}
      >
        {/* 主圖層 */}
        <div className="absolute inset-0 w-full h-full">
          <img src="/images/main.jpeg" alt="Main Image" className="w-full h-full object-cover" />
        </div>

        {/* 遮罩圖層 */}
        <motion.div
          className="absolute inset-0 w-full h-full"
          initial={{ opacity: 1 }}
          animate={{
            opacity: isLoaded ? 0 : 1,
          }}
          transition={{
            duration: 3,
            ease: "easeOut",
          }}
        >
          <img
            src="/images/mask.png"
            alt="Mask Image"
            className="w-full h-full object-cover"
            style={{ mixBlendMode: "multiply" }}
          />
        </motion.div>
      </motion.div>

      {/* 鳥的動畫 - 只在設定時間後顯示 */}
      <AnimatePresence>
        {showBirdAnimation && (
          <motion.div
            className="absolute inset-0 w-full h-full flex items-center justify-center pointer-events-none"
            initial={{ scale:4, rotate: 90, opacity: 0 }}
            animate={{
              scale: 1,
              rotate: 360,
              opacity: 1,
            }}
            transition={{
              duration: 2,
              ease: "easeOut",
              opacity: { duration: 0.5 },
            }}
          >
            <img
              src="/images/bird.png"
              alt="Bird Animation"
              className="w-auto h-auto max-w-full max-h-full"
              style={{
                objectFit: "contain",
                filter: "drop-shadow(0 0 10px rgba(0, 0, 0, 0.3))",
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

