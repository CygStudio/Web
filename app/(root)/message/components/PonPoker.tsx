'use client'

import { Swiper, SwiperSlide, type SwiperProps } from 'swiper/react'
import { Navigation, Pagination, EffectCards, Mousewheel } from 'swiper/modules'
import React, { useState, useRef, useEffect } from 'react'
import Image from 'next/image'

import 'swiper/css'
import 'swiper/css/effect-cards'
import 'swiper/css/mousewheel'

const swiperParameters: SwiperProps = {
  modules: [EffectCards, Mousewheel, Navigation],
  effect: 'cards',
  grabCursor: true,
  initialSlide: 2,
  speed: 500,
  loop: false,
  mousewheel: {
    invert: false,
  },
  allowTouchMove: true,
  cardsEffect: {
    perSlideOffset: 50,
    perSlideRotate: 10,
    rotate: true,
    slideShadows: false, // 關閉卡片陰影效果
  },
  slidesPerView: 2,
  breakpoints: {
    640: {
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 5,
    },
  },
}

const ASSET_HOST = 'https://cygstudio.github.io/asset/message/poker'
const PokerSwiper = () => {
  const [items, setItems] = useState<string[]>([])

  useEffect(() => {
    const fetchData = async () => {
      const items: string[] = await fetch('https://cygstudio.github.io/asset/message/poker')
        .then(res => res.json())
        .catch(() => [])

      setItems(items)
    }
    fetchData()
  }, [])

  return (
    <Swiper {...swiperParameters} spaceBetween={20} className="h-96 mb-12">
      {items.map((img, index) => (
        <SwiperSlide key={img}>
          <div className="w-full h-full aspect-[784/1024] rounded-3xl">
            <Image
              src={`${ASSET_HOST}/${img}`}
              alt="youtube"
              width={784}
              height={1024}
              className="rounded-lg object-contain object-center"
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

export default PokerSwiper
