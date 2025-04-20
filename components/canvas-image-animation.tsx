"use client"

import { useEffect, useRef, useState } from "react"

export default function CanvasImageAnimation() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [scale, setScale] = useState(5)
  const [opacity, setOpacity] = useState(1)
  const [isAnimating, setIsAnimating] = useState(false)
  const mainImageRef = useRef<HTMLImageElement | null>(null)
  const maskImageRef = useRef<HTMLImageElement | null>(null)
  const animationRef = useRef<number | null>(null)

  // 加載圖片
  useEffect(() => {
    const mainImage = new Image()
    mainImage.src = "/images/main.jpeg"
    mainImage.crossOrigin = "anonymous"
    mainImage.onload = () => {
      mainImageRef.current = mainImage
      if (maskImageRef.current) {
        startAnimation()
      }
    }

    const maskImage = new Image()
    maskImage.src = "/images/mask.png"
    maskImage.crossOrigin = "anonymous"
    maskImage.onload = () => {
      maskImageRef.current = maskImage
      if (mainImageRef.current) {
        startAnimation()
      }
    }

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [])

  // 處理視窗大小變化
  useEffect(() => {
    const handleResize = () => {
      if (canvasRef.current) {
        canvasRef.current.width = window.innerWidth
        canvasRef.current.height = window.innerHeight
        drawCanvas()
      }
    }

    window.addEventListener("resize", handleResize)
    handleResize()

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  // 繪製 Canvas
  const drawCanvas = () => {
    const canvas = canvasRef.current
    if (!canvas || !mainImageRef.current || !maskImageRef.current) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const { width, height } = canvas
    ctx.clearRect(0, 0, width, height)

    // 繪製主圖
    drawImageCovered(ctx, mainImageRef.current, 0, 0, width, height, scale)

    // 繪製遮罩圖 (使用 globalCompositeOperation 來實現遮罩效果)
    ctx.globalAlpha = opacity
    ctx.globalCompositeOperation = "source-over"
    drawImageCovered(ctx, maskImageRef.current, 0, 0, width, height, scale)
  }

  // 繪製覆蓋整個區域的圖片 (類似 object-fit: cover)
  const drawImageCovered = (
    ctx: CanvasRenderingContext2D,
    image: HTMLImageElement,
    x: number,
    y: number,
    width: number,
    height: number,
    scale: number,
  ) => {
    const imgRatio = image.width / image.height
    const canvasRatio = width / height

    let drawWidth, drawHeight, offsetX, offsetY

    if (imgRatio > canvasRatio) {
      drawHeight = height
      drawWidth = image.width * (drawHeight / image.height)
      offsetX = (width - drawWidth) / 2
      offsetY = 0
    } else {
      drawWidth = width
      drawHeight = image.height * (drawWidth / image.width)
      offsetX = 0
      offsetY = (height - drawHeight) / 2
    }

    // 應用縮放
    const scaledWidth = drawWidth * scale
    const scaledHeight = drawHeight * scale
    const scaledOffsetX = x + (width - scaledWidth) / 2
    const scaledOffsetY = y + (height - scaledHeight) / 2

    ctx.drawImage(image, scaledOffsetX, scaledOffsetY, scaledWidth, scaledHeight)
  }

  // 開始動畫
  const startAnimation = () => {
    if (isAnimating) return
    setIsAnimating(true)

    const startTime = Date.now()
    const duration = 2500 // 2.5 秒
    const initialScale = 5
    const targetScale = 1
    const initialOpacity = 1
    const targetOpacity = 0

    const animate = () => {
      const currentTime = Date.now()
      const elapsed = currentTime - startTime
      const progress = Math.min(elapsed / duration, 1)

      // 使用 easeOut 緩動函數
      const easeOutProgress = 1 - Math.pow(1 - progress, 2)

      const currentScale = initialScale - (initialScale - targetScale) * easeOutProgress
      const currentOpacity = initialOpacity - (initialOpacity - targetOpacity) * easeOutProgress

      setScale(currentScale)
      setOpacity(currentOpacity)

      if (progress < 1) {
        animationRef.current = requestAnimationFrame(animate)
      }
    }

    animationRef.current = requestAnimationFrame(animate)
  }

  // 當 scale 或 opacity 變化時重繪 Canvas
  useEffect(() => {
    drawCanvas()
  }, [scale, opacity])

  return <canvas ref={canvasRef} className="w-full h-screen" style={{ display: "block" }} />
}

