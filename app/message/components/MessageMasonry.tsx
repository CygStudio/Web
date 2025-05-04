'use client'

import { MessageCard, type MarqueeItem } from '@/components/MessageCard'
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry'
import { useEffect, useState } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

function FadeInWhenVisible({ children }: { children: React.ReactNode }) {
  const controls = useAnimation()
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0 })
    }
  }, [controls, inView])

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={controls}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  )
}

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
          <FadeInWhenVisible key={index}>
            <MessageCard item={item} />
          </FadeInWhenVisible>
        ))}
      </Masonry>
    </ResponsiveMasonry>
  )
}
