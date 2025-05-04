'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useCygClick } from '@/hooks/use-cyg-click'

export default function Header() {
  useCygClick()
  const linkList: { href: string; text: string; }[] = [
    {
      href: '/message',
      text: 'Message',
    },
    // {
    //   href: '/film',
    //   text: 'Film',
    // },
    // {
    //   href: '/studio-activities',
    //   text: '工作室活動',
    // },
    // {
    //   href: '/post-credits-scenes',
    //   text: '幕後花絮',
    // },
  ]

  return (
    <motion.header
      className="z-50 fixed top-0 left-0 w-full"
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 2, ease: 'easeOut' }}
    >
      <nav id="home" className="w-full p-2 sm:p-4 bg-gradient-to-t from-transparent to-black">
        <ul className="flex list-none items-center justify-center gap-2 w-fit">
          <li className="flex-1">
            <Link href="/">
              <Image src="/images/icon.webp" alt="cygnus" width={40} height={40} />
            </Link>
          </li>
          {linkList.map((link, index) => (
            <li key={index} className="flex-1 text-center text-xs sm:text-base font-semibold">
              <Link
                className="block text-white no-underline border-l-2 border-white first:border-l-0 hover:bg-red-600/50  text-nowrap p-1 rounded-sm"
                href={link.href}>
                {link.text}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </motion.header>
  )
}
