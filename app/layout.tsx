import './globals.css'
import type React from 'react'
import type { Metadata } from 'next'

import { ClientHooks } from '@/components/ClientHooks'
import clsx from 'clsx'

export const metadata: Metadata = {
  title: '熙歌工作室慶生網頁 | 404',
  description: '跟氣質一起消失的頁面',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-hant-tw">
      <body className="font-sans overflow-x-hidden">
        <ClientHooks />
        <main>{children}</main>
      </body>
    </html>
  )
}
