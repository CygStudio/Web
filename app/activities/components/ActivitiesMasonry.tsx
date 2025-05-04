'use client'

import Image from 'next/image'
import { Masonry, ResponsiveMasonry } from '@/components/Masonry'
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
      className="flex-1">
      {children}
    </motion.div>
  )
}

type Node = {
  type: 'image' | 'twitter' | 'yt'
  group: string
  content: string
}
type Item = {
  name: string
  node: Node[]
}

export default function ActivitiesMasonry() {
  const [items, setItems] = useState<Node[]>([])

  useEffect(() => {
    const fetchData = async () => {
      const items: Item[] = await fetch('https://cygstudio.github.io/asset/activities')
        .then(res => res.json())
        .catch(() => [])

      const allItems = items.flatMap(({ node }: Item) => {
        return node
      })

      setItems(allItems)
    }
    fetchData()
  }, [])

  useEffect(() => {
    if (!items.some(item => item.type === 'twitter')) return

    if (!document.querySelector('script[src="https://platform.twitter.com/widgets.js"]')) {
      const script = document.createElement('script')
      script.src = 'https://platform.twitter.com/widgets.js'
      script.async = true
      script.charset = 'utf-8'
      document.body.appendChild(script)
    }

    const handleResize = () => {
      const twitter = (window as any)?.twttr
      twitter?.widgets?.load?.()
    }
    handleResize()

    // 監聽 resize 事件
    window.addEventListener('resize', handleResize)

    // 清除事件監聽器 和 Twitter 小部件
    return () => {
      window.removeEventListener('resize', handleResize)
      const script = document.querySelector('script[src="https://platform.twitter.com/widgets.js"]')
      if (script) {
        script.parentNode?.removeChild(script)
      }
    }
  }, [items])

  if (items.length === 0) {
    return null
  }

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
            <Card item={item} />
          </FadeInWhenVisible>
        ))}
      </Masonry>
    </ResponsiveMasonry>
  )
}

const Card = ({ item }: { item: Node }) => {
  const ASSET_HOST = 'https://cygstudio.github.io/asset/'

  const Image = () => (
    <img src={ASSET_HOST + item.content} alt={item.group} className="w-full h-auto" />
  )
  const YT = () => (
    <div className="iframe-container" dangerouslySetInnerHTML={{ __html: item.content }} />
  )
  const Twitter = () => <div dangerouslySetInnerHTML={{ __html: item.content }} />

  const Content = () => {
    switch (item.type) {
      case 'image':
        return <Image />
      case 'yt':
        return <YT />
      case 'twitter':
        return <Twitter />
      default:
        return null
    }
  }

  return <Content />
}
