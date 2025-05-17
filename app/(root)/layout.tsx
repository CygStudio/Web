import '@/app/globals.css'
import type React from 'react'
import type { Metadata } from 'next'

import Header from '@/app/(root)/components/Header'
import Banner from '@/app/(root)/components/Banner'
import FootMarquee from '@/app/(root)/components/FootMarquee'
import Footer from '@/app/(root)/components/Footer'
import GoTop from '@/components/GoTop'
import { ClientHooks } from '@/components/ClientHooks'
import clsx from 'clsx'

export const metadata: Metadata = {
  title: '2025 熙歌工作室慶生網頁',
  description: '熙歌工作室 2025 隆重鉅獻，歡迎加入婚叫溫暖的大家庭',
  icons: {
    icon: '/images/icon.webp'
  },
  openGraph: {
    images: '/images/QC.webp'
  }
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-hant-tw">
      <body className="font-sans overflow-x-hidden antialiased">
        <ClientHooks />
        <Header />
        <Banner />
        <main
          className={
            clsx('relative')
          }>
          <div
            className="sticky top-0 w-screen h-screen bg-center bg-cover -mb-[100dvh]"
            style={{ backgroundImage: "url('/images/bg.webp')" }}
          />
          <div className="relative">{children}</div>
        </main>
        <FootMarquee />
        <Footer />
        <GoTop />
      </body>
    </html>
  )
}
