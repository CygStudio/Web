'use client'

import { useState, useEffect, type ReactNode } from 'react'
// import { motion } from 'framer-motion'
import { MessageCard, type MarqueeItem } from './MessageCard'

interface InfiniteMarqueeProps {
  items: MarqueeItem[]
  className?: string
}

export default function InfiniteMarquee({ items, className }: InfiniteMarqueeProps) {
  const [firstHalf, setFirstHalf] = useState<MarqueeItem[]>([])
  const [secondHalf, setSecondHalf] = useState<MarqueeItem[]>([])

  // 分割資料
  useEffect(() => {
    if (items.length > 0) {
      const mid = Math.ceil(items.length / 2)
      const first = items.slice(0, mid)
      const second = items.slice(mid)
      if (first.length > second.length) {
        second.push(first[first.length - 1])
        first.pop()
      } else if (second.length > first.length) {
        first.push(second[second.length - 1])
        second.pop()
      }
      setFirstHalf(first)
      setSecondHalf(second)
    }
  }, [items])

  return (
    <div className={`!h-screen relative ${className}`}>
      {/* 桌面版和平板版：兩個跑馬燈 */}
      <div className="hidden sm:flex h-full">
        {/* 左側跑馬燈（向上滾動） */}
        <div className="w-1/2 h-full overflow-hidden">
          <div className="flex flex-col gap-4 animate-marquee-up hover:[animation-play-state:paused]">
            <Duplicate>
              {firstHalf.map(item => (
                <MessageCard key={`${item.name}-${item.date}`} item={item} />
              ))}
            </Duplicate>
          </div>
        </div>

        {/* 右側跑馬燈（向下滾動） */}
        <div className="w-1/2 h-full overflow-hidden">
          <div className="flex flex-col gap-4 animate-marquee-down hover:[animation-play-state:paused]">
            <Duplicate>
              {secondHalf.map(item => (
                <MessageCard key={`${item.name}-${item.date}`} item={item} />
              ))}
            </Duplicate>
          </div>
        </div>
      </div>

      {/* 手機版：單一跑馬燈 */}
      <div className="sm:hidden w-full h-full overflow-hidden">
        <div className="flex flex-col items-center gap-4 py-4 animate-marquee-up hover:[animation-play-state:paused]">
          <Duplicate>
            {firstHalf.map(item => (
              <MessageCard key={`repeat-${item.date}`} item={item} />
            ))}
          </Duplicate>
        </div>
      </div>
    </div>
  )
}

export function Duplicate({ children }: { children: ReactNode }) {
  return (
    <>
      {children}
      {children}
    </>
  )
}
