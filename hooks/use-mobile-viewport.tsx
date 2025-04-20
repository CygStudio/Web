"use client"

import { useState, useEffect } from "react"

export function useMobileViewport() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    // 檢查是否為移動設備
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768)
    }

    // 初始檢查
    checkMobile()

    // 監聽視口大小變化
    window.addEventListener("resize", checkMobile)

    // 清理監聽器
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  return isMobile
}

