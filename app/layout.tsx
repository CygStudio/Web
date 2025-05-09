import type React from 'react'
import './globals.css'
import type { Metadata } from 'next'

import Header from '@/app/components/Header'
import Banner from '@/app/components/Banner'
import FootMarquee from '@/app/components/FootMarquee'
import Footer from '@/app/components/Footer'
import GoTop from '@/components/GoTop'

export const metadata: Metadata = {
  title: '熙歌工作室慶生網頁',
  description: '熙歌工作室慶生網頁',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-hant-tw">
        <body className="font-sans overflow-x-hidden antialiased">
        <div
          className="fixed top-0 left-0 w-full h-full -z-10 bg-center bg-cover"
          style={{ backgroundImage: "url('/images/bg.webp')" }}
        />
        <Header />
        <Banner />
        <main>{children}</main>
        <FootMarquee />
        <Footer />
        <GoTop />
      </body>
    </html>
  )
}
