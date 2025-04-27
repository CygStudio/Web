"use client"

import { useState, useEffect } from "react"

export type BreakpointType = 'base' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'
export function useMobileViewport() {
  const [viewport, setViewport] = useState<{ width: number; isMobile: boolean; breakpoint: BreakpointType }>({
    width: 0,
    isMobile: false,
    breakpoint: 'base',
  })

  useEffect(() => {
    // 檢查是否為移動設備
    const checkMobile = () => {
      const width = window.innerWidth
      const isMobile = width <= 768
      // 計算 breakpoint
      let bp: BreakpointType = 'base'
      if (width >= 1536) bp = '2xl'
      else if (width >= 1280) bp = 'xl'
      else if (width >= 1024) bp = 'lg'
      else if (width >= 768) bp = 'md'
      else if (width >= 640) bp = 'sm'
      else bp = 'base'
      setViewport({ width, isMobile, breakpoint: bp })
    }

    // 初始檢查
    checkMobile()

    // 監聽視口大小變化
    window.addEventListener("resize", checkMobile)

    // 清理監聽器
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  return viewport
}

