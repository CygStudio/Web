'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function ImageAnimation({ onFinish }: { onFinish?: () => void }) {
  const [isLoaded, setIsLoaded] = useState(false)
  const [showPigeonAnimation, setShowPigeonAnimation] = useState(false)

  useEffect(() => {
    // 設置一個短暫的延遲，確保組件已經掛載
    const timer = setTimeout(() => {
      setIsLoaded(true)
    }, 100)

    return () => clearTimeout(timer)
  }, [])

  // 婚叫動畫延遲 2 秒開始
  useEffect(() => {
    if (isLoaded) {
      const timer = setTimeout(() => {
        setShowPigeonAnimation(true)
      }, 2000)

      return () => clearTimeout(timer)
    }
  }, [isLoaded])

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* 容器 - 控制整體縮放 */}
      <motion.div
        className="absolute inset-0 w-full h-full flex items-center justify-center"
        initial={{ scale: 3, y: '20%' }}
        animate={{
          scale: isLoaded ? 1 : 3,
          y: isLoaded ? 0 : '20%',
        }}
        transition={{
          duration: 3,
          ease: 'easeOut',
        }}>
        {/* 遮罩圖層 */}
        <motion.div
          className="absolute inset-0 w-full h-full bg-black z-10"
          initial={{ opacity: 1 }}
          animate={{
            opacity: isLoaded ? 0 : 1,
          }}
          transition={{
            duration: 3,
            ease: 'easeOut',
          }}
          onAnimationComplete={() => {
            if (onFinish) onFinish()
          }}>
          <img src="/animation/mask.webp" alt="Mask Image" className="w-full h-full object-cover" />
        </motion.div>
        {/* 主圖層 */}
        <div className="absolute inset-0 w-full h-full">
          <img src="/animation/base.webp" alt="Main Image" className="w-full h-full object-cover" />
        </div>

        {/* 後婚叫 */}
        <motion.div
          className="absolute inset-0 w-full h-full"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1, x: [0, 5, 0] }}
          transition={{
            duration: 4,
            ease: 'easeOut',
            x: {
              repeat: Infinity, // 無限循環
              duration: 5, // 晃動速度
              ease: 'easeInOut',
            },
          }}>
          <img
            src="/animation/pigeon_back.webp"
            alt="Bird Animation"
            className="w-full h-full object-cover"
          />
        </motion.div>
      </motion.div>

      {/* 婚叫動畫 */}

      {/* 羽毛 */}
      <motion.div
        className="absolute inset-0 w-full h-full flex items-center justify-center pointer-events-none"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1, x: [0, 10, 0] }}
        transition={{
          delay: 2,
          duration: 4,
          ease: 'easeOut',
          x: {
            repeat: Infinity, // 無限循環
            duration: 3, // 晃動速度
            ease: 'easeInOut',
          },
        }}>
        <img
          src="/animation/feather.webp"
          alt="Bird Animation"
          className="w-auto h-auto max-w-full max-h-full"
          style={{
            objectFit: 'contain',
            filter: 'drop-shadow(0 0 10px rgba(0, 0, 0, 0.3))',
          }}
        />
      </motion.div>
      {/* 前婚叫 */}
      <motion.div
        className="absolute inset-0 w-full h-full flex items-center justify-center pointer-events-none"
        initial={{ scale: 4, rotate: 90, opacity: 0 }}
        animate={{
          scale: 1,
          rotate: 360,
          opacity: 1,
          y: [0, 10, 0],
        }}
        transition={{
          delay: 2,
          duration: 2,
          ease: 'easeOut',
          y: {
            repeat: Infinity, // 無限循環
            duration: 3, // 晃動速度
            ease: 'easeInOut',
          },
        }}>
        <img
          src="/animation/pigeon_front.webp"
          alt="Bird Animation"
          className="w-auto h-auto max-w-full max-h-full -ml-[10%] -mb-[15%]"
          style={{
            objectFit: 'contain',
            filter: 'drop-shadow(0 0 10px rgba(0, 0, 0, 0.3))',
          }}
        />
      </motion.div>
    </div>
  )
}
