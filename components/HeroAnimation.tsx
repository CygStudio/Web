'use client'

import { useEffect, useState, useMemo } from 'react'
import { motion } from 'framer-motion'
import { useToggle } from '@reactuses/core'

export default function ImageAnimation() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    // 設置一個短暫的延遲，確保組件已經掛載
    const timer = setTimeout(() => {
      setIsLoaded(true)
    }, 300)

    return () => clearTimeout(timer)
  }, [])

  const [isDark, toggleIsDark] = useToggle(false)

  // 圖片路徑 useMemo 優化
  const maskSrc = useMemo(() => '/animation/mask.webp', [])
  const baseSrc = useMemo(() => (isDark ? '/animation/dark_base.webp' : '/animation/base.webp'), [isDark])
  const pigeonBackSrc = useMemo(() => (isDark ? '/animation/dark_pigeon_back.webp' : '/animation/pigeon_back.webp'), [isDark])
  const featherSrc = useMemo(() => (isDark ? '/animation/dark_feather.webp' : '/animation/feather.webp'), [isDark])
  const pigeonFrontSrc = useMemo(() => (isDark ? '/animation/dark_pigeon_front.webp' : '/animation/pigeon_front.webp'), [isDark])

  // will-change style
  const willChangeStyle = useMemo(() => ({ willChange: 'transform, opacity' }), [])

  return (
    <div className="relative w-full h-screen overflow-hidden" onDoubleClick={toggleIsDark}>
      {/* 容器 - 控制整體縮放 */}
      <motion.div
        className="absolute inset-0 w-full h-full flex items-center justify-center"
        style={willChangeStyle}
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
          style={willChangeStyle}
          initial={{ opacity: 1 }}
          animate={{
            opacity: isLoaded ? 0 : 1,
          }}
          transition={{
            duration: 3,
            ease: 'easeOut',
          }}>
          <img src={maskSrc} alt="Mask Image" className="w-full h-full object-cover" />
        </motion.div>
        {/* 主圖層 */}
        <div className="absolute inset-0 w-full h-full">
          <img
            src={baseSrc}
            alt="Main Image"
            className="w-full h-full object-cover"
          />
        </div>

        {/* 後婚叫 */}
        <motion.div
          className="absolute inset-0 w-full h-full"
          style={willChangeStyle}
          initial={{ y: -50, opacity: 0 }}
          animate={isLoaded ? { y: 0, opacity: 1, x: [0, 5, 0] } : { y: -50, opacity: 0, x: 0 }}
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
            src={pigeonBackSrc}
            alt="Bird Animation"
            className="w-full h-full object-cover"
          />
        </motion.div>
      </motion.div>

      {/* 羽毛 */}
      <motion.div
        className="absolute inset-0 w-full h-full flex items-center justify-center pointer-events-none"
        style={willChangeStyle}
        initial={{ y: -100, opacity: 0 }}
        animate={isLoaded ? { y: 0, opacity: 1, x: [0, 10, 0] } : { y: -100, opacity: 0, x: 0 }}
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
          src={featherSrc}
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
        style={willChangeStyle}
        initial={{ scale: 4, rotate: 90, opacity: 0 }}
        animate={isLoaded ? {
          scale: 1,
          rotate: 360,
          opacity: 1,
          y: [0, 10, 0],
        } : {
          scale: 4,
          rotate: 90,
          opacity: 0,
          y: 0,
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
          src={pigeonFrontSrc}
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
