import type React from "react"
import "./globals.css"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "熙歌工作室生日網頁",
  description: "熙歌工作室生日網頁 (Next.js)",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-hant-tw">
      <body className="font-sans bg-[url('/images/慶生背景.jfif')] bg-center bg-cover bg-fixed overflow-x-hidden antialiased">
        {children}
      </body>
    </html>
  )
}
