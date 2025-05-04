'use client'

import { MessageCard, type MarqueeItem } from '@/components/MessageCard'
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry'
import { useEffect, useState } from 'react'

export default function MessageMasonry() {
  const [items, setItems] = useState<MarqueeItem[]>([])

  useEffect(() => {
    const fetchData = async () => {
      const items = await fetch('https://cygstudio.github.io/asset/message')
        .then(res => res.json())
        .catch(() => null)

      setItems(items)
    }
    fetchData()
  }, [])

  const ASSET_HOST = 'https://cygstudio.github.io/asset/'

  return (
    <ResponsiveMasonry
      columnsCountBreakPoints={{
        640: 2, // Tailwind's `sm`
        768: 3, // Tailwind's `md`
        1024: 4, // Tailwind's `lg`
      }}>
      <Masonry gutter="2rem">
        {items.map((item, index) => (
          <MessageCard key={index} item={item} />
        ))}
      </Masonry>
    </ResponsiveMasonry>
  )
}
