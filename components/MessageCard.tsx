'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import StrokeText from '@/components/StrokeText'

export interface MarqueeItem {
  date: string
  name: string
  avatar: string
  type: string
  message: string
  image: string
}

const ASSET_HOST = 'https://cygstudio.github.io/asset/'

export function MessageCard({ item }: { item: MarqueeItem }) {
  const [isRead, setIsRead] = useState(false)

  const readClass = isRead ? 'opacity-50' : 'opacity-100'
  return (
    <div className={'relative flex flex-col mx-4 mb-12 max-w-md cursor-pointer ' + readClass}>
      {item.message && (
        <>
          {/* 上方鳥圖片 */}
          <div className="relative -mb-1">
            <img src="/images/bird.webp" alt="Bird" className="w-56 h-auto mx-auto" />
          </div>

          {/* 對話框 */}
          <div className="relative p-1 bg-white rounded-2xl">
            <div className="bg-white rounded-2xl border-4 border-rose-500 p-3 flex items-center justify-center">
              <p className="text-sm font-semibold whitespace-pre-wrap">{item.message}</p>

              {/* 右下角金蛋 */}
              <div className="absolute bottom-[-30px] right-[-10px]">
                <img src="/images/egg.webp" alt="Golden Eggs" className="w-16 h-auto" />
              </div>
            </div>
          </div>
        </>
      )}

      {item.image && (
        <div className="relative mt-2">
          <Image width={500} height={500} src={ASSET_HOST + item.image} alt="Message Image" className="w-full h-auto" />
        </div>
      )}

      {/* 底部用戶資訊 */}
      <div
        className="flex items-center justify-center mt-2"
        onClick={() => setIsRead(_isRead => !_isRead)}>
        {/* 頭像 */}
        <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center mr-3 overflow-hidden shrink-0">
          <Image src={ASSET_HOST + item.avatar} alt={item.name} width={48} height={48} />
        </div>

        {/* 用戶名 */}
        <div className="text-lg font-bold text-black">
          <StrokeText text={item.name} strokeColor="white" textColor="black" />
        </div>
      </div>
    </div>
  )
}
