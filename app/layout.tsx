import type React from 'react'
import './globals.css'
import type { Metadata } from 'next'

import Banner from '@/app/components/Banner'

export const metadata: Metadata = {
  title: '熙歌工作室慶生網頁',
  description: '熙歌工作室慶生網頁',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-hant-tw">
      <body className="font-sans bg-center bg-cover bg-fixed overflow-x-hidden antialiased" style={{ backgroundImage: "url('/images/bg.webp')" }}>
        <Banner />
        {children}
      </body>
    </html>
  )
}
