import { Button } from '@/components/ui/button'
import Link from 'next/link'
import './globals.css'

export default function NotFound() {
  return (
    <div
      className="flex flex-col items-center justify-center h-screen bg-gray-100 text-center px-4 bg-cover"
      style={{ backgroundImage: "url('/images/bg.webp')" }}>
      <h1 className="text-6xl font-bold text-gray-800">404</h1>
      <p className="text-2xl text-gray-600 mb-6">這個頁面跟歌的氣質一樣</p>
      <img src="/images/404.webp" alt="404 Not Found" className="w-1/2 h-auto max-w-xs mx-auto" />
      <p className="text-4xl text-gray-600 my-6 font-bold">不存在</p>
      <Link href="/">
        <Button variant="default" className="bg-rose-600 hover:bg-rose-700 text-white">
          返回首頁
        </Button>
      </Link>
    </div>
  )
}
