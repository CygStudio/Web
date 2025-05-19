import React from 'react'
import MessageMasonry from './components/MessageMasonry'
import PonPoker from './components/PonPoker'

export default async function MessagePage() {
  return (
    <>
      <section className="container mx-auto my-8">
        <div className="text-[#293845] text-center flex flex-col gap-4">
          <h1 className="text-4xl font-bold">慶生活動</h1>
          <p className="text-xl font-bold">婚叫留言板</p>
          <p>無論發生任何事情，婚叫們永遠會支持並陪伴在歌的身邊喔~~~</p>
          <div className="flex-1" />
        </div>
        <MessageMasonry />
      </section>

      <section className="container mx-auto my-8 overflow-hidden">
        <h2 className="text-2xl font-bold text-[#293845] text-center my-8">PON哥的婚叫撲克牌</h2>
        <PonPoker />
      </section>
    </>
  )
}
